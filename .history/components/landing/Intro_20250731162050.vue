<template>
  <!-- Professional services overview section -->
  <section class="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
    <!-- Subtle background elements -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div class="absolute top-1/4 left-1/5 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div class="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-500/15 blur-2xl"></div>
    </div>

    <!-- Main content container -->
    <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 py-16 md:py-24 lg:py-32">

      <!-- Section header -->
      <div class="text-center mb-12 md:mb-16">
        <div class="flex items-center justify-center mb-6">
          <div class="w-12 h-0.5 bg-[#D2691E] mr-4 hidden md:block"></div>
          <span class="text-base uppercase tracking-wider font-medium text-gray-700">
            Your One-Stop Service Partner
          </span>
          <div class="w-12 h-0.5 bg-[#D2691E] ml-4 hidden md:block"></div>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to <span class="text-[#D2691E]">BOT</span> Integrated Services
        </h2>

        <div class="max-w-4xl mx-auto space-y-4 text-gray-600">
          <p class="text-lg md:text-xl leading-relaxed">
            We are a multi-sector service company offering efficient, customer-centered solutions across
            <span class="font-semibold text-gray-800">travel, real estate, road transport booking, and oil & gas
              supply.</span>
          </p>
          <p class="text-base md:text-lg">
            With a focus on convenience and reliability, we bring everyday services under one roof —
            saving you time, stress, and money.
          </p>
          <p class="text-base md:text-lg font-medium text-gray-800">
            Whether you're booking a local trip, sealing a property deal, or sourcing fuel for your business,
            BOT is your trusted partner for smooth, professional service delivery.
          </p>
        </div>
      </div>

      <!-- Service highlights grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">

        <!-- Travel & Ticketing -->
        <div
          class="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
          <div class="flex flex-col items-center text-center space-y-4">
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Travel & Ticketing</h3>
              <p class="text-sm text-gray-600 leading-relaxed">
                Domestic and international flight bookings made simple.
              </p>
            </div>
            <NuxtLink to="/travel"
              class="text-[#D2691E] font-medium text-sm hover:text-[#B8591A] transition-colors duration-200 flex items-center">
              Learn More
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Land & Property Deals -->
        <div
          class="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
          <div class="flex flex-col items-center text-center space-y-4">
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Land & Property Deals</h3>
              <p class="text-sm text-gray-600 leading-relaxed">
                Buy, lease, or invest in properties across Nigeria.
              </p>
            </div>
            <NuxtLink to="/properties"
              class="text-[#D2691E] font-medium text-sm hover:text-[#B8591A] transition-colors duration-200 flex items-center">
              Learn More
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Road Travel Booking -->
        <div
          class="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
          <div class="flex flex-col items-center text-center space-y-4">
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 112 4h4.5M8 7H6a2 2 0 000 4m0 0v8a2 2 0 002 2h8a2 2 0 002-2v-6" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Road Travel Booking</h3>
              <p class="text-sm text-gray-600 leading-relaxed">
                Book interstate buses and car rentals easily.
              </p>
            </div>
            <NuxtLink to="/travel"
              class="text-[#D2691E] font-medium text-sm hover:text-[#B8591A] transition-colors duration-200 flex items-center">
              Learn More
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Oil & Gas Supply -->
        <div
          class="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
          <div class="flex flex-col items-center text-center space-y-4">
            <div
              class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Oil & Gas Supply</h3>
              <p class="text-sm text-gray-600 leading-relaxed">
                Safe and fast delivery of LPG and petroleum products.
              </p>
            </div>
            <NuxtLink to="/oil-gas"
              class="text-[#D2691E] font-medium text-sm hover:text-[#B8591A] transition-colors duration-200 flex items-center">
              Learn More
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>

      </div>

      <!-- Call to action -->
      <div class="text-center">
        <div
          class="bg-gradient-to-r from-[#D2691E]/10 to-[#D2691E]/5 rounded-3xl p-8 md:p-12 border border-[#D2691E]/20">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Need something done? Let's get it sorted fast. Our team is ready to provide you with efficient,
            professional service across all our sectors.
          </p>
          <NuxtLink to="/contact"
            class="inline-flex items-center px-8 py-4 bg-[#D2691E] text-white text-lg font-semibold rounded-xl hover:bg-[#B8591A] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
            <span>Request a Service</span>
            <svg class="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// No additional script needed for this component
</script>

<style scoped>
/* Smooth transitions for all interactive elements */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>