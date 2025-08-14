<template>
    <section class="py-16 md:py-18 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white w-full">
        <div class="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <p
                    class="text-blue-600 dark:text-blue-400 text-sm md:text-base font-semibold uppercase tracking-wider mb-4 drop-shadow-sm">
                    But we can do more for you...
                </p>
                <h1
                    class="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white barlow-condensed leading-tight">
                    Our full <span
                        class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">'tekfolio'</span>
                    of services
                </h1>
                <div class="w-32 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
            </div>

            <!-- Services Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

                <!-- Services Column -->
                <div class="lg:col-span-3 space-y-8">
                    <!-- Service 1 -->
                    <NuxtLink to="/web-dev" class="group block">
                        <div
                            class="service-item p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <!-- Mobile: Stack vertically, Desktop: Horizontal -->
                            <div
                                class="flex flex-col items-center text-center space-y-4 lg:flex-row lg:items-start lg:text-left lg:space-y-0 lg:space-x-6">
                                <div
                                    class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-transform duration-300">
                                    <Icon name="lucide:code" class="w-8 h-8 text-white" />
                                </div>
                                <div class="flex-1">
                                    <h3
                                        class="text-3xl font-bold text-gray-900 dark:text-white mb-2 barlow-condensed leading-tight">
                                        Enterprise Web
                                        Apps</h3>
                                    <p
                                        class="text-blue-600 dark:text-blue-400 text-sm md:text-base font-semibold tracking-wider mb-4 drop-shadow-sm">
                                        Cloud-native platforms that drive revenue</p>
                                    <p class="text-lg text-gray-900 dark:text-gray-300 mb-6 leading-relaxed">We build
                                        modern, cloud-based applications with payment processing, e-commerce, user
                                        dashboards, and real-time features that generate actual business value beyond
                                        static websites.</p>
                                </div>
                                <!-- Arrow hidden on mobile, visible on desktop -->
                                <Icon name="lucide:arrow-right"
                                    class="hidden lg:block w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform duration-300 mt-2" />
                            </div>
                        </div>
                    </NuxtLink>

                    <!-- Service 2 -->
                    <NuxtLink to="/app-dev" class="group block">
                        <div
                            class="service-item p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <!-- Mobile: Stack vertically, Desktop: Horizontal -->
                            <div
                                class="flex flex-col items-center text-center space-y-4 lg:flex-row lg:items-start lg:text-left lg:space-y-0 lg:space-x-6">
                                <div
                                    class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-transform duration-300">
                                    <Icon name="lucide:smartphone" class="w-8 h-8 text-white" />
                                </div>
                                <div class="flex-1">
                                    <h3
                                        class="text-3xl font-bold text-gray-900 dark:text-white mb-2 barlow-condensed leading-tight">
                                        Business Mobile
                                        Apps</h3>
                                    <p
                                        class="text-blue-600 dark:text-blue-400 text-sm md:text-base font-semibold tracking-wider mb-4 drop-shadow-sm">
                                        One codebase,
                                        all devices</p>
                                    <p class="text-lg text-gray-900 dark:text-gray-300 mb-6 leading-relaxed">Launch apps
                                        that run smoothly
                                        on web, iOS, and Android; all from a single build. We design for performance,
                                        user engagement, and easy updates so you can reach your audience anywhere.</p>
                                </div>
                                <!-- Arrow hidden on mobile, visible on desktop -->
                                <Icon name="lucide:arrow-right"
                                    class="hidden lg:block w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform duration-300 mt-2" />
                            </div>
                        </div>
                    </NuxtLink>

                    <!-- Service 3 - NEW: Cloud Migration & Security -->
                    <NuxtLink to="/cloud-migration" class="group block">
                        <div
                            class="service-item p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <!-- Mobile: Stack vertically, Desktop: Horizontal -->
                            <div
                                class="flex flex-col items-center text-center space-y-4 lg:flex-row lg:items-start lg:text-left lg:space-y-0 lg:space-x-6">
                                <div
                                    class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-transform duration-300">
                                    <Icon name="lucide:cloud-upload" class="w-8 h-8 text-white" />
                                </div>
                                <div class="flex-1">
                                    <h3
                                        class="text-3xl font-bold text-gray-900 dark:text-white mb-2 barlow-condensed leading-tight">
                                        Cloud Migration &
                                        Security</h3>
                                    <p
                                        class="text-blue-600 dark:text-blue-400 text-sm md:text-base font-semibold tracking-wider mb-4 drop-shadow-sm">
                                        Secure, scalable, future-ready</p>
                                    <p class="text-lg text-gray-900 dark:text-gray-300 mb-6 leading-relaxed">Transition
                                        to the cloud with zero guesswork. With enterprise-grade security, automated
                                        backups and 99.9% uptime guarantees, , we ensure you get the agility,
                                        scalability, and protection your business needs to compete globally.</p>
                                </div>
                                <!-- Arrow hidden on mobile, visible on desktop -->
                                <Icon name="lucide:arrow-right"
                                    class="hidden lg:block w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform duration-300 mt-2" />
                            </div>
                        </div>
                    </NuxtLink>

                    <!-- Service 4 -->
                    <NuxtLink to="/seo" class="group block">
                        <div
                            class="service-item p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <!-- Mobile: Stack vertically, Desktop: Horizontal -->
                            <div
                                class="flex flex-col items-center text-center space-y-4 lg:flex-row lg:items-start lg:text-left lg:space-y-0 lg:space-x-6">
                                <div
                                    class="w-16 h-16 icon-bg rounded-xl flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-transform duration-300">
                                    <Icon name="lucide:bar-chart-4" class="w-8 h-8 text-white" />
                                </div>
                                <div class="flex-1">
                                    <h3
                                        class="text-3xl font-bold text-gray-900 dark:text-white mb-2 barlow-condensed leading-tight">
                                        Search Engine
                                        Optimization</h3>
                                    <p
                                        class="text-blue-600 dark:text-blue-400 text-sm md:text-base font-semibold tracking-wider mb-4 drop-shadow-sm">
                                        Rank higher,
                                        sell more</p>
                                    <p class="text-lg text-gray-900 dark:text-gray-300 mb-6 leading-relaxed">We combine
                                        SEO and content
                                        strategy to grow your visibility, engagement, and sales. More clicks, better
                                        conversions, and stronger brand authority.</p>
                                </div>
                                <!-- Arrow hidden on mobile, visible on desktop -->
                                <Icon name="lucide:arrow-right"
                                    class="hidden lg:block w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform duration-300 mt-2" />
                            </div>
                        </div>
                    </NuxtLink>
                </div>

                <!-- Images Column - Now visible on mobile -->
                <div class="lg:col-span-2 relative h-full min-h-[300px] lg:min-h-[600px]">
                    <!-- Main Image with Tilt and Scale Effect -->
                    <div
                        class="absolute top-0 left-0 w-full h-3/4 rounded-3xl overflow-hidden shadow-2xl z-20 animate-tilt-scale">
                        <img src="/assets/img/coding-tekfolio.jpg" alt="Web development"
                            class="w-full h-full object-cover transition-all duration-1000 hover:scale-105" />
                        <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
                    </div>

                    <!-- Secondary Image with Parallax Effect -->
                    <div
                        class="absolute bottom-0 right-0 w-4/5 h-2/5 rounded-2xl overflow-hidden shadow-xl z-30 animate-parallax">
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

/* New Tilt and Scale Animation */
@keyframes tilt-scale {

    0%,
    100% {
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1);
    }

    25% {
        transform: perspective(1000px) rotateX(1deg) rotateY(-1deg) scale(1.01);
    }

    50% {
        transform: perspective(1000px) rotateX(0deg) rotateY(1deg) scale(1.02);
    }

    75% {
        transform: perspective(1000px) rotateX(-1deg) rotateY(0deg) scale(1.01);
    }
}

/* Parallax-like Animation */
@keyframes parallax {

    0%,
    100% {
        transform: translateX(0) translateY(0) scale(1);
        filter: brightness(1);
    }

    33% {
        transform: translateX(-2px) translateY(-3px) scale(1.005);
        filter: brightness(1.05);
    }

    66% {
        transform: translateX(2px) translateY(2px) scale(0.995);
        filter: brightness(0.98);
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

.animate-tilt-scale {
    animation: tilt-scale 12s ease-in-out infinite;
}

.animate-parallax {
    animation: parallax 8s ease-in-out infinite 2s;
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

/* Mobile responsiveness improvements */
@media (max-width: 1023px) {

    /* Make images section more mobile-friendly */
    .lg\:col-span-2 {
        min-height: 350px !important;
        margin-top: 2rem;
    }

    /* Adjust service items for mobile stacking */
    .service-item {
        padding: 2rem 1.5rem;
    }

    /* Center icons and text on mobile */
    .service-item h3 {
        font-size: 1.5rem;
    }

    .service-item p {
        font-size: 1rem;
    }
}

@media (max-width: 640px) {

    /* Further mobile optimizations */
    .lg\:col-span-2 {
        min-height: 300px !important;
    }

    .service-item {
        padding: 1.5rem 1rem;
    }

    .service-item h3 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

    .service-item p {
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {

    .animate-tilt-scale,
    .animate-parallax,
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