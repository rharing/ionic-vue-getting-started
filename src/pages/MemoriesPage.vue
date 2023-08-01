<template>
 <base-layout page-title="All memories">
   <ion-list>
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
   </ion-list>
 </base-layout>
</template>

<script setup lang="ts">
import {IonList, IonItem, IonImg, IonThumbnail,IonLabel } from '@ionic/vue';
import BaseLayout from "@/components/base/BaseLayout.vue";
const memories =
   [
  {
    id: 'm1',
    image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg',
    title: 'A trip into the mountains',
    description: 'It was a really nice trip!',
  },
  {
    id: 'm2',
    image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg/640px-A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg',
    title: 'Surfing the sea side',
    description: 'Feeling the cool breeze',
  },
  {
    id: 'm3',
    image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indian_-_Food.jpg/640px-Indian_-_Food.jpg',
    title: 'Good eating',
    description: 'Really tasty!',
  },
];
</script>

<style scoped>

</style>
