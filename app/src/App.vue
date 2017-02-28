<template>
  <div id="app">
    <mt-header title="虚拟生物实验室" fixed>
        <router-link to="/" slot="left" v-if=isNeedRe.flag>
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
      <div class="indexRouterTop"></div>
    <router-view :newClick="isNeedRe">

    </router-view>

      <div class="indexRouterBottom"></div>
    <mt-tabbar v-model="selected" fixed>
    <!-- 底部导航 -->
        <router-link to="/index">
            <mt-tab-item id="首页">
                <img slot="icon" src="./images/27.gif">
                  首页
            </mt-tab-item>
        </router-link>

        <router-link to="/animal">
            <mt-tab-item id="动物">
                <img slot="icon" src="./images/7.gif">
                              动物
            </mt-tab-item>
        </router-link>

        <router-link to="/plant">
            <mt-tab-item id="植物" >
                    <img slot="icon" src="./images/25.gif">
                    植物
            </mt-tab-item>
        </router-link>

        <router-link to="/human">
            <mt-tab-item id="人类">
                <img slot="icon" src="./images/23.gif">
                人类
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
        isNeedRe:{flag:false},
        selected:"0"
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
