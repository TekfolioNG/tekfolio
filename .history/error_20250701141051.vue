<template>
    <div class="min-h-screen bg-white flex items-center justify-center relative overflow-hidden px-4">
        <!-- Background 404 Watermark - Larger and faded -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span class="text-[30rem] font-bold text-gray-100 select-none opacity-10 tracking-wider">
                404
            </span>
        </div>

        <!-- Main Content Grid -->
        <div class="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Text Content -->
            <div class="text-left">
                <!-- Logo -->
                <div class="mb-8">
                    <img src="/assets/img/tekfolio-logo-final6.svg" alt="Logo" class="h-10">
                </div>

                <!-- Heading -->
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    So Sorry!
                </h1>

                <!-- Subheading -->
                <p class="text-2xl text-gray-600 mb-8">
                    The page you are looking for cannot be found
                </p>

                <!-- Reasons List -->
                <div class="mb-10">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Possible Reasons</h3>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-start">
                            <span class="text-blue-500 mr-2">•</span>
                            <span>The address may have been typed incorrectly</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-500 mr-2">•</span>
                            <span>It may be a broken or outdated link</span>
                        </li>
                    </ul>
                </div>

                <!-- Links -->
                <div class="flex flex-col sm:flex-row gap-4">
                    <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        Home
                    </NuxtLink>
                    <span class="text-gray-300 hidden sm:block">|</span>
                    <NuxtLink to="/help" class="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        Help
                    </NuxtLink>
                </div>
            </div>

            <!-- Image Content -->
            <div class="relative z-10">
                <div class="relative">
                    <!-- Lottie Animation - Larger -->
                    <DotLottieVue style="height: 400px; width: 400px" autoplay loop
                        src="/animations/confused-person.lottie" aria-label="Person looking confused" />
                    <!-- Faded 404 behind image -->
                    <div class="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span class="text-[20rem] font-bold text-blue-50 select-none opacity-30 tracking-wider">
                            404
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

// Set page meta for SEO and proper 404 handling
useHead({
    title: '404 - Page Not Found',
    meta: [
        { name: 'description', content: 'The page you are looking for could not be found.' },
        { name: 'robots', content: 'noindex, nofollow' }
    ]
})

// Set proper HTTP status code
setResponseStatus(404)
</script>

<style scoped>
/* Custom styles */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .grid-cols-2 {
        grid-template-columns: 1fr;
    }

    .text-\[30rem\] {
        font-size: 20rem;
    }
}

@media (max-width: 640px) {
    .text-\[30rem\] {
        font-size: 15rem;
    }

    .text-\[20rem\] {
        font-size: 10rem;
    }
}
</style>