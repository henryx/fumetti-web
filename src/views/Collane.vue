<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex xs12>
        <h1>Collane</h1>
      </v-flex>
      <v-flex xs12 md6>
        <v-card>
          <v-card-title>Editore:</v-card-title>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs9 grow>
                <v-text-field
                  clearable
                  persistent_hint
                  label="Casa editrice"
                  v-model="editore"
                  :readonly="working"
                ></v-text-field>
              </v-flex>
              <v-flex xs3 shrink class="text-xs-right">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="searchEditore" :loading="working">
                    <v-icon>fas fa-search</v-icon>Cerca
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-card-text style="height: 100px; position: relative">
        <v-btn absolute dark small fab top right color="pink" @click="openAddCollaneDialog">
          <v-icon>fa fa-plus</v-icon>
        </v-btn>
      </v-card-text>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue';

import collaneDialog from "../components/CollaneDialog";

export default {
  name: "Collane",
  data() {
    return {
      editore: "",
      working: false,
    }
  },
  methods: {
    searchEditore: function() {
      // TODO: search editore
    },
    openAddCollaneDialog: function () {
      let componentClass = Vue.extend(collaneDialog);
      let dialog = new componentClass();

      dialog.$mount();
      dialog.Show("add");
    }
  }
};
</script>

<style scoped>
</style>