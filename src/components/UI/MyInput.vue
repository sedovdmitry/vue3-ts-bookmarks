<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input"  />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  display: flex;
  width: 50%;
  background: $search-color;
  border: 0;
  border-radius: 2%;
  height: 35px;
  min-width: 150px;
  caret-color: $search-placeholder-color;
  color: $search-placeholder-color;
  font-size: 20px;
  padding: 0 10px;
}

.input::placeholder {
  color: $search-placeholder-color;
  padding-left: 15px;
}

.input:focus{
  outline: none;
  color: $search-placeholder-color;
}
</style>
