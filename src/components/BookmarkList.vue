<template>
  <div class="bookmarks">
    <bookmark-item
      v-for="bookmark in bookmarks"
      :key="bookmark.createdAt"
      :bookmark="bookmark"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookmarkItem from '@/components/BookmarkItem.vue';

export default defineComponent({
  name: 'bookmark-list',
  components: {
    BookmarkItem,
  },
  props: {
    bookmarks: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.bookmarks {
  justify-content: left;
  width: 100%;
  background: $bookmarks-list;
}
</style>
