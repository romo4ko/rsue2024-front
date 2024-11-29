<script setup>
import {ref} from "vue";
import {Button, InputText} from "primevue";
import FloatLabel from 'primevue/floatlabel';
import {RouterLink} from "vue-router";
import useRegistrationStore from "../store/index.js";
import router from "../router.js";

const user = ref({
  name: "",
  surname: "",
  patronymic: "",
  login: "",
  email: "",
  password: ""
})

const registration = useRegistrationStore();

function register(ev) {
  ev.preventDefault();
  console.log(user.value);
  registration.register(user.value).then(() => {
    router.push({
      name: "Profile",
    });
  });
}
</script>

<template>
  <div class="flex flex-col justify-center px-5 py-5 bg-[#1e1e1e] rounded-xl w-full max-w-[350px]">
    <div class="gap-4 flex flex-col">
      <h1 class="text-2xl">
        Registration
      </h1>
      <div class="flex flex-col gap-4">
        <FloatLabel variant="on">
          <InputText class="input" id="name" v-model="user.name" />
          <label for="name">Имя</label>
        </FloatLabel>
        <FloatLabel variant="on">
          <InputText class="input" id="surname" v-model="user.surname" />
          <label for="surname">Фамилия</label>
        </FloatLabel>
        <FloatLabel variant="on">
          <InputText class="input" id="patronymic" v-model="user.patronymic" />
          <label for="patronymic">Отчество</label>
        </FloatLabel>
        <FloatLabel variant="on">
          <InputText class="input" id="login" v-model="user.login" />
          <label for="login">Логин</label>
        </FloatLabel>
        <FloatLabel variant="on">
          <InputText class="input" id="email" v-model="user.email" />
          <label for="email">Почта</label>
        </FloatLabel>
        <FloatLabel variant="on">
          <InputText class="input" id="password" v-model="user.password" />
          <label for="password">Логин</label>
        </FloatLabel>
      </div>
      <Button @click="register">Submit</Button>
      <span>
        Already have an account? <RouterLink to="/login">Login</RouterLink>
      </span>
    </div>
  </div>
</template>

<style scoped>
.input {
  @apply !border-zinc-800 focus:!border-emerald-500 !w-full;
}

</style>
