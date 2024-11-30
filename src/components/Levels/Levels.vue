<script setup>
import {Button, InputText} from "primevue";
import {onMounted, ref} from "vue";
import FloatLabel from "primevue/floatlabel";
import Dialog from "primevue/dialog";
import useRole from "../../composables/useRole.js";
import useLevelStore from "../../store/useLevelStore.js";
import {RouterLink, useRoute} from "vue-router";

const route = useRoute();
const visible = ref(false)
const role = useRole();
const programId = route.params.id

const levels = ref([])
const { addLevel, getLevelsList } = useLevelStore()

const formLevel = ref({
  name: '',
  theory: '1'
})

function addingLevel(ev) {
  ev.preventDefault();

  addLevel(programId, formLevel.value).then((resp) => {
    if (resp) {
      visible.value = false
      levelsList()

      formLevel.value = {
        name: '',
        theory: '1'
      }
    }
  });
}

onMounted(() => {
  levelsList()
})

async function levelsList() {
  levels.value = await getLevelsList(programId)
}
</script>

<template>
  <div class="flex justify-between w-[100%] mb-[40px]">
    <RouterLink :to="'/courses/' + route.params.id"><- Вернуться к курсу</RouterLink>
    <Button
        @click="visible = true"
        v-if="role === 'teacher'"
    >
      Добавить уровень
    </Button>
  </div>
  <div>
    <h2 class="font-semibold text-[25px] mb-[40px]">Название курса</h2>
    <div class="w-full">
      <div class="flex flex-wrap gap-5 justify-self-center">
        <div v-for="(item, index) in levels">
          <div class="w-[150px] h-[150px] bg-indigo-400 rounded-full flex items-center justify-center text-[#fff] mb-3 font-semibold text-4xl">
            {{ index + 1 }}
          </div>
          <RouterLink class="text-black" :to="'/courses/' + route.params.id + '/levels/' + item.id">
            {{ item.name }}
          </RouterLink>
        </div >
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
