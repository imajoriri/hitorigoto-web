import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

loadFonts();

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(ElementPlus)
  .component("QuillEditor", QuillEditor)
  .mount("#app");
