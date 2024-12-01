import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useDetailLevelStore = defineStore("levelDetail", {
    state: () => ({
        level: {}
    }),

    actions: {
        async getLevel(programId, levelId) {
            try {
                const {data} = await axiosClient.get(`/programs/${programId}/lessons/${levelId}`);
                console.log(data);
                this.setLevel(data);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async postExerciseSolution(programId, levelId, exerciseId, body) {
            try {
                const {data} = await axiosClient.post(`/programs/${programId}/lessons/${levelId}/exercises/${exerciseId}/solutions/solve`, {answer: body});
                console.log(data);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async updateLevelInfo(programId, levelId) {
            try {
                const {data} = await axiosClient.post(`/programs/${programId}/lessons/${levelId}`, this.level);
                console.log(data);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async updateLevelExerciseInfo(programId, levelId, exerciseId, body) {
            try {
                const {data} = await axiosClient.post(`/programs/${programId}/lessons/${levelId}/exercises/${exerciseId}`, body);
                console.log(data);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        setLevel(level) {
            this.level = level;
        }
    },
});

export default useDetailLevelStore;
