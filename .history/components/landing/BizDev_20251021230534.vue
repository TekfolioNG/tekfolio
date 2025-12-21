<template>
    <section class="py-4 md:py-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
            <!-- Main Introduction -->
            <div class="mb-16">

                <p class="text-base md:text-lg text-gray-900 leading-relaxed max-w-5xl mx-auto text-center">
                    Our business development expertise covers a full range of support services — from growth consulting
                    and business acceleration to market entry strategies, research, and more. We take an innovative,
                    hands-on approach and collaborate with strategic partners to create programs that deliver measurable
                    impact. Using design thinking and practical execution, we help small and growing businesses scale
                    sustainably and become investment-ready.
                </p>
            </div>

            <!-- Business Formation and Growth Section -->
            <div class="grid lg:grid-cols-2 gap-12 items-start mb-24">
                <!-- Left: Content -->
                <div class="order-2 lg:order-1">
                    <h3 class="text-2xl md:text-3xl font-barlow-extrabold text-gray-900 mb-4">
                        Business Formation and Growth
                    </h3>
                    <div class="w-20 h-1 bg-[#0077AA] mb-6"></div>

                    <p class="text-base md:text-lg text-gray-900 leading-relaxed mb-6">
                        We guide founders through every stage of setting up and scaling their businesses — from
                        validating ideas to building strong operational systems. Our approach blends structure,
                        strategy, and sustainability to position enterprises for long-term success.
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
                            <span class="text-gray-800">Bringing your idea to life</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Developing your business plan</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Structuring and organizing your business</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Embedding sustainability practices</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Driving digital transformation</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Conducting market research and reporting</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Providing business management and administration support</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-gray-800">Acting as a broker for professional services</span>
                        </li>
                    </ul>
                </div>

                <!-- Right: Image -->
                <div class="order-1 lg:order-2">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <img :src="bizDevImage4" alt="Business Formation and Growth"
                            class="w-full h-96 md:h-[32rem] object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#0077AA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Two Column Section: Capacity Building & Financial Advisory -->
            <div class="grid lg:grid-cols-2 gap-12 mb-24">
                <!-- Capacity Building -->
                <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                    <h3 class="text-2xl md:text-3xl font-barlow-extrabold text-gray-900 mb-4">
                        Capacity Building and Entrepreneurship Support
                    </h3>
                    <div class="w-20 h-1 bg-[#0077AA] mb-6"></div>

                    <p class="text-base md:text-lg text-gray-900 leading-relaxed">
                        We design and implement capacity-building programs that develop entrepreneurial skills,
                        leadership competence, and organizational capability. Through tailored coaching, mentoring, and
                        workshops, we help individuals and teams build the confidence and resilience needed to compete
                        and thrive in dynamic markets.
                    </p>
                </div>

                <!-- Financial Advisory -->
                <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                    <h3 class="text-2xl md:text-3xl font-barlow-extrabold text-gray-900 mb-4">
                        Financial and Funding Advisory
                    </h3>
                    <div class="w-20 h-1 bg-[#0077AA] mb-6"></div>

                    <p class="text-base md:text-lg text-gray-900 leading-relaxed">
                        We support businesses in accessing finance through sound planning and strategic preparation. Our
                        team provides guidance on proposal development, investor engagement, and financial management to
                        ensure enterprises are ready to attract, utilize, and sustain investment effectively.
                    </p>
                </div>
            </div>

            <!-- Market Access and Development Section -->
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <!-- Left: Images Grid -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-2 relative rounded-2xl overflow-hidden shadow-2xl group">
                        <img :src="bizDevImage2" alt="Market Access Strategies"
                            class="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#0077AA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <img :src="bizDevImage1" alt="Market Development"
                            class="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#0077AA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <img :src="bizDevImage2" alt="International Market Access"
                            class="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#0077AA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>

                <!-- Right: Content -->
                <div>
                    <h3 class="text-2xl md:text-3xl font-barlow-extrabold text-gray-900 mb-4">
                        Market Access and Development
                    </h3>
                    <div class="w-20 h-1 bg-[#0077AA] mb-6"></div>

                    <p class="text-base md:text-lg text-gray-900 leading-relaxed">
                        We help businesses expand into new markets by identifying opportunities, building networks, and
                        enhancing visibility. Through data-driven strategies and market intelligence, we enable clients
                        to strengthen their competitiveness and connect with high-value customers across local and
                        international markets.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images from assets directory
import bizDevImage1 from '~/assets/img/biz-dev-elevation.jpg';
import bizDevImage2 from '~/assets/img/biz-dev-elevation2.jpg';
import bizDevImage4 from '~/assets/img/biz-dev-elevation4.jpg';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}
</style>