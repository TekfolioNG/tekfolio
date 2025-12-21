<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="/assets/img/elevation-hero3.jpg" alt="Elevation Consulting"
        class="w-full h-full object-cover object-top scale-x-[-1]"
        style="filter: contrast(1.1) brightness(1.05) saturate(1.1);" />
      <!-- Overlay for better contrast -->
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Content Container -->
    <div class="absolute inset-0 z-10 flex items-center">
      <div class="container mx-auto px-4 md:px-8 lg:px-12">
        <div class="flex justify-center md:justify-start">
          <!-- Text Content -->
          <div class="text-center md:text-left max-w-3xl">
            <!-- Hero Heading -->
            <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elevating Enterprises<br />
              Empowering Growth
            </h1>

            <!-- Rotating Service Areas -->
            <div class="h-16 mb-6 flex justify-center md:justify-start">
              <transition name="fade-service" mode="out-in">
                <p :key="currentService" class="text-[#00D4FF] text-2xl md:text-3xl lg:text-4xl font-bold">
                  {{ services[currentService] }}
                </p>
              </transition>
            </div>

            <!-- Description -->
            <p class="text-white text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0"
              style="text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              Elevation Consulting supports organizations and entrepreneurs in building stronger,
              more sustainable businesses. Through practical strategies, advisory services, and
              capacity development, we help clients achieve measurable results and long-term impact.
            </p>

            <!-- CTA Button -->
            <div class="flex justify-center md:justify-start">
              <NuxtLink to="/services"
                class="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E6] text-gray-900 font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Discover Our Services
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const ROTATION_DURATION = 3000; // 3 seconds per service

const services = [
  'Consulting',
  'Advisory',
  'Training',
  'Business Development'
];

const currentService = ref(0);
let timer = null;

const rotateServices = () => {
  timer = setInterval(() => {
    currentService.value = (currentService.value + 1) % services.length;
  }, ROTATION_DURATION);
};

onMounted(() => {
  rotateServices();
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
/* Service rotation fade transition - slides from bottom */
.fade-service-enter-active,
.fade-service-leave-active {
  transition: all 0.7s ease-in-out;
}

.fade-service-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-service-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Ensure full width */
.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Add subtle text shadow for better readability */
h1 {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

/* Service text with glow effect */
.text-\[#00D4FF\] {
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5), 0 2px 8px rgba(0, 0, 0, 0.4);
}

/* Mobile responsive adjustments */
@media (max-width: 767px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h1 {
    font-size: 2rem;
    line-height: 1.2;
  }

  .h-16 {
    height: 4rem;
  }

  .text-\[#00D4FF\] {
    font-size: 1.5rem;
  }
}

/* Tablet adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
  h1 {
    font-size: 2.5rem;
  }

  .text-\[#00D4FF\] {
    font-size: 2rem;
  }
}

/* Large screen adjustments */
@media (min-width: 1024px) {
  .max-w-3xl {
    max-width: 48rem;
  }
}

/* Smooth entrance animation for content */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1,
p,
.flex {
  animation: fadeInUp 0.8s ease-out forwards;
}

h1 {
  animation-delay: 0.2s;
}

.h-16 {
  animation-delay: 0.4s;
}

p {
  animation-delay: 0.6s;
}

.flex:last-child {
  animation-delay: 0.8s;
}
</style>