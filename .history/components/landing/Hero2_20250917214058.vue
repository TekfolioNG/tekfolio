<template>
    <section class="relative w-full h-96 md:h-[500px] overflow-hidden">
        <!-- Background with Lottie Animation - Flushed Right -->
        <div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent">
            <div class="absolute top-0 right-0 h-full w-full md:w-3/4 flex items-center justify-center">
                <DotLottieVue style="height: 400px; width: 400px" autoplay loop
                    src="https://lottie.host/9570133c-2003-42f9-8837-7df31d26106d/QSdJfTeuzt.lottie" />
            </div>
        </div>

        <!-- Content Overlay - Left Side -->
        <div class="relative z-10 h-full flex items-center">
            <div class="container mx-auto px-6 md:px-12">
                <div class="max-w-2xl">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Contact Us
                    </h1>
                    <div class="mt-4 w-20 h-1 bg-red-500"></div>
                </div>
            </div>
        </div>

        <!-- Dark overlay for better text readability on mobile -->
        <div class="absolute inset-0 bg-black/40 md:bg-transparent"></div>
    </section>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
</script>

<style scoped>
/* Ensure full width extends beyond container */
section {
    margin-left: calc(-50vw + 50%);
    width: 100vw;
}

/* Custom responsive adjustments */
@media (max-width: 768px) {

    /* On mobile, center the lottie animation */
    .flex.items-center.justify-center {
        justify-content: center;
    }
}

@media (min-width: 769px) {

    /* On desktop, lottie takes right 75% of banner */
    .w-3\/4 {
        width: 75%;
    }
}
</style>