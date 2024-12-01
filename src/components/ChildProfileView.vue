<script setup>
import {Avatar, InputText} from "primevue";
import FloatLabel from "primevue/floatlabel";
import useRegistrationStore from "../store/useRegistrationStore.js";
import useAchievementsStore from "../store/useAchievementsStore.js";
import {computed, onMounted, ref} from "vue";
import useChildProfileStore from "../store/useChildProfileStore.js";
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import {useRoute} from "vue-router";
import StarIcon from "./Icons/StarIcon.vue";

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
  <Tabs value="0" class="w-[40%]">
    <TabList>
      <Tab value="0">Достижения</Tab>
      <Tab value="1">Персонаж</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <div class="text-start">
          <h2 class="font-semibold text-[25px] mb-[30px]">Ваши достижения</h2>
          <div class="flex flex-wrap gap-2 mb-3">
            <div class="w-[115px] h-[115px]" v-for="(achieve, index) in achievements" :key="index">
              <img :src="achieve.image" alt="." :title="achieve.name">
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value="1">
        <div class="w-[200px] h-[347px] overflow-hidden justify-self-center">
          <img class="w-full h-full object-cover" src="/public/testpers.png" alt=".">
        </div>
      </TabPanel>
    </TabPanels>
  </Tabs>
  <div class="w-[40%]">
    <div class="flex justify-center w-full">
      <div class="w-[200px] h-[200px] overflow-hidden mb-8">
        <img v-if="profile.avatar" class="w-full rounded-full h-full object-cover" :src="profile.avatar" alt=".">
        <Avatar v-else :label="profile.name[0]" class="!w-full !h-full" size="large" style="background-color: #ece9fc; color: #2a1261"/>
      </div>
    </div>
    <div class="flex flex-col gap-7 mb-8">
      <FloatLabel>
        <InputText class="input" id="name" :default-value="fio" disabled />
        <label for="name">ФИО</label>
      </FloatLabel>
      <FloatLabel>
        <InputText class="input" id="login" :default-value="profile.login" disabled />
        <label for="login">Логин</label>
      </FloatLabel>
    </div>
    <div class="flex items-center gap-3">
      <div class="text-lg">
        Баланс:
      </div>
      <div class="flex items-center gap-2">
          <span class="text-lg">
            {{ profile.balance }}
          </span>
        <star-icon />
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
