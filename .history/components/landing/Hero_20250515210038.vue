<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background image with edge-to-edge coverage -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="~/assets/img/tekfolio-hero-image.png" alt="Tekfolio team with tech overlays"
        class="w-full h-full object-cover" />
      <div class="overlay absolute inset-0 bg-black bg-opacity-50"></div>
    </div>

    <!-- Content container -->
    <div class="container mx-auto px-4 h-full flex items-center relative z-10">
      <div class="max-w-3xl text-white">
        <!-- Main heading with enhanced GSAP animation -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span ref="wordSwitcher" class="text-blue-400 inline-block min-w-[120px]"></span>
          Business Solutions That Work
        </h1>

        <!-- Description with proper spacing -->
        <div class="mb-10">
          <p class="text-lg md:text-xl leading-relaxed opacity-90">
            Achieve more with scalable, next-gen websites and apps. Our versed and innovative team of tech geeks helps
            bring your vision to life and maximise your business's full potential with modern, user-optimized software.
            Faster than you'd imagined.
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/about" class="btn-primary">
            How We're Different
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary">
            Request a Demo
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const wordSwitcher = ref(null)
const words = ['Smart', 'Simple', 'Secure']

onMounted(() => {
  if (!wordSwitcher.value) return

  // Initial setup
  gsap.set(wordSwitcher.value, {
    y: 20,
    opacity: 0
  })
  wordSwitcher.value.textContent = words[0]

  // Animation timeline
  const tl = gsap.timeline({ repeat: -1 })

  words.forEach((word, index) => {
    const nextIndex = (index + 1) % words.length

    // Animate in from bottom
    tl.to(wordSwitcher.value, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    })
      // Hold visible
      .to(wordSwitcher.value, {
        duration: 2
      })
      // Animate out
      .to(wordSwitcher.value, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        ease: "power1.in",
        onComplete: () => {
          wordSwitcher.value.textContent = words[nextIndex]
        }
      })
  })
})
</script>

<style scoped>
/* Edge-to-edge layout */
.overlay {
  background: linear-gradient(to right,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.7) 100%);
}

/* Button styles */
.btn-primary {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
}

.btn-primary:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}

.btn-secondary {
  display: inline-block;
  background-color: transparent;
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
}

.btn-secondary:hover {
  background-color: white;
  color: #1d4ed8;
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>