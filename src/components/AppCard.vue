<script >
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
export default {
    data: () => ({ projects: [] }),
    methods: {
        fetchProjects() {
            axios.get(endpoint).then(res => { this.projects = res.data })
        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <li v-for="project in projects" :key="project.id">
        <div class="card" style="width: 18rem;">
            <img :src="project.thumb" class="card-img-top" :alt="project.title">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
            </div>
        </div>
    </li>
</template>

