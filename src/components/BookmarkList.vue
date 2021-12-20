<template>
  <transition name="fade-list">
    <div v-if="bookmarks.length > 0">
      <div class="bookmarks">
        <transition-group name="bookmark-list">
          <bookmark-item
            v-for="bookmark in bookmarks"
            :key="bookmark.createdAt"
            :bookmark="bookmark"
          />
        </transition-group>
      </div>
    </div>
    <div v-else>
      <h3>Список закладок пустой</h3>
      <my-button
        @click="$router.push('bookmark')"
        class="margin__top__20"
      >
        Добавить закладку
      </my-button>
    </div>
  </transition>
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

.add__button {

}

.fade-list-enter-active,
.fade-list-leave-active {
  transition: opacity 0.5s ease;
}

.fade-list-enter-from,
.fade-list-leave-to {
  opacity: 0;
}

.bookmark-list-item {
  display: inline-block;
  margin-right: 10px;
}
.bookmark-list-enter-active,
.bookmark-list-leave-active {
  transition: all .5s ease;
}
.bookmark-list-enter-from,
.bookmark-list-leave-to {
  opacity: 0;
  transform: translateX(125px);
}
.bookmark-list-move {
  transition: transform 0.8s ease;
}
</style>
