<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Slides wrapper -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <transition-group name="fade" tag="div" class="h-full">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
          class="absolute inset-0 w-screen h-full"
          :style="{ 'background-color': index % 2 === 0 ? 'rgba(254, 65, 53, 0.3)' : 'transparent' }">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover object-center" />
        </div>
      </transition-group>
    </div>

    <!-- Find Out More button overlay at top -->
    <div class="absolute top-0 left-0 right-0 z-30 flex justify-center pt-20 md:pt-24">
      <transition name="button-slide" mode="out-in">
        <NuxtLink :key="'button-' + currentSlide" :to="slides[currentSlide].buttonLink"
          class="px-8 py-3 text-white font-medium transition-all duration-300 text-lg transform hover:scale-105 inline-block"
          style="background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px);">
          FIND OUT MORE
        </NuxtLink>
      </transition>
    </div>

    <!-- Content panel at bottom - reduced height -->
    <div class="absolute bottom-0 left-0 right-0 z-20 bg-gray-900/80 backdrop-blur-sm">
      <div class="container mx-auto px-6 py-8 text-center"> <!-- Reduced padding -->
        <transition name="content-slide" mode="out-in">
          <div :key="'content-' + currentSlide">
            <!-- Category kicker - smaller and bold -->
            <h3 class="text-white/90 text-sm md:text-base font-bold tracking-wider uppercase mb-2">
              {{ slides[currentSlide].category }}
            </h3>
            <!-- Main heading - reduced size and light font -->
            <h2 class="text-white text-2xl md:text-3xl lg:text-4xl font-light leading-tight max-w-4xl mx-auto">
              {{ slides[currentSlide].title }}
            </h2>
          </div>
        </transition>
      </div>
    </div>

    <!-- Navigation controls - moved indicators up -->
    <div class="absolute bottom-24 left-0 right-0 z-30 flex justify-center items-center gap-6"> <!-- Moved up -->
      <!-- Previous arrow -->
      <button @click="previousSlide"
        class="w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300"
        aria-label="Previous slide">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <!-- Dot indicators -->
      <div class="flex gap-2">
        <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentSlide === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'"
          :aria-label="`Go to slide ${index + 1}`">
        </button>
      </div>

      <!-- Next arrow -->
      <button @click="nextSlide"
        class="w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300"
        aria-label="Next slide">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

// Import images with new paths
import engineeringImage from '~/assets/img/syntanium-home.jpg';
import oilGasImage from '~/assets/img/syntanium-home3.png';
import maintenanceImage from '~/assets/img/syntanium-home4.jpg';
import constructionImage from '~/assets/img/syntanium-home5.jpg';
import sustainabilityImage from '~/assets/img/syntanium-home6.jpg';

const SLIDE_DURATION = 8000; // 8 seconds per slide
const slides = [
  {
    image: engineeringImage,
    alt: 'Engineering Services',
    category: 'ENGINEERING',
    title: 'Precision in project management and equipment support',
    buttonLink: '/engineering'
  },
  {
    image: constructionImage,
    alt: 'Construction Services',
    category: 'CONSTRUCTION',
    title: 'Turnkey solutions for complex industrial installations',
    buttonLink: '/construction'
  },
  {
    image: maintenanceImage,
    alt: 'Maintenance Services',
    category: 'MAINTENANCE',
    title: 'Protecting assets with corrosion and integrity management',
    buttonLink: '/maintenance'
  },
  {
    image: oilGasImage,
    alt: 'Oil & Gas Services',
    category: 'OIL & GAS',
    title: 'Expertise across downstream, marine, and supply chain operations',
    buttonLink: '/oil-gas'
  },
  {
    image: sustainabilityImage,
    alt: 'Sustainability Services',
    category: 'SUSTAINABILITY',
    title: 'Driving progress with safety, quality, and responsibility',
    buttonLink: '/sustainability'
  }
]

const currentSlide = ref(0)
let timer = null

const setSlide = (index) => {
  currentSlide.value = index
  resetTimer()
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  resetTimer()
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
  resetTimer()
}

const resetTimer = () => {
  if (timer) {
    clearInterval(timer)
  }

  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, SLIDE_DURATION)
}

onMounted(() => {
  resetTimer()
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
/* Fade transition for slides */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Content slide transition */
.content-slide-enter-active,
.content-slide-leave-active {
  transition: all 0.6s ease-in-out;
}

.content-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.content-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Button slide transition */
.button-slide-enter-active,
.button-slide-leave-active {
  transition: all 0.6s ease-in-out;
}

.button-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.button-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
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
}
</style>