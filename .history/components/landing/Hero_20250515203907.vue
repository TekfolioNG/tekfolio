<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

// GSAP animation for word rotation
onMounted(() => {
  const words = ['Smart', 'Simple', 'Secure']
  let currentIndex = 0
  const wordElement = document.querySelector('.rotating-word')

  const rotateWords = () => {
    gsap.to(wordElement, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        currentIndex = (currentIndex + 1) % words.length
        if (wordElement) {
          wordElement.textContent = words[currentIndex]
          gsap.to(wordElement, {
            opacity: 1,
            y: 0,
            duration: 0.3
          })
        }
      }
    })
  }

  // Start rotation only if element exists
  if (wordElement) {
    setInterval(rotateWords, 3000)
  }
})
</script>

<template>
  <section class="hero-section">
    <!-- Background Image with Overlay -->
    <div class="hero-background">
      <img src="~/assets/img/tekfolio-hero-image.png" alt="Diverse tech team collaborating with digital UI overlays"
        class="hero-image" loading="lazy" />
      <div class="hero-overlay"></div>
    </div>

    <!-- Content -->
    <div class="hero-content">
      <div class="hero-text-container">
        <h1 class="hero-heading">
          <span class="rotating-word">Smart</span> Business Solutions
        </h1>

        <p class="hero-subheading">
          Achieve more with scalable, next-gen websites and apps.
        </p>

        <p class="hero-description">
          Our versed and innovative team of tech geeks helps bring your vision to life
          and maximise your business's full potential with modern, user-optimized software.
          Faster than you'd imagined.
        </p>

        <div class="hero-buttons">
          <button class="btn-primary">
            How We're Different
          </button>
          <button class="btn-secondary">
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  @apply relative min-h-[80vh] flex items-center overflow-hidden;
}

.hero-background {
  @apply absolute inset-0 z-0;
}

.hero-image {
  @apply w-full h-full object-cover;
}

.hero-overlay {
  @apply absolute inset-0 bg-black/30 z-10;
}

.hero-content {
  @apply container mx-auto px-4 relative z-20 text-white;
}

.hero-text-container {
  @apply max-w-2xl;
}

.hero-heading {
  @apply text-5xl md:text-6xl font-bold mb-4 leading-tight;
}

.rotating-word {
  @apply inline-block min-w-[100px] text-teal-400;
  /* Adjust color to brand */
}

.hero-subheading {
  @apply text-xl md:text-2xl mb-6 opacity-80;
}

.hero-description {
  @apply text-lg mb-8;
}

.hero-buttons {
  @apply flex flex-wrap gap-4;
}

.btn-primary {
  @apply bg-primary hover:bg-primary-dark px-6 py-3 rounded-lg font-medium transition-colors;
}

.btn-secondary {
  @apply bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors;
}
</style>