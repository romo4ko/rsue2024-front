import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useParentProfileStore = defineStore("parentProfile", {
    actions: {
       async addChild(child) {
            try {
                const {data} = await axiosClient.post("/register", child)

                return data
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    },
});

export default useParentProfileStore;
