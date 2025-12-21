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
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clip-rule="evenodd" />
            </svg>
            <h2 class="text-sm uppercase tracking-wider font-medium text-primary">Our Mission</h2>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Turning <span class="text-primary">agricultural waste</span> into climate solutions
            </h1>
          </div>

          <!-- Mission content -->
          <div class="prose max-w-none text-gray-700 space-y-6">
            <p class="text-lg">
              <span class="font-semibold text-primary">Vera Verde</span> means True Green. We're on a mission to cut
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
              communities. With the right partners and support, we aim to scale our work toward certified carbon credits
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

        <!-- Image/visual section -->
        <div class="lg:w-1/2 relative">
          <div class="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg border-4 border-white bg-white">
            <!-- Placeholder for actual product image -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 to-accent/10 p-8">
              <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto text-primary" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <p class="mt-4 text-lg font-medium text-gray-700">Transforming waste into sustainable solutions</p>
              </div>
            </div>
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