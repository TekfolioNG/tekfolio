<script setup>
// Page meta configuration
definePageMeta({
  layout: "landing"
})

useHead({
  title: 'Car Rentals | BOT Integrated Services',
  meta: [
    { property: 'og:title', content: 'Car Rentals | BOT Integrated Services' },
    { property: 'og:description', content: 'Safe, secure, and fast car rental solutions for travel into and out of Lagos. Professional drivers, wide range of vehicles.' },
    { property: 'og:image', content: '/car-rental-og.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Car Rentals - BOT Integrated' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Car Rentals | BOT Integrated Services' },
    { name: 'twitter:description', content: 'Safe, secure, and fast car rental solutions for every journey.' },
    { name: 'twitter:image', content: '/car-rental-og.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://botintegrated.com/car-rentals' }
  ],
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gray-900">
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#F4A460]/20 to-amber-300/20">
        </div>
        <div
          class="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#D2691E]/20 to-orange-400/20">
        </div>
      </div>

      <div class="relative container mx-auto px-8 lg:px-16 xl:px-20 2xl:px-32">
        <div class="max-w-4xl mx-auto text-center">
          <div
            class="inline-flex items-center px-4 py-2 bg-[#F4A460]/20 rounded-full text-[#F4A460] font-medium text-sm mb-6">
            <span class="w-2 h-2 bg-[#F4A460] rounded-full mr-2"></span>
            Car Rentals
          </div>

          <h1 class="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Safe, Secure, and
            <span class="relative">
              <span class="text-[#F4A460]">Fast Rentals</span>
              <svg class="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 5 100 2 198 8" stroke="#F4A460" stroke-width="3" stroke-linecap="round" fill="none" />
              </svg>
            </span>
            <br>for Every Journey
          </h1>

          <p class="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            BOT Integrated Services provides accessible and affordable car hire solutions for travel
            <strong>into and out of Lagos</strong>. We serve individuals, couples, families, and groups who need
            dependable transportation for business meetings, special events, leisure trips, or family visits. Our focus
            is on safety, comfort, and speed — so you can arrive on time, every time.
          </p>

          <NuxtLink to="/contact"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Rent a Car Today
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Wide Range of Vehicles -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                Wide Range of Vehicles
              </h2>
              <p class="text-lg text-gray-900 dark:text-gray-300">
                Our fleet includes comfortable sedans, versatile hatchbacks, spacious multi-purpose vehicles, and buses
                for larger groups. Each option is clean, regularly serviced, and inspected before every trip to ensure
                reliability and safety.
              </p>
              <NuxtLink to="/contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                View Our Fleet
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </NuxtLink>
            </div>
            <div class="relative">
              <img src="assets/img/car-rental-bot.png" alt="Wide Range of Vehicles"
                class="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Inbound & Outbound Lagos Travel -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="lg:order-2 space-y-6">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                Inbound & Outbound Lagos Travel
              </h2>
              <p class="text-lg text-gray-900 dark:text-gray-300">
                We cover trips across Lagos as well as interstate journeys to destinations like Ibadan, Abuja, Port
                Harcourt, Enugu, Jos, Akure, Kaduna, Kano, and more. Whether you're arriving for an important business
                appointment, heading to a wedding, or embarking on a weekend getaway, we ensure a smooth travel
                experience.
              </p>
              <NuxtLink to="/contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Plan Your Trip
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </NuxtLink>
            </div>
            <div class="lg:order-1 relative">
              <img src="assets/img/car-rental-bot2.png" alt="Inbound & Outbound Lagos Travel"
                class="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Drivers -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                Professional Drivers (Optional)
              </h2>
              <p class="text-lg text-gray-900 dark:text-gray-300">
                Our trained drivers are familiar with Lagos traffic patterns and interstate routes. They are punctual,
                courteous, and committed to keeping your journey safe and comfortable, allowing you to focus on what
                matters.
              </p>
              <NuxtLink to="/contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Book with Driver
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </NuxtLink>
            </div>
            <div class="relative">
              <img src="assets/img/car-rental-bot3.png" alt="Professional Drivers"
                class="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose BOT Car Rentals -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Why Choose BOT Car Rentals?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div
                class="w-12 h-12 bg-gradient-to-r from-[#D2691E] to-amber-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Safe & Secure</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">Transportation for solo, couple, or group travel with
                top-notch safety standards</p>
            </div>

            <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div
                class="w-12 h-12 bg-gradient-to-r from-[#D2691E] to-amber-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z">
                  </path>
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Affordable Rates</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">Competitive pricing with no hidden costs for
                transparent budgeting</p>
            </div>

            <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div
                class="w-12 h-12 bg-gradient-to-r from-[#D2691E] to-amber-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Various Vehicle Options</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">Sedans, hatchbacks, and spacious Siennas for different
                group sizes</p>
            </div>

            <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div
                class="w-12 h-12 bg-gradient-to-r from-[#D2691E] to-amber-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fast Booking</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">Quick reservations via phone, WhatsApp, or email
                support</p>
            </div>

            <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div
                class="w-12 h-12 bg-gradient-to-r from-[#D2691E] to-amber-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Inspected & Sanitized</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">Vehicles thoroughly inspected and sanitized before
                every hire</p>
            </div>

            <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div
                class="w-12 h-12 bg-gradient-to-r from-[#D2691E] to-amber-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                  </path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">Round-the-clock customer service for all your rental
                needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <LandingCta />

  </div>
</template>

<style scoped>
/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .text-5xl {
    font-size: 2.5rem;
    line-height: 1.1;
  }

  .text-6xl {
    font-size: 3rem;
    line-height: 1.1;
  }
}
</style>