<template>
    <div class="w-full relative">
        <!-- Full-width banner section -->
        <section class="w-full banner-container relative overflow-hidden">
            <div class="absolute inset-0 flex">
                <!-- Content on the left -->
                <div class="w-full md:w-1/2 bg-gradient-to-r from-gray-900 to-transparent flex items-center z-10">
                    <div class="px-8 md:px-16 py-12 text-white">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Who We Are</h1>
                        <p class="text-xl md:text-2xl max-w-md font-light opacity-90">
                            Leading innovators in industrial solutions with decades of expertise and commitment to
                            excellence.
                        </p>
                        <button
                            class="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300">
                            Learn More About Us
                        </button>
                    </div>
                </div>

                <!-- Image on the right -->
                <div class="hidden md:block md:w-1/2">
                    <img :src="bannerImage" alt="Who We Are" class="w-full h-full object-cover">
                </div>
            </div>
        </section>

        <!-- Content section below banner -->
        <section class="py-16 px-4 md:px-8 max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <p class="text-gray-700 mb-4 leading-relaxed">
                        Founded in 1995, Syntanium has grown from a small specialty chemicals provider to a
                        comprehensive industrial solutions company serving global clients across multiple sectors.
                    </p>
                    <p class="text-gray-700 mb-4 leading-relaxed">
                        Our journey began with a simple mission: to provide superior products and services that help our
                        clients operate more efficiently, safely, and sustainably.
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        Today, we're proud to be a trusted partner to industry leaders worldwide, with a reputation for
                        innovation, reliability, and exceptional customer service.
                    </p>
                </div>
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="bg-red-100 p-3 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
                                <p class="text-gray-700">We prioritize the safety of people, assets, and the environment
                                    in everything we do.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-red-100 p-3 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                                <p class="text-gray-700">We continuously develop new solutions to meet evolving industry
                                    challenges.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-red-100 p-3 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">Partnership</h3>
                                <p class="text-gray-700">We build long-term relationships based on trust, transparency,
                                    and mutual success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats section -->
        <section class="py-16 bg-gray-100">
            <div class="max-w-6xl mx-auto px-4 md:px-8">
                <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="text-4xl md:text-5xl font-bold text-red-600 mb-2">25+</div>
                        <div class="text-gray-700">Years of Experience</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl md:text-5xl font-bold text-red-600 mb-2">500+</div>
                        <div class="text-gray-700">Clients Worldwide</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl md:text-5xl font-bold text-red-600 mb-2">40+</div>
                        <div class="text-gray-700">Countries Served</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl md:text-5xl font-bold text-red-600 mb-2">98%</div>
                        <div class="text-gray-700">Client Retention</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA section -->
        <section class="py-16 px-4 md:px-8 bg-red-600 text-white">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
                <p class="text-xl mb-8 max-w-2xl mx-auto">
                    Discover how our expertise and solutions can help your business overcome challenges and achieve new
                    levels of success.
                </p>
                <button
                    class="px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
                    Contact Us Today
                </button>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import your image
import bannerImage from '~/assets/img/who-we-are-syntanium2.jpg';
</script>

<style scoped>
.banner-container {
    height: 500px;
}

@media (max-width: 768px) {
    .banner-container {
        height: 400px;
    }
}

@media (max-width: 640px) {
    .banner-container {
        height: 350px;
    }
}
</style>