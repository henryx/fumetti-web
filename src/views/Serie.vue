<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex xs12>
        <h1>Serie</h1>
      </v-flex>
      <v-flex xs12 md6>
        <v-card>
          <v-card-title>Collana:</v-card-title>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs9 grow>
                <v-text-field
                  clearable
                  persistent_hint
                  label="Nome collana"
                  v-model="collana"
                  :readonly="working"
                ></v-text-field>
              </v-flex>
              <v-flex xs3 shrink class="text-xs-right">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="searchCollana" :loading="working">
                    <v-icon>fas fa-search</v-icon>Cerca
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-card-text style="height: 100px; position: relative">
        <v-btn absolute dark small fab top right color="pink" @click="openAddSerieDialog">
          <v-icon>fa fa-plus</v-icon>
        </v-btn>
      </v-card-text>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue';

import serieDialog from "../components/SerieDialog";

export default {
  name: "Serie",
  data() {
    return {
      collana: "",
      working: false,
    }
  },
  methods: {
    searchCollana: function() {
      // TODO: search collana
    },
    openAddSerieDialog: function () {
      let componentClass = Vue.extend(serieDialog);
      let dialog = new componentClass();

      dialog.$mount();
      dialog.Show("add");
    }
  }
};
</script>

<style scoped>
</style>