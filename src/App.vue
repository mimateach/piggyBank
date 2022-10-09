<script setup lang="ts">
import HomeView from "./views/HomeView.vue";
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <main>
    <Header />
<RouterView />
</main>
</template>

<style scoped>
  main {
    width: 100%;
    margin: auto;
  }

</style>

