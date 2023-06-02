<template>
  <div>
    <header class="header page-width">
      <div 
        class="header__drawer" 
        @click="(evt) => toggleDrawer(evt.target)" 
        :open="openDrawer"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="header__logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
      </div>
      <h1 class="header__title">Pokepedia</h1>
    </header>
    <div class="header__nav-close" @click="closeDrawer" v-if="openDrawer"></div>
    <nav class="nav header__nav" :open="openDrawer">
      <div class="nav__heading">
        <h2 class="nav__title">Menu</h2>
        <div class="nav__close" @click="closeDrawer">
          <svg xmlns="http://www.w3.org/2000/svg" width="22.627" height="22.627" viewBox="0 0 22.627 22.627">
            <g id="icon-close" transform="translate(-609.526 -1640.488) rotate(45)">
              <line id="Línea_28" data-name="Línea 28" x1="30" transform="translate(1592 729)" fill="none" stroke="#000" stroke-width="2"/>
              <line id="Línea_29" data-name="Línea 29" x1="30" transform="translate(1607 714) rotate(90)" fill="none" stroke="#000" stroke-width="2"/>
            </g>
          </svg>
        </div>
      </div>
      <ul class="nav__links">
        <li class="hover-underline" v-if="userStore.isLogged"><router-link to="/">Home</router-link></li>
        <li class="hover-underline" v-if="!userStore.isLogged"><router-link to="/login">Login</router-link></li>
        <li class="hover-underline" v-if="!userStore.isLogged"><router-link to="/register">Register</router-link></li>
      </ul>
      <div class="nav__logout">
        <button @click="userStore.logoutUser()">Logout</button>
      </div>
    </nav>
    <div class="page-width">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useUserStore } from './stores/user'

  const userStore = useUserStore()
  const openDrawer = ref(false)

  const toggleDrawer = (e) => {
    const elem = e.closest('.header__drawer')
    if(elem.getAttribute('open') === 'false') {
      openDrawer.value = true
      return
    }
    openDrawer.value = false
  }
  const closeDrawer = () => {
    openDrawer.value = !openDrawer.value
  }
</script>

<style lang="scss" scoped>
  .header {
    margin: 0;
    display: grid;
    grid-template-columns: minmax(3rem, .2fr) 1fr minmax(2rem, .2fr);
    justify-content: space-between;
    align-items: center;
    gap: 0 1rem;
    height: 7rem;

    &__drawer {
      width: 1.9rem;
      height: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      > div {
        width: 100%;
        height: .2rem;
        background: black;
        border-radius: 1rem;
        transform-origin: left;
        opacity: 1;
        transition: all 300ms ease-in-out;
      }
      &[open="true"],
      &:hover {
        div:first-child {
          rotate: 45deg;
        }
        div:nth-child(2) {
          opacity: 0;
        }
        div:last-child {
          rotate: -45deg;
        }
      }
    }
    &__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 5rem;
      }
    }
    &__title {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-family: MontserratMedium;
    }
    &__nav-close {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba($color: #000000, $alpha: .6);
      z-index: 4;
      filter: brightness(.5);
    }
    &__nav {
      position: fixed;
      top: 0;
      left: -150%;
      height: 100vh;
      width: 100%;
      max-width: 42rem;
      transition: left 400ms cubic-bezier(0.46, 0.31, 0.1, 1);
      z-index: 5;
      background: white;
      box-shadow: .8rem .1rem 1.6rem -.7rem rgba(0,0,0,0.52);
      -webkit-box-shadow: .8rem .1rem 1.6rem -.7rem rgba(0,0,0,0.52);
      -moz-box-shadow: .8rem .1rem 1.6rem -.7rem rgba(0,0,0,0.52);

      &[open="true"] {
        left: 0;
      }
    } 
  }
  .nav {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 0;

    &__heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0 1rem;
      padding: 2rem 2.5rem;
      border-bottom: .1rem solid #ECECEC;
    }
    &__close {
      width: 2.3rem;
      height: 1.8rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      svg {
        transform-origin: center;
        transition: rotate 500ms ease;
      }

      &:hover {
        svg {
          rotate: 180deg;
        }
      }
    }
    &__title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 2.8rem;
      font-family: MontserratBold;
    }
    &__links {
      padding: 2rem 2.5rem;
      list-style: none;
      font-family: MontserratRegular;

      > li {
        font-size: 2rem;
        margin-bottom: 1rem;
        padding: .5rem 0;
        width: fit-content;
      }
    }
    &__logout {
      border-top: .1rem solid #ECECEC;
      padding: 2rem 2.5rem;
      button {
        border: none;
        background: transparent;
        font-size: 2rem;
        font-family: MontserratMedium;
        cursor: pointer;
      }
    }
  }
</style>

