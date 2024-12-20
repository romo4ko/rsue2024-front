import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useCoursesStore = defineStore("courses", {
    state: () => ({
        courses: [],
    }),

    actions: {
        async getCourses() {
            try {
                const {data} = await axiosClient.get("/programs");
                this.setCourses(data);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        setCourses(courses) {
            this.courses = courses;
        }
    },
});

export default useCoursesStore;
