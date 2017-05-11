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
                        imgSrc:"/src/images/mifeng.jpg",
                        newsTitle:"基因编辑培育出变种红眼黄蜂",
                        newsMsg:"据国外媒体报道，加州大学河滨分校培育出了一种新型红眼黄蜂。"
                    },
                    {
                        href:"/index/news/2",
                        imgSrc:"/src/images/xingxibao.jpg",
                        newsTitle:"地球上最大和最小性细胞",
                        newsMsg:"据国外媒体报道，自然界中，精子和卵子既可以小得令人难以置信——比人类产生的还要小很多，也可以大得令人惊奇。"
                    },
                    {
                        href:"/index/news/3",
                        imgSrc:"/src/images/yanshu.jpg",
                        newsTitle:"裸鼹鼠令人无法相信的“超能力",
                        newsMsg:"裸鼹鼠（Naked Mole Rat）可能是地球上长相最惊悚的动物之一。它们是哺乳动物，但同时又是冷血动物（这非常罕见）。"
                    },
                    {
                        href:"/index/news/4",
                        imgSrc:"/src/images/shuliugan.jpg",
                        newsTitle:"人会打喷嚏，树也会得“流感”",
                        newsMsg:"随着全球气候变化对森林生态系统的影响，以及人类生产生活的全球化以及密切的森林木材产品贸易往来，森林病虫害的爆发及传播愈发频繁，造成的经济、社会和生态危害日益加剧。其中，“树流感”就是典型代表之一。"
                    },
                ],
                title:"虚拟生物实验室"
			}
		},

        mounted(){
		    this.$http.jsonp('http://op.juhe.cn/onebox/news/query',obj).then(function (res) {

            })
        },
//        components:{
//            "my-panel":newsPanel
//        },
        props:["panelClick"],
        methods:{

        }
	}
</script>
