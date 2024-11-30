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
                this.setLevel(data);
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
