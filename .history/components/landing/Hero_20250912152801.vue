<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Slides wrapper -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <transition-group name="fade" tag="div" class="h-full">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
          class="absolute inset-0 w-screen h-full">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover object-center" />

          <!-- Navigation arrows on image (only show on hover) -->
          <div
            class="absolute inset-0 flex items-center justify-between px-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <!-- Previous arrow -->
            <button @click="previousSlide"
              class="w-12 h-12 flex items-center justify-center text-white hover:text-white transition-colors duration-300 rounded-full bg-black/30 backdrop-blur-sm"
              aria-label="Previous slide">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <!-- Next arrow -->
            <button @click="nextSlide"
              class="w-12 h-12 flex items-center justify-center text-white hover:text-white transition-colors duration-300 rounded-full bg-black/30 backdrop-blur-sm"
              aria-label="Next slide">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </transition-group>
    </div>

    <!-- Find Out More button overlay -->
    <div class="absolute top-0 left-0 right-0 z-30 flex justify-center pt-28 md:pt-32">
      <transition name="button-slide" mode="out-in">
        <NuxtLink :key="'button-' + currentSlide" :to="slides[currentSlide].buttonLink"
          class="group px-8 py-3 text-white font-regular transition-all duration-300 text-lg transform hover:scale-105 inline-flex items-center gap-2 find-out-more-btn"
          style="background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px);">
          FIND OUT MORE
          <!-- Chevron arrow - only visible on hover -->
          <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </transition>
    </div>

    <!-- Dot indicators positioned above panel - moved up -->
    <div class="absolute bottom-44 left-0 right-0 z-30 flex justify-center">
      <div class="flex gap-2">
        <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentSlide === index ? 'bg-white dark:bg-gray-200' : 'bg-white/40 hover:bg-white/60 dark:bg-gray-200/40 dark:hover:bg-gray-200/60'"
          :aria-label="`Go to slide ${index + 1}`">
        </button>
      </div>
    </div>

    <!-- Content panel at bottom with reduced height -->
    <div class="absolute bottom-0 left-0 right-0 z-20 transition-all duration-600 content-panel"
      :class="currentSlide % 2 === 0 ? 'bg-gray-900/70 dark:bg-gray-800/70' : 'bg-red-600/70 dark:bg-red-700/70'"
      style="backdrop-filter: blur(4px);">
      <div class="container mx-auto px-4 py-4 text-center">
        <transition name="content-slide" mode="out-in">
          <div :key="'content-' + currentSlide">
            <!-- Category kicker -->
            <h3 class="text-white/90 dark:text-gray-100/90 text-lg md:text-xl font-extrabold tracking-wider uppercase">
              {{ slides[currentSlide].category }}
            </h3>
            <!-- Main heading -->
            <h2
              class="text-white dark:text-gray-100 text-3xl md:text-4xl lg:text-5xl font-thin leading-tight max-w-5xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis"
              style="font-stretch: ultra-condensed; letter-spacing: 0.5px; opacity: 0.95;">
              {{ slides[currentSlide].title }}
            </h2>
          </div>
        </transition>
      </div>
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
    title: 'Smarter projects, stronger outcomes',
    buttonLink: '/engineering'
  },
  {
    image: constructionImage,
    alt: 'Construction Services',
    category: 'CONSTRUCTION',
    title: 'Turnkey builds, lasting impact',
    buttonLink: '/construction'
  },
  {
    image: maintenanceImage,
    alt: 'Maintenance Services',
    category: 'MAINTENANCE',
    title: 'Protecting assets, ensuring uptime',
    buttonLink: '/maintenance'
  },
  {
    image: oilGasImage,
    alt: 'Oil & Gas Services',
    category: 'OIL & GAS',
    title: 'Expertise across every operation',
    buttonLink: '/oil-gas'
  },
  {
    image: sustainabilityImage,
    alt: 'Sustainability Services',
    category: 'SUSTAINABILITY',
    title: 'Safety, quality, responsibility',
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
/* Import Barlow font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

/* Apply Barlow font to elements */
.font-thin {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-weight: 200;
}

.font-extrabold {
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
}

.font-regular {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
}

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
  transform: translateY(20px);
}

.button-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Hover effect for Find Out More button */
.find-out-more-btn:hover {
  background-color: #fe4135 !important;
}

/* Reduced height for content panel */
.content-panel {
  height: 140px;
  /* Reduced from previous height */
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

  /* Adjust content panel height for mobile */
  .content-panel {
    height: 140px;
  }

  /* Adjust dot navigation position for mobile */
  .absolute.bottom-44 {
    bottom: 150px;
  }

  /* Allow text wrapping on mobile if needed */
  .whitespace-nowrap {
    white-space: normal;
  }
}

/* Ensure single line text on larger screens */
@media (min-width: 768px) {
  .whitespace-nowrap {
    white-space: nowrap;
  }
}
</style>