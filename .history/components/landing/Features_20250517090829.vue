<template>
  <section class="usp-section bg-white dark:bg-gray-900 py-16 md:py-24 px-4">
    <div class="container mx-auto max-w-5xl">
      <!-- USP Header -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Your vision and goals are unique.<br>
        <span class="text-blue-600 dark:text-blue-400">Why shouldn't your brand's digital products?</span>
      </h2>

      <!-- USP Content -->
      <div class="usp-content grid md:grid-cols-2 gap-12 items-center">
        <!-- Problem Column -->
        <div class="problem-col space-y-6">
          <h3 class="text-xl font-semibold text-red-600 dark:text-red-400">Generic solutions create generic brands</h3>
          <ul class="space-y-4 text-gray-700 dark:text-gray-300">
            <li class="flex items-start">
              <svg class="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>WordPress templates that limit creativity</span>
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Low-code tools with hidden subscription costs</span>
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Freelancer teams that dilute your brand identity</span>
            </li>
          </ul>
        </div>

        <!-- Solution Column -->
        <div class="solution-col space-y-6">
          <h3 class="text-xl font-semibold text-green-600 dark:text-green-400">Tekfolio delivers custom excellence</h3>
          <p class="text-gray-700 dark:text-gray-300">
            We design and create <span class="font-bold text-gray-900 dark:text-white">smart, simple, and secure</span>
            software and digital solutions from the ground up, 100% custom-built to match your vision.
          </p>
          <ul class="space-y-4 text-gray-700 dark:text-gray-300">
            <li class="flex items-start">
              <svg class="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Fully functional & performance-optimized</span>
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>No cookie-cutter clones</span>
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>No vendor lock-ins or mismatched teams</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- USP CTA -->
      <div class="text-center mt-16">
        <NuxtLink to="/contact"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
          Build Your Unique Digital Solution
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // Animate elements on scroll
  gsap.utils.toArray('.usp-section h2, .usp-col').forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    })
  })
})
</script>

<style scoped>
.usp-section {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 1) 100%);
}

.dark .usp-section {
  background: linear-gradient(to bottom, rgba(17, 24, 39, 0.9) 0%, rgba(17, 24, 39, 1) 100%);
}

.usp-content {
  background-image: radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
}

@media (max-width: 768px) {
  .usp-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>