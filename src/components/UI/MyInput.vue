<template>
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="input"
    :class="typeInput === 'default' ? 'default' : 'main'"
  />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
    typeInput: {
      type: String,
      default: 'default',
    },
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
  width: 50%;
  border: 0;
  border-radius: 2%;
  height: 35px;
  min-width: 150px;
  padding: 0 10px;
}

.main {
  caret-color: $search-placeholder-color;
  color: $search-placeholder-color;
  font-size: 20px;
  background: $search-color;

  &::placeholder{
    color: $search-placeholder-color;
    padding-left: 15px;
  }
  &:focus {
    outline: none;
    color: $search-placeholder-color;
  }
  @media (max-width: 768px) {
      width: 100%;
  }
}

.default {
  width: 75%;
  border: 1px solid $search-placeholder-color;
  justify-content: center;
}

</style>
