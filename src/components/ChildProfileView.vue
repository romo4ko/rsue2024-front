<script setup>
import {Avatar, InputText} from "primevue";
import FloatLabel from "primevue/floatlabel";
import {useAchivements} from "../composables/useAchivements.ts";
import useRegistrationStore from "../store/useRegistrationStore.js";

const profile = useRegistrationStore().user.data;
const fio = `${profile.surname} ${profile.name} ${profile.patronymic}`

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
      <div class="w-[200px] h-[200px] overflow-hidden mb-8">
        <img v-if="profile.image" class="w-full rounded-full h-full object-cover" :src="profile.image" alt=".">
        <Avatar v-else :label="profile.name[0]" class="!w-full !h-full" size="large" style="background-color: #ece9fc; color: #2a1261"/>
      </div>
    </div>
    <div class="flex flex-col gap-7">
      <FloatLabel>
        <InputText class="input" id="name" :default-value="fio" disabled />
        <label for="name">ФИО</label>
      </FloatLabel>
      <FloatLabel>
        <InputText class="input" id="login" :default-value="profile.login" disabled />
        <label for="login">Логин</label>
      </FloatLabel>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
