<template>
  <button class="bookButton">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'my-button',
});
</script>

<style scoped lang="scss">
.bookButton {
  padding: 10px 15px;
  color: teal;
  border: 1px solid $navbar-bg-color;
  background: none;

  @include controller__active;
}

.bookButton:hover {
  cursor: pointer;
}
</style>
