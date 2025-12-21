<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
        <!-- Header with Logo -->
        <header class="w-full py-6 px-4 md:px-8">
            <div class="max-w-7xl mx-auto">
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
        <main class="flex-1 flex items-center justify-center px-4 md:px-8 py-12">
            <div class="max-w-4xl w-full text-center">
                <!-- Lottie Animation -->
                <div class="mb-8 flex justify-center">
                    <div ref="lottieContainer" class="w-full max-w-md md:max-w-lg"></div>
                </div>

                <!-- Error Message -->
                <div class="space-y-4 mb-8">
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-barlow font-bold text-gray-900 dark:text-white">
                        {{ error.statusCode === 404 ? '404' : error.statusCode }}
                    </h1>

                    <h2 class="text-2xl md:text-3xl font-barlow font-semibold text-gray-800 dark:text-gray-200">
                        {{ error.statusCode === 404 ? 'Page Not Found' : 'An Error Occurred' }}
                    </h2>

                    <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {{ error.statusCode === 404
                            ? "The page you're looking for doesn't exist or has been moved."
                            : error.message || 'Something went wrong. Please try again later.'
                        }}
                    </p>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <NuxtLink to="/"
                        class="inline-flex items-center px-6 py-3 bg-[#fe4135] text-white font-semibold rounded-lg hover:bg-[#fe4135]/90 transform hover:scale-105 transition-all duration-300 group">
                        <svg class="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back to Home
                    </NuxtLink>

                    <button @click="goBack"
                        class="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-300">
                        Go Back
                    </button>
                </div>

                <!-- Additional Help -->
                <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Need help? Contact our support team
                    </p>
                    <div class="flex justify-center items-center space-x-6">
                        <a href="mailto:info@syntaniumenergy.com"
                            class="text-[#fe4135] hover:text-[#fe4135]/80 transition-colors duration-300">
                            Email Us
                        </a>
                        <span class="text-gray-300 dark:text-gray-600">|</span>
                        <NuxtLink to="/contact"
                            class="text-[#fe4135] hover:text-[#fe4135]/80 transition-colors duration-300">
                            Contact Page
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="w-full py-6 px-4 md:px-8 border-t border-gray-200 dark:border-gray-700">
            <div class="max-w-7xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
                <p>&copy; {{ new Date().getFullYear() }} Syntanium Energy. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
    error: {
        type: Object,
        required: true
    }
})

const lottieContainer = ref(null)

const goBack = () => {
    if (window.history.length > 1) {
        window.history.back()
    } else {
        navigateTo('/')
    }
}

onMounted(async () => {
    // Dynamically import lottie-web
    try {
        const lottie = await import('lottie-web')

        if (lottieContainer.value) {
            lottie.default.loadAnimation({
                container: lottieContainer.value,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'https://lottie.host/66a01047-0d2a-4949-9073-ff028533edb1/iBDVEVatet.lottie'
            })
        }
    } catch (error) {
        console.error('Failed to load Lottie animation:', error)
    }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Smooth transitions for all interactive elements */
* {
    transition-property: color, background-color, border-color, transform, opacity;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
}

/* Animation for error code */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

h1,
h2,
p {
    animation: fadeInUp 0.6s ease-out backwards;
}

h1 {
    animation-delay: 0.2s;
}

h2 {
    animation-delay: 0.3s;
}

p {
    animation-delay: 0.4s;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
    .shadow-xl {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
    }
}
</style>