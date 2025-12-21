<template>
    <section class="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-gray-50">
        <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
            <!-- Business Continuity Section -->
            <div class="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <!-- Left: Content -->
                <div class="order-2 lg:order-1">
                    <h2 class="text-3xl md:text-4xl font-barlow-extrabold text-gray-900 mb-4 uppercase">
                        Business Continuity
                    </h2>
                    <div class="w-20 h-1 bg-[#0077AA] mb-6"></div>

                    <p class="text-base md:text-lg text-gray-900 leading-relaxed mb-6">
                        We support businesses in building stability and growth capacity through sound strategy,
                        operational efficiency, and financial discipline.
                    </p>

                    <p class="text-base md:text-lg text-gray-900 font-semibold mb-4">
                        Our services include:
                    </p>

                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Business Growth Advisory</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Financial, Management, Marketing, and Tax Consulting</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Business Assessment and Performance Reports</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Advisory on Agreements and Strategic Partnerships</span>
                        </li>
                    </ul>
                </div>

                <!-- Right: Image -->
                <div class="order-1 lg:order-2">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <img :src="advisoryImage2" alt="Business Continuity Advisory"
                            class="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#0077AA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Social Impact Section -->
            <div class="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <!-- Left: Image -->
                <div>
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <img :src="advisoryImage3" alt="Social Impact and Sustainability"
                            class="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#0077AA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>

                <!-- Right: Content -->
                <div>
                    <h2 class="text-3xl md:text-4xl font-barlow-extrabold text-gray-900 mb-4 uppercase">
                        Social Impact and Sustainability
                    </h2>
                    <div class="w-20 h-1 bg-[#0077AA] mb-6"></div>

                    <p class="text-base md:text-lg text-gray-900 leading-relaxed mb-6">
                        We help organizations design and implement strategies that align profitability with purpose —
                        creating long-term value for people and communities.
                    </p>

                    <p class="text-base md:text-lg text-gray-900 font-semibold mb-4">
                        Our services include:
                    </p>

                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Corporate and Community Responsibility</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Sustainability and Future Planning</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Social Enterprise Development</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Impact Investing</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Value Addition Section -->
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <!-- Left: Content -->
                <div class="order-2 lg:order-1">
                    <h2 class="text-3xl md:text-4xl font-barlow-extrabold text-gray-900 mb-4 uppercase">
                        Value Addition
                    </h2>
                    <div class="w-20 h-1 bg-[#0077AA] mb-6"></div>

                    <p class="text-base md:text-lg text-gray-900 leading-relaxed mb-6">
                        We strengthen value chains, enhance competitiveness, and support access to markets through
                        integrated advisory and trade facilitation.
                    </p>

                    <p class="text-base md:text-lg text-gray-900 font-semibold mb-4">
                        Our services include:
                    </p>

                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Value Chain Development through Forward and Backward
                                Linkages</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Cluster Formation and Service Aggregation</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Cooperative Development and Management</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Export Readiness and Trade Facilitation</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Certifications, Quality Management, and Standards
                                Implementation</span>
                        </li>
                    </ul>
                </div>

                <!-- Right: Image -->
                <div class="order-1 lg:order-2">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <img :src="advisoryImage4" alt="Value Addition Services"
                            class="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#0077AA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images from assets directory
import advisoryImage2 from '~/assets/img/elevation-advisory2.jpg';
import advisoryImage3 from '~/assets/img/elevation-advisory3.jpg';
import advisoryImage4 from '~/assets/img/elevation-advisory4.jpg';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}
</style>