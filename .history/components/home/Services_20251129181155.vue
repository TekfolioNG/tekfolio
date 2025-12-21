<template>
    <section class="relative w-full overflow-hidden bg-white">
        <!-- Service 1: Enterprise Web Solutions -->
        <div class="service-section">
            <div class="container mx-auto px-6 md:px-12 lg:px-16">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Text Content -->
                    <div class="order-2 lg:order-1">
                        <div class="max-w-2xl">
                            <!-- Service Tag -->
                            <div
                                class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
                                <span
                                    class="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-2"></span>
                                <span class="text-sm font-semibold text-gray-700">Enterprise Web Solutions</span>
                            </div>

                            <!-- Title -->
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Scalable Web Platforms for Modern Teams
                            </h2>

                            <!-- Description -->
                            <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                High-performance web applications built for speed, security, and long-term growth. We
                                design and engineer systems that stay stable under pressure and easy to maintain as your
                                organizational needs evolve.
                            </p>

                            <!-- CTA Buttons -->
                            <div class="flex flex-col sm:flex-row gap-4">
                                <NuxtLink to="/web-solutions"
                                    class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 group">
                                    See How
                                    <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                    </svg>
                                </NuxtLink>

                                <NuxtLink to="/contact"
                                    class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 hover:shadow-xl transition-all duration-300">
                                    Start Project
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Lottie Animation -->
                    <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div class="lottie-container-service w-full max-w-md lg:max-w-lg">
                            <div id="lottie-web-solutions" class="w-full h-64 md:h-80 lg:h-96"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Service 2: Mobile App Development -->
        <div class="service-section bg-gray-50">
            <div class="container mx-auto px-6 md:px-12 lg:px-16">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Lottie Animation -->
                    <div class="order-1 lg:order-1 flex justify-center lg:justify-start">
                        <div class="lottie-container-service w-full max-w-md lg:max-w-lg">
                            <div id="lottie-mobile-apps" class="w-full h-64 md:h-80 lg:h-96"></div>
                        </div>
                    </div>

                    <!-- Text Content -->
                    <div class="order-2 lg:order-2">
                        <div class="max-w-2xl lg:ml-auto">
                            <!-- Service Tag -->
                            <div
                                class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
                                <span
                                    class="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-2"></span>
                                <span class="text-sm font-semibold text-gray-700">Mobile App Development</span>
                            </div>

                            <!-- Title -->
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Intuitive. Fast. Cross-Platform.
                            </h2>

                            <!-- Description -->
                            <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                Cross-platform mobile apps engineered for performance and designed for smooth and
                                consistent user experiences. We build mobile products that feel natural, work reliably,
                                and deliver the features your users value most.
                            </p>

                            <!-- CTA Buttons -->
                            <div class="flex flex-col sm:flex-row gap-4">
                                <NuxtLink to="/mobile-apps"
                                    class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 group">
                                    See How
                                    <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                    </svg>
                                </NuxtLink>

                                <NuxtLink to="/contact"
                                    class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 hover:shadow-xl transition-all duration-300">
                                    Start Project
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Service 3: Cloud Migration & Security -->
        <div class="service-section">
            <div class="container mx-auto px-6 md:px-12 lg:px-16">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Text Content -->
                    <div class="order-2 lg:order-1">
                        <div class="max-w-2xl">
                            <!-- Service Tag -->
                            <div
                                class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
                                <span
                                    class="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-2"></span>
                                <span class="text-sm font-semibold text-gray-700">Cloud Migration & Security</span>
                            </div>

                            <!-- Title -->
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Cloud-Powered. Security-Driven.
                            </h2>

                            <!-- Description -->
                            <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                Modern cloud infrastructure with enterprise-grade security. We help you deploy,
                                optimize, and protect your digital assets so your operations stay efficient, resilient,
                                and online.
                            </p>

                            <!-- CTA Buttons -->
                            <div class="flex flex-col sm:flex-row gap-4">
                                <NuxtLink to="/cloud-security"
                                    class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 group">
                                    See How
                                    <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                    </svg>
                                </NuxtLink>

                                <NuxtLink to="/contact"
                                    class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 hover:shadow-xl transition-all duration-300">
                                    Start Project
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Lottie Animation -->
                    <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div class="lottie-container-service w-full max-w-md lg:max-w-lg">
                            <div id="lottie-cloud-security" class="w-full h-64 md:h-80 lg:h-96"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Service 4: SEO & Performance Optimization -->
        <div class="service-section bg-gray-50">
            <div class="container mx-auto px-6 md:px-12 lg:px-16">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Lottie Animation -->
                    <div class="order-1 lg:order-1 flex justify-center lg:justify-start">
                        <div class="lottie-container-service w-full max-w-md lg:max-w-lg">
                            <div id="lottie-seo-performance" class="w-full h-64 md:h-80 lg:h-96"></div>
                        </div>
                    </div>

                    <!-- Text Content -->
                    <div class="order-2 lg:order-2">
                        <div class="max-w-2xl lg:ml-auto">
                            <!-- Service Tag -->
                            <div
                                class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
                                <span
                                    class="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-2"></span>
                                <span class="text-sm font-semibold text-gray-700">SEO & Performance Optimization</span>
                            </div>

                            <!-- Title -->
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Get Found. Make Every Click Count.
                            </h2>

                            <!-- Description -->
                            <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                We optimize your digital assets for speed, search visibility, and real results. Make
                                your pages load faster, rank better, and convert more effectively.
                            </p>

                            <!-- CTA Buttons -->
                            <div class="flex flex-col sm:flex-row gap-4">
                                <NuxtLink to="/seo-performance"
                                    class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 group">
                                    See How
                                    <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                    </svg>
                                </NuxtLink>

                                <NuxtLink to="/contact"
                                    class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 hover:shadow-xl transition-all duration-300">
                                    Start Project
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // Load Lottie player script and initialize all animations
    const loadLottie = async () => {
        // Check if script already exists
        if (!document.querySelector('script[src*="dotlottie-player"]')) {
            const script = document.createElement('script')
            script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs'
            script.type = 'module'
            document.head.appendChild(script)

            // Wait for script to load
            await new Promise((resolve) => {
                script.onload = resolve
            })
        }

        // Initialize all Lottie animations
        initializeLottieAnimation('lottie-web-solutions', 'https://lottie.host/b4d0bb6b-de7a-44ce-9c5a-239741aa1c35/hFAF5m26XR.lottie')
        initializeLottieAnimation('lottie-mobile-apps', 'https://lottie.host/eb675f8c-4b20-48c4-ae92-3b864c447497/nT5yaC5iA0.lottie')
        initializeLottieAnimation('lottie-cloud-security', 'https://lottie.host/100103e2-edb5-4c3c-a423-bfb5f11d8f7a/XaehZYMOP4.lottie')
        initializeLottieAnimation('lottie-seo-performance', 'https://lottie.host/f2972ad1-baf5-4306-9759-66d201cfbfbf/xCxWWMHFt2.lottie')
    }

    const initializeLottieAnimation = (containerId, src) => {
        const container = document.getElementById(containerId)
        if (container && !container.querySelector('dotlottie-player')) {
            const player = document.createElement('dotlottie-player')
            player.setAttribute('src', src)
            player.setAttribute('background', 'transparent')
            player.setAttribute('speed', '1')
            player.setAttribute('loop', '')
            player.setAttribute('autoplay', '')
            player.style.width = '100%'
            player.style.height = '100%'
            container.appendChild(player)
        }
    }

    loadLottie()
})
</script>

<style scoped>
.service-section {
    @apply py-20 md:py-28;
}

.lottie-container-service {
    filter: drop-shadow(0 20px 60px rgba(91, 33, 182, 0.1));
}

/* Smooth hover transitions for service sections */
.service-section:not(.bg-gray-50):hover {
    @apply bg-gray-50/50 transition-colors duration-500;
}

.service-section.bg-gray-50:hover {
    @apply bg-gray-100 transition-colors duration-500;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .service-section {
        @apply py-16 md:py-20;
    }
}

@media (max-width: 768px) {
    .service-section {
        @apply py-12 md:py-16;
    }
}
</style>