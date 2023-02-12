<template>
  <div>Register</div>

  <div v-if="error">{{ error }}</div>

  <form action="#" @submit.prevent="Register">

    <label for="name">Name</label>
    <div class="col-md-6">
      <input id="name" type="name" class="form-control" name="name" value required autofocus v-model="name"/>
    </div>


    <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
    <div class="col-md-6">
      <input id="email" type="email" class="form-control" name="email" value required autofocus v-model="email"/>
    </div>


    <label for="password">Password</label>
    <div class="col-md-6">
      <input id="password" type="password" class="form-control" name="password" required v-model="password"/>
    </div>


    <div class="form-group row mb-0">
      <div class="col-md-8 offset-md-4">
        <button type="submit" class="btn btn-primary">Register</button>
      </div>
    </div>

  </form>

</template>


<script>
import {ref} from 'vue'

export default {
  name: "RegisterComponent",
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const Register = async () => {
      try {
        await store.dispatch('register', {
          email: email.value,
          password: password.value,
          name: name.value
        })
      } catch (err) {
        error.value = err.message
      }
    }

    return {Register, name, email, password, error}
  }
};
</script>