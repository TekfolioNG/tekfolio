<template>
    <section class="w-full bg-white py-4 -md:py-4">
        <div class="max-w-7xl mx-auto px-4 md:px-4 lg:px-6">

            <!-- Service 1: Enterprise Web Solutions (Text Left, Animation Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-12 md:mb-20">
                <!-- Text Content -->
                <div class="order-1 space-y-4">
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center lg:text-left">
                        Enterprise Web Solutions
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Scalable Web Platforms for Modern Teams
                    </h3>
                    <p class="text-sm md:text-base text-gray-900 leading-relaxed text-center lg:text-left">
                        High-performance web applications built for speed, security, and long-term growth. We design and
                        engineer systems that stay stable under pressure and easy to maintain as your organizational
                        needs evolve.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                        <NuxtLink to="/web-solutions"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg border-2 border-gray-300 hover:border-purple-700 hover:text-purple-700 transition-all duration-200">
                            See How
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-base rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Start Project
                        </NuxtLink>
                    </div>
                </div>

                <!-- Lottie Animation -->
                <div class="order-2 relative h-[300px] md:h-[400px] lg:h-[450px]">
                    <div id="lottie-web-solutions" class="w-full h-full"></div>
                </div>
            </div>

            <!-- Service 2: Mobile App Development (Animation Left, Text Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-12 md:mb-20">
                <!-- Lottie Animation -->
                <div class="order-2 lg:order-1 relative h-[300px] md:h-[400px] lg:h-[450px]">
                    <div id="lottie-mobile-apps" class="w-full h-full"></div>
                </div>

                <!-- Text Content -->
                <div class="order-1 lg:order-2 space-y-4">
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center lg:text-left">
                        Mobile App Development
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Intuitive. Fast. Cross-Platform.
                    </h3>
                    <p class="text-sm md:text-base text-gray-900 leading-relaxed text-center lg:text-left">
                        Cross-platform mobile apps engineered for performance and designed for smooth and consistent
                        user experiences. We build mobile products that feel natural, work reliably, and deliver the
                        features your users value most.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                        <NuxtLink to="/mobile-apps"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg border-2 border-gray-300 hover:border-purple-700 hover:text-purple-700 transition-all duration-200">
                            See How
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-base rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Start Project
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Service 3: Cloud Migration & Security (Text Left, Animation Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-12 md:mb-20">
                <!-- Text Content -->
                <div class="order-1 space-y-4">
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center lg:text-left">
                        Cloud Migration & Security
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Cloud-Powered. Security-Driven.
                    </h3>
                    <p class="text-sm md:text-base text-gray-900 leading-relaxed text-center lg:text-left">
                        Modern cloud infrastructure with enterprise-grade security. We help you deploy, optimize, and
                        protect your digital assets so your operations stay efficient, resilient, and online.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                        <NuxtLink to="/cloud-security"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg border-2 border-gray-300 hover:border-purple-700 hover:text-purple-700 transition-all duration-200">
                            See How
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-base rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Start Project
                        </NuxtLink>
                    </div>
                </div>

                <!-- Lottie Animation -->
                <div class="order-2 relative h-[300px] md:h-[400px] lg:h-[450px]">
                    <div id="lottie-cloud-security" class="w-full h-full"></div>
                </div>
            </div>

            <!-- Service 4: SEO & Performance (Animation Left, Text Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                <!-- Lottie Animation -->
                <div class="order-2 lg:order-1 relative h-[300px] md:h-[400px] lg:h-[450px]">
                    <div id="lottie-seo-performance" class="w-full h-full"></div>
                </div>

                <!-- Text Content -->
                <div class="order-1 lg:order-2 space-y-4">
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center lg:text-left">
                        SEO & Performance Optimization
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Get Found. Make Every Click Count.
                    </h3>
                    <p class="text-sm md:text-base text-gray-900 leading-relaxed text-center lg:text-left">
                        We optimize your digital assets for speed, search visibility, and real results. Make your pages
                        load faster, rank better, and convert more effectively.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                        <NuxtLink to="/seo-performance"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg border-2 border-gray-300 hover:border-purple-700 hover:text-purple-700 transition-all duration-200">
                            See How
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-base rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Start Project
                        </NuxtLink>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    // Load Lottie player script
    const loadLottieScript = async () => {
        if (!document.querySelector('script[src*="dotlottie-player"]')) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
            script.type = 'module';
            document.head.appendChild(script);

            await new Promise((resolve) => {
                script.onload = resolve;
            });
        }
    };

    // Initialize Lottie animations
    const initLottieAnimations = async () => {
        await loadLottieScript();

        const animations = [
            {
                containerId: 'lottie-web-solutions',
                src: 'https://lottie.host/b4d0bb6b-de7a-44ce-9c5a-239741aa1c35/hFAF5m26XR.lottie'
            },
            {
                containerId: 'lottie-mobile-apps',
                src: 'https://lottie.host/eb675f8c-4b20-48c4-ae92-3b864c447497/nT5yaC5iA0.lottie'
            },
            {
                containerId: 'lottie-cloud-security',
                src: 'https://lottie.host/100103e2-edb5-4c3c-a423-bfb5f11d8f7a/XaehZYMOP4.lottie'
            },
            {
                containerId: 'lottie-seo-performance',
                src: 'https://lottie.host/f2972ad1-baf5-4306-9759-66d201cfbfbf/xCxWWMHFt2.lottie'
            }
        ];

        animations.forEach(({ containerId, src }) => {
            const container = document.getElementById(containerId);
            if (container && !container.querySelector('dotlottie-player')) {
                const player = document.createElement('dotlottie-player');
                player.setAttribute('src', src);
                player.setAttribute('background', 'transparent');
                player.setAttribute('speed', '1');
                player.setAttribute('loop', '');
                player.setAttribute('autoplay', '');
                player.style.width = '100%';
                player.style.height = '100%';
                container.appendChild(player);
            }
        });
    };

    initLottieAnimations();
});
</script>

<style scoped>
/* Brand gradient for headings */
.text-gradient {
    background: linear-gradient(135deg, #4C1D95 0%, #2563EB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>