<template>
  <div class="home">
    <div class="container">
      <bookmark-list
        class="bookmarkList"
        :bookmarks="this.$store.getters['bookmark/searchedBookmarks']"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookmarkList from '@/components/BookmarkList.vue';

export default defineComponent({
  name: 'home',
  components: {
    BookmarkList,
  },
  computed: {

  },
  mounted() {
    // this.$store.dispatch('bookmark/loadBookmarks');
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
