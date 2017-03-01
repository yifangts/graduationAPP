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
        data(){
            return{
                msg:'hello human'
            }
        }
    }
</script>
