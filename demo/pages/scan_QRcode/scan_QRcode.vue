<template>
	<view class="box">
		<view class="text">距离签到结束还有</view>
		<view class="countdown" >
			<!-- <uni-countdown :day="0" :hour="0" :minute="0" :second="10" color="#3871fe" :font-size="28" :show-colon="false" :show-day="false" splitorColor="#3871fe"> -->
			<uni-countdown :day="0" :hour="0" :minute="0" :second="10" color="#3871fe" :font-size="28" :show-colon="false" :show-day="false" splitorColor="#ffffff" background-color="#ffffff">
			</uni-countdown>
		</view>
		
		<image class="img" src="../../static/logo.png" show-menu-by-longpress="true"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	page {
			background-image: url('https://pic.imgdb.cn/item/6556f813c458853aef4cea99.jpg');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
		}
	.box{
		.text{
			font-size: 60rpx;
			color: white;
			// background-color: white;
			display: flex;
			justify-content: center;
			margin:  0 auto;
			margin-top: 150rpx;
		}
		.countdown{
			color: white;
			// background-color: white;
			display: flex;
			justify-content: center;
			margin: 0 auto;
			// margin-top: 150rpx;
			margin-top: 10rpx;
			width: 600rpx;
			// border-radius: 30rpx;
		}
		.img{
			display: flex;
			justify-content: center;
			margin: 0 auto;
			width: 70%;
			margin-top:40rpx;
			height: 500rpx;
		}
	}
	
</style>
