<template>
  <div class="channel">
    <div class="channelHeader">
      <el-button
        plain
        @click="deleteClick"
        class="channelDelete"
        size="small"
        text
        ><v-icon icon="mdi-close"></v-icon
      ></el-button>
    </div>
    <QuillEditor
      class="channnelMemoEditor"
      theme="bubble"
      @update:content="updatedMemo"
      ref="channelMemoEditor"
      contentType="html"
      :content="html"
      toolbar="essential"
      placeholder="整理途中のメモはここに"
    />
    <div class="channelChatText">
      <!--ここに chat text-->
      <div v-for="chat in chats" :key="chat.createdAt.toDateString()">
        <div class="channelChatTextDate">1/23 16:32</div>
        <QuillEditor
          :enable="false"
          :read-only="true"
          theme=""
          :content="chat.html"
          content-type="html"
        />
      </div>
    </div>
    <div class="channelChatInputArea">
      <QuillEditor
        class="channnelChatEditor"
        ref="channelChatEditor"
        theme="bubble"
        placeholder="一時的なメモはここに"
      />
      <button class="channelChatSubmitButton" @click="submitChat">
        <v-icon icon="mdi-send"></v-icon>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Chat from "@/models/chat";
import { QuillEditor } from "@vueup/vue-quill";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  components: {},
  props: {
    html: {
      type: String,
      required: false,
    },
  },
  setup(_, content) {
    // memo周り
    const channelMemoEditor = ref(QuillEditor);
    const updatedMemo = () => {
      if (channelMemoEditor.value) {
        const html = channelMemoEditor.value.getHTML();
        content.emit("text-change", html);
      }
    };
    const deleteClick = () => {
      content.emit("delete-click");
    };

    // chat周り
    const chats = ref<Chat[]>([]);
    const channelChatEditor = ref(QuillEditor);
    // chatの送信ボタン処理
    const submitChat = () => {
      if (channelChatEditor.value) {
        const val = channelChatEditor.value;
        const html = val.getHTML();
        const chat = new Chat({ html: html, createdAt: new Date() });
        chats.value.push(chat);
        val.setText("");
      }
    };
    const isPressedSubmitKey = (keyEvent: KeyboardEvent) => {
      return keyEvent.key === "Enter" && (keyEvent.ctrlKey || keyEvent.metaKey);
    };
    onMounted(() => {
      document.addEventListener("keydown", (e) => {
        if (channelChatEditor.value) {
          const hasFocus = channelChatEditor.value.getQuill().hasFocus();
          if (hasFocus && isPressedSubmitKey(e)) {
            submitChat();
          }
        }
      });
    });
    return {
      deleteClick,
      updatedMemo,
      channelMemoEditor,
      channelChatEditor,
      submitChat,
      chats,
    };
  },
});
</script>

<style lang="scss">
.channel {
  border-left: 1px solid $color-main-border;
  padding: 0 4px 4px 4px;
  display: flex;
  flex-direction: column;
}
// header
.channelHeader {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4px;
}
.channelDelete {
  color: $color-main;
  width: 40px;
}

// chat
.channelChatInputArea {
  display: flex;
  align-items: flex-end;
}
.channelChatSubmitButton {
  background-color: $color-main;
  width: 40px;
  height: 24px;
  border-radius: 4px;
  color: white;
  font-size: 12px;
}
.channnelChatEditor.ql-container {
  border: 1px solid #d1d5db;
  border-radius: 4px;
  height: auto !important;
  padding: 8px;
  width: 100%;
  margin-right: 4px;
}

// memo
.channnelMemoEditor.ql-container {
  height: auto !important;
  background-color: #f2f2f2;
  padding: 8px;
  max-height: 60vh;
  border-radius: 4px;
}

// channel text
.channelChatText {
  flex-grow: 1;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 4px;
  overflow: scroll;
}
.channelChatTextDate {
  font-size: 12px;
  height: 14px;
  color: grey;
}
</style>
