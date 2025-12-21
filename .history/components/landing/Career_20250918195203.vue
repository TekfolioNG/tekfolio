<template>
    <section class="relative">
        <!-- Full Width Hero Image Section -->
        <div class="hero-image relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <img :src="heroImage" alt="Career Opportunities at Syntanium"
                class="w-full h-full object-cover object-center" />
            <!-- Optional overlay for better text contrast if needed -->
            <div class="absolute inset-0 bg-black/20"></div>
        </div>

        <!-- Content Section -->
        <section class="py-16 px-6 bg-white dark:bg-gray-900">
            <div class="max-w-7xl mx-auto">
                <!-- Desktop: Two Column Layout -->
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Left Column - Text Content -->
                    <div class="order-2 lg:order-1">
                        <h2
                            class="hero-heading text-4xl md:text-5xl lg:text-6xl font-barlow font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                            Why Work <span class="text-red-500">With Us</span>
                        </h2>

                        <div class="space-y-6">
                            <p class="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                                At Syntanium, a career is more than a job. It's an opportunity to
                                <span class="text-red-500 font-semibold">grow, innovate, and make a lasting
                                    impact</span>.
                            </p>

                            <p class="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                                We value people who bring
                                <span class="font-semibold text-gray-900 dark:text-white">expertise, curiosity, and a
                                    commitment to safety and excellence</span>.
                            </p>
                        </div>

                        <!-- Accent Elements -->
                        <div class="mt-8 flex items-center">
                            <div class="w-16 h-1 bg-red-500 mr-4"></div>
                            <div class="w-8 h-1 bg-gray-300 dark:bg-gray-600 mr-2"></div>
                            <div class="w-4 h-1 bg-gray-300 dark:bg-gray-600"></div>
                        </div>

                        <!-- Key Values Grid -->
                        <div class="mt-10 grid md:grid-cols-3 gap-6">
                            <div class="text-center">
                                <div
                                    class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3
                                    class="font-barlow font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider">
                                    Innovation</h3>
                            </div>

                            <div class="text-center">
                                <div
                                    class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                                        </path>
                                    </svg>
                                </div>
                                <h3
                                    class="font-barlow font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider">
                                    Growth</h3>
                            </div>

                            <div class="text-center">
                                <div
                                    class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                        </path>
                                    </svg>
                                </div>
                                <h3
                                    class="font-barlow font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider">
                                    Excellence</h3>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - Image -->
                    <div class="order-1 lg:order-2">
                        <div class="relative">
                            <!-- Background accent shapes -->
                            <div class="absolute -top-4 -right-4 w-32 h-32 bg-red-500/10 rounded-full hidden lg:block">
                            </div>
                            <div
                                class="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-900/5 dark:bg-white/5 rounded-full hidden lg:block">
                            </div>

                            <!-- Main image container -->
                            <div class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                                <img :src="contentImage" alt="Syntanium Team at Work"
                                    class="w-full h-80 md:h-96 lg:h-[500px] object-cover" />

                                <!-- Image overlay with gradient -->
                                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
// Import images from assets directory
import contentImage from '~/assets/img/career-syntanium.jpg';
import heroImage from '~/assets/img/career-syntanium2.png';
</script>

<style scoped>
/* Import Barlow font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&display=swap');

/* Apply Barlow font family */
.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Ensure full width for hero image section */
.relative.w-full {
    margin-left: calc(-50vw + 50%);
    width: 100vw;
}

/* Custom responsive adjustments */
@media (max-width: 768px) {

    /* Stack content vertically on mobile */
    .grid {
        gap: 3rem;
    }

    /* Adjust hero image height on mobile */
    .hero-image {
        height: 300px;
    }

    /* Adjust text sizing for mobile */
    .hero-heading {
        font-size: 2.5rem;
        line-height: 1.1;
    }
}

@media (min-width: 769px) and (max-width: 1023px) {

    /* Tablet adjustments */
    .hero-image {
        height: 450px;
    }
}

/* Hover effects */
.relative:hover .absolute.-top-4.-right-4 {
    transform: scale(1.1);
    transition: transform 0.3s ease;
}

/* Dark mode specific adjustments */
@media (prefers-color-scheme: dark) {
    .bg-gradient-to-t {
        background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
    }
}

/* Typography enhancements */
.leading-tight {
    line-height: 1.1;
}

.tracking-wider {
    letter-spacing: 0.05em;
}

/* Smooth transitions for interactive elements */
* {
    transition-property: color, background-color, border-color, transform, opacity;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
}
</style>