<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex>
                <v-card>
                    <v-card-title><h1>Home Page!</h1></v-card-title>
                    <v-card-text>Benvenuto!</v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="goToSearch">
                            <v-icon>fas fa-search</v-icon>
                            Ricerca
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            goToSearch: function () {
                this.$router.push({name: "FUMETTI_ALBI"})
            }
        }
    }
</script>

<style scoped>

</style>