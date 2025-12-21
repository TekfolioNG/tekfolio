<template>
    <section class="relative min-h-screen overflow-hidden">
        <!-- Hero Background Image -->
        <div class="absolute inset-0">
            <img src="/assets/img/commitment-syntanium2.png" alt="Syntanium Energy Commitment"
                class="w-full h-full object-cover object-center" />
        </div>

        <!-- Content Container -->
        <div class="relative z-10 min-h-screen flex items-center">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-start">

                    <!-- Text Content with Transparent Gray Background -->
                    <div class="lg:w-5/12 xl:w-1/3">
                        <div
                            class="bg-gray-900/60 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8 transform transition-all duration-1000 hover:shadow-3xl">

                            <!-- Main Heading -->
                            <div class="mb-4">
                                <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                                    <span class="text-red-500">Our </span><span
                                        class="text-white dark:text-white">Commitment</span>
                                </h1>
                            </div>

                            <!-- Decorative Line -->
                            <div class="w-12 h-1 bg-red-500 mb-4"></div>

                            <!-- Subtext -->
                            <div class="space-y-4">
                                <p
                                    class="text-base md:text-lg lg:text-xl font-light text-gray-200 dark:text-gray-300 italic leading-relaxed">
                                    Building a safer, cleaner, and sustainable energy future.
                                </p>
                            </div>

                            <!-- Additional decorative element -->
                            <div class="mt-6 flex items-center space-x-4">
                                <div class="flex space-x-2">
                                    <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                    <div class="w-2 h-2 bg-red-500/60 rounded-full animate-pulse"
                                        style="animation-delay: 0.2s;"></div>
                                    <div class="w-2 h-2 bg-red-500/30 rounded-full animate-pulse"
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

    <!-- Built on What Matters Section -->
    <section class="py-20 px-6 bg-white dark:bg-gray-900">
        <div class="max-w-4xl mx-auto text-center">
            <!-- Main Heading -->
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Built on What Matters
            </h2>

            <!-- Content Text -->
            <div class="space-y-6">
                <p class="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800 dark:text-gray-200">
                    Our commitment rests on four essentials: safety, quality, sustainability, and responsibility to the
                    communities and projects we impact.
                </p>

                <p class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 italic">
                    These principles guide how we operate across the energy value chain, ensuring that our engagement is
                    positive, lasting, and future-ready.
                </p>
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