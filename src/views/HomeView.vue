<template>
  <div class="home">
    <header class="home__header">
      <v-btn variant="outlined" color="primary" size="small" @click="addMemo">
        Add memo
        <v-icon icon="mdi-plus"></v-icon>
      </v-btn>
    </header>
    <div class="home__main">
      <chat-row class="home__main__cell" />
      <channel-row
        v-for="(memo, index) in memos"
        :key="index.toString()"
        :html="memo"
        class="home__main__cell"
        @delete-click="deleteClick(index)"
        @text-change="(html) => memoChange(index, html)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ChannelRow from "@/components/channelRow.vue";
import ChatRow from "@/components/ChatRow.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { ChannelRow, ChatRow },
  setup() {
    const memos = ref<string[]>([]);
    const json = localStorage.getItem("key_name");
    if (json) {
      const array = JSON.parse(json);
      memos.value = array;
    }
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
      memos,
      addMemo,
      deleteClick,
      memoChange,
    };
  },
});
</script>

<style lang="scss">
.home {
  height: 100%;
  flex-flow: column;
  display: flex;
  justify-content: flex-end;
  // ページ全体をスクロールできないようにする
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  &__header {
    display: flex;
    flex-direction: row-reverse;
    margin: 4px;
  }

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
