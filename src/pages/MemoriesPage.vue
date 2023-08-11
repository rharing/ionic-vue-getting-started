<template>
  <base-layout page-title="All memories">
    <memory-list :memories="memories"/>
   <template v-slot:actions-end>
     <ion-button router-link="/memories/add">
       <ion-icon slot="icon-only" :icon="add"></ion-icon>
     </ion-button>
   </template>
  </base-layout>
</template>

<script setup lang="ts">
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import MemoryList from'@/components/memories/MemoryList.vue'
import { useMemoriesStore} from '@/store/memoriesStore';

import BaseLayout from "@/components/base/BaseLayout.vue";
import {storeToRefs} from "pinia";

const memoriesStore = useMemoriesStore();
const {memories} = storeToRefs(memoriesStore);
</script>

<style scoped>

</style>
