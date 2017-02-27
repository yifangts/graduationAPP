//http://mint-ui.github.io/docs/#!/zh-cn2   mint-ui  API
import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './css/common.css'
import App from './App.vue'
import routerConfig from './router-config'


Vue.use(Mint);
Vue.use(VueRouter);

const router=new VueRouter(routerConfig);

new Vue({
	router,
  	el: '#app',
  	render: h => h(App)
})
