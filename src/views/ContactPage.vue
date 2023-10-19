<template>
  <form id="contact-form">
    <div class="row">
      <div class="mb-3 col-7" style="padding: 0 78px">
        <label for="name" class="form-label">Name</label>
        <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Ex.: Your full name">
        <p v-for="(error, index) of v$.$errors" :key="index">
          <strong>{{ error.$validator }}</strong>
          <small> on property</small>
          <strong>{{ error.$property }}</strong>
          <small> says:</small>
          <strong>{{ error.$message }}</strong>
        </p>
      </div>
      <div class="mb-3 col-7" style="padding: 0 78px">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Ex.: myemail@email.com" required>
      </div>
      <div class="mb-3 col-7" style="padding: 0 78px">
        <label for="phone" class="form-label">Phone</label>
        <input type="number" class="form-control" id="phone" placeholder="Ex.: (99) 9 9999-9999" required>
      </div>
      <div class="mb-3 col-7" style="padding: 0 78px">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="3" placeholder="Ex.: Contact message for Marvel" required
          style="resize: none;"></textarea>
      </div>
      <div class="mb-3 col-7" style="margin: 0 68px">
        <button @click="submit()" type="submit" class="btn btn-secondary">Send</button>
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
      email: ''
    }
  }),
  setup: () => ({ v$: useVuelidate() }),
  methods: {
    async submit () {
      const result = await this.v$.$validate()
      console.log(result)
      if (!result) {
        // notify user form is invalid
        return
      }
      // perform async actions
    }
  },
  validations() {
    return {
      form: {
        name: { required },
        email: { required, email },

      }
    }
  }
}

</script>

<style scoped lang="scss"></style>
