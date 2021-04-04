<template>
  <component :is="layoutName">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import EmptyLayout from '@/layouts/EmptyLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    'empty-layout': EmptyLayout,
    'main-layout': MainLayout
  },
  computed: {
    layoutName() {
      const layoutMeta = this.$route.meta.layout;
      return (layoutMeta || 'empty') + '-layout';
    },
  },
});
</script>

<style>
html {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
}
</style>
