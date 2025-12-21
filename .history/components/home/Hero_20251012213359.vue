<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Single background image -->
    <div class="absolute inset-0 w-screen h-full">
      <img src="/assets/img/elevation-hero3.jpg" alt="Elevation Consulting"
        class="w-full h-full object-cover object-center scale-x-[-1]"
        style="filter: contrast(1.1) brightness(1.05) saturate(1.1);" />
      <!-- Overlay for better contrast -->
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <!-- Content on image - Heading and Description -->
    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pb-40">
      <div class="text-center max-w-4xl">
        <!-- Main heading with staggered animation -->
        <div class="mb-8 overflow-hidden">
          <h1 class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span class="block animate-slide-up-1">Elevating Enterprises</span>
            <span class="block animate-slide-up-2">Empowering Growth</span>
          </h1>
        </div>

        <!-- Description text on image -->
        <div class="animate-fade-in-delayed">
          <p class="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Elevation Consulting supports organizations and entrepreneurs in building stronger,
            more sustainable businesses. Through practical strategies, advisory services, and
            capacity development, we help clients achieve measurable results and long-term impact.
          </p>
        </div>
      </div>
    </div>

    <!-- Discover Services button overlay -->
    <div class="absolute top-0 left-0 right-0 z-30 flex justify-center pt-28 md:pt-32">
      <NuxtLink to="/services"
        class="group px-8 py-3 text-white font-semibold transition-all duration-300 text-lg transform hover:scale-105 inline-flex items-center gap-2 discover-btn"
        style="background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px);">
        DISCOVER OUR SERVICES
        <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none"
          stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </NuxtLink>
    </div>

    <!-- Content panel at bottom with rotating service -->
    <div class="absolute bottom-0 left-0 right-0 z-20 transition-all duration-600 content-panel bg-[#00D4FF]/90"
      style="backdrop-filter: blur(4px);">
      <div class="container mx-auto px-4 py-6 text-center flex items-center justify-center h-full">
        <transition name="service-slide" mode="out-in">
          <div :key="currentService" class="w-full">
            <!-- Rotating Service Areas -->
            <h2 class="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase">
              {{ services[currentService] }}
            </h2>
          </div>
        </transition>
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

/* Service slide transition for bottom panel */
.service-slide-enter-active,
.service-slide-leave-active {
  transition: all 0.6s ease-in-out;
}

.service-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.service-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Hover effect for Discover button */
.discover-btn:hover {
  background-color: #00D4FF !important;
  color: #1f2937 !important;
}

/* Content panel height */
.content-panel {
  height: 140px;
}

/* Ensure text is always readable */
h1,
p {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

/* Mobile responsive adjustments */
@media (max-width: 640px) {
  h1 {
    font-size: 2rem;
    line-height: 1.2;
  }

  .content-panel h2 {
    font-size: 1.75rem;
  }

  p {
    font-size: 0.95rem;
  }

  .content-panel {
    height: 120px;
  }
}

@media (max-width: 768px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 768px) {
  h2 {
    white-space: normal;
  }
}
</style>