import type {Router, RouteRecordRaw} from "vue-router";
import {createRouter, createWebHistory} from "vue-router";
import BusinessLayout from "../modules/businessBanking/views/BusinessLayout.vue";
import CasaLayout from "../modules/casa/views/CasaLayout.vue";
import PersonalDetailsCasa from "../modules/casa/views/PersonalDetailsCasa.vue";

const routes: Array<RouteRecordRaw> = [
    {path: '/business', component: BusinessLayout},
    {path: '/casa', component: CasaLayout},
    {path: '/casa/personal', component: PersonalDetailsCasa},
];

const router : Router = createRouter ({
    history: createWebHistory(),
    routes,
    }
)

export default router;