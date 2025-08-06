<script setup>
// Page meta configuration
definePageMeta({
    layout: "landing"
})

useHead({
    title: 'Oil & Gas | BOT Integrated Services',
    meta: [
        { property: 'og:title', content: 'Oil & Gas | BOT Integrated Services' },
        { property: 'og:description', content: 'Specialized consulting for vehicle documentation and energy services including oil & gas consultancy.' },
        { property: 'og:image', content: '/oil-gas-og.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Oil & Gas - BOT Integrated' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Oil & Gas | BOT Integrated Services' },
        { name: 'twitter:description', content: 'Expert vehicle documentation and energy consultancy services.' },
        { name: 'twitter:image', content: '/oil-gas-og.jpg' }
    ],
    link: [
        { rel: 'canonical', href: 'https://botintegrated.com/oil-gas' }
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
                        Oil & Gas Services
                    </div>

                    <h1 class="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Support for Vehicle Owners
                        <span class="relative">
                            <span class="text-[#F4A460]">and Energy Clients</span>
                            <svg class="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                                <path d="M2 10C50 5 100 2 198 8" stroke="#F4A460" stroke-width="3"
                                    stroke-linecap="round" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p class="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                        BOT Integrated Services offers specialized consulting for individuals and businesses navigating
                        vehicle registration, documentation, and energy-related services. Our goal is to simplify the
                        process, ensure compliance, and deliver expert guidance where it matters most.
                    </p>

                    <NuxtLink to="/contact"
                        class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        Get Expert Support
                        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Vehicular Documentation & Registration -->
        <section class="py-20">
            <div class="container mx-auto px-6">
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-6">
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                                Vehicular Documentation & Registration
                            </h2>
                            <p class="text-lg text-gray-600 dark:text-gray-300">
                                We help with new vehicle registration, license renewals, plate numbers, change of
                                ownership,
                                and other essential documentation. Processes are handled efficiently and in line with
                                current
                                regulatory requirements.
                            </p>
                            <NuxtLink to="/contact"
                                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                                Get Documentation Help
                                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </NuxtLink>
                        </div>
                        <div class="relative">
                            <img src="assets/img/car-registration-bot.jpg" alt="Vehicular Documentation & Registration"
                                class="w-full h-80 object-cover rounded-2xl shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Oil & Gas Consultancy -->
        <section class="py-20 bg-white dark:bg-gray-800">
            <div class="container mx-auto px-6">
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="lg:order-2 space-y-6">
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                                Oil & Gas Consultancy
                            </h2>
                            <p class="text-lg text-gray-600 dark:text-gray-300">
                                For businesses in the energy space, we offer advisory support on sourcing, logistics,
                                safety standards, and regulatory compliance. We also connect clients with reliable
                                suppliers for LPG and other petroleum products.
                            </p>
                            <NuxtLink to="/contact"
                                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                                Get Energy Consultancy
                                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </NuxtLink>
                        </div>
                        <div class="lg:order-1 relative">
                            <img src="assets/img/oil-supply-bot.png" alt="Oil & Gas Consultancy"
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