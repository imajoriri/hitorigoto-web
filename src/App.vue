<template>
  <home-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeView from "./views/HomeView.vue";

export default defineComponent({
  components: { HomeView },
});
</script>

<style>
body {
  margin: 0;
}
</style>
