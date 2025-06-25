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
                        We create web and mobile apps that fit <span
                            class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">like
                            notes in a harmony</span>
                    </h2>

                    <p class="text-lg text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
                        Our team collaborates closely with you to build digital tools that drive your business
                        vision and instantly connect with your customers or
                        team. The result? Happier users, higher satisfaction, and improved loyalty.
                    </p>

                    <p class="text-lg text-gray-800 dark:text-gray-300 mb-8 leading-relaxed">
                        That's because we're more than just your dev team. We're your growth partners, building
                        e-products
                        that are technically sound, easy to use, and fully secure to power your success.
                    </p>

                    <p class="text-lg text-gray-800 dark:text-gray-300 mb-8 leading-relaxed"><strong><i>
                                ...Because good software should feel as natural as a melody that stays with you.
                            </i> </strong> </p>

                    <div class="flex flex-col sm:flex-row gap-4">
                        <NuxtLink to="/contact" class="btn-primary">
                            Start Your Project
                        </NuxtLink>
                        <NuxtLink to="/portfolio" class="btn-secondary">
                            See Our Work
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

// Simple hover effects - no particles needed

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

/* Simple Button Styles with Hover Effects */
.btn-primary,
.btn-secondary {
    display: inline-block;
    font-weight: 600;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
    transform: scale(1);
}

/* Primary Button */
.btn-primary {
    background-color: #01348F;
    color: white;
    box-shadow: 0 4px 6px rgba(1, 52, 143, 0.2);
}

.btn-primary:hover {
    background-color: #1d8ad8;
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(29, 138, 216, 0.3);
}

/* Secondary Button */
.btn-secondary {
    background-color: transparent;
    color: #374151;
    border: 2px solid #d1d5db;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-secondary:hover {
    background-color: #f3f4f6;
    color: #1f2937;
    border-color: #9ca3af;
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

/* Dark mode button styles */
.dark .btn-secondary {
    color: #d1d5db;
    border-color: #6b7280;
}

.dark .btn-secondary:hover {
    background-color: #374151;
    color: #f9fafb;
    border-color: #9ca3af;
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