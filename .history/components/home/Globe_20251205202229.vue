<template>
    <section class="relative w-full py-16 md:py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

            <!-- Header -->
            <div class="text-center space-y-3 mb-8 md:mb-10">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    <span class="text-gray-900">Africa-Built. </span>
                    <span class="text-gradient">Global-Standard. </span>
                    <span class="text-gray-900">Future-Ready.</span>
                </h2>
                <p class="text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
                    We build modern digital products with world-class engineering and design standards. Proudly
                    Nigeria-based, globally trusted.
                </p>
            </div>

            <!-- Stats with Globe Container -->
            <div class="relative">

                <!-- Stats Grid - Positioned Above Globe -->
                <div
                    class="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-8 lg:px-12 mb-4 md:mb-0">

                    <!-- Stat 1 -->
                    <div class="stat-card">
                        <div class="stat-number">40+</div>
                        <div class="stat-divider"></div>
                        <div class="stat-label">Digital products delivered and optimized</div>
                    </div>

                    <!-- Stat 2 -->
                    <div class="stat-card">
                        <div class="stat-number">95%+</div>
                        <div class="stat-divider"></div>
                        <div class="stat-label">Client satisfaction rate</div>
                    </div>

                    <!-- Stat 3 -->
                    <div class="stat-card">
                        <div class="stat-number">20+</div>
                        <div class="stat-divider"></div>
                        <div class="stat-label">Years of combined team expertise</div>
                    </div>

                    <!-- Stat 4 -->
                    <div class="stat-card">
                        <div class="stat-number">&lt; 1.2s</div>
                        <div class="stat-divider"></div>
                        <div class="stat-label">Average load time on optimized platforms</div>
                    </div>

                </div>

                <!-- Globe Animation - Below Stats on Desktop, Full Width -->
                <div class="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mt-4 lg:mt-0 overflow-hidden">
                    <div id="lottie-globe" class="w-full h-full" style="transform: translateY(50%);"></div>
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

    // Initialize Globe Lottie animation
    const initGlobeAnimation = async () => {
        await loadLottieScript();

        const container = document.getElementById('lottie-globe');
        if (container && !container.querySelector('dotlottie-player')) {
            const player = document.createElement('dotlottie-player');
            player.setAttribute('src', 'https://lottie.host/0c4a99a5-c9bb-4411-a39b-af2b4dac83a8/FzFihrN1zJ.lottie');
            player.setAttribute('background', 'transparent');
            player.setAttribute('speed', '0.6');
            player.setAttribute('loop', '');
            player.setAttribute('autoplay', '');
            player.style.width = '100%';
            player.style.height = '100%';
            container.appendChild(player);
        }
    };

    initGlobeAnimation();
});
</script>

<style scoped>
/* Brand gradient */
.text-gradient {
    background: linear-gradient(135deg, #5B21B6 0%, #3B82F6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Stats styling */
.stat-card {
    text-align: center;
    padding: 1rem 0.75rem;
    background: transparent;
    transition: transform 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-4px);
}

.stat-number {
    font-size: 1.75rem;
    font-weight: 700;
    background: linear-gradient(180deg, #6B2FB5 0%, #3D28A6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    line-height: 1;
}

.stat-divider {
    width: 2px;
    height: 40px;
    background: linear-gradient(180deg, #6B2FB5 0%, #3D28A6 100%);
    margin: 0 auto 0.5rem;
}

.stat-label {
    font-size: 0.75rem;
    color: #374151;
    font-weight: 500;
    line-height: 1.3;
}

/* Globe container */
#lottie-globe {
    opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .stat-number {
        font-size: 1.5rem;
    }

    .stat-divider {
        height: 35px;
    }

    .stat-label {
        font-size: 0.6875rem;
    }
}

@media (min-width: 768px) {
    .stat-number {
        font-size: 2rem;
    }

    .stat-divider {
        height: 45px;
    }

    .stat-label {
        font-size: 0.8125rem;
    }
}

@media (min-width: 1024px) {
    .stat-number {
        font-size: 2.25rem;
    }

    .stat-divider {
        height: 50px;
    }

    .stat-label {
        font-size: 0.875rem;
    }
}
</style>