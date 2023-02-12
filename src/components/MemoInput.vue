<template>
  <div class="memoInput">
    <QuillEditor
      theme=""
      @update:content="update"
      ref="myEditor"
      contentType="html"
      :content="html"
    />
    <el-button plain @click="deleteClick" class="memoInput__delete" size="small"
      ><v-icon icon="mdi-delete"></v-icon
    ></el-button>
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
  border-left: 1px solid $color-main;
  padding: 4px;
  &__delete {
    bottom: 26px;
    position: relative;
    float: right;
    margin-right: 4px;
    color: $color-main;
    width: 40px;
    color: $color-main;
  }
}
</style>
