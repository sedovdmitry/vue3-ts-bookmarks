module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/common.scss";
          @import "@/assets/scss/dropdownOption.scss";
        `,
      },
    },
  },
};
