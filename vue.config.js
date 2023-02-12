const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
  css: {
    extract: false,
    loaderOptions: {
      scss: {
        additionalData:
          '@import "@/styles/color.scss"; @import "@/styles/quill.scss";',
      },
    },
  },
});
