<template>
    <main class="relative w-full min-h-screen overflow-hidden bg-white">
        <!-- Content Container -->
        <div class="container mx-auto px-4 md:px-8 lg:px-12 min-h-screen flex items-center">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center w-full py-12 lg:py-0">

                <!-- Left Side - Hero Text Content (3/5 on desktop) -->
                <div class="text-center lg:text-left order-2 lg:order-1 lg:col-span-3 space-y-5 lg:pr-8 lg:pt-16">
                    <!-- Headlines with styled "Built Differently" -->
                    <div class="space-y-1">
                        <h1 class="hero-headline leading-[1.1]">
                            <span
                                class="block text-gray-900 text-3xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold">
                                Your Tech Advantage.
                            </span>
                            <span class="relative inline-block mt-1">
                                <span
                                    class="text-gradient text-3xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold">
                                    Built Differently
                                </span>
                                <!-- Stylish circular accent -->
                                <svg class="accent-circle absolute -inset-2 -z-10" viewBox="0 0 200 80"
                                    preserveAspectRatio="none">
                                    <ellipse cx="100" cy="40" rx="98" ry="38" fill="none" stroke="url(#gradient)"
                                        stroke-width="2" opacity="0.3" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style="stop-color:#5B21B6;stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <!-- Double angled underline - Shorter and stylish -->
                                <svg class="double-underline absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4"
                                    viewBox="0 0 300 20" preserveAspectRatio="none">
                                    <path d="M0,14 Q150,4 300,2" stroke="url(#gradient1)" stroke-width="2.5" fill="none"
                                        stroke-linecap="round" />
                                    <path d="M0,18 Q150,8 300,6" stroke="url(#gradient2)" stroke-width="2.5" fill="none"
                                        stroke-linecap="round" />
                                    <defs>
                                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style="stop-color:#5B21B6;stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
                                        </linearGradient>
                                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.6" />
                                            <stop offset="100%" style="stop-color:#5B21B6;stop-opacity:0.6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </h1>
                    </div>

                    <!-- Description -->
                    <p
                        class="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                        We help businesses move faster, work smarter, and deliver modern digital experiences that stand
                        out.
                        From custom web apps to mobile solutions, we build technology that drives real growth.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <!-- Primary CTA - Gradient Button -->
                        <NuxtLink to="/contact"
                            class="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-base lg:text-lg rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-2xl">
                            <span class="relative flex items-center gap-2 z-10">
                                Start Your Project
                                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6">
                                    </path>
                                </svg>
                            </span>
                        </NuxtLink>

                        <!-- Secondary CTA - Outlined with gradient border -->
                        <NuxtLink to="/work"
                            class="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold text-base lg:text-lg rounded-xl transition-all duration-300 button-gradient-border hover:scale-105 hover:shadow-2xl">
                            <span class="relative flex items-center gap-2 z-10">
                                See Our Work
                                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6">
                                    </path>
                                </svg>
                            </span>
                        </NuxtLink>
                    </div>

                    <!-- Trust Indicators - Horizontal Cards -->
                    <div class="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <!-- Card 1 -->
                        <div class="bg-white rounded-lg shadow-2xl px-6 py-4 max-w-sm">
                            <h3 class="text-gray-900 font-bold text-sm mb-1">Trusted by Businesses in Nigeria and Beyond
                            </h3>
                            <p class="text-gray-600 text-xs">Reliable digital solutions built for real-world use and
                                long-term performance.</p>
                        </div>

                        <!-- Card 2 -->
                        <div class="bg-white rounded-lg shadow-2xl px-6 py-4 max-w-sm">
                            <h3 class="text-gray-900 font-bold text-sm mb-1">Quality, Delivered Fast</h3>
                            <p class="text-gray-600 text-xs">Speed without compromise plus rapid development that ships
                                with precision.</p>
                        </div>
                    </div>
                </div>

                <!-- Right Side - Lottie Animation (2/5 on desktop) -->
                <div
                    class="relative h-[300px] sm:h-[400px] lg:h-[500px] order-1 lg:order-2 lg:col-span-2 flex items-center justify-center">
                    <div id="lottie-animation" class="lottie-container w-full h-full flex items-center justify-center">
                        <!-- Lottie will be loaded here via JavaScript -->
                    </div>
                </div>

            </div>
        </div>

        <!-- Subtle gradient overlay at bottom for depth -->
        <div
            class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none">
        </div>

        <!-- New Section - Vision Statement -->
        <section class="bg-white py-12 md:py-16">
            <div class="container mx-auto px-4 md:px-8 lg:px-12">
                <div class="max-w-4xl mx-auto text-center">
                    <!-- Header -->
                    <h2 class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2">
                        Your bold vision deserves tech that's smart, simple, and secure
                    </h2>

                    <!-- Rotating Text with Slide Animation -->
                    <div class="relative h-12 md:h-14 lg:h-16 overflow-hidden mb-3">
                        <div class="rotating-text-container">
                            <p
                                class="rotating-text text-gradient-animated text-2xl md:text-3xl lg:text-4xl font-bold absolute w-full">
                                Custom-built websites that feel effortless.
                            </p>
                            <p
                                class="rotating-text text-gradient-animated text-2xl md:text-3xl lg:text-4xl font-bold absolute w-full">
                                Modern apps engineered for growth.
                            </p>
                            <p
                                class="rotating-text text-gradient-animated text-2xl md:text-3xl lg:text-4xl font-bold absolute w-full">
                                Cloud solutions that scale as you do.
                            </p>
                        </div>
                    </div>

                    <!-- Stats Text -->
                    <p class="text-gray-600 text-sm md:text-base font-medium">
                        Over 40+ professional, A-class digital projects built, deployed, and optimized.
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    // Load Lottie player script and initialize
    const loadLottie = async () => {
        // Check if script already exists
        if (!document.querySelector('script[src*="dotlottie-player"]')) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
            script.type = 'module';
            document.head.appendChild(script);

            // Wait for script to load
            await new Promise((resolve) => {
                script.onload = resolve;
            });
        }

        // Create and configure the player
        const container = document.getElementById('lottie-animation');
        if (container && !container.querySelector('dotlottie-player')) {
            const player = document.createElement('dotlottie-player');
            player.setAttribute('src', 'https://lottie.host/1617352f-c57b-4585-8f08-721e4a949c01/IX6yVMPCQM.lottie');
            player.setAttribute('background', 'transparent');
            player.setAttribute('speed', '1');
            player.setAttribute('loop', '');
            player.setAttribute('autoplay', '');
            player.style.width = '100%';
            player.style.height = '100%';
            container.appendChild(player);
        }
    };

    loadLottie();
});
</script>

<style scoped>
/* Brand gradient colors from logo - Deeper gradient */
.text-gradient {
    background: linear-gradient(135deg, #4C1D95 0%, #2563EB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Gradient for animated text */
.text-gradient-animated {
    background: linear-gradient(135deg, #5B21B6 0%, #3B82F6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Hero headline animation */
.hero-headline {
    animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Lottie container styling with gradient glow */
.lottie-container {
    filter: drop-shadow(0 10px 40px rgba(91, 33, 182, 0.15));
}

/* Circular accent animation */
.accent-circle {
    opacity: 0;
    animation: fadeInCircle 1.2s ease-out 0.3s forwards;
}

@keyframes fadeInCircle {
    from {
        opacity: 0;
        transform: scale(0.8) rotate(-5deg);
    }

    to {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }
}

/* Double underline with draw animation */
.double-underline {
    opacity: 0;
    animation: drawLines 1.2s ease-out 0.6s forwards;
}

@keyframes drawLines {
    from {
        opacity: 0;
        stroke-dasharray: 300;
        stroke-dashoffset: 300;
    }

    to {
        opacity: 1;
        stroke-dasharray: 300;
        stroke-dashoffset: 0;
    }
}

/* Gradient border button effect - Subtle zoom */
.button-gradient-border {
    position: relative;
    background: white;
    border: 2px solid transparent;
    background-clip: padding-box;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.button-gradient-border::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.75rem;
    padding: 2px;
    background: linear-gradient(135deg, #5B21B6, #3B82F6);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
}

.button-gradient-border:hover {
    box-shadow: 0 10px 25px -5px rgba(91, 33, 182, 0.4);
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .hero-headline span {
        font-size: 1.75rem;
    }

    .double-underline {
        height: 20px;
    }
}

@media (min-width: 640px) and (max-width: 1023px) {
    .hero-headline span {
        font-size: 2rem;
    }

    .double-underline {
        height: 20px;
    }
}

@media (min-width: 1024px) {
    .double-underline {
        height: 20px;
    }
}

/* Smooth transitions */
* {
    transition: color 0.3s ease, background-color 0.3s ease;
}

/* Rotating Text Animation */
.rotating-text-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.rotating-text {
    left: 0;
    top: 0;
    opacity: 0;
    transform: translateY(100%);
    animation: slideRotate 9s infinite;
}

.rotating-text:nth-child(1) {
    animation-delay: 0s;
}

.rotating-text:nth-child(2) {
    animation-delay: 3s;
}

.rotating-text:nth-child(3) {
    animation-delay: 6s;
}

@keyframes slideRotate {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }

    5% {
        opacity: 1;
        transform: translateY(0);
    }

    27.77% {
        opacity: 1;
        transform: translateY(0);
    }

    33.33% {
        opacity: 0;
        transform: translateY(-100%);
    }

    100% {
        opacity: 0;
        transform: translateY(-100%);
    }
}
</style>