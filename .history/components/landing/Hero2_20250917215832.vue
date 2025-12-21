<template>
    <section
        class="relative w-full h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <!-- Desktop Layout -->
        <div class="hidden md:flex h-full items-center">
            <!-- Left Side - Content -->
            <div class="flex-1 flex items-center justify-center px-8 lg:px-16">
                <div class="max-w-lg text-center lg:text-left">
                    <h1 class="font-barlow-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-1">
                        Contact Us
                    </h1>
                    <div class="w-20 h-1 bg-red-500 mx-auto lg:mx-0 mb-6"></div>
                    <p class="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md">
                        Ready to discuss your project? Get in touch with our team of experts.
                    </p>
                </div>
            </div>

            <!-- Right Side - Lottie Animation -->
            <div class="flex-1 flex items-center justify-center">
                <div class="relative">
                    <!-- Subtle background circle for visual interest -->
                    <div class="absolute inset-0 bg-red-500/15 rounded-full transform scale-110"></div>
                    <DotLottieVue style="height: 400px; width: 400px" autoplay loop
                        src="https://lottie.host/9570133c-2003-42f9-8837-7df31d26106d/QSdJfTeuzt.lottie" />
                </div>
            </div>
        </div>

        <!-- Mobile Layout -->
        <div class="md:hidden h-full relative">
            <!-- Background overlay for better text contrast -->
            <div class="absolute inset-0 bg-black/20"></div>

            <!-- Lottie as background -->
            <div class="absolute inset-0 flex items-center justify-center opacity-30">
                <DotLottieVue style="height: 300px; width: 300px" autoplay loop
                    src="https://lottie.host/9570133c-2003-42f9-8837-7df31d26106d/QSdJfTeuzt.lottie" />
            </div>

            <!-- Content overlay -->
            <div class="relative z-10 h-full flex items-center justify-center px-6">
                <div class="text-center">
                    <h1 class="font-barlow-extrabold text-4xl text-white leading-tight mb-4">
                        Contact Us
                    </h1>
                    <div class="w-20 h-1 bg-red-500 mx-auto mb-4"></div>
                    <p class="text-lg text-gray-200 leading-relaxed max-w-sm mx-auto">
                        Get in touch with our team of experts
                    </p>
                </div>
            </div>
        </div>

        <!-- Decorative elements -->
        <div class="absolute top-8 right-8 w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
        <div class="absolute bottom-8 left-8 w-1.5 h-1.5 bg-red-500 rounded-full opacity-40"></div>

        <!-- Subtle geometric shapes for visual interest -->
        <div class="absolute top-1/4 right-1/4 w-32 h-32 border border-red-500/10 rounded-full hidden lg:block"></div>
        <div class="absolute bottom-1/3 left-1/4 w-24 h-24 border border-gray-400/20 rounded-full hidden lg:block">
        </div>
    </section>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

/* Full width section */
section {
    margin-left: calc(-50vw + 50%);
    width: 100vw;
}

/* Subtle hover effect on lottie container */
.relative:hover .absolute.inset-0 {
    transform: scale(115%);
    transition: transform 0.3s ease;
}

/* Responsive text scaling */
@media (min-width: 1024px) {
    .font-barlow-extrabold {
        letter-spacing: -0.02em;
    }
}
</style>