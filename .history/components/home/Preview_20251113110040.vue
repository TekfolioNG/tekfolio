<template>
    <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8 lg:px-12">
            <!-- Section Header -->
            <div class="text-center max-w-4xl mx-auto mb-12 md:mb-16">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    What We Do
                </h2>
                <p class="text-lg md:text-xl lg:text-2xl text-gray-700 font-semibold mb-6">
                    Clarity, Structure & Impact that Lasts
                </p>
                <p class="text-base md:text-lg text-gray-600 leading-relaxed">
                    At Litera-Forge, we bridge strategy and creativity, enabling businesses, leaders, and authors bring
                    clarity to their ideas, structure to their vision, and the execution support they need to move
                    forward. Our work spans four core areas that drive growth and transformation:
                </p>
            </div>

            <!-- Service Highlights -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                <!-- Business Advisory & Restructuring -->
                <div
                    class="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <div class="flex items-start gap-4 md:gap-6">
                        <div
                            class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                            <TrendingUp class="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                        </div>
                        <div>
                            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Business Advisory & Restructuring
                            </h3>
                            <p class="text-gray-600 leading-relaxed">
                                Strategic guidance and organizational alignment to help you operate efficiently, stay
                                agile, and grow sustainably.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Employee Productivity Training -->
                <div
                    class="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <div class="flex items-start gap-4 md:gap-6">
                        <div
                            class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-lg flex items-center justify-center">
                            <Users class="w-6 h-6 md:w-7 md:h-7 text-green-600" />
                        </div>
                        <div>
                            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Employee Productivity Training
                            </h3>
                            <p class="text-gray-600 leading-relaxed">
                                Interactive sessions that help teams work smarter, collaborate better, and perform at
                                their best.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Ghostwriting Services -->
                <div
                    class="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <div class="flex items-start gap-4 md:gap-6">
                        <div
                            class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-purple-100 rounded-lg flex items-center justify-center">
                            <PenTool class="w-6 h-6 md:w-7 md:h-7 text-purple-600" />
                        </div>
                        <div>
                            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Ghostwriting Services
                            </h3>
                            <p class="text-gray-600 leading-relaxed">
                                Transform your insights, stories, and expertise into powerful written assets—books,
                                proposals, and profiles.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Book Publishing -->
                <div
                    class="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <div class="flex items-start gap-4 md:gap-6">
                        <div
                            class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-lg flex items-center justify-center">
                            <BookOpen class="w-6 h-6 md:w-7 md:h-7 text-orange-600" />
                        </div>
                        <div>
                            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Book Publishing
                            </h3>
                            <p class="text-gray-600 leading-relaxed">
                                End-to-end publishing support that turns your manuscript into a polished, market-ready
                                book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Button -->
            <div class="text-center mt-12 md:mt-16">
                <NuxtLink to="/services"
                    class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0246d5] hover:bg-[#0236b5] text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    Learn More
                    <ArrowRight class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowRight, BookOpen, PenTool, TrendingUp, Users } from 'lucide-vue-next';
</script>

<style scoped>
/* Custom hover effects */
.hover\:shadow-lg:hover {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Smooth transitions */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>