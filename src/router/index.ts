import type {Router, RouteRecordRaw} from "vue-router";
import {createRouter, createWebHistory} from "vue-router";
import BasicDetailsCasa from "../modules/casa/views/BasicDetailsCasa.vue";
import BasicDetailsBusiness from "../modules/businessBanking/views/BasicDetailsBusiness.vue";

const routes: Array<RouteRecordRaw> = [
    {path: '/b/basic', component: BasicDetailsBusiness},
    {path: '/c/basic', component: BasicDetailsCasa},
];

console.log('router index')

const router : Router = createRouter ({
    history: createWebHistory(),
    routes,
    }
)

export default router;