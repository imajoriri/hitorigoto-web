<template>
  <router-view />
  <!-- <v-app class="v-app">
    <header>
      <router-link to="/">home </router-link> |
      <router-link to="/thread"> thread</router-link>
    </header>
    <v-main>
      <router-view />
    </v-main>
  </v-app> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      //
    };
  },
});
</script>

<style lang="scss">
// header {
//   display: flex;
//   z-index: 10000;
// }
</style>
