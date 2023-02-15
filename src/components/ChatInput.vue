<template>
  <div class="chatInput">
    <QuillEditor
      theme="bubble"
      ref="myEditor"
      class="chatInputEditor"
      placeholder="なんでも、独り言をどうぞ"
    />
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
      document.addEventListener("keydown", (e) => {
        if (myEditor.value) {
          const hasFocus = myEditor.value.getQuill().hasFocus();
          if (hasFocus && isPressedSubmitKey(e)) {
            submit();
          }
        }
      });
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

// input
.chatInputEditor.ql-container {
  border: 1px solid #d1d5db;
  border-radius: 4px;
  height: auto !important;
  padding: 8px;
  width: 100%;
  margin-right: 4px;
}
</style>
