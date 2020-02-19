<template>
<form class="card auth-card" @submit.prevent="formSubmit">
  <div class="card-content">
    <span class="card-title">Домашняя бухгалтерия</span>
    <div class="input-field">
      <input
        id="email"
        type="text"
        v-model.trim="email"
        :class="{ 'invalid': ($v.email.$dirty && $v.email.$invalid), valid: ($v.email.$dirty && !$v.email.$invalid)}"
      >
      <label for="email">Email</label>
      <small 
        class="helper-text invalid"
        v-if="$v.email.$dirty && $v.email.$invalid"
      >Неверный эмейл</small>
    </div>
    <div class="input-field">
      <input
        type="password"
        v-model.trim="password"
        :class="{invalid: ($v.password.$dirty && $v.password.$invalid), valid: ($v.password.$dirty && !$v.password.$invalid)}"
      >
      <label for="password">Пароль</label>
      <small 
        class="helper-text invalid"
        v-if="$v.password.$dirty && $v.password.$invalid"
      >Ваш пароль слишком короток</small>
    </div>
    <div class="input-field">
      <input
        id="name"
        type="text"
        v-model.trim="name"
        :class="{invalid: ($v.name.$dirty && $v.name.$invalid), valid: ($v.name.$dirty && !$v.name.$invalid)}"
      >
      <label for="name">Имя</label>
      <small 
        class="helper-text invalid"
        v-if="$v.name.$dirty && $v.name.$invalid"
      >Ваше имя слишком коротко</small>
    </div>
    <p>
      <label>
        <input type="checkbox" v-model="agree" />
        <span>С правилами согласен</span>
      </label>
    </p>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Зарегистрироваться
        <i class="material-icons right">send</i>
      </button>
    </div>
    <p class="center">
      Уже есть аккаунт?
      <router-link to="/login">Войти!</router-link>
    </p>
  </div>
</form>
</template>

<script>
import {required, email, minLength} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            email: '',
            password: '',
            name: '',
            agree: false
        }
    },
    validations: {
        email: {email, required},
        password: {required, minLength: minLength(6)},
        name: {required},
        // Если тру, вернуть тру ?
        agree: {checked: v => v}
    },
    methods: {
        formSubmit() {
            if(this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            const formData = {
                email: this.email,
                password: this.password,
                name: this.name
            }
            console.log(formData)
            this.$router.push('/')
        }
    }
}
</script>
