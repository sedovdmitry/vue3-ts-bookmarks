<template>
  <div class="home">
    <div class="container">
      <bookmark-list
        class="bookmarkList"
        :bookmarks="bookmarks"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Bookmark } from '@/types/Bookmark';
import BookmarkList from '@/components/BookmarkList.vue';

export default defineComponent({
  name: 'home',
  components: {
    BookmarkList,
  },
  data() {
    return {
      bookmarks: [] as Bookmark[],
    };
  },
  mounted() {
    this.bookmarks = this.$store.state.bookmark.bookmarks;
    this.$store.dispatch('bookmark/loadBookmarks');
  },
});
</script>
<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  color: $text-color;
}
</style>
