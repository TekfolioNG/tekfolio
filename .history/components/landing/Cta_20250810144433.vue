<template>
  <section class="relative py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0D6EFD] to-[#084298]"></div>

    <!-- Background T Logo -->
    <div class="absolute inset-0 flex items-center justify-center">
      <img src="/assets/img/tek-logo.png" alt=""
        class="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] object-contain opacity-10 select-none pointer-events-none"
        aria-hidden="true" />
    </div>

    <div class="relative container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Left Column - Content -->
        <div class="text-center lg:text-left space-y-6 lg:space-y-8">
          <!-- Headline -->
          <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight inter-font">
            Let's Build Something Smart, Simple & Secure Together
          </h2>

          <!-- Subtext -->
          <p
            class="text-lg sm:text-xl lg:text-2xl text-white/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 inter-font font-light">
            We help ambitious businesses turn digital goals into solutions that work — and keep working. No jargon. No
            delays. Just results.
          </p>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <!-- Primary Button -->
            <button
              class="group px-8 py-4 bg-white text-[#0D6EFD] font-semibold rounded-xl hover:scale-105 hover:shadow-xl transform transition-all duration-300 inter-font text-lg">
              Start Your Project
              <svg class="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                </path>
              </svg>
            </button>

            <!-- Secondary Button -->
            <button
              class="group px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-[#0D6EFD] transform transition-all duration-300 inter-font text-lg">
              Success Stories
              <svg class="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Right Column - Lottie Animation -->
        <div class="flex justify-center lg:justify-end">
          <div class="w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <DotLottieVue class="w-full h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem]" autoplay loop
              src="https://lottie.host/2611cf13-290b-4bf0-a754-78b0849f114e/pXxDlFafiG.lottie" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
</script>

<style scoped>
/* Import Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

.inter-font {
  font-family: 'Inter', sans-serif;
}

/* Custom button hover effects */
button {
  position: relative;
  overflow: hidden;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

button:hover::before {
  left: 100%;
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
    transform: translateY(-10px) rotate(2deg);
  }
}

/* Optional floating animation for background logo */
.absolute img[aria-hidden="true"] {
  animation: float 20s ease-in-out infinite;
}
</style>