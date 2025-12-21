<template>
    <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div class="container mx-auto px-4 md:px-8 lg:px-12">
            <div class="max-w-7xl mx-auto">
                <!-- Single Row Grid - 3 columns on desktop -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                    <!-- Column 1: Heading and Description (1/3 on desktop) -->
                    <div class="lg:col-span-1">
                        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Why Businesses and Authors <span class="text-[#4D7EFF]">Trust Us</span>
                        </h2>
                        <p class="text-xl md:text-2xl text-gray-700 leading-relaxed">
                            We don't just deliver projects, we craft experiences that move ideas from thought to
                            tangible success.
                        </p>
                    </div>

                    <!-- Column 2 & 3: Content and Images (2/3 on desktop) -->
                    <div class="lg:col-span-2">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <!-- Left Content Column -->
                            <div class="space-y-6">
                                <!-- Point 1 -->
                                <div class="flex gap-4">
                                    <div class="flex-shrink-0">
                                        <div class="w-3 h-3 bg-[#4D7EFF] rounded-full mt-2"></div>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-gray-900 mb-1">Tailored Solutions</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed">
                                            Tailored, compelling, and structured solutions designed to fit your exact
                                            goals.
                                        </p>
                                    </div>
                                </div>

                                <!-- Point 2 -->
                                <div class="flex gap-4">
                                    <div class="flex-shrink-0">
                                        <div class="w-3 h-3 bg-[#4D7EFF] rounded-full mt-2"></div>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-gray-900 mb-1">Stress-Free Process</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed">
                                            Stress-free process that keeps you focused while we handle the details.
                                        </p>
                                    </div>
                                </div>

                                <!-- Point 3 -->
                                <div class="flex gap-4">
                                    <div class="flex-shrink-0">
                                        <div class="w-3 h-3 bg-[#4D7EFF] rounded-full mt-2"></div>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-gray-900 mb-1">Expert Professionals</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed">
                                            Experienced professionals who combine business acumen with creative
                                            excellence.
                                        </p>
                                    </div>
                                </div>

                                <!-- Point 4 -->
                                <div class="flex gap-4">
                                    <div class="flex-shrink-0">
                                        <div class="w-3 h-3 bg-[#4D7EFF] rounded-full mt-2"></div>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-gray-900 mb-1">Proven Results</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed">
                                            Proven results across industries, authors, and organizations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Images Column -->
                            <div class="space-y-6">
                                <!-- Tailored Solutions Image -->
                                <div class="relative group">
                                    <div
                                        class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                        <img :src="tailoredImage" alt="Tailored Solutions"
                                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none rounded-xl">
                                    </div>
                                    <div class="absolute bottom-4 left-4 right-4">
                                        <h4 class="text-white text-lg font-bold drop-shadow-lg">Tailored Approach</h4>
                                    </div>
                                </div>

                                <!-- Proven Results Image -->
                                <div class="relative group">
                                    <div
                                        class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                        <img :src="resultsImage" alt="Proven Results"
                                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none rounded-xl">
                                    </div>
                                    <div class="absolute bottom-4 left-4 right-4">
                                        <h4 class="text-white text-lg font-bold drop-shadow-lg">Proven Results</h4>
                                    </div>
                                </div>
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
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}
</style>