<template>
 <base-layout page-title="All memories">
   <ion-list>
     <ion-item router-link="/memories/1">A trip into the mountains</ion-item>
     <ion-item router-link="/memories/2">Surfing the seaside</ion-item>
     <ion-item router-link="/memories/3">Good eating</ion-item>
   </ion-list>
 </base-layout>
</template>

<script setup lang="ts">
import {IonList, IonItem } from '@ionic/vue';
import BaseLayout from "@/components/base/BaseLayout.vue";
</script>

<style scoped>

</style>
