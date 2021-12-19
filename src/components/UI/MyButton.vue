<template>
  <button class="bookButton">
    <slot></slot>
  </button>
</template>

<script lang="ts">
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

  &:hover {
    cursor: pointer;
  }

  &:disabled, [disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
}

</style>
