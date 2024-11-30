import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useAchievementsStore = defineStore("achievements", {
    actions: {
        async getAchievementsList(userId) {
            try {
                const {data} = await axiosClient.get(`/users/${userId}/achievements`)

                return data
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    },
});

export default useAchievementsStore;
