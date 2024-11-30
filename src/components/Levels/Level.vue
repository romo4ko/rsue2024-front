<script setup>
import {Button, Textarea} from "primevue";
import {RouterLink, useRoute} from "vue-router";
import useDetailCourseStore from "../../store/useDetailCourseStore.js";
import useRole from "../../composables/useRole.js";
import router from "../../router.js";
import {onMounted} from "vue";

const courseStore = useDetailCourseStore();
const route = useRoute();

const joinCourseHandler = () => {
  router.push({
    name: "Levels",
  });
}

const onFormSubmit = () => {
  return null;
}

onMounted(async () => {
  await courseStore.getCourse(route.params.id);
});
</script>

<template>
  <div class="wrapper">
    <RouterLink :to="'/courses/' + route.params.id + '/levels'"><- Вернуться к уровням</RouterLink>
    <div class="title">
      <h2 class="text-5xl">
        {{courseStore.course.name}}
      </h2>
      <h3 class="text-2xl">
        Название урока
      </h3>
    </div>
    <div class="theoretic-part py-10">
      Содежание теоретической части
    </div>
    <div class="py-10">
      <h4 class="text-2xl">
        Задание 1. Название задания:
      </h4>
      <div class="my-5">
        Текст задания
      </div>
      <span>
        Впишите решение ниже:
      </span>
      <form @submit="onFormSubmit" class="flex flex-col gap-4 w-1/2 my-5">
        <div class="flex flex-col gap-1">
          <Textarea name="address" rows="5" cols="30" style="resize: none" />
        </div>
        <Button type="submit" label="Submit" />
      </form>

    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply w-full h-full pt-10 text-left;
}

.title {
  @apply flex flex-col items-center mt-5 gap-5;
}
</style>
