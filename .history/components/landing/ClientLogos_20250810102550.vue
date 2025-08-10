<template>
    <section class="py-16 bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header Text -->
            <div class="text-center mb-12">
                <h4 class="text-2xl md:text-4xl font-bold text-gray-900 mb-4 barlow-condensed">
                    Trusted by organizations you trust
                </h4>
                <p class="text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
                    From startups to large corporations, we simplify business processes with smart,
                    purposeful tech; so clients can focus on what they do best.
                </p>
                <p class="text-sm text-[#01348F] mt-2 font-medium"><b>
                        Click a logo to explore the digital solutions we built for them.
                    </b> </p>
            </div>

            <!-- Logo Carousel Container -->
            <div class="relative">
                <!-- Gradient Overlays -->
                <div
                    class="absolute left-0 top-0 w-5 h-full bg-gradient-to-r from-gray-100 to-transparent -z-10 pointer-events-none">
                </div>
                <div
                    class="absolute right-0 top-0 w-5 h-full bg-gradient-to-l from-gray-100 to-transparent -z-10 pointer-events-none">
                </div>

                <!-- Scrolling Logo Container -->
                <div class="flex animate-scroll-seamless -mx-4" :class="{ 'paused': isHovered }"
                    @mouseenter="isHovered = true" @mouseleave="isHovered = false">
                    <!-- First set of logos -->
                    <div class="flex logo-set">
                        <NuxtLink v-for="(logo, index) in logos" :key="`first-${index}`" :to="logo.link"
                            class="flex-shrink-0 group" :class="getSpacingClass(index)">
                            <div
                                class="w-36 h-24 flex items-center justify-center p-2 transition-all duration-300 group-hover:scale-105">
                                <img :src="logo.src" :alt="logo.alt"
                                    class="w-full h-full object-contain transition-all duration-300 group-hover:opacity-100"
                                    loading="lazy" />
                            </div>
                        </NuxtLink>
                    </div>
                    <!-- Duplicate set of logos for seamless loop -->
                    <div class="flex logo-set">
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
    { src: '/img/client-logo4.png', alt: 'Vera Verde Ltd', link: 'https://veraverde.org/' },
    { src: '/img/client-logo5.png', alt: 'Petabiz Telecom Ltd', link: 'https://petabiz-telco.com/' },
    { src: '/img/client-logo6.png', alt: 'Premium Properties and Infrastructure Ltd', link: 'https://ppil.com.ng/' },
    { src: '/img/client-logo7.png', alt: 'Lagos Water Corporation', link: 'https://www.lagoswater.org/' },
    { src: '/img/client-logo9.png', alt: 'The Oaktree Empowerment Initiative', link: 'https://www.oaktreeinitiative.org/' },
    { src: '/img/client-logo10.png', alt: 'Promonium Logistics Ltd', link: 'https://promoniumng.com/' },
    { src: '/img/client-logo11.png', alt: 'Wilson Samson', link: 'https://wilsonsamson.com/' },
    { src: '/img/client-logo12.png', alt: 'EcoPlatinum Group', link: 'https://ecoplatinumgroup.com/' },
    { src: '/img/client-logo13.png', alt: 'Bot Integrated Services', link: 'https://botintegrated.com/' }
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
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

.barlow-condensed {
    font-family: 'Barlow Condensed', sans-serif;
}

@keyframes scroll-seamless {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

.animate-scroll-seamless {
    display: flex;
    width: fit-content;
    animation: scroll-seamless 20s linear infinite;
}

.animate-scroll-seamless.paused {
    animation-play-state: paused;
}

.logo-set {
    display: flex;
    flex-shrink: 0;
}

/* Logo item styling */
.animate-scroll-seamless>* {
    flex: 0 0 auto;
}
</style>