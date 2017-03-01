<template>
    <div>
        <p>{{msg}}</p>
        <br>
        {{$route.path}}
    </div>
</template>
<style>

</style>
<script>
    export default{
        name:"indexNews1",
        data(){
            return{
                msg:'这是新闻'
            }
        },
        props:["panelClick"],
        methods:{
            ccc(){
                alert(1)
            }
        }
//        components:{
//            'other-component':OtherComponent,
//            HeaderComponent,
//        }
    }
</script>
