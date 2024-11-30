import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useCoursesStore = defineStore("courses", {
    state: () => ({
        courses: [
            {
                name: "Frontend - разработчик",
                description: "Станьте самым крутым смузихлебом в городе! Когда вы будете держать в руке тыквенный раф, все будут понимать кто в старбаксе настоящий папа с макбуком!",
                image: "https://primefaces.org/cdn/primevue/images/usercard.png",
                min_student_age: 6,
                max_student_age: 15
            },
            {
                name: "Frontend - разработчик",
                description: "Станьте самым крутым смузихлебом в городе! Когда вы будете держать в руке тыквенный раф, все будут понимать кто в старбаксе настоящий папа с макбуком!",
                image: "https://primefaces.org/cdn/primevue/images/usercard.png",
                min_student_age: 6,
                max_student_age: 15
            },
            {
                name: "Frontend - разработчик",
                description: "Станьте самым крутым смузихлебом в городе! Когда вы будете держать в руке тыквенный раф, все будут понимать кто в старбаксе настоящий папа с макбуком!",
                image: "https://primefaces.org/cdn/primevue/images/usercard.png",
                min_student_age: 6,
                max_student_age: 15
            },
            {
                name: "Frontend - разработчик",
                description: "Станьте самым крутым смузихлебом в городе! Когда вы будете держать в руке тыквенный раф, все будут понимать кто в старбаксе настоящий папа с макбуком!",
                image: "https://primefaces.org/cdn/primevue/images/usercard.png",
                min_student_age: 6,
                max_student_age: 15
            },
            {
                name: "Frontend - разработчик",
                description: "Станьте самым крутым смузихлебом в городе! Когда вы будете держать в руке тыквенный раф, все будут понимать кто в старбаксе настоящий папа с макбуком!",
                image: "https://primefaces.org/cdn/primevue/images/usercard.png",
                min_student_age: 6,
                max_student_age: 15
            },
            {
                name: "Frontend - разработчик",
                description: "Станьте самым крутым смузихлебом в городе! Когда вы будете держать в руке тыквенный раф, все будут понимать кто в старбаксе настоящий папа с макбуком!",
                image: "https://primefaces.org/cdn/primevue/images/usercard.png",
                min_student_age: 6,
                max_student_age: 15
            },
            {
                name: "Frontend - разработчик",
                description: "Станьте самым крутым смузихлебом в городе! Когда вы будете держать в руке тыквенный раф, все будут понимать кто в старбаксе настоящий папа с макбуком!",
                image: "https://primefaces.org/cdn/primevue/images/usercard.png",
                min_student_age: 6,
                max_student_age: 15
            },
            {
                name: "Frontend - разработчик",
                description: "Станьте самым крутым смузихлебом в городе! Когда вы будете держать в руке тыквенный раф, все будут понимать кто в старбаксе настоящий папа с макбуком!",
                image: "https://primefaces.org/cdn/primevue/images/usercard.png",
                min_student_age: 6,
                max_student_age: 15
            },
            {
                name: "Frontend - разработчик",
                description: "Станьте самым крутым смузихлебом в городе! Когда вы будете держать в руке тыквенный раф, все будут понимать кто в старбаксе настоящий папа с макбуком!",
                image: "https://primefaces.org/cdn/primevue/images/usercard.png",
                min_student_age: 6,
                max_student_age: 15
            },
            {
                name: "Frontend - разработчик",
                description: "Станьте самым крутым смузихлебом в городе! Когда вы будете держать в руке тыквенный раф, все будут понимать кто в старбаксе настоящий папа с макбуком!",
                image: "https://primefaces.org/cdn/primevue/images/usercard.png",
                min_student_age: 6,
                max_student_age: 15
            },
            {
                name: "Frontend - разработчик",
                description: "Станьте самым крутым смузихлебом в городе! Когда вы будете держать в руке тыквенный раф, все будут понимать кто в старбаксе настоящий папа с макбуком!",
                image: "https://primefaces.org/cdn/primevue/images/usercard.png",
                min_student_age: 6,
                max_student_age: 15
            },
        ],
    }),

    actions: {
        async getCourses(user) {
            try {
                const {data} = await axiosClient.post("/courses", user);
                this.setCourses(data.courses);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        setCourses(courses) {
            this.courses = courses;
        }
    },
});

export default useCoursesStore;
