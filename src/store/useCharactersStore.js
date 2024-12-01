import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useCharactersStore = defineStore("characters", {
    actions: {
        async getCharactersList() {
            try {
                const {data} = await axiosClient.get(`/characters`)

                return data
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        async buyCharacter(characterId) {
            try {
                const {data} = await axiosClient.post(`/characters/buy/${characterId}`)

                return data
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
    },
});

export default useCharactersStore;
