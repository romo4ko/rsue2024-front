import axios from "axios";
import useRegistrationStore from "../store";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
    const store = useRegistrationStore();
    config.headers.Authorization = `Bearer ${store.user.token}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            sessionStorage.removeItem("TOKEN");
        }
        return error;
    },
);

export default axiosClient;
