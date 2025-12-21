<template>
    <div class="min-h-screen bg-white">

        <section class="relative w-full h-96 md:h-[500px] overflow-hidden">
            <!-- Background Image - Full Width -->
            <div class="absolute inset-0">
                <img :src="aboutUsImage" alt="About Us - Elevation Consulting"
                    class="w-full h-full object-cover sharp-image" />
            </div>

            <!-- Subtle overlay for depth -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/40"></div>

            <!-- Content Overlay - Right Side -->
            <div class="relative z-10 h-full flex items-center justify-end">
                <div class="container mx-auto px-6 md:px-12">
                    <div class="max-w-md ml-auto bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
                        <h1
                            class="font-barlow-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight tracking-wide">
                            ABOUT US
                        </h1>
                        <div class="mt-4 w-16 h-1 bg-[#0077AA]"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Description Section - Reduced Margins -->
        <section class="w-full bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Main Description -->
                <div class="mb-8">
                    <div class="max-w-4xl mx-auto">
                        <p
                            class="text-xl sm:text-2xl lg:text-3xl text-gray-800 leading-relaxed lg:leading-relaxed font-light text-center mb-6">
                            Across Africa's private sector, small and growing businesses face barriers that limit their
                            potential: Access to resources, strategy gaps, and fragmented support systems. Elevation
                            Consulting exists to change that narrative.
                        </p>
                        <p class="text-lg sm:text-xl text-gray-700 leading-relaxed text-center mb-4">
                            We are a boutique enterprise support firm committed to advancing business excellence and
                            building a thriving ecosystem of sustainable, investment-ready enterprises.
                        </p>
                        <p class="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
                            Through tailored programs, technical support, and capacity-building initiatives, we help
                            entrepreneurs, corporations, and development institutions strengthen systems, unlock growth,
                            and drive inclusive economic progress.
                        </p>
                    </div>
                </div>

                <!-- Divider -->
                <div class="flex justify-center mb-8">
                    <div class="w-24 h-px bg-gradient-to-r from-transparent via-[#0077AA] to-transparent"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import image from assets directory
import aboutUsImage from '~/assets/img/about-us-elevation.jpg';
</script>

<style scoped>
/* Import Barlow font if not already imported globally */
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
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
    .font-barlow-extrabold {
        letter-spacing: 0.025em;
    }
}
</style>