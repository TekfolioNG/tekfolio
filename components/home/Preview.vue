<template>
    <section class="py-16 md:py-24 bg-gradient-to-br from-white to-blue-50/30 relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-10 left-10 w-20 h-20 bg-blue-100/40 rounded-full blur-xl"></div>
        <div class="absolute bottom-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>

        <div class="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <!-- Section Header -->
            <div class="text-center max-w-4xl mx-auto mb-16 md:mb-20">
                <div class="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                    <div class="w-2 h-2 bg-[#4D7EFF] rounded-full"></div>
                    <span class="text-[#4D7EFF] font-semibold text-sm uppercase tracking-wide">Our Services</span>
                </div>
                <h2 class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                    What We <span class="text-[#4D7EFF]">Do</span>
                </h2>
                <p class="text-xl md:text-2xl text-gray-700 font-semibold mb-8">
                    Clarity, Structure & Impact that Lasts
                </p>
                <p class="text-lg text-gray-900 leading-relaxed max-w-3xl mx-auto">
                    At Litera-Forge, <b>we bridge strategy and creativity</b>, enabling businesses, leaders, and authors
                    bring
                    <b><i>clarity to their ideas, structure to their vision, and the execution support</i></b> they need
                    to
                    move
                    forward. Our work spans four core areas that drive growth and transformation:

                </p>

            </div>

            <!-- Service Grid with Interactive Cards -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
                <!-- Business Advisory & Restructuring -->
                <NuxtLink to="/business-solutions"
                    class="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-[1.02] border border-blue-100/50 hover:border-[#4D7EFF]/20 hover:shadow-2xl hover:shadow-blue-500/10 shadow-lg shadow-gray-200/50 cursor-pointer">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div class="relative z-10">
                        <div class="flex flex-col md:flex-row md:items-start gap-6 mb-4">
                            <div
                                class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4D7EFF] to-blue-400 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500 mx-auto md:mx-0">
                                <TrendingUp class="w-8 h-8 text-white" />
                            </div>
                            <div class="flex-1 text-center md:text-left">
                                <h3
                                    class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                    Business Advisory & Restructuring
                                </h3>
                                <p class="text-gray-900 leading-relaxed text-lg">
                                    Strategic guidance and organizational alignment to help you operate efficiently,
                                    stay agile, and grow sustainably.
                                </p>
                            </div>
                        </div>
                        <div
                            class="flex items-center text-[#4D7EFF] font-semibold mt-6 transform transition-all duration-500 justify-center md:justify-start">
                            <span>Explore advisory</span>
                            <ArrowRight class="w-5 h-5 ml-2" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Employee Productivity Training -->
                <NuxtLink to="/training"
                    class="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-[1.02] border border-blue-100/50 hover:border-[#4D7EFF]/20 hover:shadow-2xl hover:shadow-blue-500/10 shadow-lg shadow-gray-200/50 cursor-pointer">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div class="relative z-10">
                        <div class="flex flex-col md:flex-row md:items-start gap-6 mb-4">
                            <div
                                class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4D7EFF] to-blue-400 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500 mx-auto md:mx-0">
                                <Users class="w-8 h-8 text-white" />
                            </div>
                            <div class="flex-1 text-center md:text-left">
                                <h3
                                    class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                    Employee Productivity Training
                                </h3>
                                <p class="text-gray-900 leading-relaxed text-lg">
                                    Interactive sessions that help teams work smarter, collaborate better, and perform
                                    at their best.
                                </p>
                            </div>
                        </div>
                        <div
                            class="flex items-center text-[#4D7EFF] font-semibold mt-6 transform transition-all duration-500 justify-center md:justify-start">
                            <span>Discover training</span>
                            <ArrowRight class="w-5 h-5 ml-2" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Ghostwriting Services -->
                <NuxtLink to="/ghostwriting"
                    class="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-[1.02] border border-blue-100/50 hover:border-[#4D7EFF]/20 hover:shadow-2xl hover:shadow-blue-500/10 shadow-lg shadow-gray-200/50 cursor-pointer">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div class="relative z-10">
                        <div class="flex flex-col md:flex-row md:items-start gap-6 mb-4">
                            <div
                                class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4D7EFF] to-blue-400 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500 mx-auto md:mx-0">
                                <PenTool class="w-8 h-8 text-white" />
                            </div>
                            <div class="flex-1 text-center md:text-left">
                                <h3
                                    class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                    Ghostwriting Services
                                </h3>
                                <p class="text-gray-900 leading-relaxed text-lg">
                                    Transform your insights, stories, and expertise into powerful written assets—books,
                                    proposals, and profiles.
                                </p>
                            </div>
                        </div>
                        <div
                            class="flex items-center text-[#4D7EFF] font-semibold mt-6 transform transition-all duration-500 justify-center md:justify-start">
                            <span>Start writing</span>
                            <ArrowRight class="w-5 h-5 ml-2" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Book Publishing -->
                <NuxtLink to="/publishing"
                    class="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-[1.02] border border-blue-100/50 hover:border-[#4D7EFF]/20 hover:shadow-2xl hover:shadow-blue-500/10 shadow-lg shadow-gray-200/50 cursor-pointer">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div class="relative z-10">
                        <div class="flex flex-col md:flex-row md:items-start gap-6 mb-4">
                            <div
                                class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4D7EFF] to-blue-400 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500 mx-auto md:mx-0">
                                <BookOpen class="w-8 h-8 text-white" />
                            </div>
                            <div class="flex-1 text-center md:text-left">
                                <h3
                                    class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                    Book Publishing
                                </h3>
                                <p class="text-gray-900 leading-relaxed text-lg">
                                    End-to-end publishing support that turns your manuscript into a polished,
                                    market-ready book.
                                </p>
                            </div>
                        </div>
                        <div
                            class="flex items-center text-[#4D7EFF] font-semibold mt-6 transform transition-all duration-500 justify-center md:justify-start">
                            <span>Publish now</span>
                            <ArrowRight class="w-5 h-5 ml-2" />
                        </div>
                    </div>
                </NuxtLink>
            </div>

            <!-- Additional CTA Button -->
            <div class="text-center mt-12">
                <NuxtLink to="/contact"
                    class="inline-flex items-center justify-center px-8 py-4 bg-[#4D7EFF] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3D6EEF] transition-all duration-300 hover:scale-105 hover:shadow-xl uppercase tracking-wide group">
                    Get Started Today
                    <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </NuxtLink>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ArrowRight, BookOpen, PenTool, TrendingUp, Users } from 'lucide-vue-next';
</script>

<style scoped>
/* Custom smooth transitions */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}

/* Improved focus styles for accessibility */
a:focus {
    outline: 2px solid #4D7EFF;
    outline-offset: 4px;
    border-radius: 16px;
}

/* Better cursor indication */
.cursor-pointer {
    cursor: pointer;
}

/* Smooth scaling for all interactive elements */
a {
    transform: scale(1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

a:hover {
    transform: scale(1.02);
}

/* Mobile optimizations */
@media (max-width: 768px) {
    .grid-cols-1>* {
        margin-bottom: 1rem;
    }

    a:hover {
        transform: scale(1.01);
    }
}
</style>