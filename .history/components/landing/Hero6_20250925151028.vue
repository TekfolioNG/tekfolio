<template>
    <div class="min-h-screen bg-gray-700 dark:bg-gray-900">

        <section class="relative w-full h-96 md:h-[500px] overflow-hidden border-b-1 border-white">
            <!-- Background Image - Flushed Right -->
            <div class="absolute inset-0">
                <img :src="whoWeAreImage" alt="Who We Are - Syntanium"
                    class="absolute top-0 right-0 h-4/5 w-full md:w-3/5 object-cover object-right sharp-image" />
            </div>
            <!-- Content Overlay - Left Side -->
            <div class="relative z-10 h-full flex items-center">
                <div class="container mx-auto px-6 md:px-12">
                    <div class="max-w-2xl">
                        <h1
                            class="font-barlow-extrabold text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            CONSTRUCTION
                        </h1>
                        <div class="mt-4 w-20 h-1 bg-red-500"></div>
                    </div>
                </div>
            </div>

            <!-- Dark overlay for better text readability on mobile -->
            <div class="absolute inset-0 bg-black/40 md:bg-transparent"></div>
        </section>

        <!-- Description Section -->
        <section class="w-full bg-gray-700 dark:bg-gray-900 py-16 lg:py-20">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <p class="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed lg:leading-relaxed font-light">
                        Syntanium provides construction solutions designed for the demanding oil and gas industry. From
                        civil works to facility upgrades, our projects emphasize structural integrity, safety, and
                        long-term performance. We align execution with client objectives, ensuring every build adds
                        measurable value.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import image from assets directory
import whoWeAreImage from '~/assets/img/construction-syntanium-hero.png';
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
}
</style>