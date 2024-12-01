<script setup>
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';
import useKidsMarksStore from "../store/useKidsMarksStore.js";
import {onMounted} from "vue";
import useMyCoures from "../store/useMyCoures.js";

const listCoures = useMyCoures();

onMounted(async () => {
  await listCoures.getList()
})
</script>

<template>
  <div class="wrapper">
    <div class="w-full">
      <div class="text-start">
        <h1 class="font-semibold text-4xl mb-[30px]">Список моих курсов</h1>

        <router-link v-if="listCoures.courses.length" v-for="item in listCoures.courses" :to="'/courses/' + item.id" :key="item.id">
          <Card class="mt-10 mb-10">
            <template #title>
              <div class="flex justify-between">
                <h2 class="text-2xl">
                  {{item.name}}
                </h2>
                <p class="flex gap-2 items-center text-md hover:text-indigo-500">
                  Перейти
                  <i class="pi pi-arrow-right" style="font-size: 1rem"></i>
                </p>
              </div>
            </template>
            <template #content>
              <p class="m-0">
                {{item.description}}
              </p>
              <ProgressBar :value="item.procentage" class="mt-5"></ProgressBar>
            </template>
          </Card>
        </router-link>
        <span class="text-md" v-else>
          Вы пока не обучаетесь ни на одном курсе (
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply w-full h-full pt-10 text-left;
}
</style>