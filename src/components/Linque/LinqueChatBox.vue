<template>
  <div class="content">
    <LinqueMessage
      v-for="(message, index) in messages"
      :key="index"
      :name="message.name"
      :owner="false"
      :text="message.text"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import LinqueMessage from './LinqueMessage';

export default defineComponent({
  name: 'LinqueChatBox',
  components: {
    LinqueMessage,
  },
  data: () => ({
    messages: [
      {
        name: 'Me',
        owner: true,
        text: 'This is a message',
      },
    ],
  }),
});
</script>

<style scoped>
.content {
  padding: 5px;
}
</style>
