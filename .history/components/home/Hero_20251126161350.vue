<template>
  <main class="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
    <!-- Content Container -->
    <div class="relative z-10 flex items-center py-8 md:py-16 lg:py-20">
      <div class="container mx-auto px-4 md:px-8 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-center">
          <!-- Left Side - Hero Text Content (3/5 width) -->
          <div class="text-center lg:text-left lg:col-span-3 space-y-4 md:space-y-6">
            <!-- Enhanced Headline -->
            <div class="space-y-2 md:space-y-3">
              <h1 class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span class="block">Your Tech Advantage.</span>
                <span class="relative inline-block mt-2">
                  Built Differently
                  <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,10 C100,15 200,5 290,10" stroke="#4D7EFF" stroke-width="4" fill="none"
                      stroke-linecap="round" class="underline-path" />
                  </svg>
                </span>
              </h1>
            </div>

            <!-- Description -->
            <p
              class="text-gray-200 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed font-medium max-w-3xl mx-auto lg:mx-0">
              We help businesses move faster, work smarter, and deliver modern digital experiences that stand out. Our
              work combines clean design and prototyping, efficient engineering, and reliable execution to get you from
              idea to impact quickly.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-4">
              <!-- Primary CTA -->
              <NuxtLink to="/about-us"
                class="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#0246d5] hover:bg-[#0236b5] text-white font-bold text-base md:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                Start a Project
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>

              <!-- Secondary CTA -->
              <NuxtLink to="/contact"
                class="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold text-base md:text-lg rounded-lg transition-all duration-300 shadow-lg">
                See Our Work
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Right Side - Lottie Animation (2/5 width) -->
          <div class="lg:col-span-2 flex items-center justify-center pt-8 lg:pt-0">
            <div class="lottie-container w-full max-w-md lg:max-w-lg">
              <client-only>
                <Vue3Lottie :animationData="animationData" :loop="true" :autoplay="true" class="w-full h-auto" />
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// Import Lottie animation
const animationData = ref(null);

onMounted(async () => {
  try {
    // Fetch the Lottie animation from the CDN
    const response = await fetch('https://lottie.host/1617352f-c57b-4585-8f08-721e4a949c01/IX6yVMPCQM.lottie');
    animationData.value = await response.json();
  } catch (error) {
    console.error('Error loading Lottie animation:', error);
  }
});
</script>

<style scoped>
/* Custom underline animation */
.underline-path {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: drawUnderline 1.5s ease-in-out forwards;
  animation-delay: 0.5s;
}

@keyframes drawUnderline {
  to {
    stroke-dashoffset: 0;
  }
}

/* Enhanced text shadows */
h1 {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Subtle background pattern for brand enhancement */
main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 15% 50%, rgba(77, 126, 255, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 85% 30%, rgba(77, 126, 255, 0.05) 0%, transparent 20%),
    radial-gradient(circle at 50% 80%, rgba(77, 126, 255, 0.08) 0%, transparent 20%);
  z-index: 0;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .lottie-container {
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .lottie-container {
    max-width: 300px;
  }
}

@media (max-width: 640px) {
  .lottie-container {
    max-width: 250px;
  }
}
</style>