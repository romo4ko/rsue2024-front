<script setup>
import {Select, Textarea, Button} from "primevue";

import useTeacherMarksStore from "../store/useTeacherMarksStore.js";
import {computed, onMounted} from "vue";

const teacherMarksStore = useTeacherMarksStore();

const getExercises = async () => {
  await teacherMarksStore.getExercises();
}

const getSolutions = async () => {
  await teacherMarksStore.getSolutions();
}

const exerciseOptions = computed(() => {
  if (teacherMarksStore.exercises.length > 0) {
    return teacherMarksStore.exercises.map((exercise, index) => ({
      ...exercise,
      name: `Задание ${index + 1}`,
    }));
  }
  return [];
});

onMounted(async () => {
  await teacherMarksStore.getCourses();
});
</script>

<template>
  <div class="wrapper">
    <h1 class="text-4xl">
      Оценивание
    </h1>
    <Select v-model="teacherMarksStore.selectedCourse" :options="teacherMarksStore.courses" optionLabel="name"
            placeholder="Выберите курс" class="select"/>
    <Select v-if="teacherMarksStore.selectedCourse !== null" v-model="teacherMarksStore.selectedLesson"
            @change="getExercises" :options="teacherMarksStore.selectedCourse.lessons" optionLabel="name"
            placeholder="Выберите урок" class="select"/>
    <Select
        v-if="teacherMarksStore.exercises.length > 0"
        v-model="teacherMarksStore.selectedExercise"
        :options="exerciseOptions"
        @change="getSolutions"
        optionLabel="name"
        placeholder="Выберите задание"
        class="select"
    />
    <div v-if="teacherMarksStore.solutions">
      <span>{{ teacherMarksStore.solutions.condition }}</span>
      <div v-for="solution of teacherMarksStore.solutions.solutions">
        <h2>Ученик:{{ solution.student_name }}</h2>
        <Textarea disabled v-model="solution.answer" />
        <div>
          <Button severity="secondary">Отклонить</Button>
          <Button>Принять</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply w-full h-full pt-10 text-left;
}

.select {
  @apply w-full my-5;
}
</style>
