<template>
  <form id="contact-form">
    <div class="row">
      <div class="mb-3 col-lg-7 col-12" style="padding: 0 78px">
        <label for="name" class="form-label">Name</label>
        <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Ex.: Your full name">
        <div v-if="v$.form.name.$error" style="color: #EC1D24;">Invalid name</div>
      </div>
      <div class="mb-3 col-lg-7 col-12" style="padding: 0 78px">
        <label for="email" class="form-label">Email</label>
        <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Ex.: myemail@email.com">
        <div v-if="v$.form.email.$error" style="color: #EC1D24;">Invalid Email</div>
        <div v-if="!v$.form.email.email" style="color: #EC1D24;">Invalid email format.</div>
      </div>
      <div class="mb-3 col-lg-7 col-12" style="padding: 0 78px">
        <label for="phone" class="form-label">Phone</label>
        <input v-model="form.phone" type="tel" class="form-control" id="phone" placeholder="Ex.: (99) 9 9999-9999">
        <div v-if="v$.form.phone.$error" style="color: #EC1D24;">Invalid phone number</div>
        <div v-if="!v$.form.phone.validPhone" style="color: #EC1D24;">Invalid phone format (Ex.: (99) 9 9999-9999).</div>
      </div>
      <div class="mb-3 col-lg-7 col-12" style="padding: 0 78px">
        <label for="message" class="form-label">Message</label>
        <textarea v-model="form.message" class="form-control" id="message" rows="3" placeholder="Ex.: Contact message for Marvel"
          style="resize: none;">
        </textarea>
        <div v-if="v$.form.message.$error" style="color: #EC1D24;">Invalid name</div>
      </div>
      <div class="mb-3 col-lg-12 col-7" style="margin: 0 68px">
        <button @click="submit()" type="button" class="btn btn-danger" :disabled="isFormSubmitted || !isFormValid">Send</button>
      </div>

      <!-- Modal de mensagem de sucesso -->
      <div v-if="isFormSubmitted" class="modal d-block" id="successModal" tabindex="-1" aria-labelledby="successModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <p class="modal-title" id="successModalLabel">Message sent successfully!</p>
              <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Thank you, we'll reach you as soon as possible.</p>
            </div>
            
            <div class="modal-footer">
              <button class="btn btn-secondary" style="background-color: #EC1D24; border:none">Close</button>
            </div>
          </div>
        </div>
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
      phone: '',
      message: '',
    },
    isFormValid: false,
    isFormSubmitted: false,
  }),
  setup: () => ({ v$: useVuelidate() }),
  watch: {
    form: {
      deep: true,
      handler: function () {
        this.isFormValid = this.v$.form.$pending ? false : this.v$.form.$invalid ? false : true;
      },
    },
  },
  methods: {
    submit() {
      if (this.isFormValid) {        
        this.isFormSubmitted = true;
      }
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
            const phoneRegex = /^\(\d{2}\)\s\d\s\d{4}-\d{4}$|^\d{10}$|^\d{11}$/;
            return phoneRegex.test(value);
          }
        },
        message: { required },
      }
    }
  }
}

</script>

<style scoped>

</style>
