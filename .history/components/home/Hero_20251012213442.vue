<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Single image with overlay -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <div class="absolute inset-0 w-screen h-full">
        <img src="/assets/img/elevation-hero3.jpg" alt="Elevation Consulting"
          class="w-full h-full object-cover scale-x-[-1]"
          style="filter: contrast(1.1) brightness(1.05) saturate(1.1);" />
        <!-- Slight overlay for better contrast -->
        <div class="absolute inset-0 bg-black/20"></div>
      </div>
    </div>

    <!-- Discover Services button overlay -->
    <div class="absolute top-0 left-0 right-0 z-30 flex justify-center pt-28 md:pt-32">
      <NuxtLink to="/services"
        class="group px-8 py-3 text-white font-semibold transition-all duration-300 text-lg transform hover:scale-105 inline-flex items-center gap-2 discover-btn"
        style="background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px);">
        DISCOVER OUR SERVICES
        <!-- Chevron arrow - only visible on hover -->
        <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none"
          stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </NuxtLink>
    </div>

    <!-- Content panel at bottom -->
    <div class="absolute bottom-0 left-0 right-0 z-20 transition-all duration-600 content-panel bg-[#00D4FF]/80"
      style="backdrop-filter: blur(4px);">
      <div class="container mx-auto px-4 py-6">
        <!-- Main heading in two lines -->
        <h2 class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center mb-4"
          style="letter-spacing: 0.5px;">
          <span class="block">Elevating Enterprises</span>
          <span class="block">Empowering Growth</span>
        </h2>

        <!-- Rotating Service Areas -->
        <div class="h-8 mb-3 overflow-hidden relative flex justify-center">
          <transition-group name="slide-up" tag="div" class="h-full">
            <h3 v-for="(service, index) in services" :key="service" v-show="currentService === index"
              class="absolute text-gray-900 text-xl md:text-2xl font-bold tracking-wider uppercase"
              :style="{ color: currentService === index ? '#1f2937' : 'transparent' }">
              {{ service }}
            </h3>
          </transition-group>
        </div>

        <!-- Description text -->
        <p class="text-gray-900 text-center text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Elevation Consulting supports organizations and entrepreneurs in building stronger, more sustainable
          businesses. Through practical strategies, advisory services, and capacity development, we help clients achieve
          measurable results and long-term impact.
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const SERVICE_DURATION = 3000; // 3 seconds per service

const services = [
  'Consulting',
  'Advisory',
  'Training',
  'Business Development'
];

const currentService = ref(0);
let timer = null;

const nextService = () => {
  currentService.value = (currentService.value + 1) % services.length;
};

const resetTimer = () => {
  if (timer) {
    clearInterval(timer);
  }

  timer = setInterval(() => {
    nextService();
  }, SERVICE_DURATION);
};

onMounted(() => {
  resetTimer();
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
/* Slide up transition for services */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.8s ease-in-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

/* Hover effect for Discover button */
.discover-btn:hover {
  background-color: #00D4FF !important;
  color: #1f2937 !important;
}

/* Content panel height */
.content-panel {
  height: auto;
  min-height: 200px;
}

.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Mobile responsive adjustments */
@media (max-width: 767px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Adjust content panel for mobile */
  .content-panel {
    min-height: 180px;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.125rem;
  }

  p {
    font-size: 0.875rem;
  }
}

/* Ensure optimal text sizing on larger screens */
@media (min-width: 768px) {
  h2 {
    white-space: normal;
  }

  .content-panel {
    min-height: 220px;
  }
}
</style>