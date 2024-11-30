<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import useKidsMarksStore from "../store/useKidsMarksStore.js";
import {onMounted} from "vue";

const listKidsMarks = useKidsMarksStore();

onMounted(async () => {
  await listKidsMarks.getListKidsMarks()
})

function getMarks(exercises) {
  let marks = ''

  exercises.forEach((item) => {
    item.solutions.forEach((solution) => {
      marks += ' ' + solution.mark
    })
  })

  return marks
}
</script>

<template>
  <div class="wrapper">
    <div class="w-full">
      <div class="text-start">
        <h1 class="font-semibold text-4xl mb-[30px]">Ваши дети</h1>
        <div class="mt-16" v-for="listKidsMark in listKidsMarks.kidsMarks" :key="listKidsMark.id">
          <h2 class="font-semibold text-2xl">
            {{ listKidsMark.name }}
          </h2>

          <Accordion :value="['0']" multiple>
            <AccordionPanel v-for="program in listKidsMark.programs" :value="program.id">
              <AccordionHeader>
                {{ program.name }}
              </AccordionHeader>
              <AccordionContent>
                <DataTable :value="program.lessons" sortMode="multiple" showGridlines stripedRows tableStyle="min-width: 50rem">
                  <Column field="name" header="Название Урока" sortable style="width: 50%"></Column>
                  <Column field="exercises" header="Оценки за урок" style="width: 50%">
                    <template #body="slotProps">
                      <span>{{ getMarks(slotProps.data.exercises) }}</span>
                    </template>
                  </Column>
                </DataTable>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply w-full h-full pt-10 text-left;
}
</style>