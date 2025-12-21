<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Single image with overlay -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <div class="absolute inset-0 w-screen h-full">
        <img src="/assets/img/elevation-hero3.jpg" alt="Elevation Consulting"
          class="w-full h-full object-cover scale-x-[-1]"
          style="filter: contrast(1.1) brightness(1.05) saturate(1.1);" />
        <!-- Dark overlay for better text readability -->
        <div class="absolute inset-0 bg-black/30"></div>
      </div>
    </div>

    <!-- Content positioned over the image -->
    <div class="absolute inset-0 z-10 flex flex-col justify-center items-center text-white px-4 md:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Main heading in two lines -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span class="block">Elevating Enterprises</span>
          <span class="block">Empowering Growth</span>
        </h1>

        <!-- Rotating subheadings -->
        <div class="h-12 md:h-14 mb-6 overflow-hidden relative">
          <transition-group name="slide-up" tag="div" class="h-full">
            <div v-for="(service, index) in services" :key="service" v-show="currentService === index"
              class="absolute w-full text-center text-xl md:text-2xl lg:text-3xl font-semibold"
              :style="{ color: brandColor }">
              {{ service }}
            </div>
          </transition-group>
        </div>

        <!-- Description text -->
        <p class="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          Elevation Consulting supports organizations and entrepreneurs in building stronger, more sustainable
          businesses. Through practical strategies, advisory services, and capacity development, we help clients achieve
          measurable results and long-term impact.
        </p>

        <!-- CTA Button -->
        <NuxtLink to="/services"
          class="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-md transition-all duration-300 hover:bg-gray-100 hover:scale-105">
          DISCOVER OUR SERVICES
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
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

const brandColor = '#00D4FF'; // Your brand color
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

.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Mobile responsive adjustments */
@media (max-width: 767px) {
  h1 {
    font-size: 2rem;
  }

  .h-12 {
    height: 3rem;
  }
}
</style>