<!-- LandingContainer.vue -->
<template>
  <div :class="[full ? 'w-full' : 'max-w-screen-xl mx-auto px-5']">
    <slot />
  </div>
</template>

<script setup>
defineProps({ full: Boolean })
</script>
