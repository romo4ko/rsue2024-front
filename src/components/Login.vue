<script setup>
import {ref} from "vue";
import {Button, InputText} from "primevue";
import {RouterLink} from "vue-router";
import useRegistrationStore from "../store/index.js";
import router from "../router.js";
import FloatLabel from "primevue/floatlabel";

const authorization = ref({
  email: null,
  password: null
})

const registration = useRegistrationStore();

function login(ev) {
  ev.preventDefault();
  console.log(authorization.value)
  registration.login(authorization.value).then(() => {
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
        Login
      </h1>
      <div class="flex flex-col gap-4">
        <FloatLabel variant="on">
          <InputText class="input" id="email" v-model="authorization.email" />
          <label for="email">Почта</label>
        </FloatLabel>
        <FloatLabel variant="on">
          <InputText class="input" id="password" v-model="authorization.password" />
          <label for="password">Пароль</label>
        </FloatLabel>
      </div>
      <Button @click="login">Submit</Button>
      <span>
        Don't have an account? <RouterLink to="/registration">Sign up</RouterLink>
      </span>
    </div>
  </div>
</template>

<style scoped>
.input {
  @apply !w-full;
}

</style>
