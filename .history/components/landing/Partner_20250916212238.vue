<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Background decorative elements -->
            <div
                class="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full -translate-y-32 translate-x-32 blur-3xl">
            </div>
            <div
                class="absolute bottom-0 left-0 w-80 h-80 bg-gray-900/5 dark:bg-white/5 rounded-full translate-y-24 -translate-x-24 blur-3xl">
            </div>

            <div class="relative z-10">
                <!-- Section Content -->
                <div class="text-center max-w-5xl mx-auto" ref="contentRef">
                    <!-- Small accent line above heading -->
                    <div class="w-16 h-0.5 bg-red-500 mx-auto mb-6 transform transition-all duration-700"
                        :class="{ 'w-24': isVisible }"></div>

                    <!-- Main heading -->
                    <h2
                        class="text-4xl md:text-5xl lg:text-6xl font-barlow font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
                        A Partner for
                        <span class="text-red-500 relative">
                            Growth
                            <!-- Subtle underline accent -->
                            <div class="absolute -bottom-2 left-0 w-full h-1 bg-red-500/20 rounded-full transform transition-all duration-700"
                                :class="{ 'scale-x-110': isVisible }"></div>
                        </span>
                    </h2>

                    <!-- Main content paragraph -->
                    <div class="relative mb-12">
                        <!-- Quote-like styling -->
                        <div class="absolute -top-6 -left-4 w-8 h-8 opacity-10">
                            <svg class="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                            </svg>
                        </div>

                        <p
                            class="text-xl md:text-2xl font-barlow-thin text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                            At Syntanium, we don't just execute projects — we enable progress. Our work fuels the
                            facilities that keep industries moving, economies growing, and communities thriving. With
                            every project, our goal is clear: to combine
                            <span class="font-semibold text-gray-900 dark:text-white">technical precision with practical
                                value</span>,
                            ensuring energy continues to flow safely and sustainably into the future.
                        </p>
                    </div>

                    <!-- CTA Button -->
                    <div class="flex justify-center" ref="ctaRef">
                        <NuxtLink to="/solutions"
                            class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-barlow font-bold text-white bg-red-500 rounded-xl hover:bg-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
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

                    <!-- Bottom decorative accent -->
                    <div class="flex justify-center mt-16">
                        <div class="flex items-center space-x-2">
                            <div class="w-3 h-3 bg-red-500 rounded-full transform transition-all duration-700"
                                :class="{ 'scale-125': isVisible }"></div>
                            <div class="w-12 h-px bg-gradient-to-r from-red-500/50 to-transparent"></div>
                            <div class="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                            <div class="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                            <div class="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                            <div class="w-12 h-px bg-gradient-to-l from-red-500/50 to-transparent"></div>
                            <div class="w-3 h-3 bg-red-500 rounded-full transform transition-all duration-700"
                                :class="{ 'scale-125': isVisible }"></div>
                        </div>
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

/* Custom letter spacing for large headings */
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

/* Apply animations when visible */
[ref="contentRef"] h2 {
    animation: fadeInUp 0.8s ease-out forwards;
}

[ref="contentRef"] p {
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
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

/* Focus styles for accessibility */
.group:focus {
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