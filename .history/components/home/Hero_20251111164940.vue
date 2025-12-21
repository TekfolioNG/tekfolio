<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="/assets/img/paper-bg4.avif" alt="Navy Blue Paper Texture" class="w-full h-full object-cover object-top"
        style="filter: contrast(1.1) brightness(1.05) saturate(1.1);" />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Content Container -->
    <div class="absolute inset-0 z-10 flex items-center pt-16 md:pt-20">
      <div class="container mx-auto px-4 md:px-8 lg:px-12">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Text Content - Left Side -->
          <div class="text-center md:text-left max-w-xl mb-10 md:mb-0">
            <!-- Hero Headings with fade transition -->
            <div class="h-24 md:h-32 mb-4 flex flex-col justify-center">
              <transition name="fade-heading" mode="out-in">
                <h1 v-if="showFirstHeading" key="first"
                  class="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
                  We Transform Ideas Into Impact
                </h1>
                <h1 v-else key="second"
                  class="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
                  ...And Your Story Into Published Legacy
                </h1>
              </transition>
            </div>

            <!-- Description -->
            <p class="text-white text-sm md:text-lg leading-normal mb-6 font-medium drop-shadow">
              At Litera-Forge, we help businesses, leaders, and authors turn ideas into structured solutions through
              advisory, productivity training, ghostwriting, and publishing.
            </p>

            <!-- Stats -->
            <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <div class="text-center">
                <p class="text-[#B0E0E6] text-xl font-bold drop-shadow-md">80+</p>
                <p class="text-white text-sm drop-shadow">book projects</p>
              </div>
              <div class="text-center">
                <p class="text-[#B0E0E6] text-xl font-bold drop-shadow-md">70+</p>
                <p class="text-white text-sm drop-shadow">ghostwriting achievements</p>
              </div>
              <div class="text-center">
                <p class="text-[#B0E0E6] text-xl font-bold drop-shadow-md">500+</p>
                <p class="text-white text-sm drop-shadow">clarity sessions</p>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <NuxtLink to="/book-session"
                class="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#B0E0E6] hover:bg-[#00B8E6] text-gray-900 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Book a Clarity Session
                <!-- Chevron arrow -->
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>

              <NuxtLink to="/services"
                class="inline-flex items-center justify-center px-6 py-4 border-2 border-white text-white hover:bg-white/10 font-semibold text-lg rounded-lg transition-all duration-300">
                Explore Our Services
              </NuxtLink>
            </div>
          </div>

          <!-- Book Covers - Right Side -->
          <div class="w-full md:w-1/3 lg:w-1/2 relative h-64 md:h-96 overflow-hidden rounded-lg shadow-2xl">
            <div class="book-scroll-container" :style="{ animationDuration: scrollDuration + 'ms' }">
              <div class="book-scroll">
                <img v-for="(book, index) in books" :key="index" :src="book" :alt="'Book cover ' + (index + 1)"
                  class="book-cover" />
                <!-- Duplicate for seamless looping -->
                <img v-for="(book, index) in books" :key="index + 'duplicate'" :src="book"
                  :alt="'Book cover ' + (index + 1)" class="book-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const HEADING_ROTATION_DURATION = 4000; // 4 seconds per heading

const showFirstHeading = ref(true);
let headingTimer = null;

const books = [
  '/assets/img/book-literaforge1.png',
  '/assets/img/book-literaforge2.png',
  '/assets/img/book-literaforge3.png',
  '/assets/img/book-literaforge4.png',
  '/assets/img/book-literaforge5.png',
  '/assets/img/book-literaforge6.png'
];

// Calculate scroll duration based on number of books and desired gap
const scrollDuration = ref(books.length * 3000); // 3 seconds per book

const rotateHeadings = () => {
  headingTimer = setInterval(() => {
    showFirstHeading.value = !showFirstHeading.value;
  }, HEADING_ROTATION_DURATION);
};

onMounted(() => {
  rotateHeadings();
});

onBeforeUnmount(() => {
  if (headingTimer) clearInterval(headingTimer);
});
</script>

<style scoped>
/* Heading rotation fade transition */
.fade-heading-enter-active,
.fade-heading-leave-active {
  transition: all 0.8s ease-in-out;
}

.fade-heading-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-heading-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Book covers scrolling animation */
.book-scroll-container {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.book-scroll {
  display: flex;
  flex-direction: column;
  animation: scrollBooks linear infinite;
  height: 200%;
  /* Double height for seamless looping */
}

.book-cover {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

@keyframes scrollBooks {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-50%);
  }
}

/* Ensure full width */
.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Enhanced text shadows for better readability */
.drop-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

.drop-shadow-md {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
}

.drop-shadow-lg {
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
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

  .h-24 {
    height: 6rem;
  }

  .book-scroll-container {
    height: 16rem;
  }
}

/* Tablet adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
  h1 {
    font-size: 2.25rem;
  }
}

/* Large screen adjustments */
@media (min-width: 1024px) {
  .max-w-xl {
    max-width: 36rem;
  }
}
</style>