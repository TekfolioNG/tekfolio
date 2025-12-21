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

            <!-- Solutions Grid -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
                <!-- Consulting -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 hover-bob">
                            <img src="/assets/img/consulting-elevation.png" alt="Consulting"
                                class="w-18 h-22 md:w-20 md:h-24 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1523%) hue-rotate(161deg) brightness(95%) contrast(101%);" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 uppercase leading-tight group-hover:text-[#0099CC] transition-colors duration-300">
                            CONSULTING
                        </h3>
                    </NuxtLink>
                </div>

                <!-- Advisory -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 hover-bob">
                            <img src="/assets/img/advisory-elevation.png" alt="Advisory"
                                class="w-18 h-22 md:w-20 md:h-24 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1523%) hue-rotate(161deg) brightness(95%) contrast(101%);" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 uppercase leading-tight group-hover:text-[#0099CC] transition-colors duration-300">
                            ADVISORY
                        </h3>
                    </NuxtLink>
                </div>

                <!-- Training -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 hover-bob">
                            <img src="/assets/img/training-elevation.png" alt="Training"
                                class="w-18 h-22 md:w-20 md:h-24 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1523%) hue-rotate(161deg) brightness(95%) contrast(101%);" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 uppercase leading-tight group-hover:text-[#0099CC] transition-colors duration-300">
                            TRAINING
                        </h3>
                    </NuxtLink>
                </div>

                <!-- Monitoring & Evaluation -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 hover-bob">
                            <img src="/assets/img/consulting-elevation.png" alt="Monitoring & Evaluation"
                                class="w-18 h-22 md:w-20 md:h-24 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1523%) hue-rotate(161deg) brightness(95%) contrast(101%);" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 uppercase leading-tight group-hover:text-[#0099CC] transition-colors duration-300">
                            MONITORING &<br>EVALUATION
                        </h3>
                    </NuxtLink>
                </div>

                <!-- Business Development -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 hover-bob">
                            <img src="/assets/img/development-elevation.png" alt="Business Development"
                                class="w-18 h-22 md:w-20 md:h-24 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1523%) hue-rotate(161deg) brightness(95%) contrast(101%);" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 uppercase leading-tight group-hover:text-[#0099CC] transition-colors duration-300">
                            BUSINESS<br>DEVELOPMENT
                        </h3>
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
        transform: translateY(-10px);
    }
}

.hover-bob:hover {
    animation: bob 0.6s ease-in-out infinite;
}

/* Mobile responsive adjustments */
@media (max-width: 767px) {
    .grid {
        gap: 2rem;
    }
}

@media (max-width: 640px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
}
</style>