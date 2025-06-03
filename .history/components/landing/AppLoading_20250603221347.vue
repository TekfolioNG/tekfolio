<!-- Fixed AppLoading.vue -->
<template>
    <Transition name="fade">
        <div v-if="isLoading" class="app-loading">
            <div class="loading-content">
                <!-- Logo Container -->
                <div class="logo-container" ref="logoContainer">
                    <img v-if="useLogo" src="/img/tekfolio-logo-final6.svg" alt="Logo" class="logo" ref="logoImage"
                        @error="handleLogoError" @load="handleLogoLoad" />

                    <!-- Fallback SVG if image doesn't load -->
                    <svg v-else class="logo" viewBox="0 0 200 200" ref="logo">
                        <!-- Simple fallback logo -->
                        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="24"
                            font-weight="bold">TEKFOLIO</text>
                    </svg>
                </div>

                <!-- Loading Text - closer to logo -->
                <div class="loading-text" ref="loadingText" v-if="showText">
                    {{ loadingMessage }}
                </div>
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
    startAnimation();
};

// Handle logo load error
const handleLogoError = () => {
    console.warn('Logo failed to load, using fallback');
    useLogo.value = false;
    logoLoaded.value = true;
    startAnimation();
};

// Animation timeline
let pulseAnimation = null;

const startAnimation = async () => {
    if (process.client && logoLoaded.value) {
        try {
            // Import GSAP dynamically
            const { gsap } = await import('gsap');
            console.log('GSAP loaded successfully');

            // Wait a bit for DOM to be ready
            await new Promise(resolve => setTimeout(resolve, 100));

            // Get logo element (either image or SVG)
            const logoElement = logoImage.value || logoContainer.value?.querySelector('.logo');

            if (!logoElement) {
                console.warn('Logo element not found');
                return;
            }

            // Initial state - visible but normal size
            gsap.set(logoElement, {
                scale: 1,
                opacity: 1
            });

            if (loadingText.value && props.showText) {
                gsap.set(loadingText.value, {
                    opacity: 1
                });
            }

            // Create pulsing/zoom animation
            pulseAnimation = gsap.to(logoElement, {
                scale: 1.15, // Grows larger
                duration: 1.2, // Smooth pulsing speed
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
                transformOrigin: "center center"
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
        // Listen to Nuxt app lifecycle hooks
        const nuxtApp = useNuxtApp();

        // Hide loading when app is ready
        nuxtApp.hook('app:mounted', () => {
            setTimeout(() => {
                isLoading.value = false;
            }, 500);
        });

        // Auto-hide fallback
        setTimeout(() => {
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
    /* Prevent initial flash - start visible */
    opacity: 1;
    /* Ensure smooth scaling from center */
    transform-origin: center center;
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
</style>