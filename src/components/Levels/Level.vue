<script setup>
import {Button, Textarea, FloatLabel, InputText, Rating} from "primevue";
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import {RouterLink, useRoute} from "vue-router";
import useDetailCourseStore from "../../store/useDetailCourseStore.js";
import {onMounted, ref} from "vue";
import useDetailLevelStore from "../../store/useDetailLevelStore.js";
import useRole from "../../composables/useRole.js";
import Editor from 'primevue/editor';

const courseStore = useDetailCourseStore();
const levelStore = useDetailLevelStore();
const role = useRole();
const route = useRoute();

const editMode = ref(false);

const editModeToggle = () => {
  editMode.value = !editMode.value;
}

const updateLevel = async () => {
  await levelStore.updateLevelInfo(route.params.id, route.params.levelId);
  window.location.reload();
}

const updateExercise = async (exerciseId, excercise) => {
  await levelStore.updateLevelExerciseInfo(route.params.id, route.params.levelId, exerciseId, excercise);
  window.location.reload();
}

const postSolution = async (exerciseId, body) => {
  await levelStore.postExerciseSolution(route.params.id, route.params.levelId, exerciseId, body);
  window.location.reload();
}

onMounted(async () => {
  await courseStore.getCourse(route.params.id);
  await levelStore.getLevel(route.params.id, route.params.levelId);
});
</script>

<template>
  <div class="wrapper">
    <RouterLink :to="'/courses/' + route.params.id + '/levels'">
      <span class="pi pi-arrow-left"></span>
      Вернуться к уровням
    </RouterLink>
    <div class="title">
      <div :class="'flex justify-between ' + (role === 'teacher' ? 'w-full' : '')">
        <div v-if="role === 'teacher'" class="w-40"></div>
        <h2 class="text-5xl">
          {{ courseStore.course.name }}
        </h2>
        <Button v-if="role === 'teacher'" class="w-56" :label="editMode ? 'Режим просмотра' : 'Режим редактирования'" @click="editModeToggle" />
      </div>
      <h3 class="text-2xl">
        {{ levelStore.level.name }}
      </h3>
    </div>
    <div class="theoretic-part py-10">
      <span v-if="!editMode" class="w-[784px]" v-html="levelStore.level.theory" />
      <div class="flex flex-col gap-10" v-else>
        <Editor id="theory" class="w-[784px] h-[500px] mb-7" v-model="levelStore.level.theory" />
        <FloatLabel variant="on">
          <InputText type="number" id="theoryPoints" v-model="levelStore.level.points" />
          <label for="theoryPoints">Кол-во очков</label>
        </FloatLabel>
        <Button @click="updateLevel">Подтвердить</Button>
      </div>
    </div>
    <div v-if="levelStore.level.exercises" class="card flex justify-center">
      <Stepper value="1" class="basis-[50rem]">
        <StepList>
          <Step v-for="(exercise, key) of levelStore.level.exercises" :value="String(key + 1)">
            Задание {{ key + 1 }}
          </Step>
        </StepList>
        <StepPanels>
          <StepPanel v-for="(exercise, key) of levelStore.level.exercises" v-slot="{ activateCallback }"
                     :value="String(key + 1)">
            <div class="flex flex-col my-5">
              <div v-if="!editMode" class="my-5" v-html="exercise.condition" />
              <div v-else>
                <div class="mb-2">
                  Условие задания
                </div>
                <Editor id="condition" class="w-full mb-7" v-model="exercise.condition" />
                <FloatLabel variant="on">
                  <InputText type="number" id="exercisePoints" v-model="exercise.points" />
                  <label for="exercisePoints">Кол-во очков</label>
                </FloatLabel>
              </div>
              <span v-if="role === 'student'">
                Впишите решение ниже:
              </span>
              <div v-if="role === 'student'" class="flex flex-col gap-4">
                <div class="flex flex-col gap-1">
                  <Textarea
                      v-model="exercise.solution.answer"
                      :disabled="exercise.solution.status !== 'in_process'"
                      rows="5"
                      cols="30"
                      style="resize: none"
                  />
                </div>
                <div v-if="exercise.solution.status === 'not_verified'">
                  <h2>Преподаватель проверяет ваше задание</h2>
                </div>
                <div v-if="exercise.solution.status === 'completed'">
                  Задание выполнена успешно!
                </div>
                <div v-if="exercise.solution.mark" class="flex gap-5">
                  <span>Оценка:</span>
                  <Rating readonly v-model="exercise.solution.mark" />
                </div>
                <div v-if="exercise.solution.comment">
                  <h2>Комментарий преподавателя:</h2>
                  <span>
                    {{exercise.solution.comment}}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex pt-2 gap-8 justify-center">
              <Button class="w-full" v-if="editMode" @click="updateExercise(exercise.id, exercise)">Подтвердить</Button>
              <Button v-if="role === 'student'" :disabled="!exercise.solution.answer || exercise.solution.status !== 'in_process'" @click="postSolution(exercise.id, exercise.solution.answer)" class="!px-4 w-full" label="Подтвердить"/>
              <Button v-if="key + 1 !== levelStore.level.exercises.length" label="Далее" class="w-1/3" icon="pi pi-arrow-right" iconPos="right"
                      @click="activateCallback(String(key + 2))"/>
            </div>
          </StepPanel>
        </StepPanels>
      </Stepper>
    </div>
    <div v-else>
      <Button>Я ознакомился с материалом!</Button>
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

.theoretic-part {
  @apply flex justify-center;
}
</style>
