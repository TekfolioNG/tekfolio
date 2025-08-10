<template>
  <section class="relative py-12 md:py-16 lg:py-20 overflow-hidden">
    <!-- Background gradient overlay - adapts to light/dark mode -->
    <div class="absolute inset-0 bg-gradient-to-r dark:bg-gradient-to-r"
      style="background: linear-gradient(135deg, #002244 0%, #1A4173 50%, #002244 100%);"
      :class="{ 'dark:opacity-100': true, 'opacity-100': true }"></div>

    <!-- Light mode overlay -->
    <div class="absolute inset-0 bg-gradient-to-r dark:hidden"
      style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);"></div>

    <!-- Subtle pattern overlay -->
    <div class="absolute inset-0 opacity-10 dark:opacity-20"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.3\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');">
    </div>

    <!-- Background T Logo -->
    <div class="absolute inset-0 flex items-center justify-center">
      <img src="/assets/img/tek-logo.png" alt=""
        class="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain opacity-5 dark:opacity-10 select-none pointer-events-none"
        aria-hidden="true" />
    </div>

    <div class="relative container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        <!-- Left Column - Content -->
        <div class="text-center lg:text-left space-y-5 lg:space-y-6">
          <!-- Headline -->
          <h2 class="text-3xl md:text-5xl font-bold mb-6 barlow-condensed text-white leading-tight inter-font">
            Let's Build Something Smart, Simple & Secure Together
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
            <button
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
            </button>

            <!-- Secondary Button -->
            <button
              class="group relative px-6 py-3 bg-transparent border-2 border-white/80 text-white font-medium rounded-xl hover:bg-white hover:text-slate-800 hover:border-white transform transition-all duration-300 inter-font text-base overflow-hidden">
              <span class="relative z-10">Client Success Stories</span>
              <svg
                class="relative z-10 inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <!-- Subtle glow effect -->
              <div
                class="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </button>
          </div>
        </div>

        <!-- Right Column - Lottie Animation -->
        <div class="flex justify-center lg:justify-end">
          <div class="w-full max-w-sm lg:max-w-md xl:max-w-lg">
            <DotLottieVue class="w-full h-64 sm:h-72 lg:h-80 xl:h-96" autoplay loop
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
  box-shadow: 0 15px 30px rgba(255, 255, 255, 0.2);
}

/* Ensure background image doesn't interfere with text readability */
.relative {
  z-index: 1;
}

/* Animation for background logo */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-8px) rotate(1deg);
  }
}

/* Floating animation for background logo */
.absolute img[aria-hidden="true"] {
  animation: float 20s ease-in-out infinite;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .absolute img[aria-hidden="true"] {
    animation: none;
  }

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
</style>