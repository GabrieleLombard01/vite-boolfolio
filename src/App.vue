<script >

import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';

export default {
  components: { AppHeader, HomePage }
};
</script>

<template>
  <!--HEADER:-->
  <AppHeader />

  <!--MAIN:-->
  <main class="container pt-5">
    <HomePage />
  </main>
</template>

