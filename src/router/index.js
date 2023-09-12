import {createRouter, createWebHistory} from 'vue-router';  

import HomePage from '../pages/HomePage.vue';
import ContactsPage from '../pages/ContactsPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
       { path: '/', name: 'home', component: HomePage } 
    ]
});