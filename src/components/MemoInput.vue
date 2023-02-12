<template>
  <div class="memoInput">
    <QuillEditor
      theme=""
      @update:content="update"
      ref="myEditor"
      contentType="html"
      :content="html"
    />
    <v-btn
      class="memoInput__delete"
      variant="outlined"
      color="error"
      size="small"
      @click="deleteClick"
    >
      <v-icon icon="mdi-delete"></v-icon>
    </v-btn>
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
  border-left: 1px solid grey;
  &__delete {
    bottom: 30px;
    float: right;
    margin-right: 4px;
  }
}
</style>
