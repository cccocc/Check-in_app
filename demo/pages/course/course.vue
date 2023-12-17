<template>
<view class="container">
	<text class="Promption">你好!</text>
	<button class="box box_1" hover-class="box-class"@tap="showCreateClassModal_1">
		<text class="character cha_1">创建班级</text>
	</button>
	<button class="box box_2" hover-class="box-class"@tap="showCreateClassModal_2">
	    <text class="character cha_2">加入班级</text>
	</button>
	<button class="box box_3" hover-class="box-class"@tap="gotoClassList">
	    <text class="character cha_3">班级列表</text>
	</button>
	<button class="box box_4" hover-class="box-class" @tap="gotoTodaycourse">
	    <text class="character cha_4">今日课程</text>
	</button>
	 <ClassModal1 v-if="showModal1" @confirm="onConfirm" @cancel="onCancel" />
	 <ClassModal2 v-if="showModal2" @confirm="onJoinConfirm" />
</view>
</template>

<script>
	import ClassModal1 from './ClassModal-one.vue' //导入classmodal组件
	import ClassModal2 from './ClassModal-two.vue'
	export default 
	{
		components:{
			ClassModal1,//注册classmodal组件，以便在当前组件中使用
			ClassModal2
		},
		data(){
			return{
				showModal1:false,//控制弹出框显示与隐藏的变量
				showModal2:false,
			};
		},
		methods:
		{
		
			showCreateClassModal_1() {
			    this.showModal1=true;//设置showmodal变量为true，显示出弹出框
			},
			  //弹出框确认事件的处理方法
			onConfirm(data) //data是在确认事件触发时从子组件传递给父组件的一个对象。
			{
				console.log('班级名:', data.className);
				console.log('邀请码:', data.inviteCode);
				// 在这里处理输入框中的数据，比如提交给后端等操作
				this.showModal1 = false;//隐藏弹出框
			},
			onCancel() 
			{
				this.showModal1 = false;//隐藏弹出框
			},
			showCreateClassModal_2(){
				console.log('点击加入班级');
				this.showModal2=true;
			},
			onJoinConfirm(data){
				console.log('加入班级，邀请码：',data.inviteCode);
				this.showModal2=false;
			},
			gotoClassList(){
				uni.navigateTo({
					url:'/pages/course/ClassList'
				});
			},
			gotoTodaycourse(){
				//在这里使用 uni.navigateTo跳转到今日课程的页面
				uni.navigateTo
				({
					url:'/pages/course/Today-course'
				});
			},
			
					  
		},
	};
</script>

<style lang="scss">
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.Promption{
		position: fixed;
		top:10%;
		color: white;
		font-size:50rpx ;
		font-family: cursive;
	}
	.box {
	  width: 69.7%; /* 设置按钮宽度为父容器宽度的80% */
	  height:10.3%;
	  text-align: center; /* 让文本水平居中 */
	  display: flex; /* 使用 Flexbox */
	  justify-content: center; /* 让文本垂直居中 */
	  align-items: center; /* 让文本垂直居中 */
	  font-family: cursive;	
	  border-radius: 15px;
	  background-color: rgba(255,255,255,1);
	  text-align: center;
	  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.4);
	  border: 1px solid rgba(187,187,187,1);
	}
	.box_1{
		position: fixed;
		top:20%;
	}
	.box_2{
		position: fixed;
		top: 35%;
	}
	.box_3{
		position: fixed;
		top:50%;
	}
	.box_4{
		position: fixed;
		top:65%;
	}
	.box-class{//点击按钮后的颜色变化
		background: gray;
	}
	.character{ /* 设置字体大小、颜色和位置 */
		  font-size: 18px;
		  color: blue;
		  font-family: cursive;
	}
	page {
	    background-image: url('https://pic.imgdb.cn/item/6556f813c458853aef4cea99.jpg');
	    background-size: cover;
	    background-repeat: no-repeat;
	    background-position: center center;
	}
</style>
