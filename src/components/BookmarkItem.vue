<template>
  <div class="bookmark">
    <div class="bookmark__link" @click="openInNewTab">
      {{bookmark.name}}
    </div>
    <div class="bookmark__btn">
      <my-dropdown-menu>
        <my-dropdown-option
          :bookmark="bookmark"
          @click="editBookmark"
          icon="trash"
          text="Изменить закладку"
        />
        <my-dropdown-option
          :bookmark="bookmark"
          @click="deleteBookmark"
          icon="trash"
          text="Удалить закладку"
        />
      </my-dropdown-menu>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MyDropdownOption from '@/components/UI/MyDropdownOption.vue';

export default defineComponent({
  name: 'bookmark-item',
  components: { MyDropdownOption },
  props: {
    bookmark: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openInNewTab() {
      window.open(this.bookmark.url, '_blank').focus();
    },
    editBookmark() {
      this.$store.commit('bookmark/setEditedBookmark', this.bookmark);
      this.$router.push('/bookmark');
    },
    deleteBookmark() {
      this.$store.commit('bookmark/deleteBookmark', this.bookmark);
      this.$emit('closeDropdown');
    },
  },
});
</script>

<style scoped lang="scss">
.bookmark {
  display: flex;
  margin: 5px 0;
  transition: .2s;
  justify-content: space-between;
}

.bookmark__link {
  cursor: pointer;
  color: $bookmark-color;
  width: 100%;
  padding: 12px 8px 12px 40px;
}

.bookmark__link:hover {
  color: $bookmark-color__active;
  background-color: $bookmark-bg__active;
}

.bookmark__btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: $bookmark-color;
  padding: 0 15px;
}

</style>
