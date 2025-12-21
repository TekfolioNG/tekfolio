<template>
    <section class="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-12">
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
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-2">
                <!-- Products & Applications -->
                <NuxtLink to="#" class="group flex flex-col items-center text-center">
                    <div class="w-14 h-20 md:w-16 md:h-22 bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3 sequential-bob"
                        style="--delay: 0;">
                        <img src="assets/img/products-applications.png" alt="Products & Applications"
                            class="w-10 h-10 md:w-12 md:h-12 filter-red">
                    </div>
                    <h3
                        class="text-sm md:text-base font-barlow-extrabold text-gray-800 dark:text-gray-200 group-hover:text-[#fe4135] transition-colors px-1">
                        PRODUCTS & APPLICATIONS
                    </h3>
                </NuxtLink>

                <!-- Oil & Gas Operations -->
                <NuxtLink to="#" class="group flex flex-col items-center text-center">
                    <div class="w-14 h-20 md:w-16 md:h-22 bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3 sequential-bob"
                        style="--delay: 1;">
                        <img src="assets/img/oil-gas-operations.png" alt="Oil & Gas Operations"
                            class="w-10 h-10 md:w-12 md:h-12 filter-red">
                    </div>
                    <h3
                        class="text-sm md:text-base font-barlow-extrabold text-gray-800 dark:text-gray-200 group-hover:text-[#fe4135] transition-colors px-1">
                        OIL & GAS OPERATIONS
                    </h3>
                </NuxtLink>

                <!-- Corrosion & Integrity Management -->
                <NuxtLink to="#" class="group flex flex-col items-center text-center">
                    <div class="w-14 h-20 md:w-16 md:h-22 bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3 sequential-bob"
                        style="--delay: 2;">
                        <img src="assets/img/corossion-management.png" alt="Corrosion & Integrity Management"
                            class="w-10 h-10 md:w-12 md:h-12 filter-red">
                    </div>
                    <h3
                        class="text-sm md:text-base font-barlow-extrabold text-gray-800 dark:text-gray-200 group-hover:text-[#fe4135] transition-colors px-1">
                        CORROSION & INTEGRITY MANAGEMENT
                    </h3>
                </NuxtLink>

                <!-- Project & Contract Management -->
                <NuxtLink to="#" class="group flex flex-col items-center text-center">
                    <div class="w-14 h-20 md:w-16 md:h-22 bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3 sequential-bob"
                        style="--delay: 3;">
                        <img src="assets/img/contract-management.png" alt="Project & Contract Management"
                            class="w-10 h-10 md:w-12 md:h-12 filter-red">
                    </div>
                    <h3
                        class="text-sm md:text-base font-barlow-extrabold text-gray-800 dark:text-gray-200 group-hover:text-[#fe4135] transition-colors px-1">
                        PROJECT & CONTRACT MANAGEMENT
                    </h3>
                </NuxtLink>

                <!-- Manpower Services -->
                <NuxtLink to="#" class="group flex flex-col items-center text-center">
                    <div class="w-14 h-20 md:w-16 md:h-22 bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3 sequential-bob"
                        style="--delay: 4;">
                        <img src="assets/img/manpower-services.png" alt="Manpower Services"
                            class="w-10 h-10 md:w-12 md:h-12 filter-red">
                    </div>
                    <h3
                        class="text-sm md:text-base font-barlow-extrabold text-gray-800 dark:text-gray-200 group-hover:text-[#fe4135] transition-colors px-1">
                        MANPOWER SERVICES
                    </h3>
                </NuxtLink>
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

/* Filter to make icons red */
.filter-red {
    filter: invert(37%) sepia(89%) saturate(1192%) hue-rotate(333deg) brightness(101%) contrast(101%);
}

/* Sequential bob animation */
@keyframes sequential-bob {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.sequential-bob {
    animation: sequential-bob 3s ease-in-out infinite;
    animation-delay: calc(var(--delay) * 3s);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .grid {
        gap: 1.5rem;
    }
}
</style>