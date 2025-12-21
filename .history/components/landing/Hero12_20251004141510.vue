<template>
    <div class="min-h-screen bg-white dark:bg-gray-950">

        <section class="relative w-full h-96 md:h-[500px] overflow-hidden">
            <!-- Background Image - Full Width -->
            <div class="absolute inset-0">
                <img :src="whoWeAreImage" alt="Corrosion & Integrity Management - Syntanium Energy"
                    class="w-full h-full object-cover sharp-image" />
            </div>

            <!-- Subtle overlay for depth -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30"></div>

            <!-- Content Overlay - Right Side -->
            <div class="relative z-10 h-full flex items-center justify-end">
                <div class="container mx-auto px-6 md:px-12">
                    <div
                        class="max-w-md ml-auto bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
                        <h1
                            class="font-barlow text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                            Products & Applications
                        </h1>
                        <div class="mt-4 w-16 h-1 bg-red-500"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Description Section - Reduced Margins -->
        <section
            class="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-12 lg:py-16">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Main Description -->
                <div class="mb-8">
                    <div class="max-w-4xl mx-auto">
                        <p
                            class="text-xl sm:text-2xl lg:text-3xl text-gray-800 dark:text-gray-100 leading-relaxed lg:leading-relaxed font-light text-center mb-2">
                            At Syntanium Energy, we provide dependable marine vessel operations to support offshore
                            projects.
                        </p>
                        <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                            From transporting personnel to moving heavy equipment and supplies, our fleet and logistics
                            expertise ensure safe, timely, and efficient offshore delivery.
                            Every <span class="font-semibold text-gray-900 dark:text-white">operation</span> is carried
                            out with strict adherence to industry safety standards and environmental practices.
                        </p>
                    </div>
                </div>

                <!-- Divider -->
                <div class="flex justify-center mb-8">
                    <div class="w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import image from assets directory
import whoWeAreImage from '~/assets/img/researching-laboratory-syntanium.jpg';
</script>

<style scoped>
/* Import Barlow font if not already imported globally */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Ensure smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Sharp image rendering */
.sharp-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
}

/* Custom responsive adjustments */
@media (max-width: 768px) {
    .font-barlow {
        letter-spacing: 0.025em;
    }
}
</style>