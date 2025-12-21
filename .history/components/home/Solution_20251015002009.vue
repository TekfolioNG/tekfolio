<template>
    <section class="py-16 md:py-24 bg-white transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-2xl lg:text-3xl font-barlow-extrabold text-gray-900 mb-6 tracking-wide">
                    SOLUTIONS WE PROVIDE
                </h2>
                <p class="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-normal">
                    We offer tailored solutions that help businesses operate efficiently, scale sustainably, and stay
                    competitive in changing markets.
                </p>
            </div>

            <!-- Solutions Grid - Now 4 cards with 2x2 layout on larger screens -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                <!-- Consulting Card -->
                <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0077AA]/30 p-6 md:p-8 group"
                    style="box-shadow: -4px 0 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                    <NuxtLink to="#" class="block">
                        <div class="flex flex-col items-center text-center mb-4">
                            <div class="mb-4 hover-bob">
                                <img src="/assets/img/consulting-elevation.png" alt="Consulting"
                                    class="w-16 h-20 md:w-18 md:h-22 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                    style="filter: brightness(0) saturate(100%) invert(35%) sepia(98%) saturate(1823%) hue-rotate(165deg) brightness(90%) contrast(105%);" />
                            </div>
                            <h3
                                class="text-lg md:text-xl font-barlow-extrabold text-gray-900 uppercase leading-tight group-hover:text-[#0077AA] transition-colors duration-300 mb-3">
                                CONSULTING
                            </h3>
                        </div>
                        <p class="text-gray-800 leading-relaxed mb-6 text-center text-sm md:text-base">
                            Strategy, process optimization, and performance improvement for sustainable results.
                        </p>
                        <div class="flex justify-center">
                            <span
                                class="inline-flex items-center text-[#0077AA] font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                                Learn More
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </span>
                        </div>
                    </NuxtLink>
                </div>

                <!-- Advisory Card -->
                <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0077AA]/30 p-6 md:p-8 group"
                    style="box-shadow: -4px 0 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                    <NuxtLink to="#" class="block">
                        <div class="flex flex-col items-center text-center mb-4">
                            <div class="mb-4 hover-bob">
                                <img src="/assets/img/advisory-elevation.png" alt="Advisory"
                                    class="w-16 h-20 md:w-18 md:h-22 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                    style="filter: brightness(0) saturate(100%) invert(35%) sepia(98%) saturate(1823%) hue-rotate(165deg) brightness(90%) contrast(105%);" />
                            </div>
                            <h3
                                class="text-lg md:text-xl font-barlow-extrabold text-gray-900 uppercase leading-tight group-hover:text-[#0077AA] transition-colors duration-300 mb-3">
                                ADVISORY
                            </h3>
                        </div>
                        <p class="text-gray-800 leading-relaxed mb-6 text-center text-sm md:text-base">
                            Business continuity, impact assessment, and growth strategy support.
                        </p>
                        <div class="flex justify-center">
                            <span
                                class="inline-flex items-center text-[#0077AA] font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                                Learn More
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </span>
                        </div>
                    </NuxtLink>
                </div>

                <!-- Training Card -->
                <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0077AA]/30 p-6 md:p-8 group"
                    style="box-shadow: -4px 0 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                    <NuxtLink to="#" class="block">
                        <div class="flex flex-col items-center text-center mb-4">
                            <div class="mb-4 hover-bob">
                                <img src="/assets/img/training-elevation.png" alt="Training"
                                    class="w-16 h-20 md:w-18 md:h-22 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                    style="filter: brightness(0) saturate(100%) invert(35%) sepia(98%) saturate(1823%) hue-rotate(165deg) brightness(90%) contrast(105%);" />
                            </div>
                            <h3
                                class="text-lg md:text-xl font-barlow-extrabold text-gray-900 uppercase leading-tight group-hover:text-[#0077AA] transition-colors duration-300 mb-3">
                                TRAINING
                            </h3>
                        </div>
                        <p class="text-gray-800 leading-relaxed mb-6 text-center text-sm md:text-base">
                            Practical programs designed to build leadership, management, and enterprise skills.
                        </p>
                        <div class="flex justify-center">
                            <span
                                class="inline-flex items-center text-[#0077AA] font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                                Learn More
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </span>
                        </div>
                    </NuxtLink>
                </div>

                <!-- Business Development Card -->
                <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0077AA]/30 p-6 md:p-8 group"
                    style="box-shadow: -4px 0 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                    <NuxtLink to="#" class="block">
                        <div class="flex flex-col items-center text-center mb-4">
                            <div class="mb-4 hover-bob">
                                <img src="/assets/img/development-elevation.png" alt="Business Development"
                                    class="w-16 h-20 md:w-18 md:h-22 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                    style="filter: brightness(0) saturate(100%) invert(35%) sepia(98%) saturate(1823%) hue-rotate(165deg) brightness(90%) contrast(105%);" />
                            </div>
                            <h3
                                class="text-lg md:text-xl font-barlow-extrabold text-gray-900 uppercase leading-tight group-hover:text-[#0077AA] transition-colors duration-300 mb-3">
                                BUSINESS DEVELOPMENT
                            </h3>
                        </div>
                        <p class="text-gray-800 leading-relaxed mb-6 text-center text-sm md:text-base">
                            Research, growth facilitation, and trade partnerships that open new opportunities.
                        </p>
                        <div class="flex justify-center">
                            <span
                                class="inline-flex items-center text-[#0077AA] font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                                Learn More
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

.font-barlow-thin {
    font-family: 'Barlow', sans-serif;
    font-weight: 100;
    font-style: normal;
}

/* Simple hover bob animation */
@keyframes bob {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }
}

.hover-bob:hover {
    animation: bob 0.6s ease-in-out infinite;
}

/* Enhanced card hover effects */
.group:hover {
    transform: translateY(-2px);
    transition: all 0.3s ease;
}

/* Mobile responsive adjustments */
@media (max-width: 767px) {
    .grid {
        gap: 1.25rem;
    }
}

@media (max-width: 640px) {
    .grid {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }

    .p-6 {
        padding: 1.25rem;
    }
}

/* Tablet adjustments */
@media (min-width: 640px) and (max-width: 1023px) {
    .grid {
        gap: 1.5rem;
    }
}
</style>