// import Animal from './components/Animal.vue'
// import Plant from './components/Plant.vue'
// import Human from './components/Human.vue'
// import Index from './components/Index.vue'
// import IndexNew from './components/IndexNews.vue'
import AnimalExper from './components/AnimalExper.vue'
import AnimalExper0 from './components/AnimalExper0.vue'
import PlantExper from './components/PlantExper.vue'
import HumanExper from './components/HumanExper.vue'
import IndexNews1 from './components/IndexNews1.vue'
import IndexNews2 from './components/IndexNews2.vue'
import IndexNews3 from './components/IndexNews3.vue'
import IndexNews4 from './components/IndexNews4.vue'
const Index = resolve => require(['./components/Index.vue'], resolve)
const Human = resolve => require(['./components/Human.vue'], resolve)
const Plant = resolve => require(['./components/Plant.vue'], resolve)
const Animal = resolve => require(['./components/Animal.vue'], resolve)
// const AnimalExper0 = resolve => require(['./components/AnimalExper0.vue'], resolve)
// const IndexNews1 = resolve => require(['./components/IndexNews1.vue'], resolve)
// const IndexNew = resolve => require(['./components/IndexNews.vue'], resolve)
// const AnimalExper = resolve => require(['./components/AnimalExper.vue'], resolve)
// const PlantExper = resolve => require(['./components/PlantExper.vue'], resolve)
// const HumanExper = resolve => require(['./components/HumanExper.vue'], resolve)


export default {
    routes:[
		{path:'/animal', component:Animal,
            children:[
                {path:'exper/ciji',component:AnimalExper0},
                {path:'exper/:index',component:AnimalExper}
                     ]
		},
		{path:'/plant', component:Plant,
            children:[
                {path:'exper/:index',component:PlantExper}
            ]
		},
		{path:'/human', component:Human,
            children:[{path:'exper/:index',component:HumanExper}
            ]
		},
		{path:'/index', component:Index,
            children:[
                {path:'news/1',component:IndexNews1},
                {path:'news/2',component:IndexNews2},
                {path:'news/4',component:IndexNews4},
                {path:'news/3',component:IndexNews3}
                     ]
		},
        {path:'*',redirect:'/index'}

	]
}
