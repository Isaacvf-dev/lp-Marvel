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

<style lang="sass">
    @import '../node_modules/@fontsource/roboto/index.css'
  </style>
