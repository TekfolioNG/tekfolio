<template>
  <section class="relative py-12 md:py-12 lg:py-8 pb-8 md:pb-10 lg:pb-12 mb-8 md:mb-12 lg:mb-16 overflow-hidden">
    <!-- Main background - dark mode for both light and dark -->
    <div class="absolute inset-0 bg-gray-900"></div>

    <!-- Background T Logo -->
    <div class="absolute inset-0 flex items-center justify-center">
      <img src="/assets/img/tek-logo.png" alt=""
        class="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] object-contain opacity-5 select-none pointer-events-none"
        aria-hidden="true" />
    </div>

    <div class="relative container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        <!-- Left Column - Content -->
        <div class="text-center lg:text-left space-y-5 lg:space-y-6">
          <!-- Headline -->
          <h2 class="text-3xl md:text-5xl font-bold mb-6 barlow-condensed text-white leading-tight inter-font">
            Let's Build Something <span
              class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">Smart,
              Simple & Secure</span> Together
          </h2>

          <!-- Subtext -->
          <p
            class="text-base md:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 inter-font font-light">
            We help ambitious businesses turn digital goals into solutions that work — and keep working. No jargon. No
            delays. Just results.
          </p>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
            <!-- Primary Button -->
            <NuxtLink to="/contact"
              class="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-xl transform transition-all duration-300 inter-font text-base overflow-hidden">
              <span class="relative z-10">Start Your Project</span>
              <svg
                class="relative z-10 inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                </path>
              </svg>
              <!-- Shimmer effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out">
              </div>
            </NuxtLink>

            <!-- Secondary Button -->
            <NuxtLink to="/case-studies"
              class="group relative px-6 py-3 bg-transparent border-2 border-white/80 text-white font-medium rounded-xl hover:bg-white hover:text-slate-800 hover:border-white hover:scale-105 hover:shadow-xl transform transition-all duration-300 inter-font text-base overflow-hidden">
              <span class="relative z-10">Client Success Stories</span>
              <svg
                class="relative z-10 inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <!-- Shimmer effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out">
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Column - Lottie Animation -->
        <div class="flex justify-center lg:justify-end">
          <div class="w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <DotLottieVue class="w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem]" autoplay loop
              src="https://lottie.host/2611cf13-290b-4bf0-a754-78b0849f114e/pXxDlFafiG.lottie" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
</script>

<style scoped>
/* Import Barlow Condensed font */
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

.barlow-condensed {
  font-family: 'Barlow Condensed', sans-serif;
}

/* Enhanced button styles */
button {
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Primary button hover effects */
button:first-of-type:hover {
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4);
}

/* Secondary button hover effects */
button:last-of-type:hover {
  box-shadow: 0 15px 30px rgba(255, 255, 255, 0.3);
}

/* Ensure background image doesn't interfere with text readability */
.relative {
  z-index: 1;
}

/* Remove floating animation for straighter logo */
.absolute img[aria-hidden="true"] {
  transform: rotate(0deg);
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  button:hover {
    transform: none;
  }

  .group-hover\:translate-x-1 {
    transform: none;
  }
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

/* Tablet responsiveness */
@media (min-width: 641px) and (max-width: 1024px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Large screen adjustments */
@media (min-width: 1536px) {
  .container {
    max-width: 90rem;
  }
}
</style>