<template>
    <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div class="container mx-auto px-4 md:px-8 lg:px-12">
            <div class="max-w-7xl mx-auto">
                <!-- Section Header -->
                <div class="text-center mb-16">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Why Businesses and Authors <span class="text-[#4D7EFF]">Trust Us</span>
                    </h2>
                    <p class="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        We don't just deliver projects, we craft experiences that move ideas from thought to tangible
                        success.
                    </p>
                </div>

                <!-- Main Content Grid - Reversed order -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Left Column - Images -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 order-2 lg:order-1">
                        <!-- Tailored Solutions Image -->
                        <div class="relative group">
                            <div
                                class="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <img :src="tailoredImage" alt="Tailored Solutions"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-2xl">
                            </div>
                            <div class="absolute bottom-6 left-6 right-6">
                                <h4 class="text-white text-xl font-bold drop-shadow-lg">Tailored Approach</h4>
                            </div>
                        </div>

                        <!-- Proven Results Image -->
                        <div class="relative group">
                            <div
                                class="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <img :src="resultsImage" alt="Proven Results"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-2xl">
                            </div>
                            <div class="absolute bottom-6 left-6 right-6">
                                <h4 class="text-white text-xl font-bold drop-shadow-lg">Proven Results</h4>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - Content -->
                    <div class="space-y-8 order-1 lg:order-2">
                        <!-- Point 1 -->
                        <div class="flex gap-6">
                            <div class="flex-shrink-0">
                                <div class="w-4 h-4 bg-[#4D7EFF] rounded-full mt-2"></div>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-3">Tailored Solutions</h3>
                                <p class="text-lg text-gray-700 leading-relaxed">
                                    Tailored, compelling, and structured solutions designed to fit your exact goals.
                                </p>
                            </div>
                        </div>

                        <!-- Point 2 -->
                        <div class="flex gap-6">
                            <div class="flex-shrink-0">
                                <div class="w-4 h-4 bg-[#4D7EFF] rounded-full mt-2"></div>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-3">Stress-Free Process</h3>
                                <p class="text-lg text-gray-700 leading-relaxed">
                                    Stress-free process that keeps you focused while we handle the details.
                                </p>
                            </div>
                        </div>

                        <!-- Point 3 -->
                        <div class="flex gap-6">
                            <div class="flex-shrink-0">
                                <div class="w-4 h-4 bg-[#4D7EFF] rounded-full mt-2"></div>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-3">Expert Professionals</h3>
                                <p class="text-lg text-gray-700 leading-relaxed">
                                    Experienced professionals who combine business acumen with creative excellence.
                                </p>
                            </div>
                        </div>

                        <!-- Point 4 -->
                        <div class="flex gap-6">
                            <div class="flex-shrink-0">
                                <div class="w-4 h-4 bg-[#4D7EFF] rounded-full mt-2"></div>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-3">Proven Results</h3>
                                <p class="text-lg text-gray-700 leading-relaxed">
                                    Proven results across industries, authors, and organizations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images
import resultsImage from '~/assets/img/results-taiored.jpg';
import tailoredImage from '~/assets/img/tailored-taiored.jpg';
</script>

<style scoped>
/* Custom hover effects */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}
</style>