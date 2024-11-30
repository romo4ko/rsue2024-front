import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useDetailLevelStore = defineStore("levelDetail", {
    state: () => ({
        level: {
            "id": 1,
            "name": "Введение в программирование",
            "theory": "Этот урок знакомит с основами программирования, включая переменные, типы данных и управляющие конструкции.",
            "exercises": [
                {
                    "id": 101,
                    "condition": "Каков результат выполнения следующего кода? `console.log(2 + 2);`",
                    "answers": {
                        "a": "3",
                        "b": "4",
                        "c": "5",
                        "d": "undefined"
                    },
                    "points": 10
                },
                {
                    "id": 102,
                    "condition": "Выберите правильный тип данных для хранения последовательности символов.",
                    "answers": {
                        "a": "Число",
                        "b": "Строка",
                        "c": "Булево значение",
                        "d": "Массив"
                    },
                    "points": 15
                },
                {
                    "id": 103,
                    "condition": "Что делает следующий оператор? `let x = 10;`",
                    "answers": {
                        "a": "Объявляет переменную x со значением 10",
                        "b": "Объявляет константу x со значением 10",
                        "c": "Сравнивает x с 10",
                        "d": "Создает объект x"
                    },
                    "points": 10
                }
            ]
        }
    }),

    actions: {
        async getLevel(programId, levelId) {
            try {
                const {data} = await axiosClient.get(`/programs/${programId}/lessons/${levelId}`);
                this.setLevel(data);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        setLevel(level) {
            this.level = level;
        }
    },
});

export default useDetailLevelStore;
