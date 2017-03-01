<template>
    <div @load="isNeed()">
        <p>{{msg}}</p>
    </div>
</template>
<style>

</style>
<script>
    export default{
        name:"indexNews1",
        data(){
            return{
                msg:'这是新闻一',
                isNeedRe:true
            }
        },
        props:["newClick"],
        methods:{
            isNeed(){
                this.newClick.flag=true;
            }
        }
//        components:{
//            'other-component':OtherComponent,
//            HeaderComponent,
//        }
    }
</script>
