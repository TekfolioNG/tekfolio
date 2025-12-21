<template>
    <section class="py-16 lg:py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12 lg:mb-16">
                <div class="inline-flex items-center gap-3 mb-4">
                    <div class="w-3 h-3 bg-[#4D7EFF] rounded-full"></div>
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                        Our Services
                    </h2>
                </div>
                <p class="text-lg text-gray-900 max-w-3xl mx-auto">
                    From strategy to execution, we provide the guidance and structure leaders need to move forward with
                    clarity and confidence.
                </p>
            </div>

            <!-- Services Grid -->
            <div class="space-y-16 lg:space-y-24">
                <!-- Business Advisory & Restructuring Row -->
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <!-- Business Advisory Card -->
                    <div
                        class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <!-- Image -->
                        <div class="relative h-64 lg:h-80 overflow-hidden">
                            <img :src="businessEthicsImage" alt="Business Advisory - LiteraForge"
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                            </div>

                            <!-- Image Label -->
                            <div class="absolute bottom-6 left-6 right-6">
                                <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">Business Advisory</h3>
                                <div class="w-16 h-1 bg-[#4D7EFF]"></div>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="p-6 lg:p-8">
                            <p class="text-gray-900 leading-relaxed text-base lg:text-lg">
                                Clear, practical guidance to help leaders make informed decisions, respond to industry
                                shifts, and uncover new opportunities. We work with you to refine strategies, strengthen
                                direction, and turn uncertainty into clarity.
                            </p>
                        </div>
                    </div>

                    <!-- Business Restructuring Card -->
                    <div
                        class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <!-- Image -->
                        <div class="relative h-64 lg:h-80 overflow-hidden">
                            <img :src="bizAdvisoryImage" alt="Business Restructuring - LiteraForge"
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                            </div>

                            <!-- Image Label -->
                            <div class="absolute bottom-6 left-6 right-6">
                                <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">Business Restructuring</h3>
                                <div class="w-16 h-1 bg-[#4D7EFF]"></div>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="p-6 lg:p-8">
                            <p class="text-gray-900 leading-relaxed text-base lg:text-lg">
                                Support for organizations seeking improved performance and stronger internal alignment.
                                We help streamline systems, optimize workflows, and build structures that are agile,
                                efficient, and ready for growth.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Executive Coaching & Consultation Row -->
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <!-- Executive Coaching Card -->
                    <div
                        class="group relative bg-gradient-to-br from-[#4D7EFF] to-[#3D6EEF] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div class="p-6 lg:p-8">
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
                                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">Executive Coaching</h3>
                                    <div class="w-16 h-1 bg-white/50"></div>
                                </div>
                            </div>
                            <p class="text-white/95 leading-relaxed text-base lg:text-lg">
                                Leadership development tailored to executives who want to improve clarity,
                                communication, decision-making, and strategic performance. We help leaders lead with
                                confidence, structure, and greater impact.
                            </p>
                        </div>
                    </div>

                    <!-- Consultation Card -->
                    <div
                        class="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div class="p-6 lg:p-8">
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
                                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">Consultation</h3>
                                    <div class="w-16 h-1 bg-white/50"></div>
                                </div>
                            </div>
                            <p class="text-white/95 leading-relaxed text-base lg:text-lg">
                                Hands-on support for operational efficiency and strategic implementation. We help you
                                align processes, refine workflows, and strengthen systems that support daily operations
                                and long-term goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="mt-16 lg:mt-20 text-center">
                <div class="inline-flex flex-col items-center gap-4">
                    <p class="text-lg text-gray-900 font-medium">Ready to get started?</p>
                    <a href="/contact"
                        class="inline-block px-8 py-4 bg-[#4D7EFF] hover:bg-[#3D6EEF] text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wide">
                        Let's Talk
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images from assets directory
import bizAdvisoryImage from '~/assets/img/bizadivosory-literaforge.avif';
import businessEthicsImage from '~/assets/img/business-ethics-literaforge.jpg';
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