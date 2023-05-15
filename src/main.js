import 'normalize.css/normalize.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueTypedJs from 'vue-typed-js'

import './styles/index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(VueTypedJs)
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
