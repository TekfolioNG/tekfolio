<template>
    <div class="bg-white dark:bg-gray-950">
        <!-- Hero Section with Image -->
        <section class="relative w-full py-8 lg:py-12">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Left Column - Content -->
                    <div class="order-2 lg:order-1">
                        <h1
                            class="font-barlow text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-center">
                            Integrated Logistics for Energy Operations
                        </h1>
                        <div class="w-16 h-1 bg-red-500 mb-8 mx-auto lg:mx-auto"></div>
                        <p class="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                            Our logistics network supports upstream, midstream, and downstream activities through smart
                            coordination and real-time visibility. Material procurement, warehousing, and transport are
                            managed with accuracy to reduce delays, improve delivery speed, and enhance operational
                            flow.
                        </p>
                    </div>

                    <!-- Right Column - Image -->
                    <div class="order-1 lg:order-2">
                        <div class="relative rounded-lg overflow-hidden shadow-2xl">
                            <img :src="supplyChainImage" alt="Supply Chain Management - Syntanium Energy"
                                class="w-full h-full object-cover sharp-image" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What Makes Us Different Section -->
        <section
            class="relative w-full py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="text-center">
                    <h2
                        class="font-barlow text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        What Makes Syntanium Logistics Different?
                    </h2>
                    <div class="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
                    <p class="text-xl text-gray-800 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                        We apply deep industry knowledge and advanced tracking systems to maintain a resilient and
                        transparent supply framework. Each process is structured to minimize risk, meet regulatory
                        standards, and keep projects running without disruption even in demanding environments.
                    </p>
                </div>
            </div>
        </section>

        <!-- Driving Sustainable Efficiency Section -->
        <section class="relative w-full py-12 lg:py-16 bg-white dark:bg-gray-950">
            <div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="text-center">
                    <h2
                        class="font-barlow text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Driving Sustainable Efficiency
                    </h2>
                    <div class="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
                    <p class="text-xl text-gray-800 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                        Sustainability is built into our logistics model. Through optimized routing, efficient load
                        management, and reduced idle time, we help clients achieve lower operational costs while cutting
                        emissions and supporting a cleaner energy future.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import image from assets directory
import supplyChainImage from '~/assets/img/supply-chain-syntanium2.jpg';
</script>

<style scoped>
/* Import Barlow font if not already imported globally */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Sharp image rendering */
.sharp-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
}

/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}
</style>