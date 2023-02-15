<template>
  <div class="chatRow">
    <div class="commentList">
      <div v-for="chat in chats" :key="chat.createdAt.toDateString()">
        <div class="commentList__time">1/23 16:32</div>
        <QuillEditor
          class="commentList__editor"
          :enable="false"
          :read-only="true"
          theme=""
          :content="chat.html"
          content-type="html"
        />
      </div>
    </div>
    <div class="chatInput">
      <QuillEditor
        theme="bubble"
        ref="myEditor"
        class="chatInputEditor"
        placeholder="迷ったらここにどうぞ。アプリを閉じても保存されます。"
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
import Chat from "@/models/chat";

export default defineComponent({
  components: {},
  setup() {
    const chats = ref<Chat[]>([]);
    const myEditor = ref(QuillEditor);
    const submit = () => {
      if (myEditor.value) {
        const val = myEditor.value;
        const html = val.getHTML();
        chats.value.push(new Chat({ html: html, createdAt: new Date() }));
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
    return { myEditor, submit, chats };
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
.commentList {
  padding: 8px;
  text-align: start;
  overflow: auto;
  &__time {
    font-size: 12px;
    color: grey;
  }
  &__editor {
    padding: 0 !important;
  }
}
</style>
