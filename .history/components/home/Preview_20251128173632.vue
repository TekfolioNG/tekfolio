<template>
    <main class="relative w-full min-h-screen overflow-hidden bg-white">
        <!-- Subtle gradient overlay at bottom for depth -->
        <div
            class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none">
        </div>

        <!-- New Section - Vision Statement -->
        <section class="bg-white py-12 md:py-12">
            <div class="container mx-auto px-4 md:px-8 lg:px-12">
                <div class="max-w-4xl mx-auto text-center">
                    <!-- Header -->
                    <h2 class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2">
                        Our e-solutions are smart, simple and secure
                    </h2>

                    <!-- Rotating Text with Slide Animation -->
                    <div class="relative h-12 md:h-14 lg:h-16 overflow-hidden mb-2">
                        <div class="rotating-text-container">
                            <p
                                class="rotating-text text-gradient-animated text-2xl md:text-3xl lg:text-4xl font-bold absolute w-full">
                                Custom-built websites that feel effortless
                            </p>
                            <p
                                class="rotating-text text-gradient-animated text-2xl md:text-3xl lg:text-4xl font-bold absolute w-full">
                                Modern apps engineered for growth
                            </p>
                            <p
                                class="rotating-text text-gradient-animated text-2xl md:text-3xl lg:text-4xl font-bold absolute w-full">
                                Cloud solutions that scale as you do
                            </p>
                        </div>
                    </div>

                    <!-- Stats Text -->
                    <p class="text-gray-900 text-sm md:text-base font-medium">
                        Over 40+ professional, A-class digital projects built, deployed, and optimized
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