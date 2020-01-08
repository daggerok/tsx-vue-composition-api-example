import Vue from 'vue';
import App from './App';
import store from './store';
import VueCompositionApi from '@vue/composition-api';
import './webfontloader';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
