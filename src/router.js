import {createRouter, createWebHistory} from "vue-router";
import Registration from "./components/Registration.vue";
import Login from "./components/Login.vue";
import Profile from "./components/Profile.vue";
import useRegistrationStore from "./store/useRegistrationStore.js";
import Courses from "./components/Courses.vue";
import CourseDetail from "./components/CourseDetail.vue";
import Levels from "./components/Levels/Levels.vue";
import Level from "./components/Levels/Level.vue";
import ChildProfileView from "./components/ChildProfileView.vue";
import KidMark from "./components/KidMark.vue";
import Journal from "./components/Journal.vue";
import TeacherMarks from "./components/TeacherMarks.vue";
import StoreTabs from "./components/StoreTabs.vue";
import MyCourses from "./components/MyCourses.vue";

const routes = [
    {path: "/registration", component: Registration, name: "Register"},
    {path: "/login", component: Login, name: "Login"},
    {path: "/profile", component: Profile, name: "Profile", meta: {requiresAuth: true}},
    {path: "/kid-marks", component: KidMark, name: "KidMark", meta: {requiresAuth: true}},
    {path: "/my-courses", component: MyCourses, name: "MyCourses", meta: {requiresAuth: true}},
    {path: "/journal", component: Journal, name: "Journal", meta: {requiresAuth: true}},
    {path: "/courses", component: Courses, name: "Courses", meta: {requiresAuth: true}},
    {path: "/teacher-marks", component: TeacherMarks, name: "TeacherMarks", meta: {requiresAuth: true}},
    {path: "/courses/:id", component: CourseDetail, name: "CourseDetail", meta: {requiresAuth: true}},
    {path: "/courses/:id/levels", component: Levels, name: "Levels", meta: {requiresAuth: true}},
    {path: "/courses/:id/levels/:levelId", component: Level, name: "Level", meta: {requiresAuth: true}},
    {path: "/profile/student/:studentId", component: ChildProfileView, name: "ChildProfileView", meta: {requiresAuth: true}},
    {path: "/store", component: StoreTabs, name: "Store", meta: {requiresAuth: true}},
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
