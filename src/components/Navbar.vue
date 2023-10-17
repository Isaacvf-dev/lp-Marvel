<template>
  <nav class="navbar navbar-expand-lg px-5" data-bs-theme="dark" style="background-color: #EC1D24; ">
    <div class="container-fluid" style="padding: 0 32px">    
            
      <div class="collapse navbar-collapse me-auto" id="navbarSupportedContent">
        <router-link class="navbar-brand me-auto" :to="{ name: 'welcome'}">
          <img src="../assets/logo-navbar.svg" />
        </router-link>
        <ul class="navbar-nav text-white mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to=" { name: 'welcome'}">
              HOME
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to=" { name: 'characters'}">
              CHARACTERS
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to=" { name: 'comics'}">
              COMICS
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to=" { name: 'events'}">
              EVENTS
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to=" { name: 'contact'}">
              CONTACT
            </router-link>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
  <p class="px-5 py-4 text-secondary" style="margin-left: 32px;">
    <ion-icon name="home" ></ion-icon>
    Home
  </p>
</template>

<script setup>
defineProps({
  
})
</script>

<style scoped>

</style>
