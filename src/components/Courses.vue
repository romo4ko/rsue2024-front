<script setup>
import {Card, Button} from "primevue";
import useCoursesStore from "../store/useCoursesStore.js";
import useRegistrationStore from "../store/useRegistrationStore.js";

const courses = useCoursesStore().courses;

const role = useRegistrationStore().user.data.roles[0].name;

console.log(courses);

</script>

<template>
  <div class="wrapper">
    <h1 class="text-3xl">Курсы платформы:</h1>
    <div class="courses">
      <Card v-for="course of courses" class="card">
        <template #header>
          <img alt="user header" :src="course.image" />
        </template>
        <template #title>{{course.name}}</template>
        <template #content>
          <p class="card-description">
            {{course.description}}
          </p>
        </template>
        <template #footer v-if="role !== 'parent'">
          <div class="flex gap-4 mt-1">
            <Button label="Перейти к курсу" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply w-full h-full pt-10 text-left;
}

.courses {
  @apply py-10 flex flex-wrap gap-5;
}

.card {
  flex: 0 0 calc((100% - 40px) / 3);
  box-sizing: border-box;
}

.card-description {
  @apply line-clamp-3 text-ellipsis;
}
</style>
