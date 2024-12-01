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
        },

        async getChildrenList(userId) {
            try {
                const {data} = await axiosClient.get(`/users/${userId}/childrens`)
                console.log(data);
                return data
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async addTelegramUsername(username) {
            console.log(username);
            try {
                if (username) {
                    const {data} = await axiosClient.post("/users/tg/store", {username: username})

                    return data
                }
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
    },
});

export default useParentProfileStore;
