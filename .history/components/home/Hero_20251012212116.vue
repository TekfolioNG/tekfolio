<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Slides wrapper -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <transition-group name="fade" tag="div" class="h-full">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
          class="absolute inset-0 w-screen h-full">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover object-top scale-x-[-1]"
            style="filter: contrast(1.1) brightness(1.05) saturate(1.1);" />
          <!-- Slight overlay for better contrast -->
          <div class="absolute inset-0 bg-black/20"></div>

          <!-- Navigation arrows on image (only show on hover) -->
          <div
            class="absolute inset-0 flex items-center justify-between px-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <!-- Previous arrow -->
            <button @click="previousSlide"
              class="w-12 h-12 flex items-center justify-center text-white hover:text-[#00D4FF] transition-colors duration-300 rounded-full bg-black/30 backdrop-blur-sm"
              aria-label="Previous slide">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <!-- Next arrow -->
            <button @click="nextSlide"
              class="w-12 h-12 flex items-center justify-center text-white hover:text-[#00D4FF] transition-colors duration-300 rounded-full bg-black/30 backdrop-blur-sm"
              aria-label="Next slide">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </transition-group>
    </div>

    <!-- Discover Services button overlay -->
    <div class="absolute top-0 left-0 right-0 z-30 flex justify-center pt-28 md:pt-32">
      <transition name="button-slide" mode="out-in">
        <NuxtLink key="services-button" to="/services"
          class="group px-8 py-3 text-white font-semibold transition-all duration-300 text-lg transform hover:scale-105 inline-flex items-center gap-2 discover-btn"
          style="background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px);">
          DISCOVER OUR SERVICES
          <!-- Chevron arrow - only visible on hover -->
          <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </transition>
    </div>

    <!-- Dot indicators positioned above panel -->
    <div class="absolute bottom-44 left-0 right-0 z-30 flex justify-center">
      <div class="flex gap-2">
        <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentSlide === index ? 'bg-[#00D4FF]' : 'bg-white/40 hover:bg-white/60'"
          :aria-label="`Go to slide ${index + 1}`">
        </button>
      </div>
    </div>

    <!-- Content panel at bottom -->
    <div class="absolute bottom-0 left-0 right-0 z-20 transition-all duration-600 content-panel bg-[#00D4FF]/80"
      style="backdrop-filter: blur(4px);">
      <div class="container mx-auto px-4 py-4 text-center">
        <transition name="content-slide" mode="out-in">
          <div :key="'content-' + currentSlide">
            <!-- Rotating Service Areas -->
            <h3 class="text-gray-900 text-xl md:text-2xl font-bold tracking-wider uppercase mb-1">
              {{ slides[currentSlide].service }}
            </h3>
            <!-- Main heading -->
            <h2 class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-5xl mx-auto"
              style="letter-spacing: 0.5px;">
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

const SLIDE_DURATION = 8000; // 8 seconds per slide

const slides = [
  {
    image: '/assets/img/elevation-hero3.jpg',
    alt: 'Elevation Consulting',
    service: 'Consulting',
    title: 'Elevating Enterprises, Empowering Growth'
  },
  {
    image: '/assets/img/elevation-hero3.jpg',
    alt: 'Advisory Services',
    service: 'Advisory',
    title: 'Strategic Guidance for Sustainable Success'
  },
  {
    image: '/assets/img/elevation-hero3.jpg',
    alt: 'Training Services',
    service: 'Training',
    title: 'Building Capacity, Driving Excellence'
  },
  {
    image: '/assets/img/elevation-hero3.jpg',
    alt: 'Business Development',
    service: 'Business Development',
    title: 'Practical Strategies for Measurable Results'
  }
];

const currentSlide = ref(0);
let timer = null;

const setSlide = (index) => {
  currentSlide.value = index;
  resetTimer();
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
  resetTimer();
};

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1;
  resetTimer();
};

const resetTimer = () => {
  if (timer) {
    clearInterval(timer);
  }

  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  }, SLIDE_DURATION);
};

onMounted(() => {
  resetTimer();
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
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
  transform: translateY(20px);
}

.button-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
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
  h2 {
    font-size: 1.5rem;
  }
}

/* Ensure optimal text sizing on larger screens */
@media (min-width: 768px) {
  h2 {
    white-space: normal;
  }
}
</style>