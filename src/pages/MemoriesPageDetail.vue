<template>
 <base-layout page-title="Details page">
   <h2>details for: {{props.id}}</h2>
 </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from "@/components/base/BaseLayout.vue";

const props = defineProps({
  id: {
    required: true,
  },
})

</script>

<style scoped>

</style>
