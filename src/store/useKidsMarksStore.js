import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";
import useRegistrationStore from "./useRegistrationStore.js";

const useKidsMarksStore = defineStore("kidsMarks", {
    state: () => ({
        kidsMarks: {}
    }),
    actions: {
        async getListKidsMarks() {
            try {
                const userId = useRegistrationStore().user.data.id
                const {data} = await axiosClient.get(`/users/${userId}/childrens-marks`)

                this.kidsMarks = data

                return data
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    },
});

export default useKidsMarksStore;
