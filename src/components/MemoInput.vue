<template>
  <div class="memoInput">
    <div class="channelHeader">
      <el-button
        plain
        @click="deleteClick"
        class="memoInput__delete"
        size="small"
        text
        ><v-icon icon="mdi-close"></v-icon
      ></el-button>
    </div>
    <QuillEditor
      class="channnelMemoEditor"
      theme="bubble"
      @update:content="update"
      ref="myEditor"
      contentType="html"
      :content="html"
      toolbar="essential"
      placeholder="整理途中のメモはここに"
    />
    <div class="channelChatText">
      <!--ここに chat text-->
      <div v-for="i in [1, 2, 3, 4]" :key="i">
        <div class="channelChatTextDate">1/23 16:32</div>
        <QuillEditor
          :enable="false"
          :read-only="true"
          theme=""
          content="<p>hoge</p>"
          content-type="html"
        />
      </div>
    </div>
    <div class="channelChatInputArea">
      <QuillEditor
        class="channnelChatEditor"
        theme="bubble"
        placeholder="一時的なメモはここに"
      />
      <button class="channelChatSubmitButton">
        <v-icon icon="mdi-send"></v-icon>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  props: {
    html: {
      type: String,
      required: false,
    },
  },
  setup(_, content) {
    const myEditor = ref(QuillEditor);
    const update = () => {
      if (myEditor.value) {
        const html = myEditor.value.getHTML();
        content.emit("text-change", html);
      }
    };
    const deleteClick = () => {
      content.emit("delete-click");
    };
    return {
      deleteClick,
      update,
      myEditor,
    };
  },
});
</script>

<style lang="scss">
.memoInput {
  border-left: 1px solid $color-main-border;
  padding: 0 4px 4px 4px;
  display: flex;
  flex-direction: column;
  &__delete {
    color: $color-main;
    width: 40px;
  }
}
// header
.channelHeader {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4px;
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
  flex-direction: column-reverse;
  margin-bottom: 4px;
  overflow: scroll;
}
.channelChatTextDate {
  font-size: 12px;
  height: 14px;
  color: grey;
}
</style>
