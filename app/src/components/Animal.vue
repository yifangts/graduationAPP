<template>
	<div>
        <mt-header :title="$route.path.split('/').length>2?panelClick.title:'动物'" fixed>
            <router-link to="/animal" slot="left" v-show="$route.path!='/animal'">
                <mt-button icon="back" @click="panelClick.count--">返回</mt-button>
            </router-link>
        </mt-header>
        <router-view :panelClick="panelClick">

        </router-view>
        <div class="content" v-show="$route.path==='/animal'">
            <my-panel :panelArray="aniExperiments" :panelClick="panelClick"></my-panel>
        </div>
	</div>
</template>
<script>

    export default{
	    name:"animal",
		data(){
			return {
				value:'',
                aniExperiments:[
                    {
                        href:"/animal/exper/0",
                        imgSrc:"/src/images/animal/exper1.jpg",
                        newsTitle:"光对鼠妇生活的影响",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/1",
                        imgSrc:"/src/images/animal/exper2.jpg",
                        newsTitle:"观察草履虫",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/2",
                        imgSrc:"/src/images/animal/exper3.jpg",
                        newsTitle:"观察家畜小肠的内部结构",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/3",
                        imgSrc:"/src/images/animal/exper4.jpg",
                        newsTitle:"观察小鱼尾鳍内血液的流动",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/4",
                        imgSrc:"/src/images/animal/exper5.jpg",
                        newsTitle:"探究鱼鳍在游泳中的作用",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/5",
                        imgSrc:"/src/images/animal/exper6.jpg",
                        newsTitle:"饲养和观察蚯蚓",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/6",
                        imgSrc:"/src/images/animal/exper7.jpg",
                        newsTitle:"探究鸟适于飞行的特点",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/7",
                        imgSrc:"/src/images/animal/exper8.jpg",
                        newsTitle:"菜青虫的取食行为",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/8",
                        imgSrc:"/src/images/animal/exper9.jpg",
                        newsTitle:"探究动物的绕道取食行为",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/9",
                        imgSrc:"/src/images/animal/exper10.jpg",
                        newsTitle:"蚂蚁的通讯",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/10",
                        imgSrc:"/src/images/animal/exper11.jpg",
                        newsTitle:"观察鱼的呼吸",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/11",
                        imgSrc:"/src/images/animal/exper12.jpg",
                        newsTitle:"观察家兔",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/12",
                        imgSrc:"/src/images/animal/exper13.jpg",
                        newsTitle:"观察蝗虫精母细胞减数分裂固定装片",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/animal/exper/13",
                        imgSrc:"/src/images/animal/exper14.jpg",
                        newsTitle:"土壤中小动物类群丰富度的研究",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    }
                ]
			}
		},
		methods:{

		},
        props:["panelClick"]
	}
</script>
