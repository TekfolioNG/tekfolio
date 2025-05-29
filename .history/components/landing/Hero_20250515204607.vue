<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

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

  if (wordElement) {
    const rotationInterval = setInterval(rotateWords, 3000)
    return () => clearInterval(rotationInterval) // Cleanup
  }
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-background">
      <img src="~/assets/img/tekfolio-hero-image.png" alt="Diverse tech team collaborating with digital UI overlays"
        class="hero-image" loading="lazy" />
      <div class="hero-overlay"></div>
    </div>

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
/* Layout */
.hero-section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.hero-content {
  position: relative;
  z-index: 20;
  color: white;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-text-container {
  max-width: 42rem;
}

/* Typography */
.hero-heading {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .hero-heading {
    font-size: 3.75rem;
  }
}

.rotating-word {
  display: inline-block;
  min-width: 100px;
  color: #4fd1c5;
  /* Tekfolio accent color */
}

.hero-subheading {
  font-size: 1.25rem;
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .hero-subheading {
    font-size: 1.5rem;
  }
}

.hero-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

/* Buttons */
.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn-primary {
  background-color: #2563eb;
  /* bg-blue-600 */
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #1d4ed8;
  /* hover:bg-blue-700 */
}

.btn-secondary {
  background-color: transparent;
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid white;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: white;
  color: #1d4ed8;
  /* hover:text-blue-700 */
}
</style>