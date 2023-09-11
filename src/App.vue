<script >
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
import AppHeader from './components/AppHeader.vue';
export default {
  components: { AppHeader },
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
  <!--HEADER:-->
  <AppHeader />

  <!--MAIN:-->
  <main class="container pt-3">
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
    </ul>
  </main>
</template>

<style>
/* --- STYLE HERE... --- */

/*CSS reset*/

/*Pseudo-classes*/

/*Generics*/

/*Utilties*/
</style>