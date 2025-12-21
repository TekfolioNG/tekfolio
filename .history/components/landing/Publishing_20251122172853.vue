<template>
    <section class="py-16 lg:py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16 lg:mb-20">
                <div class="inline-flex items-center gap-3 mb-6 mx-auto">
                    <div class="w-3 h-3 bg-[#4D7EFF] rounded-full"></div>
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                        What We Offer
                    </h2>
                </div>
            </div>

            <!-- Services Grid - Consistent 2x2 Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
                <!-- ISBN Acquisition -->
                <div
                    class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 border border-blue-100/50">
                    <div class="flex items-start gap-6 mb-6">
                        <div
                            class="w-16 h-16 bg-[#4D7EFF]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4D7EFF]/20 transition-colors duration-300">
                            <svg class="w-8 h-8 text-[#4D7EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3
                                class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                ISBN Acquisition
                            </h3>
                            <div class="w-20 h-1 bg-[#4D7EFF] mb-6"></div>
                            <p class="text-gray-900 leading-relaxed text-lg lg:text-xl">
                                We secure your ISBN and ensure your book is properly registered for global
                                identification.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Manuscript Restructuring & Refinement -->
                <div
                    class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 border border-blue-100/50">
                    <div class="flex items-start gap-6 mb-6">
                        <div
                            class="w-16 h-16 bg-[#4D7EFF]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4D7EFF]/20 transition-colors duration-300">
                            <svg class="w-8 h-8 text-[#4D7EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3
                                class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                Manuscript Restructuring & Refinement
                            </h3>
                            <div class="w-20 h-1 bg-[#4D7EFF] mb-6"></div>
                            <p class="text-gray-900 leading-relaxed text-lg lg:text-xl">
                                Our editors reshape your draft for clarity, flow, and impact while keeping your voice
                                intact.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Professional Cover & Interior Design -->
                <div
                    class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 border border-blue-100/50">
                    <div class="flex items-start gap-6 mb-6">
                        <div
                            class="w-16 h-16 bg-[#4D7EFF]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4D7EFF]/20 transition-colors duration-300">
                            <svg class="w-8 h-8 text-[#4D7EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3
                                class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                Professional Cover & Interior Design
                            </h3>
                            <div class="w-20 h-1 bg-[#4D7EFF] mb-6"></div>
                            <p class="text-gray-900 leading-relaxed text-lg lg:text-xl">
                                From compelling covers to clean interior layouts, we design books that meet industry
                                standards and captivate readers.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Print & Digital Publishing -->
                <div
                    class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 border border-blue-100/50">
                    <div class="flex items-start gap-6 mb-6">
                        <div
                            class="w-16 h-16 bg-[#4D7EFF]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4D7EFF]/20 transition-colors duration-300">
                            <svg class="w-8 h-8 text-[#4D7EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3
                                class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                Print & Digital Publishing
                            </h3>
                            <div class="w-20 h-1 bg-[#4D7EFF] mb-6"></div>
                            <p class="text-gray-900 leading-relaxed text-lg lg:text-xl">
                                We handle the full publishing setup, preparing your book for high-quality print and wide
                                digital distribution.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Tailored Book Marketing Strategies -->
                <div
                    class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 border border-blue-100/50 lg:col-span-2">
                    <div class="flex items-start gap-6 mb-6">
                        <div
                            class="w-16 h-16 bg-[#4D7EFF]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4D7EFF]/20 transition-colors duration-300">
                            <svg class="w-8 h-8 text-[#4D7EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3
                                class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                Tailored Book Marketing Strategies
                            </h3>
                            <div class="w-20 h-1 bg-[#4D7EFF] mb-6"></div>
                            <p class="text-gray-900 leading-relaxed text-lg lg:text-xl">
                                We create practical marketing plans to help you reach your audience, increase
                                visibility, and drive sales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- The Result Section -->
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-8">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        The Result
                    </h3>
                    <div class="w-20 h-1 bg-[#4D7EFF] mx-auto mb-6"></div>
                </div>

                <!-- Result Card -->
                <div
                    class="bg-gradient-to-br from-[#4D7EFF] to-blue-600 rounded-2xl shadow-2xl p-8 lg:p-12 text-center">
                    <div class="max-w-3xl mx-auto">
                        <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p class="text-2xl lg:text-3xl font-bold text-white leading-tight mb-6">
                            A professionally crafted book you can be proud of—one that reflects your message, elevates
                            your voice, and builds your legacy.
                        </p>
                        <div class="w-24 h-1 bg-white/50 mx-auto"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic if needed
</script>

<style scoped>
/* Ensure smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Enhanced hover effects */
.group:hover {
    transform: translateY(-4px);
}

/* Focus styles for accessibility */
.group:focus {
    outline: 2px solid #4D7EFF;
    outline-offset: 4px;
    border-radius: 20px;
}
</style>