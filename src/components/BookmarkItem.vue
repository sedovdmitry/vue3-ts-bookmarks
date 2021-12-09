<template>
  <div><b>Название:</b> {{bookmark.name}}</div>
</template>

<script>
import { defineComponent } from 'vue';
// import { Bookmark } from '@/types/Bookmark';

export default defineComponent({
  name: 'bookmark-item',
  props: {
    bookmark: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">

</style>
