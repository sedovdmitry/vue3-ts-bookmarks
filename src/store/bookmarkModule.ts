import { Bookmark } from '@/types/Bookmark';
import fetchBookmarks from '@/services/newsAPI';
import stubData from '@/store/stubData';
import { Article } from '@/types/NewsApi.Interface';

export interface State {
  bookmarks: Bookmark[],
  isBookmarkLoading: boolean,
  searchQuery: string,
  page: number,
  pageSize: number,
  totalPages: number,
}

const bookmarkModule = {
  state: (): State => ({
    bookmarks: [...stubData],
    isBookmarkLoading: false,
    searchQuery: '',
    page: 1,
    pageSize: 10,
    totalPages: 0,
  }),
  getters: {

  },
  mutations: {
    setBookmarks(state: State, bookmarks: Bookmark[]) {
      state.bookmarks = bookmarks;
    },
    setBookmarksFromApi(state: State, articles: Article[]) {
      const bookmarks: Bookmark[] = articles.map((article) => ({
        name: article.title,
        url: article.url,
        createdAt: Date.now(),
        updatedAt: null,
        deletedAt: null,
      }));
      state.bookmarks = [...state.bookmarks, ...bookmarks];
    },
    setLoading(state: State, flag: boolean) {
      state.isBookmarkLoading = flag;
    },
    setSearchQuery(state: State, searchQuery: string) {
      state.searchQuery = searchQuery;
    },
    setPage(state: State, page: number) {
      state.page = page;
    },
    setTotalPages(state: State, totalPages: number) {
      state.totalPages = totalPages;
    },
  },
  actions: {
    async loadBookmarks(context: any) {
      context.commit('setLoading', true);
      const data = await fetchBookmarks(1, 10);
      console.log('data', data);
      if (data !== null && data.totalResults !== undefined) {
        context.commit('setTotalPages', Math.ceil(data.totalResults / context.state.pageSize));
        context.commit('setBookmarksFromApi', data.articles);
        context.commit('setPage', context.state.page + 1);
      } else {
        console.log('Данные не были загружены, попробуйте позже');
      }
      context.commit('setLoading', false);
    },
  },
  namespaced: true,
};

export default bookmarkModule;
