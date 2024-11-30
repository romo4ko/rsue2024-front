<script setup>
import {InputText, Avatar} from "primevue";
import FloatLabel from "primevue/floatlabel";
import useRegistrationStore from "../store/useRegistrationStore.js";

const profile = useRegistrationStore().user.data;
const fio = `${profile.surname} ${profile.name} ${profile.patronymic}`
</script>

<template>
<div class="flex justify-between w-full">
  <div class="text-start w-[40%]" />
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
        <InputText class="input" id="mail" :default-value="profile.email" disabled />
        <label for="mail">Email</label>
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
