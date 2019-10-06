<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="goToHome">
          <v-list-tile-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="gotToAlbi">
          <v-list-tile-action>
            <v-icon>fas fa-arrow-alt-circle-right</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Albi</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"><v-icon>fas fa-bars</v-icon></v-toolbar-side-icon>
      <v-toolbar-title>Fumetti</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
            <router-view/>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },

        data: () => ({
            drawer: null,
        }),
      methods: {
        goToHome: function () {
          this.$router.push({name: "FUMETTI_HOME"})
        },
        gotToAlbi: function () {
          this.$router.push({name: "FUMETTI_ALBI"})
        }
      }
    }
</script>