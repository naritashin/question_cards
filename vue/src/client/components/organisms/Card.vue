<template>
  <div class="card-wrap">
    <h2 class="card-number">問題 {{ number }}</h2>
    <h3 class="card-title">{{ title }}</h3>
    <div class="card-content">
      {{ description }}
    </div>
    <div class="btn-list">
      <slot name="button-list" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    number: {
      type: String,
      default: '0'
    },
    title: {
      type: String,
      default: 'title'
    },
    description: {
      type: String,
      default: 'description'
    }
  }
}
</script>

<style scoped>
.card-wrap {
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  bottom: 0;
  box-shadow: 0 0 16px #ccc;
  box-sizing: border-box;
  color: #333;
  display: grid;
  grid-template-rows: 10% 20% 30% 40%;
  height: 320px;
  left: 0;
  margin: auto;
  padding: 24px 12px;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 200ms ease;
  width: 560px;
}
.card-number {
  font-size: 20px;
}
.card-title {
  font-size: 24px;
}
.card-content {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
}

#first.answered,
#second.answered,
#third.answered,
#forth.answered,
#fifth.answered {
  left: 100vw;
  top: 100%;
}

.btn-list {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  text-align: center;
}
</style>
