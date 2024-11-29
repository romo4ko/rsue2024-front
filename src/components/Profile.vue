<script setup>
import useRegistrationStore from "../store/index.js";

const registration = useRegistrationStore();

const user = registration.user.data;
</script>

<template>
  <div class="flex flex-col gap-5">
    <h1>Здравствуйте, {{ user.name }}!</h1>
  </div>
</template>

<style scoped>

</style>
