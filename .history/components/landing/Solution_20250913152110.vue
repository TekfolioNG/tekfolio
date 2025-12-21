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
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-4">
                <!-- Products & Applications -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 hover-bob">
                            <img src="~/assets/img/products-applications.png" alt="Products & Applications"
                                class="w-18 h-22 md:w-20 md:h-24 object-contain mx-auto transition-transform duration-300 group-hover:scale-110 bounce-animation-1"
                                style="filter: brightness(0) saturate(100%) invert(24%) sepia(93%) saturate(6842%) hue-rotate(356deg) brightness(97%) contrast(95%);" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 dark:text-gray-300 uppercase leading-tight group-hover:text-[#fe4135] transition-colors duration-300">
                            PRODUCTS <br>& APPLICATIONS</br>
                        </h3>
                    </NuxtLink>
                </div>

                <!-- Oil & Gas Operations -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 hover-bob">
                            <img src="~/assets/img/oil-gas-operations.png" alt="Oil & Gas Operations"
                                class="w-18 h-22 md:w-20 md:h-24 object-contain mx-auto transition-transform duration-300 group-hover:scale-110 bounce-animation-2"
                                style="filter: brightness(0) saturate(100%) invert(24%) sepia(93%) saturate(6842%) hue-rotate(356deg) brightness(97%) contrast(95%);" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 dark:text-gray-300 uppercase leading-tight group-hover:text-[#fe4135] transition-colors duration-300">
                            OIL & GAS <br>OPERATIONS</br>
                        </h3>
                    </NuxtLink>
                </div>

                <!-- Corrosion & Integrity Management -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 hover-bob">
                            <img src="~/assets/img/corossion-management.png" alt="Corrosion & Integrity Management"
                                class="w-18 h-22 md:w-20 md:h-24 object-contain mx-auto transition-transform duration-300 group-hover:scale-110 bounce-animation-3"
                                style="filter: brightness(0) saturate(100%) invert(24%) sepia(93%) saturate(6842%) hue-rotate(356deg) brightness(97%) contrast(95%);" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 dark:text-gray-300 uppercase leading-tight group-hover:text-[#fe4135] transition-colors duration-300">
                            CORROSION & INTEGRITY <br>MANAGEMENT</br>
                        </h3>
                    </NuxtLink>
                </div>

                <!-- Project & Contract Management -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 hover-bob">
                            <img src="~/assets/img/contract-management.png" alt="Project & Contract Management"
                                class="w-18 h-22 md:w-20 md:h-24 object-contain mx-auto transition-transform duration-300 group-hover:scale-110 bounce-animation-4"
                                style="filter: brightness(0) saturate(100%) invert(24%) sepia(93%) saturate(6842%) hue-rotate(356deg) brightness(97%) contrast(95%);" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 dark:text-gray-300 uppercase leading-tight group-hover:text-[#fe4135] transition-colors duration-300">
                            PROJECT & CONTRACT <br>MANAGEMENT</br>
                        </h3>
                    </NuxtLink>
                </div>

                <!-- Manpower Services -->
                <div class="flex flex-col items-center text-center">
                    <NuxtLink to="#" class="group block">
                        <div class="mb-4 hover-bob">
                            <img src="~/assets/img/manpower-services.png" alt="Manpower Services"
                                class="w-18 h-22 md:w-20 md:h-24 object-contain mx-auto transition-transform duration-300 group-hover:scale-110 bounce-animation-5"
                                style="filter: brightness(0) saturate(100%) invert(24%) sepia(93%) saturate(6842%) hue-rotate(356deg) brightness(97%) contrast(95%);" />
                        </div>
                        <h3
                            class="text-sm md:text-base font-barlow-extrabold text-gray-700 dark:text-gray-300 uppercase leading-tight group-hover:text-[#fe4135] transition-colors duration-300">
                            MANPOWER <br>SERVICES</br>
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

/* Bounce animations with staggered intervals */
.bounce-animation-1 {
    animation: bounce 1s ease-in-out infinite;
    animation-delay: 0s;
    animation-duration: 3s;
}

.bounce-animation-2 {
    animation: bounce 1s ease-in-out infinite;
    animation-delay: 1s;
    animation-duration: 6s;
}

.bounce-animation-3 {
    animation: bounce 1s ease-in-out infinite;
    animation-delay: 2s;
    animation-duration: 9s;
}

.bounce-animation-4 {
    animation: bounce 1s ease-in-out infinite;
    animation-delay: 3s;
    animation-duration: 12s;
}

.bounce-animation-5 {
    animation: bounce 1s ease-in-out infinite;
    animation-delay: 4s;
    animation-duration: 15s;
}

@keyframes bounce {

    0%,
    20%,
    53%,
    80%,
    100% {
        transform: translateY(0);
    }

    40%,
    43% {
        transform: translateY(-10px);
    }

    70% {
        transform: translateY(-5px);
    }
}

/* Enhanced Mobile responsive adjustments */
@media (max-width: 1023px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
}
</style>