<script setup>

import {Button, InputText} from "primevue";
import {ref} from "vue";
import FloatLabel from "primevue/floatlabel";
import Dialog from "primevue/dialog";
import useRole from "../../composables/useRole.js";
const visible = ref(false)
const role = useRole();
</script>

<template>
  <div class="flex justify-end w-[70%] mb-[40px]">
<!--    TODO условие по роли на показ кнопки-->

    <Button
        @click="visible = true"
    >
      Добавить уровень
    </Button>
  </div>
  <div>
    <h2 class="font-semibold text-[25px] mb-[40px]">Название курса</h2>
    <div class="w-full">
      <div class="flex flex-wrap gap-5 w-[70%] justify-self-center">
        <div v-for="(item, index) in 8">
          <div class="w-[150px] h-[150px] bg-indigo-400 rounded-full flex items-center justify-center text-[#fff] mb-3 font-semibold text-4xl">
            {{ index + 1 }}
          </div>
          <a class="text-black" href="">
            Название уровня
          </a>
        </div >
      </div>
    </div>
  </div>
  <Dialog v-model:visible="visible" modal header="Добавить уровень" :style="{ width: '25rem' }">
    <div class="flex flex-col gap-4 py-3">
      <FloatLabel variant="on">
        <InputText class="input" id="stage-name" />
        <label for="name1">Название уровня</label>
      </FloatLabel>
      <Button class="w-full">
        Добавить
      </Button>
    </div>
  </Dialog>
</template>

<style scoped>

</style>
