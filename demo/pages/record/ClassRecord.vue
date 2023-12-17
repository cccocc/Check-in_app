<template>
<view class="container">
	<button class="history-button"@click="open">
		<text class="character cha_1">历史记录</text>
	</button>
	<uni-calendar
		ref="calendar"
		class="uni-calendar--hook"
		:clear-date="true"
		:date="info.date"
		:insert="info.insert"
		:lunar="info.lunar"
		:startDate="info.startDate"
		:endDate="info.endDate"
		:range="info.range"
		@confirm="confirm"
		@close="close"
	/>
	<text class="Promption">班级出勤记录</text>
	<view class="Date">{{date_1}}</view>
	<view class='C1'>小红出勤</view>
</view>
</template>

<script>
	/**
	 * 获取任意时间
	 */
	function getDate(date, AddDayCount = 0) {
		if (!date) {
			date = new Date();
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/');
		}
		const dd = new Date(date);
		dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
		const y = dd.getFullYear();
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
		return {
			fullDate: y + '-' + m + '-' + d,
			year: y,
			month: m,
			date: d,
			day: dd.getDay()
		};
	}
	
	
	export default {
		components: {},
		data() {
			return {
				showCalendar: false,
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},
				date_1:'',
			};
		},
		onReady() {
			this.$nextTick(() => {
				this.showCalendar = true;
			});
			// TODO 模拟请求异步同步数据
			setTimeout(() => {
				this.info.date = getDate(new Date(), -30).fullDate;
				this.info.startDate = getDate(new Date(), -60).fullDate;
				this.info.endDate = getDate(new Date(), 30).fullDate;
			}, 2000);
		},
		methods: {
			open() {
				this.$refs.calendar.open();
			},
			close() {
				console.log('弹窗关闭');
			},
			change(e) {
				console.log('change 返回:', e);
				// 模拟动态打卡
				if (this.info.selected.length > 5) return;
				this.info.selected.push({
					date: e.fulldate,
					info: '打卡'
				});
			},
			confirm(selectedDate) {
			    console.log('用户选择的日期:', selectedDate);
				const date = new Date(selectedDate.fulldate);
			    // this.date_1 = selectedDate.fulldate;
				this.date_1 = date.toLocaleDateString('zh-CN', {
				        year: 'numeric',
				        month: 'long',
				        day: 'numeric'
				    });
			},

			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e);
			}
		}
	};
</script>

<style>
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.history-button{
		position: fixed;
		top:1%;
		left:70%;
		border-radius: 31px;
		text-align: center; /* 让文本水平居中 */
		display: flex; /* 使用 Flexbox */
		justify-content: center; /* 让文本垂直居中 */
		align-items: center; /* 让文本垂直居中 */
		font-family: cursive;
		color: rgba(29,66,204,1);
	}
    .Promption{
		position: fixed;
		top:8%;
		color: rgba(255,255,255,1);
		font-size: 28px;
		text-align: left;
		font-family:cursive;
	}
	.Date{
	 	position: fixed;
		top:15%;
		width: 80%;
		height:5%;
		border-radius: 32px;
		background-color: rgba(255,255,255,1);
		text-align: center;
		border: 1px solid rgba(187,187,187,1);
		text-align: center; /* 让文本水平居中 */
		display: flex; /* 使用 Flexbox */
 		justify-content: center; /* 让文本垂直居中 */
	 	align-items: center; /* 让文本垂直居中 */
		 font-family: cursive;
		color: rgba(29,66,204,1); 
	}
	.C1{
		position: fixed;
		top:25%;
		width: 80%;
		height: 70%;;
		border-radius: 20px;
		background-color: rgba(255,255,255,1);
		text-align: center;
		border: 1px solid rgba(187,187,187,1);
	}
	page {
	    background-image: url('https://pic.imgdb.cn/item/6556f813c458853aef4cea99.jpg');
	    background-size: cover;
	    background-repeat: no-repeat;
	    background-position: center center;
	}

</style>