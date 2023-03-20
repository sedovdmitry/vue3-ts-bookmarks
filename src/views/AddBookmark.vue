<template>
  <div class="container margin__top__20">
    <div class="flex">
      <div class="col1">
        <h4 v-if="$store.state.bookmark?.editedBookmark?.name">
          Editing this bookmark
        </h4>
        <h4 v-else>
          Adding a new bookmark
        </h4>
        <div class="form__content margin__top__20">
          <bookmark-form
            @save="saveBookmark"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookmarkForm from '@/components/BookmarkForm.vue';
import { Bookmark } from '@/types/Bookmark';

export default defineComponent({
  name: 'Bookmark',
  components: {
    BookmarkForm,
  },
  methods: {
    saveBookmark(bookmark: Bookmark) { // for new bookmark
      const allBookmarks = this.$store.getters['bookmark/searchedBookmarks'];
      allBookmarks.push(bookmark);
      this.$store.commit('bookmark/setBookmarks', allBookmarks);
      // this.$router.push('/');
    },
  },
});
</script>

<style scoped lang="scss">
.form__content {
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
