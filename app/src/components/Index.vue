<template>
	<div>
		<div class="page-swipe" >
			<mt-swipe :auto="2000" :show-indicators="true" :speed="300">
				<mt-swipe-item :class="{slide1:true}"><img src="../images/animal1.jpg" alt=""></mt-swipe-item>
				<mt-swipe-item :class="{slide2:true}"><img src="../images/plant1.jpg" alt=""></mt-swipe-item>
				<mt-swipe-item :class="{slide3:true}"><img src="../images/human1.jpg" alt=""></mt-swipe-item>
			</mt-swipe>
		</div>
        <router-view :newClick="newClick">

        </router-view>
        <div class="page js_show">
            <my-panel :newsPanel=indexNews :newClick=newClick></my-panel>
        </div>
	</div>
</template>
<style>
    .page-swipe img{
        width:100%;
    }
</style>
<script>
	export default{
	    name:"index",
		data(){
			return {
                indexNews:[
                    {
                        href:"/index/news1",
                        imgSrc:"/src/images/animal2.jpg",
                        newsTitle:"动物",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/index/news2",
                        imgSrc:"/src/images/plant2.jpg",
                        newsTitle:"植物",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                    {
                        href:"/index/news3",
                        imgSrc:"/src/images/human2.jpg",
                        newsTitle:"人类",
                        newsMsg:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                    },
                ]
			}
		},
//        components:{
//            "my-panel":newsPanel
//        },
        props:["newClick"],
        methods:{

        }
	}
</script>
