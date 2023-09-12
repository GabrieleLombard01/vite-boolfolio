import {createRouter, createWebHistory} from 'vue-router';  

import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
       { path: '/', name: 'home', component: HomePage } ,
       { path: '/contact', name: 'contact', component: ContactPage } ,
    ]
});

export {router}