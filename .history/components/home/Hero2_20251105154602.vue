<template>
    <main class="relative w-screen h-screen overflow-hidden">
        <!-- Extended Red Background Section -->
        <div class="absolute inset-0 bg-[#4A74C9] h-full" style="top: 0;">
            <!-- Hero Content -->
            <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-full">
                    <!-- Main Heading -->
                    <div class="lg:w-1/2 lg:pr-8">
                        <!-- Category badge -->
                        <div
                            class="inline-block px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full mb-6 category-badge">
                            <span class="text-white/90 text-sm font-bold uppercase tracking-widest">
                                Syntanium Energy
                            </span>
                        </div>

                        <h1 class="hero-heading">
                            <span class="block font-bold slide-text-gray">
                                Built for Energy,
                            </span>
                            <span class="block text-white font-bold slide-text-white">
                                Driven by Value.
                            </span>
                        </h1>
                    </div>

                    <!-- Card content - Right side on desktop, below heading on mobile -->
                    <div class="lg:w-1/2 lg:pl-16 lg:pr-12 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                        <div class="relative max-w-lg fade-in-card">
                            <!-- Background accent shape -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-black/10 to-white/20 rounded-2xl transform transition-all duration-1000 rotate-1 scale-105">
                            </div>

                            <!-- Content container -->
                            <div
                                class="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-1000 hover:rotate-0 hover:shadow-2xl -rotate-1">

                                <!-- Header accent -->
                                <div class="flex items-center mb-4">
                                    <div class="w-8 h-0.5 bg-[#4A74C9] mr-3"></div>
                                    <h3 class="text-sm font-bold text-gray-800 uppercase tracking-widest">
                                        The Syntanium Energy Edge
                                    </h3>
                                </div>

                                <!-- Main text -->
                                <div class="space-y-4 card-content">
                                    <p class="text-lg md:text-xl lg:text-2xl leading-normal font-light text-black">
                                        Syntanium Energy delivers engineering, construction, maintenance, and oil
                                        and
                                        gas
                                        solutions that strengthen performance, protect assets, and create lasting value
                                        across the value chain.
                                    </p>
                                </div>

                                <!-- CTA Button -->
                                <div class="mt-6">
                                    <NuxtLink to="/who-we-are"
                                        class="inline-flex items-center px-6 py-3 bg-[#4A74C9] text-white font-semibold rounded-lg hover:bg-[#4A74C9]/90 transform hover:scale-105 transition-all duration-300 group cta-button">
                                        Learn More
                                        <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { NuxtLink } from '#components'
import { onMounted } from 'vue'

onMounted(() => {
    // Initial animations with directional slides
    setTimeout(() => {
        const categoryBadge = document.querySelector('.category-badge')
        const slideTextGray = document.querySelector('.slide-text-gray')
        const slideTextWhite = document.querySelector('.slide-text-white')
        const fadeInCard = document.querySelector('.fade-in-card')
        const cardContent = document.querySelector('.card-content')
        const ctaButton = document.querySelector('.cta-button')

        // Animate category badge first
        categoryBadge?.classList.add('animate-in')

        // Animate heading parts with different directions
        setTimeout(() => {
            slideTextGray?.classList.add('animate-in')
        }, 200)

        setTimeout(() => {
            slideTextWhite?.classList.add('animate-in')
        }, 400)

        // Animate card
        setTimeout(() => {
            fadeInCard?.classList.add('animate-in')
        }, 600)

        // Animate card content
        setTimeout(() => {
            cardContent?.classList.add('animate-in')
        }, 800)

        // Animate CTA button
        setTimeout(() => {
            ctaButton?.classList.add('animate-in')
        }, 1000)
    }, 300)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&display=swap');

.hero-heading {
    font-family: 'Barlow', sans-serif;
    font-size: clamp(3.5rem, 8vw, 8rem);
    line-height: 0.8;
    letter-spacing: -0.02em;
}

/* Category badge animation */
.category-badge {
    opacity: 0;
    transform: translateY(-30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.category-badge.animate-in {
    opacity: 1;
    transform: translateY(0);
}

/* Gray text slides in from right - slower */
.slide-text-gray {
    color: #111827;
    /* gray-900 */
    opacity: 0;
    transform: translateX(50px);
    transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-text-gray.animate-in {
    opacity: 1;
    transform: translateX(0);
}

/* White text slides in from left - slower */
.slide-text-white {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-text-white.animate-in {
    opacity: 1;
    transform: translateX(0);
}

/* Card animations */
.fade-in-card {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-card.animate-in {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.card-content {
    opacity: 0;
    transform: translateY(20px);
    transition: all 1.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-content.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.cta-button {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.w-screen {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .hero-heading {
        font-size: clamp(2.5rem, 12vw, 4rem);
        line-height: 1;
    }
}

/* Custom responsive utilities */
@media (min-width: 1024px) {
    .lg\:pt-40 {
        padding-top: 10rem;
    }
}

/* Enhanced hover effects */
.group:hover .group-hover\:translate-x-1 {
    transform: translateX(0.25rem);
}
</style>