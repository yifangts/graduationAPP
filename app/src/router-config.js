import Other from './components/Other.vue'
import Other2 from './components/Other2.vue'
import Home from './components/Home.vue'
import Index from './components/Index.vue'






export default {
    routes:[
		{path:'/other', component:Other},
		{path:'/other2', component:Other2},
		{path:'/home', component:Home},
		{path:'/', component:Index}

	]
}