<template>
    <v-container fluid grid-list-md>
        <v-layout wrap>
            <v-flex xs12>
                <h1>Albi</h1>
            </v-flex>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-title>Serie:</v-card-title>
                    <v-card-text>
                        <v-layout wrap>
                            <v-flex xs9 grow>
                                <v-text-field clearable
                                              persistent_hint
                                              label="Nome serie"
                                              v-model="serie"
                                              :readonly="working"
                                >
                                </v-text-field>
                            </v-flex>
                            <v-flex xs3 shrink class="text-xs-right">
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary"
                                           @click="searchSerie"
                                           :loading="working"
                                    >
                                        <v-icon>fas fa-search</v-icon>
                                        Cerca
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-title></v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-data-table
                                :headers="headers"
                                :items="items"
                                class="elevation-1"
                        ></v-data-table>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-title></v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-label>{{ result }}</v-label>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-card-text style="height: 100px; position: relative">
                <v-btn absolute
                       dark
                       small
                       fab
                       top
                       right
                       color="pink"
                       @click="openAddAlbiDialog"
                >
                    <v-icon>fa fa-plus</v-icon>
                </v-btn>
            </v-card-text>
        </v-layout>
    </v-container>
</template>

<script>
    import Vue from 'vue'

    import albi from "../api/albi"
    import albiDialog from "../components/AlbiDialog"

    export default {
        name: "Albi",
        data() {
            return {
                headers: [
                    {text: "Nome", align: "left", sortable: false, value: "name"},
                    {text: "Collana", align: "left", sortable: false, value: "series"},
                    {text: "Stato", align: "left", sortable: false, value: "status"},
                    {text: "Albi", align: "left", sortable: false, value: "issues"},
                ],
                items: [],
                serie: "",
                result: "",
                working: false
            }
        },
        methods: {
            openAddAlbiDialog: function () {
                let componentClass = Vue.extend(albiDialog);
                let dialog = new componentClass();

                dialog.$mount();
                dialog.Show("add");
            },
            searchSerie: function () {
                let self = this;
                this.working = true;
                albi.getAlbiBySerie(this.serie)
                    .then(r => {
                        let result = r.data;
                        self.result = result.message;
                    })
                    .catch(e => {
                        console.log(e);
                    })
                    .finally(() => {
                        this.working = false;
                    })
            }
        }
    }
</script>

<style scoped>

</style>