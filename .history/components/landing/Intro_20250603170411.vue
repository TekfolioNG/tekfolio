<template>
  <section class="py-16 md:py-20 lg:py-16 px-4 bg-white dark:bg-gray-900 relative">
    <!-- Left decorative line -->
    <div class="absolute left-4 md:left-8 lg:left-16 top-[55%] transform -translate-y-1/2 hidden md:block">
      <img src="/assets/img/decorative-line.svg" alt="Decorative line"
        class="h-35 w-auto decorative-line dark:invert" />
    </div>

    <!-- Right decorative line -->
    <div class="absolute right-4 md:right-8 lg:right-16 top-[55%] transform -translate-y-1/2 hidden md:block">
      <img src="/assets/img/decorative-line.svg" alt="Decorative line"
        class="h-35 w-auto decorative-line dark:invert" />
    </div>

    <div class="container mx-auto max-w-4xl text-center relative">
      <h3 class="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1 leading-tight"
        style="font-family: 'Barlow Condensed', sans-serif;">
        Your vision and goals are unique
      </h3>
      <h4 class="text-lg md:text-2xl lg:text-2xl text-gray-600 dark:text-gray-300 font-normal italic mb-10 md:mb-12">
        Why shouldn't your brand assets?
      </h4>
      <div class="mx-auto text-gray-900 dark:text-gray-300">
        <p class="text-base md:text-lg lg:text-lg leading-relaxed mb-6">
          Your organization has outgrown generic WordPress templates or the patchwork of cobbled-together freelance
          teams
          that never quite capture your brand. And those 'low-code-no-code', subscription-based web or mobile apps?
          <br>No backend. No
          flexibility.
          No
          control. No thanks.</br>
        </p>
        <p class="text-base md:text-lg lg:text-lg leading-relaxed mb-6">
          At <b>Tekfolio</b>, we design and create <strong class="text-[#009ADA]">smart, simple, and secure</strong>
          digital solutions, fully custom, from the ground up — customized to your vision and engineered to scale. No
          cookie-cutter clones. No vendor lock-ins. No Frankenstein teams. Just performant software, built
          by a cohesive in-house team, that reflects
          your brand’s
          unique edge.
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
.decorative-line {
  animation: pulse 4s infinite ease-in-out;
  transition: filter 0.3s ease;

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