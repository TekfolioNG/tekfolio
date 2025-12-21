<template>
  <section class="relative h-screen overflow-hidden">
    <!-- Slider Container -->
    <div class="relative h-full w-full">
      <!-- Slides -->
      <div v-for="(slide, index) in slides" :key="index"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out" :class="{
          'opacity-100 z-10': currentSlide === index,
          'opacity-0 z-0': currentSlide !== index
        }">
        <!-- Background Image -->
        <div class="absolute inset-0">
          <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/40"></div>
        </div>

        <!-- Content -->
        <div class="container mx-auto px-6 md:px-8 lg:px-12 h-full relative z-10 flex items-center">
          <div class="max-w-2xl text-white">
            <!-- Badge -->
            <div class="inline-flex items-center px-4 py-2 bg-[#fe4135] text-white text-sm font-medium mb-6">
              {{ slide.badge }}
            </div>

            <!-- Title -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {{ slide.title }}
            </h1>

            <!-- Subtitle -->
            <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
              {{ slide.subtitle }}
            </h2>

            <!-- Description -->
            <p class="text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
              {{ slide.description }}
            </p>

            <!-- CTA Button -->
            <NuxtLink to="/services"
              class="group inline-flex items-center justify-center px-8 py-4 bg-[#fe4135] text-white font-semibold rounded-lg shadow-lg hover:bg-[#dc2626] transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Find out more
              <Icon name="lucide:arrow-right" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Navigation Dots -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        <button v-for="(slide, index) in slides" :key="index" @click="setSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300" :class="{
            'bg-white': currentSlide === index,
            'bg-white/50': currentSlide !== index
          }" :aria-label="`Go to slide ${index + 1}`" />
      </div>

      <!-- Navigation Arrows -->
      <button @click="prevSlide"
        class="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/30 text-white rounded-full hover:bg-black/50 transition-all duration-300"
        aria-label="Previous slide">
        <Icon name="lucide:chevron-left" class="w-6 h-6" />
      </button>
      <button @click="nextSlide"
        class="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/30 text-white rounded-full hover:bg-black/50 transition-all duration-300"
        aria-label="Next slide">
        <Icon name="lucide:chevron-right" class="w-6 h-6" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// Slide data
const slides = [
  {
    badge: 'ENGINEERING',
    title: 'Smarter projects, stronger outcomes',
    subtitle: 'Precision in project management and equipment support',
    description: 'Expert engineering solutions tailored to your industrial needs with a focus on efficiency and reliability.',
    image: '/assets/img/syntanium-home.jpg'
  },
  {
    badge: 'CONSTRUCTION',
    title: 'Turnkey builds, lasting impact',
    subtitle: 'Turnkey solutions for complex industrial installations',
    description: 'End-to-end construction services delivering quality infrastructure that stands the test of time.',
    image: '/assets/img/syntanium-home5.jpg'
  },
  {
    badge: 'MAINTENANCE',
    title: 'Protecting assets, ensuring uptime',
    subtitle: 'Protecting assets with corrosion and integrity management',
    description: 'Comprehensive maintenance programs to maximize equipment lifespan and operational efficiency.',
    image: '/assets/img/syntanium-home4.jpg'
  },
  {
    badge: 'OIL & GAS',
    title: 'Expertise across every operation',
    subtitle: 'Expertise across downstream, marine, and supply chain operations',
    description: 'Specialized services for the oil and gas industry with a focus on safety and innovation.',
    image: '/assets/img/syntanium-home2.png'
  },
  {
    badge: 'SUSTAINABILITY',
    title: 'Safety, quality, responsibility',
    subtitle: 'Driving progress with safety, quality, and responsibility',
    description: 'Sustainable solutions that balance operational needs with environmental stewardship.',
    image: '/assets/img/syntanium-home6.jpg'
  }
]

// Current slide state
const currentSlide = ref(0)
let slideInterval

// Navigation functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  resetInterval()
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
  resetInterval()
}

const setSlide = (index) => {
  currentSlide.value = index
  resetInterval()
}

// Auto-play functionality
const resetInterval = () => {
  clearInterval(slideInterval)
  slideInterval = setInterval(() => {
    nextSlide()
  }, 6000)
}

// Set up and clean up interval
onMounted(() => {
  resetInterval()
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<style scoped>
/* Smooth transitions for slider */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.8s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>