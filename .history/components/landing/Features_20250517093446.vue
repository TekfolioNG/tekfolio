<template>
  <section class="py-12 md:py-20 px-4 bg-white dark:bg-gray-900">
    <div class="container mx-auto max-w-4xl text-center">
      <!-- Content wrapper -->
      <div class="max-w-3xl mx-auto">
        <!-- Top decorative line - extended to match text width -->
        <div class="flex justify-center mb-8">
          <div class="h-0.5 w-full bg-blue-600"></div>
        </div>

        <!-- Heading -->
        <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight"
          style="font-family: 'Barlow Condensed', sans-serif;">
          Your vision and goals are unique.
        </h3>

        <!-- Subheading -->
        <h4 class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-normal italic mb-6">
          Why shouldn't your brand's digital products?
        </h4>

        <!-- Bottom decorative line after heading section - extended to match text width -->
        <div class="flex justify-center mb-10">
          <div class="h-0.5 w-full bg-blue-600"></div>
        </div>

        <!-- Content with improved spacing and readability -->
        <div class="prose prose-lg dark:prose-invert mx-auto text-gray-700 dark:text-gray-300">
          <p class="text-lg md:text-xl mb-6">
            Your organization has outgrown generic WordPress templates and low-code-no-code subscription traps,
            or the patchwork of cobbled-together teams of freelancers that can't quite capture your unique brand
            identity.
          </p>
          <p class="text-lg md:text-xl mb-6">
            At Tekfolio, we design and create <strong class="text-blue-700 dark:text-blue-400">smart, simple, and
              secure</strong> software and digital solutions
            from the ground up, 100% custom-built to match your vision and satisfy your target audience's needs.
            Fully functional, usable, performance-optimized, and scalable.
          </p>
          <p class="text-lg md:text-xl font-semibold">
            No cookie-cutter clones. No vendor lock-ins. No mismatched, inorganic teams.
            Just digital products that reflect your brand USP and showcase why it's different.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import Barlow Condensed font if not already loaded globally
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
  margin-bottom: 1.5em;
  line-height: 1.7;
}

.prose strong {
  color: inherit;
  font-weight: 700;
}

/* Add subtle fade-in animation for visual appeal */
section {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>