//http://mint-ui.github.io/docs/#!/zh-cn2   mint-ui  API
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Ev from './event'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './css/basestyle.css'
import './css/index.css'
import './css/panel.css'
import App from './App.vue'
import routerConfig from './router-config'
// import './components'
import newsPanel from './components/NewsPanel.vue'
Vue.component("my-panel", newsPanel);


Vue.use(Mint)
Vue.use(VueRouter);
const router=new VueRouter(routerConfig);
var vm=new Vue({
	router,
  	el: '#app',
    data:{
        land:""
    },
    methods:{

    },
  	render: h => h(App)
})
