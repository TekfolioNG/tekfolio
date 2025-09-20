<script setup>
// Page meta configuration
definePageMeta({
    layout: "home"
})

useHead({
    title: 'Travel Services | BOT Integrated Services',
    meta: [
        { property: 'og:title', content: 'Travel Services | BOT Integrated Services' },
        { property: 'og:description', content: 'Complete travel solutions including flight booking, hotel reservations, tours, car rentals, and travel insurance.' },
        { property: 'og:image', content: '/travel-og.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Travel Services - BOT Integrated' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Travel Services | BOT Integrated Services' },
        { name: 'twitter:description', content: 'Complete travel solutions for all your journey needs.' },
        { name: 'twitter:image', content: '/travel-og.jpg' }
    ],
    link: [
        { rel: 'canonical', href: 'https://botintegrated.com/travel' }
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
                        Travel Services
                    </div>

                    <h1 class="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Your Journey,
                        <span class="relative">
                            <span class="text-[#F4A460]">Made Easy</span>
                            <svg class="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                                <path d="M2 10C50 5 100 2 198 8" stroke="#F4A460" stroke-width="3"
                                    stroke-linecap="round" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p class="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                        Whether you're planning a business trip, a dream vacation, or a quick city escape, BOT
                        Integrated Services handles the details so you can focus on the experience. We take the stress
                        out of travel by offering a complete range of services — from flight booking to hotel stays and
                        car rentals — all in one place.
                    </p>

                    <NuxtLink to="/contact"
                        class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        Get Started Today
                        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Flight Ticketing -->
        <section class="py-20">
            <div class="container mx-auto px-6">
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-6">
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                                Flight Ticketing
                            </h2>
                            <p class="text-lg text-gray-900 dark:text-gray-300">
                                We help you book the best local and international flights at competitive rates. Whether
                                it's a last-minute trip or a long-term travel plan, we'll find the right options that
                                suit your time and budget.
                            </p>
                            <NuxtLink to="/contact"
                                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                                Book Your Flight
                                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </NuxtLink>
                        </div>
                        <div class="relative">
                            <img src="assets/img/flight-ticket-bot.png" alt="Flight Ticketing"
                                class="w-full h-80 object-cover rounded-2xl shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Hotel Booking -->
        <section class="py-20 bg-white dark:bg-gray-800">
            <div class="container mx-auto px-6">
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="lg:order-2 space-y-6">
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                                Hotel Booking
                            </h2>
                            <p class="text-lg text-gray-900 dark:text-gray-300">
                                From budget-friendly rooms to luxury stays, we secure trusted hotel options across
                                Nigeria and beyond. Just tell us your destination — we'll handle the rest.
                            </p>
                            <NuxtLink to="/contact"
                                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                                Find Hotels
                                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </NuxtLink>
                        </div>
                        <div class="lg:order-1 relative">
                            <img src="assets/img/hotel-booking.png" alt="Hotel Booking"
                                class="w-full h-80 object-cover rounded-2xl shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tours & Vacation Packages -->
        <section class="py-20">
            <div class="container mx-auto px-6">
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-6">
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                                Tours & Vacation Packages
                            </h2>
                            <p class="text-lg text-gray-900 dark:text-gray-300">
                                Discover new destinations with our guided tour packages. Whether it's a honeymoon,
                                family getaway, or solo adventure, we create memorable travel experiences tailored to
                                your taste.
                            </p>
                            <NuxtLink to="/contact"
                                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                                Explore Packages
                                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </NuxtLink>
                        </div>
                        <div class="relative">
                            <img src="assets/img/travel-and-tour-vacation.png" alt="Tours & Vacation Packages"
                                class="w-full h-80 object-cover rounded-2xl shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Travel Insurance -->
        <section class="py-20">
            <div class="container mx-auto px-6">
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-6">
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                                Travel Insurance
                            </h2>
                            <p class="text-lg text-gray-900 dark:text-gray-300">
                                We don't just help you travel — we help you travel smart. Get covered with travel
                                insurance options that protect you from unexpected delays, cancellations, or medical
                                emergencies abroad.
                            </p>
                            <NuxtLink to="/contact"
                                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                                Get Protected
                                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </NuxtLink>
                        </div>
                        <div class="relative">
                            <img src="assets/img/travel-insurance-bot.png" alt="Travel Insurance"
                                class="w-full h-80 object-cover rounded-2xl shadow-lg" />
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