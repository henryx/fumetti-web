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
                                <v-text-field label="Numero" type="number" @keypress="isNumber"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field label="Prezzo*" required type="number" @keypress="isNumber"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field label="Valuta*" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-select
                                        :items="['0-17', '18-29', '30-54', '54+']"
                                        label="Age*"
                                        required
                                ></v-select>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-autocomplete
                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                        label="Interests"
                                        multiple
                                ></v-autocomplete>
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
    export default {
        data: () => ({
            dialog: false,
            items: ['0-17', '18-29', '30-54', '54+'],
            serieItems: [],
        }),
        methods: {
            saveAlbo() {
                this.dialog = false
            },
            isNumber: function(evt) {
                evt = (evt) ? evt : window.event;
                let charCode = (evt.which) ? evt.which : evt.keyCode;

                if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 9)) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
            Show() {
                this.dialog = true
            }
        }
    }
</script>