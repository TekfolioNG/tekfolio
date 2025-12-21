<template>
    <section class="relative w-full -mb-8 md:-mb-40 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Header -->
            <div class="text-center space-y-3 py-12 md:py-16">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    <span class="text-gray-900">Africa-Engineered. </span>
                    <span class="text-gradient">Global-Standard. </span>
                    <span class="text-gray-900">Future-Ready.</span>
                </h2>
                <p class="text-gray-900 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
                    We build modern digital products with world-class engineering and design standards.<br>
                    Proudly Nigeria-based, globally trusted.
                </p>
            </div>

            <!-- Stats with Globe Container -->
            <div class="relative mt-6 min-h-[300px] md:min-h-[400px]">

                <!-- Globe Animation - Behind Stats -->
                <div class="globe-container">
                    <div ref="lottieContainer" class="lottie-wrapper"></div>
                </div>

                <!-- Stats Grid - Positioned Above Globe -->
                <div
                    class="relative z-10 grid grid-cols-2 md:flex md:justify-center md:items-start -gap-3 md:-gap-3 lg:-gap-4 px-4 md:px-8 lg:px-12">

                    <!-- Stat 1 -->
                    <div class="stat-card">
                        <div class="stat-number">{{ animatedStats.stat1 }}+</div>
                        <div class="stat-label">Digital products delivered and optimized</div>
                    </div>

                    <!-- Divider 1 -->
                    <div class="hidden md:flex stat-divider-vertical divider-animated divider-1"
                        :class="{ 'divider-visible': dividersVisible }">
                        <div class="hidden md:flex divider-dot"></div>
                        <div class="hidden md:flex divider-line"></div>
                    </div>

                    <!-- Stat 2 -->
                    <div class="stat-card">
                        <div class="stat-number">{{ animatedStats.stat2 }}%+</div>
                        <div class="stat-label">Client satisfaction and repeat engagement rate</div>
                    </div>

                    <!-- Divider 2 -->
                    <div class="hidden md:flex stat-divider-vertical divider-animated divider-2"
                        :class="{ 'divider-visible': dividersVisible }">
                        <div class="hidden md:flex divider-dot"></div>
                        <div class="hidden md:flex divider-line"></div>
                    </div>

                    <!-- Stat 3 -->
                    <div class="stat-card">
                        <div class="stat-number">{{ animatedStats.stat3 }}+</div>
                        <div class="stat-label">Years of combined team expertise + experience</div>
                    </div>

                    <!-- Divider 3 -->
                    <div class="hidden md:flex stat-divider-vertical divider-animated divider-3"
                        :class="{ 'divider-visible': dividersVisible }">
                        <div class="hidden md:flex divider-dot"></div>
                        <div class="hidden md:flex divider-line"></div>
                    </div>

                    <!-- Stat 4 -->
                    <div class="stat-card">
                        <div class="stat-number">&lt; {{ animatedStats.stat4 }}s</div>
                        <div class="stat-label">Average load time on optimized platforms</div>
                    </div>

                </div>

            </div>


        </div>
    </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';

const lottieContainer = ref(null);
let playerElement = null;
const dividersVisible = ref(false);

const animatedStats = reactive({
    stat1: 0,
    stat2: 0,
    stat3: 0,
    stat4: 0
});

const targetStats = {
    stat1: 40,
    stat2: 95,
    stat3: 20,
    stat4: 1.2
};

onMounted(() => {
    // Use nextTick to ensure DOM is ready
    setTimeout(() => {
        initGlobeAnimation();
        animateNumbers();
        // Trigger divider animation after a short delay
        setTimeout(() => {
            dividersVisible.value = true;
        }, 300);
    }, 100);
});

onBeforeUnmount(() => {
    // Cleanup
    if (playerElement && lottieContainer.value) {
        lottieContainer.value.innerHTML = '';
    }
});

const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;

    const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

        animatedStats.stat1 = Math.round(easeOutProgress * targetStats.stat1);
        animatedStats.stat2 = Math.round(easeOutProgress * targetStats.stat2);
        animatedStats.stat3 = Math.round(easeOutProgress * targetStats.stat3);
        animatedStats.stat4 = (easeOutProgress * targetStats.stat4).toFixed(1);

        if (frame >= totalFrames) {
            clearInterval(counter);
            // Ensure final values are exact
            animatedStats.stat1 = targetStats.stat1;
            animatedStats.stat2 = targetStats.stat2;
            animatedStats.stat3 = targetStats.stat3;
            animatedStats.stat4 = targetStats.stat4.toFixed(1);
        }
    }, frameRate);
};

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
    playerElement.setAttribute('src', 'https://lottie.host/308f820e-8e2f-4ff6-b3b9-0d6f58001ab9/PULXGTTBsJ.lottie');
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
    max-width: 180px;
    margin: 0 auto;
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
    margin-bottom: 0.75rem;
    line-height: 1;
}

.stat-label {
    font-size: 0.75rem;
    color: #090a0c;
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

/* Divider animation - Desktop only */
.divider-animated {
    opacity: 0;
    transform: translateY(80px);
    transition: opacity 1s ease-out, transform 1.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.divider-animated.divider-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Sequential animation delays */
.divider-1.divider-visible {
    transition-delay: 0.3s;
}

.divider-2.divider-visible {
    transition-delay: 0.6s;
}

.divider-3.divider-visible {
    transition-delay: 0.9s;
}

.divider-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(180deg, #6B2FB5 0%, #3D28A6 100%);
    margin-bottom: 4px;
}

.divider-line {
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,
            rgba(107, 47, 181, 0.8) 0%,
            rgba(61, 40, 166, 0.5) 50%,
            rgba(61, 40, 166, 0.1) 100%);
}

/* Globe container - positioned higher */
.globe-container {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 0;
    transform: translateY(-200px);
}

/* Globe animation - sharper and larger */
.lottie-wrapper {
    width: 1800px;
    height: 1800px;
    opacity: 0.4;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .globe-container {
        transform: translateY(-120px);
    }

    .stat-divider-vertical {
        display: none;
    }

    .lottie-wrapper {
        width: 5000px;
        height: 5000px;
        opacity: 0.35;
    }

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