<template>
	<view class="box">
		<view class="text">距离签到结束还有</view>
		<view class="countdown" >
			<!-- <uni-countdown :day="0" :hour="0" :minute="0" :second="10" color="#3871fe" :font-size="28" :show-colon="false" :show-day="false" splitorColor="#3871fe"> -->
			<uni-countdown :day="0" :hour="0" :minute="0" :second="10" color="#3871fe" :font-size="28" :show-colon="false" :show-day="false" splitorColor="#ffffff" background-color="#ffffff">
			</uni-countdown>
		</view>
		<view class="circle" hover-class="button-hover">
			<view class="cirecle_"></view>
			<uni-icons class="location_icon" :animation="animationData" type="location" size="300" color="#4076fe"></uni-icons>
			<view class="location_text">{{l_text[0]}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				animationData: {},
				l_text: ['点击签到','签到成功','检查您的定位'],
				isClicked: 0,
				
			};
		},
		methods:{
			startAnimation() {
			      var animation = uni.createAnimation({
			        duration: 900,
			        timingFunction: 'linear',
			      })
			
			      this.animation = animation
			
			      this.animationData=animation.export()
				  var next=true
				  // setTimeout(()=>{
					  setInterval(()=>{
						  if(next){
							  animation.translateY(8).step()
						  }
						  else{
							  animation.translateY(-8).step()
						  }
						  next=!next
						  this.animationData=animation.export()
					  }, 900)
				  // }, 900)
			    }
		},
		onShow() {
			this.startAnimation();
		},
		onHide(){
			// clearInterval(this.animationInterval);
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
		.circle{
			display: flex;
			position: relative;
			justify-content: center;
			flex-direction: column;
			margin: 0 auto;		
			margin-top: 150rpx;
			width: 350rpx;
			height: 350rpx;
			border-radius: 50%;
			background-color: white;
			overflow: hidden;
			/* inset 表示内阴影 */
			/* box-shadow: 0 3px 150upx #62d0d6 inset; */
			box-shadow: -10rpx 0rpx 30rpx #3871fe,
				/*左边阴影*/
				0rpx -10rpx 30rpx #65dee2,
				/*上边阴影*/
				10rpx 0rpx 30rpx #f7dc77,
				/*右边阴影*/
				0rpx 10rpx 30rpx #c84848;
			.cirecle_{
				position: absolute;
				// display: flex;
				width: 150rpx;
				height: 450rpx;
				top:0rpx;
				left:-150rpx;
				transform: skew(30deg);
				background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(151, 175, 255, 0.5), rgba(255, 255, 255, 0));
			}
			.location_icon{
				display: flex;
				justify-content: center;
				margin: 0 auto;	
				margin-top: 10rpx;
				font-size: 150rpx;
			}
			.location_text{
				display: flex;
				flex-direction: column;
				align-items: center;
				margin: 0 auto;	
				color: #4076fe;
				margin-top: 30rpx;
				font-size: 45rpx;
			}
		}
		.button-hover{
			// color: #ffffff;
			// background-color: #2b5ad7;
			// border: 2px solid #ffffff;
			// .location_text{
			// 	color: #ffffff;
			// }
			// transform: scale(1.1);
			.cirecle_{
				// transform: translateX(200rpx);
				left: 600rpx;
				transition: all 1s;
			}
		}
	}
</style>
