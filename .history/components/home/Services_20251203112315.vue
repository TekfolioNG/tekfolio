<template>
    <section class="w-full bg-white py-2 md:py-4">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

            <!-- Service 1: Enterprise Web Solutions (Text Left, Animation Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 items-center mb-2 md:mb-3">
                <!-- Text Content -->
                <div class="order-2 lg:order-1 space-y-1 px-2 lg:pr-8">
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-center lg:text-left">
                        Enterprise Web Solutions
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Scalable Web Platforms for Modern Teams
                    </h3>
                    <p
                        class="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium text-center lg:text-left">
                        High-performance web applications built for speed, security, and long-term growth. We design and
                        engineer systems that stay stable under pressure and easy to maintain as your organizational
                        needs evolve.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3 pt-1 justify-center lg:justify-start">
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
                <div class="order-1 lg:order-2 relative h-[250px] md:h-[350px] lg:h-[400px]">
                    <div id="lottie-web-solutions" class="w-full h-full"></div>
                </div>
            </div>

            <!-- Service 2: Mobile App Development (Animation Left, Text Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 items-center mb-2 md:mb-3">
                <!-- Lottie Animation -->
                <div class="order-1 lg:order-1 relative h-[250px] md:h-[350px] lg:h-[400px]">
                    <div id="lottie-mobile-apps" class="w-full h-full"></div>
                </div>

                <!-- Text Content -->
                <div class="order-2 space-y-1 px-2 lg:pl-8">
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-center lg:text-left">
                        Mobile App Development
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Intuitive. Fast. Cross-Platform.
                    </h3>
                    <p
                        class="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium text-center lg:text-left">
                        Cross-platform mobile apps engineered for performance and designed for smooth and consistent
                        user experiences. We build mobile products that feel natural, work reliably, and deliver the
                        features your users value most.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3 pt-1 justify-center lg:justify-start">
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

            <!-- Service 3: Cloud Migration & Security (Animation Left, Text Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 items-center mb-2 md:mb-3">
                <!-- Lottie Animation -->
                <div class="order-1 lg:order-1 relative h-[250px] md:h-[350px] lg:h-[400px]">
                    <div id="lottie-cloud-security" class="w-full h-full"></div>
                </div>

                <!-- Text Content -->
                <div class="order-2 space-y-1 px-2 lg:pl-8">
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-center lg:text-left">
                        Cloud Migration & Security
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Cloud-Powered. Security-Driven.
                    </h3>
                    <p
                        class="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium text-center lg:text-left">
                        Modern cloud infrastructure with enterprise-grade security. We help you deploy, optimize, and
                        protect your digital assets so your operations stay efficient, resilient, and online.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3 pt-1 justify-center lg:justify-start">
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
            </div>

            <!-- Service 4: SEO & Performance (Text Left, Animation Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 items-center mb-2 md:mb-3">
                <!-- Text Content -->
                <div class="order-2 lg:order-1 space-y-1 px-2 lg:pr-8">
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-center lg:text-left">
                        SEO & Performance Optimization
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Get Found. Make Every Click Count.
                    </h3>
                    <p
                        class="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium text-center lg:text-left">
                        We optimize your digital assets for speed, search visibility, and real results. Make your pages
                        load faster, rank better, and convert more effectively.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3 pt-1 justify-center lg:justify-start">
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

                <!-- Lottie Animation -->
                <div class="order-1 lg:order-2 relative h-[250px] md:h-[300px] lg:h-[350px]">
                    <div id="lottie-seo-performance" class="w-full h-full"></div>
                </div>
            </div>

            <!-- Service 5: Creative Coding & Interactive Experiences (Text Left, Video Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 items-center mt-12 md:mt-0">
                <!-- Text Content -->
                <div class="order-2 lg:order-1 space-y-1 px-2 lg:pr-8 mt-12 md:mt-0">
                    <p class="text-gray-600 text-sm md:text-base font-medium italic text-center lg:text-left">
                        ..And when your idea needs something unexpected—something with presence.
                    </p>
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-center lg:text-left">
                        Creative Coding & Interactive Experiences
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Code that moves. Stories that linger.
                    </h3>
                    <p
                        class="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium text-center lg:text-left">
                        We design expressive, interactive experiences that elevate brand stories, product launches, and
                        data presentations. Clear. Engaging. Memorable. Built with the precision of engineering and the
                        spirit of creative exploration.
                    </p>

                    <!-- CTA Buttons with Play Prompt -->
                    <div class="flex flex-col sm:flex-row gap-3 pt-1 justify-center lg:justify-start">
                        <button @click="playVideo"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg border-2 border-gray-300 hover:border-purple-700 hover:text-purple-700 transition-all duration-200 group">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            Play the sample to experience what's possible
                        </button>
                        <NuxtLink to="/contact"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-base rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Start Project
                        </NuxtLink>
                    </div>
                </div>

                <!-- Video Player with Custom Styling -->
                <div
                    class="order-1 lg:order-2 relative h-[250px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                    <!-- Video Container -->
                    <div class="relative w-full h-full group">
                        <!-- Video Element -->
                        <video ref="creativeSampleVideo" class="w-full h-full object-cover" preload="metadata"
                            playsinline>
                            <source
                                src="https://pub-b093fb1bbec143f2bf250c4cd137a160.r2.dev/creative-sample-with-audio2.mp4"
                                type="video/mp4">
                            Your browser does not support the video tag.
                        </video>

                        <!-- Video Overlay with Play Button -->
                        <div v-if="!isVideoPlaying" @click="playVideo"
                            class="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/40 cursor-pointer">
                            <div class="relative">
                                <!-- Cover Image -->
                                <img src="/sketch-sample.png" alt="Creative Coding Sample Preview"
                                    class="w-full h-full object-cover opacity-80">

                                <!-- Play Button Overlay -->
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div
                                        class="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
                                        <svg class="w-8 h-8 md:w-10 md:h-10 text-purple-700 ml-1" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                <!-- Play Text -->
                                <div class="absolute bottom-4 left-0 right-0 text-center">
                                    <span
                                        class="inline-block px-4 py-2 bg-black/70 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                                        Click to play sample
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Video Controls (Custom) -->
                        <div v-if="isVideoPlaying" @click="pauseVideo"
                            class="absolute inset-0 bg-transparent cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div class="p-4 bg-black/50 rounded-full">
                                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const creativeSampleVideo = ref(null);
const isVideoPlaying = ref(false);

const playVideo = () => {
    if (creativeSampleVideo.value) {
        creativeSampleVideo.value.currentTime = 2; // Start at 2 seconds
        creativeSampleVideo.value.play();
        isVideoPlaying.value = true;

        // Add event listener for when video ends
        creativeSampleVideo.value.onended = () => {
            isVideoPlaying.value = false;
        };
    }
};

const pauseVideo = () => {
    if (creativeSampleVideo.value) {
        creativeSampleVideo.value.pause();
        isVideoPlaying.value = false;
    }
};

// Add event listener for pause
onMounted(() => {
    if (creativeSampleVideo.value) {
        creativeSampleVideo.value.addEventListener('pause', () => {
            isVideoPlaying.value = false;
        });
    }
});

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

/* Custom video styling */
video {
    border-radius: 0.75rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .grid>div:first-child {
        margin-bottom: 0.5rem;
    }

    /* Adjust video container height on mobile */
    .relative.h-\[250px\] {
        height: 220px;
    }
}

@media (max-width: 640px) {
    .relative.h-\[250px\] {
        height: 200px;
    }
}

/* Smooth transitions */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>