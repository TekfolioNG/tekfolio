<template>
    <section class="relative w-full py-16 md:py-24 bg-white overflow-hidden">
        <!-- Globe Animation - Behind everything -->
        <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div ref="lottieContainer" class="lottie-wrapper"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

            <!-- Header -->
            <div class="text-center space-y-3">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    <span class="text-white">Africa-Built. </span>
                    <span class="text-gradient">Global-Standard. </span>
                    <span class="text-white">Future-Ready.</span>
                </h2>
                <p class="text-white text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
                    We build modern digital products with world-class engineering and design standards.<br>
                    Proudly Nigeria-based, globally trusted.
                </p>
            </div>

            <!-- Stats Grid -->
            <div class="relative mt-12 md:mt-16">
                <div
                    class="grid grid-cols-2 md:flex md:justify-center md:items-start gap-4 md:gap-3 lg:gap-4 px-4 md:px-8 lg:px-12">

                    <!-- Stat 1 -->
                    <div class="stat-card">
                        <div class="stat-number">40+</div>
                        <div class="stat-label">Digital products delivered and optimized</div>
                    </div>

                    <!-- Divider 1 -->
                    <div class="hidden md:flex stat-divider-vertical">
                        <div class="divider-dot"></div>
                        <div class="divider-line"></div>
                    </div>

                    <!-- Stat 2 -->
                    <div class="stat-card">
                        <div class="stat-number">95%+</div>
                        <div class="stat-label">Client satisfaction rate</div>
                    </div>

                    <!-- Divider 2 -->
                    <div class="hidden md:flex stat-divider-vertical">
                        <div class="divider-dot"></div>
                        <div class="divider-line"></div>
                    </div>

                    <!-- Stat 3 -->
                    <div class="stat-card">
                        <div class="stat-number">20+</div>
                        <div class="stat-label">Years of combined team expertise</div>
                    </div>

                    <!-- Divider 3 -->
                    <div class="hidden md:flex stat-divider-vertical">
                        <div class="divider-dot"></div>
                        <div class="divider-line"></div>
                    </div>

                    <!-- Stat 4 -->
                    <div class="stat-card">
                        <div class="stat-number">&lt; 1.2s</div>
                        <div class="stat-label">Average load time on optimized platforms</div>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const lottieContainer = ref(null);
let playerElement = null;

onMounted(() => {
    // Use nextTick to ensure DOM is ready
    setTimeout(() => {
        initGlobeAnimation();
    }, 100);
});

onBeforeUnmount(() => {
    // Cleanup
    if (playerElement && lottieContainer.value) {
        lottieContainer.value.innerHTML = '';
    }
});

const initGlobeAnimation = () => {
    if (!lottieContainer.value) return;

    // Check if dotlottie-player is already defined
    if (!customElements.get('dotlottie-player')) {
        // Load the script
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
        script.type = 'module';

        script.onload = () => {
            createPlayer();
        };

        script.onerror = () => {
            console.error('Failed to load Lottie player script');
        };

        document.head.appendChild(script);
    } else {
        // Script already loaded, create player immediately
        createPlayer();
    }
};

const createPlayer = () => {
    if (!lottieContainer.value) return;

    // Clear any existing content
    lottieContainer.value.innerHTML = '';

    // Create the player element
    playerElement = document.createElement('dotlottie-player');
    playerElement.setAttribute('src', 'https://lottie.host/0c4a99a5-c9bb-4411-a39b-af2b4dac83a8/FzFihrN1zJ.lottie');
    playerElement.setAttribute('background', 'transparent');
    playerElement.setAttribute('speed', '0.6');
    playerElement.setAttribute('loop', '');
    playerElement.setAttribute('autoplay', '');
    playerElement.style.width = '100%';
    playerElement.style.height = '100%';

    lottieContainer.value.appendChild(playerElement);
};
</script>

<style scoped>
/* Brand gradient - lighter shades for contrast */
.text-gradient {
    background: linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%);
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
    max-width: 180px;
    margin: 0 auto;
}

.stat-card:hover {
    transform: translateY(-4px);
}

.stat-number {
    font-size: 1.75rem;
    font-weight: 700;
    background: linear-gradient(180deg, #A78BFA 0%, #818CF8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.75rem;
    line-height: 1;
}

.stat-label {
    font-size: 0.75rem;
    color: #E5E7EB;
    font-weight: 500;
    line-height: 1.3;
}

/* Vertical divider between stats */
.stat-divider-vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 120px;
    padding-top: 0.5rem;
}

.divider-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(180deg, #A78BFA 0%, #818CF8 100%);
    margin-bottom: 4px;
}

.divider-line {
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,
            rgba(167, 139, 250, 0.8) 0%,
            rgba(129, 140, 248, 0.5) 50%,
            rgba(129, 140, 248, 0.1) 100%);
}

/* Globe container - full size, behind content, darkened */
.lottie-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 140%;
    height: 180%;
    transform: translate(-50%, -50%);
    opacity: 0.4;
    filter: brightness(0.6);
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .stat-card {
        max-width: none;
        width: 100%;
    }

    .stat-number {
        font-size: 1.5rem;
    }

    .stat-label {
        font-size: 0.6875rem;
    }

    .stat-divider-vertical {
        height: 100px;
    }

    .divider-dot {
        width: 5px;
        height: 5px;
    }

    .lottie-wrapper {
        width: 140%;
        height: 180%;
    }
}

@media (min-width: 768px) {
    .stat-number {
        font-size: 2rem;
    }

    .stat-label {
        font-size: 0.8125rem;
    }

    .stat-divider-vertical {
        height: 110px;
    }
}

@media (min-width: 1024px) {
    .stat-number {
        font-size: 2.25rem;
    }

    .stat-label {
        font-size: 0.875rem;
    }

    .stat-divider-vertical {
        height: 120px;
    }
}
</style>