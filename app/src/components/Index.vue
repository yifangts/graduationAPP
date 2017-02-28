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
            <router-link to="/index/news1">
                <div class="media-box media-box_appmsg">
                    <div class="media-box__hd">
                        <img class="media-box__thumb" src="../images/animal2.jpg" alt="">
                    </div>
                    <div class="media-box__bd">
                        <h4 class="media-box__title">动物</h4>
                        <p class="media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                    </div>
                </div>
            </router-link>
            <router-link to="/index/news2">
                <div class="media-box media-box_appmsg">
                    <div class="media-box__hd">
                        <img class="media-box__thumb" src="../images/plant2.jpg" alt="">
                    </div>
                    <div class="media-box__bd">
                        <h4 class="media-box__title">植物</h4>
                        <p class="media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                    </div>
                </div>
            </router-link>
            <router-link to="/index/news3">
                <div class="media-box media-box_appmsg">
                    <div class="media-box__hd">
                        <img class="media-box__thumb" src="../images/human2.jpg" alt="">
                    </div>
                    <div class="media-box__bd">
                        <h4 class="media-box__title">人类</h4>
                        <p class="media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                    </div>
                </div>
            </router-link>
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

			}
		},
        props:["newClick"],
        methods:{

        }
	}
</script>
