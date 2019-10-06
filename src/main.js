import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router';
import VueRouter from "vue-router";
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use((VueRouter));

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
