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

                    <div class="flex flex-col sm:flex-row gap-4">
                        <NuxtLink to="/contact" ref="primaryBtn" class="btn-primary btn-particle-burst"
                            @mouseenter="triggerParticleBurst($event, 'primary')" @mouseleave="resetParticles($event)">
                            <span class="btn-text">Start Your Project</span>
                        </NuxtLink>
                        <NuxtLink to="/portfolio" ref="secondaryBtn" class="btn-secondary btn-particle-burst"
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
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const isVisible = ref(false)
const primaryBtn = ref(null)
const secondaryBtn = ref(null)

// Particle burst function
const triggerParticleBurst = (event, buttonType) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Create particles
    const particleCount = 12;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = `particle ${buttonType === 'primary' ? 'particle-primary' : 'particle-secondary'}`;
        button.appendChild(particle);
        particles.push(particle);

        // Position particle at button center
        gsap.set(particle, {
            position: 'absolute',
            left: centerX,
            top: centerY,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            zIndex: 1,
            pointerEvents: 'none'
        });
    }

    // Animate particles outward
    particles.forEach((particle, index) => {
        const angle = (360 / particleCount) * index;
        const distance = 60 + Math.random() * 20; // Random distance for organic feel
        const duration = 0.8 + Math.random() * 0.4;

        gsap.timeline()
            .to(particle, {
                x: Math.cos(angle * Math.PI / 180) * distance,
                y: Math.sin(angle * Math.PI / 180) * distance,
                opacity: 1,
                scale: 1.5,
                duration: duration * 0.6,
                ease: "power2.out"
            })
            .to(particle, {
                opacity: 0,
                scale: 0.5,
                duration: duration * 0.4,
                ease: "power2.in"
            }, "-=0.2")
            .call(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            });
    });

    // Add button scale effect
    gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
    });
};

const resetParticles = (event) => {
    const button = event.currentTarget;

    // Reset button scale
    gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
    });

    // Clean up any remaining particles
    const particles = button.querySelectorAll('.particle');
    particles.forEach(particle => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    });
};

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

/* Enhanced Button Base Styles */
.btn-primary,
.btn-secondary {
    display: inline-block;
    font-weight: 600;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    text-align: center;
    position: relative;
    overflow: visible;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
    text-decoration: none;
}

/* Primary Button */
.btn-primary {
    background-color: #01348F;
    color: white;
    border: 2px solid #01348F;
    box-shadow: 0 4px 6px rgba(1, 52, 143, 0.2);
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
    color: #374151;
    border: 2px solid #d1d5db;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-secondary:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Dark mode button styles */
.dark .btn-secondary {
    color: #d1d5db;
    border-color: #6b7280;
}

.dark .btn-secondary:hover {
    background-color: #374151;
    border-color: #9ca3af;
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
    background: linear-gradient(45deg, #9ca3af, #6b7280);
    box-shadow: 0 0 6px rgba(156, 163, 175, 0.8);
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

/* Mobile optimizations */
@media (max-width: 768px) {

    /* Mobile touch interactions */
    .btn-primary:active {
        background-color: #1d8ad8;
        transform: translateY(-2px) scale(1.02);
    }

    .btn-secondary:active {
        background-color: #f9fafb;
        transform: translateY(-2px) scale(1.02);
    }

    .dark .btn-secondary:active {
        background-color: #374151;
    }

    /* Smaller particles on mobile */
    .particle {
        width: 3px !important;
        height: 3px !important;
    }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
    .btn-particle-burst:hover {
        transform: translateY(-1px);
    }

    .particle {
        display: none;
    }
}
</style>