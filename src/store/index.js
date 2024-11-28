import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useRegistrationStore = defineStore("registration", {
    state: () => ({
        user: {
            data: JSON.parse(sessionStorage.getItem("USER")) || {},
            token: sessionStorage.getItem("TOKEN") || null,
        },
    }),

    actions: {
        async register(user) {
            try {
                const {data} = await axiosClient.post("/register", user);
                this.setUser(data.user);
                this.setToken(data.token);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async login(user) {
            try {
                const {data} = await axiosClient.post("/auth", user);
                this.setUser(data.user);
                this.setToken(data.token);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async logout() {
            this.clearUser();
        },

        async getUser() {
            try {
                const {data} = await axiosClient.get("/user");
                this.setUser(data);
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async getCategories() {
            try {
                const {data} = await axiosClient.get("/categories");
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        setUser(user) {
            this.user.data = user;
            sessionStorage.setItem("USER", JSON.stringify(user));
        },

        setToken(token) {
            this.user.token = token;
            sessionStorage.setItem("TOKEN", token);
        },

        clearUser() {
            this.user.data = {};
            this.user.token = null;
            sessionStorage.removeItem("USER");
            sessionStorage.removeItem("TOKEN");
        },
    },
});

export default useRegistrationStore;
