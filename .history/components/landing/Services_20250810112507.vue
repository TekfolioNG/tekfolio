<template>
    <section class="py-16 md:py-24 bg-gray-900 dark:bg-gray-950 text-white w-full">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-20">
                <!-- Kicker/Preamble -->
                <p
                    class="text-gray-300 dark:text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider mb-4">
                    Our core expertise areas
                </p>

                <h2
                    class="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white dark:text-gray-100 barlow-condensed">
                    What we do <span class="text-blue-400">exceptionally well</span>
                </h2>
                <div class="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
                <p class="text-gray-300 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                    Three specialized services that drive real business transformation and measurable results.
                </p>
            </div>

            <!-- Services Grid - Enhanced Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">

                <!-- Service Card 1 - Enterprise Web Apps -->
                <div class="group service-card relative overflow-hidden">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <div
                        class="relative bg-gray-800 dark:bg-gray-900 p-8 lg:p-10 rounded-2xl border border-gray-700 dark:border-gray-600 transition-all duration-500 h-full flex flex-col">
                        <!-- Background Image Overlay -->
                        <div
                            class="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <img src="/assets/img/coding-tekfolio.jpg" alt=""
                                class="w-full h-full object-cover rounded-bl-3xl">
                        </div>

                        <!-- Icon Container -->
                        <div
                            class="relative z-10 w-20 h-20 icon-bg rounded-2xl flex items-center justify-center mb-8 mx-auto icon-container group-hover:scale-110 transition-transform duration-300">
                            <Icon name="lucide:code" class="w-10 h-10 text-white service-icon" />
                        </div>

                        <!-- Content -->
                        <div class="relative z-10 text-center flex-grow">
                            <h3
                                class="text-2xl lg:text-3xl font-bold text-white dark:text-gray-100 mb-4 barlow-condensed">
                                Enterprise Web Apps</h3>
                            <p class="text-blue-400 dark:text-blue-300 font-semibold text-lg mb-6">High-performance with
                                higher conversion</p>
                            <p class="text-gray-300 dark:text-gray-400 text-base leading-relaxed mb-8">We build sleek,
                                scalable, and conversion-driven websites customized to your brand and business goals.
                            </p>
                        </div>

                        <!-- CTA -->
                        <NuxtLink to="/services/web-development" class="relative z-10 group/cta">
                            <div
                                class="flex items-center justify-center text-blue-400 dark:text-blue-300 cta-link group-hover:text-blue-300 transition-colors duration-300">
                                <span class="mr-3 font-semibold text-lg">Explore Solution</span>
                                <Icon name="lucide:arrow-right" class="w-6 h-6 cta-arrow" />
                            </div>
                        </NuxtLink>
                    </div>
                </div>

                <!-- Service Card 2 - Business Mobile Apps -->
                <div class="group service-card relative overflow-hidden">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <div
                        class="relative bg-gray-800 dark:bg-gray-900 p-8 lg:p-10 rounded-2xl border border-gray-700 dark:border-gray-600 transition-all duration-500 h-full flex flex-col">
                        <!-- Background Image Overlay -->
                        <div
                            class="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <img src="/assets/img/api-tekfolio.jpg" alt=""
                                class="w-full h-full object-cover rounded-bl-3xl">
                        </div>

                        <!-- Icon Container -->
                        <div
                            class="relative z-10 w-20 h-20 icon-bg rounded-2xl flex items-center justify-center mb-8 mx-auto icon-container group-hover:scale-110 transition-transform duration-300">
                            <Icon name="lucide:smartphone" class="w-10 h-10 text-white service-icon" />
                        </div>

                        <!-- Content -->
                        <div class="relative z-10 text-center flex-grow">
                            <h3
                                class="text-2xl lg:text-3xl font-bold text-white dark:text-gray-100 mb-4 barlow-condensed">
                                Business Mobile Apps</h3>
                            <p class="text-blue-400 dark:text-blue-300 font-semibold text-lg mb-6">One codebase, all
                                devices</p>
                            <p class="text-gray-300 dark:text-gray-400 text-base leading-relaxed mb-8">Launch apps that
                                run smoothly on web, iOS, and Android — all from a single, efficient build process.</p>
                        </div>

                        <!-- CTA -->
                        <NuxtLink to="/services/app-development" class="relative z-10 group/cta">
                            <div
                                class="flex items-center justify-center text-blue-400 dark:text-blue-300 cta-link group-hover:text-blue-300 transition-colors duration-300">
                                <span class="mr-3 font-semibold text-lg">Explore Solution</span>
                                <Icon name="lucide:arrow-right" class="w-6 h-6 cta-arrow" />
                            </div>
                        </NuxtLink>
                    </div>
                </div>

                <!-- Service Card 3 - SEO -->
                <div class="group service-card relative overflow-hidden">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <div
                        class="relative bg-gray-800 dark:bg-gray-900 p-8 lg:p-10 rounded-2xl border border-gray-700 dark:border-gray-600 transition-all duration-500 h-full flex flex-col">
                        <!-- Background Image Overlay -->
                        <div
                            class="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <img src="/assets/img/coding-tekfolio.jpg" alt=""
                                class="w-full h-full object-cover rounded-bl-3xl">
                        </div>

                        <!-- Icon Container -->
                        <div
                            class="relative z-10 w-20 h-20 icon-bg rounded-2xl flex items-center justify-center mb-8 mx-auto icon-container group-hover:scale-110 transition-transform duration-300">
                            <Icon name="lucide:trending-up" class="w-10 h-10 text-white service-icon" />
                        </div>

                        <!-- Content -->
                        <div class="relative z-10 text-center flex-grow">
                            <h3
                                class="text-2xl lg:text-3xl font-bold text-white dark:text-gray-100 mb-4 barlow-condensed">
                                Search Engine Optimization</h3>
                            <p class="text-blue-400 dark:text-blue-300 font-semibold text-lg mb-6">Rank higher, sell
                                more</p>
                            <p class="text-gray-300 dark:text-gray-400 text-base leading-relaxed mb-8">We combine SEO
                                strategy and content optimization to grow your visibility, engagement, and sales.</p>
                        </div>

                        <!-- CTA -->
                        <NuxtLink to="/services/seo" class="relative z-10 group/cta">
                            <div
                                class="flex items-center justify-center text-blue-400 dark:text-blue-300 cta-link group-hover:text-blue-300 transition-colors duration-300">
                                <span class="mr-3 font-semibold text-lg">Explore Solution</span>
                                <Icon name="lucide:arrow-right" class="w-6 h-6 cta-arrow" />
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Bottom CTA Section -->
            <div class="text-center mt-16 pt-12 border-t border-gray-700 dark:border-gray-600">
                <p class="text-gray-300 dark:text-gray-400 text-lg mb-6">
                    Ready to transform your business with our expertise?
                </p>
                <NuxtLink to="/contact"
                    class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    <span class="mr-2">Start Your Project</span>
                    <Icon name="lucide:arrow-right" class="w-5 h-5" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
// Clean component focused on the core 3 services
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

.barlow-condensed {
    font-family: 'Barlow Condensed', sans-serif;
}

.icon-bg {
    background: linear-gradient(135deg, #01348F 0%, #1d4ed8 100%);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Service Card Enhanced Styles */
.service-card {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
}

.service-card>div {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    backdrop-filter: blur(10px);
}

/* Enhanced Hover States */
.service-card:hover {
    transform: translateY(-12px) scale(1.02);
    z-index: 10;
}

.service-card:hover>div {
    border-color: rgba(59, 130, 246, 0.5);
    background: rgba(55, 65, 81, 0.95);
    box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(59, 130, 246, 0.3),
        0 0 30px rgba(59, 130, 246, 0.2);
}

.dark .service-card:hover>div {
    background: rgba(17, 24, 39, 0.95);
    border-color: rgba(59, 130, 246, 0.6);
}

.service-card:hover .icon-bg {
    background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
    box-shadow:
        0 8px 25px rgba(29, 78, 216, 0.4),
        0 0 20px rgba(59, 130, 246, 0.3);
    transform: scale(1.1) rotate(5deg);
}

/* Advanced Icon Animation */
.service-icon {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-origin: center;
}

.service-card:hover .service-icon {
    animation: iconPulse 1s ease-in-out infinite alternate;
}

@keyframes iconPulse {
    0% {
        transform: scale(1) rotate(0deg);
        filter: brightness(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
    }

    100% {
        transform: scale(1.1) rotate(-2deg);
        filter: brightness(1.3) drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
    }
}

/* Enhanced CTA Animation */
.cta-link {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cta-arrow {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.service-card:hover .cta-arrow {
    transform: translateX(6px) scale(1.1);
}

/* Focus States for Accessibility */
.service-card:focus-within {
    transform: translateY(-8px) scale(1.01);
    outline: 2px solid #3b82f6;
    outline-offset: 4px;
}

.service-card:focus-within>div {
    border-color: rgba(59, 130, 246, 0.7);
    box-shadow:
        0 20px 40px -12px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(59, 130, 246, 0.5),
        0 0 25px rgba(59, 130, 246, 0.2);
}

/* Mobile Optimizations */
@media (max-width: 1024px) {
    .service-card:hover {
        transform: translateY(-8px) scale(1.01);
    }

    .service-card:hover .icon-bg {
        transform: scale(1.05) rotate(2deg);
    }
}

@media (max-width: 768px) {
    .service-card:hover {
        transform: translateY(-4px);
    }

    .service-card:active {
        transform: translateY(-6px) scale(1.01);
    }

    .service-card:active .icon-bg {
        transform: scale(1.08) rotate(3deg);
        box-shadow: 0 6px 20px rgba(29, 78, 216, 0.35);
    }

    .service-card:active .service-icon {
        animation: iconPulse 0.6s ease-in-out;
    }
}

/* Smooth Return Transition */
.service-card:not(:hover):not(:focus-within):not(:active) {
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.service-card:not(:hover):not(:focus-within):not(:active) .icon-bg {
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Dark mode specific adjustments */
@media (prefers-color-scheme: dark) {
    .icon-bg {
        background: linear-gradient(135deg, #01348F 0%, #1e40af 100%);
    }

    .service-card:hover .icon-bg {
        background: linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%);
    }
}

/* Additional Enhancement: Subtle Animation on Load */
.service-card {
    animation: slideInUp 0.6s ease-out forwards;
    animation-delay: calc(var(--card-index, 0) * 0.1s);
    opacity: 0;
    transform: translateY(30px);
}

@keyframes slideInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply staggered animation delay */
.service-card:nth-child(1) {
    --card-index: 0;
}

.service-card:nth-child(2) {
    --card-index: 1;
}

.service-card:nth-child(3) {
    --card-index: 2;
}
</style>