<script setup>
import {InputText} from "primevue";
import FloatLabel from "primevue/floatlabel";
import useRegistrationStore from "../store/useRegistrationStore.js";
import useAchievementsStore from "../store/useAchievementsStore.js";
import {computed, onMounted, ref} from "vue";
import useChildProfileStore from "../store/useChildProfileStore.js";
import {useRoute} from "vue-router";

const route = useRoute()
const { getAchievementsList } = useAchievementsStore()
const achievements = ref([])
const { getChild } = useChildProfileStore()
const profile = ref(useRegistrationStore().user.data);

onMounted(async () => {
  if (route.params.studentId) {
    const child = await getChild(route.params.studentId)

    profile.value = child.user
  }

  achievements.value = await getAchievementsList(profile.value.id)
})

const fio = computed(() => `${profile.value.surname} ${profile.value.name} ${profile.value.patronymic}`);
</script>

<template>
<div class="flex justify-between w-full">
  <div class="text-start w-[40%]">
    <h2 class="font-semibold text-[25px] mb-[30px]">Ваши достижения</h2>
    <div class="flex flex-wrap gap-2 mb-3">
      <div class="w-[115px] h-[115px]" v-for="(achieve, index) in achievements" :key="index">
        <img :src="achieve.image" alt="." :title="achieve.name">
      </div>
    </div>
  </div>
  <div class="w-[40%]">
    <div class="flex justify-center w-full">
      <div class="w-[200px] h-[200px] rounded-full overflow-hidden mb-8">
        <img v-if="profile.image" class="w-full h-full object-cover" :src="profile.image" alt=".">
        <img v-else class="w-full h-full object-cover" src="/public/no-image.png" alt=".">
      </div>
    </div>
    <div class="flex flex-col gap-7">
      <FloatLabel>
        <InputText class="input" id="name" :default-value="fio" disabled />
        <label for="name">ФИО</label>
      </FloatLabel>
      <FloatLabel>
        <InputText class="input" id="login" :default-value="profile.login" disabled />
        <label for="login">Логин</label>
      </FloatLabel>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
