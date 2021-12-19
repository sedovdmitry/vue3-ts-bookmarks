import { Bookmark } from '@/types/Bookmark';
import fetchBookmarks from '@/services/newsAPI';
import stubData from '@/store/stubData';
import { Article } from '@/types/NewsApi.Interface';

interface sortOptions {
  name: string,
  value: string
}

export interface State {
  bookmarks: Bookmark[],
  isBookmarkLoading: boolean,
  searchQuery: string,
  page: number,
  pageSize: number,
  totalPages: number,
  editedBookmark: Bookmark | null,
  selectedSort: string;
  sortOptions: sortOptions[],
}

const bookmarkModule = {
  state: (): State => ({
    bookmarks: [...stubData],
    isBookmarkLoading: false,
    searchQuery: '',
    page: 1,
    pageSize: 15,
    totalPages: 1,
    editedBookmark: null,
    selectedSort: 'createdAt',
    sortOptions: [
      { value: 'name', name: 'По названию' },
      { value: 'url', name: 'По ссылкам' },
      { value: 'createdAt', name: 'По дате' },
    ],
  }),
  getters: {
    searchedBookmarks(state: State): Bookmark[] {
      return state.bookmarks.filter(
        (b: Bookmark) => b.name.toLowerCase().includes(state.searchQuery.toLowerCase()),
      );
    },
    searchedAndSortedBookmarks(state: State): Bookmark[] {
      switch (state.selectedSort) {
        case 'createdAt':
          return [...state.bookmarks].sort(
            (b1, b2) => b1.createdAt - b2.createdAt,
          );
        case 'name':
          return [...state.bookmarks].sort(
            (b1, b2) => b1.name?.localeCompare(b2.name),
          );
        case 'url':
          return [...state.bookmarks].sort(
            (b1, b2) => b1.url?.localeCompare(b2.url),
          );
        default:
          return state.bookmarks;
      }
    },
    getEditedBookmark(state: State): Bookmark | null {
      return state.editedBookmark;
    },
  },
  mutations: {
    setBookmarks(state: State, payload: Bookmark[]): void {
      state.bookmarks = payload;
    },
    setBookmarksFromApi(state: State, payload: Article[]): void {
      const bookmarks: Bookmark[] = payload.map((article) => ({
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        name: article.title,
        url: article.url,
        createdAt: Date.now(),
        updatedAt: null,
        deletedAt: null,
      }));
      state.bookmarks = [...state.bookmarks, ...bookmarks];
    },
    setLoading(state: State, payload: boolean): void {
      state.isBookmarkLoading = payload;
    },
    setSearchQuery(state: State, payload: string): void {
      state.searchQuery = payload;
    },
    setPage(state: State, payload: number): void {
      state.page = payload;
    },
    setTotalPages(state: State, payload: number): void {
      state.totalPages = payload;
    },
    setEditedBookmark(state: State, bookmark: Bookmark): void {
      state.editedBookmark = bookmark;
    },
    editBookmark(state: State, payload: Bookmark): void {
      const bookmark = state.bookmarks
        .find((b) => b.id === payload.id);
      Object.assign(bookmark, payload);
    },
    deleteBookmark(state: State, payload: Bookmark): void {
      state.bookmarks = state.bookmarks.filter((b) => b.id !== payload.id);
    },
    setSelectedSort(state: State, payload: string): void {
      state.selectedSort = payload;
    },
  },
  actions: {
    async loadBookmarks(context: any): Promise<void> {
      context.commit('setLoading', true);
      const data = await fetchBookmarks(1, context.state.pageSize);
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
