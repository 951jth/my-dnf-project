// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import moment from 'moment';
import VueMoment from 'vue-moment';
import VueMomentJS from 'vue-momentjs';
import 'vuetify/dist/vuetify.min.css';
import '@/assets/css/common.css';
import Vuex from 'vuex'
import Axiosplugin from 'vue-axios-cors'
//import { routeTo } from '@/utils/util.js';

const vuetifyOptions = { }
Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueMomentJS, moment);
Vue.use(Vuex);
Vue.use(Axiosplugin);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(vuetifyOptions),
  router,
  components: { App },
  template: '<App/>'
})
