<template>
    <section class="py-16 md:py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Image Column with Animation -->
                <div class="relative">
                    <div class="relative z-10 w-full max-w-lg mx-auto">
                        <img src="~/assets/img/tekfolio-harmony.jpg" alt="App interface showing harmony"
                            class="rounded-2xl shadow-2xl w-full h-auto border-8 border-white dark:border-gray-800 transform transition-all duration-1000 hover:scale-105"
                            :class="{ 'animate-float': isVisible }">
                        <img src="~/assets/img/tekfolio-harmony (2).jpg" alt="App interface alternative view"
                            class="absolute -bottom-8 -right-8 rounded-2xl shadow-xl w-3/5 h-auto border-8 border-white dark:border-gray-800 transform transition-all duration-1000 hover:scale-105 z-20"
                            :class="{ 'animate-float-delay': isVisible }">
                    </div>
                    <div
                        class="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 filter blur-3xl animate-pulse-slow">
                    </div>
                </div>

                <!-- Content Column -->
                <div class="lg:pl-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Apps that fit <span
                            class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">like
                            notes in a harmony</span>
                    </h2>

                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Our team collaborates closely with you to build digital tools that drive your business
                        vision and instantly connect with your customers or
                        team. The result? Happier users, higher satisfaction, and improved loyalty.
                    </p>

                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        That's because we're more than just your dev team. We're your growth partners, building
                        e-products
                        that are technically sound, easy to use, and fully secure to power your success.
                    </p>

                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"><strong><i>
                                ...Because good software should feel as natural as a melody that stays with you.
                            </i> </strong> </p>

                    <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <NuxtLink to="/contact" ref="primaryBtn" class="btn-primary btn-particle-burst"
                            @mouseenter="triggerParticleBurst($event, 'primary')" @mouseleave="resetParticles($event)">
                            <span class="btn-text">Start Your Project</span>
                        </NuxtLink>
                        <NuxtLink to="/case-studies" ref="secondaryBtn" class="btn-secondary btn-particle-burst"
                            @mouseenter="triggerParticleBurst($event, 'secondary')"
                            @mouseleave="resetParticles($event)">
                            <span class="btn-text">See Our Work</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

onMounted(() => {
    isVisible.value = true
})
</script>

<style>
@keyframes float {

    0%,
    100% {
        transform: translateY(0) rotate(1deg);
    }

    50% {
        transform: translateY(-15px) rotate(-1deg);
    }
}

@keyframes float-delay {

    0%,
    100% {
        transform: translateY(10px) rotate(-2deg);
    }

    50% {
        transform: translateY(-5px) rotate(2deg);
    }
}

@keyframes pulse-slow {

    0%,
    100% {
        opacity: 0.2;
        transform: scale(1);
    }

    50% {
        opacity: 0.3;
        transform: scale(1.05);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-delay {
    animation: float-delay 6s ease-in-out infinite 1.5s;
}

.animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
}

* Enhanced Button Base Styles */ .btn-primary,
.btn-secondary {
    display: inline-block;
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-align: center;
    position: relative;
    overflow: visible;
    /* Changed from hidden to visible for particles */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
}

/* Primary Button */
.btn-primary {
    background-color: #01348F;
    color: white;
    border: 2px solid #01348F;
}

.btn-primary:hover {
    background-color: #1d8ad8;
    border-color: #1d8ad8;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(29, 138, 216, 0.3);
}

/* Secondary Button */
.btn-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover {
    background-color: white;
    color: #01348F;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

/* Particle Burst Effects */
.btn-particle-burst {
    position: relative;
    overflow: visible;
}

.particle {
    position: absolute;
    opacity: 0;
    transform: scale(0);
    z-index: 1;
    pointer-events: none;
}

.particle-primary {
    background: linear-gradient(45deg, #60a5fa, #3b82f6);
    box-shadow: 0 0 6px rgba(96, 165, 250, 0.8);
}

.particle-secondary {
    background: linear-gradient(45deg, #ffffff, #e5e7eb);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
}

/* Enhanced particle glow effect */
.particle::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: inherit;
    border-radius: inherit;
    opacity: 0.6;
    filter: blur(2px);
    z-index: -1;
}

/* Text should stay above particle effects */
.btn-text {
    position: relative;
    z-index: 2;
}
</style>