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
                                <v-select v-model="data.editore" label="Editore*" :items="editoreItems"
                                          required></v-select>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="saveCollana">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import editore from "../api/editore";
    import collane from '../api/collane';

export default {
        data: () => ({
            action: "",
            dialog: false,
            editoreItems: [],
            data: {
                name: "",
                editore: ""
            }
        }),
        computed: {
            titleDialog() {
                if (this.action === "add") {
                    return "Aggiungi collana";
                } else {
                    return "Modifica collana";
                }
            }
        },
        methods: {
            init() {
                // TODO: init dialog's items
                this.editoreItems = [];

                this.populateEditore();
            },
            populateEditore() {
                let self = this;

                editore.getEditore()
                    .then(r => {
                        if (r.data.op === "ok") {
                            for (let item of r.data.data) {
                                self.collanaItems.push({text: item.name, value: item.id});
                            }
                        }
                    });
            },
            saveCollana() {
                 let self = this;

                collane.postCollane(this.data)
                    .then(() => {
                        self.dialog = false;
                    })
                    .catch(() => {
                        // TODO: manage exception if POST fails
                    });
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