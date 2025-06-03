<script setup>
import { computed, ref } from 'vue';

const colorMode = useColorMode();
const isScrolled = ref(false);
const isContactHovered = ref(false);
const isContactClicked = ref(false);

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light';
  }
});

// ... (keep your existing computed properties and methods)

const handleContactClick = () => {
  isContactClicked.value = true;
  setTimeout(() => {
    isContactClicked.value = false;
  }, 1000);
};
</script>

<template>
  <!-- ... (keep your existing template structure until the contact button) -->

  <!-- Updated Contact Button -->
  <div class="relative mr-6">
    <NuxtLink to="/contact" @click="handleContactClick" @mouseenter="isContactHovered = true"
      @mouseleave="isContactHovered = false"
      class="px-4 py-2 rounded-md text-sm lg:text-base font-medium whitespace-nowrap transition-all duration-500 relative overflow-hidden"
      :class="[
        isDark
          ? 'text-white border border-[#1d8ad8] hover:border-transparent'
          : 'bg-[#01348F] text-white border border-transparent'
      ]">
      <span class="relative z-10">CONTACT US</span>

      <!-- Animated Border Progress -->
      <div v-if="isContactHovered || isContactClicked" class="absolute inset-0 rounded-md overflow-hidden">
        <div class="absolute inset-0 border-2 border-transparent" :class="{
          'border-t-[#1d8ad8]': isContactHovered,
          'border-[#1d8ad8]': isContactClicked
        }" :style="{
          borderImage: isContactHovered
            ? `linear-gradient(90deg, #1d8ad8 ${isContactClicked ? 100 : 0}%, transparent 100%) 1`
            : 'none',
          transition: 'border-image 0.5s ease, border-color 0.3s ease',
          animation: isContactClicked
            ? 'fullBorder 1s forwards'
            : isContactHovered
              ? 'drawBorder 0.5s forwards'
              : 'none'
        }"></div>
      </div>
    </NuxtLink>
  </div>

  <!-- ... (rest of your template) -->
</template>

<style scoped>
/* ... (keep your existing styles) */

@keyframes drawBorder {
  0% {
    border-image: linear-gradient(90deg, #1d8ad8 0%, transparent 100%) 1;
  }

  100% {
    border-image: linear-gradient(90deg, #1d8ad8 100%, transparent 100%) 1;
  }
}

@keyframes fullBorder {
  0% {
    border-image: linear-gradient(90deg, #1d8ad8 0%, #1d8ad8 0%) 1;
  }

  25% {
    border-image: linear-gradient(90deg, #1d8ad8 100%, #1d8ad8 0%) 1;
  }

  50% {
    border-image: linear-gradient(180deg, #1d8ad8 100%, #1d8ad8 0%) 1;
  }

  75% {
    border-image: linear-gradient(270deg, #1d8ad8 100%, #1d8ad8 0%) 1;
  }

  100% {
    border-image: linear-gradient(360deg, #1d8ad8 100%, #1d8ad8 100%) 1;
  }
}

/* Mobile contrast */
@media (max-width: 767px) {
  .bg-gray-900\/90 a {
    color: #f3f4f6 !important;
  }

  .logo-mobile-desaturated {
    filter: saturate(0.5) brightness(1.95);
  }
}
</style>