<template>
  <main class="relative w-full min-h-screen overflow-hidden bg-white">
    <!-- Content Container -->
    <div class="container mx-auto px-4 md:px-8 lg:px-12 min-h-screen flex items-center">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center w-full py-12 lg:py-0">

        <!-- Left Side - Hero Text Content (3/5 on desktop) -->
        <div class="text-center lg:text-left order-2 lg:order-1 lg:col-span-3 space-y-5 lg:pr-8 lg:pt-16">
          <!-- Headlines with styled "Built Differently" -->
          <div class="space-y-1">
            <h1 class="hero-headline leading-[1.1]">
              <span class="block text-gray-900 text-3xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold">
                Your Tech Advantage.
              </span>
              <span class="relative inline-block mt-1">
                <span class="text-gradient text-3xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold">
                  Built Differently
                </span>
                <!-- Stylish circular accent -->
                <svg class="accent-circle absolute -inset-2 -z-10" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <ellipse cx="100" cy="40" rx="98" ry="38" fill="none" stroke="url(#gradient)" stroke-width="2"
                    opacity="0.3" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#5B21B6;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                </svg>
                <!-- Double angled underline -->
                <svg class="double-underline absolute -bottom-1 left-0 w-full" viewBox="0 0 300 16"
                  preserveAspectRatio="none">
                  <path d="M5,6 Q150,0 295,8" stroke="url(#gradient1)" stroke-width="2.5" fill="none"
                    stroke-linecap="round" />
                  <path d="M0,12 Q150,6 300,14" stroke="url(#gradient2)" stroke-width="2.5" fill="none"
                    stroke-linecap="round" />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#5B21B6;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.6" />
                      <stop offset="100%" style="stop-color:#5B21B6;stop-opacity:0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
          </div>

          <!-- Description -->
          <p
            class="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
            We help businesses move faster, work smarter, and deliver modern digital experiences that stand out.
            From custom web apps to mobile solutions, we build technology that drives real growth.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <!-- Primary CTA - Gradient Button -->
            <NuxtLink to="/contact"
              class="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-base lg:text-lg rounded-xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-purple-500/50">
              <span
                class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span
                class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
              <span class="relative flex items-center gap-2 z-10">
                Start Your Project
                <svg class="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                  </path>
                </svg>
              </span>
            </NuxtLink>

            <!-- Secondary CTA - Outlined with gradient border -->
            <NuxtLink to="/work"
              class="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold text-base lg:text-lg rounded-xl transition-all duration-500 button-gradient-border overflow-hidden">
              <span
                class="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
              <span class="relative flex items-center gap-2 z-10 group-hover:text-white transition-colors duration-500">
                See Our Work
                <svg class="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                  </path>
                </svg>
              </span>
            </NuxtLink>
          </div>

          <!-- Trust Indicator -->
          <div class="pt-4">
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
              background="transparent" speed="1" style="width: 100%; height: 100%;" loop autoplay mode="normal">
            </dotlottie-player>
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
/* Brand gradient colors from logo - Deeper gradient */
.text-gradient {
  background: linear-gradient(135deg, #4C1D95 0%, #2563EB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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

/* Lottie container styling with gradient glow */
.lottie-container {
  filter: drop-shadow(0 10px 40px rgba(91, 33, 182, 0.15));
}

/* Circular accent animation */
.accent-circle {
  opacity: 0;
  animation: fadeInCircle 1.2s ease-out 0.3s forwards;
}

@keyframes fadeInCircle {
  from {
    opacity: 0;
    transform: scale(0.8) rotate(-5deg);
  }

  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* Double underline with draw animation */
.double-underline {
  opacity: 0;
  animation: drawLines 1.2s ease-out 0.6s forwards;
}

@keyframes drawLines {
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

/* Gradient border button effect - Smoother hover */
.button-gradient-border {
  position: relative;
  background: white;
  border: 2px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.button-gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  padding: 2px;
  background: linear-gradient(135deg, #5B21B6, #3B82F6);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  transition: opacity 0.5s ease;
}

.button-gradient-border:hover {
  background: linear-gradient(135deg, #5B21B6, #3B82F6);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(91, 33, 182, 0.4);
}

.button-gradient-border:hover::before {
  opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .hero-headline span {
    font-size: 1.75rem;
  }

  .double-underline {
    height: 12px;
  }
}

@media (min-width: 640px) and (max-width: 1023px) {
  .hero-headline span {
    font-size: 2rem;
  }

  .double-underline {
    height: 14px;
  }
}

@media (min-width: 1024px) {
  .double-underline {
    height: 16px;
  }
}

/* Smooth transitions */
* {
  transition: color 0.3s ease, background-color 0.3s ease;
}
</style>