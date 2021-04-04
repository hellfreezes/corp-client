<template>
  <div class="content">
    Members
    <Button label="Emit" @click="eventHandler" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import Button from "primevue/button";

import socket from '../../socket';

export default defineComponent({
  name: 'LinqueSidebar',
  components: {
    Button
  },
  data: () => ({
    socket: null
  }),
  mounted() {
    console.log(socket);
    socket.on('messageToClient', (args) => {
      console.log('messageToClient', args);
    });
  },
  methods: {
    eventHandler() {
      console.log('eventHandler');
      socket.emit('events', 'hello!');
    }
  }
});
</script>

<style scoped>
.content {
  width: 15rem;
  padding: 5px;
  border-right: 1px solid var(--surface-d);
}
</style>
