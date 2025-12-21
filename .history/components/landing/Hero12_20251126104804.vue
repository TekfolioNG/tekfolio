<template>
    <div class="min-h-screen bg-white">

        <!-- Hero Section -->

        <section class="relative w-full h-96 md:h-[500px] overflow-hidden">
            <!-- Background Image - Full Width -->
            <div class="absolute inset-0">
                <img :src="ghostwritingImage" alt="  Employee Productivity Training"
                    class="w-full h-[650px] object-cover sharp-image flip-horizontal" />

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
                                Ghostwriting Services

                            </h1>

                            <div class="mt-4 md:mt-5 w-12 md:w-16 h-1 bg-gradient-to-r from-[#4D7EFF] to-blue-300">
                            </div>
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
                            Your Ideas. Your Voice. Our Craft.

                        </p>
                        <p class="text-lg sm:text-xl text-gray-700 leading-relaxed text-center mb-4">
                            We help thought leaders, professionals, and organizations turn their insights into
                            well-crafted, impactful writing—without the stress of doing it yourself. You retain full
                            ownership; we provide the structure, clarity, and creative skill needed to bring your ideas
                            to life. From authoring a book to preparing strategic documents, or shaping your personal
                            story, we ensure the final work reflects <b>your voice, your vision, and your message.</b>

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
import ghostwritingImage from '~/assets/img/ghostwritinghero-literaforge.avif';
</script>

<style scoped>
/* Import Barlow font if not already imported globally */


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