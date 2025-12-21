<template>
    <section class="py-16 px-8 md:px-12 lg:px-16 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div class="max-w-6xl mx-auto">
            <!-- Background decorative elements -->
            <div
                class="absolute top-0 right-0 w-96 h-96 bg-red-500/3 rounded-full -translate-y-32 translate-x-32 blur-3xl">
            </div>
            <div
                class="absolute bottom-0 left-0 w-80 h-80 bg-gray-900/3 dark:bg-white/3 rounded-full translate-y-24 -translate-x-24 blur-3xl">
            </div>

            <div class="relative z-10">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Left Column - Content -->
                    <div class="lg:order-1 order-2" ref="contentRef">
                        <!-- Core Values Header -->
                        <div class="mb-8">
                            <!-- Small accent line -->
                            <div class="w-12 h-0.5 bg-red-500 mb-3 transform transition-all duration-700"
                                :class="{ 'w-16': isVisible }"></div>

                            <h2
                                class="text-2xl md:text-3xl font-barlow font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
                                Core Values
                            </h2>

                            <p class="text-base font-barlow-thin text-gray-700 dark:text-gray-300 leading-relaxed">
                                At Syntanium, our work is guided by principles that shape how we operate, collaborate,
                                and deliver value across the energy industry.
                            </p>
                        </div>

                        <!-- Values List -->
                        <div class="space-y-5">
                            <!-- Integrity -->
                            <div class="flex items-start space-x-4 group">
                                <div
                                    class="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3 transform transition-transform duration-300 group-hover:scale-125">
                                </div>
                                <div>
                                    <h3 class="text-base font-barlow font-bold text-gray-900 dark:text-white mb-1">
                                        Integrity
                                    </h3>
                                    <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        We act with transparency and honesty, building trust with every client and
                                        partner.
                                    </p>
                                </div>
                            </div>

                            <!-- Excellence -->
                            <div class="flex items-start space-x-4 group">
                                <div
                                    class="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3 transform transition-transform duration-300 group-hover:scale-125">
                                </div>
                                <div>
                                    <h3 class="text-base font-barlow font-bold text-gray-900 dark:text-white mb-1">
                                        Excellence
                                    </h3>
                                    <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        We hold ourselves to the highest standards, ensuring reliable outcomes and
                                        continuous improvement.
                                    </p>
                                </div>
                            </div>

                            <!-- Safety First -->
                            <div class="flex items-start space-x-4 group">
                                <div
                                    class="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3 transform transition-transform duration-300 group-hover:scale-125">
                                </div>
                                <div>
                                    <h3 class="text-base font-barlow font-bold text-gray-900 dark:text-white mb-1">
                                        Safety First
                                    </h3>
                                    <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Protecting people, the environment, and assets is a responsibility we uphold in
                                        every project.
                                    </p>
                                </div>
                            </div>

                            <!-- Innovation -->
                            <div class="flex items-start space-x-4 group">
                                <div
                                    class="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3 transform transition-transform duration-300 group-hover:scale-125">
                                </div>
                                <div>
                                    <h3 class="text-base font-barlow font-bold text-gray-900 dark:text-white mb-1">
                                        Innovation
                                    </h3>
                                    <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        We embrace new ideas and smarter approaches that fuel performance and industry
                                        progress.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- CTA Button -->
                        <div class="mt-8" ref="ctaRef">
                            <NuxtLink to="/solutions"
                                class="inline-flex items-center justify-center px-6 py-3 text-base font-barlow font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 dark:focus:ring-offset-gray-900 group">
                                <span class="flex items-center space-x-2">
                                    <span>Explore Our Solutions</span>
                                    <svg class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </span>
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Right Column - Image -->
                    <div class="lg:order-2 order-1 relative" ref="imageRef">
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105"
                            :class="{ 'rotate-1': isVisible }">
                            <!-- Image container -->
                            <div class="aspect-[4/5] relative max-w-md mx-auto">
                                <img src="/assets/img/who-we-are-syntanium.jpg" alt="Syntanium Energy Team and Values"
                                    class="w-full h-full object-cover" loading="lazy" />

                                <!-- Overlay gradient for better text contrast if needed -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent">
                                </div>
                            </div>

                            <!-- Floating accent elements -->
                            <div
                                class="absolute top-6 right-6 w-3 h-3 bg-red-500 rounded-full opacity-80 animate-pulse">
                            </div>
                            <div class="absolute bottom-8 left-8 w-2 h-2 bg-red-500 rounded-full opacity-60 animate-pulse"
                                style="animation-delay: 1s;"></div>
                        </div>

                        <!-- Background shape -->
                        <div class="absolute -inset-4 bg-red-500/5 rounded-3xl transform transition-all duration-1000"
                            :class="{ '-rotate-2 scale-105': isVisible }"></div>
                    </div>
                </div>

                <!-- Partner for Growth Section -->
                <div class="text-center mt-16 max-w-4xl mx-auto" ref="partnerRef">
                    <!-- Small accent line -->
                    <div class="w-16 h-0.5 bg-red-500 mx-auto mb-4 transform transition-all duration-700"
                        :class="{ 'w-24': isVisible }"></div>

                    <h2
                        class="text-2xl md:text-3xl lg:text-4xl font-barlow font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        A Partner for
                        <span class="text-red-500">Growth</span>
                    </h2>

                    <p class="text-base md:text-lg font-barlow-thin text-gray-700 dark:text-gray-300 leading-relaxed">
                        We don't just execute projects — we enable progress. Our work fuels the facilities that keep
                        industries moving, economies growing, and communities thriving.
                    </p>

                    <!-- Bottom decorative accent -->
                    <div class="flex justify-center mt-8">
                        <div class="flex items-center space-x-2">
                            <div class="w-3 h-3 bg-red-500 rounded-full transform transition-all duration-700"
                                :class="{ 'scale-125': isVisible }"></div>
                            <div class="w-12 h-px bg-gradient-to-r from-red-500/50 to-transparent"></div>
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
const imageRef = ref(null)
const ctaRef = ref(null)
const partnerRef = ref(null)
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
    if (partnerRef.value) observer.observe(partnerRef.value)
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

/* Smooth entrance animations */
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

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Staggered animations for values */
.space-y-6>*:nth-child(1) {
    animation: fadeInLeft 0.6s ease-out 0.1s forwards;
    opacity: 0;
}

.space-y-6>*:nth-child(2) {
    animation: fadeInLeft 0.6s ease-out 0.2s forwards;
    opacity: 0;
}

.space-y-6>*:nth-child(3) {
    animation: fadeInLeft 0.6s ease-out 0.3s forwards;
    opacity: 0;
}

.space-y-6>*:nth-child(4) {
    animation: fadeInLeft 0.6s ease-out 0.4s forwards;
    opacity: 0;
}

/* Image animation */
[ref="imageRef"] {
    animation: fadeInRight 0.8s ease-out 0.2s forwards;
    opacity: 0;
}

/* Focus styles for accessibility */
.group:focus,
a:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

/* Custom pulse animation */
@keyframes customPulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.6;
        transform: scale(0.9);
    }
}

.animate-pulse {
    animation: customPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>