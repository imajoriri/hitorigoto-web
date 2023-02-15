<template>
  <div class="channel">
    <div class="channelHeader">
      <!-- 削除ボタン -->
      <el-button
        plain
        @click="() => deleteClick()"
        class="channelDelete"
        size="small"
        text
        ><v-icon icon="mdi-close"></v-icon
      ></el-button>
    </div>

    <!-- メモ -->
    <QuillEditor
      class="channnelMemoEditor"
      theme="bubble"
      @update:content="updated"
      ref="memoEditor"
      contentType="html"
      :content="channel.memoHtml"
      toolbar="essential"
      placeholder="なんでもどうぞ。チェックリストも作れます"
    />
    <!-- post -->
    <QuillEditor
      class="channelChatText"
      :enable="false"
      :read-only="true"
      theme=""
      :content="postHTML"
      content-type="html"
    />
    <!-- input -->
    <div class="channelChatInputArea">
      <QuillEditor
        @update:content="updated"
        class="channnelChatEditor"
        ref="inputEditor"
        theme="bubble"
        placeholder="独り言をどうぞ。アプリを閉じても保存してます。"
        contentType="html"
        :content="channel.inputHtml"
      />
      <button class="channelChatSubmitButton" @click="submitChat">
        <v-icon icon="mdi-send"></v-icon>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Channel from "@/models/channel";
import { QuillEditor } from "@vueup/vue-quill";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  components: {},
  props: {
    channel: {
      type: Channel,
      required: true,
    },
    deleteClick: {
      type: Function,
      required: true,
    },
    textChange: {
      type: Function as unknown as () => (channel: Channel) => void,
      required: true,
    },
  },
  setup(prop) {
    const memoEditor = ref(QuillEditor);
    const postHTML = ref<string>(prop.channel.postHtml);
    const inputEditor = ref(QuillEditor);

    // memo, post, chatの更新処理が走った時
    const updated = () => {
      const channel = new Channel({
        memoHtml: memoEditor.value.getHTML(),
        inputHtml: inputEditor.value.getHTML(),
        postHtml: postHTML.value,
      });
      prop.textChange(channel);
    };

    // chat周り
    // chatの送信ボタン処理
    const submitChat = () => {
      const val = inputEditor.value;
      const html = val.getHTML();
      postHTML.value += html;
      val.setText("");
      updated();
    };
    const isPressedSubmitKey = (keyEvent: KeyboardEvent) => {
      return keyEvent.key === "Enter" && (keyEvent.ctrlKey || keyEvent.metaKey);
    };
    onMounted(() => {
      document.addEventListener("keydown", (e) => {
        if (inputEditor.value) {
          const hasFocus = inputEditor.value.getQuill().hasFocus();
          if (hasFocus && isPressedSubmitKey(e)) {
            submitChat();
          }
        }
      });
    });
    return {
      updated,
      memoEditor,
      inputEditor,
      submitChat,
      postHTML,
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
.channelChatText .ql-editor {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
