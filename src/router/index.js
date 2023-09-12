import {createRouter, createWebHistory} from 'vue-router';  

import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
       { path: '/', name: 'home', component: HomePage } ,
       { path: '/contact', name: 'contact', component: ContactPage } ,
       { path: '/not-found', name: 'not-found', component: NotFoundPage } ,
       { path: '/:pathMatch(.*)*', redirect: '/not-found' } ,
    ]
});

export {router}