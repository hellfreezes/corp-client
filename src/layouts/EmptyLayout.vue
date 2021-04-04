<template>
  <div class="p-d-flex p-flex-column p-ai-center p-jc-center layout">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "EmptyLayout"
})
</script>

<style scoped>
  .layout {
    box-sizing: border-box;
    height: 100vh;
  }
</style>