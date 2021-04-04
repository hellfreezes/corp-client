import { createModule } from 'vuexok';
import axios from '@/axios';

import store from '@/store';

export const authModule = createModule(store, 'auth', {
  state: {
    userId: '',
    token: '',
    expiresIn: '',
  },
  mutations: {
    updateAuthSession(state, payload: { userId: string; token: string }) {
      state.userId = payload.userId;
      state.token = payload.token;
      localStorage.setItem('token', payload.token);
      localStorage.setItem('userId', payload.userId);
      axios.defaults.headers.common['Authorization'] = payload.token;
    },
  },
  actions: {
    async logout() {
      // await axios.get('users/logout');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      authModule.mutations.updateAuthSession({ userId: '', token: '' });
    },

    async login(state, body: { username: string; password: string }) {
      try {
        const response = await axios.post('auth/login', body);
        axios.defaults.headers.common['Authorization'] =
          response.data.access_token;

        authModule.mutations.updateAuthSession({
          userId: response.data.id,
          token: response.data.access_token,
        });
      } catch (error) {
        console.dir(error);
      }
    },

    async register(state, user) {
      try {
        await axios.post('users', user);
      } catch (error) {
        console.dir(error);
      }
    },
  },
});
