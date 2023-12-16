<!-- PasswordPopup.vue -->
<template>
  <!-- 弹窗外容器 -->
  <div class="username-popup" v-show="visible">
    <!-- 遮罩层 -->
    <div class="popup-overlay" @click="closePopup"></div>
    <!-- 弹窗内容容器 -->
    <div class="popup-content">
      <!-- 弹窗文本，使用v-html渲染HTML -->
      <p v-html="formattedMessage"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: "不允许使用特殊字符"
    }
  },
  computed: {
    formattedMessage() {
      // 将字符串中的\\n替换为<br>，用于换行
      return this.message.replace(/\\n/g, '<br>');
    }
  },
  methods: {
    // 关闭弹窗的方法
    closePopup() {
      this.$emit('close');
    }
  },
  watch: {
    // 监听visible属性的变化
    visible: function (newVal) {
      // 如果visible为true，延迟2秒后关闭弹窗
      if (newVal) {
        setTimeout(() => {
          this.closePopup();
        }, 2000);
      }
    }
  }
};
</script>

<style scoped>
/* 样式作用范围仅限于当前组件 */
.username-popup {
  /* 弹窗容器居中显示 */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px; /* 弹窗宽度 */
  max-width: 80%; /* 弹窗最大宽度 */
  background: #ffffff; /* 弹窗背景色 */
  border-radius: 8px; /* 弹窗圆角 */
  box-shadow: 0 2px 8px rgba(29, 66, 204, 0.5); /* 弹窗阴影 */
  z-index: 1000; /* 弹窗层级 */
}

.popup-overlay {
  /* 遮罩层全屏显示 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0); /* 遮罩层背景色 */
  z-index: 999; /* 遮罩层层级 */
}

.popup-content {
  /* 弹窗内容容器内边距 */
  padding: 20px;
  text-align: center; /* 弹窗文本居中 */
  color: #1d42cc; /* 弹窗文本颜色 */
  font-size: 14px; /* 弹窗字体大小 */
  font-family:cursive;
}
</style>
