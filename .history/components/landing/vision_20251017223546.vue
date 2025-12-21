<template>
    <section class="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-barlow-extrabold text-gray-900 mb-6 uppercase">
                    Our Vision, Mission & Strategy
                </h2>
                <div class="w-20 h-1 bg-[#0077AA] mx-auto"></div>
            </div>

            <!-- Vision & Mission Cards -->
            <div class="grid lg:grid-cols-2 gap-8 mb-16">
                <!-- Vision Card -->
                <div
                    class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div class="h-48 md:h-56 overflow-hidden">
                        <img :src="aboutImage5" alt="Elevation Consulting Vision"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div class="p-8">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-[#0077AA] rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                    </path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-barlow-extrabold text-gray-900">Vision Statement</h3>
                        </div>
                        <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                            To be Africa's leading management consulting and business development firm — driving
                            innovation, excellence, and sustainable growth for every client we serve.
                        </p>
                    </div>
                </div>

                <!-- Mission Card -->
                <div
                    class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div class="h-48 md:h-56 overflow-hidden">
                        <img :src="aboutImage6" alt="Elevation Consulting Mission"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div class="p-8">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-[#0077AA] rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-barlow-extrabold text-gray-900">Mission Statement</h3>
                        </div>
                        <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                            To empower organizations through top-tier consulting and business development services that
                            enhance efficiency, fuel strategic growth, and unlock potential. We are committed to
                            delivering customized solutions that are innovative, practical, and aligned with our
                            clients' goals.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Our Strategy Section -->
            <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div class="flex items-center mb-8">
                    <div class="w-12 h-12 bg-[#0077AA] rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-2xl md:text-3xl font-barlow-extrabold text-gray-900">Our Strategy</h3>
                </div>

                <p class="text-lg text-gray-800 mb-8 font-semibold">
                    We achieve our vision through five guiding principles:
                </p>

                <div class="space-y-6">
                    <!-- Client-Centric Approach -->
                    <div
                        class="flex items-start p-6 bg-gradient-to-r from-blue-50 to-transparent rounded-xl hover:from-blue-100 transition-colors duration-300">
                        <div
                            class="flex-shrink-0 w-8 h-8 bg-[#0077AA] rounded-full flex items-center justify-center mr-4 mt-1">
                            <span class="text-white font-barlow-extrabold text-sm">1</span>
                        </div>
                        <div>
                            <h4 class="text-lg md:text-xl font-barlow-extrabold text-gray-900 mb-2">
                                Client-Centric Approach
                            </h4>
                            <p class="text-gray-700 leading-relaxed">
                                Understanding each client's goals and challenges to deliver tailored, impactful
                                solutions.
                            </p>
                        </div>
                    </div>

                    <!-- Innovation and Excellence -->
                    <div
                        class="flex items-start p-6 bg-gradient-to-r from-blue-50 to-transparent rounded-xl hover:from-blue-100 transition-colors duration-300">
                        <div
                            class="flex-shrink-0 w-8 h-8 bg-[#0077AA] rounded-full flex items-center justify-center mr-4 mt-1">
                            <span class="text-white font-barlow-extrabold text-sm">2</span>
                        </div>
                        <div>
                            <h4 class="text-lg md:text-xl font-barlow-extrabold text-gray-900 mb-2">
                                Innovation and Excellence
                            </h4>
                            <p class="text-gray-700 leading-relaxed">
                                Using cutting-edge tools, training, and methodologies to ensure world-class results.
                            </p>
                        </div>
                    </div>

                    <!-- Sustainable Growth -->
                    <div
                        class="flex items-start p-6 bg-gradient-to-r from-blue-50 to-transparent rounded-xl hover:from-blue-100 transition-colors duration-300">
                        <div
                            class="flex-shrink-0 w-8 h-8 bg-[#0077AA] rounded-full flex items-center justify-center mr-4 mt-1">
                            <span class="text-white font-barlow-extrabold text-sm">3</span>
                        </div>
                        <div>
                            <h4 class="text-lg md:text-xl font-barlow-extrabold text-gray-900 mb-2">
                                Sustainable Growth
                            </h4>
                            <p class="text-gray-700 leading-relaxed">
                                Building long-term value through operational efficiency, market expansion, and sound
                                risk management.
                            </p>
                        </div>
                    </div>

                    <!-- Collaboration and Partnership -->
                    <div
                        class="flex items-start p-6 bg-gradient-to-r from-blue-50 to-transparent rounded-xl hover:from-blue-100 transition-colors duration-300">
                        <div
                            class="flex-shrink-0 w-8 h-8 bg-[#0077AA] rounded-full flex items-center justify-center mr-4 mt-1">
                            <span class="text-white font-barlow-extrabold text-sm">4</span>
                        </div>
                        <div>
                            <h4 class="text-lg md:text-xl font-barlow-extrabold text-gray-900 mb-2">
                                Collaboration and Partnership
                            </h4>
                            <p class="text-gray-700 leading-relaxed">
                                Working closely with clients, partners, and stakeholders to achieve shared success.
                            </p>
                        </div>
                    </div>

                    <!-- Talent Development -->
                    <div
                        class="flex items-start p-6 bg-gradient-to-r from-blue-50 to-transparent rounded-xl hover:from-blue-100 transition-colors duration-300">
                        <div
                            class="flex-shrink-0 w-8 h-8 bg-[#0077AA] rounded-full flex items-center justify-center mr-4 mt-1">
                            <span class="text-white font-barlow-extrabold text-sm">5</span>
                        </div>
                        <div>
                            <h4 class="text-lg md:text-xl font-barlow-extrabold text-gray-900 mb-2">
                                Talent Development
                            </h4>
                            <p class="text-gray-700 leading-relaxed">
                                Attracting, developing, and retaining top talent to deliver consistent quality and
                                expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images from assets directory
import aboutImage5 from '~/assets/img/about-elevation5.jpg';
import aboutImage6 from '~/assets/img/about-elevation6.jpg';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}
</style>