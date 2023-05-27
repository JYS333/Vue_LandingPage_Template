import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/display.css'
import './styles/index.scss' // import basic elemetui style
Vue.use(ElementUI);
// import '@/mock/mockServe'; // use mockjs

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard); // 引入剪切板

import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;

import API from '@/api'; // import all apis and load them on Vue prototype
Vue.prototype.$API = API; // then you can use it anywhere by coding this.$API.xxx

// import global components
import Navigator from '@/components/Navigator/Navigator.vue';
import Footer from '@/components/Footer/Footer';
Vue.component(Navigator.name, Navigator);
Vue.component(Footer.name, Footer);
// Vue.config.productionTip = false



export default new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
