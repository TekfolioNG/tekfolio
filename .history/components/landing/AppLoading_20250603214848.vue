<!-- Fixed AppLoading.vue -->
<template>
    <Transition name="fade">
        <div v-if="isLoading" class="app-loading">
            <div class="loading-content">
                <!-- Logo Container -->
                <div class="logo-container" ref="logoContainer">
                    <img v-if="useLogo" src="/img/tekfolio-logo-final6.svg" alt="Logo" class="logo" ref="logoImage"
                        @error="handleLogoError" />

                    <!-- Fallback SVG if image doesn't load -->
                    <svg v-else class="logo" viewBox="0 0 200 200" ref="logo">
                        <!-- Simple fallback logo -->
                        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="24"
                            font-weight="bold">TEKFOLIO</text>
                    </svg>
                </div>

                <!-- Optional Loading Text - hidden by default now -->
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

// Handle logo load error
const handleLogoError = () => {
    console.warn('Logo failed to load, using fallback');
    useLogo.value = false;
};

// Check if logo exists (optional - the @error handler above is more reliable)
const checkLogo = async () => {
    if (process.client) {
        try {
            const response = await fetch('/img/tekfolio-logo-final6.svg');
            useLogo.value = response.ok;
        } catch (error) {
            console.warn('Logo not found, using fallback', error);
            useLogo.value = false;
        }
    }
};

// Animation timeline
let timeline = null;
let pulseAnimation = null;

onMounted(async () => {
    console.log('AppLoading component mounted');
    console.log('isLoading:', isLoading.value);
    console.log('process.client:', process.client);

    // Check logo availability (optional since we have error handler)
    await checkLogo();

    if (process.client) {
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

            // Initial state - hidden and slightly scaled down
            gsap.set(logoElement, {
                opacity: 0,
                scale: 0.8
            });

            if (loadingText.value && props.showText) {
                gsap.set(loadingText.value, {
                    opacity: 0,
                    y: 10
                });
            }

            // Create fade-in animation
            timeline = gsap.timeline();

            // Fade in logo with slight scale up
            timeline.to(logoElement, {
                duration: 1,
                opacity: 1,
                scale: 1,
                ease: "power2.out"
            });

            // Fade in text if enabled
            if (loadingText.value && props.showText) {
                timeline.to(loadingText.value, {
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    ease: "power2.out"
                }, "-=0.5");
            }

            // Create pulsing animation after fade-in completes
            timeline.call(() => {
                // More subtle pulse animation
                pulseAnimation = gsap.to(logoElement, {
                    scale: 1.02, // Much more subtle scale
                    opacity: 0.9,
                    duration: 2, // Slower pulse
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });

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

        } catch (err) {
            console.error('Error initializing loading animation:', err);
            setTimeout(() => {
                isLoading.value = false;
            }, 2000);
        }
    }
});

onUnmounted(() => {
    // Clean up animations
    if (timeline) {
        timeline.kill();
        timeline = null;
    }

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
}

.logo-container {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    /* Reduced gap */
}

.logo {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    /* Prevent initial flash */
    opacity: 1;
}

.loading-text {
    font-size: 1rem;
    /* Slightly smaller */
    margin-top: 5px;
    /* Much smaller gap */
    color: #666;
    /* Softer color for tagline look */
    font-weight: 400;
    /* Lighter weight */
    font-style: italic;
    /* Make it look more like a tagline */
    text-align: center;
    max-width: 300px;
    /* Prevent text from being too wide */
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