<template>
  <div>
    <h1>Login with: {{ userData }}</h1>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useUserStore } from '../stores/user'

  const { userData } = useUserStore()
</script>