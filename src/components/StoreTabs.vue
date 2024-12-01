<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import AvatarsStore from "./AvatarsStore.vue";
import CharactersStore from "./CharactersStore.vue";
</script>

<template>
  <div class="h-full w-full py-[50px]">
    <Tabs value="0">
      <TabList>
        <Tab value="0">Аватарки</Tab>
        <Tab value="1">Персонажи</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex justify-center items-center">
            <AvatarsStore />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <CharactersStore />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style scoped>

</style>
