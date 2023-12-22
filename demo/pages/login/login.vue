<template>
	<view class="content">
		<view class="white-box">
			 <!-- 登录按钮 -->
			<button class="login-button" lang="zh_CN" @click="toggleForm('login')" :class="{ active: currentForm === 'login' }">登录</button>
      
			<!-- 注册按钮 -->
			<button class="regisiter-button" @click="toggleForm('register')" :class="{ active: currentForm === 'register' }">注册</button>

			<!-- 登录表单 -->
			<view v-if="currentForm === 'login'" class="login-form">
				<view class="input1">
					<input placeholder="用户名" type="text" v-model="loginuserInfo.Username"/>
				</view>
				<view class="input1" style="top: calc(23% + 126px)">
				  <input :type=" showPassword ? 'text' : 'password'" class="input1" style="top: calc(23% + 126px)" placeholder="输入密码" v-model="loginuserInfo.Password" />
				  <image class="img1" :src="showPassword ? '../../static/睁眼.png' : '../../static/闭眼.png'" @click="togglePasswordVisibility"></image>
				</view>


				<button :disabled="waiting" class="smallbutton" @click="login">确认</button>
				<button class="smallbutton" style="left:53%" @click="clearInput">取消</button>
			</view>

			<!-- 注册表单 -->
			<view v-else-if="currentForm === 'register'" class="register-form">
				<view class="input1">
					<input placeholder="注册" type="text" ref="usernameInput" v-model="registeruserInfo.userName" @click="showAllPopup('不允许使用特殊字符')"/>
				</view>
				<view class="input1" style="top: calc(23% + 126px)">
					<input placeholder="注册密码" :type=" showPassword ? 'text' : 'password'" class="input1" style="top: calc(23% + 126px)" v-model="registeruserInfo.password" @click="showAllPopup('6-12位字符 <br>至少包含一个小写字母、一个大写字母和一个数字 <br>不允许使用特殊字符')"/>
					<image class="img1" :src="showPassword ? '../../static/睁眼.png' : '../../static/闭眼.png'" @click="togglePasswordVisibility"></image>
				</view>
				
				<view class="input1" style="top: calc(23% + 189px)">
					<input placeholder="确认密码" :type="showPassword ? 'text' : 'password'" class="input1" style="top: calc(23% + 189px)" ref="judgepasswordInput" v-model="registeruserInfo.judgepassword" />
					
				</view>
				<button :disabled="waiting" class="smallbutton" type="primary" style="top: calc(23% + 253px)" @click="register(registeruserInfo)">确认</button>
				<button class="smallbutton" style="top: calc(23% + 253px);left:53%" @click="clearInput">取消</button>
			</view>
			
			<!--弹窗-->
			<All-popup :visible="AllPopupVisible" :message="popupMessage" @close="closeAllPopup"></All-popup>
			<InputPopup ref="inputPopup" :visible="InputPopupVisible" @close="closeInputPopup" ></InputPopup>

		</view>
	  </view>
</template>

<style lang='scss'>
	page {
		background-image: url('https://pic.imgdb.cn/item/6556f813c458853aef4cea99.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: fixed;
		width: 100vw;
		height: 100vh;
	}
	.password-input[type="text"] {
	  -webkit-text-security: none;
	}
	
	.password-input[type="password"] {
	  -webkit-text-security: disc;
	}
	
	.white-box {
		position: fixed;
	    left: 8%;
	    top: 20%;
	    width: 84%;
	    height: 357px;
	    line-height: 20px;
	    border-radius: 25px;
	    background-color: rgba(255,255,255,1);
	    color: rgba(16,16,16,1);
	    font-size: 14px;
	    text-align: center;
	    font-family: Roboto;
	    border: 1px solid rgba(29, 66, 204, 0.5);
		.login-button {
		    position: fixed;
		    left: 30%;
		    top: 23%;
		    width: 20%;
		    height: 40px;
		    line-height: 40px; // Updated to match the button height
		    display: flex; // Use flexbox
		    justify-content: center; // Center horizontally
		    align-items: center; // Center vertically
		    border-radius: 13px 0px 0px 13px;
			background-color: rgba(255, 255, 255, 1);
			color: rgba(29, 66, 204, 1);
		    font-size: 14px;
		    font-family: Roboto;
		    border: 1px solid rgba(29, 66, 204, 1);
		}
		
		.login-button.active{
			position: fixed;
			left: 30%;
			top: 23%;
			width: 20%;
			height: 40px;
			line-height: 40px; // Updated to match the button height
			display: flex; // Use flexbox
			justify-content: center; // Center horizontally
			align-items: center; // Center vertically
			border-radius: 13px 0px 0px 13px;
			background-color: rgba(29, 66, 204, 1);
			color: rgba(255, 255, 255, 1.0);
			font-size: 14px;
			font-family: Roboto;
			border: 1px solid rgba(29, 66, 204, 1);
		}
		
		.regisiter-button {
		    position: fixed;
		    left: 50%;
		    top: 23%;
		    width: 20%;
		    height: 40px;
		    line-height: 40px; // Updated to match the button height
		    display: flex; // Use flexbox
		    justify-content: center; // Center horizontally
		    align-items: center; // Center vertically
		    border-radius: 0px 13px 13px 0px;
		    background-color: rgba(255, 255, 255, 1);
		    color: rgba(29, 66, 204, 1);
		    font-size: 14px;
		    font-family: Roboto;
		    border: 1px solid rgba(29, 66, 204, 1);
		}
		
		.regisiter-button.active {
		    position: fixed;
		    left: 50%;
		    top: 23%;
		    width: 20%;
		    height: 40px;
		    line-height: 40px; // Updated to match the button height
		    display: flex; // Use flexbox
		    justify-content: center; // Center horizontally
		    align-items: center; // Center vertically
		    border-radius: 0px 13px 13px 0px;
		    background-color: rgba(29, 66, 204, 1);
		    color: rgba(255, 255, 255, 1.0);
		    font-size: 14px;
		    font-family: Roboto;
		    border: 1px solid rgba(29, 66, 204, 1);
		}
		
		.input1{
			position: fixed;
			left: 18%;
			top: calc(23% + 63px);
			width: 64%;
			height: 50px;
			line-height: 20px;
			display: flex; // Use flexbox
			justify-content: center; // Center horizontally
			align-items: center; // Center vertically
			border-radius: 13px;
			background-color: rgba(255,255,255,1);
			color: rgba(16,16,16,1);
			font-size: 14px;
			font-family: Roboto;
			font-family:cursive;
			text-align: center; 
			border: 1px solid rgba(29,66,204,1);
		}
		.img1{
			position: fixed;
			right: 21%;
			top: calc(23% + 139px);
			width: 24px;
			height: 24px;
		}
		.smallbutton{
			position: fixed;
			left: 32%;
			top: calc(23% + 190px);
			width: 15%;
			height: 34px;
			line-height: 20px;
			display: flex; // Use flexbox
			justify-content: center; // Center horizontally
			align-items: center; // Center vertically
			border-radius: 13px;
			background-color: rgba(255,255,255,1);
			color: rgba(29, 66, 204, 1.0);
			font-size: 10px;
			font-family: Roboto;
			border: 1px solid rgba(29,66,204,1);
		}
		
	}
		

</style>

<script>
	import AllPopup from '../allPopup/allPopup.vue';
	import { isStrongPassword,hasSpecialCharacters } from '../../judge/passwordUtils.js';
	import InputPopup from '../InputPopup.vue';
  export default {
	  components: {
		  AllPopup,
		  InputPopup,
	    },
    data() {
      return {
			title:'登录注册',
			currentForm: 'login' ,// 默认显示登录表单
			loginuserInfo: {
				Username: '',
				Password: ''
			},
			registeruserInfo: {
			      userName:'',
			      password:'',
				  judgepassword:''
						},
			AllPopupVisible: false,
			InputPopupVisible: false,
			popupMessage: '',
			showPassword: false,
			waiting: false,
			flag: true,
			url: '../../static/闭眼.png',
			inputPopupData: {},  // 用于存储 InputPopup 提交的数据
		};
    },
	
    methods: {
		
		clearInput() {
		  // 清空输入框的值
		  this.loginuserInfo.Username = '';
		  this.loginuserInfo.Password = '';
		  this.registeruserInfo.userName = '';
		  this.registeruserInfo.password = '';
		  this.registeruserInfo.judgepassword = '';
		},
      toggleForm(form) {
		// 清空输入框的值
		this.clearInput()
		this.showPassword=false;
        // 切换当前表单
        this.currentForm = form;
      },
	   togglePasswordVisibility() {
			this.showPassword = !this.showPassword;
	      },
	  showAllPopup(message){
		  this.AllPopupVisible = true;
		  this.popupMessage = message;
	  },
	  closeAllPopup(){
			this.AllPopupVisible = false;
	  },
	  showInputPopup(){
		  // 将提交操作的逻辑作为回调函数传递给 InputPopup
		      this.$refs.inputPopup.setSubmitCallback(() => {
		        this.waiting = true; // 进入等待状态
		        this.showAllPopup("加载中...");
		              setTimeout(() => {
		                // 清空输入框的值
		                this.clearInput();
		        		this.waiting = false; 
		                // 退出等待状态
		        		
		                // 检查当前表单是否为注册表单，然后延迟两秒切换
		                if (this.currentForm === 'register') {
		                  setTimeout(() => {
		                    this.currentForm = 'login';
		        			this.showAllPopup("注册成功");
		                  }, 2000);
		                }
		              }, 2000);
		      });
		    this.InputPopupVisible = true;
	  },
	  closeInputPopup(){
			this.InputPopupVisible = false;
	  },
	  register() {
		const username = this.registeruserInfo.userName;
		const password = this.registeruserInfo.password;
		const judgepassword = this.registeruserInfo.judgepassword;
		if(!username){
			this.showAllPopup('用户名不能为空！！！');
			return;
		}
		if(!password){
			this.showAllPopup('密码不能为空！！！');
			return;
		}
		if(password.length<6){
			this.showAllPopup("密码太短，请重新输入！！！");
			this.registeruserInfo.password = '';
			return;
		}
		if(password.length>12){
			this.showAllPopup("密码太长，请重新输入！！！");
			this.registeruserInfo.password = '';
			return;
		}
		if(!isStrongPassword(password)){
			this.showAllPopup("密码不符合要求，请重新输入！！！");
			this.registeruserInfo.password = '';
			return;
		}
		if(hasSpecialCharacters(password)){
			this.showAllPopup("密码包含特殊字符，请重新输入！！！");
			this.registeruserInfo.password = '';
			return;
		}
		if(password!=judgepassword){
			this.showAllPopup("两次输入密码不一致，请重新输入！！！");
			return;
		}
		console.log('用户名：',username);
		console.log('密码：',password);
		this.showInputPopup();
		
	  },
		login(){
			this.waiting = true; // 进入等待状态
			this.showAllPopup("加载中...");
			setTimeout(()=>{
				this.clearInput();
				this.waiting = false; 
				uni.switchTab({
				      url: '/pages/home/home',
				    });
				
			},2000
			
			)
		}


    },
  };
</script>

