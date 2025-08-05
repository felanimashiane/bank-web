import type {Router, RouteRecordRaw} from "vue-router";
import {createRouter, createWebHistory} from "vue-router";
import BasicDetailsCasa from "../modules/casa/views/BasicDetailsCasa.vue";
import BusinessLayout from "../modules/businessBanking/views/BusinessLayout.vue";

const routes: Array<RouteRecordRaw> = [
    {path: '/business', component: BusinessLayout},
    {path: '/c/basic', component: BasicDetailsCasa},
];

console.log('router index')

const router : Router = createRouter ({
    history: createWebHistory(),
    routes,
    }
)

export default router;