<template>
  <main class="relative w-full min-h-screen overflow-hidden bg-white">
    <!-- Content Container -->
    <div class="container mx-auto px-4 md:px-8 lg:px-12 min-h-screen flex items-center">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center w-full py-12 lg:py-0">

        <!-- Left Side - Hero Text Content (3/5 on desktop) -->
        <div class="text-center lg:text-left order-2 lg:order-1 lg:col-span-3 space-y-6 lg:pr-8">
          <!-- Headlines with styled "Built Differently" -->
          <div class="space-y-3">
            <h1 class="hero-headline">
              <span class="block text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Tech Advantage.
              </span>
              <span class="relative inline-block mt-2">
                <span class="text-brand-blue text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Built Differently
                </span>
                <!-- Stylish angled underline -->
                <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0,8 Q150,2 300,6" stroke="#1E5EFF" stroke-width="4" fill="none" stroke-linecap="round" />
                </svg>
              </span>
            </h1>
          </div>

          <!-- Description -->
          <p
            class="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
            We help businesses move faster, work smarter, and deliver modern digital experiences that stand out.
            From custom web apps to mobile solutions, we build technology that drives real growth.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <!-- Primary CTA -->
            <NuxtLink to="/contact"
              class="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base lg:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Start Your Project
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                </path>
              </svg>
            </NuxtLink>

            <!-- Secondary CTA -->
            <NuxtLink to="/work"
              class="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-semibold text-base lg:text-lg rounded-lg transition-all duration-300">
              See Our Work
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                </path>
              </svg>
            </NuxtLink>
          </div>

          <!-- Trust Indicator -->
          <div class="pt-6">
            <p class="text-gray-500 text-sm md:text-base font-medium">
              Trusted by businesses across Nigeria and beyond
            </p>
          </div>
        </div>

        <!-- Right Side - Lottie Animation (2/5 on desktop) -->
        <div
          class="relative h-[300px] sm:h-[400px] lg:h-[500px] order-1 lg:order-2 lg:col-span-2 flex items-center justify-center">
          <div class="lottie-container w-full h-full flex items-center justify-center">
            <dotlottie-player src="https://lottie.host/1617352f-c57b-4585-8f08-721e4a949c01/IX6yVMPCQM.lottie"
              background="transparent" speed="0.6" style="width: 100%; height: 100%;" loop autoplay></dotlottie-player>
          </div>
        </div>

      </div>
    </div>

    <!-- Subtle gradient overlay at bottom for depth -->
    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none">
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Load Lottie player script
  if (!document.querySelector('script[src*="dotlottie-player"]')) {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.head.appendChild(script);
  }
});
</script>

<style scoped>
/* Brand Colors */
.text-brand-blue {
  color: #1E5EFF;
}

.bg-brand-blue {
  background-color: #1E5EFF;
}

.bg-brand-blue-dark {
  background-color: #1650E0;
}

/* Hero headline animation */
.hero-headline {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Lottie container styling */
.lottie-container {
  filter: drop-shadow(0 10px 40px rgba(30, 94, 255, 0.1));
}

/* Enhance the SVG underline with subtle animation */
.relative svg {
  opacity: 0;
  animation: drawLine 1s ease-out 0.5s forwards;
}

@keyframes drawLine {
  from {
    opacity: 0;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }

  to {
    opacity: 1;
    stroke-dasharray: 300;
    stroke-dashoffset: 0;
  }
}

/* Button hover effects enhancement */
.group:hover svg {
  transform: translateX(4px);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .hero-headline span {
    font-size: 2rem;
  }

  .relative svg {
    height: 8px;
  }
}

@media (min-width: 640px) and (max-width: 1023px) {
  .hero-headline span {
    font-size: 2.5rem;
  }

  .relative svg {
    height: 10px;
  }
}

@media (min-width: 1024px) {
  .relative svg {
    height: 12px;
  }
}

/* Smooth transitions */
* {
  transition: color 0.3s ease, background-color 0.3s ease;
}
</style>