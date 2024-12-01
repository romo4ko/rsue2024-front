<script setup>
import {Select} from "primevue";

import { ref } from "vue";

const selectedCourse = ref();
const courses = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);
</script>

<template>
  <div class="wrapper">
    <h1 class="text-4xl">
      Оценивание
    </h1>
    <Select v-model="selectedCourse" :options="courses" optionLabel="name" placeholder="Выберите курс" class="w-full my-10" />
  </div>
</template>

<style scoped>
.wrapper {
  @apply w-full h-full pt-10 text-left;
}
</style>
