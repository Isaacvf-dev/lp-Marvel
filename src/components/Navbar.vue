<template>
  <nav class="navbar navbar-expand-lg px-lg-5" data-bs-theme="dark" style="background-color: #EC1D24; ">
    <div class="container-fluid" >
      <router-link class="navbar-brand me-auto" :to="{ name: 'Home'}">
        <img src="../assets/logo-navbar.svg" />
      </router-link>
      <!-- Botão de sanduíche para dispositivos móveis -->
      <button
        class="navbar-toggler ms-auto"        
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>    
            
      <div class="collapse navbar-collapse me-auto fs-5" id="navbarSupportedContent">
        
        <ul class="navbar-nav text-white mb-2 mb-lg-0 ms-auto">
          <li class="nav-item fw-bold">
            <router-link class="nav-link" :to=" { name: 'Home'}">
              HOME
            </router-link>
          </li>
          <li class="nav-item fw-bold">
            <router-link class="nav-link" :to=" { name: 'Characters'}">
              CHARACTERS
            </router-link>
          </li>
          <li class="nav-item fw-bold">
            <router-link class="nav-link" :to=" { name: 'Comics'}">
              COMICS
            </router-link>
          </li>
          <li class="nav-item fw-bold">
            <router-link class="nav-link" :to=" { name: 'Events'}">
              EVENTS
            </router-link>
          </li>
          <li class="nav-item fw-bold">
            <router-link class="nav-link" :to=" { name: 'Contact'}">
              CONTACT
            </router-link>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
 
</template>

<script>
export default {
  name: "NavBar",
  props: {
    heroName: String
  }
}
</script>

<style scoped>

</style>
