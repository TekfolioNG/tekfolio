<template>
    <div class="min-h-screen bg-white">

        <section class="relative w-full h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden">
            <!-- Background Image - Full Width -->
            <div class="absolute inset-0">
                <img :src="aboutUsImage" alt="About Us - LiteraForge" class="w-full h-full object-cover sharp-image" />
            </div>

            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#4D7EFF]/60 via-gray-900/50 to-black/70"></div>

            <!-- Content Overlay - Centered -->
            <div class="relative z-10 h-full flex items-center justify-center">
                <div class="container mx-auto px-6 md:px-12">
                    <div class="max-w-3xl mx-auto text-center">
                        <!-- Badge -->
                        <div class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6">
                            <span class="text-white font-semibold text-sm uppercase tracking-wider">About Us</span>
                        </div>

                        <!-- Main Heading -->
                        <h1
                            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Clarity, Structure, and <span
                                class="text-[#4D7EFF] bg-white/10 px-3 py-1 rounded-lg">Meaningful Impact</span>
                        </h1>

                        <!-- Decorative line -->
                        <div class="flex justify-center">
                            <div class="w-24 h-1 bg-gradient-to-r from-transparent via-[#4D7EFF] to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Animated scroll indicator -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>

        <!-- Description Section -->
        <section class="w-full bg-gradient-to-b from-blue-50/30 to-white py-16 lg:py-20">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Main Description -->
                <div class="mb-10">
                    <div class="max-w-4xl mx-auto">
                        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
                            Who We Are
                        </h2>

                        <div class="space-y-6">
                            <p class="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
                                At <span class="font-semibold text-[#4D7EFF]">LiteraForge</span>, we transform ideas
                                into published works and business success. We specialize in ghostwriting, publishing,
                                business solutions, and executive training — helping entrepreneurs, authors, and
                                organizations bring clarity to their vision and structure to their goals.
                            </p>

                            <p class="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
                                Whether you're writing your story, refining your business strategy, or building a
                                high-performing team, we provide the expertise and support you need to create meaningful
                                impact.
                            </p>

                            <p class="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
                                Our approach is personal, strategic, and results-driven — because we believe that every
                                great achievement starts with clarity and ends with tangible success.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Divider with icon -->
                <div class="flex justify-center items-center gap-4 mb-10">
                    <div class="w-16 h-px bg-gradient-to-r from-transparent via-[#4D7EFF] to-transparent"></div>
                    <div class="w-2 h-2 bg-[#4D7EFF] rounded-full"></div>
                    <div class="w-16 h-px bg-gradient-to-r from-transparent via-[#4D7EFF] to-transparent"></div>
                </div>

                <!-- Call to action -->
                <div class="text-center">
                    <p class="text-xl font-semibold text-gray-900 mb-6">
                        Ready to transform your ideas into reality?
                    </p>
                    <NuxtLink to="/contact"
                        class="inline-flex items-center px-8 py-4 bg-[#4D7EFF] hover:bg-[#3D6EEF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                        Book A Clarity Session
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                    </NuxtLink>
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

/* Smooth animations */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}
</style>