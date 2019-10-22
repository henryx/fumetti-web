<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Aggiungi albo</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                                <v-select label="Serie*" :items="serieItems" required></v-select>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field label="Numero*" type="number" @keypress="isNumber" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-menu v-model="dateMenu"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        lazy
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                            v-model="date"
                                            label="Data di pubblicazione"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" @input="dateMenu = false"></v-date-picker>
                                </v-menu>
                            </v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field class="right-input" label="Prezzo*" required type="number" @keypress="isNumber"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md2>
                                <v-select label="Valuta*" :items="valutaItems" required></v-select>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-select label="Rilegatura*" :items="rilItems" required></v-select>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-select label="Conservazione*" :items="statusItems" required></v-select>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Note"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
import serie from "../api/serie";
import lookup from "../api/lookup";

    export default {
        data: () => ({
            dateMenu: false,
            date: new Date().toISOString().substr(0, 10),
            dialog: false,
            serieItems: [],
            rilItems: [],
            statusItems: [],
            valutaItems: []
        }),
        methods: {
            init() {
                this.serieItems = [];
                this.valutaItems = [];
                
                this.populateSerie();
                this.populateValuta();
            },
            saveAlbo() {
                this.dialog = false
            },
            isNumber: function(evt) {
                evt = (evt) ? evt : window.event;
                let charCode = (evt.which) ? evt.which : evt.keyCode;

                if (charCode === 46) {
                    return true;
                }

                if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 9)) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
            Show() {
                this.dialog = true
            },
            populateSerie() {
                let self = this;

                serie.getSerie()
                    .then(r => {
                        // TODO: validate returned values;
                        if (r.data.op === "ok") {
                            for (let item of r.data.data) {
                                self.serieItems.push({text: item.name, value: item.id});
                            }
                        }
                    })
                    .catch(e => {
                    });
            },
            populateValuta() {
                let self = this

                lookup.getValuta()
                    .then(r => {
                        // TODO: validate returned values;
                        if (r.data.op === "ok") {
                            for (let item of r.data.data) {
                                self.valutaItems.push({text: item.name, value: item.id});
                            }
                        }
                    })
                    .catch(e => {
                    });
            },
        },
        mounted() {
            this.init()
        }
    }
</script>

<style scoped>
    .right-input input {
        text-align: right
    }
</style>