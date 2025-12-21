<template>
    <section class="relative min-h-screen overflow-hidden">
        <!-- Hero Background Image -->
        <div class="absolute inset-0">
            <img src="/assets/img/commitment-syntanium2.png" alt="Syntanium Energy Commitment"
                class="w-full h-full object-cover object-center" />
            <!-- Dark overlay for better text contrast -->
            <div class="absolute inset-0 bg-black/40"></div>
        </div>

        <!-- Content Container -->
        <div class="relative z-10 min-h-screen flex items-center">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-start">

                    <!-- Text Content with Light Gray Background -->
                    <div class="lg:w-1/2 xl:w-2/5">
                        <div
                            class="bg-gray-100/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16 transform transition-all duration-1000 hover:shadow-3xl">

                            <!-- Main Heading -->
                            <div class="mb-8">
                                <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                    <span class="block text-red-500 mb-2">Our</span>
                                    <span class="block text-gray-900 dark:text-white">Commitment</span>
                                </h1>
                            </div>

                            <!-- Decorative Line -->
                            <div class="w-16 h-1 bg-red-500 mb-8"></div>

                            <!-- Subtext -->
                            <div class="space-y-4">
                                <p
                                    class="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 dark:text-gray-300 italic leading-relaxed">
                                    Building a safer, cleaner, and sustainable energy future.
                                </p>
                            </div>

                            <!-- Additional decorative element -->
                            <div class="mt-12 flex items-center space-x-4">
                                <div class="flex space-x-2">
                                    <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                    <div class="w-3 h-3 bg-red-500/60 rounded-full animate-pulse"
                                        style="animation-delay: 0.2s;"></div>
                                    <div class="w-3 h-3 bg-red-500/30 rounded-full animate-pulse"
                                        style="animation-delay: 0.4s;"></div>
                                </div>
                                <div class="flex-1 h-0.5 bg-gradient-to-r from-red-500 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Right side spacer for balance -->
                    <div class="hidden lg:block lg:w-1/2 xl:w-3/5">
                        <!-- Empty space to balance the layout -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div class="animate-bounce">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    </section>
</template>

<script setup>
// No additional JavaScript needed for this component
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

* {
    font-family: 'Inter', sans-serif;
}

/* Custom shadow utility */
.shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Responsive text sizing */
@media (max-width: 640px) {
    h1 {
        font-size: 2.5rem;
        line-height: 1.1;
    }
}

@media (min-width: 641px) and (max-width: 768px) {
    h1 {
        font-size: 3rem;
        line-height: 1.1;
    }
}

/* Animation for decorative dots */
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.5;
        transform: scale(0.8);
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Gradient background enhancement */
.bg-gradient-to-r {
    background: linear-gradient(to right, #ef4444, transparent);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .bg-gray-100\/95 {
        background-color: rgba(31, 41, 55, 0.95);
    }

    .text-gray-900 {
        color: #f9fafb;
    }

    .text-gray-700 {
        color: #d1d5db;
    }
}

/* Mobile responsiveness */
@media (max-width: 1023px) {
    .min-h-screen {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

/* Backdrop blur fallback */
@supports not (backdrop-filter: blur(4px)) {
    .backdrop-blur-sm {
        background-color: rgba(243, 244, 246, 0.98);
    }

    .dark .backdrop-blur-sm {
        background-color: rgba(31, 41, 55, 0.98);
    }
}
</style>