import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";
import useRegistrationStore from "./useRegistrationStore.js";

const useJournalMarksStore = defineStore("journalMarks", {
    state: () => ({
        journalMarks: {}
    }),
    actions: {
        async getListKidsMarks() {
            try {
                const userId = useRegistrationStore().user.data.id
                const {data} = await axiosClient.get(`/users/${userId}/students-marks`)

                this.journalMarks = data

                return data
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    },
});

export default useJournalMarksStore;
