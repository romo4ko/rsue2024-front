<script setup>
import {Button} from "primevue";
import useCharactersStore from "../store/useCharactersStore.js";
import {onMounted, ref} from "vue";
import useRegistrationStore from "../store/useRegistrationStore.js";
import router from "../router.js";

const registrationStore = useRegistrationStore()
const profile = registrationStore.user.data
const characters = ref([])
const { getCharactersList, buyCharacter } = useCharactersStore()
const route = router.resolve({name: 'Profile'});

onMounted(async () => {
  characters.value = await getCharactersList()
})

async function buyingCharacter(characterId) {
  await buyCharacter(characterId);
  await registrationStore.getUser(profile.id)

  window.location.href = route.href
}
</script>

<template>
  <div class="h-full py-[30px]">
    <div>
      <h2 class="font-semibold text-[25px] mb-[60px]">
        Магазин персонажей
      </h2>
    </div>
    <div class="flex flex-wrap gap-x-4 gap-y-7 pb-[50px]">
      <div v-for="(item, index) in characters" :key="index" class="flex flex-col items-center w-[223px] h-[443px]">
        <div class="w-[200px] h-[347px] overflow-hidden">
          <img class="w-full h-full object-cover" :src="item.url" alt=".">
        </div>
        <div class="flex items-center gap-3 mb-4">
          <span>
            {{ item.price }}
          </span>
          <star-icon />
        </div>
        <Button class="w-full" @click="buyingCharacter(item.id)">
          Купить
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
