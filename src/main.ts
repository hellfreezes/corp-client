import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router';
import store from './store';
import axios from './axios';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      router.push('/login');
    }
    return Promise.reject(error);
  }
);

router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);
  next();
});

createApp(App)
  .use(store)
  .use(PrimeVue)
  .use(router)
  .mount('#app');
