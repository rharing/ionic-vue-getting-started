<template>
 <base-layout page-title="All memories">
   <memory-list :memories="memories"/>
<!--   <ion-list>
     <ion-item v-for="memory in memories"
               :router-link="`/memories/${memory.id}`"
               :key="memory.id"
     >
       <ion-thumbnail slot="start">
         <ion-img :src="memory.image" :alt="memory.title"/>
       </ion-thumbnail>
       <ion-label>
         {{ memory.title }}
       </ion-label>

     </ion-item>
   </ion-list>-->
 </base-layout>
</template>

<script setup lang="ts">

import MemoryList from'@/components/memories/MemoryList.vue'
import { useMemoriesStore} from '@/store/memoriesStore';

const memoriesStore = useMemoriesStore();
import BaseLayout from "@/components/base/BaseLayout.vue";
const {memories} = memoriesStore;
</script>

<style scoped>

</style>
