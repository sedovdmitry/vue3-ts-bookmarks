import { createStore } from 'vuex';
import { Bookmark } from '@/types/Bookmark';

interface State {
  bookmarks: Bookmark[]
}

export default createStore({
  state: (): State => ({
    bookmarks: [
      {
        name: 'facebook',
        url: 'https://www.facebook.com/',
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
      {
        name: 'Функциональное программирование на JS',
        url: 'https://habr.com/ru/post/154105/',
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
    ],
  }),
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
