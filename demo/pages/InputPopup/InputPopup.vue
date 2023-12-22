<!-- InputPopup.vue -->
<template>
  <div class="input-popup" v-show="visible">
    <div class="popup-overlay" @click="closePopup"></div>
    <div class="popup-content">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />

      <label for="studentId">Student ID:</label>
      <input type="text" id="studentId" v-model="studentId" />

      <label for="class">Class:</label>
      <input type="text" id="class" v-model="className" />

      <button @click="submit">Submit</button>
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
    submit() {
      // You can emit an event with the entered data
      this.$emit('submit', {
        name: this.name,
        studentId: this.studentId,
        className: this.className
      });

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  max-width: 80%;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(29, 66, 204, 0.5);
  z-index: 1000;
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

