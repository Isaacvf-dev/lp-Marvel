<template>
  <form id="contact-form">
    <div class="row">
      <div class="mb-3 col-7" style="padding: 0 78px">
        <label for="name" class="form-label">Name</label>
        <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Ex.: Your full name">
        <div v-if="v$.form.name.$error" style="color: #EC1D24;">Invalid name</div>
      </div>
      <div class="mb-3 col-7" style="padding: 0 78px">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Ex.: myemail@email.com">
        <div v-if="!v$.form.email.$error" style="color: #EC1D24;">Email is required.</div>
        <div v-if="!v$.form.email.email" style="color: #EC1D24;">Invalid email format.</div>
      </div>
      <div class="mb-3 col-7" style="padding: 0 78px">
        <label for="phone" class="form-label">Phone</label>
        <input type="tel" class="form-control" id="phone" placeholder="Ex.: (99) 9 9999-9999">
        <div v-if="!v$.form.phone.$error" style="color: #EC1D24;">Phone is required.</div>
        <div v-if="!v$.form.phone.validPhone" style="color: #EC1D24;">Invalid phone format (Ex.: (99) 9 9999-9999).</div>
      </div>
      <div class="mb-3 col-7" style="padding: 0 78px">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="3" placeholder="Ex.: Contact message for Marvel"
          style="resize: none;"></textarea>
      </div>
      <div class="mb-3 col-7" style="margin: 0 68px">
        <button @click="submit()" type="button" class="btn btn-secondary">Send</button>
      </div>

    </div>
  </form>
</template>

<script>
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
  name: 'UsersPage',
  data: () => ({
    form: {
      name: '',
      email: '',
      phone: ''
    }
  }),
  setup: () => ({ v$: useVuelidate() }),
  methods: {
    async submit () {
      const result = await this.v$.$validate()
      console.log(result)
      if (!result) {
        // notify user form is invalid
        return false
      }
      // perform async actions
    }
  },
  validations() {
    return {
      form: {
        name: { required },
        email: { required, email },
        phone: {
          required,         
          validPhone: (value) => {          
          const phoneRegex = /^\(\d{2}\)\s\d\s\d{4}-\d{4}$/;
          return phoneRegex.test(value);
        }
        }
      }
    }
  }
}

</script>

<style scoped lang="scss"></style>
