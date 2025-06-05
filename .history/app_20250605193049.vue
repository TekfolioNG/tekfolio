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

