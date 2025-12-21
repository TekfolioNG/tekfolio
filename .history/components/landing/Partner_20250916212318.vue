<template>
    <section class="py-20 px-6 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Left Column - Content -->
                <div class="space-y-8">
                    <h2 class="text-4xl md:text-5xl font-barlow font-bold text-gray-900 dark:text-white">
                        A Partner for Growth
                    </h2>

                    <div class="space-y-6">
                        <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            At Syntanium, we don't just execute projects — we enable progress. Our work fuels the
                            facilities that keep industries moving, economies growing, and communities thriving.
                        </p>

                        <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            With every project, our goal is clear: to combine technical precision with practical value,
                            ensuring energy continues to flow safely and sustainably into the future.
                        </p>
                    </div>

                    <NuxtLink to="/solutions"
                        class="inline-flex items-center px-8 py-4 border border-transparent text-base font-barlow font-medium rounded-md text-white bg-[#fe4135] hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-gray-800">
                        Explore Our Solutions
                    </NuxtLink>
                </div>

                <!-- Right Column - Visual Element -->
                <div class="relative">
                    <!-- Background pattern -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div
                            class="w-full h-64 bg-gradient-to-br from-red-500/5 to-gray-900/5 dark:from-red-500/10 dark:to-white/5 rounded-2xl transform rotate-3">
                        </div>
                    </div>

                    <!-- Content card -->
                    <div
                        class="relative bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 border border-gray-200 dark:border-gray-700">
                        <div class="space-y-6">
                            <!-- Icon/Visual element 1 -->
                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-[#fe4135]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-barlow font-medium text-gray-900 dark:text-white">Industry Progress
                                    </h3>
                                    <p class="text-gray-600 dark:text-gray-400 mt-1">Driving innovation and efficiency
                                        across sectors</p>
                                </div>
                            </div>

                            <!-- Icon/Visual element 2 -->
                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-[#fe4135]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-barlow font-medium text-gray-900 dark:text-white">Community Impact
                                    </h3>
                                    <p class="text-gray-600 dark:text-gray-400 mt-1">Supporting thriving communities
                                        through our work</p>
                                </div>
                            </div>

                            <!-- Icon/Visual element 3 -->
                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-[#fe4135]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-barlow font-medium text-gray-900 dark:text-white">Sustainable Future
                                    </h3>
                                    <p class="text-gray-600 dark:text-gray-400 mt-1">Committed to safe and sustainable
                                        energy solutions</p>
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
// No additional script logic needed
</script>

<style scoped>
/* Import Barlow font */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}
</style>