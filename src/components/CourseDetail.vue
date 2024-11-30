<script setup>
import {Button} from "primevue";
import useDetailCourseStore from "../store/useDetailCourseStore.js";
import {onMounted} from "vue";
import {RouterLink} from "vue-router";
import {useRoute} from "vue-router";
import useRole from "../composables/useRole.js";
import router from "../router.js";

const courseStore = useDetailCourseStore();
const role = useRole();
const route = useRoute();

const joinCourseHandler = () => {
  router.push({
    name: "Levels",
  });
}

onMounted(async () => {
  await courseStore.getCourse(route.params.id);
});
</script>

<template>
  <div class="wrapper">
    <RouterLink to="/courses"><- Вернуться к курсам</RouterLink>
    <div class="content">
      <section class="info-left">
        <h2 class="text-5xl mb-10">{{courseStore.course.name}}</h2>
        <div class="info-block">
          <h2 class="block-title">Описание:</h2>
          <p class="max-w-[500px]">{{courseStore.course.description}}</p>
        </div>
        <div class="info-block">
          <h2 class="block-title">Содержание:</h2>
          <p>Пункты содержания</p>
        </div>
        <div class="info-block">
          <h2 class="block-title">Преподаватели:</h2>
          <p>Список преподов</p>
        </div>
      </section>
      <section class="info-right">
        <img class="w-[500px] h-[300px] object-cover rounded-md" :src="courseStore.course.image" alt="">
        <Button v-if="role !== 'parent'" @click="joinCourseHandler" label="Поступить на курс"/>
      </section>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply w-full h-full pt-10 text-left;
}

.content {
  @apply flex justify-between mt-5;
}

.block-title {
  @apply text-2xl;
}

.info-block {
  @apply flex flex-col gap-4 mb-4;
}

.info-right {
  @apply flex flex-col gap-10;
}
</style>
