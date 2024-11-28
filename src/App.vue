<script setup>
import {RouterView, useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();

router.isReady().then(() => {
  if (route.fullPath === "/") {
    router.push("/registration");
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full">
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
