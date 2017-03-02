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
        name:"humanExper",
        data(){
            return{
                msg:'hello human'
            }
        }
    }
</script>
