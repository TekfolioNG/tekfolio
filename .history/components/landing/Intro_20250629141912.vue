<template>
  <!-- Nature-inspired layout with layered sections -->
  <section class="relative overflow-hidden">
    <!-- Background layers -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-green-50 to-[#f0f7e8]"></div>
      <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent z-10"></div>
      <div
        class="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[url('~/assets/images/organic-texture.png')] bg-contain bg-no-repeat bg-right opacity-10">
      </div>
      <!-- Subtle organic shapes -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div class="absolute bottom-32 right-16 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
    </div>

    <!-- Content container with nature-inspired elements -->
    <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 py-20 md:py-28 lg:py-36">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        <!-- Text content -->
        <div class="lg:w-3/5 space-y-8">
          <!-- Mission header with leaf-inspired accent -->
          <div class="space-y-6">
            <div
              class="inline-flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-sm font-semibold text-primary tracking-wide">OUR MISSION</span>
            </div>

            <!-- Main heading with organic feel -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span class="text-primary">Vera Verde</span> means<br>
              <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">True Green</span>
            </h1>
          </div>

          <!-- Mission statement -->
          <div class="space-y-6 text-gray-700">
            <p class="text-lg md:text-xl leading-relaxed font-medium">
              We're on a mission to cut greenhouse gas emissions by turning agricultural waste like
              <span class="font-semibold text-primary">rice husk and sawdust</span> into
              <span class="font-semibold text-secondary">clean-burning briquettes</span> and
              <span class="font-semibold text-primary">biochar</span>.
            </p>

            <p class="text-base md:text-lg leading-relaxed">
              Through ecofuel briquettes and biochar, we help cut emissions and enrich farmlands by
              locking carbon directly into the soil.
            </p>
          </div>

          <!-- Key benefits with enhanced styling -->
          <div class="space-y-4">
            <div class="flex items-start group">
              <div class="flex-shrink-0 mt-2 mr-4">
                <div
                  class="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:scale-110">
                </div>
              </div>
              <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                Our <span class="font-semibold text-primary">briquettes provide a sustainable fuel alternative</span>,
                reducing emissions while delivering reliable energy
              </p>
            </div>

            <div class="flex items-start group">
              <div class="flex-shrink-0 mt-2 mr-4">
                <div
                  class="h-3 w-3 rounded-full bg-gradient-to-r from-secondary to-primary transition-all duration-300 group-hover:scale-110">
                </div>
              </div>
              <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                Our <span class="font-semibold text-secondary">biochar helps sequester carbon in the soil</span>,
                improving farmland, boosting yields, and fighting climate change at the root
              </p>
            </div>

            <div class="flex items-start group">
              <div class="flex-shrink-0 mt-2 mr-4">
                <div
                  class="h-3 w-3 rounded-full bg-gradient-to-r from-accent to-secondary transition-all duration-300 group-hover:scale-110">
                </div>
              </div>
              <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                We're not just reducing carbon; we're building <span class="font-semibold text-primary">better
                  harvests</span>,
                <span class="font-semibold text-secondary">cleaner energy</span>, and
                <span class="font-semibold text-primary">climate-resilient communities</span>
              </p>
            </div>
          </div>

          <!-- Closing statement -->
          <div class="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border-l-4 border-primary">
            <p class="text-base md:text-lg text-gray-800 leading-relaxed font-medium italic">
              With the right partners and support, we aim to scale our work toward certified carbon credits
              and greater environmental impact.
            </p>
          </div>

          <!-- Learn more button with enhanced styling -->
          <div class="pt-4">
            <NuxtLink to="/about-us"
              class="group inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>Learn more about us</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Visual element - enhanced with layered design -->
        <div class="lg:w-2/5 relative">
          <div class="relative">
            <!-- Main visual container -->
            <div
              class="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-green-100 via-white to-accent/10">
              <!-- Placeholder for product showcase -->
              <div class="absolute inset-0 flex items-center justify-center p-8">
                <div class="text-center space-y-6">
                  <!-- Icon representation of the process -->
                  <div class="flex justify-center space-x-4">
                    <!-- Agricultural waste icon -->
                    <div class="flex flex-col items-center">
                      <div class="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <span class="text-xs text-gray-600 font-medium">Agricultural<br>Waste</span>
                    </div>

                    <!-- Arrow -->
                    <div class="flex items-center pt-4">
                      <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </div>

                    <!-- Green products icon -->
                    <div class="flex flex-col items-center">
                      <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        </svg>
                      </div>
                      <span class="text-xs text-gray-600 font-medium">Clean Energy<br>& Biochar</span>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <p class="text-lg font-semibold text-gray-800">From Waste to Worth</p>
                    <p class="text-sm text-gray-600 leading-relaxed">
                      Transforming agricultural byproducts into valuable climate solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Decorative floating elements -->
            <div
              class="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-2xl">
            </div>
            <div
              class="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 blur-xl">
            </div>

            <!-- Small accent dots -->
            <div class="absolute top-8 left-8 w-3 h-3 bg-primary rounded-full opacity-60"></div>
            <div class="absolute bottom-12 right-12 w-2 h-2 bg-accent rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced wave-like divider at bottom -->
    <div class="relative z-20 h-20 w-full overflow-hidden">
      <svg class="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 C300,80 600,40 900,60 C1050,70 1150,50 1200,60 L1200,120 L0,120 Z" fill="#f0f7e8"
          opacity="0.7" />
        <path d="M0,80 C300,100 600,60 900,80 C1050,90 1150,70 1200,80 L1200,120 L0,120 Z" fill="white" />
      </svg>
    </div>
  </section>
</template>

<script setup>
// No stats-related code needed
</script>

<style scoped>
/* Vera Verde brand colors */
.bg-primary {
  background-color: #99cc33;
}

.text-primary {
  color: #99cc33;
}

.bg-secondary {
  background-color: #406112;
}

.text-secondary {
  color: #406112;
}

.bg-secondary-dark {
  background-color: #2f4a0d;
}

.bg-accent {
  background-color: #E6A619;
}

.text-accent {
  color: #E6A619;
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

.to-secondary {
  --tw-gradient-to: #406112;
}

.from-accent {
  --tw-gradient-from: #E6A619;
}

.to-accent {
  --tw-gradient-to: #E6A619;
}

.border-primary {
  border-color: #99cc33;
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

/* Custom shadows */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Enhanced transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.duration-300 {
  transition-duration: 300ms;
}

/* Hover effects */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .lg\:w-3\/5 {
    width: 100%;
  }

  .lg\:w-2\/5 {
    width: 100%;
  }
}
</style>