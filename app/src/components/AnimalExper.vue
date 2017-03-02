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
        name:"animalExper",
        data(){
            return{
                msg:'hello animal'
            }
        }
    }
</script>
