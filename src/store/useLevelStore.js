import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useLevelStore = defineStore("addLevel", {
    actions: {
        async addLevel(programId, levelData) {
            try {
                const {data} = await axiosClient.post(`/programs/${programId}/lessons/`, levelData)

                return data
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async getLevelsList(programId) {
            try {
                const {data} = await axiosClient.get(`/programs/${programId}/lessons/`)

                return data
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    },
});

export default useLevelStore;
