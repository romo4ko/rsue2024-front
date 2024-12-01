<script setup>
import StarIcon from "./Icons/StarIcon.vue";
import {Button} from "primevue";
import useAvatarsStore from "../store/useAvatarsStore.js";
import {onMounted, ref} from "vue";

const { getAvatarsList } = useAvatarsStore()
const avatars = ref([])

onMounted(async () => {
  avatars.value = await getAvatarsList()
})
</script>

<template>
  <div class="h-full py-[50px]">
    <div>
      <h2 class="font-semibold text-[25px] mb-[40px]">
        Магазин аватарок
      </h2>
    </div>
    <div class="flex flex-wrap gap-x-4 gap-y-7 pb-[50px]">
      <div v-for="(item, index) in avatars" :key="index" class="flex flex-col items-center w-[230px]">
        <div class="w-[130px] h-[130px] mb-3">
          <img class="w-full h-full" :src="item.url" alt=".">
        </div>
        <div class="flex items-center gap-3 mb-4">
          <span>
            {{ item.price }}
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
