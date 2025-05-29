<template>
  <section class="py-16 md:py-20 lg:py-16 px-4 bg-white dark:bg-gray-900 relative">


    <div class="container mx-auto max-w-4xl text-center relative">
      <div class="flex justify-center mb-8">
        <div class="h-px w-48 bg-[#009ADA]"></div>
      </div>


      <h3 class="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-1 leading-tight"
        style="font-family: 'Barlow Condensed', sans-serif;">
        Your vision and goals are unique.
      </h3>

    
      <h4 class="text-lg md:text-2xl lg:text-2xl text-gray-600 dark:text-gray-300 font-normal italic mb-10 md:mb-12">
        Why shouldn't your brand's digital products?
      </h4>

      <div class="flex justify-center mb-8">
        <div class="h-px w-48 bg-[#009ADA]"></div>
      </div>

      <!-- Content with adjusted text sizes -->
      <div class="prose prose-lg md:prose-xl lg:prose-lg-1xl dark:prose-invert mx-auto text-gray-900 dark:text-gray-300">
        <p class="text-base md:text-lg lg:text-base leading-relaxed">
          Your organization has outgrown generic WordPress templates and low-code-no-code subscription traps,
          or the patchwork of cobbled-together teams of freelancers that can't quite capture your unique brand identity.
          At Tekfolio, we design and create <strong class="text-[#009ADA]">smart, simple, and secure</strong> software
          and digital solutions
          from the ground up, 100% custom-built to match your vision and satisfy your target audience's needs.
          Fully functional, usable, performance-optimized, and scalable.
        </p>

        <p class="text-base md:text-lg lg:text-base leading-relaxed font-semibold">
          No cookie-cutter clones. No vendor lock-ins. No mismatched, inorganic teams.
          Just digital products that reflect your brand USP and showcase why it's different.
        </p>
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
.prose-lg {
  max-width: 100%;
  font-size: 1.125rem;
  line-height: 1.75;
}

.prose-xl {
  font-size: 1.25rem;
}

.prose p {
  margin-bottom: 1.5em;
}

.prose strong {
  font-weight: 600;
}

/* Smooth transitions */
section {
  transition: background-color 0.3s ease;
}
</style>