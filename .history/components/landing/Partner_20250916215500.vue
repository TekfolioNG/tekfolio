<template>
    <section class="py-16 px-8 md:px-12 lg:px-16 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div class="max-w-6xl mx-auto">
            <!-- Background decorative elements -->
            <div
                class="absolute top-0 right-0 w-80 h-80 bg-red-500/3 rounded-full -translate-y-20 translate-x-20 blur-3xl">
            </div>
            <div
                class="absolute bottom-0 left-0 w-72 h-72 bg-gray-900/3 dark:bg-white/3 rounded-full translate-y-16 -translate-x-16 blur-3xl">
            </div>

            <div class="relative z-10">
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Left Column - Image -->
                    <div class="lg:order-1 order-2 relative" ref="imageRef">
                        <div class="relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-700 hover:scale-105"
                            :class="{ 'rotate-1': isVisible }">
                            <!-- Image container -->
                            <div class="aspect-[4/5] relative">
                                <img src="/assets/img/who-we-are-syntanium.jpg" alt="Syntanium Energy Team and Values"
                                    class="w-full h-full object-cover" loading="lazy" />

                                <!-- Subtle overlay for depth -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent">
                                </div>
                            </div>

                            <!-- Floating accent elements -->
                            <div
                                class="absolute top-6 right-6 w-3 h-3 bg-red-500 rounded-full opacity-70 animate-pulse">
                            </div>
                            <div class="absolute bottom-8 left-8 w-2 h-2 bg-red-500 rounded-full opacity-50 animate-pulse"
                                style="animation-delay: 1s;"></div>
                        </div>

                        <!-- Background decorative shape -->
                        <div class="absolute -inset-3 bg-red-500/5 rounded-3xl transform transition-all duration-1000"
                            :class="{ '-rotate-1 scale-105': isVisible }"></div>
                    </div>

                    <!-- Right Column - Content -->
                    <div class="lg:order-2 order-1" ref="contentRef">
                        <!-- Header -->
                        <div class="mb-8">
                            <!-- Small accent line -->
                            <div class="w-16 h-0.5 bg-red-500 mb-4 transform transition-all duration-700"
                                :class="{ 'w-24': isVisible }"></div>

                            <h2
                                class="text-3xl md:text-4xl lg:text-5xl font-barlow font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                                A Partner for
                                <span class="text-red-500 relative">
                                    Growth
                                    <!-- Subtle underline accent -->
                                    <div class="absolute -bottom-1 left-0 w-full h-1 bg-red-500/20 rounded-full transform transition-all duration-700"
                                        :class="{ 'scale-x-110': isVisible }"></div>
                                </span>
                            </h2>

                            <!-- Decorative elements -->
                            <div class="flex items-center mb-6">
                                <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600">
                                </div>
                                <div class="w-2 h-2 bg-red-500 rounded-full mx-3 transform transition-all duration-500"
                                    :class="{ 'scale-125': isVisible }"></div>
                                <div class="w-12 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600">
                                </div>
                            </div>
                        </div>

                        <!-- Main Content -->
                        <div class="mb-8">
                            <p
                                class="text-lg md:text-xl font-barlow-thin text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                At Syntanium, we do more than deliver projects. We enable progress by staying true to
                                our core values of
                                <span class="font-semibold text-gray-900 dark:text-white">integrity, excellence, safety,
                                    innovation, and responsibility</span>.
                                These principles guide every step we take as we fuel the facilities that keep industries
                                moving, economies growing, and communities thriving.
                            </p>

                            <p
                                class="text-lg md:text-xl font-barlow-thin text-gray-700 dark:text-gray-300 leading-relaxed">
                                Each project reflects our focus on
                                <span class="text-red-500 font-medium">precision and lasting value</span>,
                                ensuring energy continues to flow safely and sustainably into the future.
                            </p>
                        </div>

                        <!-- CTA Button -->
                        <div ref="ctaRef">
                            <NuxtLink to="/solutions"
                                class="inline-flex items-center justify-center px-8 py-4 text-lg font-barlow font-bold text-white bg-red-500 rounded-xl hover:bg-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 dark:focus:ring-offset-gray-900 group">
                                <!-- Button background gradient -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>

                                <!-- Button content -->
                                <span class="relative flex items-center space-x-3">
                                    <span>Explore Our Solutions</span>
                                    <svg class="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </span>

                                <!-- Subtle shine effect -->
                                <div
                                    class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]">
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Bottom decorative accent -->
                <div class="flex justify-center mt-16">
                    <div class="flex items-center space-x-3">
                        <div class="w-3 h-3 bg-red-500 rounded-full transform transition-all duration-700"
                            :class="{ 'scale-125': isVisible }"></div>
                        <div class="w-16 h-px bg-gradient-to-r from-red-500/50 via-red-500/20 to-transparent"></div>
                        <div class="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                        <div class="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                        <div class="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                        <div class="w-16 h-px bg-gradient-to-l from-red-500/50 via-red-500/20 to-transparent"></div>
                        <div class="w-3 h-3 bg-red-500 rounded-full transform transition-all duration-700"
                            :class="{ 'scale-125': isVisible }"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Reactive references for animations
const contentRef = ref(null)
const imageRef = ref(null)
const ctaRef = ref(null)
const isVisible = ref(false)

// Intersection Observer for scroll animations
onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true
                }
            })
        },
        { threshold: 0.3 }
    )

    if (contentRef.value) observer.observe(contentRef.value)
    if (imageRef.value) observer.observe(imageRef.value)
    if (ctaRef.value) observer.observe(ctaRef.value)
})
</script>

<style scoped>
/* Import Barlow font */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;300;400;600;700;800;900&display=swap');

/* Apply Barlow font family */
.font-barlow {
    font-family: 'Barlow', sans-serif;
}

.font-barlow-thin {
    font-family: 'Barlow', sans-serif;
    font-weight: 300;
}

/* Custom letter spacing */
.tracking-tight {
    letter-spacing: -0.02em;
}

.leading-tight {
    line-height: 1.1;
}

/* Smooth entrance animations */
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

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.95) translateY(20px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

/* Apply entrance animations */
[ref="contentRef"] h2 {
    animation: fadeInUp 0.8s ease-out forwards;
}

[ref="contentRef"] p {
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
    opacity: 0;
}

[ref="imageRef"] {
    animation: fadeInRight 0.8s ease-out 0.1s forwards;
    opacity: 0;
}

[ref="ctaRef"] {
    animation: fadeInScale 0.8s ease-out 0.4s forwards;
    opacity: 0;
}

/* Enhanced button hover effects */
.group:hover .w-5 {
    animation: arrowBounce 0.6s ease-in-out infinite;
}

@keyframes arrowBounce {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(4px);
    }
}

/* Custom pulse animation */
@keyframes customPulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.4;
        transform: scale(0.9);
    }
}

.animate-pulse {
    animation: customPulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Focus styles for accessibility */
.group:focus,
a:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

/* Enhance text selection */
::selection {
    background-color: rgba(254, 65, 53, 0.2);
}

::-moz-selection {
    background-color: rgba(254, 65, 53, 0.2);
}
</style>