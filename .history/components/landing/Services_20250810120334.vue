<template>
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white w-full">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <p
                    class="text-blue-600 dark:text-blue-400 text-sm md:text-base font-medium uppercase tracking-wider mb-4">
                    But we can do more for you...
                </p>
                <h1
                    class="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white barlow-condensed leading-tight">
                    Our full <span class="text-blue-600 dark:text-blue-400">'tekfolio'</span> of services
                </h1>
                <div class="w-32 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
            </div>

            <!-- Services Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                <!-- Services Column -->
                <div class="lg:col-span-2 space-y-8">
                    <!-- Service 1 -->
                    <NuxtLink to="/services/web-development" class="group block">
                        <div
                            class="service-item p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <div class="flex items-start space-x-6">
                                <div
                                    class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-transform duration-300">
                                    <Icon name="lucide:code" class="w-8 h-8 text-white" />
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise Web
                                        Apps</h3>
                                    <p class="text-blue-600 dark:text-blue-400 font-medium text-lg mb-3">
                                        High-performance with higher conversion</p>
                                    <p class="text-gray-600 dark:text-gray-300 text-base">We build sleek, scalable, and
                                        conversion-driven websites customized to your brand and goals.</p>
                                </div>
                                <Icon name="lucide:arrow-right"
                                    class="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform duration-300 mt-2" />
                            </div>
                        </div>
                    </NuxtLink>

                    <!-- Service 2 -->
                    <NuxtLink to="/services/app-development" class="group block">
                        <div
                            class="service-item p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <div class="flex items-start space-x-6">
                                <div
                                    class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-transform duration-300">
                                    <Icon name="lucide:smartphone" class="w-8 h-8 text-white" />
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Business Mobile
                                        Apps</h3>
                                    <p class="text-blue-600 dark:text-blue-400 font-medium text-lg mb-3">One codebase,
                                        all devices</p>
                                    <p class="text-gray-600 dark:text-gray-300 text-base">Launch apps that run smoothly
                                        on web, iOS, and Android — all from a single build.</p>
                                </div>
                                <Icon name="lucide:arrow-right"
                                    class="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform duration-300 mt-2" />
                            </div>
                        </div>
                    </NuxtLink>

                    <!-- Service 3 -->
                    <NuxtLink to="/services/seo" class="group block">
                        <div
                            class="service-item p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <div class="flex items-start space-x-6">
                                <div
                                    class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-transform duration-300">
                                    <Icon name="lucide:trending-up" class="w-8 h-8 text-white" />
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Search Engine
                                        Optimization</h3>
                                    <p class="text-blue-600 dark:text-blue-400 font-medium text-lg mb-3">Rank higher,
                                        sell more</p>
                                    <p class="text-gray-600 dark:text-gray-300 text-base">We combine SEO and content
                                        strategy to grow your visibility, engagement, and sales.</p>
                                </div>
                                <Icon name="lucide:arrow-right"
                                    class="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform duration-300 mt-2" />
                            </div>
                        </div>
                    </NuxtLink>
                </div>

                <!-- Images Column -->
                <div class="relative h-full min-h-[500px] hidden lg:block">
                    <!-- Main Image with Floating Effect -->
                    <div
                        class="absolute top-0 left-0 w-full h-3/4 rounded-3xl overflow-hidden shadow-2xl z-20 animate-float">
                        <img src="/assets/img/coding-tekfolio.jpg" alt="Web development"
                            class="w-full h-full object-cover transition-all duration-1000 hover:scale-105" />
                        <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
                    </div>

                    <!-- Secondary Image with Delayed Floating Effect -->
                    <div
                        class="absolute bottom-0 right-0 w-4/5 h-2/5 rounded-2xl overflow-hidden shadow-xl z-30 animate-float-delay">
                        <img src="/assets/img/api-tekfolio.jpg" alt="API development"
                            class="w-full h-full object-cover transition-all duration-1000 hover:scale-105" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    <!-- Decorative Elements -->
                    <div class="absolute top-8 right-8 w-4 h-4 bg-blue-500 rounded-full opacity-80 animate-pulse"></div>
                    <div
                        class="absolute bottom-16 left-8 w-3 h-3 bg-emerald-500 rounded-full opacity-60 animate-pulse-slow">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic remains clean
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
    box-shadow: 0 8px 25px rgba(29, 138, 216, 0.3);
}

.service-item {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.service-item:hover {
    transform: translateY(-5px);
    border-color: rgba(59, 130, 246, 0.3);
}

/* Floating Animation */
@keyframes float {

    0%,
    100% {
        transform: translateY(0) rotate(1deg);
    }

    50% {
        transform: translateY(-15px) rotate(-1deg);
    }
}

@keyframes float-delay {

    0%,
    100% {
        transform: translateY(10px) rotate(-2deg);
    }

    50% {
        transform: translateY(-5px) rotate(2deg);
    }
}

@keyframes pulse-slow {

    0%,
    100% {
        opacity: 0.6;
        transform: scale(1);
    }

    50% {
        opacity: 0.8;
        transform: scale(1.05);
    }
}

.animate-float {
    animation: float 8s ease-in-out infinite;
}

.animate-float-delay {
    animation: float-delay 8s ease-in-out infinite 1.5s;
}

.animate-pulse-slow {
    animation: pulse-slow 6s ease-in-out infinite;
}

/* Dark mode adjustments */
.dark .icon-bg {
    background-color: #1e40af;
}

.dark .service-item:hover .icon-bg {
    background-color: #2563eb;
}

/* Mobile responsiveness */
@media (max-width: 1024px) {
    .lg\:col-span-2 {
        grid-column: span 1;
    }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {

    .animate-float,
    .animate-float-delay,
    .animate-pulse,
    .animate-pulse-slow {
        animation: none;
    }

    .service-item:hover {
        transform: none;
    }

    .group-hover\:rotate-6 {
        transform: none;
    }
}
</style>