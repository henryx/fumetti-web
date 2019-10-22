import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router';
import VueRouter from "vue-router";

import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons/iconfont/material-icons.css'
import 'vuetify/dist/vuetify.min.css';

import 'typeface-roboto/index.css'

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use((VueRouter));

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
