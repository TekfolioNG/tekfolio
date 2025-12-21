<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Slides wrapper -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <!-- Individual Slides -->
      <div v-for="(slide, index) in slides" :key="index" :class="[
        'absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out',
        currentSlide === index ? 'opacity-100' : 'opacity-0'
      ]">
        <!-- Background Image -->
        <div class="absolute inset-0 w-full h-full">
          <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />
          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-black/40"></div>
        </div>

        <!-- Slide Content -->
        <div class="absolute inset-0 flex items-center justify-center z-10">
          <div class="text-center text-white px-6 max-w-4xl">
            <!-- Category Badge -->
            <div class="mb-6">
              <span
                class="inline-block px-6 py-3 bg-slate-700/80 backdrop-blur-sm text-white text-sm font-medium uppercase tracking-wider rounded">
                {{ slide.category }}
              </span>
            </div>

            <!-- Main Title -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              {{ slide.title }}
            </h1>

            <!-- Description -->
            <p class="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              {{ slide.description }}
            </p>

            <!-- CTA Button -->
            <NuxtLink :to="slide.link"
              class="inline-block px-8 py-3 bg-slate-700/80 backdrop-blur-sm text-white text-sm font-medium uppercase tracking-wider rounded hover:bg-slate-600/80 transition-all duration-300">
              Find out more
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div class="flex space-x-3">
        <button v-for="(slide, index) in slides" :key="`dot-${index}`" @click="goToSlide(index)" :class="[
          'w-3 h-3 rounded-full border-2 transition-all duration-300',
          currentSlide === index
            ? 'bg-white border-white'
            : 'bg-transparent border-white/60 hover:border-white'
        ]" :aria-label="`Go to slide ${index + 1}`"></button>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button @click="previousSlide"
      class="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
      aria-label="Previous slide">
      <Icon name="lucide:chevron-left" class="w-6 h-6" />
    </button>

    <button @click="nextSlide"
      class="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
      aria-label="Next slide">
      <Icon name="lucide:chevron-right" class="w-6 h-6" />
    </button>

    <!-- Auto-play pause/play button (optional) -->
    <button @click="toggleAutoSlide"
      class="absolute top-8 right-8 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
      :aria-label="isAutoSliding ? 'Pause slideshow' : 'Play slideshow'">
      <Icon :name="isAutoSliding ? 'lucide:pause' : 'lucide:play'" class="w-5 h-5" />
    </button>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// Reactive data
const currentSlide = ref(0)
const isAutoSliding = ref(true)
let autoSlideInterval = null

// Slides data
const slides = [
  {
    category: 'Engineering',
    title: 'Smarter projects, stronger outcomes',
    description: 'Precision in project management and equipment support',
    image: '/assets/img/syntanium-home.jpg',
    link: '/engineering'
  },
  {
    category: 'Construction',
    title: 'Turnkey builds, lasting impact',
    description: 'Turnkey solutions for complex industrial installations',
    image: '/assets/img/syntanium-home5.jpg',
    link: '/construction'
  },
  {
    category: 'Maintenance',
    title: 'Protecting assets, ensuring uptime',
    description: 'Protecting assets with corrosion and integrity management',
    image: '/assets/img/syntanium-home4.jpg',
    link: '/maintenance'
  },
  {
    category: 'Oil & Gas',
    title: 'Expertise across every operation',
    description: 'Expertise across downstream, marine, and supply chain operations',
    image: '/assets/img/syntanium-home2.png',
    link: '/oil-gas'
  },
  {
    category: 'Sustainability',
    title: 'Safety, quality, responsibility',
    description: 'Driving progress with safety, quality, and responsibility',
    image: '/assets/img/syntanium-home6.jpg',
    link: '/sustainability'
  }
]

// Methods
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoSlide = () => {
  if (isAutoSliding.value) {
    autoSlideInterval = setInterval(() => {
      nextSlide()
    }, 5000)
  }
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

const toggleAutoSlide = () => {
  isAutoSliding.value = !isAutoSliding.value
  if (isAutoSliding.value) {
    startAutoSlide()
  } else {
    stopAutoSlide()
  }
}

// Keyboard navigation
const handleKeydown = (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      previousSlide()
      break
    case 'ArrowRight':
      nextSlide()
      break
    case ' ':
    case 'Spacebar':
      event.preventDefault()
      toggleAutoSlide()
      break
  }
}

// Lifecycle hooks
onMounted(() => {
  startAutoSlide()
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  stopAutoSlide()
  document.removeEventListener('keydown', handleKeydown)
})

// Watch for slide changes to reset auto-slide timer
const resetAutoSlideTimer = () => {
  if (isAutoSliding.value) {
    stopAutoSlide()
    startAutoSlide()
  }
}

// Touch/Swipe support for mobile
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (event) => {
  touchStartX = event.changedTouches[0].screenX
}

const handleTouchEnd = (event) => {
  touchEndX = event.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide()
    } else {
      previousSlide()
    }
    resetAutoSlideTimer()
  }
}
</script>

<style scoped>
/* Ensure smooth transitions */
.transition-opacity {
  transition: opacity 1000ms ease-in-out;
}

/* Custom slide animation */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Improve text readability */
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {

  .absolute.left-8,
  .absolute.right-8 {
    left: 1rem;
    right: 1rem;
  }

  .absolute.top-8 {
    top: 1rem;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {

  .transition-all,
  .transition-opacity {
    transition-duration: 0.01ms !important;
  }
}

/* Focus styles for better accessibility */
button:focus {
  outline: 2px solid white;
  outline-offset: 2px;
}
</style>