import {createRouter, createWebHistory} from "vue-router";
import Registration from "./components/Registration.vue";
import Login from "./components/Login.vue";
import Profile from "./components/Profile.vue";
import useRegistrationStore from "./store/useRegistrationStore.js";
import Courses from "./components/Courses.vue";
import CourseDetail from "./components/CourseDetail.vue";
import Level from "./components/Level.vue";
import Levels from "./components/Levels.vue";

const routes = [
    {path: "/registration", component: Registration, name: "Register"},
    {path: "/login", component: Login, name: "Login"},
    {path: "/profile", component: Profile, name: "Profile", meta: {requiresAuth: true}},
    {path: "/courses", component: Courses, name: "Courses", meta: {requiresAuth: true}},
    {path: "/courses/:id", component: CourseDetail, name: "CourseDetail", meta: {requiresAuth: true}},
    {path: "/courses/:id/levels", component: Levels, name: "Levels", meta: {requiresAuth: true}},
    {path: "/courses/:id/levels/:levelId", component: Level, name: "Level", meta: {requiresAuth: true}},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const registration = useRegistrationStore();
    if (to.meta.requiresAuth && !registration.user.token) {
        next({name: "Login"});
    } else if (
        registration.user.token &&
        (to.name === "Login" || to.name === "Register")
    ) {
        next({name: "Profile"});
    } else {
        next();
    }
});

export default router;
