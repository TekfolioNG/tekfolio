<!-- Fixed AppLoading.vue -->
<template>
    <Transition name="fade">
        <div v-if="isLoading" class="app-loading">
            <div class="loading-content">
                <!-- Logo Container -->
                <div class="logo-container" ref="logoContainer">
                    <img v-if="useLogo" src="/img/tekfolio-tagline-gray.png" alt="Logo" class="logo" ref="logoImage"
                        @error="handleLogoError" @load="handleLogoLoad" />

                    <!-- Fallback SVG if image doesn't load -->
                    <svg v-else class="logo" viewBox="0 0 200 200" ref="logo">
                        <!-- Simple fallback logo -->
                        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="24"
                            font-weight="bold">TEKFOLIO</text>
                    </svg>
                </div>

                <!-- Loading Text removed as requested -->
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { useNuxtApp } from '#app';
import { onMounted, onUnmounted, ref } from 'vue';

// Props and state
const props = defineProps({
    showText: {
        type: Boolean,
        default: false
    },
    loadingMessage: {
        type: String,
        default: "//smart, simple, secure solutions that work"
    },
    duration: {
        type: Number,
        default: 3000 // ms before auto-hiding
    }
});

const isLoading = ref(true);
const logoContainer = ref(null);
const logoImage = ref(null);
const loadingText = ref(null);
const useLogo = ref(true);
const logoLoaded = ref(false);

// Handle logo load success
const handleLogoLoad = () => {
    console.log('Logo loaded successfully');
    logoLoaded.value = true;
    // Add small delay to ensure DOM is fully ready
    setTimeout(() => {
        startAnimation();
    }, 50);
};

// Handle logo load error
const handleLogoError = () => {
    console.warn('Logo failed to load, using fallback');
    useLogo.value = false;
    logoLoaded.value = true;
    setTimeout(() => {
        startAnimation();
    }, 50);
};

// Animation timeline
let pulseAnimation = null;

const startAnimation = async () => {
    if (process.client && logoLoaded.value) {
        try {
            // Import GSAP dynamically
            const { gsap } = await import('gsap');
            console.log('GSAP loaded, starting animation');

            // Get logo element (either image or SVG)
            const logoElement = logoImage.value || logoContainer.value?.querySelector('.logo');

            if (!logoElement) {
                console.warn('Logo element not found');
                return;
            }

            console.log('Logo element found, initializing animation');

            // Force initial state to prevent any flashing
            gsap.set(logoElement, {
                scale: 1,
                opacity: 1,
                transformOrigin: "center center",
                force3D: true // Hardware acceleration
            });

            // Wait one more frame to ensure everything is rendered
            await new Promise(resolve => requestAnimationFrame(resolve));

            console.log('Starting pulse animation');

            // Create pulsing/zoom animation
            pulseAnimation = gsap.to(logoElement, {
                scale: 1.15, // Grows larger
                duration: 1.2, // Smooth pulsing speed
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
                transformOrigin: "center center",
                force3D: true, // Hardware acceleration
                onStart: () => console.log('Pulse animation started'),
                onRepeat: () => console.log('Pulse animation repeating')
            });

        } catch (err) {
            console.error('Error initializing loading animation:', err);
            setTimeout(() => {
                isLoading.value = false;
            }, 2000);
        }
    }
};

onMounted(async () => {
    console.log('AppLoading component mounted');
    console.log('isLoading:', isLoading.value);
    console.log('process.client:', process.client);

    if (process.client) {
        // Prevent scrollbar layout shift by reserving scrollbar space
        document.documentElement.style.overflow = 'hidden';

        // Listen to Nuxt app lifecycle hooks
        const nuxtApp = useNuxtApp();

        // Hide loading when app is ready
        nuxtApp.hook('app:mounted', () => {
            setTimeout(() => {
                // Restore scrollbar before hiding loader
                document.documentElement.style.overflow = '';
                isLoading.value = false;
            }, 500);
        });

        // Auto-hide fallback
        setTimeout(() => {
            // Restore scrollbar before hiding loader
            document.documentElement.style.overflow = '';
            isLoading.value = false;
        }, props.duration);

        // If using fallback SVG, start animation immediately
        if (!useLogo.value) {
            logoLoaded.value = true;
            startAnimation();
        }
    }
});

onUnmounted(() => {
    // Clean up animations
    if (pulseAnimation) {
        pulseAnimation.kill();
        pulseAnimation = null;
    }

    // Ensure scrollbar is restored if component unmounts unexpectedly
    if (process.client) {
        document.documentElement.style.overflow = '';
    }
});
</script>

<style scoped>
.app-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Prevent content flash */
    opacity: 1;
    visibility: visible;
    /* Prevent scrollbar layout shift */
    overflow: hidden;
    /* Account for scrollbar space to prevent jumping */
    width: 100vw;
}

.loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* Shift slightly to the right to compensate for logo cropping */
    transform: translateX(10px);
}

.logo-container {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2px;
    /* Much closer to text */
}

.logo {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    /* Prevent any visual glitches */
    opacity: 1;
    transform: scale(1);
    transform-origin: center center;
    /* Hardware acceleration to prevent glitches */
    will-change: transform;
    backface-visibility: hidden;
    /* Smooth rendering */
    image-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.loading-text {
    font-size: 0.9rem;
    /* Slightly smaller */
    margin-top: 0px;
    /* No gap - very close to logo */
    color: #666;
    /* Softer color for tagline look */
    font-weight: 400;
    /* Lighter weight */
    font-style: italic;
    /* Make it look more like a tagline */
    text-align: center;
    max-width: 300px;
    /* Prevent text from being too wide */
    line-height: 1.2;
    /* Tighter line height */
}

/* Transition effects */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>.