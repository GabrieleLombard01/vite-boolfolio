<script >

import AppHeader from './components/AppHeader.vue';

export default {
  components: { AppHeader }
};
</script>

<template>
  <!--HEADER:-->
  <AppHeader />

  <!--MAIN:-->
  <main class="pt-5">

    <div class="container">

      <RouterView />

    </div>

  </main>
</template>

