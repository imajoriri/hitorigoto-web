<template>
  <div class="chatRow">
    <div class="chatText">
      <QuillEditor
        :enable="false"
        :read-only="true"
        theme=""
        :content="postHtml"
        content-type="html"
      />
    </div>
    <div class="chatInput">
      <QuillEditor
        theme="bubble"
        ref="chatInputEditor"
        class="chatInputEditor"
        placeholder="迷ったらここにどうぞ。アプリを閉じても保存されます。"
        @update:content="updateChatInput"
      />
      <button @click="submit()" class="chatInput__submit">
        <v-icon icon="mdi-send"></v-icon>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { QuillEditor } from "@vueup/vue-quill";

export default defineComponent({
  components: {},
  setup() {
    const postKey = "chat_post_html";
    const inputKey = "chat_input_key";
    const postHtml = ref<string>("");
    const postHtmlLocalData = localStorage.getItem(postKey);
    if (postHtmlLocalData) {
      postHtml.value = postHtmlLocalData;
    }

    const chatInputEditor = ref(QuillEditor);
    // inputのテキストが変更された時
    const updateChatInput = () => {
      if (chatInputEditor.value) {
        const html = chatInputEditor.value.getHTML();
        localStorage.setItem(inputKey, html);
      }
    };
    // submitされた時
    const submit = () => {
      if (chatInputEditor.value) {
        const val = chatInputEditor.value;
        const html = val.getHTML();
        postHtml.value += html;
        localStorage.setItem(postKey, postHtml.value);
        localStorage.setItem(inputKey, "");
        val.setText("");
      }
    };
    const isPressedSubmitKey = (keyEvent: KeyboardEvent) => {
      return keyEvent.key === "Enter" && (keyEvent.ctrlKey || keyEvent.metaKey);
    };
    onMounted(() => {
      const chatInputHtmlLocalData = localStorage.getItem(inputKey);
      if (chatInputHtmlLocalData) {
        chatInputEditor.value.setHTML(chatInputHtmlLocalData);
      }
      document.addEventListener("keydown", (e) => {
        if (chatInputEditor.value) {
          const hasFocus = chatInputEditor.value.getQuill().hasFocus();
          if (hasFocus && isPressedSubmitKey(e)) {
            submit();
          }
        }
      });
    });

    return { chatInputEditor, submit, postHtml, updateChatInput };
  },
});
</script>

<style lang="scss">
.chatRow {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

// input
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

// comment
.chatText {
  padding: 8px;
  text-align: start;
  overflow: auto;
}
</style>
