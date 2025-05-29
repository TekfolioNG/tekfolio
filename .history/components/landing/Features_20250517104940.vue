<template>
  <section class="py-16 md:py-20 lg:py-16 px-4 bg-white dark:bg-gray-900 relative">

    <div class="container mx-auto max-w-4xl text-center relative">

      <h3 class="text-lg md:text-5xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1 leading-tight"
        style="font-family: 'Barlow Condensed', sans-serif;">
        Your vision and goals are unique
      </h3>

      <h4 class="text-lg md:text-2xl lg:text-2xl text-gray-600 dark:text-gray-300 font-normal italic mb-10 md:mb-12">
        Why shouldn't your brand's digital products?
      </h4>

      <div class="mx-auto text-gray-900 dark:text-gray-300">
        <p class="text-base md:text-lg lg:text-xl leading-relaxed mb-6">
          Your organization has outgrown generic WordPress templates and low-code-no-code subscription traps,
          or the patchwork of cobbled-together teams of freelancers that can't quite capture your unique brand identity.
          At Tekfolio, we design and create <strong class="text-[#009ADA]">smart, simple, and secure</strong> software
          and digital solutions
          from the ground up, 100% custom-built to match your vision and satisfy your target audience's needs.
          Fully functional, usable, performance-optimized, and scalable.
        </p>

        <p class="text-base md:text-lg lg:text-xl leading-relaxed font-semibold">
          No cookie-cutter clones. No vendor lock-ins. No mismatched, inorganic teams.
          Just digital products that reflect your brand USP and showcase why it's different.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '#imports';

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

/* Add subtle pulse animation to decorative elements */
.absolute {
  animation: pulse 4s infinite ease-in-out;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.7;
  }

  50% {
    opacity: 0.9;
  }
}
</style>