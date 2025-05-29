<template>
  <section class="py-16 md:py-20 lg:py-16 px-4 bg-white dark:bg-gray-900 relative">
    <!-- Left decorative element -->
    <div class="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <div class="h-24 w-1 bg-[#009ADA]"></div>
      <div class="h-1 w-24 bg-[#009ADA] ml-[-23px]"></div>
    </div>

    <!-- Right decorative element -->
    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <div class="h-24 w-1 bg-[#009ADA]"></div>
      <div class="h-1 w-24 bg-[#009ADA]"></div>
    </div>

    <div class="container mx-auto max-w-4xl text-center relative">
      <!-- Top line -->
      <div class="flex justify-center mb-8">
        <div class="h-[2px] w-48 bg-[#009ADA]"></div>
      </div>

      <!-- Heading with increased lg size -->
      <h3 class="text-2xl md:text-4xl lg:text-[3.5rem] font-bold text-gray-900 dark:text-white mb-1 leading-tight"
        style="font-family: 'Barlow Condensed', sans-serif;">
        Your vision and goals are unique
      </h3>

      <!-- Subheading with increased lg size -->
      <h4 class="text-lg md:text-2xl lg:text-[2rem] text-gray-600 dark:text-gray-300 font-normal italic mb-10 md:mb-12">
        Why shouldn't your brand's digital products?
      </h4>

      <!-- Bottom line -->
      <div class="flex justify-center mb-10">
        <div class="h-[2px] w-48 bg-[#009ADA]"></div>
      </div>

      <!-- Content with increased lg size -->
      <div class="mx-auto text-gray-900 dark:text-gray-300 text-base md:text-lg lg:text-[1.35rem] leading-relaxed">
        <p class="mb-6">
          Your organization has outgrown generic WordPress templates and low-code-no-code subscription traps,
          or the patchwork of cobbled-together teams of freelancers that can't quite capture your unique brand identity.
          At Tekfolio, we design and create <strong class="text-[#009ADA] font-semibold">smart, simple, and
            secure</strong> software
          and digital solutions from the ground up, 100% custom-built to match your vision and satisfy your target
          audience's needs.
          Fully functional, usable, performance-optimized, and scalable.
        </p>

        <p class="font-semibold">
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
/* Custom decorative elements */
section {
  transition: background-color 0.3s ease;
}

/* Ensure proper spacing for larger text */
@media (min-width: 1024px) {
  .lg\:text-\[3\.5rem\] {
    line-height: 1.1;
  }

  .lg\:text-\[2rem\] {
    line-height: 1.2;
  }

  .lg\:text-\[1\.35rem\] {
    line-height: 1.7;
  }
}
</style>