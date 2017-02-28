import Animal from './components/Animal.vue'
import Plant from './components/Plant.vue'
import Human from './components/Human.vue'
import Index from './components/Index.vue'
import IndexNew1 from './components/IndexNews1.vue'
import IndexNew2 from './components/IndexNews2.vue'
import IndexNew3 from './components/IndexNews3.vue'




export default {
    routes:[
		{path:'/animal', component:Animal},
		{path:'/plant', component:Plant},
		{path:'/human', component:Human},
		{path:'/index', component:Index,
            children:[{path:'news1',component:IndexNew1},
                      {path:'news2',component:IndexNew2},
                      {path:'news3',component:IndexNew3}
                     ]
		},
        {path:'*',redirect:'/index'}

	]
}
