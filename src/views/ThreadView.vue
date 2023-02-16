<template>
  <div class="threadView">
    <div class="threadMain">
      <div class="threadMainPosts">
        <div v-for="(thread, index) in threads" :key="thread.bodyHTML">
          <thread-row
            :body-html="thread.bodyHTML"
            @open="clickThreadRow(index)"
          />
        </div>
      </div>
      <chat-input @submit="addThread" class="threadMainChatInput" />
    </div>
    <div
      v-for="(openThreadIndex, i) in openThreadIndexes"
      :key="threads[i].bodyHTML"
    >
      <thread-detail
        :body-html="threads[openThreadIndex].bodyHTML"
        @updated="(html) => updatedThreadDetail(openThreadIndex, html)"
        @delete="() => deleteThreadDetail(i)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ChatInput from "@/components/ChatInput.vue";
import Thread from "@/models/thread";
import ThreadRow from "@/components/ThreadRow.vue";
import ThreadDetail from "@/components/threadDetail.vue";

export default defineComponent({
  components: { ChatInput, ThreadRow, ThreadDetail },
  setup() {
    const openThreadIndexesKey = "openThreadIndexes";
    const threadsKey = "threads";
    const threads = ref<Thread[]>([]);
    const openThreadIndexes = ref<number[]>([]);

    const threadData = localStorage.getItem(threadsKey);
    if (threadData) {
      const json = JSON.parse(threadData);
      if (json instanceof Array) {
        threads.value = json.map(
          (e) =>
            new Thread({
              bodyHTML: e.bodyHTML,
            })
        );
      }
    }

    const openThreadIndexesData = localStorage.getItem(openThreadIndexesKey);
    if (openThreadIndexesData) {
      const json = JSON.parse(openThreadIndexesData);
      if (json instanceof Array) {
        openThreadIndexes.value = json.map((e) => e);
      }
    }

    // methods
    const saveThreads = () =>
      localStorage.setItem(threadsKey, JSON.stringify(threads.value));
    const saveOpenThreadIndexes = () =>
      localStorage.setItem(
        openThreadIndexesKey,
        JSON.stringify(openThreadIndexes.value)
      );
    const addThread = (html: string) => {
      threads.value.push(new Thread({ bodyHTML: html }));
      saveThreads();
    };
    const clickThreadRow = (index: number) => {
      if (openThreadIndexes.value.includes(index)) return;
      openThreadIndexes.value.push(index);
      saveOpenThreadIndexes();
    };
    const updatedThreadDetail = (index: number, html: string) => {
      threads.value.splice(index, 1, new Thread({ bodyHTML: html }));
      saveThreads();
    };
    const deleteThreadDetail = (index: number) => {
      openThreadIndexes.value.splice(index, 1);
      saveOpenThreadIndexes();
    };
    return {
      addThread,
      openThreadIndexes,
      threads,
      clickThreadRow,
      updatedThreadDetail,
      deleteThreadDetail,
    };
  },
});
</script>

<style lang="scss">
.threadView {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.threadView div {
  width: 100%;
}
// main
.threadMain {
  position: relative;
  overflow: auto;
  padding-bottom: 40px;
}
.threadMainChatInput {
  // stickyで下に固定している
  position: fixed;
  bottom: 0;
  background-color: white;
  padding: 0 8px 8px 8px;
}
</style>
