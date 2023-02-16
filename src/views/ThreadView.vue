<template>
  <div class="threadView">
    <div :span="12" class="threadMain">
      <div v-for="(thread, index) in threads" :key="thread.bodyHTML">
        <thread-row
          :body-html="thread.bodyHTML"
          @click="clickThreadRow(index)"
        />
      </div>
      <chat-input @submit="addThread" />
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
  height: 100%;
  display: flex;
}
.threadView div {
  width: 100%;
}
.threadMain {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 8px;
}
</style>
