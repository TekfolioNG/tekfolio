<template>
  <!-- CTA Section -->
  <section class="relative bg-gradient-to-br from-orange-50 to-amber-50 py-16 md:py-24 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D2691E%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
      </div>
    </div>

    <!-- Floating Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#D2691E]/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
      <div class="max-w-5xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">

          <!-- Left Column: Content -->
          <div class="text-center lg:text-left">
            <!-- Badge -->
            <div
              class="inline-flex items-center px-4 py-2 bg-[#D2691E]/20 backdrop-blur-sm rounded-full text-[#B8591A] text-sm font-medium mb-6">
              <Icon name="heroicons:rocket-launch" class="w-4 h-4 mr-2" />
              Ready to Get Started?
            </div>

            <!-- Heading -->
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Your One-Stop Solution for
              <span class="text-[#D2691E]">All Essential Services</span>
            </h2>

            <!-- Description -->
            <p class="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Stop juggling multiple providers. Whether you need to book a flight, secure property, or fuel your
              business,
              BOT makes it simple with reliable service and transparent pricing.
            </p>

            <!-- CTA Button -->
            <div class="flex justify-center lg:justify-start">
              <NuxtLink to="/contact"
                class="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#D2691E] font-semibold rounded-lg shadow-lg hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Icon name="heroicons:phone" class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get a Quote
                <Icon name="heroicons:arrow-right"
                  class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>

            <!-- Trust Indicators -->
            <div class="mt-8 pt-8 border-t border-[#D2691E]/20">
              <div class="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-900">
                <div class="flex items-center">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-[#D2691E] mr-2" />
                  <span class="text-sm">24/7 Support</span>
                </div>
                <div class="flex items-center">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-[#D2691E] mr-2" />
                  <span class="text-sm">Fair Pricing</span>
                </div>
                <div class="flex items-center">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-[#D2691E] mr-2" />
                  <span class="text-sm">Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Image -->
          <div class="relative flex justify-center lg:justify-start">
            <div class="relative group max-w-lg lg:max-w-2xl xl:max-w-2xl">
              <!-- Main Image -->
              <div class="relative">
                <img src="~/assets/img/cta-bot.png" alt="BOT Integrated Services - Your Trusted Partner"
                  class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
              </div>

              <!-- Floating Elements -->
              <div
                class="absolute -top-6 -right-6 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Icon name="heroicons:star" class="w-6 h-6 text-[#D2691E]" />
              </div>

              <div
                class="absolute -bottom-6 -left-6 w-16 h-16 bg-[#D2691E]/90 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Icon name="heroicons:bolt" class="w-8 h-8 text-white" />
              </div>

              <!-- Additional floating service icons -->
              <div
                class="absolute top-1/4 -left-8 w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center shadow-md animate-float hidden md:flex">
                <Icon name="heroicons:globe-americas" class="w-5 h-5 text-[#D2691E]" />
              </div>

              <div
                class="absolute bottom-1/3 -right-8 w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center shadow-md animate-float hidden md:flex"
                style="animation-delay: 1s;">
                <Icon name="heroicons:home-modern" class="w-5 h-5 text-[#D2691E]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
/* Custom animations */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Smooth transitions */
.transition-all {
  transition: all 0.3s ease-in-out;
}

/* Custom gradient text */
.text-gradient {
  background: linear-gradient(135deg, #D2691E 0%, #B8591A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

.group:hover .group-hover\:rotate-12 {
  transform: rotate(12deg);
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>