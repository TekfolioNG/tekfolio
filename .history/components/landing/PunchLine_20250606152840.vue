<template>
    <section class="py-16 md:py-24 bg-white dark:bg-gray-900 overflow-hidden">
        zfgkm <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Image Column with Animation -->
                <div class="relative">
                    <div class="relative z-10 w-full max-w-lg mx-auto">
                        <img src="~/assets/img/tekfolio-harmony.jpg" alt="App interface showing harmony"
                            class="rounded-2xl shadow-2xl w-full h-auto border-8 border-white dark:border-gray-800 transform transition-all duration-1000 hover:scale-105"
                            :class="{ 'animate-float': isVisible }">
                        <img src="~/assets/img/tekfolio-harmony (2).jpg" alt="App interface alternative view"
                            class="absolute -bottom-8 -right-8 rounded-2xl shadow-xl w-3/5 h-auto border-8 border-white dark:border-gray-800 transform transition-all duration-1000 hover:scale-105 z-20"
                            :class="{ 'animate-float-delay': isVisible }">
                    </div>
                    <div
                        class="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 filter blur-3xl animate-pulse-slow">
                    </div>
                </div>

                <!-- Content Column -->
                <div class="lg:pl-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Apps that fit <span
                            class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">like
                            notes in a harmony</span>
                    </h2>

                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Our team collaborates closely with you to build digital tools that drive your business
                        vision and instantly connect with your customers or
                        team. The result? Happier users, higher satisfaction, and improved loyalty.
                    </p>

                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        That's because we're more than just your dev team. We're your growth partners, building
                        e-products
                        that are technically sound, easy to use, and fully secure to power your success.
                    </p>

                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"><strong><i>
                                ...Because good software should feel as natural as a melody that stays with you.
                            </i> </strong> </p>

                    <div class="flex flex-col sm:flex-row gap-4">
                        <NuxtLink to="/contact"
                            class="px-8 py-3 bg-[#01348F] hover:bg-[#1d8ad8] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
                            Start Your Project
                        </NuxtLink>
                        <NuxtLink to="/portfolio"
                            class="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center">
                            See Our Work
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

onMounted(() => {
    isVisible.value = true
})
</script>

<style>
@keyframes float {

    0%,
    100% {
        transform: translateY(0) rotate(1deg);
    }

    50% {
        transform: translateY(-15px) rotate(-1deg);
    }
}

@keyframes float-delay {

    0%,
    100% {
        transform: translateY(10px) rotate(-2deg);
    }

    50% {
        transform: translateY(-5px) rotate(2deg);
    }
}

@keyframes pulse-slow {

    0%,
    100% {
        opacity: 0.2;
        transform: scale(1);
    }

    50% {
        opacity: 0.3;
        transform: scale(1.05);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-delay {
    animation: float-delay 6s ease-in-out infinite 1.5s;
}

.animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
}
</style>