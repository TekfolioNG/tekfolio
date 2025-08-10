<template>
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white w-full">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <!-- Kicker/Preamble -->
                <p
                    class="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider mb-4">
                    But we can do more for you...
                </p>

                <h2 class="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white barlow-condensed">
                    Our full 'tekfolio' of services
                </h2>
                <div class="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
            </div>

            <!-- Services Layout - All Images Right, Content Left -->
            <div class="space-y-20 lg:space-y-32">

                <!-- Service 1 - Enterprise Web Apps -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <!-- Content Left -->
                    <div class="order-2 lg:order-1 space-y-6 relative">
                        <!-- Floating accent element -->
                        <div
                            class="absolute -left-4 top-8 w-2 h-16 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full opacity-30 animate-pulse-gentle">
                        </div>

                        <div class="flex items-start space-x-4 mb-6">
                            <div
                                class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0 transform hover:rotate-6 transition-transform duration-300">
                                <Icon name="lucide:code" class="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Enterprise Web Apps
                                </h3>
                                <p class="text-blue-600 dark:text-blue-400 font-medium">High-performance with higher
                                    conversion</p>
                            </div>
                        </div>

                        <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed pl-20">
                            We build sleek, scalable, and conversion-driven websites customized to your brand and goals.
                        </p>

                        <div class="pl-20">
                            <NuxtLink to="/services/web-development"
                                class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group">
                                <span class="mr-2 font-medium">Here's how</span>
                                <Icon name="lucide:arrow-right"
                                    class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="order-1 lg:order-2 relative">
                        <!-- Background decoration -->
                        <div
                            class="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-3xl transform rotate-1 transition-transform duration-500 hover:rotate-2">
                        </div>

                        <div class="relative overflow-hidden rounded-2xl shadow-xl group">
                            <img src="/assets/img/coding-tekfolio.jpg" alt="Enterprise Web Development"
                                class="w-full h-80 lg:h-96 object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110" />
                            <!-- Overlay gradient -->
                            <div
                                class="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                        </div>

                        <!-- Floating elements -->
                        <div
                            class="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-bounce-slow">
                        </div>
                        <div
                            class="absolute -bottom-4 -left-6 w-8 h-8 bg-purple-500 rounded-full opacity-30 animate-float-gentle">
                        </div>
                    </div>
                </div>

                <!-- Service 2 - Business Mobile Apps -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <!-- Content Left -->
                    <div class="order-2 lg:order-1 space-y-6 relative">
                        <!-- Floating accent element -->
                        <div
                            class="absolute -left-4 top-8 w-2 h-16 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full opacity-30 animate-pulse-gentle">
                        </div>

                        <div class="flex items-start space-x-4 mb-6">
                            <div
                                class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0 transform hover:rotate-6 transition-transform duration-300">
                                <Icon name="lucide:smartphone" class="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Business Mobile Apps
                                </h3>
                                <p class="text-blue-600 dark:text-blue-400 font-medium">One codebase, all devices</p>
                            </div>
                        </div>

                        <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed pl-20">
                            Launch apps that run smoothly on web, iOS, and Android — all from a single build.
                        </p>

                        <div class="pl-20">
                            <NuxtLink to="/services/app-development"
                                class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group">
                                <span class="mr-2 font-medium">Here's how</span>
                                <Icon name="lucide:arrow-right"
                                    class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="order-1 lg:order-2 relative">
                        <!-- Background decoration -->
                        <div
                            class="absolute -inset-4 bg-gradient-to-bl from-emerald-100 to-green-50 dark:from-emerald-900/20 dark:to-green-800/10 rounded-3xl transform -rotate-1 transition-transform duration-500 hover:-rotate-2">
                        </div>

                        <div class="relative overflow-hidden rounded-2xl shadow-xl group">
                            <img src="/assets/img/api-tekfolio.jpg" alt="Mobile App Development"
                                class="w-full h-80 lg:h-96 object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110" />
                            <!-- Overlay gradient -->
                            <div
                                class="absolute inset-0 bg-gradient-to-tl from-emerald-600/20 via-transparent to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                        </div>

                        <!-- Floating elements -->
                        <div
                            class="absolute -top-4 -right-8 w-10 h-10 bg-emerald-500 rounded-full opacity-25 animate-float-gentle">
                        </div>
                        <div
                            class="absolute -bottom-6 -left-4 w-14 h-14 bg-green-500 rounded-full opacity-15 animate-bounce-slow">
                        </div>
                    </div>
                </div>

                <!-- Service 3 - SEO -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <!-- Content Left -->
                    <div class="order-2 lg:order-1 space-y-6 relative">
                        <!-- Floating accent element -->
                        <div
                            class="absolute -left-4 top-8 w-2 h-16 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full opacity-30 animate-pulse-gentle">
                        </div>

                        <div class="flex items-start space-x-4 mb-6">
                            <div
                                class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0 transform hover:rotate-6 transition-transform duration-300">
                                <Icon name="lucide:trending-up" class="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Search Engine
                                    Optimization</h3>
                                <p class="text-blue-600 dark:text-blue-400 font-medium">Rank higher, sell more</p>
                            </div>
                        </div>

                        <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed pl-20">
                            We combine SEO and content strategy to grow your visibility, engagement, and sales.
                        </p>

                        <div class="pl-20">
                            <NuxtLink to="/services/seo"
                                class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group">
                                <span class="mr-2 font-medium">Here's how</span>
                                <Icon name="lucide:arrow-right"
                                    class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="order-1 lg:order-2 relative">
                        <!-- Background decoration -->
                        <div
                            class="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-pink-50 dark:from-purple-900/20 dark:to-pink-800/10 rounded-3xl transform rotate-1 transition-transform duration-500 hover:rotate-2">
                        </div>

                        <div class="relative overflow-hidden rounded-2xl shadow-xl group">
                            <img src="/assets/img/coding-tekfolio.jpg" alt="SEO Optimization"
                                class="w-full h-80 lg:h-96 object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110" />
                            <!-- Overlay gradient -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                        </div>

                        <!-- Floating elements -->
                        <div
                            class="absolute -top-8 -right-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-bounce-slow">
                        </div>
                        <div
                            class="absolute -bottom-2 -left-8 w-6 h-6 bg-pink-500 rounded-full opacity-40 animate-float-gentle">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// Clean component focused on the first 3 services with consistent left-right layout
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

.barlow-condensed {
    font-family: 'Barlow Condensed', sans-serif;
}

.icon-bg {
    background-color: #01348F;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.icon-bg:hover {
    background-color: #1d8ad8;
    box-shadow: 0 8px 25px rgba(29, 138, 216, 0.4);
    transform: rotate(6deg) scale(1.1);
}

/* Subtle floating animations */
@keyframes float-gentle {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-8px) rotate(2deg);
    }
}

@keyframes bounce-slow {

    0%,
    100% {
        transform: translateY(0px) scale(1);
    }

    50% {
        transform: translateY(-12px) scale(1.05);
    }
}

@keyframes pulse-gentle {

    0%,
    100% {
        opacity: 0.3;
        transform: scaleY(1);
    }

    50% {
        opacity: 0.6;
        transform: scaleY(1.1);
    }
}

.animate-float-gentle {
    animation: float-gentle 4s ease-in-out infinite;
}

.animate-bounce-slow {
    animation: bounce-slow 6s ease-in-out infinite;
}

.animate-pulse-gentle {
    animation: pulse-gentle 3s ease-in-out infinite;
}

/* Add different delays for variety */
.animate-float-gentle:nth-child(odd) {
    animation-delay: 0.5s;
}

.animate-bounce-slow:nth-child(even) {
    animation-delay: 1s;
}

/* Dark mode adjustments */
.dark .icon-bg {
    background-color: #1e40af;
}

.dark .icon-bg:hover {
    background-color: #2563eb;
}

/* Smooth entry animations */
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Apply entry animations */
.grid>div:first-child {
    animation: slideInLeft 0.8s ease-out forwards;
}

.grid>div:last-child {
    animation: slideInRight 0.8s ease-out forwards;
}

/* Stagger the animations */
.space-y-20>div:nth-child(1) {
    animation-delay: 0.1s;
}

.space-y-20>div:nth-child(2) {
    animation-delay: 0.3s;
}

.space-y-20>div:nth-child(3) {
    animation-delay: 0.5s;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .order-1 {
        order: 1;
    }

    .order-2 {
        order: 2;
    }

    /* Reduce floating element sizes on mobile */
    .absolute.w-12,
    .absolute.w-14,
    .absolute.w-16 {
        transform: scale(0.7);
    }
}

/* Accessibility - respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {

    .animate-float-gentle,
    .animate-bounce-slow,
    .animate-pulse-gentle {
        animation: none;
    }

    .group:hover img {
        transform: none;
    }

    .icon-bg:hover {
        transform: scale(1.05);
    }
}
</style>