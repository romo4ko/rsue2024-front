<script setup>
import DeleteIcon from "./Icons/DeleteIcon.vue";
import {useChildren} from "../composables/useChildren.ts";
import {Button, InputText} from "primevue";
import FloatLabel from "primevue/floatlabel";
import Dialog from 'primevue/dialog';
import {ref} from "vue";

const { children } = useChildren()
const visible = ref(false)
</script>

<template>
<div class="flex justify-between w-full">
  <div class="text-start w-[40%]">
    <h2 class="font-semibold text-[25px] mb-[30px]">Ваши дети</h2>
    <div>
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(child, index) in children" :key="index" class="flex items-center justify-between px-[20px] py-[15px] rounded-[10px] shadow-card w-full">
          <div class="flex items-center gap-3">
            <div class="w-14 h-14 rounded-full overflow-hidden">
              <img class="w-full h-full" :src="child.image" alt=".">
            </div>
            <div class="mx-auto">
              <a href="">
                {{ child.name }}
              </a>
            </div>
          </div>
          <a href="" class="w-[10px] h-[10px]">
            <delete-icon class="w-full h-full" />
          </a>
        </div>
      </div>
      <button
          class="w-full px-[20px] py-[15px] bg-[#646cff] text-[#fff] rounded-[10px] hover:bg-[#757cff]"
          label="Show"
          @click="visible = true"
      >
        Добавить ребенка
      </button>
    </div>
  </div>
  <div class="w-[40%]">
    <div class="flex justify-center w-full">
      <div class="w-[200px] h-[200px] rounded-full overflow-hidden mb-8">
        <img class="w-full h-full object-cover" src="/public/woman.jpg" alt=".">
      </div>
    </div>
    <div class="flex flex-col gap-7">
      <FloatLabel>
        <InputText class="input" id="name" default-value="Иванова Марина Семеновна" disabled />
        <label for="name">ФИО</label>
      </FloatLabel>
      <FloatLabel>
        <InputText class="input" id="mail" default-value="semenovna@mail.com" disabled />
        <label for="mail">Email</label>
      </FloatLabel>
      <FloatLabel>
        <InputText class="input" id="login" default-value="durnaya" disabled />
        <label for="login">Логин</label>
      </FloatLabel>
    </div>
  </div>
</div>

  <Dialog v-model:visible="visible" modal header="Добавить ребенка" :style="{ width: '25rem' }">
    <div class="flex flex-col gap-4 py-3">
      <FloatLabel variant="on">
        <InputText class="input" id="name1" />
        <label for="name1">Имя</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <InputText class="input" id="surname1" />
        <label for="surname1">Фамилия</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <InputText class="input" id="patronymic1" />
        <label for="patronymic1">Отчество</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <InputText class="input" id="login1" />
        <label for="login1">Логин</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <InputText class="input" id="password1" />
        <label for="password1">Пароль</label>
      </FloatLabel>
      <button class="w-full px-[20px] py-[15px] bg-[#646cff] text-[#fff] rounded-[10px] hover:bg-[#757cff]">
        Отправить
      </button>
    </div>
  </Dialog>
</template>

<style scoped>

</style>
