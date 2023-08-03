<template>
 <base-layout page-title="Details page">
   <memory-overview :memory="memory"/>
 </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from "@/components/base/BaseLayout.vue";

const props = defineProps({
  id: {
    required: true,
  },
})
import { useMemoriesStore} from '@/store/memoriesStore';
import MemoryOverview from "@/components/memories/MemoryOverview.vue";

const memoriesStore = useMemoriesStore();
let memory = memoriesStore.loadMemory(props.id)
</script>

<style scoped>

</style>
