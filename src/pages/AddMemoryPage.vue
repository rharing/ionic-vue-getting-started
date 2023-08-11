<script setup>
import BaseLayout from "@/components/base/BaseLayout.vue";
import CreateMemoryForm from "@/components/memories/CreateMemoryForm.vue";
import { useMemoriesStore} from '@/store/memoriesStore';
import router from "@/router/index";

const memoriesStore = useMemoriesStore();
function saveMemory(memoryData){
  memoryData.id = new Date().toISOString();
  memoriesStore.saveMemory(memoryData);
  router.push("/memories");
}
</script>

<template>
  <base-layout page-title="Add a memory">
    <CreateMemoryForm @save-memory="saveMemory"></CreateMemoryForm>
  </base-layout>
</template>
