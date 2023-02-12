<template>
  <div class="commentList">
    <div v-for="chat in chats" :key="chat.createdAt.toDateString()">
      <div class="commentList__time">1/23 16:32</div>
      <QuillEditor
        :enable="false"
        :read-only="true"
        theme=""
        :content="chat.html"
        content-type="html"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Chat from "@/models/chat";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  components: {},
  props: {
    chats: {
      type: Array as PropType<Chat[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.commentList {
  text-align: start;
  &__time {
    font-size: 12px;
  }
}
</style>
