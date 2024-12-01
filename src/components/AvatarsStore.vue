<script setup>
import StarIcon from "./Icons/StarIcon.vue";
import {Button} from "primevue";
</script>

<template>
  <div class="h-full py-[50px]">
    <div>
      <h2 class="font-semibold text-[25px] mb-[40px]">
        Магазин аватарок
      </h2>
    </div>
    <div class="flex flex-wrap gap-x-4 gap-y-7 pb-[50px]">
      <div v-for="(item, index) in 16" class="flex flex-col items-center w-[230px]">
        <div class="w-[130px] h-[130px]">
          <img class="w-full h-full" src="/public/store-img.png" alt=".">
        </div>
        <div class="flex items-center gap-3 mb-4">
          <span>
            1000
          </span>
          <star-icon />
        </div>
        <Button class="w-full">Купить</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Добавьте стили по желанию */
</style>


<style scoped>

</style>
