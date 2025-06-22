<template>
    <section class="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header Text -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Trusted by Organizations You Trust
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    From startups to large corporations, we simplify business processes with smart,
                    purposeful tech; so clients can focus on what they do best.
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-4 font-medium">
                    Click a logo to explore the digital solutions we built for them.
                </p>
            </div>

            <!-- Logo Carousel Container -->
            <div class="relative overflow-hidden">
                <!-- Gradient Overlays -->
                <div
                    class="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 z-10 pointer-events-none">
                </div>
                <div
                    class="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 z-10 pointer-events-none">
                </div>

                <!-- Scrolling Logo Container -->
                <div class="flex space-x-8 animate-scroll" :class="{ 'paused': isHovered }"
                    @mouseenter="isHovered = true" @mouseleave="isHovered = false">
                    <!-- First set of logos -->
                    <div v-for="(logo, index) in logos" :key="`first-${index}`"
                        class="flex-shrink-0 group cursor-pointer" @click="handleLogoClick(logo)">
                        <div
                            class="w-32 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105 border border-gray-200 dark:border-gray-700">
                            <img :src="logo.src" :alt="logo.alt"
                                class="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                                loading="lazy" />
                        </div>
                    </div>

                    <!-- Duplicate set for seamless loop -->
                    <div v-for="(logo, index) in logos" :key="`second-${index}`"
                        class="flex-shrink-0 group cursor-pointer" @click="handleLogoClick(logo)">
                        <div
                            class="w-32 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105 border border-gray-200 dark:border-gray-700">
                            <img :src="logo.src" :alt="logo.alt"
                                class="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                                loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Optional: Show selected logo info -->
            <div v-if="selectedLogo" class="mt-8 text-center">
                <div class="inline-block bg-blue-50 dark:bg-blue-900/30 rounded-lg px-6 py-3">
                    <p class="text-blue-800 dark:text-blue-200 font-medium">
                        {{ selectedLogo.message }}
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

// Logo data - you can customize the alt text and click messages
const logos = ref([
    {
        src: '/assets/img/client-logo1.png',
        alt: 'Client Logo 1',
        message: 'Exploring solutions for Client 1...'
    },
    {
        src: '/assets/img/client-logo2.png',
        alt: 'Client Logo 2',
        message: 'Exploring solutions for Client 2...'
    },
    {
        src: '/assets/img/client-logo3.png',
        alt: 'Client Logo 3',
        message: 'Exploring solutions for Client 3...'
    },
    {
        src: '/assets/img/client-logo4.png',
        alt: 'Client Logo 4',
        message: 'Exploring solutions for Client 4...'
    },
    {
        src: '/assets/img/client-logo5.png',
        alt: 'Client Logo 5',
        message: 'Exploring solutions for Client 5...'
    },
    {
        src: '/assets/img/client-logo6.png',
        alt: 'Client Logo 6',
        message: 'Exploring solutions for Client 6...'
    },
    {
        src: '/assets/img/client-logo7.png',
        alt: 'Client Logo 7',
        message: 'Exploring solutions for Client 7...'
    },
    {
        src: '/assets/img/client-logo8.png',
        alt: 'Client Logo 8',
        message: 'Exploring solutions for Client 8...'
    },
    {
        src: '/assets/img/client-logo9.png',
        alt: 'Client Logo 9',
        message: 'Exploring solutions for Client 9...'
    },
    {
        src: '/assets/img/client-logo10.png',
        alt: 'Client Logo 10',
        message: 'Exploring solutions for Client 10...'
    },
    {
        src: '/assets/img/client-logo11.png',
        alt: 'Client Logo 11',
        message: 'Exploring solutions for Client 11...'
    },
    {
        src: '/assets/img/client-logo12.png',
        alt: 'Client Logo 12',
        message: 'Exploring solutions for Client 12...'
    }
])

// Handle logo click
const handleLogoClick = (logo) => {
    selectedLogo.value = logo

    // Clear selection after 3 seconds
    setTimeout(() => {
        selectedLogo.value = null
    }, 3000)

    // Here you can add navigation logic, emit events, or call APIs
    // For example:
    // navigateTo(`/case-studies/${logo.slug}`)
    // or emit an event to parent component
}

// Optional: Add any setup logic
onMounted(() => {
    // Any initialization logic here
})
</script>

<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-scroll {
    animation: scroll 30s linear infinite;
}

.animate-scroll.paused {
    animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .animate-scroll {
        animation-duration: 20s;
    }
}

@media (max-width: 480px) {
    .animate-scroll>div {
        margin-right: 1rem;
    }
}
</style>