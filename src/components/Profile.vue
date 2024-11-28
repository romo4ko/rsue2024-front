<script setup>
import useRegistrationStore from "../store/index.js";
import {Button} from "primevue";
import router from "../router.js";

const registration = useRegistrationStore();

const user = registration.user.data;

const logout = () => {
  registration.logout();
  router.push({
    name: "Login",
  });
}

</script>

<template>
  <div class="flex flex-col gap-5">
    <h1>Hello {{ user.name }}!</h1>
    <Button @click="logout">Log out</Button>
  </div>
</template>

<style scoped>

</style>
