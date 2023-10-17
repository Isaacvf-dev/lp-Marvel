<template>
  <nav class="navbar navbar-expand-lg px-5" data-bs-theme="dark" style="background-color: #EC1D24;">
    <div class="container-fluid">    
            
      <div class="collapse navbar-collapse me-auto" id="navbarSupportedContent">
        <router-link class="navbar-brand me-auto" :to="{ name: 'welcomepage'}">
          <img src="../assets/logo-navbar.svg" />
        </router-link>
        <ul class="navbar-nav text-white mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to=" { name: 'welcomepage'}">
              HOME
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to=" { name: 'characterspage'}">
              CHARACTERS
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to=" { name: 'characterspage'}">
              COMICS
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to=" { name: 'characterspage'}">
              EVENTS
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to=" { name: 'characterspage'}">
              CONTACT
            </router-link>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  
})
</script>

<style scoped>

</style>
