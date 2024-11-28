<script setup>
import {ref} from "vue";
import {Button, InputText} from "primevue";
import {RouterLink} from "vue-router";
import useRegistrationStore from "../store/index.js";
import router from "../router.js";

const user = ref({
  name: "Alexander",
  surname: "Kovalenko",
  patronymic: "Sergeevich",
  email: "alexander@gmail.com",
  password: "123456789"
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
        <InputText class="input" type="text" v-model="user.name" placeholder="Name"/>
        <InputText class="input" type="text" v-model="user.surname" placeholder="Surname"/>
        <InputText class="input" type="text" v-model="user.patronymic" placeholder="Patronymic"/>
        <InputText class="input" type="text" v-model="user.email" placeholder="Email"/>
        <InputText class="input" type="text" v-model="user.password" placeholder="Password"/>
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
  @apply !border-zinc-800 focus:!border-emerald-500;
}

</style>
