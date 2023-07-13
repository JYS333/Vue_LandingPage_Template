import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store";


import ElementUI from 'element-ui';
import "./theme/index.css"; // 自定义主题后下载的文件（主要是颜色更改）
// import 'element-ui/lib/theme-chalk/index.css'; // 默认elementui主题
import './styles/index.scss' // import basic elemetui style 包含字体类型等
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
