<script setup>
import {Button, InputText} from "primevue";
import {onMounted, ref} from "vue";
import FloatLabel from "primevue/floatlabel";
import Dialog from "primevue/dialog";
import useRole from "../../composables/useRole.js";
import useLevelStore from "../../store/useLevelStore.js";
import {RouterLink, useRoute} from "vue-router";
import useDetailCourseStore from "../../store/useDetailCourseStore.js";

const route = useRoute();
const visible = ref(false)
const role = useRole();
const programId = route.params.id
const courseStore = useDetailCourseStore();

const levels = ref([])
const { addLevel, getLevelsList } = useLevelStore()

const formLevel = ref({
  name: '',
  theory: ''
})

function addingLevel(ev) {
  ev.preventDefault();

  addLevel(programId, formLevel.value).then((resp) => {
    if (resp) {
      visible.value = false
      levelsList()

      formLevel.value = {
        name: '',
        theory: ''
      }
    }
  });
}

onMounted(async () => {
  await courseStore.getCourse(route.params.id);
  await levelsList()
})

async function levelsList() {
  levels.value = await getLevelsList(programId)
}
</script>

<template>
  <div class="h-full w-full py-[50px]">
    <div class="flex justify-between items-center pt-10 w-[100%] mb-[40px]">
      <RouterLink :to="'/courses/' + route.params.id">
        <span class="pi pi-arrow-left"></span>
        Вернуться к курсу
      </RouterLink>
      <Button
          @click="visible = true"
          v-if="role === 'teacher'"
      >
        Добавить уровень
      </Button>
    </div>
    <h2 class="font-semibold text-[25px] mb-[40px]">
      {{ courseStore.course.name }}
    </h2>
    <div class="self-start">
      <div class="w-full">
        <div class="flex flex-wrap gap-5 gap-y-7 justify-self-center">
          <RouterLink v-for="(item, index) in levels" class="w-[227px] flex flex-col group" :to="'/courses/' + route.params.id + '/levels/' + item.id">
            <div class="w-[150px] h-[150px] bg-indigo-400 rounded-full flex items-center justify-center text-[#fff] mb-3 font-semibold text-4xl group-hover:opacity-90 self-center">
              {{ index + 1 }}
            </div>
            <div class="text-black line-clamp-1 text-ellipsis">
              {{ item.name }}
            </div>
          </RouterLink >
        </div>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="visible" modal header="Добавить уровень" :style="{ width: '25rem' }">
    <div class="flex flex-col gap-4 py-3">
      <FloatLabel variant="on">
        <InputText class="input" id="stage-name" v-model="formLevel.name" />
        <label for="name1">Название уровня</label>
      </FloatLabel>
      <Button class="w-full" @click="addingLevel">
        Добавить
      </Button>
    </div>
  </Dialog>
</template>

<style scoped>

</style>
