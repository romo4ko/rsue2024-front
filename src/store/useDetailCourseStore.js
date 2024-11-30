import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useDetailCourseStore = defineStore("courseDetail", {
    state: () => ({
        course: {}
    }),

    actions: {
        async getCourse(id) {
            try {
                const {data} = await axiosClient.get(`/programs/${id}`);
                this.setCourse(data);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        setCourse(course) {
            this.course = course;
        }
    },
});

export default useDetailCourseStore;
