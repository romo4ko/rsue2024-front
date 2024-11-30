<script setup>
import {RouterView, useRoute, useRouter} from "vue-router";
import Header from "./components/Header/Header.vue";

const route = useRoute();
const router = useRouter();

router.isReady().then(() => {
  if (route.fullPath === "/") {
    router.push("/registration");
  }
});
</script>

<template>
  <Header v-if="!(route.name === 'Register' || route.name === 'Login')" />
  <div class="flex flex-col items-center justify-center h-full">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
