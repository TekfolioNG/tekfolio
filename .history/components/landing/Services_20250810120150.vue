<template>
    <section class="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white w-full">
        <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <p
                    class="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider mb-6">
                    But we can do more for you...
                </p>
                <h1
                    class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight barlow-condensed">
                    Our full <span
                        class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">'tekfolio'</span>
                    of services
                </h1>
                <div class="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            <!-- Compact Grid Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

                <!-- Services Column - Takes 3/5 of the width -->
                <div class="lg:col-span-3 space-y-8">

                    <!-- Service 1 -->
                    <div
                        class="service-item group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div class="flex items-start space-x-6">
                            <div class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0">
                                <Icon name="lucide:code" class="w-8 h-8 text-white" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise Web Apps
                                </h3>
                                <p class="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-3">High-performance
                                    with higher conversion</p>
                                <p class="text-gray-600 dark:text-gray-300 text-base leading-relaxed">We build sleek,
                                    scalable, and conversion-driven websites customized to your brand and goals.</p>
                            </div>
                            <NuxtLink to="/services/web-development"
                                class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group/arrow">
                                <Icon name="lucide:arrow-right"
                                    class="w-6 h-6 group-hover/arrow:translate-x-2 transition-transform duration-300" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Service 2 -->
                    <div
                        class="service-item group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div class="flex items-start space-x-6">
                            <div class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0">
                                <Icon name="lucide:smartphone" class="w-8 h-8 text-white" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Business Mobile Apps
                                </h3>
                                <p class="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-3">One codebase, all
                                    devices</p>
                                <p class="text-gray-600 dark:text-gray-300 text-base leading-relaxed">Launch apps that
                                    run smoothly on web, iOS, and Android — all from a single build.</p>
                            </div>
                            <NuxtLink to="/services/app-development"
                                class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group/arrow">
                                <Icon name="lucide:arrow-right"
                                    class="w-6 h-6 group-hover/arrow:translate-x-2 transition-transform duration-300" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Service 3 -->
                    <div
                        class="service-item group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div class="flex items-start space-x-6">
                            <div class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0">
                                <Icon name="lucide:trending-up" class="w-8 h-8 text-white" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Search Engine
                                    Optimization</h3>
                                <p class="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-3">Rank higher, sell
                                    more</p>
                                <p class="text-gray-600 dark:text-gray-300 text-base leading-relaxed">We combine SEO and
                                    content strategy to grow your visibility, engagement, and sales.</p>
                            </div>
                            <NuxtLink to="/services/seo"
                                class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group/arrow">
                                <Icon name="lucide:arrow-right"
                                    class="w-6 h-6 group-hover/arrow:translate-x-2 transition-transform duration-300" />
                            </NuxtLink>
                        </div>
                    </div>

                </div>

                <!-- Images Column - Takes 2/5 of the width -->
                <div class="lg:col-span-2 relative h-96 lg:h-full min-h-[400px]">
                    <!-- Background decoration -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-purple-100/40 dark:from-blue-900/30 dark:to-purple-900/20 rounded-3xl transform rotate-1 transition-transform duration-500 hover:rotate-2 animate-bob-gentle">
                    </div>

                    <!-- Main Image - Coding (Much Larger) -->
                    <div
                        class="absolute top-2 left-2 right-8 bottom-20 rounded-2xl overflow-hidden shadow-2xl z-20 group animate-float-slow">
                        <img src="/assets/img/coding-tekfolio.jpg" alt="Development Work"
                            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-blue-600/25 via-transparent to-purple-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                        <!-- Shimmer effect on hover -->
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
                        </div>
                    </div>

                    <!-- Secondary Image - API (Smaller) -->
                    <div
                        class="absolute bottom-2 right-2 w-32 h-24 rounded-xl overflow-hidden shadow-xl z-30 group animate-bob-slow">
                        <img src="/assets/img/api-tekfolio.jpg" alt="Technical Solutions"
                            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-tl from-emerald-600/30 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                        <!-- Pulse ring effect -->
                        <div
                            class="absolute -inset-1 border-2 border-emerald-400/30 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse">
                        </div>
                    </div>

                    <!-- Enhanced decorative elements -->
                    <div
                        class="absolute top-12 right-6 w-4 h-4 bg-blue-500 rounded-full opacity-70 animate-bounce-gentle shadow-lg">
                    </div>
                    <div
                        class="absolute bottom-28 left-6 w-3 h-3 bg-emerald-500 rounded-full opacity-50 animate-float-gentle shadow-md">
                    </div>
                    <div
                        class="absolute top-32 right-16 w-2 h-2 bg-purple-500 rounded-full opacity-80 animate-pulse-soft">
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// Ultra-compact services section with card-based layout
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

.barlow-condensed {
    font-family: 'Barlow Condensed', sans-serif;
}

.icon-bg {
    background-color: #01348F;
    transition: all 0.3s ease;
}

.service-item:hover .icon-bg {
    background-color: #1d8ad8;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(29, 138, 216, 0.3);
}

.service-item {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 1px solid transparent;
}

.service-item:hover {
    transform: translateY(-4px) scale(1.02);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.1);
}

/* Enhanced floating animations */
@keyframes float-slow {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-8px) rotate(1deg);
    }
}

@keyframes bob-slow {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-6px) rotate(-1deg);
    }
}

@keyframes bob-gentle {

    0%,
    100% {
        transform: rotate(1deg) scale(1);
    }

    50% {
        transform: rotate(2deg) scale(1.02);
    }
}

@keyframes bounce-gentle {

    0%,
    100% {
        transform: translateY(0px) scale(1);
        opacity: 0.7;
    }

    50% {
        transform: translateY(-8px) scale(1.1);
        opacity: 1;
    }
}

@keyframes float-gentle {

    0%,
    100% {
        transform: translateY(0px) translateX(0px);
        opacity: 0.5;
    }

    33% {
        transform: translateY(-4px) translateX(2px);
        opacity: 0.8;
    }

    66% {
        transform: translateY(2px) translateX(-1px);
        opacity: 0.6;
    }
}

@keyframes pulse-soft {

    0%,
    100% {
        opacity: 0.8;
        transform: scale(1);
    }

    50% {
        opacity: 0.4;
        transform: scale(1.2);
    }
}

.animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
}

.animate-bob-slow {
    animation: bob-slow 6s ease-in-out infinite 1s;
}

.animate-bob-gentle {
    animation: bob-gentle 10s ease-in-out infinite;
}

.animate-bounce-gentle {
    animation: bounce-gentle 4s ease-in-out infinite;
}

.animate-float-gentle {
    animation: float-gentle 5s ease-in-out infinite 0.5s;
}

.animate-pulse-soft {
    animation: pulse-soft 3s ease-in-out infinite 2s;
}

/* Dark mode adjustments */
.dark .icon-bg {
    background-color: #1e40af;
}

.dark .service-item:hover .icon-bg {
    background-color: #2563eb;
}

.dark .service-item:hover {
    border-color: rgba(59, 130, 246, 0.3);
}

/* Mobile responsiveness */
@media (max-width: 1024px) {

    .lg\:col-span-3,
    .lg\:col-span-2 {
        grid-column: span 1;
    }

    .relative.h-80 {
        height: 250px;
    }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {

    .animate-pulse,
    .animate-bounce {
        animation: none;
    }

    .group:hover img {
        transform: none;
    }

    .service-item:hover {
        transform: none;
    }
}
</style>