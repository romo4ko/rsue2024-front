import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";
import useRegistrationStore from "./useRegistrationStore.js";

const useTeacherMarksStore = defineStore("teacherMarks", {
    state: () => ({
        courses: [],
        selectedCourse: null,
        selectedLesson: null,
        selectedExercise: null,
        solutions: [],
        exercises: []
    }),

    actions: {
        async getCourses() {
            const id = useRegistrationStore().user.data.id;
            try {
                const {data} = await axiosClient.get(`/users/${id}/programs`);
                this.setCourses(data);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async getExercises() {
            try {
                const {data} = await axiosClient.get(`/programs/${this.selectedCourse.id}/lessons/${this.selectedLesson.id}/exercises`);
                this.setExercises(data.exercises);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async getSolutions() {
            try {
                const {data} = await axiosClient.get(`/programs/${this.selectedCourse.id}/lessons/${this.selectedLesson.id}/exercises/${this.selectedExercise.id}/solutions`);
                this.setSolutions(data);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },


        setCourses(courses) {
            this.courses = courses;
        },

        setExercises(exercises) {
            this.exercises = exercises;
        },

        setSolutions(solutions) {
            this.solutions = solutions;
        },

    },
});

export default useTeacherMarksStore;
