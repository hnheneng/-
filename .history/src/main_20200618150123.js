import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';

Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(Vant);

Vue.use(Dialog);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
