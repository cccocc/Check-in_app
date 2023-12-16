<template>
	<view class="content">
		<view class="custom-button" lang="zh_CN">
			<img src="../../static/头像.png" class="image">
			<text class="user-name">姓名：</text>
			<text class="user-id">学号：</text>
			<text class="user-class">班级：</text>
		</view>
		<view class="white-box">
			<button class="button1">
				<image class="box-image" src="/static/申请请假.png"></image>
				申请请假
				<image class="rightimage" src="/static/右键.png"></image>
			</button>
			<button class="button1">
				<image class="box-image" src="/static/课堂点名.png"></image>
				课堂点名
				<image class="rightimage" src="/static/右键.png"></image>
			</button>
			<button class="button1">
				<image class="box-image" src="/static/发起投票.png"></image>
				发起投票
				<image class="rightimage" src="/static/右键.png"></image>
			</button>
			<button class="button1">
				<image class="box-image" src="/static/账号安全.png"></image>
				账号安全
				<image class="rightimage" src="/static/右键.png"></image>
			</button>
			<button class="button1">
				<image class="box-image" src="/static/设置.png"></image>
				设置
				<image class="rightimage" src="/static/右键.png"></image>
			</button>
			<button class="button1">
				<image class="box-image" src="/static/管理班级.png"></image>
				管理班级
				<image class="rightimage" src="/static/右键.png"></image>
			</button>
			<button class="button1" @click="exits">
				<image class="box-image" src="/static/退出登录.png"></image>
				退出登录
				<image class="rightimage" src="/static/右键.png"></image>
			</button>
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
	
	.white-box {
		position: fixed;
	    left: 10%;
	    top: 35%;
	    width: 80%;
	    height: 322px;
	    line-height: 20px;
	    border-radius: 10px;
	    background-color: rgba(255,255,255,1);
	    color: rgba(16,16,16,1);
	    font-size: 14px;
	    text-align: center;
	    font-family: Roboto;
	    border: 1px solid rgba(187,187,187,1);
		.button1{
			
			.box-image {
			    position: absolute;
			    left: 5%;
			    top: 25%;
			    width: 24px;
			    height: 24px;
				
			    }
			.rightimage {
			    position: absolute;
			    right: 5%;
			    top: 25%;
			    width: 24px;
			    height: 24px;
				
			    }
			
		}
		
	}
		
.custom-button {
	position: fixed;
	left: 10%; /* 使用百分比调整 left 属性 (18px / 390px * 100%) */
	top: 13%; /* 使用百分比调整 top 属性 (124px / 844px * 100%) */
	width: 80%; /* 使用百分比调整 width 属性 (359px / 390px * 100%) */
	height: 15%; /* 使用百分比调整 height 属性 (117px / 844px * 100%) */
	display: flex;
	align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
	border-radius: 51px; /* 使用百分比调整 border-radius 属性 (51px / 390px * 100%) */
	background-color: rgba(255, 255, 255, 1);
	text-align: center;
	border: 1px solid rgba(187, 187, 187, 1);
	font-size: 20px; /* 使用百分比调整 font-size 属性 */
	font-family:cursive;
	color: rgba(0,0,0,0.4); /* 文字颜色，根据需要修改 */
	.image{
		position: absolute;
		left: 5px; /* 设置为父元素的一半 */
		top: 50%; /* 设置为父元素的一半 */
		transform: translate(0, -50%); /* 通过负的50%的宽度和高度将图像居中 */
		height: 70px; /* 高度设置为父元素高度的80% */
		width: 70px;
	}
	  .user-name{
		  position: absolute;
		  left: 75px; // Adjust as needed
		  top: 30%;
		  transform: translate(0, -50%);
		  text-align: left;
		  margin-left: 10px; // Adjust as needed
	    font-size: 14px; // Adjust as needed
	    color: rgba(0, 0, 0, 0.8); // Adjust as needed
	    margin-bottom: 5px; // Adjust as needed
	  }
	  .user-id{
		  position: absolute;
		  left: 75px; // Adjust as needed
		  top: 50%;
		  transform: translate(0, -50%);
		  text-align: left;
		  margin-left: 10px; // Adjust as needed
	    font-size: 14px; // Adjust as needed
	    color: rgba(0, 0, 0, 0.8); // Adjust as needed
	    margin-bottom: 5px; // Adjust as needed
	  }
	  .user-class {
		  position: absolute;
		  left: 75px; // Adjust as needed
		  top: 70%;
		  transform: translate(0, -50%);
		  text-align: left;
		  margin-left: 10px; // Adjust as needed
	    font-size: 14px; // Adjust as needed
	    color: rgba(0, 0, 0, 0.8); // Adjust as needed
	    margin-bottom: 5px; // Adjust as needed
	  }
}

/* 媒体查询，根据屏幕宽度调整按钮大小 */
@media screen and (max-width: 0px) {
  .custom-button {
    width: 80%;
    height: 20%;
    font-size: 3%;
  }
}
</style>

<script>
	export default {
		data() {
			return {
				title:'我的'
			}
		},
		methods: {
			//登录方式
			bindgetuserinfo(e){
				if (e.detail.userInfo) {
					console.log(e.detail.userInfo);
				}
			},
			exits(){
				uni.navigateTo({
					url:'/pages/JudeLoginPage/JudeLoginPage'
				})
			}
			
		}
	}
</script>

