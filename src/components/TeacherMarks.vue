<script setup>
import {Select, Textarea, Button, InputText} from "primevue";

import useTeacherMarksStore from "../store/useTeacherMarksStore.js";
import {computed, onMounted, ref} from "vue";
import FloatLabel from "primevue/floatlabel";
import Dialog from "primevue/dialog";

const visible = ref(false)
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
    <div class="w-full flex flex-col gap-5" v-if="teacherMarksStore.solutions !== null">
      <span class="text-2xl">Условие: {{ teacherMarksStore.solutions.condition }}</span>
      <div class="flex gap-20">
        <div class="w-1/2 flex flex-col gap-5" v-for="solution of teacherMarksStore.solutions.solutions">
          <h2>Ученик: {{ solution.student.name }} {{solution.student.surname}}</h2>
          <Textarea class="w-full" disabled v-model="solution.answer" />
          <div class="w-full flex gap-5">
            <Button class="w-1/2" severity="secondary">Отклонить</Button>
            <Button class="w-1/2">Принять</Button>
          </div>
      </div>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }">
    <div class="flex flex-col gap-4 py-3">
      <FloatLabel variant="on">
        <InputText class="input" id="name-child" />
        <label for="name1">Имя</label>
      </FloatLabel>
      <Button class="w-full">
        Отправить
      </Button>
    </div>
  </Dialog>
</template>

<style scoped>
.wrapper {
  @apply w-full h-full pt-10 text-left;
}

.select {
  @apply w-full my-5;
}
</style>
