import Animal from './components/Animal.vue'
import Plant from './components/Plant.vue'
import Human from './components/Human.vue'
import Index from './components/Index.vue'
import IndexNew from './components/IndexNews.vue'
import AnimalExper from './components/AnimalExper.vue'
import PlantExper from './components/PlantExper.vue'
import HumanExper from './components/HumanExper.vue'

export default {
    routes:[
		{path:'/animal', component:Animal,
            children:[{path:'exper/:index',component:AnimalExper}
                     ]
		},
		{path:'/plant', component:Plant,
            children:[{path:'exper/:index',component:PlantExper}
            ]
		},
		{path:'/human', component:Human,
            children:[{path:'exper/:index',component:HumanExper}
            ]
		},
		{path:'/index', component:Index,
            children:[{path:'news/:index',component:IndexNew}
                     ]
		},
        {path:'*',redirect:'/index'}

	]
}
