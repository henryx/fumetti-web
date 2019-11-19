<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">{{titleDialog}}</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="data.name" label="Nome*" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-select v-model="data.collana" label="Collana*" :items="collanaItems"
                                          required></v-select>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-select v-model="data.status_serie" label="Stato*" :items="statusItems"
                                          required></v-select>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-select v-model="data.periodicita" label="Periodicità*" :items="freqItems"
                                          required></v-select>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-select v-model="data.genere" label="Genere*" :items="genereItems"
                                          required></v-select>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="data.note" label="Note"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="saveSerie">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>

    export default {
        data: () => ({
            dateMenu: false,
            dialog: false,
            action: "",
            collanaItems: [],
            statusItems: [],
            freqItems: [],
            genereItems: [],
            data: {
                name: "",
                note: "",
                collana: "",
                status_serie: "",
                periodicita: "",
                genere: ""
            }
        }),
        computed: {
            titleDialog() {
                if (this.action === "add") {
                    return "Aggiungi serie";
                } else {
                    return "Modifica serie";
                }
            }
        },
        methods: {
            init() {
                // TODO: init dialog's items
            },
            saveSerie() {
                // TODO: get POST to backend with data
            },
            Show(action) {
                this.dialog = true;
                this.action = action;
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