<script >
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
import AppHeader from './components/AppHeader.vue';
import AppCard from './components/AppCard.vue';

export default {
  components: { AppHeader, AppCard }
};
</script>

<template>
  <!--HEADER:-->
  <AppHeader />

  <!--MAIN:-->
  <main class="container pt-3">
    <ul class="d-flex justify-content-center align-items-center gap-3 ">
      <AppCard />
    </ul>
  </main>
</template>

<style>
/* --- STYLE HERE... --- */

/*CSS reset*/

/*Pseudo-classes*/

/*Generics*/
ul li {
  list-style-type: none;
}

/*Utilties*/
.card {
  height: 530px;
}
</style>