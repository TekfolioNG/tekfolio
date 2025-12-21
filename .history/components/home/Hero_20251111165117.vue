<template>
  <main class="relative w-screen min-h-screen overflow-hidden">
    <!-- Navy Blue Paper Texture Background -->
    <div class="absolute inset-0 w-full h-full z-0">
      <img src="/assets/img/paper-bg4.avif" alt="Paper Texture" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-navy-overlay"></div>
    </div>

    <!-- Content Container -->
    <div class="absolute inset-0 z-10 flex items-center pt-16 md:pt-20 pb-8">
      <div class="container mx-auto px-4 md:px-8 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <!-- Left Side - Hero Text Content -->
          <div class="text-center lg:text-left order-2 lg:order-1">
            <!-- Animated Headlines -->
            <div class="mb-6 space-y-2">
              <transition name="fade-headline" appear>
                <h1 v-show="showFirstHeadline"
                  class="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg">
                  We Transform Ideas<br />Into Impact
                </h1>
              </transition>

              <transition name="fade-headline" appear>
                <h2 v-show="showSecondHeadline"
                  class="text-gold text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight drop-shadow-md mt-4">
                  …And Your Story Into<br />Published Legacy
                </h2>
              </transition>
            </div>

            <!-- Description -->
            <p class="text-gray-100 text-base md:text-lg leading-relaxed mb-6 font-medium max-w-2xl mx-auto lg:mx-0">
              At Litera-Forge, we help businesses, leaders, and authors turn ideas into
              structured solutions through advisory, productivity training, ghostwriting, and publishing.
            </p>

            <!-- Stats -->
            <div class="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-8 text-white">
              <div class="text-center">
                <p class="text-2xl md:text-3xl font-bold text-gold">80+</p>
                <p class="text-sm md:text-base text-gray-300">Book Projects</p>
              </div>
              <div class="text-center">
                <p class="text-2xl md:text-3xl font-bold text-gold">70+</p>
                <p class="text-sm md:text-base text-gray-300">Ghostwriting Achievements</p>
              </div>
              <div class="text-center">
                <p class="text-2xl md:text-3xl font-bold text-gold">500+</p>
                <p class="text-sm md:text-base text-gray-300">Clarity Sessions</p>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <!-- Primary CTA -->
              <NuxtLink to="/book-session"
                class="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold hover:bg-gold-dark text-gray-900 font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Book a Clarity Session
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>

              <!-- Secondary CTA -->
              <NuxtLink to="/services"
                class="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold text-lg rounded-lg transition-all duration-300">
                Explore Our Services
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Right Side - Scrolling Book Covers -->
          <div class="relative h-[400px] md:h-[500px] lg:h-[600px] order-1 lg:order-2">
            <div class="book-scroll-container">
              <div class="book-scroll-track" :style="{ transform: `translateY(-${scrollOffset}px)` }">
                <!-- First set of books -->
                <div v-for="(book, index) in books" :key="`book-1-${index}`" class="book-item">
                  <img :src="book" :alt="`Book Cover ${index + 1}`"
                    class="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300" />
                </div>
                <!-- Duplicate set for seamless loop -->
                <div v-for="(book, index) in books" :key="`book-2-${index}`" class="book-item">
                  <img :src="book" :alt="`Book Cover ${index + 1}`"
                    class="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300" />
                </div>
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

const books = [
  '/assets/img/book-literaforge1.png',
  '/assets/img/book-literaforge2.png',
  '/assets/img/book-literaforge3.png',
  '/assets/img/book-literaforge4.png',
  '/assets/img/book-literaforge5.png',
  '/assets/img/book-literaforge6.png'
];

const showFirstHeadline = ref(false);
const showSecondHeadline = ref(false);
const scrollOffset = ref(0);
let scrollTimer = null;
let headlineTimer1 = null;
let headlineTimer2 = null;

// Smooth scrolling animation
const animateScroll = () => {
  const bookHeight = 320; // Approximate height with gap
  const totalHeight = bookHeight * books.length;

  scrollTimer = setInterval(() => {
    scrollOffset.value += 0.5; // Smooth continuous scroll

    // Reset when we've scrolled through first set
    if (scrollOffset.value >= totalHeight) {
      scrollOffset.value = 0;
    }
  }, 16); // ~60fps
};

onMounted(() => {
  // Animate headlines with delay
  headlineTimer1 = setTimeout(() => {
    showFirstHeadline.value = true;
  }, 300);

  headlineTimer2 = setTimeout(() => {
    showSecondHeadline.value = true;
  }, 1200);

  // Start book scroll animation
  animateScroll();
});

onBeforeUnmount(() => {
  if (scrollTimer) clearInterval(scrollTimer);
  if (headlineTimer1) clearTimeout(headlineTimer1);
  if (headlineTimer2) clearTimeout(headlineTimer2);
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

.bg-navy-overlay {
  background-color: rgba(15, 23, 42, 0.6);
}

/* Headline fade-in animations */
.fade-headline-enter-active {
  transition: all 0.8s ease-out;
}

.fade-headline-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* Book scroll container */
.book-scroll-container {
  height: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
}

.book-scroll-track {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: transform 0.016s linear;
  will-change: transform;
}

.book-item {
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  flex-shrink: 0;
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
  .book-item {
    max-width: 200px;
  }

  .book-scroll-track {
    gap: 1.5rem;
  }
}

@media (max-width: 1023px) {
  .book-scroll-container {
    height: 400px;
  }
}

/* Tablet adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
  .book-item {
    max-width: 240px;
  }
}
</style>