<template>
    <div class="min-h-screen bg-white">

        <!-- Hero Section with New Design -->
        <section class="relative w-full h-96 md:h-[500px] overflow-hidden">
            <!-- Background Image - Full Width -->
            <div class="absolute inset-0">
                <img :src="aboutUsImage" alt="About Us - LiteraForge" class="w-full h-full object-cover sharp-image" />
            </div>

            <!-- Geometric Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#4D7EFF]/20 via-transparent to-[#012430]/30">
                <div
                    class="absolute top-0 right-0 w-64 h-64 bg-[#4D7EFF]/10 rounded-full -translate-y-32 translate-x-32 blur-3xl">
                </div>
                <div
                    class="absolute bottom-0 left-0 w-80 h-80 bg-[#012430]/10 rounded-full translate-y-32 -translate-x-32 blur-3xl">
                </div>
            </div>

            <!-- Content Overlay - Centered with New Design -->
            <div class="relative z-10 h-full flex items-center justify-center">
                <div class="container mx-auto px-6 md:px-12 text-center">
                    <div
                        class="max-w-2xl bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-2xl border border-white/30 transform hover:scale-105 transition-transform duration-500">
                        <!-- Main Heading -->
                        <h1
                            class="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
                            ABOUT US
                        </h1>

                        <!-- Subheading -->
                        <div
                            class="inline-block bg-gradient-to-r from-[#4D7EFF] to-[#3A6BD9] px-6 py-3 rounded-full shadow-lg">
                            <p class="text-lg md:text-xl font-semibold text-white tracking-wide uppercase">
                                Clarity, Structure, and Meaningful Impact
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Story Section - 2 Columns on Desktop -->
        <section class="w-full bg-gradient-to-br from-white via-blue-50/30 to-white py-16 lg:py-24">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Text Content - Left Column -->
                    <div class="order-2 lg:order-1">
                        <!-- Section Title -->
                        <div class="mb-8">
                            <div class="inline-flex items-center gap-3 mb-4">
                                <div class="w-3 h-3 bg-[#4D7EFF] rounded-full"></div>
                                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                                    Our Story
                                </h2>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="space-y-6 text-gray-700">
                            <p class="text-lg md:text-xl leading-relaxed">
                                <strong class="text-gray-900">Litera-Forge exists to help individuals and organizations
                                    communicate with clarity, operate efficiently, and bring their ideas to
                                    life.</strong> We blend strategy, creativity, and execution to transform ideas into
                                work that inspires, informs, and leads.
                            </p>

                            <p class="text-lg leading-relaxed">
                                <strong class="text-gray-900">Litera-Forge was built on a simple belief: every idea
                                    deserves structure.</strong> Many leaders, founders, and authors know what they want
                                to say but struggle to shape it into something clear and compelling. We stepped in to
                                bridge that gap.
                            </p>

                            <p class="text-lg leading-relaxed">
                                Over the years, we've supported clients across multiple industries through advisory,
                                productivity training, ghostwriting, and publishing—helping them articulate their voice,
                                refine their vision, and execute with confidence.
                            </p>
                        </div>

                        <!-- Accent Element -->
                        <div class="mt-8 flex items-center gap-4">
                            <div class="w-12 h-0.5 bg-[#4D7EFF]"></div>
                            <div class="text-sm text-[#4D7EFF] font-semibold uppercase tracking-wide">Building Stories
                                That Last</div>
                        </div>
                    </div>

                    <!-- Image - Right Column -->
                    <div class="order-1 lg:order-2">
                        <div class="relative group">
                            <!-- Vertical Image Container -->
                            <div
                                class="aspect-[3/4] max-w-md mx-auto lg:max-w-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                                <img :src="ourStoryImage" alt="Our Story - LiteraForge"
                                    class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>

                            <!-- Decorative Elements -->
                            <div
                                class="absolute -top-4 -right-4 w-8 h-8 bg-[#4D7EFF] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                            </div>
                            <div
                                class="absolute -bottom-4 -left-4 w-6 h-6 bg-[#012430] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                            </div>

                            <!-- Image Label -->
                            <div
                                class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                                <p class="text-sm font-semibold text-gray-900">Crafting Your Narrative</p>
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

/* Hover effects */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}
</style>