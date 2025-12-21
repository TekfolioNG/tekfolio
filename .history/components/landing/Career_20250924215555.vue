<template>
    <section class="relative -mt-8">
        <!-- Content Section -->
        <section class="py-8 md:py-16 px-4 md:px-6 bg-white dark:bg-gray-900 mobile-no-gap">
            <div class="max-w-7xl mx-auto">
                <!-- Centered Stacked Boxes Heading -->
                <div class="flex justify-center mb-12 md:mb-16">
                    <div class="relative">
                        <!-- First Box - "Why Work" -->
                        <div class="relative mb-2 md:mb-3">
                            <div
                                class="bg-gradient-to-r from-[#fe4135] via-red-500 to-red-600 rounded-lg px-6 md:px-10 py-3 md:py-4 shadow-xl transform rotate-2 hover:rotate-1 transition-transform duration-300">
                                <h2
                                    class="text-xl md:text-2xl lg:text-3xl font-barlow font-bold text-white text-center leading-tight">
                                    Why Work
                                </h2>
                            </div>
                        </div>

                        <!-- Second Box - "With Us?" -->
                        <div class="relative ml-12 md:ml-20">
                            <div
                                class="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg px-6 md:px-10 py-3 md:py-4 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                                <h2
                                    class="text-xl md:text-2xl lg:text-3xl font-barlow font-bold text-white text-center leading-tight">
                                    With Us?
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Two Column Layout -->
                <div class="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
                    <!-- Left Column - Text Content -->
                    <div class="order-2 lg:order-1 px-2 md:pl-8 lg:pl-12 md:pr-8 lg:pr-12">
                        <div class="space-y-4 md:space-y-6 text-center lg:text-left">
                            <p class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                                At Syntanium, we believe a career is more than a job. It's an opportunity to
                                <span class="text-[#fe4135] font-semibold">grow, innovate, and make a lasting
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
                            <div class="w-12 md:w-16 h-1 bg-[#fe4135] mr-3 md:mr-4"></div>
                            <div class="w-6 md:w-8 h-1 bg-gray-300 dark:bg-gray-600 mr-2"></div>
                            <div class="w-3 md:w-4 h-1 bg-gray-300 dark:bg-gray-600"></div>
                        </div>
                    </div>

                    <!-- Right Column - Hanging Content Container -->
                    <div class="order-1 lg:order-2 flex justify-center lg:justify-end px-4 md:px-0">
                        <div class="relative max-w-lg">
                            <!-- Hanging rope effect with two angles -->
                            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16">
                                <!-- Nail point -->
                                <div
                                    class="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full shadow-sm z-10">
                                </div>

                                <!-- First rope segment (angled left) -->
                                <div
                                    class="absolute top-1 left-1/2 w-0.5 h-12 bg-gradient-to-b from-amber-700 to-amber-800 rounded-full shadow-sm transform -translate-x-1/2 rotate-12 origin-top">
                                </div>

                                <!-- Second rope segment (angled right) -->
                                <div
                                    class="absolute top-8 left-1/2 w-0.5 h-10 bg-gradient-to-b from-amber-800 to-amber-900 rounded-full shadow-sm transform translate-x-1 -rotate-15 origin-top">
                                </div>

                                <!-- Connection point where rope meets container -->
                                <div
                                    class="absolute top-14 left-1/2 transform translate-x-1 w-1 h-1 bg-amber-900 rounded-full">
                                </div>
                            </div>

                            <!-- Background accent shape -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-[#fe4135]/10 to-gray-900/20 dark:to-white/20 rounded-2xl transform transition-all duration-1000 rotate-1 scale-105">
                            </div>

                            <!-- Content container -->
                            <div
                                class="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-1000 hover:rotate-0 hover:shadow-2xl -rotate-1 mt-6">
                                <!-- Header accent -->
                                <div class="flex items-center mb-4">
                                    <div class="w-8 h-0.5 bg-[#fe4135] mr-3"></div>
                                    <h3
                                        class="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest">
                                        Team Up
                                    </h3>
                                </div>

                                <!-- Main text -->
                                <div class="space-y-2">
                                    <p
                                        class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900 dark:text-gray-100">
                                        <span class="font-semibold text-[#fe4135]">Join a team</span> where your
                                    </p>
                                    <p
                                        class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900 dark:text-gray-100">
                                        <span class="font-bold text-gray-900 dark:text-white">skills shape the
                                            future</span>
                                    </p>
                                    <p
                                        class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900 dark:text-gray-100">
                                        of <span class="text-[#fe4135] font-semibold">energy</span>.
                                    </p>
                                </div>

                                <!-- Optional CTA or additional content -->
                                <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                        <div class="w-2 h-2 bg-[#fe4135] rounded-full mr-2"></div>
                                        <span class="font-medium">Building tomorrow's energy solutions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
// No image import needed anymore
</script>

<style scoped>
/* Import Barlow font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&display=swap');

/* Apply Barlow font family */
.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Mobile-specific fixes */
@media (max-width: 768px) {

    /* Remove all top gaps on mobile */
    .mobile-no-gap {
        margin-top: -70px !important;
        padding-top: -70px !important;
    }

    /* Target the parent section to ensure no gaps */
    .relative.-mt-8 {
        margin-top: 0 !important;
        padding-top: 0 !important;
    }

    /* Content section - remove top gap */
    .py-8 {
        padding-top: 0;
        padding-bottom: 2rem;
    }

    /* Remove gaps and ensure seamless layout on mobile */
    .grid {
        gap: 1rem;
    }

    /* Mobile typography adjustments for stacked heading */
    .text-2xl {
        font-size: 1.5rem;
    }

    /* Center align all content on mobile */
    .text-center {
        text-align: center;
    }

    /* Ensure text content has proper spacing */
    .order-2.lg\:order-1 {
        padding-top: 1rem;
    }

    /* Adjust hanging rope for mobile - two angles */
    .relative.max-w-lg {
        max-width: 100%;
        padding: 0 1rem;
    }

    /* Reduce padding in content container on mobile */
    .p-6 {
        padding: 1.5rem;
    }

    /* Adjust stacked boxes heading spacing */
    .mb-12 {
        margin-bottom: 2rem;
    }

    /* Make hanging rope smaller on mobile */
    .w-0\.5.h-12 {
        width: 0.25rem;
        height: 2rem;
    }

    .w-0\.5.h-10 {
        width: 0.25rem;
        height: 1.5rem;
    }

    .w-2.h-2 {
        width: 0.375rem;
        height: 0.375rem;
    }
}

@media (min-width: 769px) and (max-width: 1023px) {

    /* Tablet adjustments */
    .text-2xl {
        font-size: 1.875rem;
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

    .lg\:justify-end {
        justify-content: flex-end;
    }
}

/* Hover effects for content container */
.relative.bg-white\/90:hover {
    transform: rotate(0deg) scale(1.02);
}

/* Enhance the hanging rope effect with two angles */
.w-0\.5 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.w-2.h-2.bg-gray-700 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Dark mode specific adjustments */
@media (prefers-color-scheme: dark) {
    .bg-gradient-to-r {
        background: linear-gradient(to right, #fe4135, #dc2626);
    }

    .shadow-xl {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
    }
}

/* Typography enhancements */
.leading-tight {
    line-height: 1.2;
}

.tracking-wider {
    letter-spacing: 0.05em;
}

.tracking-widest {
    letter-spacing: 0.1em;
}

/* Smooth transitions for interactive elements */
* {
    transition-property: color, background-color, border-color, transform, opacity, box-shadow;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
}

/* Stacked boxes hover effect */
.relative:hover .absolute.-top-2.-left-2 {
    transform: rotate(3deg) scale(1.02);
}

.relative:hover .absolute.-top-1.-left-1 {
    transform: rotate(-2deg) scale(1.01);
}
</style>