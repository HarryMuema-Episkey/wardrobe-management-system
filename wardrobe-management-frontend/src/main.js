import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router.js";
import VueTelInput from "vue-tel-input";
import {createPinia} from "pinia";

createApp(App)
    .use(router)
    .use(createPinia())
    .use(VueTelInput)
    .mount('#app')
