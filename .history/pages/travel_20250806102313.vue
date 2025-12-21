<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

// Page meta configuration
definePageMeta({
    layout: "landing"
})

useHead({
    title: 'Travel Services | BOT Integrated Services',
    meta: [
        { property: 'og:title', content: 'Travel Services | BOT Integrated Services' },
        { property: 'og:description', content: 'Complete travel solutions including flight booking, hotel reservations, tours, car rentals, and travel insurance. Your journey made easy.' },
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

// Travel services data
const travelServices = [
    {
        title: 'Flight Ticketing',
        description: 'We help you book the best local and international flights at competitive rates. Whether it\'s a last-minute trip or a long-term travel plan, we\'ll find the right options that suit your time and budget.',
        image: 'assets/img/booking-ticket-bot.png',
        features: ['Competitive rates', 'Last-minute bookings', 'International & domestic', 'Flexible payment options'],
        icon: '✈️'
    },
    {
        title: 'Hotel Booking',
        description: 'From budget-friendly rooms to luxury stays, we secure trusted hotel options across Nigeria and beyond. Just tell us your destination — we\'ll handle the rest.',
        image: 'assets/img/booking-ticket-bot.png',
        features: ['Budget to luxury options', 'Trusted properties', 'Global destinations', '24/7 support'],
        icon: '🏨'
    },
    {
        title: 'Tours & Vacation Packages',
        description: 'Discover new destinations with our guided tour packages. Whether it\'s a honeymoon, family getaway, or solo adventure, we create memorable travel experiences tailored to your taste.',
        image: 'assets/img/booking-ticket-bot.png',
        features: ['Guided tours', 'Custom packages', 'Family-friendly', 'Memorable experiences'],
        icon: '🗺️'
    },
    {
        title: 'Car Rentals',
        description: 'Need a ride? We arrange clean, insured, and reliable rental cars within Nigeria and select international cities, with or without a driver.',
        image: 'assets/img/car-rental-bot.png',
        features: ['Clean & insured vehicles', 'With/without driver', 'Local & international', 'Flexible terms'],
        icon: '🚗'
    },
    {
        title: 'Travel Insurance',
        description: 'We don\'t just help you travel — we help you travel smart. Get covered with travel insurance options that protect you from unexpected delays, cancellations, or medical emergencies abroad.',
        image: 'assets/img/travel-insurance-bot.png',
        features: ['Comprehensive coverage', 'Medical emergencies', 'Trip cancellations', 'Delay protection'],
        icon: '🛡️'
    }
]

const whyChooseUs = [
    {
        title: 'One-Stop Solution',
        description: 'Everything you need for your journey in one place',
        icon: '🎯'
    },
    {
        title: 'Competitive Pricing',
        description: 'Best rates for flights, hotels, and car rentals',
        icon: '💰'
    },
    {
        title: '24/7 Support',
        description: 'Round-the-clock assistance for your peace of mind',
        icon: '📞'
    },
    {
        title: 'Trusted Partners',
        description: 'Working with reliable airlines, hotels, and service providers',
        icon: '🤝'
    }
]
</script>

<template>
    <div
        class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 overflow-hidden bg-gray-900">
            <!-- Decorative Elements -->
            <div class="absolute inset-0 overflow-hidden">
                <div
                    class="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#F4A460]/20 to-amber-300/20">
                </div>
                <div
                    class="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#D2691E]/20 to-orange-400/20">
                </div>
            </div>

            <div class="relative container mx-auto px-8 lg:px-16 xl:px-20 2xl:px-32">
                <div
                    class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center max-w-7xl mx-auto">
                    <!-- Left Content -->
                    <div class="text-center lg:text-left">
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

                        <p class="text-xl text-gray-100 mb-8 max-w-lg">
                            Whether you're planning a business trip, a dream vacation, or a quick city escape, BOT
                            Integrated Services handles the details so you can focus on the experience.
                        </p>

                        <!-- CTA Button -->
                        <div class="mb-8">
                            <NuxtLink to="/contact"
                                class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                Start Planning Your Trip
                                <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </NuxtLink>
                        </div>

                        <!-- Quick Stats -->
                        <div class="grid grid-cols-3 gap-8 pt-8 border-t border-[#F4A460]">
                            <div class="text-center">
                                <div class="text-2xl font-bold text-[#F4A460] mb-1">500+</div>
                                <div class="text-sm text-gray-100">Happy Travelers</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-[#F4A460] mb-1">50+</div>
                                <div class="text-sm text-gray-100">Destinations</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-[#F4A460] mb-1">24/7</div>
                                <div class="text-sm text-gray-100">Support</div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Animation -->
                    <div class="flex justify-center lg:justify-end">
                        <div class="relative">
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-[#F4A460]/30 to-amber-300/30 rounded-3xl transform rotate-6">
                            </div>
                            <div class="relative bg-white rounded-3xl p-8 shadow-2xl">
                                <DotLottieVue style="height: 320px; width: 320px" class="mx-auto" autoplay loop
                                    src="https://lottie.host/b8f56c4e-0e1b-4e7b-8c2e-3d4f9f8a2b1c/TravelAnimation.lottie" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="py-20">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Complete Travel Solutions
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        From planning to execution, we handle every aspect of your journey with precision and care
                    </p>
                </div>

                <div class="space-y-20">
                    <div v-for="(service, index) in travelServices" :key="service.title" class="max-w-6xl mx-auto">
                        <div :class="index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'"
                            class="grid grid-cols-1 gap-12 lg:gap-16 items-center">

                            <!-- Content -->
                            <div :class="index % 2 === 1 ? 'lg:order-2' : ''" class="space-y-6">
                                <div class="flex items-center space-x-4 mb-4">
                                    <div class="text-4xl">{{ service.icon }}</div>
                                    <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
                                        {{ service.title }}
                                    </h3>
                                </div>

                                <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {{ service.description }}
                                </p>

                                <!-- Features -->
                                <div class="grid grid-cols-2 gap-4">
                                    <div v-for="feature in service.features" :key="feature"
                                        class="flex items-center space-x-3">
                                        <div class="w-2 h-2 bg-[#D2691E] rounded-full flex-shrink-0"></div>
                                        <span class="text-gray-700 dark:text-gray-300 text-sm font-medium">{{ feature
                                        }}</span>
                                    </div>
                                </div>

                                <!-- CTA Button -->
                                <div class="pt-4">
                                    <NuxtLink to="/contact"
                                        class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        Learn More
                                        <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </div>

                            <!-- Image -->
                            <div :class="index % 2 === 1 ? 'lg:order-1' : ''" class="relative">
                                <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img :src="service.image" :alt="service.title"
                                        class="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500" />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us Section -->
        <section class="py-20 bg-white dark:bg-gray-800">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Why Choose BOT Integrated?
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We take the stress out of travel by offering comprehensive solutions tailored to your needs
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <div v-for="benefit in whyChooseUs" :key="benefit.title"
                        class="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300">
                        <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {{ benefit.icon }}
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            {{ benefit.title }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">
                            {{ benefit.description }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        How It Works
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-300">
                        Simple steps to plan your perfect journey
                    </p>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Step 1 -->
                        <div class="text-center relative">
                            <div
                                class="w-16 h-16 bg-gradient-to-r from-[#D2691E] to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                                1
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Contact Us</h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                Reach out with your travel needs and destination preferences
                            </p>
                            <!-- Connector Line -->
                            <div
                                class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#D2691E] to-amber-600 transform -translate-x-8">
                            </div>
                        </div>

                        <!-- Step 2 -->
                        <div class="text-center relative">
                            <div
                                class="w-16 h-16 bg-gradient-to-r from-[#D2691E] to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                                2
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Get Custom Plan</h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                We create a tailored travel plan with the best options for your budget
                            </p>
                            <!-- Connector Line -->
                            <div
                                class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#D2691E] to-amber-600 transform -translate-x-8">
                            </div>
                        </div>

                        <!-- Step 3 -->
                        <div class="text-center">
                            <div
                                class="w-16 h-16 bg-gradient-to-r from-[#D2691E] to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                                3
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Enjoy Your Trip</h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                Travel with confidence knowing everything is arranged and support is available
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section
            class="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        What Our Travelers Say
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <!-- Testimonial 1 -->
                    <div
                        class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-400">
                                <svg v-for="star in 5" :key="star" class="w-5 h-5" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">
                            "BOT Integrated made our honeymoon trip to Dubai absolutely seamless. From flight booking to
                            hotel arrangements, everything was perfect!"
                        </p>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                            - Sarah & John M.
                        </div>
                    </div>

                    <!-- Testimonial 2 -->
                    <div
                        class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-400">
                                <svg v-for="star in 5" :key="star" class="w-5 h-5" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">
                            "Professional service and great prices. They handled my business trip to London with such
                            attention to detail. Highly recommended!"
                        </p>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                            - Dr. Adeyemi O.
                        </div>
                    </div>

                    <!-- Testimonial 3 -->
                    <div
                        class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-400">
                                <svg v-for="star in 5" :key="star" class="w-5 h-5" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">
                            "Their tour package to South Africa was amazing! Well planned, good accommodations, and the
                            support team was always available."
                        </p>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                            - Mrs. Folake A.
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
/* Custom animations and styling */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.float-animation {
    animation: float 3s ease-in-out infinite;
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

/* Smooth transitions */
* {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb {
    background: #D2691E;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #B8651A;
}

/* Dark mode scrollbar */
.dark ::-webkit-scrollbar-track {
    background: #374151;
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

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    .bg-gradient-to-r {
        background: #D2691E;
    }
}
</style>