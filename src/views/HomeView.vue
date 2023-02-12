<template>
  <div class="home">
    <div class="home__main">
      <comment-list :chats="chats" class="home__main__cell" />
      <memo-input class="home__main__cell" />
      <memo-input class="home__main__cell" />
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
import { Delta } from "@vueup/vue-quill";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { CommentList, MemoInput, ChatInput },
  setup() {
    const chats = ref<Chat[]>([]);
    const chatSubmit = (content: Delta) => {
      console.log(content);
      chats.value.push(new Chat({ delta: content, createdAt: new Date() }));
    };
    return {
      chats,
      chatSubmit,
    };
  },
});
</script>

<style lang="scss">
.home {
  height: 100vh;
  flex-flow: column;
  display: flex;
  justify-content: flex-end;
  &__main {
    flex-grow: 1;
    margin-bottom: 4px;
    display: flex;
    &__cell {
      width: 100%;
    }
  }
}
</style>
