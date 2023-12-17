<template>
	<view class="container">
		 <text class="Promption">班级列表</text>
		 <view class="father-vector"></view>
	 </view>
</template>

<script>
</script>

<style>
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.Promption{
		position: fixed;
		top:10%;
		color: white;
		font-size:50rpx ;
		font-family: cursive;
	}
 	.father-vector{
		position: fixed;
		top:15%;
		width: 72.56%;
		height: 60%;
		border-radius: 25px;
		background-color: rgba(255,255,255,1);
		text-align: center;
		border: 1px solid rgba(187,187,187,1);
	} 
	page {
	    background-image: url('https://pic.imgdb.cn/item/6556f813c458853aef4cea99.jpg');
	    background-size: cover;
	    background-repeat: no-repeat;
	    background-position: center center;
	}
</style>