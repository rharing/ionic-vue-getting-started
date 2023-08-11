<template>
  <ion-list v-for="memory in memories">
    <MemoryListItem :memory="memory" :key="memory.id"/>
  </ion-list>
</template>
<script setup>
import {IonList } from '@ionic/vue';
import MemoryListItem from "@/components/memories/MemoryListItem.vue";

const props = defineProps(['memories']);

let memories = props.memories;
console.log("memories:", JSON.stringify(memories));
</script>
