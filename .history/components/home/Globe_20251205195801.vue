<template>
    <section class="w-full bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

                <!-- Left Column: Enhanced Animation -->
                <div class="order-2 lg:order-1 relative">
                    <div class="relative w-full max-w-lg mx-auto">
                        <!-- Animated Background Elements -->
                        <div class="absolute -top-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-30">
                        </div>
                        <div
                            class="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30">
                        </div>

                        <!-- Rotating Globe with Shadow -->
                        <div class="relative h-[280px] md:h-[380px] lg:h-[480px]">
                            <div id="rotating-globe-lottie" class="w-full h-full drop-shadow-2xl"></div>
                        </div>

                        <!-- Decorative Elements -->
                        <div
                            class="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-purple-200 rounded-full animate-ping opacity-20">
                        </div>
                        <div
                            class="absolute -top-6 -left-6 w-16 h-16 border-2 border-blue-200 rounded-full animate-ping opacity-20 animation-delay-1000">
                        </div>
                    </div>
                </div>

                <!-- Right Column: Enhanced Content -->
                <div class="order-1 lg:order-2">
                    <!-- Badge -->
                    <div
                        class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-full mb-6">
                        <div class="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mr-2"></div>
                        <span class="text-sm font-semibold text-gradient">Trusted Worldwide</span>
                    </div>

                    <!-- Headline -->
                    <div class="space-y-6 mb-8">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            <span class="block">Africa-Built.</span>
                            <span class="block text-gradient">Global-Standard.</span>
                            <span class="block">Future-Ready.</span>
                        </h1>

                        <p class="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                            Engineering digital excellence from Nigeria to the world.
                            <span class="font-semibold text-gray-800">Where innovation meets precision.</span>
                        </p>
                    </div>

                    <!-- Stats Grid with Icons -->
                    <div class="grid grid-cols-2 gap-6 md:gap-8 mb-10">
                        <!-- Stat 1 -->
                        <div
                            class="space-y-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div class="flex items-center space-x-3">
                                <div class="p-2 bg-purple-50 rounded-lg">
                                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-3xl font-bold text-gray-900">40+</div>
                                    <div class="text-sm text-gray-600 font-medium">Products Delivered</div>
                                </div>
                            </div>
                        </div>

                        <!-- Stat 2 -->
                        <div
                            class="space-y-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div class="flex items-center space-x-3">
                                <div class="p-2 bg-green-50 rounded-lg">
                                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-3xl font-bold text-gray-900">95%+</div>
                                    <div class="text-sm text-gray-600 font-medium">Satisfaction Rate</div>
                                </div>
                            </div>
                        </div>

                        <!-- Stat 3 -->
                        <div
                            class="space-y-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div class="flex items-center space-x-3">
                                <div class="p-2 bg-blue-50 rounded-lg">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-3xl font-bold text-gray-900">20+</div>
                                    <div class="text-sm text-gray-600 font-medium">Years Expertise</div>
                                </div>
                            </div>
                        </div>

                        <!-- Stat 4 -->
                        <div
                            class="space-y-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div class="flex items-center space-x-3">
                                <div class="p-2 bg-orange-50 rounded-lg">
                                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-3xl font-bold text-gray-900">&lt;1.2s</div>
                                    <div class="text-sm text-gray-600 font-medium">Avg Load Time</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4">
                        <NuxtLink to="/portfolio"
                            class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-700 to-blue-600 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 shadow-lg">
                            View Our Portfolio
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:text-purple-700 transition-all duration-200">
                            Start a Project
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
    // Load Lottie script if not already loaded
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

    // Initialize rotating globe animation
    const initRotatingGlobe = async () => {
        await loadLottieScript();

        const container = document.getElementById('rotating-globe-lottie');
        if (container && !container.querySelector('dotlottie-player')) {
            const player = document.createElement('dotlottie-player');
            player.setAttribute('src', 'https://lottie.host/0c4a99a5-c9bb-4411-a39b-af2b4dac83a8/FzFihrN1zJ.lottie');
            player.setAttribute('background', 'transparent');
            player.setAttribute('speed', '0.8'); // Slightly slower for elegance
            player.setAttribute('loop', '');
            player.setAttribute('autoplay', '');
            player.setAttribute('mode', 'normal');
            player.style.width = '100%';
            player.style.height = '100%';
            container.appendChild(player);
        }
    };

    initRotatingGlobe();
});
</script>

<style scoped>
/* Gradient text */
.text-gradient {
    background: linear-gradient(135deg, #4C1D95 0%, #2563EB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Animation delays */
.animation-delay-1000 {
    animation-delay: 1s;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

/* Hover effects for stats */
.stat-card {
    transition: all 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .stat-grid {
        grid-template-columns: 1fr;
    }
}
</style>