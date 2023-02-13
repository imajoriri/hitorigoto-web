<template>
  <div class="chatInput">
    <div class="chatInput__editor">
      <QuillEditor
        theme="bubble"
        ref="myEditor"
        class="chatInput__quillEditor"
      />
    </div>
    <button @click="submit()" class="chatInput__submit">
      <v-icon icon="mdi-send"></v-icon>
    </button>
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
        const html = val.getHTML();
        content.emit("submit", html);
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
  margin: 0 8px 8px 8px;
  display: flex;
  align-items: flex-end;
  &__editor {
    width: 100%;
    margin-right: 8px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
  }
  &__quillEditor {
    padding: 8px;
  }
  &__submit {
    background-color: $color-main;
    width: 40px;
    height: 24px;
    border-radius: 4px;
    color: white;
    font-size: 12px;
  }
}
</style>
