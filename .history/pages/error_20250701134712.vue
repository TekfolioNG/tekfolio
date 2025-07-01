<template>
    <div class="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
        <!-- Background 404 Watermark -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span class="text-[20rem] font-bold text-gray-50 select-none opacity-40 tracking-wider">
                404
            </span>
        </div>

        <!-- Main Content -->
        <div class="relative z-10 text-center px-4 max-w-2xl mx-auto">
            <!-- Lottie Animation -->
            <div class="mb-8 flex justify-center">
                <DotLottieVue style="height: 300px; width: 300px" autoplay loop src="/animations/confused-person.lottie"
                    aria-label="Person looking confused" />
            </div>

            <!-- Heading -->
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Well, this is awkward.
            </h1>

            <!-- Body Text -->
            <div class="text-lg text-gray-600 mb-8 space-y-4 leading-relaxed">
                <p>
                    Looks like an <strong class="text-gray-900">error 404 situation</strong>.
                    It typically means the page doesn't exist. Or maybe it moved.
                    Or maybe the devs refactored it out of existence.
                </p>
                <p class="text-xl text-gray-700 font-medium">
                    Either way, let's help you find your way back.
                </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <NuxtLink to="/"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 min-w-[140px]">
                    Go Home
                </NuxtLink>
                <NuxtLink to="/work"
                    class="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 min-w-[140px]">
                    View Our Work
                </NuxtLink>
                <NuxtLink to="/contact"
                    class="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 min-w-[140px]">
                    Contact Us
                </NuxtLink>
            </div>
        </div>

        <!-- Corner 404 Badge -->
        <div class="absolute top-8 right-8 opacity-30">
            <span class="text-6xl font-bold text-gray-400 select-none">
                404
            </span>
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
/* Custom styles for enhanced visual appeal */
.text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Subtle animation for the watermark */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-10px) rotate(1deg);
    }
}

.absolute span:first-child {
    animation: float 8s ease-in-out infinite;
}

/* Responsive typography */
@media (max-width: 640px) {
    .text-\[20rem\] {
        font-size: 12rem;
    }
}
</style>