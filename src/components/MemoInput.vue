<template>
  <div class="memoInput">
    <QuillEditor theme="" class="memoInput__input" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
});
</script>

<style lang="scss">
.memoInput {
  border: 1px solid grey;
  &__input {
    // height: auto !important;
  }
}
</style>
