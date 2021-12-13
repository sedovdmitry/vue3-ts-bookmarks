<template>
  <div class="home">
    <div class="container">
      <div class="flex">
        <div class="col1">
          <router-link to="/bookmark"><my-button>Добавить</my-button></router-link>
        </div>
        <div class="col1 margin__top__20">
          <bookmark-list
            class="bookmarkList"
            :bookmarks="this.$store.getters['bookmark/searchedAndSortedBookmarks']"
          />
        </div>
      </div>
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
.bookmarkList {
  width: 100%;
}
</style>
