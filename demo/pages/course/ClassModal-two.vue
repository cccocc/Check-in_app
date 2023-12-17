<template>
	<view class="modal-mask-two">
		<view class="modal-two">
			<text class="prompt-two">请输入邀请码:</text>
			<input v-model="inviteCode"/>
			<view class="modal-buttons-two">
				<button class="b-two b-two1" @click="joinclass">加入</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				inviteCode:'',
			};
		},
		methods:{
			joinclass(){
				 console.log('邀请码:', this.inviteCode);
				    // 这里可以编写将邀请码发送给后端的逻辑
				    // 例如：调用接口进行加入班级操作等
				    // 在处理完后，你可能需要关闭模态框
				    // 可以通过发送一个信号给父组件来实现
			    this.$emit('confirm',{inviteCode:this.inviteCode});
			},
		},
		};
</script>

<style>
	/* 样式自定义 */
	.modal-mask-two {
	  position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background: rgba(0, 0, 0, 0.5);
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.modal-two {
	   background: white;
	   padding: 20px;
	   border-radius: 10px;
	   width: 70%;
	   height: 35.1%;
	}
	input {
	  margin-top: 1%;
	  width: 90%;
	  height: 15%;
	  margin-right:5% ;
	  margin-left: 5%;
	  border-radius: 13px;
	  background-color: rgba(255,255,255,1);
	  color: rgba(16,16,16,1);
	  font-size: 14px;
	  text-align: center;
	  font-family: Roboto;
	  border: 1px solid rgba(29,66,204,1);
	}
	.prompt-two{
		left: 98px;
		top: 367px;
		width: 39px;
		height: 23px;
		line-height: 23px;
		color: rgba(29,66,204,1);
		font-size: 16px;
		text-align: left;
		font-family: cursive;
	}
	.modal-buttons-two {
	  display: flex;
	  justify-content: space-between;
	  margin-top: -9%;
	}
	.b-two{
		background-color: rgba(29,66,204,1);
		color: rgba(255,255,255,1);
		width: 50%;
		margin-top: 50%;
		font-family: cursive;
	}
</style>