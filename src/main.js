import 'whatwg-fetch';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import App from './App';
import routes from './routes';
import { state, actions, mutations } from './store';

Vue.config.devtools = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

const store = new Vuex.Store({
  state,
  actions,
  mutations
});

sync(store, router);

/* eslint-disable no-new */
const app = new Vue({
  store,
  router,
  render: h => h(App)
});

app.$mount('#app');
