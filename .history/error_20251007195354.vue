<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 flex flex-col relative overflow-hidden">
        <!-- Large Background 404 - Significantly increased size, moved further up and right -->
        <div class="large-bg-404">
            <span class="large-bg-404-text">
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
                    <div class="content-column">
                        <!-- Heading -->
                        <h1 class="main-heading">
                            Oops... This Page Missed the Pipeline
                        </h1>

                        <!-- Body Text -->
                        <div class="body-text">
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
                        <div class="button-wrapper">
                            <NuxtLink to="/" class="cta-button">
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
                    <div class="animation-column">
                        <!-- Faded 404 directly behind animation -->
                        <div class="faded-404-container">
                            <span class="faded-404-text">
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

/* Large Background 404 - Increased size and repositioned */
.large-bg-404 {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 0;
    transform: translate(16rem, -10rem) !important;
}

.large-bg-404-text {
    font-size: 40rem !important;
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
    color: rgb(243 244 246);
    user-select: none;
    opacity: 0.2;
    letter-spacing: 0.05em;
}

@media (min-width: 768px) {
    .large-bg-404-text {
        font-size: 55rem !important;
    }
}

@media (min-width: 1024px) {
    .large-bg-404-text {
        font-size: 65rem !important;
    }
}

.dark .large-bg-404-text {
    color: rgb(31 41 55);
}

/* Content Column - Centered on mobile */
.content-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    order: 2;
}

@media (min-width: 1024px) {
    .content-column {
        text-align: left;
        order: 1;
    }
}

/* Main Heading */
.main-heading {
    font-size: 2.25rem;
    font-family: 'Barlow', sans-serif;
    font-weight: 900;
    color: rgb(17 24 39);
    line-height: 1.2;
    animation: fadeInUp 0.6s ease-out 0.1s backwards;
}

@media (min-width: 768px) {
    .main-heading {
        font-size: 3rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

@media (min-width: 1024px) {
    .main-heading {
        font-size: 3.75rem;
    }
}

.dark .main-heading {
    color: white;
}

/* Body Text */
.body-text {
    font-size: 1rem;
    color: rgb(55 65 81);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    line-height: 1.625;
    animation: fadeInUp 0.6s ease-out 0.2s backwards;
}

@media (min-width: 768px) {
    .body-text {
        font-size: 1.125rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

.dark .body-text {
    color: rgb(209 213 219);
}

/* Button Wrapper - Centered on mobile */
.button-wrapper {
    display: flex;
    justify-content: center;
    animation: fadeInUp 0.6s ease-out 0.3s backwards;
}

@media (min-width: 1024px) {
    .button-wrapper {
        justify-content: flex-start;
    }
}

/* CTA Button */
.cta-button {
    display: inline-flex;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fe4135;
    color: white;
    font-weight: 600;
    font-size: 1.125rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
}

.cta-button:hover {
    background-color: rgba(254, 65, 53, 0.9);
    transform: scale(1.05);
}

/* Animation Column - Centered */
.animation-column {
    display: flex;
    justify-content: center;
    order: 1;
    position: relative;
}

@media (min-width: 1024px) {
    .animation-column {
        order: 2;
    }
}

/* Faded 404 behind animation - Increased size and repositioned */
.faded-404-container {
    position: absolute !important;
    inset: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    pointer-events: none !important;
    transform: translate(4rem, -12rem) !important;
}

.faded-404-text {
    font-size: 10rem !important;
    font-weight: 900 !important;
    font-family: 'Barlow', sans-serif !important;
    color: rgb(209 213 219) !important;
    user-select: none !important;
    opacity: 0.5 !important;
    transform: rotate(-12deg) !important;
    line-height: 1 !important;
}

@media (min-width: 768px) {
    .faded-404-text {
        font-size: 16rem !important;
    }
}

:root.dark .faded-404-text,
.dark .faded-404-text {
    color: rgb(55 65 81) !important;
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

/* Dark mode shadow adjustments */
@media (prefers-color-scheme: dark) {
    .cta-button {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
    }
}

/* Prevent horizontal scroll from large 404 */
body {
    overflow-x: hidden;
}
</style>