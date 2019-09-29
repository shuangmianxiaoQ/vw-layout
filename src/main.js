// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import hacks from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks';

viewportUnitsBuggyfill.init({ hacks });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
