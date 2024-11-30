<script setup>
import ParentProfileView from "./ParentProfileView.vue";
import ChildProfileView from "./ChildProfileView.vue";
import TeacherProfileView from "./TeacherProfileView.vue";
import useRegistrationStore from "../store/useRegistrationStore.js";

const role = useRegistrationStore().user.data.roles[0].name;
</script>

<template>
  <parent-profile-view v-if="role === 'parent'"/>
  <child-profile-view v-if="role === 'student'"/>
  <teacher-profile-view v-if="role === 'teacher'"/>
</template>

<style scoped>

</style>
