import { createModule } from 'vuexok';

import store from '@/store';

export const linqueModule = createModule(store, 'linque', {
  state: {
    message: [],
  },
});
