<template>
	<view class="box">
		<button class="button_sign" hover-class="button-hover" v-show="status_sign==1" @click="show_sign">
			签到</button>
		<button class="button_create" hover-class="button-hover" v-show="status_create==1" @click="show_create">
			创建签到</button>
			
		<button class="back" hover-class="button-hover" v-show="status_create!=1 && status_sign!=1" @click="back_click">
			<image class="back_pic" src="../../static/ze-arrow-left 1 Copy 3@1x.png" ></image>
		</button>
		
		<button class="sign_scan" hover-class="button-hover" v-show="status_sign==2" @click="sign_scan_blick">
			扫码签到
		</button>
		<button class="sign_code" hover-class="button-hover" v-show="status_sign==2" @click="sign_code_click">
			签到码签到
		</button>
		<button class="sign_location" hover-class="button-hover" v-show="status_sign==2" @click="location_click" >
			定位签到
		</button>
		
		<button class="create_scan" hover-class="button-hover" v-show="status_create==2" @click="create_scan_click">
			创建扫码签到
		</button>
		<button class="create_code" hover-class="button-hover" v-show="status_create==2" @click="create_code_click">
			创建签到码签到
		</button>
		<button class="create_location" hover-class="button-hover" v-show="status_create==2" @click="create_location_click">
			创建定位签到
		</button>
		
		<signcode v-show="status_sign_code==1" @cancel="handleCancel">
		</signcode>
		<createcode v-show="status_create_code==1" @cancel="handleCancel">
		</createcode>
		<creatlocation v-show="status_create_location==1" @cancel="handleCancel"></creatlocation>
		<createscan v-show="status_create_scan==1" @cancel="handleCancel" @comfirm="handleComfirm"></createscan>
	</view>
	
</template>

<script>
	import signcode from "./signcode.vue";
	import createcode from "./create_code.vue";
	import creatlocation from "./create_location.vue";
	import createscan from "./create_scan.vue";
	export default {
		components:{signcode, createcode, creatlocation, createscan},
		data(){
			return{
				status_sign:1,//未被点击时为1，点击时设为2
				status_create:1,//未被点击时为1，点击时设为0
				status_sign_code: 0,
				status_create_code: 0,
				status_create_location: 0,
				status_create_scan: 0,
			}
		},
		methods:{
			show_sign(){
				this.status_sign=2
				this.status_create=0
			},
			show_create(){
				this.status_sign=0
				this.status_create=2
			},
			back_click(){
				this.status_sign=1
				this.status_create=1
			},
			location_click(){
				uni.navigateTo({
					url:"/pages/location/location"
				})
			},
			sign_scan_blick(){
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
				
			},
			sign_code_click(){
				this.status_sign_code=1;
				console.log(this.status_sign_code)
			},
			handleCancel(){
				this.status_sign_code=0;
				this.status_create_code=0;
				this.status_create_location=0;
				this.status_create_scan=0;
			},
			create_code_click(){
				this.status_create_code=1;
			},
			create_location_click(){
				this.status_create_location=1;
			},
			create_scan_click(){
				this.status_create_scan=1;
			},
			handleComfirm(){
				this.status_create_scan=0;
				uni.navigateTo({
					url: "/pages/scan_QRcode/scan_QRcode"
				})
			}
		}
	}
</script>

<style lang='scss'>
	page {
	    background-image: url('https://pic.imgdb.cn/item/6556f813c458853aef4cea99.jpg');
	    background-size: cover;
	    background-repeat: no-repeat;
	    background-position: center center;
	}
	.box{
		
		.button_sign{
			display: flex;
			justify-content: center;
			align-items: center;
			color: #2b5ad7;
			width: 600rpx;
			height: 200rpx;
			top: 200rpx;
			background-color: #ffffff;
			box-shadow: 2px 2px 20px #333;
			font-size: 60rpx;
			font-family:cursive;
			border-radius: 30rpx;
		}
		.button_create{
			display: flex;
			justify-content: center;
			align-items: center;
			color: #2b5ad7;
			width: 600rpx;
			height: 200rpx;
			top: 400rpx;
			background-color: #ffffff;
			box-shadow: 2px 2px 20px #333;
			font-size: 60rpx;
			font-family:cursive;
			border-radius: 30rpx;
		}
		.back{
			width: 65rpx;
			height: 65rpx;
			top: 30rpx;
			left:5%;
			position: absolute;
			background-color: #ffffff;
			border-radius: 30rpx;
			.back_pic{
				width: 60rpx;
				height: 60rpx;
				position: absolute;
				left:2%;
				top:2%;
			}
		}
		.sign_scan{
			display: flex;
			justify-content: center;
			align-items: center;
			color: #2b5ad7;
			width: 600rpx;
			height: 200rpx;
			top: 130rpx;
			background-color: #ffffff;
			box-shadow: 2px 2px 20px #333;
			font-size: 60rpx;
			font-family:cursive;
			border-radius: 30rpx;
		}
		.sign_code{
			display: flex;
			justify-content: center;
			align-items: center;
			color: #2b5ad7;
			width: 600rpx;
			height: 200rpx;
			top: 210rpx;
			background-color: #ffffff;
			box-shadow: 2px 2px 20px #333;
			font-size: 60rpx;
			font-family:cursive;
			border-radius: 30rpx;
		}
		.sign_location{
			display: flex;
			justify-content: center;
			align-items: center;
			color: #2b5ad7;
			width: 600rpx;
			height: 200rpx;
			top: 290rpx;
			background-color: #ffffff;
			box-shadow: 2px 2px 20px #333;
			font-size: 60rpx;
			font-family:cursive;
			border-radius: 30rpx;
		}
		.create_scan{
			display: flex;
			justify-content: center;
			align-items: center;
			color: #2b5ad7;
			width: 600rpx;
			height: 200rpx;
			top: 130rpx;
			background-color: #ffffff;
			box-shadow: 2px 2px 20px #333;
			font-size: 60rpx;
			font-family:cursive;
			border-radius: 30rpx;
		}
		.create_code{
			display: flex;
			justify-content: center;
			align-items: center;
			color: #2b5ad7;
			width: 600rpx;
			height: 200rpx;
			top: 210rpx;
			background-color: #ffffff;
			box-shadow: 2px 2px 20px #333;
			font-size: 60rpx;
			font-family:cursive;
			border-radius: 30rpx;
		}
		.create_location{
			display: flex;
			justify-content: center;
			align-items: center;
			color: #2b5ad7;
			width: 600rpx;
			height: 200rpx;
			top: 290rpx;
			background-color: #ffffff;
			box-shadow: 2px 2px 20px #333;
			font-size: 60rpx;
			font-family:cursive;
			border-radius: 30rpx;
		}
		.button-hover{
			color: #ffffff;
			background-color: #2b5ad7;
			border: 2px solid #ffffff;
		}
		
	}
	
</style>
