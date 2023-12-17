<template>
  <view class="modal-mask">
    <view class="modal">
	  <text class="prompt p1">请输入班级名：</text>
      <input placeholder="班级名" v-model="className" />
	  <text class="prompt p2">邀请码：</text>
      <input placeholder="自动生成" v-model="inviteCode" @click="generateInviteCode" readonly/>
      <view class="modal-buttons">
        <button class='b b1' @tap="confirm">创建</button>
        <button class='b b2' @tap="cancel">取消</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() //返回组件内部需要的响应式追踪的数据
  {
    return {
      className: '',
      inviteCode: '',
    };
  },
  methods: {
    confirm() {
      this.$emit('confirm', { className: this.className, inviteCode: this.inviteCode });
	  //点击确认按钮的时候，confirm方法通过$emit方法触发了一个名为confirm的自定义事件，并传递了一个对象作为参数
    },
    cancel() {
      this.$emit('cancel');
    },
	generateInviteCode()
	{
		this.inviteCode = Math.random().toString(36).substr(2, 8).toUpperCase(); // Example: Generating an 8-character random code
	}
  },
};
</script>

<style scoped>
/* 样式自定义 */
.modal-mask {
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
.modal 
{
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 70%;
  height: 35.1%;
}
input {
  width: 90%;
  margin-left: 5%; /* 调整左边距使输入框水平居中 */
  margin-right: 5%; /* 调整右边距使输入框水平居中 */
  border-radius: 13px;
  background-color: rgba(255,255,255,1);
  color: rgba(16,16,16,1);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(29,66,204,1);
  margin-bottom: 10%;
}
.prompt
{
	color: rgba(29,66,204,1);
	font-size: 16px;
	text-align: left;
	font-family: cursive;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: -5%;
}
.b{
	background-color: rgba(29,66,204,1);
	color: rgba(255,255,255,1);
	width: 35%;
	margin-top: 5%;
	font-family: cursive;
}

</style>
