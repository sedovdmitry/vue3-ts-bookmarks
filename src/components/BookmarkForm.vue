<template>
  <form @submit.prevent>
    <div class="form__field">
      <label>Название</label>
      <my-input
        v-focus
        type="text"
        v-model="bookmark.name"
        placeholder="Название закладки"
        inputType="default"
        :class="{ error: v$.bookmark.name.$errors.length }"
      />
    </div>
    <div class="form__field">
      <label>Ссылка</label>
      <my-input
        v-model="bookmark.url"
        type="text"
        placeholder="ссылка на закладку"
        inputType="default"
        :class="{ error: v$.bookmark.url.$errors.length }"
      />
    </div>
    <my-button
      class="formButton"
      @click="saveBookmark"
      :disabled="v$.bookmark.$invalid"
    >
      Сохранить
    </my-button>
  </form>
</template>

<script>
import { defineComponent } from 'vue';
import { required, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default defineComponent({
  name: 'bookmark-form',
  data() {
    return {
      bookmarks: [],
      bookmark: {
        id: null,
        name: '',
        url: '',
        createdAt: null,
      },
    };
  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      bookmark: {
        name: {
          required,
          min: minLength(4),
          $message: 'Минимум 4 символа',
        },
        url: {
          required,
          min: minLength(10),
          $message: 'Минимум 10 символов',
        },
      },
    };
  },
  methods: {
    saveBookmark() { // handle: edit + new
      if (this.bookmark.createdAt) { // edit bookmark
        this.bookmark.updatedAt = Date.now();
        this.$store.commit('bookmark/editBookmark', this.bookmark);
        this.$store.commit('bookmark/setEditedBookmark', null);
        this.$router.push('/');
      } else { // new bookmark, send data to parent
        this.bookmark.id = Math.floor(Math.random() * (1000000 + 1));
        this.bookmark.createdAt = Date.now();
        this.bookmark.updatedAt = null;
        this.bookmark.deletedAt = null;
        this.$emit('save', this.bookmark);
      }

      this.bookmark = {
        id: null,
        name: '',
        url: '',
        createdAt: null,
      };
    },
  },
  mounted() {
    const editedBookmark = this.$store.getters['bookmark/getEditedBookmark'];
    if (editedBookmark) {
      this.bookmark.id = editedBookmark.id;
      this.bookmark.name = editedBookmark.name;
      this.bookmark.url = editedBookmark.url;
      this.bookmark.createdAt = editedBookmark.createdAt;
    }
  },
});
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.formButton {
  align-self: flex-end;
  margin-top: 15px;
}

.form__field {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.error {
  border: 2px solid darkred;
}
</style>
