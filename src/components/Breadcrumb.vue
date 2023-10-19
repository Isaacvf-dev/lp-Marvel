<template>
  <p class="px-5 py-4 text-secondary" style="margin-left: 32px;">
    <ion-icon name="home" class="pe-1" style="vertical-align: middle;" ></ion-icon>
    <span style="vertical-align: middle;"> 
      {{ $route.name === 'chardetail' ? path : $route.name}} 
    </span>
  </p>
  
</template>

<script>


export default {
  data() {
    
    return {      
      
    }
  },
  props: {
    path: String
  }  
}
</script>

<style scoped>

</style>
