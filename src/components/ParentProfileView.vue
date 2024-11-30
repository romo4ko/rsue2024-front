<script setup>
import DeleteIcon from "./Icons/DeleteIcon.vue";
import {Button, InputText} from "primevue";
import FloatLabel from "primevue/floatlabel";
import Dialog from 'primevue/dialog';
import {onMounted, ref} from "vue";
import useRegistrationStore from "../store/useRegistrationStore.js";
import useParentProfileStore from "../store/useParentProfileStore.js";

const visible = ref(false)

const profile = useRegistrationStore().user.data;
const fio = `${profile.surname} ${profile.name} ${profile.patronymic}`

const children = ref([])

const formChild = ref({
  parentId: profile.id,
  name: '',
  surname: '',
  patronymic: '',
  login: '',
  password: '',
  role: 'student'
})

const { addChild, getChildrenList } = useParentProfileStore()

function addingChild(ev) {
  ev.preventDefault();

  addChild(formChild.value).then((resp) => {
    if (resp) {
      visible.value = false
      childrenList()

      formChild.value = {
        parentId: profile.id,
        name: '',
        surname: '',
        patronymic: '',
        login: '',
        password: '',
        role: 'student'
      }
    }
  });
}

onMounted(() => {
  childrenList()
})

async function childrenList() {
  children.value = await getChildrenList(profile.id)
}
</script>

<template>
<div class="flex justify-between w-full">
  <div class="text-start w-[40%]">
    <h2 class="font-semibold text-[25px] mb-[30px]">Ваши дети</h2>
    <div>
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(child, index) in children" :key="index" class="flex items-center justify-between px-[20px] py-[15px] rounded-[10px] shadow-card w-full">
          <div class="flex items-center gap-3">
            <div class="w-14 h-14 rounded-full overflow-hidden">
              <img class="w-full h-full" :src="child.image" alt=".">
            </div>
            <div class="mx-auto">
              <RouterLink :to="'/profile/student/' + child.id" href="" class="text-black">
                {{ child.name }}
              </RouterLink>
            </div>
          </div>
<!--          <a href="" class="w-[10px] h-[10px]">-->
<!--            <delete-icon class="w-full h-full" />-->
<!--          </a>-->
        </div>
      </div>
      <Button
          class="w-full"
          label="Show"
          @click="visible = true"
      >
        Добавить ребенка
      </Button>
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
        <InputText class="input" id="mail" :default-value="profile.email" disabled />
        <label for="mail">Email</label>
      </FloatLabel>
      <FloatLabel>
        <InputText class="input" id="login" :default-value="profile.login" disabled />
        <label for="login">Логин</label>
      </FloatLabel>
    </div>
  </div>
</div>

  <Dialog v-model:visible="visible" modal header="Добавить ребенка" :style="{ width: '25rem' }">
    <div class="flex flex-col gap-4 py-3">
      <FloatLabel variant="on">
        <InputText class="input" id="name-child" v-model="formChild.name" />
        <label for="name1">Имя</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <InputText class="input" id="surname-child" v-model="formChild.surname" />
        <label for="surname1">Фамилия</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <InputText class="input" id="patronymic-child" v-model="formChild.patronymic" />
        <label for="patronymic1">Отчество</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <InputText class="input" id="login-child" v-model="formChild.login" />
        <label for="login1">Логин</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <InputText class="input" id="password-child" v-model="formChild.password" />
        <label for="password1">Пароль</label>
      </FloatLabel>
      <Button class="w-full" @click="addingChild">
        Отправить
      </Button>
    </div>
  </Dialog>
</template>

<style scoped>

</style>
