<script setup>
import {IonImg} from "@ionic/vue";

const props = defineProps(['memory']);
let memory = props.memory;

</script>
<template>

    <ion-img :src="memory.image" :alt="memory.title"/>
  <h2> {{memory.title}}</h2>
  <p> {{memory.description}}</p>

</template>
