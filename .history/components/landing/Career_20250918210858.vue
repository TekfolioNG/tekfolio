<template>
    <section class="relative -mt-8">
        <!-- Full Width Hero Image Section -->
        <div class="hero-image relative w-full h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden mobile-no-gap">
            <img :src="heroImage" alt="Career Opportunities at Syntanium"
                class="w-full h-full object-cover object-center" />
            <!-- Optional overlay for better text contrast if needed -->
            <div class="absolute inset-0 bg-black/20"></div>
        </div>

        <!-- Content Section -->
        <section class="py-8 md:py-16 px-4 md:px-6 bg-white dark:bg-gray-900 mobile-no-gap">
            <div class="max-w-7xl mx-auto">
                <!-- Desktop: Two Column Layout -->
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <!-- Left Column - Text Content -->
                    <div class="order-2 lg:order-1 px-2 md:pl-8 lg:pl-12 md:pr-8 lg:pr-12">
                        <h2
                            class="hero-heading text-xl md:text-2xl lg:text-4xl font-barlow font-bold text-gray-900 dark:text-white mb-6 md:mb-8 leading-tight text-center lg:text-left">
                            Why Work <span class="text-red-500">With Us</span>
                        </h2>

                        <div class="space-y-4 md:space-y-6 text-center lg:text-left">
                            <p class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                                At Syntanium, a career is more than a job. It's an opportunity to
                                <span class="text-red-500 font-semibold">grow, innovate, and make a lasting
                                    impact</span>.
                            </p>

                            <p class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                                We value people who bring
                                <span class="font-semibold text-gray-900 dark:text-white">expertise, curiosity, and a
                                    commitment to safety and excellence</span>.
                            </p>
                        </div>

                        <!-- Accent Elements -->
                        <div class="mt-6 md:mt-8 flex items-center justify-center lg:justify-start">
                            <div class="w-12 md:w-16 h-1 bg-red-500 mr-3 md:mr-4"></div>
                            <div class="w-6 md:w-8 h-1 bg-gray-300 dark:bg-gray-600 mr-2"></div>
                            <div class="w-3 md:w-4 h-1 bg-gray-300 dark:bg-gray-600"></div>
                        </div>
                    </div>

                    <!-- Right Column - Image -->
                    <div class="order-1 lg:order-2 mobile-full-width px-4 md:px-0">
                        <div class="relative">
                            <!-- Background accent shapes - hidden on mobile -->
                            <div class="absolute -top-4 -right-4 w-32 h-32 bg-red-500/10 rounded-full hidden lg:block">
                            </div>
                            <div
                                class="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-900/5 dark:bg-white/5 rounded-full hidden lg:block">
                            </div>

                            <!-- Main image container -->
                            <div
                                class="relative bg-white dark:bg-gray-800 shadow-xl overflow-hidden mobile-content-image lg:-mt-16 mr-0 lg:-mr-8">
                                <img :src="contentImage" alt="Syntanium Team at Work"
                                    class="w-full h-48 md:h-64 lg:h-[400px] object-cover" />

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
import heroImage from '~/assets/img/who-we-are-syntanium3.png';
import contentImage from '~/assets/img/who-we-are3.jpg';
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

/* Mobile-specific fixes to remove gaps and make content image full width */
@media (max-width: 768px) {

    /* Remove all top gaps on mobile */
    .mobile-no-gap {
        margin-top: 0 !important;
        padding-top: 0 !important;
    }

    /* Hero image - completely remove any top spacing */
    .hero-image {
        margin-top: -70px !important;
        padding-top: -70px !important;
        top: -70px !important;
    }

    /* Target the parent section to ensure no gaps */
    .relative.-mt-8 {
        margin-top: 0 !important;
        padding-top: 0 !important;
    }

    /* Ensure the hero section starts at the very top */
    section.relative {
        margin-top: 0 !important;
        padding-top: 0 !important;
    }

    /* Content section - remove top gap */
    .py-8 {
        padding-top: 0;
        padding-bottom: 2rem;
    }

    /* Make content image container full width on mobile */
    .mobile-full-width {
        margin-left: calc(-50vw + 50%);
        width: 100vw;
        padding-left: 0;
        padding-right: 0;
    }

    /* Content image - remove top margin and make full width */
    .mobile-content-image {
        margin-top: 0 !important;
        margin-left: 0;
        margin-right: 0;
        width: 100%;
        border-radius: 0;
    }

    /* Remove gaps and ensure seamless layout on mobile */
    .grid {
        gap: 0;
    }

    /* Mobile typography adjustments */
    .hero-heading {
        font-size: 1.5rem;
        line-height: 1.2;
    }

    /* Center align all content on mobile */
    .text-center {
        text-align: center;
    }

    /* Ensure text content has proper spacing after full-width image */
    .order-2.lg\:order-1 {
        padding-top: 2rem;
    }
}

@media (min-width: 769px) and (max-width: 1023px) {

    /* Tablet adjustments */
    .hero-heading {
        font-size: 2rem;
    }
}

@media (min-width: 1024px) {

    /* Desktop specific styles */
    .lg\:text-left {
        text-align: left;
    }

    .lg\:justify-start {
        justify-content: flex-start;
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
    line-height: 1.2;
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