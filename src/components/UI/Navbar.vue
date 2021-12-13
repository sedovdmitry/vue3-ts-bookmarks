<template>
  <div class="navbar">
    <div class="navbar__home" @click="$router.push('/')">Закладки</div>
    <div class="navbar__search">
      <my-input
        v-focus
        v-model="search"
        placeholder="Искать в закладках"
        typeInput="main"
      />
    </div>
    <div class="navbar__menu">
      <my-dropdown-menu iconWhite>
        <section class="option">
          <button @click="sayHello">This is button for method</button>
        </section>
        <section class="option">
          <a href="https://duckduckgo.com">This is basic a -link</a>
        </section>
        <section class="option">
          <router-link to="/about">О сайте</router-link>
        </section>
      </my-dropdown-menu>

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
  margin-right: 10px;
  padding: 15px;
}
.navbar__menu {
  margin-left: auto;
  color: $text-color;
  align-items: center;
  padding: 15px 0 15px 20px;
  &:hover {
    cursor: pointer;
  }
}

.navbar__search {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
