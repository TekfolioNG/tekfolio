<template>
    <div class="min-h-screen bg-white dark:bg-gray-900">

        <section class="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-50 dark:bg-gray-800">
            <!-- Background Image - Flushed Right -->
            <div class="absolute inset-0">
                <img :src="whoWeAreImage" alt="Who We Are - Syntanium Energy"
                    class="absolute top-0 right-0 h-full w-full md:w-full object-cover object-right sharp-image" />
            </div>

            <!-- Content Overlay - Right Side with Light Background -->
            <div class="relative z-10 h-full flex items-center justify-end">
                <div class="container mx-auto px-6 md:px-12">
                    <div class="max-w-2xl ml-auto">
                        <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                            <h1
                                class="font-barlow-extrabold text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
                                Corrosion &
                                Integrity Management
                            </h1>
                            <div class="mt-4 w-20 h-1 bg-red-500"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dark overlay for better text readability on mobile -->
            <div class="absolute inset-0 bg-black/30 md:bg-transparent"></div>
        </section>

        <!-- Description Section - New Concept without Gray BG -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-20">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <!-- Decorative Elements -->
                    <div class="flex justify-center items-center mb-8">
                        <div class="w-12 h-0.5 bg-red-500 mr-4"></div>
                        <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div class="w-12 h-0.5 bg-red-500 ml-4"></div>
                    </div>

                    <!-- Content in Card-like Container -->
                    <div
                        class="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p
                            class="text-lg sm:text-xl lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed lg:leading-relaxed font-light">
                            <span class="font-semibold text-gray-900 dark:text-white">Pipelines and industrial assets
                                face constant threats from buildup, corrosion, and wear.</span> Left unchecked, these
                            issues reduce efficiency, weaken structures, and can lead to costly failures. At Syntanium,
                            we combine advanced inspection, pigging operations, and protective solutions to keep
                            infrastructure safe, reliable, and productive.
                        </p>
                    </div>

                    <!-- Additional decorative element -->
                    <div class="mt-8 flex justify-center">
                        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import image from assets directory
import whoWeAreImage from '~/assets/img/pigging-syntanium.jpg';
</script>

<style scoped>
/* Import Barlow font if not already imported globally */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Ensure smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Custom responsive adjustments if needed */
@media (max-width: 640px) {
    .font-barlow {
        letter-spacing: 0.025em;
    }

    /* Adjust padding for mobile - FIXED: removed escaped backslashes */
    .content-container {
        padding: 1.5rem !important;
    }
}

/* Sharp image rendering */
.sharp-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
}
</style>