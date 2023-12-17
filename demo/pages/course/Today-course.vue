<template>
<view class="container">
	<text class="Promption">今日课程</text>
	<view class="father-vector">
		<view class="child-vector1">
			{{todayDate}}
		</view>
		<view class="child-vector2">
			{{todayDay}}
		</view>
	</view>
</view>
</template>

<script>
	export default{
		data()
		{
			return{
				todayDate:'',
				todayDay:'',
			}
		},
		created(){
		this.getTodayDate();	
		this.getTodayDay();
		},
		methods:{
			getTodayDate(){
				const today=new Date();
				const year=today.getFullYear();
				const month=today.getMonth()+1;
				const day=today.getDate();
				//将日期转化为想要的格式
				this.todayDate=`${year}年${month}月${day}日`
			},
			 getTodayDay() {
			      const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
			      const today = new Date().getDay(); // 获取星期几的数字表示，0表示星期日，1表示星期一，以此类推
			      this.todayDay = days[today]; // 根据数字获取对应的星期几
			    },
		}
	}
</script>

<style>
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
	.father-vector{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		position: fixed;
		top: 20%;
		width: 72.5%;
		height: 34.8%;
		border-radius: 25px;
		background-color: rgba(255,255,255,1);
		text-align: center;
		border: 1px solid rgba(187,187,187,1);
	}
	.child-vector1{
		flex: 0.5;
		border-radius: 15px;
		background-color: rgba(29,66,204,1);
		color: rgba(255,255,255,1);
		margin-top: -60%;
		height: 13%;
		//文字
		font-size: 14px;
		font-family: cursive;
		text-align: center;
		border: 1px solid rgba(187,187,187,1);		
		text-align: center; /* 让文本水平居中 */
		display: flex; /* 使用 Flexbox */
		justify-content: center; /* 让文本垂直居中 */
		align-items: center; /* 让文本垂直居中 */
	} 
	.child-vector2{
		flex: 0.3;
		border-radius: 18px;
		background-color: rgba(255,255,255,1);
		color: rgba(29,66,204,1);
		margin-top: -60%;
		height: 13%;
		font-size: 14px;
		text-align: center;
		border: 2px solid rgba(29,66,204,1);
		font-family: cursive;
		text-align: center; /* 让文本水平居中 */
		display: flex; /* 使用 Flexbox */
		justify-content: center; /* 让文本垂直居中 */
		align-items: center; /* 让文本垂直居中 */
	} 
	.Promption{
		color: white;
		position: fixed;
		top:10%;
		font-size:50rpx ;
		font-family: cursive;
	}
	
	page {
	    background-image: url('https://pic.imgdb.cn/item/6556f813c458853aef4cea99.jpg');
	    background-size: cover;
	    background-repeat: no-repeat;
	    background-position: center center;
	}

</style>