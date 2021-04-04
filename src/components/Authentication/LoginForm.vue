<template>
  <Card class="card p-shadow-10">
    <template #title>
      Авторизация
    </template>
    <template #content>
      <div class="p-fluid">
        <div class="p-field">
          <label for="email">Email</label>
          <InputText id="email" type="text" v-model="email" />
        </div>
        <div class="p-field">
          <label for="password">Пароль</label>
          <InputText id="password" type="password" v-model="password" />
        </div>
      </div>
    </template>
    <template #footer>
      <Button
        class="p-mr-2"
        label="Вход"
        :disable="loading"
        @click="loginHandler"
      />
      <Button label="Регистрация" :disable="loading" />
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import { authModule } from '@/store/modules/auth';

export default defineComponent({
  name: 'LoginForm',
  components: {
    Card,
    InputText,
    Button,
  },
  data: () => ({
    loading: false,
    email: '',
    password: '',
  }),
  methods: {
    async loginHandler() {
      this.loading = true;
      try {
        await authModule.actions.login({
          username: this.email,
          password: this.password,
        });

        await this.$router.push('/');
      } catch (error) {
        console.dir(error);
      }
      this.loading = false;
    },
  },
});
</script>

<style scoped>
.card {
  width: 50%;
}
</style>
