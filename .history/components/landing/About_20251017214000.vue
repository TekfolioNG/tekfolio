<template>
    <section class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <!-- Our Objectives Section -->
            <div class="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <!-- Left: Images Grid -->
                <div class="order-2 lg:order-1">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="col-span-2">
                            <img :src="aboutImage2" alt="Elevation Consulting Team"
                                class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
                        </div>
                        <div>
                            <img :src="aboutImage3" alt="Business Strategy Session"
                                class="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg" />
                        </div>
                        <div>
                            <img :src="aboutImage4" alt="Enterprise Development"
                                class="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg" />
                        </div>
                    </div>
                </div>

                <!-- Right: Content -->
                <div class="order-1 lg:order-2">
                    <h2 class="text-3xl md:text-4xl font-barlow-extrabold text-gray-900 mb-6 uppercase">
                        Our Objectives
                    </h2>
                    <div class="w-20 h-1 bg-[#0077AA] mb-6"></div>

                    <p class="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 font-semibold">
                        Every business we work with is unique, yet the goal remains the same: Sustainable growth built
                        on sound strategy.
                    </p>

                    <p class="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                        Through tailored programs, technical support, and capacity-building initiatives, we help
                        entrepreneurs, corporations, and development institutions strengthen systems, unlock growth, and
                        drive inclusive economic progress.
                    </p>

                    <p class="text-base md:text-lg text-gray-800 font-semibold mb-4">
                        Our key objectives include:
                    </p>

                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Helping business owners optimize performance through targeted
                                professional support.</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Providing capacity-building opportunities that strengthen
                                individuals and organizations.</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Developing and implementing strategies that deliver measurable
                                impact.</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Supporting change management across every stage of the business
                                lifecycle.</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Conducting needs assessments and designing fit-for-purpose
                                solutions that enhance productivity and competitiveness.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- How We Create Solutions Section -->
            <div class="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
                <div class="max-w-5xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-barlow-extrabold text-gray-900 mb-6 uppercase text-center">
                        How We Create Solutions
                    </h2>
                    <div class="w-20 h-1 bg-[#0077AA] mb-8 mx-auto"></div>

                    <p class="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 text-center font-semibold">
                        Meaningful impact comes from practical, results-driven action — not theory. Our team works
                        closely with clients to diagnose challenges, design interventions, and implement long-term
                        solutions that create measurable improvements.
                    </p>

                    <p class="text-base md:text-lg text-gray-700 leading-relaxed mb-8 text-center">
                        We blend hands-on experience with proven methodologies to build systems that work and teams that
                        perform.
                    </p>

                    <p class="text-base md:text-lg text-gray-800 font-semibold mb-6 text-center">
                        Our focus areas include:
                    </p>

                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-start">
                                <div
                                    class="w-10 h-10 bg-[#0077AA] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-lg font-barlow-extrabold text-gray-900 mb-2">Process Improvement &
                                        System Optimization</h3>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-start">
                                <div
                                    class="w-10 h-10 bg-[#0077AA] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-lg font-barlow-extrabold text-gray-900 mb-2">Organizational Design &
                                        Change Management</h3>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-start">
                                <div
                                    class="w-10 h-10 bg-[#0077AA] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-lg font-barlow-extrabold text-gray-900 mb-2">Business Performance &
                                        Capacity Development</h3>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-start">
                                <div
                                    class="w-10 h-10 bg-[#0077AA] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-lg font-barlow-extrabold text-gray-900 mb-2">Strategic Planning &
                                        Implementation</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images from assets directory
import aboutImage2 from '~/assets/img/about-elevation2.jpg';
import aboutImage3 from '~/assets/img/about-elevation3.jpg';
import aboutImage4 from '~/assets/img/about-elevation4.jpg';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

/* Mobile responsive adjustments */
@media (max-width: 1023px) {
    .order-1 {
        order: 1;
    }

    .order-2 {
        order: 2;
    }
}
</style>