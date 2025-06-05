<!-- app.vue -->
<template>
  <UApp>
    <!-- Loading Screen - shows during app initialization -->
    <AppLoading :show-text="true" loading-message="//smart, simple, secure solutions that work" :duration="3000" />

    <!-- Main App Content -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
// Import the loading component - FIXED PATH
import AppLoading from '~/components/landing/AppLoading.vue';

// Debug: Check if component loads
console.log('App.vue loaded, AppLoading component imported')

// Optional: Global meta tags for the entire app
useHead({
  title: 'Smart, simple, secure solutions that work',
  meta: [
    { name: 'description', content: 'Smart, simple, secure solutions that work' },
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>