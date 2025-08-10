<template>
    <section class="py-16 md:py-24 bg-gray-900 dark:bg-gray-950 text-white w-full">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <!-- Kicker/Preamble -->
                <p
                    class="text-gray-300 dark:text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider mb-4">
                    But we can do more for you...
                </p>

                <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white dark:text-gray-100 barlow-condensed">
                    Our full 'tekfolio' of services
                </h2>
                <div class="w-24 h-1 bg-white mx-auto"></div>
            </div>

            <!-- Services Layout - Image Right, Content Left -->
            <div class="space-y-24">

                <!-- Service 1 - Enterprise Web Apps -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Content Left -->
                    <div class="order-2 lg:order-1 space-y-6">
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center">
                                <Icon name="lucide:code" class="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-white mb-1">Enterprise Web Apps</h3>
                                <p class="text-blue-400 font-medium">High-performance with higher conversion</p>
                            </div>
                        </div>

                        <p class="text-gray-300 dark:text-gray-400 text-lg leading-relaxed">
                            We build sleek, scalable, and conversion-driven websites customized to your brand and goals.
                        </p>

                        <NuxtLink to="/services/web-development"
                            class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </NuxtLink>
                    </div>

                    <!-- Image Right -->
                    <div class="order-1 lg:order-2">
                        <div class="relative overflow-hidden rounded-2xl shadow-2xl group">
                            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10"></div>
                            <img src="/assets/img/coding-tekfolio.jpg" alt="Enterprise Web Development"
                                class="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div
                                class="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Service 2 - Business Mobile Apps -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Image Left -->
                    <div class="order-1">
                        <div class="relative overflow-hidden rounded-2xl shadow-2xl group">
                            <div class="absolute inset-0 bg-gradient-to-bl from-green-600/20 to-transparent z-10"></div>
                            <img src="/assets/img/api-tekfolio.jpg" alt="Mobile App Development"
                                class="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div
                                class="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300">
                            </div>
                        </div>
                    </div>

                    <!-- Content Right -->
                    <div class="order-2 space-y-6">
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center">
                                <Icon name="lucide:smartphone" class="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-white mb-1">Business Mobile Apps</h3>
                                <p class="text-blue-400 font-medium">One codebase, all devices</p>
                            </div>
                        </div>

                        <p class="text-gray-300 dark:text-gray-400 text-lg leading-relaxed">
                            Launch apps that run smoothly on web, iOS, and Android — all from a single build.
                        </p>

                        <NuxtLink to="/services/app-development"
                            class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Service 3 - SEO -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Content Left -->
                    <div class="order-2 lg:order-1 space-y-6">
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center">
                                <Icon name="lucide:trending-up" class="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-white mb-1">Search Engine Optimization</h3>
                                <p class="text-blue-400 font-medium">Rank higher, sell more</p>
                            </div>
                        </div>

                        <p class="text-gray-300 dark:text-gray-400 text-lg leading-relaxed">
                            We combine SEO and content strategy to grow your visibility, engagement, and sales.
                        </p>

                        <NuxtLink to="/services/seo"
                            class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </NuxtLink>
                    </div>

                    <!-- Image Right -->
                    <div class="order-1 lg:order-2">
                        <div class="relative overflow-hidden rounded-2xl shadow-2xl group">
                            <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent z-10">
                            </div>
                            <img src="/assets/img/coding-tekfolio.jpg" alt="SEO Optimization"
                                class="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div
                                class="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// Clean component - focused on the first 3 services with alternating layout
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

.icon-bg:hover {
    background-color: #1d8ad8;
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(29, 138, 216, 0.3);
}

/* Image hover effects */
.group:hover img {
    filter: brightness(1.1) contrast(1.05);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .order-1 {
        order: 1;
    }

    .order-2 {
        order: 2;
    }
}

/* Dark mode adjustments */
.dark .icon-bg {
    background-color: #1e40af;
}

.dark .icon-bg:hover {
    background-color: #2563eb;
}

/* Smooth animations for elements entering viewport */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply animation to service blocks */
.grid {
    animation: fadeInUp 0.8s ease-out forwards;
}

/* Stagger animations */
.space-y-24>div:nth-child(1) {
    animation-delay: 0.1s;
}

.space-y-24>div:nth-child(2) {
    animation-delay: 0.3s;
}

.space-y-24>div:nth-child(3) {
    animation-delay: 0.5s;
}
</style>