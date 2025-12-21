<template>
    <main class="relative w-screen h-screen overflow-hidden">
        <!-- Extended Red Background Section -->
        <div class="absolute inset-0 bg-[#fe4135] h-4/5 md:h-[95%]" style="top: 0;">
            <!-- Hero Content -->
            <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-full">
                    <!-- Main Heading -->
                    <div class="lg:w-1/2 lg:pr-8">
                        <h1 class="hero-heading">
                            <span class="block text-black font-bold slide-in-left">Together</span>
                            <span class="block text-white font-bold slide-in-right">we fuel</span>
                            <span class="block text-white font-bold slide-in-right">progress</span>
                        </h1>
                    </div>

                    <!-- Description text - Right side on desktop, below heading on mobile -->
                    <div class="lg:w-1/2 lg:pl-16 lg:pr-12 mt-8 lg:mt-0">
                        <div class="text-white space-y-6">
                            <div class="fade-in-description">
                                <h3 class="text-xl md:text-2xl font-semibold text-black">Engineering Excellence</h3>
                                <p class="text-lg md:text-xl font-light leading-relaxed">
                                    Comprehensive engineering services that transform industrial visions into viable,
                                    efficient realities.
                                </p>
                            </div>

                            <div class="fade-in-description">
                                <h3 class="text-xl md:text-2xl font-semibold text-black">Construction & Infrastructure
                                </h3>
                                <p class="text-lg md:text-xl font-light leading-relaxed">
                                    Turnkey industrial installations including pipelines, processing plants, and
                                    critical infrastructure.
                                </p>
                            </div>

                            <div class="fade-in-description">
                                <h3 class="text-xl md:text-2xl font-semibold text-black">Maintenance Solutions</h3>
                                <p class="text-lg md:text-xl font-light leading-relaxed">
                                    Proactive maintenance strategies that maximize asset value and operational
                                    efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // Trigger animations after mount
    setTimeout(() => {
        const leftElements = document.querySelectorAll('.slide-in-left')
        const rightElements = document.querySelectorAll('.slide-in-right')
        const descriptions = document.querySelectorAll('.fade-in-description')

        leftElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate-in')
            }, index * 200)
        })

        rightElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate-in')
            }, (index + 1) * 300)
        })

        descriptions.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate-in')
            }, 800 + (index * 200))
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
}

/* Slide in from left animation */
.slide-in-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-in-left.animate-in {
    opacity: 1;
    transform: translateX(0);
}

/* Slide in from right animation */
.slide-in-right {
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-in-right.animate-in {
    opacity: 1;
    transform: translateX(0);
}

/* Fade in animation for descriptions */
.fade-in-description {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-description.animate-in {
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
</style>