<script setup>
import {ref} from "vue";
import {Button, InputText} from "primevue";
import {RouterLink} from "vue-router";
import useRegistrationStore from "../store/useRegistrationStore.js";
import router from "../router.js";
import FloatLabel from "primevue/floatlabel";

const authorization = ref({
  login: null,
  password: null
})

const registration = useRegistrationStore();

function login(ev) {
  ev.preventDefault();
  registration.login(authorization.value).then(() => {
    router.push({
      name: "Profile",
    });
  });
}
</script>

<template>
  <div class="flex flex-col justify-center px-5 py-5 bg-[#fff] rounded-xl w-full max-w-[350px] border-2">
    <div class="gap-4 flex flex-col">
      <h1 class="text-2xl">
        Логин
      </h1>
      <div class="flex flex-col gap-4">
        <FloatLabel variant="on">
          <InputText class="input" id="login" v-model="authorization.login" />
          <label for="login">Логин</label>
        </FloatLabel>
        <FloatLabel variant="on">
          <InputText type="password" class="input" id="password" v-model="authorization.password" />
          <label for="password">Пароль</label>
        </FloatLabel>
      </div>
      <Button class="!text-[#fff]" @click="login">Отправить</Button>
      <span>
       У вас нет учетной записи? <RouterLink to="/registration">Зарегистрироваться</RouterLink>
      </span>
    </div>
  </div>
</template>

<style scoped>
</style>
