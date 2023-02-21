<template>
  <div class="h-100 d-flex flex-column">
    <header class="header">
      <v-btn
        variant="outlined"
        color="primary"
        size="small"
        @click="addWipNote"
      >
        Add memo
        <v-icon icon="mdi-plus"></v-icon>
      </v-btn>
    </header>
    <div class="h-100 flex-grow-1 d-flex">
      <div class="note w-100">
        <QuillEditor
          theme="bubble"
          placeholder="迷ったらここにどうぞ。アプリを閉じても保存されます。"
        />
      </div>
      <div
        v-for="(id, index) in wipNoteIds"
        :key="id"
        class="wipNote w-100 d-flex flex-column"
      >
        <div class="d-flex flex-row-reverse">
          <el-button plain size="small" text @click="deleteWipNote(index)"
            ><v-icon icon="mdi-close"></v-icon
          ></el-button>
        </div>
        <QuillEditor
          theme="bubble"
          ref="editors"
          @update:content="updateWipNote"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "MVP04",
  setup() {
    const wipNoteKey = "wip-note-key";
    const editors = ref(QuillEditor);
    const jsonString = localStorage.getItem(wipNoteKey) ?? "[]";
    const json = JSON.parse(jsonString);
    const wipNoteIds = ref<string[]>(json.map(() => Math.random().toString()));
    onMounted(() => {
      wipNoteIds.value.forEach((e: string, index: number) => {
        editors.value[index].setHTML(json[index]);
      });
    });
    const addWipNote = () => {
      wipNoteIds.value.push(Math.random().toString());
    };
    const deleteWipNote = (index: number) => {
      wipNoteIds.value.splice(index, 1);
      // editorsが反映されるまで1秒待つ
      setTimeout(() => {
        updateWipNote();
      }, 1000);
    };
    const updateWipNote = () => {
      const htmls: string[] = [];
      if (editors.value.length === undefined /* 配列だったら */) {
        htmls.push(editors.value.getHTML());
      } else {
        editors.value.forEach((val: any) => htmls.push(val.getHTML()));
      }
      localStorage.setItem(wipNoteKey, JSON.stringify(htmls));
    };
    return {
      wipNoteIds,
      editors,
      addWipNote,
      deleteWipNote,
      updateWipNote,
    };
  },
});
</script>

<style lang="scss">
body {
  height: 100vh;
}
#app {
  height: 100%;
}
</style>
<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row-reverse;
  margin: 4px;
}
.note {
  padding: 4px;
}
.wipNote {
  padding: 4px;
  border-left: 1px solid #f4f4f4;
}
</style>
