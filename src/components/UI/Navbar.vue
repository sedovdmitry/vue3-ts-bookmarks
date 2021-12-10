<template>
  <div class="navbar">
    <div class="navbar__home" @click="$router.push('/')">Закладки</div>
    <div class="navbar__search">
      <my-input
        v-model="search"
        placeholder="Искать в закладках"
      />
    </div>
    <div class="navbar__btns">
      <div @click="$router.push('/about')" style="margin-left: 20px">О сайте</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MyInput from '@/components/UI/MyInput.vue';

export default defineComponent({
  name: 'navbar',
  components: {
    MyInput,
  },
  computed: {
    search: {
      get() {
        return this.$store.state.bookmark.searchQuery;
      },
      set(value) {
        this.$store.commit('bookmark/setSearchQuery', value);
      },
    },
  },
});
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  background: $search-text-color;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: center;
}
.navbar__home {
  font-weight: 600;
  color: $text-color;
  cursor: pointer;
}
.navbar__btns {
  margin-left: auto;
  color: $text-color;
}
.navbar__search {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
