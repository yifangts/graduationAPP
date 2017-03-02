<template>
    <div>
        {{msg}}
        {{$route.path}}
    </div>
</template>
<style>

</style>
<script>
    export default{
        name:"plantExper",
        data(){
            return{
                msg:'hello plant'
            }
        }
    }
</script>
