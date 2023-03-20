<template>
  <!-- eslint-disable -->
  <select class="custom-select" :value="modelValue" @change="changeOption">
    <option disabled value="">Bookmark sorting</option>
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
    changeOption(event: Event) {
      this.$emit('update:modelValue', (event.target as HTMLSelectElement).value);
    },
  },
});
</script>

<style scoped lang="scss">
.custom-select {
  border: 0;
}
</style>
