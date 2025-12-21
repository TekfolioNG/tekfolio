<template>
    <section class="py-8 lg:py-12 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12 lg:mb-16">
                <div class="inline-flex items-center gap-3 mb-4 mx-auto lg:mx-0">
                    <div class="w-3 h-3 bg-[#4D7EFF] rounded-full"></div>
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                        What We Offer
                    </h2>
                </div>
            </div>

            <!-- Services Grid -->
            <div class="space-y-8 lg:space-y-12">
                <!-- First Row: Image Left, Two Cards Right -->
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <!-- Left Column: First Image -->
                    <div class="group relative rounded-2xl overflow-hidden shadow-lg">
                        <div class="relative h-[300px] lg:h-[450px] overflow-hidden">
                            <img :src="trainingImage" alt="Training - LiteraForge"
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Two Service Cards Stacked -->
                    <div class="space-y-6 lg:space-y-8">
                        <!-- Workplace Efficiency Card -->
                        <div
                            class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-[#4D7EFF]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-1xl lg:text-2xl font-bold text-gray-900 mb-2">Workplace Efficiency
                                    </h3>
                                    <div class="w-16 h-1 bg-[#4D7EFF]"></div>
                                </div>
                            </div>
                            <p class="text-gray-900 leading-relaxed text-base lg:text-lg">
                                Better time management, smarter prioritization, and structured workflows that reduce
                                friction and improve daily output.
                            </p>
                        </div>

                        <!-- Employee Engagement Card -->
                        <div
                            class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-[#4D7EFF]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-1xl lg:text-2xl font-bold text-gray-900 mb-2">Employee Engagement
                                    </h3>
                                    <div class="w-16 h-1 bg-[#4D7EFF]"></div>
                                </div>
                            </div>
                            <p class="text-gray-900 leading-relaxed text-base lg:text-lg">
                                Stronger communication, collaboration, and motivation—helping your teams connect better
                                and work with a deeper sense of ownership.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Second Row: Two Cards Left, Image Right -->
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <!-- Left Column: Two Service Cards Stacked -->
                    <div class="space-y-6 lg:space-y-8">
                        <!-- Skills Development Card -->
                        <div
                            class="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-1xl lg:text-2xl font-bold text-white mb-2">Skills Development
                                    </h3>
                                    <div class="w-16 h-1 bg-white/50"></div>
                                </div>
                            </div>
                            <p class="text-white/95 leading-relaxed text-base lg:text-lg">
                                Practical tools for problem-solving, adaptability, resilience, and professional
                                decision-making in fast-paced, evolving environments.
                            </p>
                        </div>

                        <!-- Measurable Results Card -->
                        <div
                            class="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-1xl lg:text-2xl font-bold text-white mb-2">Measurable Results
                                    </h3>
                                    <div class="w-16 h-1 bg-white/50"></div>
                                </div>
                            </div>
                            <p class="text-white/95 leading-relaxed text-base lg:text-lg">
                                We design every session with clear objectives and visible outcomes so you can track
                                progress and performance improvements with confidence.
                            </p>
                        </div>
                    </div>

                    <!-- Right Column: Second Image -->
                    <div class="group relative rounded-2xl overflow-hidden shadow-lg">
                        <div class="relative h-[300px] lg:h-[450px] overflow-hidden">
                            <img :src="training2Image" alt="Training - LiteraForge"
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Why Training Matters Section -->
            <div class="mt-16 lg:mt-20 max-w-4xl mx-auto">
                <div class="text-center mb-8">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Why Productivity Training Matters
                    </h3>
                    <div class="w-20 h-1 bg-[#4D7EFF] mx-auto mb-6"></div>
                    <p class="text-lg text-gray-700 leading-relaxed mb-8">
                        High-performance teams don't happen by accident. They're built through clarity, structure, and
                        intentional development. Our training helps organizations:
                    </p>
                </div>

                <!-- Benefits List -->
                <div class="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
                    <ul class="grid md:grid-cols-2 gap-4 lg:gap-6">
                        <li class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-6 h-6 rounded-full bg-[#4D7EFF] flex items-center justify-center mt-1">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span class="text-lg text-gray-900">Reduce workplace friction</span>
                        </li>
                        <li class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-6 h-6 rounded-full bg-[#4D7EFF] flex items-center justify-center mt-1">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span class="text-lg text-gray-900">Improve communication and collaboration</span>
                        </li>
                        <li class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-6 h-6 rounded-full bg-[#4D7EFF] flex items-center justify-center mt-1">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span class="text-lg text-gray-900">Strengthen individual and team productivity</span>
                        </li>
                        <li class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-6 h-6 rounded-full bg-[#4D7EFF] flex items-center justify-center mt-1">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span class="text-lg text-gray-900">Build healthier, more resilient work cultures</span>
                        </li>
                    </ul>

                    <p class="text-lg text-gray-900 leading-relaxed mt-8 text-center font-medium">
                        When employees operate at their best, the entire organization grows stronger.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images from assets directory
import training2Image from '~/assets/img/staff-training-literaforge.jpeg';
import trainingImage from '~/assets/img/training2-literaforge.jpg';
</script>

<style scoped>
/* Ensure smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Hover effects */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}
</style>