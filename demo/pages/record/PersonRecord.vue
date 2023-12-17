<template>
	<view class="container">
		<text class="Promption" >个人签到记录</text>
		<view class="Four-blocks">
			<button class="blocks b1"@click="clickAttendance">
				<text class="character cha_1">出勤</text>
			</button>
			<button class="blocks b2"@click="clickAbsent">
				<text class="character cha_2">缺勤</text>
			</button>
			<button class="blocks b3"@click="clickLeave">
				<text class="character cha_1">请假</text>
			</button>
			<button class="blocks b4"@click="clickLate">
				<text class="character cha_1">迟到</text>
			</button>
		</view>
		<view class="child-modal m1" v-if="show1">
			出勤 
		</view>
		<view class="child-modal m2" v-if="show2">
			缺勤
		</view>
		<view class="child-modal m2" v-if="show3">
			请假
		</view>
		<view class="child-modal m2" v-if="show4">
			迟到
		</view>
	</view>
</template>

<script>
	
	export default{
		data(){
				return{
					show1: false,
					show2: false,
					show3: false,
					show4: false,
				};
			},
		methods:{
			clickAttendance(){
				this.show1=true;
				this.show2=false;
				this.show3=false;
				this.show4=false;
			},
			clickAbsent(){
				this.show1=false;
				this.show2=true;
				this.show3=false;
				this.show4=false;
			},
			clickLeave(){
				this.show1=false;
				this.show2=false;
				this.show3=true;
				this.show4=false;
			},
			clickLate(){
				this.show1=false;
				this.show2=false;
				this.show3=false;
				this.show4=true;
			},
		},
	};
</script>

<style>
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.Promption{
		position: fixed;
		top:5%;
		font-size: 65rpx;
		color: rgba(255,255,255,1);
		font-family: cursive;
	}
 	.Four-blocks{
		position: fixed;
		top:calc(5% + 80rpx);
		display: flex; /* 使用 Flexbox 布局 */
		justify-content: space-around; /* 水平对齐，按钮之间平均分配空间 */
		align-items: center; /* 垂直对齐居中 */
		width: 100%; /* 让 .Four-blocks 充满其容器的宽度 */
		box-sizing: border-box; /* 让宽度包括内边距和边框 */
	}
	.child-modal{
		position: fixed;
		top:23%;
		background: white;
		width: 80%;
		height:70%;
		margin-left: 10%;
		margin-right: 10%;
		border-radius: 20rpx;
	}
	page {
	    background-image: url('https://pic.imgdb.cn/item/6556f813c458853aef4cea99.jpg');
	    background-size: cover;
	    background-repeat: no-repeat;
	    background-position: center center;
	}
</style>