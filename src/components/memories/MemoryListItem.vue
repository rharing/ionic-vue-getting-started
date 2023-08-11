<template>
  <ion-item :router-link="`/memories/${memory.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title"/>
    </ion-thumbnail>
    <ion-label>
      {{ memory.title }}
    </ion-label>
  </ion-item>

</template>
<script setup>
import {IonImg, IonItem, IonLabel, IonThumbnail} from "@ionic/vue";
const props = defineProps(['memory']);
let memory = props.memory;

</script>
