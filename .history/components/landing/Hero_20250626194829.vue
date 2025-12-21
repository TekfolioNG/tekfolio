<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Slides wrapper -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <transition-group name="fade" tag="div" class="h-full">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
          class="absolute inset-0 w-screen h-full">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover object-center" />
          <!-- Enhanced gradient overlay for better text contrast -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/30" />
        </div>
      </transition-group>
    </div>

    <!-- Content overlay with proper navbar spacing -->
    <div class="relative z-20 w-full h-full flex flex-col px-6 md:pl-16 lg:pl-24 xl:pl-32">
      <!-- Add top spacing to avoid navbar clash -->
      <div
        class="flex-1 flex flex-col justify-center items-start pt-32 md:pt-40 lg:pt-44 pb-32 md:pb-20 lg:pb-28 max-w-3xl mx-auto md:mx-0 hero-content-container">
        <transition name="fade-content" mode="out-in">
          <h1 :key="'title-' + currentSlide"
            class="hero-heading font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-black tracking-wider-custom leading-tight"
            :class="{ 'text-right': currentSlide === 0 }">
            {{ slides[currentSlide].title }}
          </h1>
        </transition>
        <transition name="fade-content" mode="out-in">
          <p :key="'desc-' + currentSlide"
            class="hero-description mt-4 md:mt-6 text-lg md:text-xl text-white max-w-2xl font-normal leading-relaxed px-3 py-2 rounded-md"
            :class="{ 'text-right ml-auto mr-0': currentSlide === 0 }"
            style="background: rgba(153, 204, 51, 0.7); backdrop-filter: blur(2px); text-shadow: 0 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5);"
            v-if="slides[currentSlide].description">
            {{ slides[currentSlide].description }}
          </p>
        </transition>
        <div class="mt-8 w-full" :class="currentSlide === 0 ? 'flex justify-end' : 'flex justify-center md:block'"
          v-if="slides[currentSlide].buttonText">
          <transition name="fade-content" mode="out-in">
            <NuxtLink :key="'btn-' + currentSlide" :to="slides[currentSlide].buttonLink"
              class="px-6 py-3 text-white font-medium transition-all duration-300 text-lg transform hover:scale-105 inline-block"
              :style="{ backgroundColor: '#4ade80' }">
              {{ slides[currentSlide].buttonText }}
            </NuxtLink>
          </transition>
        </div>
      </div>
    </div>

    <!-- Slide navigation -->
    <div class="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
      <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
        class="w-12 h-1.5 transition-all duration-300 rounded-full"
        :class="currentSlide === index ? 'bg-green-400' : 'bg-white/40 hover:bg-white/60'"
        :aria-label="`Go to slide ${index + 1}`">
      </button>
    </div>

    <!-- Progress bar -->
    <div class="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/20">
      <div class="bg-green-400 h-full transition-all duration-300 ease-linear" :style="{ width: `${progress}%` }">
      </div>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

// Import images with new paths
import slider1 from '/assets/img/slider1-veraverde.jpg';
import slider2 from '/assets/img/slider2-veraverde.jpg';
import slider3 from '/assets/img/slider3-veraverde.jpg';

const SLIDE_DURATION = 8000; // 8 seconds per slide
const slides = [
  {
    image: slider1,
    alt: 'Climate-Smart Agriculture - Vera Verde',
    title: 'Farming That Nurtures the Earth',
    description: 'We help farmers grow more, waste less, and protect the land they rely on.',
    buttonLink: '/services',
    buttonText: 'Add Text'
  },
  {
    image: slider2,
    alt: 'Carbon Sequestration - Vera Verde',
    title: 'Turning Carbon into Soil Health',
    description: 'We lock carbon in the soil using biochar—helping the planet and boosting harvests.',
    buttonLink: '/how-it-works',
    buttonText: 'How It Works'
  },
  {
    image: slider3,
    alt: 'Ecofuel Briquettes - Vera Verde',
    title: 'Clean Energy from Farm Waste',
    description: 'We turn sawdust and rice husk into eco-briquettes—an affordable, smokeless alternative.',
    buttonLink: '/services',
    buttonText: 'Add Text'
  }
]

const currentSlide = ref(0)
const progress = ref(0)
let timer = null
let progressTimer = null

const setSlide = (index) => {
  currentSlide.value = index
  resetProgress()
}

const resetProgress = () => {
  progress.value = 0
  if (progressTimer) {
    clearInterval(progressTimer)
  }

  progressTimer = setInterval(() => {
    progress.value += (100 / (SLIDE_DURATION / 100))
    if (progress.value >= 100) {
      progress.value = 0
    }
  }, 100)
}

onMounted(() => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
    resetProgress()
  }, SLIDE_DURATION)

  resetProgress()
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
  if (progressTimer) clearInterval(progressTimer)
})
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

.fade-content-enter-active,
.fade-content-leave-active {
  transition: opacity 1.5s ease;
}

.fade-content-enter-from,
.fade-content-leave-to {
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
    0 2px 6px rgba(0, 0, 0, 0.5),
    0 0 1px #fff,
    0 0 1px #fff;
}

.hero-description {
  transition: all 0.3s ease;
}

.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Desktop spacing adjustments */
.hero-content-container {
  min-height: calc(100vh - 8rem);
  /* Ensure content doesn't get too cramped */
}

/* Mobile responsive adjustments */
@media (max-width: 767px) {
  .hero-content-container {
    padding-top: 8rem !important;
    /* Reduce top padding on mobile */
    padding-bottom: 8rem !important;
    justify-content: center !important;
    /* Center content vertically on mobile */
  }

  .hero-heading {
    text-align: center;
    font-size: 2.5rem;
    /* Slightly smaller on small screens */
  }

  .hero-heading.text-right {
    text-align: center !important;
    /* Override right alignment on mobile */
  }

  .hero-description {
    text-align: center;
    font-size: 1rem;
    line-height: 1.5;
    padding: 0.75rem;
    background: rgba(153, 204, 51, 0.8) !important;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9) !important;
    margin-top: 1rem !important;
  }

  .hero-description.text-right {
    text-align: center !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

@media (max-width: 480px) {
  .hero-content-container {
    padding-top: 6rem !important;
    padding-bottom: 6rem !important;
  }

  .hero-heading {
    font-size: 2rem;
  }
}

/* Large desktop screens - more spacing */
@media (min-width: 1280px) {
  .hero-content-container {
    padding-top: 12rem;
    padding-bottom: 3rem;
  }
}
</style>