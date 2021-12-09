<template>
  <div class="navbar">
    <div @click="$router.push('/')">Закладки</div>
    <div class="navbar__btns">
      <div @click="$router.push('/add-bookmark')">Добавить закладку</div>
      <div @click="$router.push('/about')" style="margin-left: 20px">О сайте</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  background: $search-text-color;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
