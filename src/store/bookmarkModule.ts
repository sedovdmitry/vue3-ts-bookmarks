import { Bookmark } from '@/types/Bookmark';
import fetchBookmarks from '@/services/newsAPI';

interface State {
  bookmarks: Bookmark[]
}

const bookmarkModule = {
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
    async loadBookmarks() {
      const data = await fetchBookmarks(1, 10);
      console.log('data', data);
    },
  },
  namespaced: true,
};

export default bookmarkModule;
