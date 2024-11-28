import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import router from './router.js';
import {createPinia} from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.use(router).use(PrimeVue, {
    theme: {
        preset: Aura
    }
}).mount('#app')
