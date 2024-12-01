<script setup>
import { ref, onMounted, computed } from 'vue';
import { Button, Card, InputText } from "primevue";
import useCoursesStore from "../store/useCoursesStore.js";
import router from "../router.js";
import FloatLabel from "primevue/floatlabel";

const coursesStore = useCoursesStore();

const minAge = ref(null);
const maxAge = ref(null);

const redirect = (id) => {
  router.push({
    path: `/courses/${id}`,
  });
};

onMounted(async () => {
  await coursesStore.getCourses();
});

const filteredCourses = computed(() => {
  return coursesStore.courses.filter(course => {
    const courseMinAge = course.min_student_age;
    const courseMaxAge = course.max_student_age;

    const max = maxAge.value ? maxAge.value : courseMaxAge

    return (
        (minAge.value === null || courseMinAge >= minAge.value) &&
        (maxAge.value === null || courseMaxAge <= max)
    );
  });
});
</script>

<template>
  <div class="wrapper">
    <h1 class="text-3xl mb-5">Курсы платформы</h1>
    <p class="mb-3" v-if="filteredCourses.length">Фильтрация по возрасту:</p>
    <div class="flex gap-3 px-[20px] py-[15px] rounded-[10px] shadow-card w-fit" v-if="filteredCourses.length">
      <FloatLabel variant="on">
        <InputText
            class="input"
            id="min-age"
            type="number"
            v-model.number="minAge"
        />
        <label for="min-age">Минимальный возраст</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <InputText
            class="input"
            id="max-age"
            type="number"
            v-model.number="maxAge"
        />
        <label for="max-age">Максимальный возраст</label>
      </FloatLabel>
    </div>
    <div class="courses">
      <Card
          v-for="course in filteredCourses"
          :key="course.id"
          class="card"
          v-if="filteredCourses.length"
      >
        <template #header>
          <img alt="user header" class="h-[250px] w-full object-cover" :src="course.image"/>
        </template>
        <template #title>{{ course.name }}</template>
        <template #content>
          <div class="bg-blue-300 w-fit text-[#fff] p-[5px] rounded-[5px] font-light mb-3">
            {{ course.min_student_age }} - {{ course.max_student_age }} лет
          </div>
          <p class="card-description">{{ course.description }}</p>
        </template>
        <template #footer v-if="role !== 'parent'">
          <div class="flex gap-4 mt-1">
            <Button
                @click="redirect(course.id)"
                label="Перейти к курсу"
                class="w-full"
            />
          </div>
        </template>
      </Card>
      <h2 class="text-2xl mb-5" v-if="!filteredCourses.length">
         Ого ! вы состоите во всех курах - <router-link to="/my-courses"> нажми и зарабатывай центрики</router-link>
      </h2>
    </div>
  </div>
</template>

<style scoped>
/* Добавьте стили по желанию */
</style>


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
