<template>
  <!-- Clean, nature-inspired layout -->
  <section class="relative bg-gradient-to-br from-green-50 to-white overflow-hidden">
    <!-- Subtle background elements -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-accent/20 blur-2xl"></div>
    </div>

    <!-- Main content container -->
    <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 py-16 md:py-24 lg:py-32">
      <div class="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
        <!-- Text content -->
        <div class="lg:w-1/2 space-y-8">
          <!-- Mission header -->
          <div class="space-y-2">
            <h2 class="text-sm uppercase tracking-wider font-medium text-primary">Our Mission</h2>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Turning <span class="text-primary">agricultural waste</span> into climate solutions
            </h1>
          </div>

          <!-- Mission content -->
          <div class="prose max-w-none text-gray-700 space-y-6">
            <p class="text-lg">
              At <span class="font-semibold text-primary">Vera Verde</span>, we're on a mission to cut
              greenhouse gas emissions by turning agricultural waste like rice husk and sawdust into clean-burning
              briquettes and biochar.
            </p>

            <p>
              Through <span class="font-semibold">ecofuel briquettes</span> and <span
                class="font-semibold">Biochar</span>, we help cut emissions and enrich farmlands by locking carbon
              directly into the soil. Our briquettes provide a sustainable fuel alternative, while our biochar helps
              sequester carbon in the soil, improving farmland, boosting yields, and fighting climate change at the
              root.
            </p>

            <p>
              We're not just reducing carbon; we're building better harvests, cleaner energy, and climate-resilient
              communities.
            </p>
          </div>
          <div class="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border-l-4 border-[#406112]">
            <p class="text-base md:text-lg text-gray-800 leading-relaxed font-medium italic">
              With the right partners and support, we aim to scale our work toward certified carbon
              credits
              and greater environmental impact.
            </p>
          </div>

          <!-- Learn more button -->
          <div class="pt-4">
            <NuxtLink to="/about-us"
              class="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300 group">
              <span>Learn more about us</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20"
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
                      <span class="text-xs text-gray-600 font-medium">Clean Energy<br>&
                        Biochar</span>
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
  </section>
</template>

<script setup>
// No additional script needed
</script>

<style scoped>
/* Brand colors */
.bg-primary {
  background-color: #406112;
}

.text-primary {
  color: #406112;
}

.bg-primary-dark {
  background-color: #2f4a0d;
}

.bg-accent {
  background-color: #E6A619;
}

/* Smooth transitions */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Prose content styling */
.prose {
  color: #374151;
}

.prose p {
  margin-bottom: 1.25em;
  line-height: 1.625;
}

.prose p:last-child {
  margin-bottom: 0;
}
</style>