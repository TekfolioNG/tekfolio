<template>
  <section class="py-12 md:py-20 px-4 bg-white dark:bg-gray-900">
    <div class="container mx-auto max-w-4xl text-center">
      <!-- Top decorative line - full width -->
      <div class="relative mb-8">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full h-px bg-blue-600"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white dark:bg-gray-900 px-6">
            <h3
              class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-1 leading-tight tracking-tight"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Your vision and goals are unique.
            </h3>
          </span>
        </div>
      </div>

      <!-- Subheading with increased size -->
      <h4 class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-normal italic mb-10 md:mb-14">
        Why shouldn't your brand's digital products?
      </h4>

      <!-- Content with larger text -->
      <div class="prose prose-xl dark:prose-invert mx-auto text-gray-700 dark:text-gray-300">
        <p class="text-lg md:text-xl leading-relaxed">
          Your organization has outgrown generic WordPress templates and low-code-no-code subscription traps,
          or the patchwork of cobbled-together teams of freelancers that can't quite capture your unique brand identity.
        </p>
        <p class="text-lg md:text-xl leading-relaxed">
          At Tekfolio, we design and create <strong class="text-blue-600 dark:text-blue-400">smart, simple, and
            secure</strong> software and digital solutions
          from the ground up, 100% custom-built to match your vision and satisfy your target audience's needs.
          Fully functional, usable, performance-optimized, and scalable.
        </p>
        <p class="text-lg md:text-xl leading-relaxed font-semibold">
          No cookie-cutter clones. No vendor lock-ins. No mismatched, inorganic teams.
          Just digital products that reflect your brand USP and showcase why it's different.
        </p>
      </div>

      <!-- Bottom decorative line - full width -->
      <div class="relative mt-10 md:mt-14">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full h-px bg-blue-600"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white dark:bg-gray-900 px-6">
            <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&display=swap'
    }
  ]
})
</script>

<style scoped>
.prose-xl {
  max-width: 100%;
  font-size: 1.125rem;
  line-height: 1.75;
}

.prose-xl p {
  margin-bottom: 1.5em;
}

.prose-xl strong {
  font-weight: 600;
}

/* Smooth dark mode transition */
section {
  transition: background-color 0.3s ease;
}
</style>