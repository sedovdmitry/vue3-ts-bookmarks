<template>
  <div class="bookmark">
    <div class="bookmark__link" @click="openInNewTab">
      {{bookmark.name}}
    </div>
    <div class="bookmark__btn">
      <my-dropdown-menu>
        <section class="option" @click="editBookmark">
          <button
            :v-model="bookmark"
          >
            <font-awesome-icon
              class="margin__right__10"
              icon="pencil-alt"
            />
            Изменить закладку
          </button>
        </section>
        <section class="option">
          <button>
            <font-awesome-icon
              class="margin__right__10"
              icon="trash"
            />
            Удалить закладку
          </button>
        </section>
      </my-dropdown-menu>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'bookmark-item',
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
