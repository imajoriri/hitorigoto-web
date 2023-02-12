<template>
  <div class="home">
    <header class="home__header">
      <v-btn variant="outlined" color="primary" size="small" @click="addMemo">
        Add memo
        <v-icon icon="mdi-plus"></v-icon>
      </v-btn>
    </header>
    <div class="home__main">
      <comment-list :chats="chats" class="home__main__cell" />
      <memo-input
        v-for="(memo, index) in memos"
        :key="index.toString()"
        :html="memo"
        class="home__main__cell"
        @delete-click="deleteClick(index)"
        @text-change="(html) => memoChange(index, html)"
      />
    </div>
    <div>
      <chat-input @submit="chatSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import ChatInput from "@/components/ChatInput.vue";
import CommentList from "@/components/CommentList.vue";
import MemoInput from "@/components/MemoInput.vue";
import Chat from "@/models/chat";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { CommentList, MemoInput, ChatInput },
  setup() {
    const memos = ref<string[]>([]);
    const chats = ref<Chat[]>([]);
    const json = localStorage.getItem("key_name");
    if (json) {
      const array = JSON.parse(json);
      memos.value = array;
    }
    const chatSubmit = (html: string) => {
      chats.value.push(new Chat({ html: html, createdAt: new Date() }));
    };
    const addMemo = () => {
      memos.value.push("");
    };
    const deleteClick = (index: number) => {
      memos.value.splice(index, 1);
      const json = JSON.stringify(memos.value);
      localStorage.setItem("key_name", json);
    };
    const memoChange = (index: number, html: string) => {
      memos.value[index] = html;
      const json = JSON.stringify(memos.value);
      localStorage.setItem("key_name", json);
    };

    return {
      chats,
      memos,
      chatSubmit,
      addMemo,
      deleteClick,
      memoChange,
    };
  },
});
</script>

<style lang="scss">
.home {
  &__header {
    display: flex;
    flex-direction: row-reverse;
    margin: 4px;
  }
  height: 100vh;
  flex-flow: column;
  display: flex;
  justify-content: flex-end;
  &__main {
    overflow: scroll;
    flex-grow: 1;
    margin-bottom: 4px;
    display: flex;
    &__cell {
      width: 100%;
    }
  }
}
</style>
