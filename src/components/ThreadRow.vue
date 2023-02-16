<template>
  <div class="threadRow">
    <el-button @click="() => open()" link type="primary">thread ></el-button>
    <QuillEditor
      :enable="false"
      :read-only="true"
      theme=""
      :content="bodyHtml"
      content-type="html"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    bodyHtml: {
      type: String,
      required: true,
    },
  },
  setup(_, content) {
    const open = () => {
      content.emit("open");
    };
    return { open };
  },
});
</script>

<style lang="scss">
.threadRow {
  padding: 8px;
}
.threadRow:hover {
  background-color: #f6f6f6 !important;
  cursor: pointer !important;
}
</style>
