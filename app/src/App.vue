<template>
  <div id="app">
    <!--<mt-header :title="isNeedRe.count!=0?isNeedRe.title:title" fixed>-->
        <!--<router-link to="/" slot="left" v-show="isNeedRe.count!=0">-->
            <!--<mt-button icon="back" @click="isNeedRe.count&#45;&#45;;">返回</mt-button>-->
        <!--</router-link>-->
    <!--</mt-header>-->
      <div class="indexRouterTop"></div>
    <router-view :panelClick="isNeedRe">

    </router-view>
      <div class="indexRouterBottom"></div>
    <mt-tabbar v-model="selected" fixed>
    <!-- 底部导航 -->
        <router-link v-for="item in tabbarItem" :to="item.href" >
            <mt-tab-item id="item.tabbarMsg" @click="alert(1)">
                <img slot="icon" :src="item.imgSrc">
                {{item.tabbarMsg}}
            </mt-tab-item>
        </router-link>
      </mt-tabbar>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
        isNeedRe:{count:0,title:""},
        selected:"0",
        tabbarItem:[
            {
                href:"/index",
                imgSrc:"/src/images/27.gif",
                tabbarMsg:"首页"},
            {
                href:"/animal",
                imgSrc:"/src/images/7.gif",
                tabbarMsg:"动物"},
            {
                href:"/plant",
                imgSrc:"/src/images/25.gif",
                tabbarMsg:"植物"},
            {
                href:"/human",
                imgSrc:"/src/images/23.gif",
                tabbarMsg:"人类"}
        ],
    }
  },
    methods:{

    },
    computed:{
        isNeedRe(){
            count:($route.path).split("/").length==2?0:this.isNeedRe.count
        }
    }
}

</script>

<style>
    .mint-header{
        /*background-color: lightblue;*/
    }
    .mint-tabbar{
        display: flex;
    }
    .mint-tabbar a{
        flex:1;
    }
    .indexRouterTop{margin-top:40px;}
    .indexRouterBottom{margin-top:55px;}
    .fade-enter-active, .fade-leave-active {
            transition: all .5s ease-out;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
        transform: translate3d(300px, 0, 0);
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
