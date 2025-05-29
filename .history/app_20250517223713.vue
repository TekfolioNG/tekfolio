<template>
  <UApp>
    <AppLoading />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
// This registers GSAP plugins globally
import 'gsap/DrawSVGPlugin'
</script>