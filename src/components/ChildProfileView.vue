<script setup>
import {InputText} from "primevue";
import FloatLabel from "primevue/floatlabel";
import {useAchivements} from "../composables/useAchivements.ts";

const { achivements } = useAchivements()
</script>

<template>
<div class="flex justify-between w-full">
  <div class="text-start w-[40%]">
    <h2 class="font-semibold text-[25px] mb-[30px]">Ваши достижения</h2>
    <div class="flex flex-wrap gap-2 mb-3">
      <div class="w-[115px] h-[115px]" v-for="(achive, index) in achivements" :key="index">
        <img :src="achive.image" alt="." :title="achive.name">
      </div>
    </div>
  </div>
  <div class="w-[40%]">
    <div class="flex justify-center w-full">
      <div class="w-[200px] h-[200px] rounded-full overflow-hidden mb-8">
        <img class="w-full h-full object-cover" src="/public/images.jpeg" alt=".">
      </div>
    </div>
    <div class="flex flex-col gap-7">
      <FloatLabel>
        <InputText class="input" id="name" default-value="Иванов Петр Иванович" disabled />
        <label for="name">ФИО</label>
      </FloatLabel>
      <FloatLabel>
        <InputText class="input" id="login" default-value="vanya" disabled />
        <label for="login">Логин</label>
      </FloatLabel>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
