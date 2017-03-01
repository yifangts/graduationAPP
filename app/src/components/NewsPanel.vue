<template>
    <div>
        <router-link v-for="item in panelArray" :to="item.href" >
            <div class="media-box media-box_appmsg" @click="change(item.newsTitle)">
                <div class="media-box__hd">
                    <img class="media-box__thumb" v-lazy="item.imgSrc" alt="">
                </div>
                <div class="media-box__bd">
                    <h4 class="media-box__title">{{item.newsTitle}}</h4>
                    <p class="media-box__desc">{{item.newsMsg}}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>
<style>

</style>
<script>
    export default{
        name:"news-panel",
        data(){
            return{

            }
        },
        methods:{
            change(title){
                this.panelClick.count=1;
                this.panelClick.title=title;
            }
        },
        props:["panelArray","panelClick"]
    }
</script>
