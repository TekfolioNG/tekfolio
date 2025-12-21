<template>
    <section class="relative -mt-1">
        <!-- Full Width Hero Image Section -->
        <div class="hero-image relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden -mt-1">
            <img :src="heroImage" alt="Career Opportunities at Syntanium"
                class="w-full h-full object-cover object-center -mt-1" />
            <!-- Optional overlay for better text contrast if needed -->
            <div class="absolute inset-0 bg-black/20"></div>
        </div>

        <!-- Content Section -->
        <section class="py-16 px-6 bg-white dark:bg-gray-900 -mt-1">
            <div class="max-w-7xl mx-auto">
                <!-- Desktop: Two Column Layout -->
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Left Column - Text Content -->
                    <div class="order-2 lg:order-1 pl-4 md:pl-8 lg:pl-12">
                        <h2
                            class="hero-heading text-2xl md:text-3xl lg:text-4xl font-barlow font-bold text-gray-900 dark:text-white mb-8 leading-tight">
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
import contentImage from '~/assets/img/career-syntanium.png';
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