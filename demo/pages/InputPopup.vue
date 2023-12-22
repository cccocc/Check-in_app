<!-- InputPopup.vue -->
<template>
  <div class="input-popup" v-show="visible">
    <div class="popup-content">
		<text>请填写基本信息：</text>
		
      <input class="input" type="text" id="name" v-model="name" placeholder="姓名"/>

      <input class="input" style="top: calc(23% + 120px);" type="text" id="studentId" v-model="studentId" placeholder="学号" />

      <input class="input" style="top: calc(23% + 177px);" type="text" id="class" v-model="className" placeholder="班级"/>

      <button @click="submit" class="submit" >提交</button>
	  <button @click="closePopup" class="submit" style="left: 52%;" >取消</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: '',
      studentId: '',
      className: ''
    };
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
	setSubmitCallback(callback) {
	    this.submitCallback = callback;
	  },
    submit: function() {
      // You can emit an event with the entered data
      this.$emit('submit', {
        name: this.name,
        studentId: this.studentId,
        className: this.className
      });
		console.log('姓名：',this.name);
		console.log('学号：',this.studentId);
		console.log('班级：',this.className);
		if (this.submitCallback) {
		      // 调用回调函数
		      this.submitCallback();
		    }
      // Close the popup after submitting
      this.closePopup();
    }
  },
  watch: {
    visible: function (newVal) {
      if (newVal) {
        // Clear input fields when the popup is opened
        this.name = '';
        this.studentId = '';
        this.className = '';
      }
    }
  }
};
</script>

<style scoped>
.input-popup {
  position: fixed;
  left: 15%;
  top: 23%;
  width: 70%;
  height: 300px;
  line-height: 20px;
  border-radius: 25px;
  background-color: rgba(255,255,255,1);
  color: rgba(16,16,16,1);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(29, 66, 204, 0.5);
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  z-index: 999;
}

.popup-content {
  padding: 20px;
  text-align: center;
  color: #1d42cc;
  font-size: 14px;
  font-family: cursive;
}
.input{
	position: fixed;
	left: 18%;
	top: calc(23% + 63px);
	width: 60%;
	height: 30px;
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
.submit{
	position: fixed;
	left: 18%;
	top: calc(23% + 240px);
	width: 30%;
	height: 40px;
	line-height: 20px;
	display: flex; // Use flexbox
	justify-content: center; // Center horizontally
	align-items: center; // Center vertically
	border-radius: 13px;
	background-color: rgba(29, 66, 204, 1.0);
	color: rgba(255, 255, 255, 1.0);
	font-size: 14px;
	font-family: Roboto;
	font-family:cursive;
	text-align: center; 
	border: 1px solid rgba(29,66,204,1);
}

/* Style for input fields and button */
label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

button {
  background-color: #1d42cc;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
