<template>
  <LoginForm />
</template>

<script>
import { defineComponent } from 'vue';

import LoginForm from "../components/Authentication/LoginForm";

export default defineComponent({
  name: "Login",
  components: {
    LoginForm
  }
});
</script>

<style scoped>

</style>