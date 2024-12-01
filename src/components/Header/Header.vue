<script setup>
import {Avatar, Button, Popover} from "primevue";
import useRegistrationStore from "../../store/useRegistrationStore.js";
import {ref} from "vue";
import router from "../../router.js";
import {getNav} from "../../helpers/getNav.js";

const registration = useRegistrationStore();

const user = registration.user.data;

const popup = ref();

const toggle = (event) => {
  popup.value.toggle(event);
}

const logout = () => {
  registration.logout();
  router.push({
    name: "Login",
  });
}

const navList = getNav(user.roles[0].name);
</script>

<template>
  <header class="header">
    <h1 class="title">Online School</h1>
    <nav>
      <ul class="nav-list">
        <RouterLink class="nav-item" v-for="item of navList" :to="item.routeName">
          <li>
            {{item.name}}
          </li>
        </RouterLink>
      </ul>
    </nav>
    <div class="avatar-wrapper">
      <h2 class="font-semibold">{{ user.name }}</h2>
      <button type="button" @click="toggle">
        <img v-if="user.avatar" :src="user.avatar" class="w-[48px] h-[48px] rounded-[6px]" alt=".">
        <Avatar v-else :label="user.name[0]" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261"/>
      </button>
      <Popover ref="popup">
        <Button @click="logout">Выйти</Button>
      </Popover>
    </div>
  </header>
</template>

<style scoped>
.header {
  @apply w-full flex justify-between items-center;
}

.title {
  @apply text-2xl;
}

.nav-list {
  @apply flex gap-8;
}

.avatar-wrapper {
  @apply flex items-center gap-5;
}

.nav-item {
  @apply text-black hover:text-indigo-500 hover:underline;
}
</style>
