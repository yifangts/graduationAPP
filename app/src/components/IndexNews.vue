<template>
    <div>
        <p>{{msg}}</p>
        <br>
        {{$route.path}}
        <button @click="ccc()">anniu</button>
    </div>
</template>
<style>

</style>
<script>
    export default{
        name:"indexNews",
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
    }
</script>
