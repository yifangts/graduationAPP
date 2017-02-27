<template>
	<div>
		<div class="page-swipe" >
			<mt-swipe :auto="2000" :show-indicators="true" :speed="300">
				<mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
				<mt-swipe-item :class="{slide2:true}">2</mt-swipe-item>
				<mt-swipe-item :class="{slide3:true}">3</mt-swipe-item>
			</mt-swipe>
		</div>
	</div>
</template>
<style>
.page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.page-swipe .mint-swipe-item {
    line-height: 200px;
}
.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}
.page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}
.page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}
.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}

.my-btn-box{
  margin-top:50px;
}
</style>
<script>
	export default{
		data(){
			return {
				value:true,
				values:[]
			}
		}
	}
</script>