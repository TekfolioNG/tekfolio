<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 flex flex-col relative overflow-hidden">
        <!-- Large Background 404 - Increased size, moved further up and right -->
        <div
            class="absolute inset-0 flex items-center justify-center pointer-events-none transform translate-x-20 -translate-y-24 z-0">
            <span
                class="text-[32rem] md:text-[45rem] font-barlow font-bold text-gray-100 dark:text-gray-800 select-none opacity-20 tracking-wider">
                404
            </span>
        </div>

        <!-- Header with Centered Logo -->
        <header class="w-full py-6 px-4 md:px-8 relative z-10">
            <div class="flex justify-center">
                <NuxtLink to="/" class="inline-block">
                    <!-- Light mode logo -->
                    <img src="/assets/img/syntanium-logo3.png" alt="Syntanium Energy Logo"
                        class="h-12 md:h-16 w-auto dark:hidden" />
                    <!-- Dark mode logo -->
                    <img src="/assets/img/syntanium-logo.png" alt="Syntanium Energy Logo"
                        class="h-12 md:h-16 w-auto hidden dark:block" />
                </NuxtLink>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-1 flex items-center justify-center px-4 md:px-8 py-12 relative z-10">
            <div class="max-w-4xl w-full">
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <!-- Left Column - Text Content -->
                    <div class="space-y-6 text-center lg:text-left order-2 lg:order-1">
                        <!-- Heading -->
                        <h1
                            class="text-4xl md:text-5xl lg:text-6xl font-barlow font-black text-gray-900 dark:text-white leading-tight">
                            Oops... This Page Missed the Pipeline
                        </h1>

                        <!-- Body Text -->
                        <div class="text-base md:text-lg text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <p>
                                We couldn't locate the page you requested. It returned an <strong
                                    class="text-gray-900 dark:text-white">error 404,</strong> which means it may have
                                been rerouted, is no longer in operation, or the URL might have a missing or extra
                                character.
                            </p>
                            <p class="text-lg md:text-xl font-medium text-gray-900 dark:text-white">
                                Either way, let's get you back on track.
                            </p>
                        </div>

                        <!-- Action Button -->
                        <div class="flex justify-center lg:justify-start">
                            <NuxtLink to="/"
                                class="inline-flex items-center px-8 py-4 bg-[#fe4135] text-white font-semibold text-lg rounded-lg hover:bg-[#fe4135]/90 transform hover:scale-105 transition-all duration-300 group shadow-lg">
                                <svg class="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>
                                Return to Homepage
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Right Column - Lottie Animation with Faded 404 Behind -->
                    <div class="flex justify-center order-1 lg:order-2 relative">
                        <!-- Faded 404 directly behind animation -->
                        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span
                                class="text-9xl md:text-[10rem] font-black font-barlow text-gray-300 dark:text-gray-700 select-none opacity-40 tracking-wider transform -rotate-12">
                                404
                            </span>
                        </div>

                        <!-- Lottie Animation -->
                        <DotLottieVue style="height: 400px; width: 400px" autoplay loop
                            src="https://lottie.host/66a01047-0d2a-4949-9073-ff028533edb1/iBDVEVatet.lottie"
                            aria-label="404 Animation" class="max-w-full relative z-10" />
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="w-full py-6 px-4 md:px-8 border-t border-gray-200 dark:border-gray-700 relative z-10">
            <div class="max-w-7xl mx-auto text-center">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    &copy; {{ new Date().getFullYear() }} Syntanium Energy. All rights reserved.
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

// Set page meta for SEO and proper 404 handling
useHead({
    title: '404 - Page Not Found | Syntanium Energy',
    meta: [
        { name: 'description', content: 'The page you are looking for could not be found.' },
        { name: 'robots', content: 'noindex, nofollow' }
    ]
})

// Set proper HTTP status code for Nuxt
const props = defineProps({
    error: Object
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Smooth transitions */
* {
    transition-property: color, background-color, border-color, transform, opacity;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
}

/* Animation for content */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

h1,
p,
a {
    animation: fadeInUp 0.6s ease-out backwards;
}

h1 {
    animation-delay: 0.1s;
}

p {
    animation-delay: 0.2s;
}

a {
    animation-delay: 0.3s;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }
}

/* Dark mode shadow adjustments */
@media (prefers-color-scheme: dark) {
    .shadow-lg {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
    }
}

/* Prevent horizontal scroll from large 404 */
body {
    overflow-x: hidden;
}
</style>