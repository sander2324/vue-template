import Vue from 'vue';

import '../scss/index.scss';

import App from './App.vue';


Vue.config.productionTip = false;

window.app = new Vue({
  el: '#root',
  components: { App },
  template: '<App/>',
  render: (h) => h(App),
});
