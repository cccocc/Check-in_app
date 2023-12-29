<template>
	<view class="box">
		<view class="window"> 
			<view class="prompt">
				输入签到码
			</view>
			
			<view class="input_window">
				<view class="code-input-wrap">
					<input class="code-input" v-model="codeNumber" type="number" :adjust-position="false" :auto-blur="true" maxlength="4" @input="handleInputClick" />
					<view class="code-list">
						<block v-for="(item, index) in 4" :key="index">
							<view :class="['code-list-item', codeNumber.length == index ? 'active-item' : '']">{{ codeNumber[index] }}</view>
						</block>
					</view>
				</view>
			</view>
			
			<view class="button">
				<button class="comfirm" hover-class="button-hover" @click="comfirm_click">
					确认
				</button>
				<button class="cancel" hover-class="button-hover" @click="cancel_click">
					取消
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
		    return {
		        codeNumber: '',
		        isCodeValid: false,
		    }
		},
		methods: {
		    // 输入验证码
		    handleInputClick(e) {
		        let val = e.detail.value
		        this.codeNumber = val
		        if (val && val.length == 4) {
		            this.isCodeValid = true
		        } else {
		            this.isCodeValid = false
		        }
		    },
			comfirm_click(){
				console.log(this.codeNumber);
				const regex = /^\d{4}$/;
				if(regex.test(this.codeNumber)){
					uni.request({
						url: 'http://localhost:8181/signin/signin/doSignIn',
						method: "POST",
						data:{
							"type":"CODE",
							"code":this.codeNumber
						},
						header:{
							"Content-Type": "application/json"
						},
						success: (res) => {
								console.log(res.data);
								console.log(res.statusCode);
								if(res.statusCode == 200)
								{
									uni.showToast({
										title: "签到成功",
										duration: 1200
									});
									this.codeNumber='';
									this.$emit('comfirm')
								}
								else{
									uni.showToast({
										title:"签到失败",
										icon:"error",
										duration: 1200
									});
								}
						},
						fail:(res) => {
							console.log(res.data);
							uni.showToast({
								title:"检查网络设置",
								icon:"error",
								duration:1200
							})
						}
					})
				}
				else{
					uni.showToast({
						title:"请输入正确签到码",
						icon:'none',
						duration:1200
					})
				}
			},
			cancel_click(){
				this.codeNumber=''
				this.$emit('cancel')
			}
		}
	}
</script>

<style lang="scss">
	.box{
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		background-color: rgba(0,0,0,0.6);
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		font-size: 50rpx;
		color: #3871fe;
		.window{
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			width: 70%;
			height: 60%;
			background-color: #ffffff;
			border-radius: 30rpx;
			flex-direction: column;
			.prompt{
				margin-top: 10rpx;
				position: relative;
			}
			.input_window{
				width: 80%;
				height: 100rpx;
				.code-input-wrap {
					margin: 40rpx 0;
					position: relative;
					height: 100rpx;
					.code-input {
						position: absolute;
						left: 0;
						top: 0;
						height: 100rpx;
						width: 100%;
						opacity: 0;
						z-index: 99;
						outline: none;
					}
					.code-list {
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100rpx;
						display: flex;
						justify-content: space-between;
						.code-list-item {
							// flex: 1;
							width: 90rpx;
							height: 100rpx;
							background: #ffffff;
							border-radius: 16rpx;
							font-size: 36rpx;
							font-weight: 700;
							color: #3871fe;
							line-height: 100rpx;
							text-align: center;
							margin-right: 10rpx;
							z-index: 5;
							box-sizing: border-box;
						}
					}
					.code-list-item:last-child {
						margin-right: 0;
					}
					.active-item {
						border: 2rpx solid #2b5ad7;
					}
				}
			}
			.button{
				display: flex;
				justify-content: space-between;
				width: 80%;
				margin-top: 70rpx;
				.comfirm{
					background-color: #ffffff;
					color: #3871fe;
					width: 40rpx;
					 flex: 1;
					// height: 80rpx; 
					border: 2rpx solid #3871fe;
					border-radius: 8rpx;
					font-size: 36rpx;
					margin-right: 10rpx;
					text-align: center;
				}
				.cancel{
					background-color: #ffffff;
					color: #3871fe;
					flex: 1;
					// height: 80rpx; 
					border: 2rpx solid #3871fe;
					border-radius: 8rpx;
					font-size: 36rpx;
					margin-right: 10rpx; /* Adjust margin as needed */
					text-align: center;
				}
				.button-hover{
					color: #ffffff;
					background-color: #2b5ad7;
					border: 2px solid #ffffff;
				}
			}
		}

	}
</style>