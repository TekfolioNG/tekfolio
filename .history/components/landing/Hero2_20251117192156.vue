<template>
    <div class="min-h-screen bg-white">

        <!-- Hero Section - 2 Columns on Desktop -->

        <section class="relative w-full h-96 md:h-[500px] overflow-hidden">
            <!-- Background Image - Full Width -->
            <div class="absolute inset-0">
                <img :src="aboutUsImage" alt="About Us - LiteraForge" class="w-full h-full object-cover sharp-image" />
            </div>

            <!-- Subtle overlay for depth -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/50"></div>

            <!-- Content Overlay - Right Side -->
            <div class="relative z-10 h-full flex items-center justify-end">
                <div class="container mx-auto px-6 md:px-12">
                    <div class="max-w-[180px] md:max-w-md ml-auto">
                        <!-- Card with clip path for unique shape -->
                        <div class="relative bg-gradient-to-br from-white/80 to-gray-50/75 backdrop-blur-sm p-4 md:p-8 shadow-2xl"
                            style="clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);">
                            <h1
                                class="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2 md:mb-3">
                                Contact
                            </h1>
                            <p class="text-sm md:text-lg text-[#4D7EFF] font-semibold italic">
                                Clarity, Structure, and<br class="md:hidden"> Meaningful Impact
                            </p>
                            <div class="mt-4 md:mt-5 w-12 md:w-16 h-1 bg-gradient-to-r from-[#4D7EFF] to-blue-300">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
// Import images from assets directory
import aboutUsImage from '~/assets/img/about-us-literaforge.jpg';
</script>

<style scoped>
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
    h1 {
        letter-spacing: 0.025em;
    }
}

/* Hover effects */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}
</style>