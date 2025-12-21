<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Single background image -->
    <div class="absolute inset-0 w-screen h-full">
      <img src="/assets/img/elevation-hero3.jpg" alt="Elevation Consulting"
        class="w-full h-full object-cover object-center scale-x-[-1]"
        style="filter: contrast(1.1) brightness(0.95) saturate(1.1);" />
      <!-- Dark overlay for better text contrast -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
    </div>

    <!-- Content overlay -->
    <div class="absolute inset-0 z-10 flex items-center justify-center">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <!-- Main heading with staggered animation -->
        <div class="mb-6 overflow-hidden">
          <h1 class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span class="block animate-slide-up-1">Elevating Enterprises</span>
            <span class="block animate-slide-up-2">Empowering Growth</span>
          </h1>
        </div>

        <!-- Rotating service areas -->
        <div class="mb-8 h-12 flex items-center justify-center">
          <transition name="service-fade" mode="out-in">
            <h2 :key="currentService"
              class="text-[#00D4FF] text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide uppercase">
              {{ services[currentService] }}
            </h2>
          </transition>
        </div>

        <!-- Description text -->
        <div class="animate-fade-in-delayed">
          <p class="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Elevation Consulting supports organizations and entrepreneurs in building stronger,
            more sustainable businesses. Through practical strategies, advisory services, and
            capacity development, we help clients achieve measurable results and long-term impact.
          </p>
        </div>

        <!-- CTA Button -->
        <div class="mt-10 animate-fade-in-delayed-more">
          <NuxtLink to="/services"
            class="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] text-gray-900 font-semibold text-lg rounded-sm transition-all duration-300 hover:bg-white hover:shadow-xl transform hover:scale-105">
            DISCOVER OUR SERVICES
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-slow">
      <div class="flex flex-col items-center gap-2 text-white/70">
        <span class="text-sm font-light tracking-wider">SCROLL</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
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

const rotateService = () => {
  timer = setInterval(() => {
    currentService.value = (currentService.value + 1) % services.length;
  }, SERVICE_DURATION);
};

onMounted(() => {
  rotateService();
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
/* Ensure full viewport width */
.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Staggered slide-up animations for heading */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up-1 {
  animation: slideUp 0.8s ease-out 0.2s both;
}

.animate-slide-up-2 {
  animation: slideUp 0.8s ease-out 0.5s both;
}

/* Fade in animation for description */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-delayed {
  animation: fadeIn 0.8s ease-out 1.2s both;
}

.animate-fade-in-delayed-more {
  animation: fadeIn 0.8s ease-out 1.6s both;
}

/* Service rotation transition */
.service-fade-enter-active,
.service-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.service-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.service-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Smooth bounce animation for scroll indicator */
@keyframes bounceSlow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }
}

.animate-bounce-slow {
  animation: bounceSlow 2s ease-in-out infinite;
}

/* Mobile responsive adjustments */
@media (max-width: 640px) {
  h1 {
    font-size: 2rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

/* Ensure text is always readable */
h1,
h2,
p {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>