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
    </div>

    <!-- Content container with nature-inspired elements -->
    <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 py-20 md:py-28 lg:py-36">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Text content -->
        <div class="lg:w-1/2 space-y-8">
          <!-- Tagline with leaf-inspired accent -->
          <div class="inline-flex items-center gap-3 px-4 py-2 bg-green-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-medium text-primary">TRUE GREEN SOLUTIONS</span>
          </div>

          <!-- Main heading with organic feel -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Transforming <span class="text-primary">agricultural waste</span> into climate solutions
          </h1>

          <!-- Content with nature-inspired bullet points -->
          <div class="space-y-6 text-gray-700">
            <p class="text-lg">
              Vera Verde means <span class="font-semibold text-primary">True Green</span>. We're pioneering sustainable
              solutions by converting rice husk, sawdust, and other agricultural byproducts into clean-burning
              briquettes and soil-enriching biochar.
            </p>

            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="h-2 w-2 rounded-full bg-accent"></div>
                </div>
                <p class="ml-3">Our <span class="font-semibold">ecofuel briquettes</span> provide sustainable energy
                  alternatives that reduce emissions</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="h-2 w-2 rounded-full bg-accent"></div>
                </div>
                <p class="ml-3">Our <span class="font-semibold">biochar</span> sequesters carbon while improving soil
                  health and crop yields</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="h-2 w-2 rounded-full bg-accent"></div>
                </div>
                <p class="ml-3">We're building <span class="font-semibold">climate-resilient communities</span> through
                  circular economy solutions</p>
              </li>
            </ul>
          </div>

          <!-- Learn more button with nature-inspired hover effect -->
          <div>
            <NuxtLink to="/about-us"
              class="group inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>Learn more about us</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Visual element - could be replaced with actual image -->
        <div class="lg:w-1/2 relative">
          <div
            class="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-green-100 to-accent/20">
            <!-- Placeholder for product image - use actual image in production -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 mx-auto text-primary" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p class="mt-4 text-lg font-medium text-gray-700">Agricultural waste to valuable products</p>
              </div>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-accent/30 blur-xl"></div>
            <div class="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-primary/20 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave-like divider at bottom -->
    <div class="relative z-20 h-16 w-full overflow-hidden">
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-green-50 transform skew-y-2 origin-top-left"></div>
    </div>
  </section>
</template>

<script setup>
// No stats-related code needed
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

.text-accent {
  color: #E6A619;
}

/* Custom shadows */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Animation for the button icon */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>