<template>
    <section class="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-2xl lg:text-3xl font-barlow-extrabold text-[#fe4135] mb-6 tracking-wide">
                    SOLUTIONS WE PROVIDE
                </h2>
                <p
                    class="text-xl md:text-2xl font-barlow-thin text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Syntanium provides practical solutions that keep oil and gas operations running smoothly across
                    upstream, midstream, and downstream activities.
                </p>
            </div>

            <!-- Solutions Grid -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
                <!-- Products & Applications -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 bob-animation" style="animation-delay: 0s;">
                            <img src="~/assets/img/products-applications.png" alt="Products & Applications"
                                class="w-12 h-18 md:w-14 md:h-18 object-contain mx-auto transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 dark:text-gray-300 uppercase leading-tight group-hover:text-[#fe4135] transition-colors duration-300">
                            PRODUCTS & APPLICATIONS
                        </h3>
                    </NuxtLink>
                </div>

                <!-- Oil & Gas Operations -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 bob-animation" style="animation-delay: 2s;">
                            <img src="~/assets/img/oil-gas-operations.png" alt="Oil & Gas Operations"
                                class="w-12 h-18 md:w-14 md:h-18 object-contain mx-auto transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 dark:text-gray-300 uppercase leading-tight group-hover:text-[#fe4135] transition-colors duration-300">
                            OIL & GAS OPERATIONS
                        </h3>
                    </NuxtLink>
                </div>

                <!-- Corrosion & Integrity Management -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 bob-animation" style="animation-delay: 4s;">
                            <img src="~/assets/img/corossion-management.png" alt="Corrosion & Integrity Management"
                                class="w-12 h-18 md:w-14 md:h-18 object-contain mx-auto transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 dark:text-gray-300 uppercase leading-tight group-hover:text-[#fe4135] transition-colors duration-300">
                            CORROSION & INTEGRITY MANAGEMENT
                        </h3>
                    </NuxtLink>
                </div>

                <!-- Project & Contract Management -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 bob-animation" style="animation-delay: 6s;">
                            <img src="~/assets/img/contract-management.png" alt="Project & Contract Management"
                                class="w-12 h-18 md:w-14 md:h-18 object-contain mx-auto transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 dark:text-gray-300 uppercase leading-tight group-hover:text-[#fe4135] transition-colors duration-300">
                            PROJECT & CONTRACT MANAGEMENT
                        </h3>
                    </NuxtLink>
                </div>

                <!-- Manpower Services -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 bob-animation" style="animation-delay: 8s;">
                            <img src="~/assets/img/manpower-services.png" alt="Manpower Services"
                                class="w-12 h-18 md:w-14 md:h-18 object-contain mx-auto transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 dark:text-gray-300 uppercase leading-tight group-hover:text-[#fe4135] transition-colors duration-300">
                            MANPOWER SERVICES
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

/* Bob animation */
@keyframes bob {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.bob-animation {
    animation: bob 1s ease-in-out infinite;
    animation-iteration-count: infinite;
}

/* Custom animation timing for sequential bobbing */
.bob-animation:nth-child(1) {
    animation-delay: 0s;
}

.bob-animation:nth-child(2) {
    animation-delay: 2s;
}

.bob-animation:nth-child(3) {
    animation-delay: 4s;
}

.bob-animation:nth-child(4) {
    animation-delay: 6s;
}

.bob-animation:nth-child(5) {
    animation-delay: 8s;
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
        gap: 1.5rem;
    }
}
</style>