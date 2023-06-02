<template>
  <div class="login-register-container">
    <div class="wrapper">
      <h1 class="title">LOGIN</h1>
      <form @submit.prevent="handleSubmit">
        <div class="fields">
          <div class="field">
            <label class="field__label" for="email">EMAIL</label>
            <input class="field__input" type="email" id="email" v-model.trim="email">
          </div>
          <div class="field">
            <label class="field__label" for="email">PASSWORD</label>
            <input class="field__input" type="password" id="password" v-model.trim="password">
          </div>
          <div class="field field--error" v-if="!requiredFields">
            <svg class="field__svg" xmlns="http://www.w3.org/2000/svg" width="22.627" height="22.627" viewBox="0 0 22.627 22.627">
              <g id="icon-close" transform="translate(-609.526 -1640.488) rotate(45)">
                <line id="Línea_28" data-name="Línea 28" x1="30" transform="translate(1592 729)" fill="none" stroke="#000" stroke-width="2"/>
                <line id="Línea_29" data-name="Línea 29" x1="30" transform="translate(1607 714) rotate(90)" fill="none" stroke="#000" stroke-width="2"/>
              </g>
            </svg>
            <span class="field__error">THESE CREDENTIALS DO NOT MATCH OUR RECORDS</span>
          </div>
          <div class="field field--buttons">
            <button class="field__button field__button--primary" type="submit" :disabled="userStore.loadingUser">LOGIN</button>
            <router-link to="/register">
              <button class="field__button field__button--secondary">
                REGISTER
              </button>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useUserStore } from '../stores/user'

  const userStore = useUserStore()
  const email = ref('')
  const password = ref('')
  const requiredFields = ref(true)

  const handleSubmit = async () => {
    requiredFields.value = !email.value || password.value.length < 6 ? false : true
    if(!requiredFields.value) return
    await userStore.loginUser(email.value, password.value)
  }
</script>

<style lang="scss" scoped>
  .title {
    font-family: MontserratBold;
    font-size: 4rem;
    letter-spacing: 0;
    line-height: 3.9rem;
  }
  .wrapper {
    max-width: 44rem;
    margin: auto;
    height: calc(100vh - 13rem);
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    place-content: center;
    gap: 4rem 0;
  }
</style>