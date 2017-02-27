<template>
  <div id="app">
    <mt-header title="我是头部" fixed></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
    <!-- 底部导航 -->

        <mt-tab-item id="首页">
          <router-link to="/index">
            <img slot="icon" src="./assets/logo.png">
              首页
          </router-link>
        </mt-tab-item>

        <mt-tab-item id="动物">
          <router-link to="/other">
            <img slot="icon" src="./assets/logo.png">
                          动物
          </router-link>
        </mt-tab-item>
       
        <mt-tab-item id="植物">
          <router-link to="/other2">
            <img slot="icon" src="./assets/logo.png">
              植物
          </router-link>
        </mt-tab-item>
              
        <mt-tab-item id="人类">
          <router-link to="/home">
            <img slot="icon" src="./assets/logo.png">
            人类
            </router-link>
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '这是数据',
      selected:"0"
    }
  }
}
</script>

<style>
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
