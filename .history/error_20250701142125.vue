<template>
    <div class="min-h-screen bg-white flex flex-col relative overflow-hidden">
        <!-- Header with Logo -->
        <header class="relative z-20 p-6">
            <div class="max-w-4xl mx-auto flex justify-center">
                <img src="/assets/img/tekfolio-logo-final6.svg" alt="Tekfolio Logo" class="h-8 md:h-10" />
            </div>
        </header>

        <!-- Main Content Container -->
        <div class="flex-1 flex items-center justify-center relative">
            <!-- Large Background 404 -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                    class="text-[18rem] md:text-[25rem] font-bold text-gray-100 select-none opacity-20 tracking-wider">
                    404
                </span>
            </div>

            <!-- Content Grid -->
            <div class="relative z-10 max-w-4xl mx-auto px-6 w-full">
                <div class="grid lg:grid-cols-2 gap-10 items-center">
                    <!-- Left Column - Text Content -->
                    <div class="space-y-6">
                        <!-- Heading -->
                        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            Well, this is awkward.
                        </h1>

                        <!-- Body Text -->
                        <div class="text-base md:text-lg text-gray-600 space-y-3 leading-relaxed">
                            <p>
                                Looks like an <strong class="text-gray-900">error 404 situation</strong>.
                                It typically means the page doesn't exist. Or maybe it moved.
                                Or maybe the devs refactored it out of existence.
                            </p>
                            <p class="text-lg md:text-xl text-gray-700 font-medium">
                                Either way, let's help you find your way back.
                            </p>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex flex-col sm:flex-row gap-3">
                            <NuxtLink to="/"
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center">
                                Go Home
                            </NuxtLink>
                            <NuxtLink to="/work"
                                class="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center">
                                View Our Work
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Right Column - Animation -->
                    <div class="flex justify-center lg:justify-end relative">
                        <!-- Animation Container -->
                        <div class="relative">
                            <!-- Faded 404 behind animation -->
                            <div class="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                                <span
                                    class="text-[10rem] md:text-[14rem] font-bold text-gray-50 select-none opacity-15 tracking-wider">
                                    404
                                </span>
                            </div>

                            <!-- Lottie Animation -->
                            <div class="relative z-10">
                                <DotLottieVue style="height: 300px; width: 300px" autoplay loop
                                    src="/animations/confused-person.lottie" aria-label="Person looking confused"
                                    class="md:h-[350px] md:w-[350px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Small Corner 404 Badge -->
        <div class="absolute top-4 right-4 opacity-20 hidden md:block">
            <span class="text-3xl font-bold text-gray-400 select-none">
                404
            </span>
        </div>
    </div>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

// Set page meta for SEO and proper 404 handling
useHead({
    title: '404 - Page Not Found | Tekfolio',
    meta: [
        { name: 'description', content: 'The page you are looking for could not be found.' },
        { name: 'robots', content: 'noindex, nofollow' }
    ]
})

// Set proper HTTP status code
setResponseStatus(404)
</script>

<style scoped>
/* Google Blue color scheme */
.bg-blue-600 {
    background-color: #1a73e8;
}

.hover\:bg-blue-700:hover {
    background-color: #1557b0;
}

/* Subtle float animation for background 404 */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-15px) rotate(1deg);
    }
}

.absolute span {
    animation: float 12s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .text-\[18rem\] {
        font-size: 15rem;
    }

    .text-\[25rem\] {
        font-size: 20rem;
    }

    .text-\[10rem\] {
        font-size: 8rem;
    }

    .text-\[14rem\] {
        font-size: 10rem;
    }
}

@media (max-width: 768px) {
    .text-\[18rem\] {
        font-size: 12rem;
    }

    .text-\[25rem\] {
        font-size: 15rem;
    }

    .text-\[10rem\] {
        font-size: 6rem;
    }

    .text-\[14rem\] {
        font-size: 8rem;
    }
}

/* Responsive Lottie sizing */
@media (min-width: 768px) {
    .md\:h-\[350px\] {
        height: 350px;
    }

    .md\:w-\[350px\] {
        width: 350px;
    }
}
</style>