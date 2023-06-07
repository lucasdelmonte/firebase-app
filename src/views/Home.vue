<template>
  <main>
    <h1>Home</h1>
    <h2>Welcome {{ email }}!!</h2>
  </main>
</template>

<script setup>
  import { useUserStore } from '../stores/user'

  const userStore = useUserStore()

  const { email } = userStore.userData
</script>

<style lang="scss" scoped>
  main {
    height: calc(100vh - 13rem)
  }
</style>