<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Slides wrapper - full width with edge-to-edge coverage -->
    <div class="absolute inset-0 w-full h-full overflow-hidden z-0">
      <transition-group :name="'fade'" tag="div" class="h-full">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
          class="absolute inset-0 w-full h-full">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover object-center" />
          <!-- Enhanced gradient overlay for better text contrast -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
      </transition-group>
    </div>

    <!-- Content overlay - positioned closer to bottom and shifted left -->
    <div class="relative z-20 w-full h-full flex flex-col px-6 md:pl-16 lg:pl-24 xl:pl-32">
      <div class="flex flex-col mt-auto mb-16 md:mb-20 lg:mb-28 max-w-3xl mx-auto md:mx-0">
        <div class="mb-4">
          <transition name="fade" mode="out-in">
            <h1 :key="'title-' + currentSlide"
              class="hero-heading font-heading text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-wider-custom leading-tight">
              <span class="font-bold" ref="wordSwitcher">{{ slides[currentSlide].title }}</span>
              <span class="lowercase text-3xl md:text-4xl lg:text-5xl"> business solutions that work</span>
            </h1>
          </transition>
        </div>
        <transition name="fade" mode="out-in">
          <p :key="'desc-' + currentSlide"
            class="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl font-light leading-relaxed">
            {{ slides[currentSlide].description }}
          </p>
        </transition>
        <div class="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <NuxtLink :to="slides[currentSlide].primaryLink"
            class="px-6 py-3 border-2 bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 font-medium transition-all duration-300 text-lg transform hover:scale-105">
            {{ slides[currentSlide].primaryText }}
          </NuxtLink>
          <NuxtLink :to="slides[currentSlide].secondaryLink"
            class="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg transform hover:scale-105">
            {{ slides[currentSlide].secondaryText }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Slide navigation -->
    <div class="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
      <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
        class="w-12 h-1.5 transition-all duration-300 rounded-full"
        :class="currentSlide === index ? 'bg-blue-500' : 'bg-white/40 hover:bg-white/60'"
        :aria-label="`Go to slide ${index + 1}`">
      </button>
    </div>

    <!-- Progress bar -->
    <div class="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/20">
      <div class="bg-blue-500 h-full transition-all duration-300 ease-linear" :style="{ width: `${progress}%` }"></div>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

// Import images
import ppil1 from '/assets/img/PPIL1.png';
import ppil2 from '/assets/img/PPIL2.jpg';
import ppil3 from '/assets/img/PPIL3.jpg';

const SLIDE_DURATION = 8000; // 8 seconds per slide
const slides = [
  {
    image: ppil1,
    alt: 'PPIL Construction Site',
    title: 'Smart',
    description: 'We design, build, and maintain high-impact projects — combining deep technical know-how with a future-ready mindset for real results.',
    primaryLink: '/who-we-are',
    primaryText: 'Who We Are',
    secondaryLink: '/what-we-do',
    secondaryText: 'What We Do'
  },
  {
    image: ppil3,
    alt: 'PPIL Infrastructure Project',
    title: 'Simple',
    description: 'At PPIL, we bring vision to life through expertly managed design, construction, and infrastructure solutions.',
    primaryLink: '/our-work',
    primaryText: 'Our Work',
    secondaryLink: '/sustainability',
    secondaryText: 'Sustainability'
  },
  {
    image: ppil2,
    alt: 'PPIL Commercial Building',
    title: 'Secure',
    description: 'PPIL is your trusted partner for sustainable construction, project management, and maintenance, shaping environments that last generations.',
    primaryLink: '/who-we-are',
    primaryText: 'Why PPIL',
    secondaryLink: '/contact',
    secondaryText: 'Contact Us'
  }
]

const wordSwitcher = ref(null);
const currentSlide = ref(0);
const progress = ref(0);
let timer = null;
let progressTimer = null;

const setSlide = (index) => {
  currentSlide.value = index;
  resetProgress();
}

const resetProgress = () => {
  progress.value = 0;
  if (progressTimer) {
    clearInterval(progressTimer);
  }

  progressTimer = setInterval(() => {
    progress.value += (100 / (SLIDE_DURATION / 100));
    if (progress.value >= 100) {
      progress.value = 0;
    }
  }, 100);
}

onMounted(() => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
    resetProgress();
  }, SLIDE_DURATION);

  resetProgress();
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
  if (progressTimer) clearInterval(progressTimer);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.font-heading,
.hero-heading {
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

.hero-heading {
  text-shadow:
    0 2px 8px rgba(0, 0, 0, 0.7),
    0 0 2px rgba(0, 0, 0, 0.5);
}

/* Full width handling */
.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .hero-heading {
    text-align: center;
  }

  p {
    text-align: center;
  }
}
</style>