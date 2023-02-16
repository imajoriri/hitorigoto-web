<template>
  <div class="threadDetail">
    <div class="threadDetaillHeader">
      <!-- 削除ボタン -->
      <el-button
        plain
        @click="() => deleteClick()"
        class="threadDeleteButton"
        size="small"
        text
        ><v-icon icon="mdi-close"></v-icon
      ></el-button>
    </div>
    <QuillEditor
      theme="bubble"
      toolbar="essential"
      ref="editor"
      contentType="html"
      :content="bodyHtml"
      @update:content="update"
    />
  </div>
</template>
<script lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  props: {
    bodyHtml: {
      type: String,
      required: true,
    },
  },
  setup(_, content) {
    const editor = ref(QuillEditor);
    const update = () => {
      const html = editor.value.getHTML();
      content.emit("updated", html);
    };
    const deleteClick = () => {
      content.emit("delete");
    };
    return {
      update,
      editor,
      deleteClick,
    };
  },
});
</script>
<style lang="scss">
.threadDetail {
  border-left: #ececec 1px solid;
  padding: 8px;
  height: 100%;
}

// header
.threadDetaillHeader {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4px;
}
.threadDeleteButton {
  color: $color-main;
  width: 40px;
}
</style>
