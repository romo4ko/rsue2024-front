import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useChildProfileStore = defineStore("childProfile", {
    actions: {
        async getChild(userId) {
            try {
                const {data} = await axiosClient.get(`/users/${userId}`)
                console.log(data);
                return data
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    },
});

export default useChildProfileStore;
