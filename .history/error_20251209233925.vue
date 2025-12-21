<template>
    <div class="min-h-screen bg-white flex flex-col relative overflow-hidden">
        <!-- Header with Logo -->
        <header class="relative z-20 p-6 md:p-8">
            <NuxtLink to="/" class="logo-mobile-center">
                <div class="max-w-7xl mx-auto flex justify-center">
                    <img src="/assets/img/tekfolio.png" alt="Tekfolio Logo" class="h-16 md:h-16" />
                </div>
            </NuxtLink>
        </header>


        <!-- Main Content Container -->
        <div class="flex-1 flex items-center justify-center relative">
            <!-- Large Background 404 - Slightly increased size, moved up and right -->
            <div
                class="absolute inset-0 flex items-center justify-center pointer-events-none transform translate-x-12 -translate-y-16">
                <span
                    class="text-[27rem] md:text-[38rem] font-bold text-gray-100 select-none opacity-20 tracking-wider">
                    404
                </span>
            </div>


            <!-- Content Grid -->
            <div class="relative z-10 max-w-6xl mx-auto px-8 md:px-16 lg:px-24 w-full">
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <!-- Left Column - Text Content -->
                    <div class="space-y-6">
                        <!-- Heading -->
                        <h1
                            class="text-3xl md:text-5xl lg:text-5xl font-black text-gray-900 leading-tight barlow-condensed">
                            Well, this is awkward.
                        </h1>


                        <!-- Body Text - Slightly reduced size -->
                        <div class="text-sm md:text-base lg:text-lg text-gray-900 space-y-3 leading-relaxed">
                            <p>
                                Looks like an <strong class="text-gray-900">error 404 situation</strong>.
                                It means this page doesn't exist. Or maybe it moved.
                                Or maybe the devs refactored it out of existence.
                            </p>
                            <p class="text-base md:text-lg lg:text-xl text-gray-900 font-medium">
                                Either way, let's help you find your way back.
                            </p>
                        </div>


                        <!-- Action Buttons -->
                        <div class="flex flex-col sm:flex-row gap-3">
                            <NuxtLink to="/"
                                class="bg-[#01348F] hover:bg-[#0078d4] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center text-sm">
                                Go Home
                            </NuxtLink>
                            <NuxtLink to="/our-work"
                                class="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center text-sm shadow-md hover:shadow-lg border border-gray-200">
                                View Our Work
                            </NuxtLink>
                            <NuxtLink to="/contact"
                                class="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center text-sm shadow-md hover:shadow-lg border border-gray-200">
                                Contact Us
                            </NuxtLink>
                        </div>
                    </div>


                    <!-- Right Column - Animation -->
                    <div class="flex justify-center lg:justify-end relative">
                        <!-- Animation Container -->
                        <div class="relative w-80 h-80 md:w-96 md:h-96">
                            <!-- Faded 404 directly behind animation -->
                            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span
                                    class="text-9xl md:text-[10rem] font-black text-gray-300 select-none opacity-60 tracking-wider transform -rotate-8 translate-x-12 -translate-y-48 barlow-condensed">
                                    404
                                </span>
                            </div>


                            <!-- Lottie Animation -->
                            <div class="relative z-10 w-full h-full flex items-center justify-center">
                                <DotLottieVue style="height: 400px; width: 400px" autoplay loop
                                    src="/animations/confused-person.lottie" aria-label="Person looking confused"
                                    class="md:h-80 md:w-80" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Small Corner 404 Badge -->
        <div class="absolute top-6 right-6 opacity-20 hidden md:block">
            <span class="text-4xl font-bold text-gray-400 select-none">
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
/* Import Barlow Condensed font */


.barlow-condensed {
    font-family: 'Barlow Condensed', sans-serif;
}


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
        transform: translateY(-20px) rotate(2deg);
    }
}


.absolute span {
    animation: float 12s ease-in-out infinite;
}


/* Responsive adjustments - Updated for new sizes */
@media (max-width: 1024px) {
    .text-\[27rem\] {
        font-size: 22rem;
    }


    .text-\[38rem\] {
        font-size: 28rem;
    }


    .text-\[12rem\] {
        font-size: 10rem;
    }


    .text-\[16rem\] {
        font-size: 12rem;
    }
}


@media (max-width: 768px) {
    .text-\[27rem\] {
        font-size: 17rem;
    }


    .text-\[38rem\] {
        font-size: 20rem;
    }


    .text-\[12rem\] {
        font-size: 8rem;
    }


    .text-\[16rem\] {
        font-size: 10rem;
    }
}


/* Responsive Lottie sizing */
@media (min-width: 768px) {
    .md\:h-\[500px\] {
        height: 500px;
    }


    .md\:w-\[500px\] {
        width: 500px;
    }
}
</style>