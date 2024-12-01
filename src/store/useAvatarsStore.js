import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useAvatarsStore = defineStore("avatars", {
    actions: {
        async getAvatarsList() {
            try {
                const {data} = await axiosClient.get(`/avatars`)

                return data
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    },
});

export default useAvatarsStore;