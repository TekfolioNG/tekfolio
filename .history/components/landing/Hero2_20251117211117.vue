<template>
    <div class="min-h-screen bg-white">

        <!-- Hero Section - Contact Page -->

        <section class="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-900/95">
            <!-- Lottie Animation Background - Full Width -->
            <div
                class="absolute inset-0 flex items-center justify-center md:justify-start md:items-center md:left-8 lg:left-12 md:w-[40%] lg:w-[60%]">
                <ClientOnly>
                    <DotLottieVue autoplay loop
                        src="https://lottie.host/41709ac1-f3f7-4dbc-85ca-f84e09ac13e4/fASMzFhLnZ.lottie"
                        class="w-full max-w-sm md:max-w-none md:w-full aspect-square" />
                </ClientOnly>
            </div>

            <!-- Subtle overlay for depth -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/50"></div>

            <!-- Content Overlay - Right Side -->
            <div class="relative z-10 h-full flex items-center justify-end">
                <div class="container mx-auto px-6 md:px-12">
                    <div class="max-w-[250px] md:max-w-md ml-auto">
                        <!-- Card with clip path for unique shape -->
                        <div class="relative bg-gradient-to-br from-white/80 to-gray-50/75 backdrop-blur-sm p-4 md:p-8 shadow-2xl"
                            style="clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);">
                            <h1
                                class="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2 md:mb-3">
                                Contact Us
                            </h1>
                            <p class="text-sm md:text-lg text-[#4D7EFF] font-semibold italic">
                                Let's Build<br class="md:hidden"> Something Great
                            </p>
                            <div class="mt-4 md:mt-5 w-12 md:w-16 h-1 bg-gradient-to-r from-[#4D7EFF] to-blue-300">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
</script>

<style scoped>
/* Ensure smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Custom responsive adjustments */
@media (max-width: 768px) {
    h1 {
        letter-spacing: 0.025em;
    }
}
</style>