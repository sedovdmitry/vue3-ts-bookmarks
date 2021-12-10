import { createStore } from 'vuex';
import bookmarkModule from '@/store/bookmarkModule';

export default createStore({
  modules: {
    bookmark: bookmarkModule,
  },
});
