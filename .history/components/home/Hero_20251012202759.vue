<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <div class="absolute inset-0 w-screen h-full">
        <img src="~/assets/img/elevation-hero3.jpg" alt="Elevation Consulting"
          class="w-full h-full object-cover object-center scale-x-[-1] object-top"
          style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
      </div>
    </div>

    <!-- Content overlay -->
    <div class="absolute inset-0 z-20 flex items-center">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex justify-center md:justify-start">
          <div class="text-center md:text-left max-w-2xl">
            <!-- Hero text in two steps -->
            <div class="inline-block bg-black/30 backdrop-blur-sm px-6 py-4 rounded-lg mb-4">
              <h1 class="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span class="block">Elevating Enterprises</span>
                <span class="block">Empowering Growth.</span>
              </h1>
            </div>

            <!-- Rotating service areas -->
            <div class="my-4 md:my-6 h-10 md:h-12 flex items-center justify-center md:justify-start">
              <transition name="fade-rotate" mode="out-in">
                <div :key="currentService" class="text-white text-lg md:text-xl font-medium">
                  {{ currentService }}
                </div>
              </transition>
            </div>

            <!-- Description text -->
            <p class="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl">
              Elevation Consulting supports organizations and entrepreneurs in building stronger, more sustainable
              businesses. Through practical strategies, advisory services, and capacity development, we help clients
              achieve measurable results and long-term impact.
            </p>

            <!-- CTA Button -->
            <NuxtLink to="/services"
              class="inline-block px-6 py-3 md:px-8 md:py-4 bg-white text-gray-900 font-semibold text-base md:text-lg rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Discover Our Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

// Service areas to rotate through
const serviceAreas = ['Consulting', 'Advisory', 'Training', 'Business Development'];
const currentService = ref(serviceAreas[0]);
let serviceTimer = null;

const SERVICE_DURATION = 2000; // 2 seconds per service

const rotateService = () => {
  const currentIndex = serviceAreas.indexOf(currentService.value);
  const nextIndex = (currentIndex + 1) % serviceAreas.length;
  currentService.value = serviceAreas[nextIndex];
};

const resetServiceTimer = () => {
  if (serviceTimer) {
    clearInterval(serviceTimer);
  }

  serviceTimer = setInterval(rotateService, SERVICE_DURATION);
};

onMounted(() => {
  resetServiceTimer();
});

onBeforeUnmount(() => {
  if (serviceTimer) clearInterval(serviceTimer);
});
</script>

<style scoped>
/* Import Barlow font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

/* Apply Barlow font to elements */
.font-bold {
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
}

.font-medium {
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
}

.font-semibold {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
}

/* Service rotation transition */
.fade-rotate-enter-active,
.fade-rotate-leave-active {
  transition: all 0.5s ease;
}

.fade-rotate-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-rotate-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Ensure image displays properly */
img {
  max-width: none;
}
</style>