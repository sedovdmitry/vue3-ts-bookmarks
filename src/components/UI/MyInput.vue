<template>
  <input type="text" class="input" placeholder="Искать в закладках" />
</template>

<script>
export default {
  name: 'my-input',
};
</script>

<style scoped lang="scss">
.input {
  display: flex;
  width: 50%;
  background: $search-color;
  border: 0;
  border-radius: 2%;
  height: 25px;
  min-width: 150px;
}

.input::placeholder {
  color: $search-placeholder-color;
}
</style>
