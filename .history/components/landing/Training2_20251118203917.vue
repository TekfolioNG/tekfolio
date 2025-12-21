<template>
    <section class="px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div class="max-w-7xl mx-auto">
            <!-- Services Grid -->
            <div class="space-y-8 lg:space-y-12">
                <!-- First Row: Image Left, Two Cards Right -->
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <!-- Left Column: First Image -->
                    <div class="group relative rounded-2xl overflow-hidden shadow-lg">
                        <div class="relative h-full min-h-[300px] lg:min-h-[400px] overflow-hidden">
                            <img :src="trainingImage" alt="Training- LiteraForge"
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Two Service Cards Stacked -->
                    <div class="space-y-6 lg:space-y-8">
                        <!-- Business Advisory Card -->
                        <div
                            class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-[#4D7EFF]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Workplace Efficiency
                                    </h3>
                                    <div class="w-16 h-1 bg-[#4D7EFF]"></div>
                                </div>
                            </div>
                            <p class="text-gray-900 leading-relaxed text-base lg:text-lg">
                                Better time management, smarter prioritization, and structured workflows that reduce
                                friction and improve daily output.

                            </p>
                        </div>

                        <!-- Business Restructuring Card -->
                        <div
                            class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-[#4D7EFF]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Employee Engagement

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
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <!-- Left Column: Two Service Cards Stacked -->
                    <div class="space-y-6 lg:space-y-8">
                        <!-- Executive Coaching Card -->
                        <div
                            class="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">Skills Development
                                    </h3>
                                    <div class="w-16 h-1 bg-white/50"></div>
                                </div>
                            </div>
                            <p class="text-white/95 leading-relaxed text-base lg:text-lg">
                                Practical tools for problem-solving, adaptability, resilience, and professional
                                decision-making in fast-paced, evolving environments.

                            </p>
                        </div>

                        <!-- Consultation Card -->
                        <div
                            class="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">Measurable Results
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
                        <div class="relative h-full min-h-[300px] lg:min-h-[500px] overflow-hidden">
                            <img :src="training2Image" alt="Training2 - LiteraForge"
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                            </div>
                        </div>
                    </div>
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