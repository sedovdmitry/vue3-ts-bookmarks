<template>
  <navbar/>
  <router-view/>
</template>
<script>
import { defineComponent } from 'vue';
import Navbar from '@/components/UI/Navbar.vue';

export default defineComponent({
  components: {
    Navbar,
  },
});

</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  width: auto;
  height: 2000px;
  background-color: whitesmoke;
}
</style>
