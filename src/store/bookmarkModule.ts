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
    searchedBookmarks(state: State): Bookmark[] {
      return state.bookmarks.filter(
        (b: Bookmark) => b.name.toLowerCase().includes(state.searchQuery.toLowerCase()),
      );
    },
  },
  mutations: {
    setBookmarks(state: State, bookmarks: Bookmark[]): void {
      state.bookmarks = bookmarks;
    },
    setBookmarksFromApi(state: State, articles: Article[]): void {
      const bookmarks: Bookmark[] = articles.map((article) => ({
        name: article.title,
        url: article.url,
        createdAt: Date.now(),
        updatedAt: null,
        deletedAt: null,
      }));
      state.bookmarks = [...state.bookmarks, ...bookmarks];
    },
    setLoading(state: State, flag: boolean): void {
      state.isBookmarkLoading = flag;
    },
    setSearchQuery(state: State, searchQuery: string): void {
      state.searchQuery = searchQuery;
    },
    setPage(state: State, page: number): void {
      state.page = page;
    },
    setTotalPages(state: State, totalPages: number): void {
      state.totalPages = totalPages;
    },
  },
  actions: {
    async loadBookmarks(context: any): Promise<void> {
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
