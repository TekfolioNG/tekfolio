<template>
    <section class="py-12 md:py-16 bg-white relative overflow-hidden">
        <!-- Subtle Background Elements -->
        <div class="absolute top-10 left-5 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div class="absolute bottom-10 right-5 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl"></div>

        <div class="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <!-- Section Header -->
            <div class="text-center mb-10 md:mb-14">
                <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                    Why Businesses and Authors <span class="text-[#4D7EFF]">Trust Us</span>
                </h2>
                <p class="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    We don't just deliver projects, we craft experiences that move ideas from thought to tangible
                    success.
                </p>
            </div>

            <!-- Two Column Layout with Images -->
            <div class="max-w-7xl mx-auto space-y-12 md:space-y-16">
                <!-- First Row: Image Left, Content Right -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <!-- Image -->
                    <div class="order-2 lg:order-1">
                        <div
                            class="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <img src="~/assets/img/tailored-taiored.jpg" alt="Tailored Solutions"
                                class="w-full h-full object-cover aspect-[4/3]" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none">
                            </div>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="order-1 lg:order-2 space-y-5">
                        <div
                            class="flex items-start gap-4 p-5 md:p-6 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all duration-300">
                            <div class="flex-shrink-0 w-2 h-2 md:w-3 md:h-3 bg-[#4D7EFF] rounded-full mt-2"></div>
                            <p class="text-base md:text-lg text-gray-800 leading-relaxed">
                                <span class="font-semibold text-gray-900">Tailored, compelling, and structured
                                    solutions</span> designed to fit your exact goals.
                            </p>
                        </div>

                        <div
                            class="flex items-start gap-4 p-5 md:p-6 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all duration-300">
                            <div class="flex-shrink-0 w-2 h-2 md:w-3 md:h-3 bg-[#4D7EFF] rounded-full mt-2"></div>
                            <p class="text-base md:text-lg text-gray-800 leading-relaxed">
                                <span class="font-semibold text-gray-900">Stress-free process</span> that keeps you
                                focused while we handle the details.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Second Row: Content Left, Image Right -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <!-- Content -->
                    <div class="order-1 space-y-5">
                        <div
                            class="flex items-start gap-4 p-5 md:p-6 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all duration-300">
                            <div class="flex-shrink-0 w-2 h-2 md:w-3 md:h-3 bg-[#4D7EFF] rounded-full mt-2"></div>
                            <p class="text-base md:text-lg text-gray-800 leading-relaxed">
                                <span class="font-semibold text-gray-900">Experienced professionals</span> who combine
                                business acumen with creative excellence.
                            </p>
                        </div>

                        <div
                            class="flex items-start gap-4 p-5 md:p-6 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all duration-300">
                            <div class="flex-shrink-0 w-2 h-2 md:w-3 md:h-3 bg-[#4D7EFF] rounded-full mt-2"></div>
                            <p class="text-base md:text-lg text-gray-800 leading-relaxed">
                                <span class="font-semibold text-gray-900">Proven results</span> across industries,
                                authors, and organizations.
                            </p>
                        </div>
                    </div>

                    <!-- Image -->
                    <div class="order-2">
                        <div
                            class="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <img src="~/assets/img/results-taiored.jpg" alt="Proven Results"
                                class="w-full h-full object-cover aspect-[4/3]" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped></style>