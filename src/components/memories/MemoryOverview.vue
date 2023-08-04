<script setup>
import {IonImg} from "@ionic/vue";

const props = defineProps(['memory']);
let memory = props.memory;

</script>
<template>

    <ion-img :src="memory.image" :alt="memory.title"/>
  <h2 class="ion-text-center"> {{memory.title}}</h2>
  <p class="ion-text-center"> {{memory.description}}</p>

</template>
