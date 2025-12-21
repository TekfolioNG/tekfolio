<template>
    <!-- Business Advisory Section -->
    <section class="w-full bg-gradient-to-br from-white via-gray-50 to-blue-50/20 py-16 lg:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 bg-[#4D7EFF]/10 px-4 py-2 rounded-full mb-6">
                    <div class="w-2 h-2 bg-[#4D7EFF] rounded-full"></div>
                    <span class="text-[#4D7EFF] font-semibold text-sm uppercase tracking-wide">Our Expertise</span>
                </div>
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Strategic <span class="text-[#4D7EFF]">Business Solutions</span>
                </h2>
                <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    Comprehensive advisory services designed to elevate your organization's performance,
                    streamline operations, and drive sustainable growth.
                </p>
            </div>

            <!-- Main Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <!-- Left Column - Services List -->
                <div class="space-y-8">
                    <!-- Business Advisory -->
                    <div
                        class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                        <div class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-12 h-12 bg-[#4D7EFF]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div class="w-6 h-6 bg-[#4D7EFF] rounded-full"></div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">Business Advisory</h3>
                                <p class="text-gray-700 leading-relaxed text-lg">
                                    Clear, practical guidance to help leaders make informed decisions, respond to
                                    industry shifts, and uncover new opportunities. We work with you to refine
                                    strategies, strengthen direction, and turn uncertainty into clarity.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Business Restructuring -->
                    <div
                        class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                        <div class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-12 h-12 bg-[#4D7EFF]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div class="w-6 h-6 bg-[#4D7EFF] rounded-full"></div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">Business Restructuring</h3>
                                <p class="text-gray-700 leading-relaxed text-lg">
                                    Support for organizations seeking improved performance and stronger internal
                                    alignment. We help streamline systems, optimize workflows, and build structures that
                                    are agile, efficient, and ready for growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Executive Coaching -->
                    <div
                        class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                        <div class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-12 h-12 bg-[#4D7EFF]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div class="w-6 h-6 bg-[#4D7EFF] rounded-full"></div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">Executive Coaching</h3>
                                <p class="text-gray-700 leading-relaxed text-lg">
                                    Leadership development tailored to executives who want to improve clarity,
                                    communication, decision-making, and strategic performance. We help leaders lead with
                                    confidence, structure, and greater impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Consultation -->
                    <div
                        class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                        <div class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-12 h-12 bg-[#4D7EFF]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div class="w-6 h-6 bg-[#4D7EFF] rounded-full"></div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">Consultation</h3>
                                <p class="text-gray-700 leading-relaxed text-lg">
                                    Hands-on support for operational efficiency and strategic implementation. We help
                                    you align processes, refine workflows, and strengthen systems that support daily
                                    operations and long-term goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Images -->
                <div class="space-y-8">
                    <!-- Top Image -->
                    <div class="relative group h-full min-h-[400px]">
                        <div
                            class="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                            <img :src="businessEthicsImage" alt="Business Ethics and Advisory"
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none">
                        </div>
                        <div class="absolute bottom-6 left-6 right-6">
                            <div class="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
                                <p class="text-lg font-semibold text-gray-900">Strategic Business Advisory</p>
                                <p class="text-sm text-gray-600 mt-1">Guiding leaders toward informed decisions and
                                    sustainable growth</p>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Image -->
                    <div class="relative group h-full min-h-[400px]">
                        <div
                            class="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                            <img :src="bizAdvisoryImage" alt="Business Advisory Services"
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none">
                        </div>
                        <div class="absolute bottom-6 left-6 right-6">
                            <div class="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
                                <p class="text-lg font-semibold text-gray-900">Operational Excellence</p>
                                <p class="text-sm text-gray-600 mt-1">Streamlining processes for maximum efficiency and
                                    impact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="text-center mt-16 pt-8 border-t border-gray-200">
                <p class="text-xl text-gray-700 mb-8">Ready to transform your business strategy?</p>
                <NuxtLink to="/contact"
                    class="inline-flex items-center px-8 py-4 bg-[#4D7EFF] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3A6BD9] hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase">
                    Start Your Transformation
                    <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </NuxtLink>
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