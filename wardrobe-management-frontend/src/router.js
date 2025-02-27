import {createRouter, createWebHistory} from "vue-router";
import {AboutMe, ErrorPage, ForgotPassword, Home, Login, Register, WebsiteRoot} from "./website/index.js";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutMe,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/forgotPassword',
        name: 'ForgotPassword',
        component: ForgotPassword,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not found',
        component: ErrorPage
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router