<template>
  <div class="chatInput">
    <div class="chatInput__editor">
      <QuillEditor theme="snow" ref="myEditor" />
    </div>
    <button @click="submit()">send</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { QuillEditor } from "@vueup/vue-quill";

export default defineComponent({
  components: {},
  setup(_, content) {
    const myEditor = ref(QuillEditor);
    const submit = () => {
      if (myEditor.value) {
        const val = myEditor.value;
        const delta = val.getContents();
        content.emit("submit", delta);
        val.setText("");
      }
    };
    const isPressedSubmitKey = (keyEvent: KeyboardEvent) => {
      return keyEvent.key === "Enter" && (keyEvent.ctrlKey || keyEvent.metaKey);
    };
    onMounted(() => {
      document.onkeydown = (e) => {
        if (myEditor.value) {
          const hasFocus = myEditor.value.getQuill().hasFocus();
          if (hasFocus && isPressedSubmitKey(e)) {
            submit();
          }
        }
      };
    });
    return { myEditor, submit };
  },
});
</script>

<style lang="scss">
.chatInput {
  margin: 0 4px 4px 4px;
  display: flex;
  align-items: flex-end;
  &__editor {
    width: 100%;
    margin-right: 8px;
  }
}
</style>
