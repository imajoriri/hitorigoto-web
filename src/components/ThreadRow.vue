<template>
  <div class="threadRow">
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  props: {
    bodyHtml: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {};
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
// .threadRow.ql-editor > * {
//   cursor: pointer !important;
// }
</style>
