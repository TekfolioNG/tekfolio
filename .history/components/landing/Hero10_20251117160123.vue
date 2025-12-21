<template>
    <div class="min-h-screen bg-white">

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
                    <div class="max-w-md ml-auto bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            About Us
                        </h1>
                        <div class="mt-4 w-16 h-1 bg-[#4D7EFF]"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Description Section -->
        <section class="w-full bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Main Description -->
                <div class="mb-8">
                    <div class="max-w-4xl mx-auto">
                        <p
                            class="text-xl sm:text-2xl lg:text-3xl text-gray-800 leading-relaxed font-medium text-center mb-6 italic">
                            Clarity, Structure, and Meaningful Impact
                        </p>
                        <p class="text-lg sm:text-xl text-gray-700 leading-relaxed text-center mb-4">
                            At LiteraForge, we transform ideas into published works and business success. We specialize
                            in ghostwriting, publishing, business solutions, and executive training — helping
                            entrepreneurs, authors, and organizations bring clarity to their vision and structure to
                            their goals.
                        </p>
                        <p class="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
                            Whether you're writing your story, refining your business strategy, or building a
                            high-performing team, we provide the expertise and support you need to create meaningful
                            impact.
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
    h1 {
        letter-spacing: 0.025em;
    }
}
</style>