<template>
  <div class="content p-d-flex p-dir-row">
    <div><LinqueSidebar /></div>
    <div><LinqueChatBox /></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import LinqueSidebar from "../components/Linque/LinqueSidebar.vue";
import LinqueChatBox from '../components/Linque/LinqueChatBox.vue';

export default defineComponent({
  name: 'Linque',
  components: {
    LinqueSidebar, LinqueChatBox
  }
});
</script>

<style scoped>
.content {
  box-sizing: border-box;
  height: calc(100vh - 58px);
}
</style>
