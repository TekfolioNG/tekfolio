<template>
  <!-- Innovative split-layout hero with flowing organic shapes -->
  <section class="relative min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 overflow-hidden">
    <!-- Animated organic background shapes -->
    <div class="absolute inset-0 opacity-10">
      <!-- Floating leaf-like shapes -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-float-slow"></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-accent rounded-full animate-float-medium"></div>
      <div class="absolute bottom-32 left-32 w-20 h-20 bg-secondary rounded-full animate-float-fast"></div>
      <div class="absolute bottom-20 right-16 w-28 h-28 bg-primary rounded-full animate-float-slow"></div>

      <!-- Organic wave pattern -->
      <svg class="absolute bottom-0 left-0 w-full h-64 opacity-20" viewBox="0 0 1200 320" preserveAspectRatio="none">
        <path
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#waveGradient)" />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#99cc33;stop-opacity:0.3" />
            <stop offset="50%" style="stop-color:#E6A619;stop-opacity:0.2" />
            <stop offset="100%" style="stop-color:#406112;stop-opacity:0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 min-h-screen flex items-center">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

        <!-- Left Content Column -->
        <div class="space-y-8 lg:pr-8">
          <!-- Brand Badge -->
          <div
            class="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary/10">
            <div class="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span class="text-sm font-semibold text-secondary tracking-wider">VERA VERDE LIMITED</span>
            <div class="w-8 h-px bg-gradient-to-r from-primary to-accent"></div>
          </div>

          <!-- Main Headline -->
          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span class="text-primary">True Green</span><br>
              <span class="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Solutions
              </span><br>
              <span class="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700">
                for Tomorrow
              </span>
            </h1>

            <div class="w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
          </div>

          <!-- Mission Statement -->
          <div class="space-y-6">
            <p class="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
              Transforming agricultural waste into powerful climate solutions—one briquette at a time.
            </p>

            <p class="text-base md:text-lg text-gray-700 leading-relaxed">
              We turn <span class="font-semibold text-primary">rice husks and sawdust</span> into
              <span class="font-semibold text-secondary">clean-burning briquettes</span> and
              <span class="font-semibold text-primary">carbon-sequestering biochar</span>,
              creating a triple win: cleaner energy, enriched farmlands, and reduced emissions.
            </p>
          </div>

          <!-- CTA Button -->
          <div class="pt-4">
            <NuxtLink to="/about-us"
              class="group inline-flex items-center space-x-3 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>Learn more about us</span>
              <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                </path>
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Visual Column -->
        <div class="lg:pl-8 space-y-6">
          <!-- Feature Cards Grid -->
          <div class="grid grid-cols-1 gap-6">

            <!-- Briquettes Card -->
            <div
              class="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
              <div class="flex items-start space-x-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z">
                    </path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Clean-Burning Briquettes</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    Eco-friendly fuel alternatives that burn cleaner and longer than traditional charcoal,
                    reducing harmful emissions while providing reliable energy.
                  </p>
                </div>
              </div>
            </div>

            <!-- Biochar Card -->
            <div
              class="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-secondary/10 hover:border-secondary/30 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
              <div class="flex items-start space-x-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                  <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                    </path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Carbon-Sequestering Biochar</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    Soil enhancement that locks carbon underground while boosting crop yields
                    and building climate resilience for farming communities.
                  </p>
                </div>
              </div>
            </div>

            <!-- Impact Card -->
            <div
              class="group bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
              <div class="flex items-start space-x-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                  <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064">
                    </path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Climate Impact</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    Building pathways to certified carbon credits while creating
                    sustainable livelihoods and climate-resilient communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No stats-related code needed for this design
</script>

<style scoped>
/* Vera Verde color system */
.bg-primary {
  background-color: #99cc33;
}

.text-primary {
  color: #99cc33;
}

.border-primary {
  border-color: #99cc33;
}

.bg-secondary {
  background-color: #406112;
}

.text-secondary {
  color: #406112;
}

.bg-secondary-dark {
  background-color: #2d450c;
}

.bg-accent {
  background-color: #E6A619;
}

.text-accent {
  color: #E6A619;
}

.border-accent {
  border-color: #E6A619;
}

.from-primary {
  --tw-gradient-from: #99cc33;
}

.to-primary {
  --tw-gradient-to: #99cc33;
}

.from-secondary {
  --tw-gradient-from: #406112;
}

.from-accent {
  --tw-gradient-from: #E6A619;
}

.to-accent {
  --tw-gradient-to: #E6A619;
}

/* Custom animations */
@keyframes float-slow {

  0%,
  100% {
    transform: translate(0, 0px) rotate(0deg);
  }

  33% {
    transform: translate(30px, -20px) rotate(2deg);
  }

  66% {
    transform: translate(-20px, 10px) rotate(-1deg);
  }
}

@keyframes float-medium {

  0%,
  100% {
    transform: translate(0, 0px) rotate(0deg);
  }

  50% {
    transform: translate(-25px, -15px) rotate(3deg);
  }
}

@keyframes float-fast {

  0%,
  100% {
    transform: translate(0, 0px) rotate(0deg);
  }

  25% {
    transform: translate(15px, -10px) rotate(1deg);
  }

  75% {
    transform: translate(-10px, 5px) rotate(-2deg);
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}

/* Backdrop blur support */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Gradient text */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Enhanced hover effects */
.group:hover .group-hover\:bg-primary\/20 {
  background-color: rgba(153, 204, 51, 0.2);
}

.group:hover .group-hover\:bg-secondary\/20 {
  background-color: rgba(64, 97, 18, 0.2);
}

.group:hover .group-hover\:bg-accent\/30 {
  background-color: rgba(230, 166, 25, 0.3);
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .min-h-screen {
    min-height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}
</style>