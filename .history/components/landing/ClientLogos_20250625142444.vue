<template>
    <section class="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header Text -->
            <div class="text-center mb-12">
                <h4 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Trusted by organizations you trust
                </h4>
                <p class="text-lg text-gray-900 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    From startups to large corporations, we simplify business processes with smart,
                    purposeful tech; so clients can focus on what they do best.
                </p>
                <p class="text-sm text-[#01348F] dark:text-gray-400 mt-2 font-medium"><b>
                        Click a logo to explore the digital solutions we built for them.
                    </b> </p>
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
                <div class="flex animate-scroll-seamless" :class="{ 'paused': isHovered }"
                    @mouseenter="isHovered = true" @mouseleave="isHovered = false">
                    <!-- First set of logos -->
                    <NuxtLink v-for="(logo, index) in logos" :key="`first-${index}`" :to="logo.link"
                        class="flex-shrink-0 group" :class="getSpacingClass(index)">
                        <div
                            class="w-36 h-24 flex items-center justify-center p-2 transition-all duration-300 group-hover:scale-105">
                            <img :src="logo.src" :alt="logo.alt"
                                class="w-full h-full object-contain transition-all duration-300 group-hover:opacity-100"
                                loading="lazy" />
                        </div>
                    </NuxtLink>

                    <!-- Duplicate set for seamless loop -->
                    <NuxtLink v-for="(logo, index) in logos" :key="`second-${index}`" :to="logo.link"
                        class="flex-shrink-0 group" :class="getSpacingClass(index)">
                        <div
                            class="w-36 h-24 flex items-center justify-center p-2 transition-all duration-300 group-hover:scale-105">
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

// Logo data (excluding client-logo8) with individual links
const logos = ref([
    { src: '/img/client-logo1.png', alt: 'Xstrato-Prime Nigeria Ltd', link: 'https://xstratoprime.com/' },
    { src: '/img/client-logo2.png', alt: 'Akorite Travels and Tours Ltd', link: 'https://akoritetravels.com/' },
    { src: '/img/client-logo3.png', alt: 'Sefa Energy Global Ltd', link: 'https://sefaenergy.com/' },
    { src: '/img/client-logo4.png', alt: 'Vera Verde Ltd', link: 'https://veraverde.com/' },
    { src: '/img/client-logo5.png', alt: 'Petabiz Telecom Ltd', link: 'https://petabiz-telco.com/' },
    { src: '/img/client-logo6.png', alt: 'Premium Properties and Infrastructure Ltd', link: 'https://ppil.com.ng/' },
    { src: '/img/client-logo7.png', alt: 'Lagos Water Corporation', link: 'https://www.lagoswater.org/' },
    { src: '/img/client-logo9.png', alt: 'The Oaktree Empowerment Initiative', link: 'https://www.oaktreeinitiative.org/' },
    { src: '/img/client-logo10.png', alt: 'Promonium Logistics Ltd', link: 'https://promoniumng.com/' },
    { src: '/img/client-logo11.png', alt: 'Wilson Samson', link: 'https://wilsonsamson.com/' },
    { src: '/img/client-logo12.png', alt: 'EcoPlatinum Group', link: 'https://ecoplatinumgroup.com/' }
])

// Helper function to get spacing class for specific logos
const getSpacingClass = (index) => {
    // Add extra spacing for logo4, logo5, and logo6 (indices 3, 4, 5)
    if (index === 3 || index === 4 || index === 5) {
        return 'mr-12'
    }
    return 'mr-6'
}

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
        /* Move exactly the width of one complete set of logos */
        /* This ensures the duplicate set aligns perfectly with the start position */
        transform: translateX(-50%);
    }
}

.animate-scroll-seamless {
    animation: scroll-seamless 30s linear infinite;
    /* Since we're moving exactly 50%, we can use a consistent duration */
}

.animate-scroll-seamless.paused {
    animation-play-state: paused;
}

/* Responsive adjustments with consistent 50% movement */
@media (max-width: 640px) {
    .animate-scroll-seamless {
        animation-duration: 25s;
    }
}

@media (max-width: 480px) {
    .animate-scroll-seamless {
        animation-duration: 20s;
    }
}
</style>