<template>
  <div class="topbar">
    <Menubar :model="menuItems" />
  </div>
  <div class="chat-content">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import Menubar from 'primevue/menubar';

import { authModule } from '@/store/modules/auth';

export default defineComponent({
  name: 'MainLayout',
  components: {
    Menubar,
  },
  data() {
    return {
      menuItems: [
        { label: 'Начало', icon: 'pi pi-home', to: '/' },
        { label: 'Документы', icon: 'pi pi-file-o' },
        { label: 'Линк', icon: 'pi pi-comment', to: '/linque' },
        { label: 'Профиль', icon: 'pi pi-user' },
        {
          label: 'Выход',
          icon: 'pi pi-fw pi-power-off',
          command: this.logout,
        },
      ],
    };
  },
  methods: {
    logout() {
      authModule.actions.logout();
      this.$router.push('/login');
    },
  },
});
</script>

<style scoped>
.topbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
}
.chat-content {
  position: fixed;
  width: 100%;
  left: 0;
  top: 50px;
  height: 100%;
}
</style>
