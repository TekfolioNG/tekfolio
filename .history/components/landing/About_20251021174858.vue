<template>
    <section class="py-8 md:py-12 bg-white">
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
                        <div class="col-span-2">
                            <img :src="aboutImage3" alt="Business Strategy Session"
                                class="w-full h-full object-cover rounded-xl shadow-lg" />
                        </div>

                    </div>
                </div>

                <!-- Right: Content -->
                <div class="order-1 lg:order-2">
                    <h2
                        class="text-3xl md:text-4xl text-center md:text-left font-barlow-extrabold text-gray-900 mb-6 uppercase">
                        Our Expert Solutions for Ambitious Businesses
                    </h2>
                    <div class="w-20 h-1 bg-[#0077AA] mb-6 mx-auto md:items-start"></div>

                    <p class="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 font-sans">
                        Every business we work with is unique, yet the goal remains the same: Sustainable growth built
                        on sound strategy.
                    </p>

                    <p class="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                        Through tailored programs, technical support, and capacity-building initiatives, we help
                        entrepreneurs, corporations, and development institutions strengthen systems, unlock growth, and
                        drive inclusive economic progress.
                    </p>

                    <p class="text-base md:text-lg text-gray-800 font-normal mb-4">
                        Our key objectives for ambitious businesses include:
                    </p>

                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-800 font-semibold">Identify and overcome growth barriers</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-800 bold font-semibold">Develop tailored strategies for sustainable
                                growth</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-800 font-semibold"> Integrate ESG principles into business operations
                            </span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-[#0077AA] mr-3 flex-shrink-0 mt-0.5" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-800 font-semibold">Drive impact and outcomes through data-driven
                                decision-making.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images from assets directory
import aboutImage3 from '~/assets/img/about-elevation3.jpg';
import aboutImage2 from '~/assets/img/bdsp-elevation.jpg';
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