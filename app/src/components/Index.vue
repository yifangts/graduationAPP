<template>
	<div>
        <mt-header :title="$route.path.split('/').length>2?panelClick.title:title" fixed>
            <router-link to="/index" slot="left" v-show="$route.path!='/index'">
                <mt-button icon="back" @click="panelClick.count--">返回</mt-button>
            </router-link>
        </mt-header>
        <router-view :panelClick="panelClick">

        </router-view>
        <div class="content" v-show="$route.path==='/index'">
            <div class="page-swipe" >
                <mt-swipe :auto="2000" :show-indicators="true" :speed="300">
                    <mt-swipe-item :class="{slide1:true}"><img src="../images/animal1.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item :class="{slide2:true}"><img src="../images/plant1.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item :class="{slide3:true}"><img src="../images/human1.jpg" alt=""></mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="page js_show">
                <my-panel :panelArray="indexNews" :panelClick="panelClick"></my-panel>
            </div>
        </div>
	</div>
</template>
<style>
    .page-swipe img{
        width:100%;
    }
</style>
<script>
//    var axios=require('axios');
    var obj={
        "q":"生物实验",
        "key":""
    }
//    axios.jsonp('http://bcp.baidu.com/news/access',obj).then(function (res) {
//        console.log(res)
//    })

	export default{
	    name:"index",
		data(){
			return {
                indexNews:[
                    {
                        href:"/index/news/1",
                        imgSrc:"/src/images/animal2.jpg",
                        newsTitle:"动物",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/index/news/2",
                        imgSrc:"/src/images/plant2.jpg",
                        newsTitle:"植物",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/index/news/3",
                        imgSrc:"/src/images/human2.jpg",
                        newsTitle:"人类",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                ],
                title:"虚拟生物实验室"
			}
		},

        mounted(){
		    this.$http.jsonp('http://op.juhe.cn/onebox/news/query',obj).then(function (res) {

                console.log(res)
            })
            console.log(1)
        },
//        components:{
//            "my-panel":newsPanel
//        },
        props:["panelClick"],
        methods:{

        }
	}
</script>
