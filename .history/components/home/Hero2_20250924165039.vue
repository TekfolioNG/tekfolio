<template>
    <main class="relative w-screen h-screen overflow-hidden">
        <!-- Extended Red Background Section -->
        <div class="absolute inset-0 bg-[#fe4135] h-4/5 md:h-[95%]" style="top: 0;">
            <!-- Hero Content -->
            <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-full">
                    <!-- Main Heading with cycling content -->
                    <div class="lg:w-1/2 lg:pr-8">
                        <!-- Category badge -->
                        <div class="inline-block px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full mb-6">
                            <span class="text-white/90 text-sm font-bold uppercase tracking-widest category-text">
                                {{ currentSlide.category }}
                            </span>
                        </div>

                        <h1 class="hero-heading">
                            <span class="block text-white font-bold slide-text">
                                {{ currentSlide.title }}
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
                                    <div class="w-8 h-0.5 bg-[#fe4135] mr-3"></div>
                                    <h3 class="text-sm font-bold text-gray-800 uppercase tracking-widest">
                                        Our Expertise
                                    </h3>
                                </div>

                                <!-- Main text -->
                                <div class="space-y-2 card-content">
                                    <p class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900">
                                        <span class="font-semibold text-[#fe4135]">Delivering excellence</span> in
                                    </p>
                                    <p class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900">
                                        <span class="font-bold text-gray-900">industrial solutions</span>
                                    </p>
                                    <p class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900">
                                        across <span class="text-[#fe4135] font-semibold">energy sectors</span>.
                                    </p>
                                </div>

                                <!-- CTA Button -->
                                <div class="mt-6">
                                    <NuxtLink :to="currentSlide.buttonLink"
                                        class="inline-flex items-center px-6 py-3 bg-[#fe4135] text-white font-semibold rounded-lg hover:bg-[#fe4135]/90 transform hover:scale-105 transition-all duration-300 group cta-button">
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
import { onBeforeUnmount, onMounted, ref } from 'vue'

const SLIDE_DURATION = 4000 // 4 seconds per slide

const slides = [
    {
        category: 'ENGINEERING',
        title: 'Smarter projects, stronger outcomes',
        buttonLink: '/engineering'
    },
    {
        category: 'CONSTRUCTION',
        title: 'Turnkey builds, lasting impact',
        buttonLink: '/construction'
    },
    {
        category: 'MAINTENANCE',
        title: 'Protecting assets, ensuring uptime',
        buttonLink: '/maintenance'
    },
    {
        category: 'OIL & GAS',
        title: 'Expertise across every operation',
        buttonLink: '/oil-gas'
    },
    {
        category: 'SUSTAINABILITY',
        title: 'Safety, quality, responsibility',
        buttonLink: '/sustainability'
    }
]

const currentSlideIndex = ref(0)
const currentSlide = ref(slides[0])
let timer = null

const nextSlide = () => {
    currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.length
    currentSlide.value = slides[currentSlideIndex.value]

    // Trigger animations
    const categoryText = document.querySelector('.category-text')
    const slideText = document.querySelector('.slide-text')
    const cardContent = document.querySelector('.card-content')
    const ctaButton = document.querySelector('.cta-button')

    // Reset animations
    categoryText?.classList.remove('animate-in')
    slideText?.classList.remove('animate-in')
    cardContent?.classList.remove('animate-in')
    ctaButton?.classList.remove('animate-in')

    // Trigger animations with delays
    setTimeout(() => {
        categoryText?.classList.add('animate-in')
    }, 100)
    setTimeout(() => {
        slideText?.classList.add('animate-in')
    }, 300)
    setTimeout(() => {
        cardContent?.classList.add('animate-in')
    }, 500)
    setTimeout(() => {
        ctaButton?.classList.add('animate-in')
    }, 700)
}

const resetTimer = () => {
    if (timer) {
        clearInterval(timer)
    }
    timer = setInterval(nextSlide, SLIDE_DURATION)
}

onMounted(() => {
    // Initial animations
    setTimeout(() => {
        const elements = document.querySelectorAll('.category-text, .slide-text, .card-content, .cta-button, .fade-in-card')
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate-in')
            }, index * 200)
        })
    }, 300)

    // Start cycling
    resetTimer()
})

onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
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

/* Category text animation */
.category-text {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.category-text.animate-in {
    opacity: 1;
    transform: translateX(0);
}

/* Slide text animation */
.slide-text {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-text.animate-in {
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
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
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