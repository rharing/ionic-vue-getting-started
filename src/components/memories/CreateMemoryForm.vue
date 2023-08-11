<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle"/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image url</ion-label>
        <ion-input type="text" required v-model="takenImageUrl"/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>
<script setup>
import {IonButton, IonInput, IonItem, IonLabel, IonList, IonTextarea} from "@ionic/vue";

const emit = defineEmits(['save-memory'])

let enteredTitle = "";
let enteredDescription = "";
let takenImageUrl = null;

function submitForm() {
  const memoryData = {
    title: enteredTitle,
    image: takenImageUrl,
    description: enteredDescription,
  };
  emit("save-memory", memoryData);
}

</script>
