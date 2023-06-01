<template>
  <div>
    <h1>Home</h1>
    <h2>Welcome {{ userData }}!!</h2>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'

  const { userData } = useUserStore()
  console.log(userData)
</script>