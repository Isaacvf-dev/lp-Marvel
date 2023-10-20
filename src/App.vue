<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue';
import Breadcrumb from './components/Breadcrumb.vue';

</script>

<template>
  <NavBar />
  <Breadcrumb v-if="$route.name !== 'chardetail'"/>
  <RouterView />
</template>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
