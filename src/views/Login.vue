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
    </div>
    <div class="card-action">
        <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
            Войти
            <i class="material-icons right">send</i>
        </button>
        </div>

        <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
        </p>
    </div>
    </form>
</template>

<script>
import {required, email, minLength} from 'vuelidate/lib/validators'
import messages from '@/utils/messages'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    validations: {
        email: {email, required},
        password: {required, minLength: minLength(6)}
    },
    mounted() {
        if(messages[this.$route.query.message]) {

            this.$message(messages[this.$route.query.message])
        }
        
    },
    methods: {
        formSubmit() {
            if(this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            const formData = {
                email: this.email,
                password: this.password
            }
            console.log(formData)
            this.$router.push('/')
        }
    }
}
</script>
