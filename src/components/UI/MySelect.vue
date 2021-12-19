<template>
  <!-- eslint-disable -->
  <select class="custom-select" :value="modelValue" @change="changeOption">
    <option disabled value="">Сортировка закладок</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event: any) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
});
</script>

<style scoped lang="scss">

</style>
