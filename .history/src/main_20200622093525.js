import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';
import { Search } from 'vant';
import { Lazyload } from 'vant';
import { PullRefresh } from 'vant';
import { Icon } from 'vant';
import { Form } from 'vant';





Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Search);
Vue.use(Dialog);
Vue.use(Lazyload);
Vue.use(PullRefresh);
Vue.use(Icon);
Vue.use(Form);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
