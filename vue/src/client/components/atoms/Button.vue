<template>
  <button>{{ value }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: {
      type: String,
      default: 'value'
    }
  }
}
</script>

<style scoped>
button,
.btn {
  background: none;
  background-color: #fcfcfa;
  border: 1px solid #ccc;
  border-radius: 50px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  height: 42px;
  line-height: 24px;
  padding: 8px 12px;
  width: 90%;
}

.selected {
  background-color: #ff7;
}
</style>
