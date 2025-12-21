<template>
    <!-- Business Advisory Section -->
    <section class="w-full bg-gradient-to-br from-white via-gray-50 to-blue-50/20 py-8 lg:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- First Row -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                <!-- Left Column - Image -->
                <div class="relative group h-full min-h-[400px] lg:min-h-[500px]">
                    <div
                        class="absolute inset-0 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                        <img :src="businessEthicsImage" alt="Business Ethics and Advisory"
                            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none">
                    </div>
                </div>

                <!-- Right Column - 2 Service Cards -->
                <div class="space-y-6">
                    <!-- Business Advisory -->
                    <div
                        class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
                        <div class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-10 h-10 bg-[#4D7EFF]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div class="w-5 h-5 bg-[#4D7EFF] rounded-full"></div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-gray-900 mb-3">Business Advisory</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Clear, practical guidance to help leaders make informed decisions, respond to
                                    industry shifts, and uncover new opportunities. We work with you to refine
                                    strategies, strengthen direction, and turn uncertainty into clarity.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Business Restructuring -->
                    <div
                        class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
                        <div class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-10 h-10 bg-[#4D7EFF]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div class="w-5 h-5 bg-[#4D7EFF] rounded-full"></div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-gray-900 mb-3">Business Restructuring</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Support for organizations seeking improved performance and stronger internal
                                    alignment. We help streamline systems, optimize workflows, and build structures that
                                    are agile, efficient, and ready for growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second Row -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <!-- Left Column - 2 Service Cards -->
                <div class="space-y-6 order-2 lg:order-1">
                    <!-- Executive Coaching -->
                    <div
                        class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
                        <div class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-10 h-10 bg-[#4D7EFF]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div class="w-5 h-5 bg-[#4D7EFF] rounded-full"></div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-gray-900 mb-3">Executive Coaching</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Leadership development tailored to executives who want to improve clarity,
                                    communication, decision-making, and strategic performance. We help leaders lead with
                                    confidence, structure, and greater impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Consultation -->
                    <div
                        class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
                        <div class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-10 h-10 bg-[#4D7EFF]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div class="w-5 h-5 bg-[#4D7EFF] rounded-full"></div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Hands-on support for operational efficiency and strategic implementation. We help
                                    you align processes, refine workflows, and strengthen systems that support daily
                                    operations and long-term goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Image -->
                <div class="relative group h-full min-h-[400px] lg:min-h-[500px] order-1 lg:order-2">
                    <div
                        class="absolute inset-0 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                        <img :src="bizAdvisoryImage" alt="Business Advisory Services"
                            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images
import bizAdvisoryImage from '~/assets/img/bizadivosory-literaforge.avif';
import businessEthicsImage from '~/assets/img/business-ethics-literaforge.jpg';
</script>

<style scoped>
/* Custom hover effects */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}

/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}
</style>