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
                    <div class="max-w-lg ml-auto">
                        <!-- Card with clip path for unique shape -->
                        <div class="relative bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm p-8 md:p-10 shadow-2xl"
                            style="clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);">
                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3">
                                About Us
                            </h1>
                            <p class="text-lg md:text-xl text-[#4D7EFF] font-semibold italic">
                                Clarity, Structure, and Meaningful Impact
                            </p>
                            <div class="mt-6 w-20 h-1 bg-gradient-to-r from-[#4D7EFF] to-blue-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Story Section -->
        <section class="w-full bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <!-- Content - Left Side -->
                    <div class="order-2 lg:order-1 space-y-6">
                        <div>
                            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our <span class="text-[#4D7EFF]">Story</span>
                            </h2>

                            <div class="space-y-5">
                                <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                                    Litera-Forge exists to help individuals and organizations communicate with clarity,
                                    operate efficiently, and bring their ideas to life. We blend strategy, creativity,
                                    and execution to transform ideas into work that inspires, informs, and leads.
                                </p>

                                <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                                    Litera-Forge was built on a simple belief: <span
                                        class="font-semibold text-gray-900">every idea deserves structure.</span> Many
                                    leaders, founders, and authors know what they want to say but struggle to shape it
                                    into something clear and compelling. We stepped in to bridge that gap.
                                </p>

                                <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                                    Over the years, we've supported clients across multiple industries through advisory,
                                    productivity training, ghostwriting, and publishing—helping them articulate their
                                    voice, refine their vision, and execute with confidence.
                                </p>
                            </div>
                        </div>

                        <!-- Divider -->
                        <div class="flex items-center gap-3 pt-4">
                            <div class="w-12 h-px bg-gradient-to-r from-[#4D7EFF] to-transparent"></div>
                            <div class="w-2 h-2 bg-[#4D7EFF] rounded-full"></div>
                            <div class="w-12 h-px bg-gradient-to-l from-[#4D7EFF] to-transparent"></div>
                        </div>
                    </div>

                    <!-- Image - Right Side -->
                    <div class="order-1 lg:order-2">
                        <div
                            class="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <img :src="ourStoryImage" alt="Our Story - LiteraForge"
                                class="w-full h-auto object-cover aspect-[3/4]" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none">
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
import ourStoryImage from '~/assets/img/our-story-literaforge.jpg';
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