<template>
  <div id="app">
      <div class="indexRouterTop"></div>
    <router-view :panelClick="panelClick">

    </router-view>

      <div class="indexRouterBottom"></div>
    <mt-tabbar v-model="selected" fixed>
    <!-- 底部导航 -->
        <router-link v-for="item in tabbarItem" :to="item.href">
            <mt-tab-item id="item.tabbarMsg">
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
        panelClick:{count:0,title:"虚拟生物实验室"},
        selected:"0",
        tabbarItem:[
            {
                href:"/index",
                imgSrc:"/src/images/nav_index.jpg",
                tabbarMsg:"首页"},
            {
                href:{path:"/animal",params:{count:0}},
                imgSrc:"/src/images/nav_animal.jpg",
                tabbarMsg:"动物"},
            {
                href:{path:"/plant",params:{count:0}},
                imgSrc:"/src/images/nav_plant.jpg",
                tabbarMsg:"植物"},
            {
                href:{path:"/human",params:{count:0}},
                imgSrc:"/src/images/nav_human.jpg",
                tabbarMsg:"人类"}
        ]
    }
  },
    methods:{

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
