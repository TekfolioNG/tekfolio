<template>
    <section class="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white w-full">
        <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-12">
                <p
                    class="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider mb-4">
                    But we can do more for you...
                </p>
                <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white barlow-condensed">
                    Our full 'tekfolio' of services
                </h2>
                <div class="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
            </div>

            <!-- Compact Grid Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

                <!-- Services Column - Takes 3/5 of the width -->
                <div class="lg:col-span-3 space-y-6">

                    <!-- Service 1 -->
                    <div
                        class="service-item group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 icon-bg rounded-lg flex items-center justify-center shrink-0">
                                <Icon name="lucide:code" class="w-6 h-6 text-white" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Enterprise Web Apps</h3>
                                <p class="text-blue-600 dark:text-blue-400 font-medium text-sm">High-performance with
                                    higher conversion</p>
                                <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">We build sleek, scalable, and
                                    conversion-driven websites customized to your brand and goals.</p>
                            </div>
                            <NuxtLink to="/services/web-development"
                                class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
                                <Icon name="lucide:arrow-right"
                                    class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Service 2 -->
                    <div
                        class="service-item group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 icon-bg rounded-lg flex items-center justify-center shrink-0">
                                <Icon name="lucide:smartphone" class="w-6 h-6 text-white" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Business Mobile Apps</h3>
                                <p class="text-blue-600 dark:text-blue-400 font-medium text-sm">One codebase, all
                                    devices</p>
                                <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">Launch apps that run smoothly
                                    on web, iOS, and Android — all from a single build.</p>
                            </div>
                            <NuxtLink to="/services/app-development"
                                class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
                                <Icon name="lucide:arrow-right"
                                    class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Service 3 -->
                    <div
                        class="service-item group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 icon-bg rounded-lg flex items-center justify-center shrink-0">
                                <Icon name="lucide:trending-up" class="w-6 h-6 text-white" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Search Engine Optimization
                                </h3>
                                <p class="text-blue-600 dark:text-blue-400 font-medium text-sm">Rank higher, sell more
                                </p>
                                <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">We combine SEO and content
                                    strategy to grow your visibility, engagement, and sales.</p>
                            </div>
                            <NuxtLink to="/services/seo"
                                class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
                                <Icon name="lucide:arrow-right"
                                    class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- CTA Row -->
                    <div class="flex items-center justify-between pt-4">
                        <p class="text-gray-600 dark:text-gray-400 text-sm">Ready to get started?</p>
                        <NuxtLink to="/contact"
                            class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group">
                            <span class="mr-2">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </NuxtLink>
                    </div>

                </div>

                <!-- Images Column - Takes 2/5 of the width -->
                <div class="lg:col-span-2 relative h-80 lg:h-full min-h-[300px]">
                    <!-- Background decoration -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/10 rounded-2xl transform rotate-1 transition-transform duration-500 hover:rotate-2">
                    </div>

                    <!-- Main Image -->
                    <div
                        class="absolute top-4 left-4 right-12 bottom-24 rounded-xl overflow-hidden shadow-xl z-20 group">
                        <img src="/assets/img/coding-tekfolio.jpg" alt="Development Work"
                            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Secondary Image -->
                    <div
                        class="absolute bottom-4 right-4 left-16 top-32 rounded-xl overflow-hidden shadow-lg z-30 group">
                        <img src="/assets/img/api-tekfolio.jpg" alt="Technical Solutions"
                            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-tl from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Decorative elements -->
                    <div class="absolute top-8 right-8 w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
                    <div
                        class="absolute bottom-16 left-8 w-2 h-2 bg-emerald-500 rounded-full opacity-40 animate-bounce">
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
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 1px solid transparent;
}

.service-item:hover {
    transform: translateY(-2px);
    border-color: rgba(59, 130, 246, 0.2);
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