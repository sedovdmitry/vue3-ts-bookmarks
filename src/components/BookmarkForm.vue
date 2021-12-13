<template>
  <form @submit.prevent>
    <my-input
      v-focus
      v-model="bookmark.url"
      type="text"
      placeholder="ссылка на закладку"
      inputType="default"
    />
    <my-input
      type="text"
      v-model="bookmark.name"
      placeholder="Название закладки"
      inputType="default"
    />
    <my-button class="formButton" @click="saveBookmark">Сохранить</my-button>
  </form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'bookmark-form',
  data() {
    return {
      bookmarks: [],
      bookmark: {
        name: '',
        url: '',
        createdAt: null,
      },
    };
  },
  methods: {
    saveBookmark() {
      if (this.bookmark.createdAt) { // edit bookmark
        this.bookmark.updatedAt = Date.now();
        this.$store.commit('bookmark/editBookmark', this.bookmark);
        this.$store.commit('bookmark/setEditedBookmark', null);
      } else { // new bookmark, send data to parent
        this.bookmark.createdAt = Date.now();
        this.bookmark.updatedAt = null;
        this.bookmark.deletedAt = null;
        this.$emit('save', this.bookmark);
      }

      this.bookmark = {
        name: '',
        url: '',
      };
    },
  },
  mounted() {
    console.log();
    const editedBookmark = this.$store.getters['bookmark/getEditedBookmark'];
    // this.bookmarks = this.$store.state.bookmark.bookmarks.filter();
    if (editedBookmark) {
      this.bookmark.name = editedBookmark.name;
      this.bookmark.url = editedBookmark.url;
      this.bookmark.createdAt = editedBookmark.createdAt;
    }
  },
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.formButton {
  align-self: flex-end;
  margin-top: 15px;
}
</style>
