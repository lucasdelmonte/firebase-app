<template>
  <div class="login-register-container">
    <div class="wrapper">
      <h1 class="title">REGISTER</h1>
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
            <span class="field__error">ALL FIELDS ARE REQUIRED</span>
          </div>
          <button type="submit">REGISTER</button>
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

  const handleSubmit = () => {
    requiredFields.value = !email.value || !password.value.length < 6 ? false : true

    userStore.registerUser(email.value, password.value)
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
    height: calc(100vh - 7rem);

    display: grid;
    grid-template-columns: 1fr;
    place-content: center;
    gap: 4rem 0;
  }
  .fields {
    display: flex;
    flex-direction: column;
    gap: 1.8rem 0;

    .field {
      display: grid;
      grid-template-columns: 1fr;

      &--error {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0 1rem;
      }
      &__label {
        font-family: MontserratBold;
        font-size: 1.4rem;
        letter-spacing: .14rem;
        line-height: 1.8rem;
        margin-bottom: .4rem;
      }
      &__input {
        font-family: MontserratRegular;
        font-size: 1.6rem;
        letter-spacing: 0;
        line-height: 1.9rem;
        border: .1rem solid #C7C2C0;
        padding: 1.4rem 1.1rem;
      }
      &__input:focus {
        border: .1rem solid #000000;
      }
      &__input:focus-visible {
        outline: 0;
      }
      &__svg {
        width: 1rem;
      }
      &__error {
        font-family: MontserratMedium;
        font-size: 1.2rem;
        letter-spacing: .06rem;
      }
    }
    button[type="submit"] {
      width: 100%;
      max-width: 19rem;
      color: #FFFFFF;
      padding: 1.7rem 0;
      border: none;
      font-family: MontserratBold;
      font-size: 1.4rem;
      letter-spacing: .14rem;
      line-height: 1.8rem;
      margin-bottom: .4rem;
      background: #000000;
      cursor: pointer;
    } 
  }
</style>