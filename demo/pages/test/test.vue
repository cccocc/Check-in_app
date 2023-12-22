<template>
  <div class="timer">
    <p>{{ formatTime }}</p>
    <button @click="startTimer" v-if="!isTiming">开始计时</button>
    <button @click="stopTimer" v-else>停止计时</button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      isTiming: false,
      time: 0,
      timer: null
    }
  },
  computed: {
    formatTime() {
      const minutes = Math.floor(this.time / 60)
      const seconds = this.time % 60
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
  },
  methods: {
    startTimer() {
      this.isTiming = true
      this.timer = setInterval(() => {
        this.time++
      }, 1000)
    },
    stopTimer() {
      this.isTiming = false
      clearInterval(this.timer)
    }
  }
}
</script>
 
<style lang='scss'>
.timer {
  text-align: center;
  font-size: 24px;
  margin-top: 50px;
}
</style>