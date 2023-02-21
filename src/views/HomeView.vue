<template>
  <div class="home">
    <header class="home__header">
      <v-btn variant="outlined" color="primary" size="small" @click="add">
        Add memo
        <v-icon icon="mdi-plus"></v-icon>
      </v-btn>
    </header>
    <div class="home__main">
      <div class="home__main__cell chatAndTaskCell">
        <task-row class="chatAndTaskCellRow" />
        <chat-row class="chatAndTaskCellRow" />
      </div>
      <channel-row
        v-for="(channel, index) in channels"
        :key="channel.memoHtml.toString()"
        :channel="channel"
        class="home__main__cell"
        :delete-click="() => deleteMemo(index)"
        :text-change="(channel) => memoChange(index, channel)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ChannelRow from "@/components/channelRow.vue";
import ChatRow from "@/components/ChatRow.vue";
import TaskRow from "@/components/TaskRow.vue";
import Channel from "@/models/channel";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { ChannelRow, ChatRow, TaskRow },
  setup() {
    const channels = ref<Channel[]>([]);
    const stringData = localStorage.getItem("channels-deta");
    if (stringData) {
      const json = JSON.parse(stringData);
      if (json instanceof Array) {
        channels.value = json.map(
          (e) =>
            new Channel({
              memoHtml: e.memoHtml,
              postHtml: e.postHtml,
              inputHtml: e.inputHtml,
            })
        );
      }
    }
    // プラスボタン押した時
    const add = () => {
      channels.value.push(
        new Channel({ memoHtml: "", postHtml: "", inputHtml: "" })
      );
    };

    // 削除ボタン押した時
    const deleteMemo = (index: number) => {
      channels.value.splice(index, 1);
    };

    // memoが変更された時
    const memoChange = (index: number, channel: Channel) => {
      const newChannels = channels.value.slice(0, channels.value.length);
      newChannels[index] = channel;
      localStorage.setItem("channels-deta", JSON.stringify(newChannels));
    };

    return {
      channels,
      add,
      deleteMemo,
      memoChange,
    };
  },
});
</script>

<style lang="scss" scoped>
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
.chatAndTaskCell {
  display: flex;
  flex-direction: column;
}
.chatAndTaskCellRow {
  height: 50%;
}
</style>
