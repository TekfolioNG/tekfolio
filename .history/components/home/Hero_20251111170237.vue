<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="/assets/img/paper-bg4.avif" alt="Navy Blue Paper Texture" class="w-full h-full object-cover"
        style="filter: contrast(1.1) brightness(1.05) saturate(1.1);" />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Content Container -->
    <div class="absolute inset-0 z-10 flex items-center pt-16 md:pt-20">
      <div class="container mx-auto px-4 md:px-8 lg:px-12">
        <div class="flex flex-col lg:flex-row justify-between items-center gap-8">
          <!-- Text Content - Left Side -->
          <div class="text-center lg:text-left max-w-xl lg:max-w-2xl">
            <!-- Hero Headings with fade transition -->
            <div class="h-20 md:h-24 lg:h-28 mb-4 md:mb-6 flex flex-col justify-center">
              <transition name="fade-heading" mode="out-in">
                <h1 v-if="showFirstHeading" key="first"
                  class="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-lg">
                  We Transform Ideas Into Impact
                </h1>
                <h1 v-else key="second"
                  class="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-lg">
                  ...And Your Story Into Published Legacy
                </h1>
              </transition>
            </div>

            <!-- Description -->
            <p
              class="text-white text-sm md:text-base lg:text-lg leading-relaxed mb-6 font-medium drop-shadow max-w-2xl">
              At Litera-Forge, we help businesses, leaders, and authors turn ideas into structured solutions through
              advisory, productivity training, ghostwriting, and publishing.
            </p>

            <!-- Stats -->
            <div class="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-6 md:mb-8">
              <div class="text-center">
                <p class="text-[#B0E0E6] text-lg md:text-xl font-bold drop-shadow-md">80+</p>
                <p class="text-white text-xs md:text-sm drop-shadow">book projects</p>
              </div>
              <div class="text-center">
                <p class="text-[#B0E0E6] text-lg md:text-xl font-bold drop-shadow-md">70+</p>
                <p class="text-white text-xs md:text-sm drop-shadow">ghostwriting achievements</p>
              </div>
              <div class="text-center">
                <p class="text-[#B0E0E6] text-lg md:text-xl font-bold drop-shadow-md">500+</p>
                <p class="text-white text-xs md:text-sm drop-shadow">clarity sessions</p>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <NuxtLink to="/book-session"
                class="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#B0E0E6] hover:bg-[#00B8E6] text-gray-900 font-semibold text-base md:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Book a Clarity Session
                <!-- Chevron arrow -->
                <svg class="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>

              <NuxtLink to="/services"
                class="inline-flex items-center justify-center px-4 md:px-6 py-3 md:py-4 border-2 border-white text-white hover:bg-white/10 font-semibold text-base md:text-lg rounded-lg transition-all duration-300">
                Explore Our Services
              </NuxtLink>
            </div>
          </div>

          <!-- Book Covers - Right Side -->
          <div
            class="w-full lg:w-1/3 xl:w-2/5 max-w-md lg:max-w-none h-48 md:h-64 lg:h-80 relative overflow-hidden rounded-lg shadow-2xl mt-4 lg:mt-0">
            <div class="book-scroll-container h-full">
              <transition-group name="book-fade" tag="div"
                class="flex h-full items-center justify-center gap-4 md:gap-6">
                <img v-for="book in visibleBooks" :key="book.id" :src="book.src" :alt="book.alt"
                  class="book-cover h-40 md:h-48 lg:h-56 w-auto object-contain shadow-xl rounded" />
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const HEADING_ROTATION_DURATION = 4000; // 4 seconds per heading
const BOOK_DISPLAY_DURATION = 3000; // 3 seconds per book

const showFirstHeading = ref(true);
const currentBookIndex = ref(0);

const books = [
  { id: 1, src: '/assets/img/book-literaforge1.png', alt: 'Published book cover 1' },
  { id: 2, src: '/assets/img/book-literaforge2.png', alt: 'Published book cover 2' },
  { id: 3, src: '/assets/img/book-literaforge3.png', alt: 'Published book cover 3' },
  { id: 4, src: '/assets/img/book-literaforge4.png', alt: 'Published book cover 4' },
  { id: 5, src: '/assets/img/book-literaforge5.png', alt: 'Published book cover 5' },
  { id: 6, src: '/assets/img/book-literaforge6.png', alt: 'Published book cover 6' }
];

const visibleBooks = computed(() => {
  return [books[currentBookIndex.value]];
});

let headingTimer = null;
let bookTimer = null;

const rotateHeadings = () => {
  headingTimer = setInterval(() => {
    showFirstHeading.value = !showFirstHeading.value;
  }, HEADING_ROTATION_DURATION);
};

const rotateBooks = () => {
  bookTimer = setInterval(() => {
    currentBookIndex.value = (currentBookIndex.value + 1) % books.length;
  }, BOOK_DISPLAY_DURATION);
};

onMounted(() => {
  rotateHeadings();
  rotateBooks();
});

onBeforeUnmount(() => {
  if (headingTimer) clearInterval(headingTimer);
  if (bookTimer) clearInterval(bookTimer);
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

/* Book cover fade transition */
.book-fade-enter-active,
.book-fade-leave-active {
  transition: all 0.8s ease-in-out;
  position: absolute;
}

.book-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.book-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.book-fade-move {
  transition: transform 0.8s ease;
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

  .h-20 {
    height: 5rem;
  }
}

/* Tablet adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
  .h-24 {
    height: 6rem;
  }
}

/* Large screen adjustments */
@media (min-width: 1024px) {
  .max-w-xl {
    max-width: 36rem;
  }
}

/* Extra large screens */
@media (min-width: 1280px) {
  .max-w-2xl {
    max-width: 42rem;
  }
}
</style>