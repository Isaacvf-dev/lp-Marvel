<template>
  <form id="contact-form">
    <div class="row">
      <div class="mb-3 col-7" style="padding: 0 78px">
        <label for="name" class="form-label" >Name</label>
        <input type="text" class="form-control" id="name" placeholder="Ex.: Your full name" required>
      </div>
      <div class="mb-3 col-7" style="padding: 0 78px">
        <label for="email" class="form-label" >Email</label>
        <input type="email" class="form-control" id="email" placeholder="Ex.: myemail@email.com" required>
      </div>
      <div class="mb-3 col-7" style="padding: 0 78px">
        <label for="phone" class="form-label" >Phone</label>
        <input type="number" class="form-control" id="phone" placeholder="Ex.: (99) 9 9999-9999" required>
      </div>
      <div class="mb-3 col-7" style="padding: 0 78px">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="3" placeholder="Ex.: Contact message for Marvel" required style="resize: none;"></textarea>
      </div>
      <div class="mb-3 col-7" style="margin: 0 68px">
        <button type="button" class="btn btn-secondary"  disabled>Send</button>
      </div>
      
    </div>
  </form>
  
</template>

<script setup>

</script>

<style scoped lang="scss">

</style>
