import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useMyCoures = defineStore("kidsMarks", {
    state: () => ({
        courses: {}
    }),
    actions: {
        async getList() {
            try {
                const {data} = await axiosClient.get(`/programs/my-programs`)

                this.courses = data

                return data
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    },
});

export default useMyCoures;
