<script setup>
import {Button, Panel} from "primevue";
import useDetailCourseStore from "../store/useDetailCourseStore.js";
import {onMounted} from "vue";
import {RouterLink} from "vue-router";
import {useRoute} from "vue-router";
import useRole from "../composables/useRole.js";
import router from "../router.js";
import axiosClient from "../axios/axiosClient.js";
import useRegistrationStore from "../store/useRegistrationStore.js";

const courseStore = useDetailCourseStore();
const role = useRole();
const route = useRoute();

const joinCourseHandler = () => {
  signUpProgram()

  router.push({
    name: "Levels",
  });
}

onMounted(async () => {
  await courseStore.getCourse(route.params.id);
});

function signUpProgram() {
  if(role === 'student') {
    axiosClient.post(`/programs/${route.params.id}`);
  }
}
</script>

<template>
  <div class="wrapper">
    <RouterLink to="/courses">
      <span class="pi pi-arrow-left"></span>
      Вернуться к курсам
    </RouterLink>
    <div class="content">
      <section class="info-left">
        <h2 class="text-5xl mb-10">{{courseStore.course.name}}</h2>
        <Panel header="Описание:" class="panel-block">
          <p>{{courseStore.course.description}}</p>
        </Panel>
        <Panel header="Содержание:" class="panel-block">
          <ul>
            <li v-for="course of courseStore.course.lessons">• {{course}}</li>
          </ul>
        </Panel>
        <Panel header="Преподаватели:" class="panel-block">
          <ul>
            <li v-for="teacher of courseStore.course.teachers">• {{teacher}}</li>
          </ul>
        </Panel>
      </section>
      <section class="info-right">
        <img class="w-[500px] h-[300px] object-cover rounded-md" :src="courseStore.course.image" alt="">
        <Button v-if="role !== 'parent'" @click="joinCourseHandler" label="Открыть" />
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

.info-left {
  @apply flex flex-col gap-10 mb-10;
}

.panel-block {
  @apply max-w-[500px];
}

.info-right {
  @apply flex flex-col gap-10;
}
</style>
