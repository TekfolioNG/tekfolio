<template>
  <section class="relative h-screen w-full overflow-hidden">
    <!-- Slides Container -->
    <div class="relative h-full w-full">
      <!-- Individual Slides -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'absolute inset-0 transition-opacity duration-1000 ease-in-out',
          currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
        ]"
      >
        <!-- Background Image -->
        <div class="absolute inset-0">
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full object-cover"
          />
          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-black/50"></div>
        </div>

        <!-- Content -->
        <div class="relative z-20 h-full flex items-center justify-center">
          <div class="container mx-auto px-6 md:px-8 lg:px-12 text-center text-white">
            <!-- Category -->
            <div class="mb-4">
              <span class="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium uppercase tracking-wider">
                {{ slide.category }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              {{ slide.title }}
            </h1>

            <!-- Description -->
            <p class="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
              {{ slide.description }}
            </p>

            <!-- CTA Button -->
            <div class="mb-12">
              <NuxtLink
                :to="slide.link"
                class="group inline-flex items-center justify-center px-8 py-4 bg-[#fe4135] hover:bg-[#dc2626] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Find out more
                <Icon name="lucide:arrow-right" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <div class="flex space-x-3">
        <button
          v-for="(slide, index) in slides"
          :key="`dot-${index}`"
          @click="goToSlide(index)"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300',
            currentSlide === index
              ? 'bg-white scale-125'
              : 'bg-white/50 hover:bg-white/70'
          ]"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      @click="previousSlide"
      class="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      aria-label="Previous slide"
    >
      <Icon name="lucide:chevron-left" class="w-6 h-6" />
    </button>

    <button
      @click="nextSlide"
      class="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      aria-label="Next slide"
    >
      <Icon name="lucide:chevron-right" class="w-6 h-6" />
    </button>

    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-8 right-8 z-30">
      <div class="flex flex-col items-center text-white animate-bounce">
        <span class="text-sm mb-2 opacity-75">Scroll</span>
        <Icon name="lucide:chevron-down" class="w-5 h-5" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// Reactive data
const currentSlide = ref(0)
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
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Change slide every 5 seconds
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

// Lifecycle hooks
onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})

// Pause auto-slide on hover
const handleMouseEnter = () => {
  stopAutoSlide()
}

const handleMouseLeave = () => {
  startAutoSlide()
}
</script>

<style scoped>
/* Custom animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-enter-active {
  animation: slideIn 0.8s ease-out;
}

/* Ensure smooth transitions */
.transition-opacity {
  transition: opacity 1000ms ease-in-out;
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  display: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Improve accessibility */
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .transition-opacity {
    transition-duration: 0.01ms !important;
  }
  
  .animate-bounce {
    animation: none;
  }
}
</style>