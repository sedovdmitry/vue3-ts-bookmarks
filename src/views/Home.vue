<template>
  <div class="home">
    <div class="container">
      <div class="flex">
        <div class="col1 app__controllers">
          <my-select
            v-model="selectedSort"
            :options="sortOptions"
          />
        </div>

        <div class="col1 margin__top__20">
          <transition name="fade-loading">
            <bookmark-list
              class="bookmarkList"
              :bookmarks="this.$store.getters['bookmark/searchedAndSortedBookmarks']"
            />
          </transition>
        </div>
      </div>
      <div ref="observer" class="observer"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookmarkList from '@/components/BookmarkList.vue';
import MySelect from '@/components/UI/MySelect.vue';

export default defineComponent({
  name: 'home',
  components: {
    BookmarkList,
    MySelect,
  },
  computed: {
    sortOptions() {
      return this.$store.state.bookmark.sortOptions;
    },
    selectedSort: {
      get() {
        return this.$store.state.bookmark.selectedSort;
      },
      set(value) {
        this.$store.commit('bookmark/setSelectedSort', value);
      },
    },
  },

  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (
        entries[0].isIntersecting
        && (this.$store.state.bookmark.page <= this.$store.state.bookmark.totalArticles)
        && (this.$store.state.bookmark.page < 5)
      ) {
        this.$store.dispatch('bookmark/loadBookmarks'); // NEWS API call action
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer as HTMLInputElement);
  },
});
</script>
<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  background: $text-color;
}
.bookmarkList {
  width: 100%;
}

.app__controllers {
  display: flex;
  justify-content: flex-end;
  height: 40px;
}

/* animation */
.fade-loading-enter-active,
.fade-loading-leave-active {
  transition: opacity 1s ease;
}

.fade-loading-enter-from,
.fade-loading-leave-to {
  opacity: 0;
}
</style>
