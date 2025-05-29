<template>
  <section class="py-16 md:py-24 px-4 bg-white dark:bg-gray-900">
    <div class="container mx-auto max-w-3xl text-center">

      <div class="flex justify-center mb-6">
        <div class="h-px w-28 bg[#0C62AE]"></div>
      </div>

      <!-- Heading -->
      <h3 class="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-1 leading-tight"
        style="font-family: 'Barlow Condensed', sans-serif;">
        Your vision and goals are unique.
      </h3>

      <!-- Subheading -->
      <h4 class="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-normal italic mb-12">
        Why shouldn't your brand's digital products?
      </h4>

      <div class="flex justify-center mb-6">
        <div class="h-px w-28 bg[#0C62AE]"></div>
      </div>

      <!-- Content -->
      <div class="prose prose-lg lg:text-xl dark:prose-invert mx-auto text-gray-700 dark:text-gray-300">
        <p>
          Your organization has outgrown generic WordPress templates and low-code-no-code subscription traps,
          or the patchwork of cobbled-together teams of freelancers that can't quite capture your unique brand identity.
        </p>
        <p>
          At Tekfolio, we design and create <strong>smart, simple, and secure</strong> software and digital solutions
          from the ground up, 100% custom-built to match your vision and satisfy your target audience's needs.
          Fully functional, usable, performance-optimized, and scalable.
        </p>
        <p class="font-semibold">
          No cookie-cutter clones. No vendor lock-ins. No mismatched, inorganic teams.
          Just digital products that reflect your brand USP and showcase why it's different.
        </p>
      </div>

      <!-- Bottom decorative line -->
      <div class="flex justify-center mt-12">
        <div class="h-px w-32 bg-[#0C62AE]"></div>
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
.prose {
  max-width: 100%;
}

.prose p {
  margin-bottom: 1.25em;
}

.prose strong {
  color: inherit;
}
</style>