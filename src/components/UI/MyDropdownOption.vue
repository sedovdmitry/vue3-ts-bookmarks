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

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'my-dropdown-option',
  emits: ['closeDropDown'],
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
.option {
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 15px 10px;
  cursor: pointer;
  position: relative;
  z-index: 2;

  &:last-child {
    border-bottom: 0;
  }

  * {
    color: inherit;
    text-decoration: none;
    background: none;
    border: 0;
    padding: 0;
    outline: none;
    cursor: pointer;
  }

  @include controller__active;

}

</style>
