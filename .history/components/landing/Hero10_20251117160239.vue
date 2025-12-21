<template>
    <div class="min-h-screen bg-white">

        <section class="relative w-full h-96 md:h-[500px] overflow-hidden">
            <!-- Background Image - Full Width -->
            <div class="absolute inset-0">
                <img :src="aboutUsImage" alt="About Us - LiteraForge" class="w-full h-full object-cover sharp-image" />
            </div>

            <!-- Subtle overlay for depth -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/50"></div>

            <!-- Content Overlay - Centered -->
            <div class="relative z-10 h-full flex items-center justify-center">
                <div class="container mx-auto px-6 md:px-12 text-center">
                    <div
                        class="max-w-3xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20">
                        <!-- Badge -->
                        <div class="inline-flex items-center gap-2 bg-[#4D7EFF]/10 px-4 py-2 rounded-full mb-6">
                            <div class="w-2 h-2 bg-[#4D7EFF] rounded-full"></div>
                            <span class="text-[#4D7EFF] font-semibold text-sm uppercase tracking-wide">WHO WE ARE</span>
                        </div>

                        <!-- Main Heading -->
                        <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-4">
                            ABOUT US
                        </h1>

                        <!-- Subheading -->
                        <p class="text-xl md:text-2xl lg:text-3xl text-[#4D7EFF] font-semibold leading-relaxed mb-6">
                            Clarity, Structure, and Meaningful Impact
                        </p>

                        <!-- Accent Line -->
                        <div class="flex justify-center">
                            <div class="w-20 h-1 bg-[#4D7EFF] rounded-full"></div>
                        </div>
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
                            At LiteraForge, Storytelling is at Our Core
                        </p>
                        <p class="text-lg sm:text-xl text-gray-700 leading-relaxed text-center mb-4">
                            We believe that powerful narratives and strategic content can transform businesses and
                            elevate brands.
                            Our mission is to bring clarity to complex ideas and structure to ambitious visions.
                        </p>
                        <p class="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
                            Through ghostwriting, business solutions, and professional training, we empower
                            entrepreneurs
                            and organizations to communicate with impact and achieve meaningful results.
                        </p>
                    </div>
                </div>

                <!-- Divider -->
                <div class="flex justify-center mb-8">
                    <div class="w-24 h-px bg-gradient-to-r from-transparent via-[#4D7EFF] to-transparent"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import image from assets directory
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
    .font-barlow-extrabold {
        letter-spacing: 0.025em;
    }
}
</style>