<template>
	<div>
        <mt-header :title="$route.path.split('/').length>2?panelClick.title:'植物'" fixed>
            <router-link to="/plant" slot="left" v-show="$route.path!='/plant'">
                <mt-button icon="back" @click="panelClick.count--">返回</mt-button>
            </router-link>
        </mt-header>
        <router-view :panelClick="panelClick">

        </router-view>
        <div class="content" v-show="$route.path==='/plant'">
            <my-panel :panelArray="plaExperiments" :panelClick="panelClick"></my-panel>
        </div>
    </div>
</template>
<script>
	export default{
	    name:"plant",
		data(){
			return {
				value:true,
				values:[],
                plaExperiments:[
                    {
                        href:"plant/exper/0",
                        imgSrc:"/src/images/plant/exper1.jpg",
                        newsTitle:"植物对空气湿度的影响",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/1",
                        imgSrc:"/src/images/plant/exper2.jpg",
                        newsTitle:"观察植物细胞",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/2",
                        imgSrc:"/src/images/plant/exper3.jpg",
                        newsTitle:"观察种子的结构",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/3",
                        imgSrc:"/src/images/plant/exper4.jpg",
                        newsTitle:"种子萌发的环境条件",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/4",
                        imgSrc:"/src/images/plant/exper5.jpg",
                        newsTitle:"测定种子的发芽率",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/5",
                        imgSrc:"/src/images/plant/exper6.jpg",
                        newsTitle:"根的什么部位生长最快",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/6",
                        imgSrc:"/src/images/plant/exper7.jpg",
                        newsTitle:"观察叶片的结构",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/7",
                        imgSrc:"/src/images/plant/exper8.jpg",
                        newsTitle:"绿叶在光下制造有机物",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/8",
                        imgSrc:"/src/images/plant/exper9.jpg",
                        newsTitle:"二氧化碳是不是光合作用必需的原料",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/9",
                        imgSrc:"/src/images/plant/exper10.jpg",
                        newsTitle:"种子萌发释放能量",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/10",
                        imgSrc:"/src/images/plant/exper11.jpg",
                        newsTitle:"种子萌发放出二氧化碳",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/11",
                        imgSrc:"/src/images/plant/exper12.jpg",
                        newsTitle:"种子萌发吸收氧气",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/12",
                        imgSrc:"/src/images/plant/exper13.jpg",
                        newsTitle:"光合作用产生氧气",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/13",
                        imgSrc:"/src/images/plant/exper14.jpg",
                        newsTitle:"比较不同蔬菜或水果中维生素C的含量",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/14",
                        imgSrc:"/src/images/plant/exper15.jpg",
                        newsTitle:"用高倍显微镜观察叶绿体和线粒体",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/15",
                        imgSrc:"/src/images/plant/exper16.jpg",
                        newsTitle:"植物细胞的吸水和失水",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/16",
                        imgSrc:"/src/images/plant/exper17.jpg",
                        newsTitle:"叶绿体中色素的提取和分离",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/17",
                        imgSrc:"/src/images/plant/exper18.jpg",
                        newsTitle:"观察根尖分生组织细胞的有丝分裂",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/18",
                        imgSrc:"/src/images/plant/exper19.jpg",
                        newsTitle:"低温诱导植物染色体数目的变化",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/19",
                        imgSrc:"/src/images/plant/exper20.jpg",
                        newsTitle:"探究生长素类似物促进插条生根的最适浓度",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/20",
                        imgSrc:"/src/images/plant/exper21.jpg",
                        newsTitle:"用样方法调查草地中某种双子叶植物的种群密度",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"plant/exper/21",
                        imgSrc:"/src/images/plant/exper22.jpg",
                        newsTitle:"胡萝卜的组织培养",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    }
                ]
			}
		},
        props:["panelClick"]
	}
</script>
