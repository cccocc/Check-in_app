<template>
	<view class="container1">
		<button class="box1 b1"@tap="gotoPersonRecord">
			<text class="character1 cha_1">个人考勤记录</text>
		</button>
		<button class="box1 b2"@tap="gotoClassRecord">
			<text class="character1 cha_2">班级考勤记录</text>
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			gotoPersonRecord()
			{
				uni.navigateTo({
					url:'./PersonRecord'
				});
			},
			gotoClassRecord(){
				uni.navigateTo({
					url:'./ClassRecord'
				});
			},
		}
	}
</script>

<style lang="scss">
	.container1{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.b1{
		position: fixed;
		top:25%;
		height: 13%;
		width: 67%;
		border-radius: 15px;
		background-color: rgba(255,255,255,1);
		color: rgba(16,16,16,1);
		text-align: center; /* 让文本水平居中 */
		display: flex; /* 使用 Flexbox */
		justify-content: center; /* 让文本垂直居中 */
		align-items: center; /* 让文本垂直居中 */
		font-family: cursive;	
	}
	.b2{
		position: fixed;
		top: calc(45% + 104rpx);
		height: 104rpx;
		height: 13%;
		width: 67%;
		border-radius: 15px;
		background-color: rgba(255,255,255,1);
		color: rgba(16,16,16,1);
		text-align: center; /* 让文本水平居中 */
		display: flex; /* 使用 Flexbox */
		justify-content: center; /* 让文本垂直居中 */
		align-items: center; /* 让文本垂直居中 */
		font-family: cursive;	
	}
	.cha_1{
		color: rgba(29,66,204,1);
		font-size: 58rpx;
	}
	.cha_2{
		color: rgba(29,66,204,1);
		font-size: 58rpx;
	}
	page {
			background-image: url('https://pic.imgdb.cn/item/6556f813c458853aef4cea99.jpg');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
		}
</style>
