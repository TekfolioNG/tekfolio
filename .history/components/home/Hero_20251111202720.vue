<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Navy Blue Paper Texture Background -->
    <div class="absolute inset-0 w-full h-full z-0">
      <img src="/assets/img/paper-bg4.avif" alt="Paper Texture" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-navy-overlay"></div>
    </div>

    <!-- Content Container -->
    <div class="absolute inset-0 z-10 flex items-center pt-4 md:pt-20 pb-4 md:pb-8">
      <div class="container mx-auto px-4 md:px-8 lg:px-12 h-full max-h-screen overflow-y-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-full py-4 md:py-0">

          <!-- Left Side - Hero Text Content -->
          <div class="text-center lg:text-left order-2 lg:order-1 space-y-3 md:space-y-4">
            <!-- Animated Headlines -->
            <div class="space-y-1 md:space-y-2">
              <transition name="fade-headline" mode="out-in">
                <h1 v-if="currentHeadline === 1" key="headline1"
                  class="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-lg">
                  We Transform Ideas<br />Into Impact
                </h1>
                <h1 v-else key="headline2"
                  class="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-lg">
                  …And Your Story Into<br />Published Legacy
                </h1>
              </transition>
            </div>

            <!-- Description -->
            <p
              class="text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              We help businesses, leaders, and authors bring bold visions to life, turning them into structured
              solutions through advisory, productivity training, ghostwriting, and publishing.
            </p>

            <!-- Stats - Hidden on mobile -->
            <div class="hidden md:flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4 text-white py-2">
              <div class="text-center">
                <p class="text-lg md:text-2xl font-bold text-gold">80+</p>
                <p class="text-xs md:text-sm text-gray-300">Books Published</p>
              </div>
              <div class="text-center">
                <p class="text-lg md:text-2xl font-bold text-gold">70+</p>
                <p class="text-xs md:text-sm text-gray-300">Ghostwriting Projects</p>
              </div>
              <div class="text-center">
                <p class="text-lg md:text-2xl font-bold text-gold">500+</p>
                <p class="text-xs md:text-sm text-gray-300">Employees Trained</p>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center lg:justify-start pt-2">
              <!-- Primary CTA -->
              <NuxtLink to="/book-session"
                class="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 md:px-6 py-3 md:py-3 bg-[#0246d5] hover:bg-[#0236b5] text-white font-bold text-sm md:text-base rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Book a Clarity Session
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>

              <!-- Secondary CTA -->
              <NuxtLink to="/services"
                class="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 md:px-6 py-3 md:py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold text-sm md:text-base rounded-lg transition-all duration-300">
                Explore Our Services
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Right Side - Scrolling Book Covers (Desktop) / Top (Mobile) -->
          <div
            class="relative h-[280px] sm:h-[300px] md:h-[350px] lg:h-[500px] order-1 lg:order-2 flex items-center justify-center pt-4 md:pt-0">
            <div class="book-display-container">
              <transition name="fade-book" mode="out-in">
                <div :key="currentBookIndex" class="book-item-display">
                  <img :src="books[currentBookIndex]" :alt="`Book Cover ${currentBookIndex + 1}`"
                    class="w-full h-auto rounded-lg shadow-2xl book-cover-image" />
                </div>
              </transition>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

// Import book cover images
import book1 from '~/assets/img/book-literaforge1.png';
import book2 from '~/assets/img/book-literaforge2.png';
import book4 from '~/assets/img/book-literaforge4.png';
import book5 from '~/assets/img/book-literaforge5.png';
import book6 from '~/assets/img/book-literaforge6.png';
import book3 from '~/assets/img/book-literaforge7.png';

const books = [book1, book2, book3, book4, book5, book6];

const currentHeadline = ref(1);
const currentBookIndex = ref(0);
let bookTimer = null;
let headlineTimer = null;

// Rotate books every 3 seconds
const rotateBooks = () => {
  bookTimer = setInterval(() => {
    currentBookIndex.value = (currentBookIndex.value + 1) % books.length;
  }, 3000);
};

// Rotate headlines every 4 seconds
const rotateHeadlines = () => {
  headlineTimer = setInterval(() => {
    currentHeadline.value = currentHeadline.value === 1 ? 2 : 1;
  }, 4000);
};

onMounted(() => {
  // Start headline rotation
  rotateHeadlines();

  // Start book rotation
  rotateBooks();
});

onBeforeUnmount(() => {
  if (bookTimer) clearInterval(bookTimer);
  if (headlineTimer) clearInterval(headlineTimer);
});
</script>

<style scoped>
/* Custom colors */
.text-gold {
  color: #D4AF37;
}

.bg-gold {
  background-color: #D4AF37;
}

.bg-gold-dark {
  background-color: #C9A32B;
}

.bg-blue-brand {
  background-color: #4D7EFF;
}

.bg-navy-overlay {
  background-color: rgba(15, 23, 42, 0.6);
}

/* Headline fade-in animations */
.fade-headline-enter-active {
  transition: all 0.8s ease-out;
}

.fade-headline-leave-active {
  transition: all 0.8s ease-out;
}

.fade-headline-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-headline-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Book fade transition */
.fade-book-enter-active,
.fade-book-leave-active {
  transition: all 0.6s ease-in-out;
}

.fade-book-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-book-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Book display container */
.book-display-container {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.book-item-display {
  width: 100%;
}

/* Sharpen book cover images */
.book-cover-image {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  filter: contrast(1.05) sharpen(1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* Enhanced text shadows */
.drop-shadow-md {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
}

.drop-shadow-lg {
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.9);
}

/* Full width */
.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Mobile responsive */
@media (max-width: 640px) {
  .book-display-container {
    max-width: 200px;
  }
}

/* Small mobile adjustments */
@media (min-width: 640px) and (max-width: 767px) {
  .book-display-container {
    max-width: 240px;
  }
}

/* Tablet adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
  .book-display-container {
    max-width: 260px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .book-display-container {
    max-width: 340px;
  }
}
</style>