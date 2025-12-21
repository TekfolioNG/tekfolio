<template>
    <div class="careers-component">
        <!-- Section 1: Life at Syntanium with Hero Image -->
        <section class="relative w-full h-[300px] md:h-[450px] lg:h-[500px] lg:mt-8 overflow-hidden">
            <img :src="heroImage" alt="Gas Pipelines at Syntanium" class="w-full h-full object-cover object-center" />

            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/60"></div>

            <!-- Content Container -->
            <div class="absolute inset-0 flex items-center justify-end pr-4 md:pr-8 lg:pr-16">
                <div class="max-w-lg text-white text-center lg:text-right">
                    <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                        Life at <span class="text-red-500">Syntanium</span>
                    </h1>
                    <p class="text-sm md:text-xl lg:text-2xl leading-relaxed px-4 lg:px-0"><i>
                            Syntanium is a workplace where safety comes first, learning never stops, and every
                            contribution
                            drives collective success. We invest in training, mentorship, and growth opportunities that
                            empower our people to achieve their best.
                        </i> </p>
                </div>
            </div>
        </section>

        <!-- Section 2: Opportunities, Applications & Spontaneous Applications -->
        <section class="bg-gray-900 py-12 md:py-16 lg:py-20">
            <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <!-- Opportunities Section -->
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-20 lg:mb-24">
                    <!-- Left Column - Content -->
                    <div>
                        <h2
                            class="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center lg:text-left text-gray-300">
                            <span class="text-red-500">Opportunities</span>
                        </h2>
                        <p
                            class="text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 text-center lg:text-left text-white">
                            We offer diverse roles across the energy value chain, including:
                        </p>

                        <!-- Job Categories Grid -->
                        <div class="grid md:grid-cols-2 gap-3 md:gap-4">
                            <div class="space-y-3">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                                    <span class="text-sm md:text-base font-semibold text-white">Engineering &
                                        Technical</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                                    <span class="text-sm md:text-base font-semibold text-white">Field Operations</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                                    <span class="text-sm md:text-base font-semibold text-white">Project
                                        Management</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                                    <span class="text-sm md:text-base font-semibold text-white">Health, Safety &
                                        Environment (HSE)</span>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                                    <span class="text-sm md:text-base font-semibold text-white">Corporate &
                                        Support</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                                    <span class="text-sm md:text-base font-semibold text-white">Supply Chain &
                                        Logistics</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                                    <span class="text-sm md:text-base font-semibold text-white">Research &
                                        Innovation</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                                    <span class="text-sm md:text-base font-semibold text-white">Business
                                        Development</span>
                                </div>
                            </div>
                        </div>

                        <p class="text-gray-400 text-sm md:text-base mt-4 text-center lg:text-left">...and many more</p>
                    </div>

                    <!-- Right Column - Decorative Element -->
                    <div class="hidden lg:flex items-center justify-center">
                        <div class="w-64 h-64 border-2 border-red-500/20 rounded-full flex items-center justify-center">
                            <div
                                class="w-48 h-48 border-2 border-red-500/40 rounded-full flex items-center justify-center">
                                <div class="w-32 h-32 bg-red-500/10 rounded-full flex items-center justify-center">
                                    <div class="w-16 h-16 bg-red-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Application Section -->
                <div class="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                    <!-- Left Column - Application Texts -->
                    <div class="lg:col-span-2 space-y-4 md:space-y-8">
                        <!-- Regular Application -->
                        <div class="max-w-2xl">
                            <p class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
                                Interested? Submit your application below and take the next step toward building your
                                future with Syntanium.
                            </p>
                        </div>

                        <!-- Spontaneous Applications -->
                        <div class="max-w-2xl">
                            <div class="bg-gray-800 rounded-lg p-6 md:p-8">
                                <h3 class="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-gray-400">
                                    <span class="text-red-500">Spontaneous</span> Applications
                                </h3>
                                <p class="text-sm md:text-base lg:text-lg leading-relaxed text-gray-400"><i>
                                        Don't see a role that matches your profile? You can still send us a spontaneous
                                        application. We're always open to new talents.
                                    </i></p>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - Submit Icon (Desktop Only) -->
                    <div class="hidden lg:flex items-center justify-center">
                        <div class="flex items-center justify-center w-48 h-48 lg:w-56 lg:h-56">
                            <img :src="submitIcon" alt="Submit Application"
                                class="w-full h-full object-contain filter brightness-0 invert" />
                        </div>
                    </div>

                    <!-- Mobile Icon (Centered) -->
                    <div class="lg:hidden flex items-center justify-center mt-2">
                        <img :src="submitIcon" alt="Submit Application"
                            class="w-20 h-20 object-contain filter brightness-0 invert" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import images from assets directory
import heroImage from '~/assets/img/gas-pipelines-syntanium.jpg';
import submitIcon from '~/assets/img/submit.png';
</script>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* Apply Inter font family */
* {
    font-family: 'Inter', sans-serif;
}

/* Smooth transitions */
button {
    transition: all 0.3s ease;
}

/* Custom hover effects */
button:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Mobile responsiveness */
@media (max-width: 768px) {

    /* Hero section adjustments */
    .absolute.inset-0.flex {
        justify-content: center;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .max-w-lg {
        max-width: 100%;
    }

    /* Job categories - single column on mobile */
    .grid.md\\:grid-cols-2 {
        grid-template-columns: 1fr;
    }

    /* Ensure proper spacing */
    .space-y-3>*+* {
        margin-top: 0.75rem;
    }
}

/* Tablet adjustments */
@media (min-width: 769px) and (max-width: 1023px) {
    .absolute.inset-0.flex {
        justify-content: center;
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

/* Desktop specific styles */
@media (min-width: 1024px) {
    .lg\\:text-right {
        text-align: right;
    }

    .lg\\:text-left {
        text-align: left;
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .bg-white {
        background-color: #1f2937;
    }

    .text-gray-700 {
        color: #d1d5db;
    }

    .text-gray-900 {
        color: #f9fafb;
    }

    .bg-gray-50 {
        background-color: #374151;
    }
}

/* Animation for decorative circles */
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

.lg\\:flex .w-64 {
    animation: pulse 4s ease-in-out infinite;
}
</style>