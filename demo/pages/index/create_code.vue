<template>
	<view class="box">
		<view class="window" >
			<view class="prompt">
				签到规则
			</view>
			
			<view class="rule">
				<view class="sign_time">
					<view class="time_pro">
						签到时间限制：
					</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-db">
								<picker mode="time" :value="time" start="00:00" end="24:00" @change="bindTimeChange">
									<view class="uni-input">{{time}}</view>
								</picker>
							</view>
						</view>
					</view>
				</view>
				<view class="sign_rule">
					<view class="rule_pro">
						请假规则说明：
					</view>
					
				</view>
				<!-- <input class="uni-input-rule" maxlength="50" placeholder="最大输入长度为50" placeholder-style="font-size:36rpx;color:#98c0fe" /> -->
				<textarea class="uni-input-rule" v-model="ruleValue" 
				placeholder="最大长度限制为50字"
				show-confirm-bar
				maxlength="50"
				placeholder-style="font-size:36rpx;color:#0346fe;"
				adjust-position>
				
				</textarea>
				
				<view class="rule_sign_code">
					<view class="generate_code">
						签到码：
					</view>
					<input class="code_input" v-model="code" placeholder="自动生成" @click="generatecode" placeholder-style="font-size:36rpx;color:#0346fe;" />
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
		        time: '00:00',
				ruleValue:'',
				code:'',
				success_flag:0,//0表示未设置规则，1表示设置成功，2表示设置失败
		    }
		},
		methods: {
		    bindTimeChange: function(e) {
				this.time = e.detail.value
			},
			comfirm_click(){
				console.log("时间："+this.time);
				console.log("规则："+this.ruleValue);
				console.log("签到码："+this.code)
				
				this.success_flag=1;
				console.log(this.success_flag)
				
			},
			cancel_click(){
				this.$emit('cancel')
			},
			generatecode(){
				
				// 生成随机的4位数字
				  const randomNum = Math.floor(1000 + Math.random() * 9000);
				  this.code = randomNum.toString();
				  console.log(this.code)
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
			width: 90%;
			height: 80%;
			background-color: #ffffff;
			border-radius: 30rpx;
			flex-direction: column;
			.prompt{
				margin-top: 10rpx;
				position: relative;
			}
			.rule{
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				margin-left: 80rpx;
				margin-bottom: 5rpx;
				.sign_time{
					display: flex;
					justify-content: space-between;
					margin-top: 60rpx;
					
					// margin-left: 10rpx;
					// border: 2rpx solid #3871fe;
					.time_pro{
						font-size: 40rpx;
					}
					.uni-list{
						font-size: 40rpx;
						border: 2rpx solid #3871fe;
						color: #0346fe;
					}
				}
				.sign_rule{
					display: flex;
					margin-bottom: 10rpx;
					// margin-left: 10rpx;
					.rule_pro{
						font-size: 40rpx
					}
				}
				.uni-input-rule{
					font-size: 36rpx;
					border: 2rpx solid #3871fe;
					width: 86%;
					color: #0346fe;
					height: 150rpx;
					// margin-left: 10rpx;
				}
				.rule_sign_code{
					font-size: 40rpx;
					display: flex;
					margin-top: 15rpx;
					// justify-content: space-between;
					// margin-left: 10rpx;
					.generate_code{
						
					}
					.code_input{
						font-size: 40rpx;
						border: 2rpx solid #3871fe;
						width: 50%;
						color: #0346fe;
						// margin-left: 0;
						height: 60rpx;
					}
				}
			}
			.button{
				display: flex;
				justify-content: space-between;
				width: 80%;
				margin-top: 50rpx;
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