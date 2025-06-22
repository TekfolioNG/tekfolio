<template>
    <section class="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header Text -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Trusted by Organizations You Trust
                </h2>
                <p class="text-lg text-gray-800 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    From startups to large corporations, we simplify business processes with smart,
                    purposeful tech; so clients can focus on what they do best.
                </p>
                <p class="text-sm text-[#01348F] dark:text-gray-400 mt-6 font-medium">
                    Click a logo to explore the digital solutions we built for them.
                </p>
            </div>

            <!-- Logo Carousel Container -->
            <div class="relative overflow-hidden">
                <!-- Gradient Overlays -->
                <div
                    class="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-900 z-10 pointer-events-none">
                </div>
                <div
                    class="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-900 z-10 pointer-events-none">
                </div>

                <!-- Scrolling Logo Container -->
                <div class="flex space-x-8 animate-scroll-seamless" :class="{ 'paused': isHovered }"
                    @mouseenter="isHovered = true" @mouseleave="isHovered = false">
                    <!-- First set of logos -->
                    <NuxtLink v-for="(logo, index) in logos" :key="`first-${index}`" to="#" class="flex-shrink-0 group">
                        <div
                            class="w-32 h-20 flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-105">
                            <img :src="logo.src" :alt="logo.alt"
                                class="w-full h-full object-contain transition-all duration-300 group-hover:opacity-100"
                                loading="lazy" />
                        </div>
                    </NuxtLink>

                    <!-- Duplicate set for seamless loop -->
                    <NuxtLink v-for="(logo, index) in logos" :key="`second-${index}`" to="#"
                        class="flex-shrink-0 group">
                        <div
                            class="w-32 h-20 flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-105">
                            <img :src="logo.src" :alt="logo.alt"
                                class="w-full h-full object-contain transition-all duration-300 group-hover:opacity-100"
                                loading="lazy" />
                        </div>
                    </NuxtLink>
                </div>
            </div>

            <!-- Optional: Show selected logo info -->
            <div v-if="selectedLogo" class="mt-8 text-center">
                <div class="inline-block bg-blue-50 dark:bg-blue-900/30 rounded-lg px-6 py-3">
                    <p class="text-blue-800 dark:text-blue-200 font-medium">
                        Loading case study...
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Reactive state
const isHovered = ref(false)
const selectedLogo = ref(null)

// Logo data (excluding client-logo8)
const logos = ref([
    { src: '/img/client-logo1.png', alt: 'Client Logo 1' },
    { src: '/img/client-logo2.png', alt: 'Client Logo 2' },
    { src: '/img/client-logo3.png', alt: 'Client Logo 3' },
    { src: '/img/client-logo4.png', alt: 'Client Logo 4' },
    { src: '/img/client-logo5.png', alt: 'Client Logo 5' },
    { src: '/img/client-logo6.png', alt: 'Client Logo 6' },
    { src: '/img/client-logo7.png', alt: 'Client Logo 7' },
    { src: '/img/client-logo9.png', alt: 'Client Logo 9' },
    { src: '/img/client-logo10.png', alt: 'Client Logo 10' },
    { src: '/img/client-logo11.png', alt: 'Client Logo 11' },
    { src: '/img/client-logo12.png', alt: 'Client Logo 12' }
])

// Handle logo click (if needed for future functionality)
const handleLogoClick = (logo) => {
    selectedLogo.value = logo

    // Clear selection after 2 seconds
    setTimeout(() => {
        selectedLogo.value = null
    }, 2000)
}

// Optional: Add any setup logic
onMounted(() => {
    // Any initialization logic here
})
</script>

<style scoped>
@keyframes scroll-seamless {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-scroll-seamless {
    animation: scroll-seamless 30s linear infinite;
}

.animate-scroll-seamless.paused {
    animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .animate-scroll-seamless {
        animation-duration: 20s;
    }
}

@media (max-width: 480px) {
    .animate-scroll>div {
        margin-right: 1rem;
    }
}
</style>