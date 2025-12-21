<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="/assets/img/elevation-hero3.jpg" alt="Elevation Consulting"
        class="w-full h-full object-cover object-center" />
      <!-- Overlay for better text readability -->
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Content Container -->
    <div class="absolute inset-0 z-10 flex items-center">
      <div class="container mx-auto px-4 md:px-8 lg:px-12">
        <div class="flex justify-center md:justify-end">
          <!-- Text Content Box -->
          <div class="text-center md:text-right max-w-2xl">
            <!-- Hero Heading -->
            <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elevating Enterprises<br />
              Empowering Growth.
            </h1>

            <!-- Rotating Service Areas -->
            <div class="h-12 mb-6 flex justify-center md:justify-end">
              <transition name="fade-service" mode="out-in">
                <p :key="currentService" class="text-[#00D4FF] text-2xl md:text-3xl font-semibold">
                  {{ services[currentService] }}
                </p>
              </transition>
            </div>

            <!-- Description -->
            <p class="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 md:ml-auto">
              Elevation Consulting supports organizations and entrepreneurs in building stronger,
              more sustainable businesses. Through practical strategies, advisory services, and
              capacity development, we help clients achieve measurable results and long-term impact.
            </p>

            <!-- CTA Button -->
            <div class="flex justify-center md:justify-end">
              <NuxtLink to="/services"
                class="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E6] text-gray-900 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Discover Our Services
                <!-- Chevron arrow -->
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
/* Service rotation fade transition */
.fade-service-enter-active,
.fade-service-leave-active {
  transition: all 0.6s ease-in-out;
}

.fade-service-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-service-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Ensure full width */
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

  /* Center content on mobile */
  h1 {
    font-size: 2rem;
  }

  .h-12 {
    height: 3rem;
  }
}

/* Tablet adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
  h1 {
    font-size: 2.5rem;
  }
}

/* Large screen adjustments */
@media (min-width: 1024px) {
  .max-w-2xl {
    max-width: 42rem;
  }
}
</style>