<template>
  <section class="dropDownMenuWrapper" v-click-outside="onClickOutside">

    <button
      class="dropDownMenuButton flex-container"
      ref="menu"
      @click="openClose"
    >
      <font-awesome-icon
        icon="ellipsis-v"
        class="flex-item"
        :class="iconWhite ? 'icon__light' : 'icon__dark'"
      />
    </button>

    <section class="dropdownMenu" v-if="isOpen" >
      <div class="menuArrow" />
      <slot />
    </section>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'my-dropdown-menu',
  props: {
    iconWhite: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openClose() {
      this.isOpen = !this.isOpen;
    },
    onClickOutside() {
      this.isOpen = false;
    },
  },
});
</script>

<style scoped lang="scss">
.flex-container {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-item {
  display: flex;
  align-items: center;
  text-align: center;
}

.dropDownMenuWrapper {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 8px;

  .dropDownMenuButton {
    border: none;
    font-size: inherit;
    background: none;
    outline: none;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    margin: 0;
    line-height: 1;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
  }

  .dropdownMenu {
    position: absolute;
    top: 66%;
    right: -10px;
    width: 100%;
    min-width: 300px;
    min-height: 10px;
    border-radius: 8px;
    border: 1px solid #eee;
    box-shadow: 2px 2px 0 0 rgba(black, .03);
    background: white;
    padding: 10px 30px;
    animation: menu 0.3s ease forwards;
    color: $bookmark-color;
    z-index: 2;

    .menuArrow {
      width: 20px;
      height: 20px;
      position: absolute;
      top: -10px;
      right: 20px;
      border-left: 1px solid #eee;
      border-top: 1px solid #eee;
      background: white;
      transform: rotate(45deg);
      border-radius: 4px 0 0 0;
    }
  }

  .icon__light {
    color: $text-color;
  }

  .icon__dark {
    color: $bookmark-color;
  }

  @keyframes menu {
    from { transform: translate3d( 0, 30px ,0 ) }
    to { transform: translate3d( 0, 20px ,0 ) }
  }

}

</style>
