<template>
    <section class="relative min-h-screen overflow-hidden">
        <!-- Extended Red Background Section -->
        <div class="absolute inset-0 bg-[#fe4135] h-4/5 md:h-[95%]" style="top: 0;">
            <!-- Hero Content -->
            <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-full">
                    <!-- Main Heading -->
                    <div class="lg:w-1/2 lg:pr-8">
                        <h1 class="hero-heading fade-in-up">
                            <span class="block text-black font-bold">Engineering</span>
                            <span class="block text-white font-bold">excellence</span>
                            <span class="block text-white font-bold">delivered</span>
                        </h1>
                    </div>

                    <!-- Subtext - Right side on desktop, below heading on mobile -->
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
                                    <div class="w-8 h-0.5 bg-[#fe4135] mr-3"></div>
                                    <h3 class="text-sm font-bold text-gray-800 uppercase tracking-widest">
                                        Our Mission
                                    </h3>
                                </div>

                                <!-- Main text -->
                                <div class="space-y-2">
                                    <p class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900">
                                        <span class="font-semibold text-[#fe4135]">Powering industries</span> with
                                    </p>
                                    <p class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900">
                                        <span class="font-bold text-gray-900">innovative solutions</span>
                                    </p>
                                    <p class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900">
                                        across <span class="text-[#fe4135] font-semibold">energy sectors</span>.
                                    </p>
                                </div>

                                <!-- CTA Button -->
                                <div class="mt-6">
                                    <NuxtLink to="/expertise"
                                        class="inline-flex items-center px-6 py-3 bg-[#fe4135] text-white font-semibold rounded-lg hover:bg-[#fe4135]/90 transform hover:scale-105 transition-all duration-300 group">
                                        Explore Our Services
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

            <!-- Scroll indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div class="flex flex-col items-center animate-bounce">
                    <span class="text-white text-sm font-medium mb-2 opacity-80">Discover More</span>
                    <svg class="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // Trigger animations after mount
    setTimeout(() => {
        const elements = document.querySelectorAll('.fade-in-up, .fade-in-card')
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate-in')
            }, index * 200)
        })
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
    margin-bottom: 2rem;
}

/* Enhanced animations */
.fade-in-up {
    opacity: 0;
    transform: translateY(40px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-up.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.fade-in-card {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-card.animate-in {
    opacity: 1;
    transform: translateY(0) scale(1);
}

/* Staggered text animation for spans */
.hero-heading span {
    display: inline-block;
    opacity: 0;
    transform: translateX(-30px);
    animation: slideInText 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.hero-heading span:nth-child(1) {
    animation-delay: 0.2s;
}

.hero-heading span:nth-child(2) {
    animation-delay: 0.4s;
}

.hero-heading span:nth-child(3) {
    animation-delay: 0.6s;
}

@keyframes slideInText {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Scroll indicator pulse animation */
@keyframes bounce {

    0%,
    20%,
    53%,
    80%,
    100% {
        transform: translate3d(-50%, 0, 0);
    }

    40%,
    43% {
        transform: translate3d(-50%, -10px, 0);
    }

    70% {
        transform: translate3d(-50%, -5px, 0);
    }

    90% {
        transform: translate3d(-50%, -2px, 0);
    }
}

.animate-bounce {
    animation: bounce 2s infinite;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .hero-heading {
        font-size: clamp(2.5rem, 12vw, 4rem);
        margin-bottom: 1.5rem;
    }

    .hero-subtext {
        font-size: clamp(1rem, 4vw, 1.2rem);
    }
}

/* Ensure proper stacking */
.relative {
    position: relative;
}

.absolute {
    position: absolute;
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