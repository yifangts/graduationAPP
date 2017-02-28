<template>
    <div @load="isNeed()">
        <p>{{msg}}</p>
    </div>
</template>
<style>

</style>
<script>
    export default{
        name:"news1",
        data(){
            return{
                msg:'hello vue',
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
