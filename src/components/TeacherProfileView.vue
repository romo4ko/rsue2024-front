<script setup>
import {InputText} from "primevue";
import FloatLabel from "primevue/floatlabel";
</script>

<template>
<div class="flex justify-between w-full">
  <div class="text-start w-[40%]" />
  <div class="w-[40%]">
    <div class="flex justify-center w-full">
      <div class="w-[200px] h-[200px] rounded-full overflow-hidden mb-8">
        <img class="w-full h-full object-cover" src="/public/teacher.jpg" alt=".">
      </div>
    </div>
    <div class="flex flex-col gap-7">
      <FloatLabel>
        <InputText class="input" id="name" default-value="Сигаретова Любовь Владимировна" disabled />
        <label for="name">ФИО</label>
      </FloatLabel>
      <FloatLabel>
        <InputText class="input" id="mail" default-value="sigaretova@mail.com" disabled />
        <label for="mail">Email</label>
      </FloatLabel>
      <FloatLabel>
        <InputText class="input" id="login" default-value="siga" disabled />
        <label for="login">Логин</label>
      </FloatLabel>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
