<template>
    <section class="py-12 lg:py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12 lg:mb-16">
                <div class="inline-flex items-center gap-3 mb-4 mx-auto">
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
                            <img :src="publishingImage1" alt="Publishing Services - LiteraForge"
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Two Service Cards Stacked -->
                    <div class="space-y-6 lg:space-y-8">
                        <!-- ISBN Acquisition Card -->
                        <div
                            class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-[#4D7EFF]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-2">ISBN Acquisition</h3>
                                    <div class="w-16 h-1 bg-[#4D7EFF]"></div>
                                </div>
                            </div>
                            <p class="text-gray-900 leading-relaxed text-base lg:text-lg">
                                We secure your ISBN and ensure your book is properly registered for global
                                identification.
                            </p>
                        </div>

                        <!-- Manuscript Restructuring Card -->
                        <div
                            class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-[#4D7EFF]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Manuscript
                                        Restructuring & Refinement</h3>
                                    <div class="w-16 h-1 bg-[#4D7EFF]"></div>
                                </div>
                            </div>
                            <p class="text-gray-900 leading-relaxed text-base lg:text-lg">
                                Our editors reshape your draft for clarity, flow, and impact while keeping your voice
                                intact.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Second Row: Two Cards Left, Image Right -->
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <!-- Left Column: Two Service Cards Stacked -->
                    <div class="space-y-6 lg:space-y-8">
                        <!-- Professional Design Card -->
                        <div
                            class="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl lg:text-2xl font-bold text-white mb-2">Professional Cover &
                                        Interior Design</h3>
                                    <div class="w-16 h-1 bg-white/50"></div>
                                </div>
                            </div>
                            <p class="text-white/95 leading-relaxed text-base lg:text-lg">
                                From compelling covers to clean interior layouts, we design books that meet industry
                                standards and captivate readers.
                            </p>
                        </div>

                        <!-- Print & Digital Publishing Card -->
                        <div
                            class="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl lg:text-2xl font-bold text-white mb-2">Print & Digital Publishing
                                    </h3>
                                    <div class="w-16 h-1 bg-white/50"></div>
                                </div>
                            </div>
                            <p class="text-white/95 leading-relaxed text-base lg:text-lg">
                                We handle the full publishing setup, preparing your book for high-quality print and wide
                                digital distribution.
                            </p>
                        </div>
                    </div>

                    <!-- Right Column: Second Image -->
                    <div class="group relative rounded-2xl overflow-hidden shadow-lg">
                        <div class="relative h-[300px] lg:h-[450px] overflow-hidden">
                            <img :src="publishingImage2" alt="Book Publishing - LiteraForge"
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Third Row: Single Card Centered -->
                <div class="max-w-3xl mx-auto">
                    <div
                        class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10">
                        <div class="flex items-start gap-4 mb-4">
                            <div
                                class="w-12 h-12 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-[#4D7EFF]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Tailored Book Marketing
                                    Strategies</h3>
                                <div class="w-16 h-1 bg-[#4D7EFF] mb-4"></div>
                                <p class="text-gray-900 leading-relaxed text-base lg:text-lg">
                                    We create practical marketing plans to help you reach your audience, increase
                                    visibility, and drive sales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- The Result Section -->
            <div class="mt-16 lg:mt-20 max-w-4xl mx-auto">
                <div class="text-center mb-8">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        The Result
                    </h3>
                    <div class="w-20 h-1 bg-[#4D7EFF] mx-auto mb-6"></div>
                </div>

                <!-- Result Card -->
                <div
                    class="bg-gradient-to-br from-[#4D7EFF] to-[#3a5fd4] rounded-2xl shadow-2xl p-8 lg:p-12 text-center">
                    <p class="text-xl lg:text-2xl text-white leading-relaxed font-medium">
                        A professionally crafted book you can be proud of—one that reflects your message, elevates your
                        voice, and builds your legacy.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images from assets directory
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