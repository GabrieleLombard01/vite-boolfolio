<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
import AppCard from '../components/AppProjectCard.vue';
export default {
    components: { AppCard }
};
</script>

<template>
    <ul class="d-flex justify-content-center align-items-center gap-3 ">
        <AppCard />
    </ul>
</template>

<style>
/* --- STYLE HERE... --- */

/*CSS reset*/
/*Pseudo-classes*/
.card:hover {
    cursor: pointer;
    border: solid rgb(95, 95, 95) 1px;
}

.card:hover h5 {
    color: green;
    font-weight: 600;
}

/*Generics*/
ul li {
    list-style-type: none;
}

/*Utilties*/
.card {
    height: 230px;
}
</style>