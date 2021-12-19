<template>
  <section class="option" @click="editBookmark" :v-model="bookmark">
    <button>
      <font-awesome-icon
        class="margin__right__10"
        :icon="icon"
      />
      {{ text }}
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'my-dropdown-option',
  props: {
    bookmark: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">

</style>
