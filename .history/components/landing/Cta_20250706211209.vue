<template>
  <!-- CTA Section -->
  <section class="relative bg-[#1a3a0a] overflow-hidden">
    <div class="container mx-auto px-4 py-16 md:py-24">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Image Column -->
        <div class="lg:w-1/2">
          <img src="~/assets/img/veraverde-cta.png" alt="Vera Verde Sustainable Agriculture"
            class="rounded-2xl shadow-xl w-full h-auto max-h-[400px] object-cover">
        </div>

        <!-- Content Column -->
        <div class="lg:w-1/2 text-center lg:text-left">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Sustainable Revolution
          </h2>
          <p class="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
            Become part of the movement transforming agriculture in Africa. Whether you're a farmer, investor, or
            eco-conscious consumer, we have opportunities for you.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <NuxtLink to="/contact"
              class="px-8 py-3 bg-[#a0d468] text-[#1a3a0a] font-bold rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center">
              <Icon name="heroicons:envelope" class="w-5 h-5 mr-2" />
              Contact Us
            </NuxtLink>
            <NuxtLink to="/get-involved"
              class="px-8 py-3 bg-transparent text-white border-2 border-white font-bold rounded-lg hover:bg-white hover:text-[#1a3a0a] transition-colors duration-300 flex items-center justify-center">
              <Icon name="heroicons:hand-raised" class="w-5 h-5 mr-2" />
              Get Involved
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#2a4a1a] to-transparent z-10"></div>
  </section>
</template>

<style scoped>
/* Optional: Add a subtle pulse animation to the primary button */
.hover-pulse:hover {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}
</style>