<template>
    <section class="py-20 px-6 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header - Centered -->
            <div class="text-center mb-16" ref="headerRef">
                <!-- Small accent line above heading -->
                <div class="w-16 h-0.5 bg-[#00D4FF] mx-auto mb-4 transform transition-all duration-700"
                    :class="{ 'w-24': isVisible }"></div>

                <!-- Main heading with Barlow font -->
                <h2
                    class="text-3xl md:text-4xl lg:text-5xl font-barlow font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                    SOLUTIONS WE PROVIDE
                </h2>

                <!-- Subtitle -->
                <p
                    class="text-xl md:text-2xl font-barlow-thin text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                    We offer tailored solutions that help businesses operate efficiently, scale sustainably, and stay
                    competitive in changing markets.
                </p>

                <!-- Decorative elements -->
                <div class="flex items-center justify-center">
                    <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></div>
                    <div class="w-3 h-3 bg-[#00D4FF] rounded-full mx-4 transform transition-all duration-500"
                        :class="{ 'scale-125': isVisible }"></div>
                    <div class="w-20 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></div>
                </div>
            </div>

            <!-- Services Grid -->
            <div class="max-w-6xl mx-auto" ref="accordionRef">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Consulting Card -->
                    <NuxtLink to="#" class="group block">
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#00D4FF]/30 dark:hover:border-[#00D4FF]/30 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                            <!-- Image Container -->
                            <div class="h-48 overflow-hidden">
                                <img src="/assets/img/consulting-elevation.png" alt="Consulting"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <!-- Content -->
                            <div class="p-6 flex-1 flex flex-col">
                                <div class="flex items-center space-x-3 mb-3">
                                    <div class="w-2.5 h-2.5 bg-[#00D4FF] rounded-full flex-shrink-0"></div>
                                    <h3
                                        class="text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-[#00D4FF] transition-colors duration-300">
                                        Consulting
                                    </h3>
                                </div>
                                <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                    Strategy & Performance
                                </p>
                                <p class="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                                    Strategy, process optimization, and performance improvement for sustainable results.
                                </p>
                                <!-- CTA Arrow -->
                                <div class="mt-4 flex items-center text-[#00D4FF] font-semibold text-sm">
                                    Learn more
                                    <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>

                    <!-- Advisory Card -->
                    <NuxtLink to="#" class="group block">
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#00D4FF]/30 dark:hover:border-[#00D4FF]/30 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                            <!-- Image Container -->
                            <div class="h-48 overflow-hidden">
                                <img src="/assets/img/advisory-elevation.png" alt="Advisory"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <!-- Content -->
                            <div class="p-6 flex-1 flex flex-col">
                                <div class="flex items-center space-x-3 mb-3">
                                    <div class="w-2.5 h-2.5 bg-[#00D4FF] rounded-full flex-shrink-0"></div>
                                    <h3
                                        class="text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-[#00D4FF] transition-colors duration-300">
                                        Advisory
                                    </h3>
                                </div>
                                <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                    Strategic Guidance
                                </p>
                                <p class="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                                    Business continuity, impact assessment, and growth strategy support.
                                </p>
                                <!-- CTA Arrow -->
                                <div class="mt-4 flex items-center text-[#00D4FF] font-semibold text-sm">
                                    Learn more
                                    <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>

                    <!-- Training Card -->
                    <NuxtLink to="#" class="group block">
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#00D4FF]/30 dark:hover:border-[#00D4FF]/30 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                            <!-- Image Container -->
                            <div class="h-48 overflow-hidden">
                                <img src="/assets/img/training-elevation.png" alt="Training"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <!-- Content -->
                            <div class="p-6 flex-1 flex flex-col">
                                <div class="flex items-center space-x-3 mb-3">
                                    <div class="w-2.5 h-2.5 bg-[#00D4FF] rounded-full flex-shrink-0"></div>
                                    <h3
                                        class="text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-[#00D4FF] transition-colors duration-300">
                                        Training
                                    </h3>
                                </div>
                                <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                    Capacity Development
                                </p>
                                <p class="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                                    Practical programs designed to build leadership, management, and enterprise skills.
                                </p>
                                <!-- CTA Arrow -->
                                <div class="mt-4 flex items-center text-[#00D4FF] font-semibold text-sm">
                                    Learn more
                                    <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>

                    <!-- Monitoring & Evaluation Card -->
                    <NuxtLink to="#" class="group block">
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#00D4FF]/30 dark:hover:border-[#00D4FF]/30 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                            <!-- Image Container -->
                            <div class="h-48 overflow-hidden">
                                <img src="/assets/img/development-elevation.png" alt="Monitoring & Evaluation"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <!-- Content -->
                            <div class="p-6 flex-1 flex flex-col">
                                <div class="flex items-center space-x-3 mb-3">
                                    <div class="w-2.5 h-2.5 bg-[#00D4FF] rounded-full flex-shrink-0"></div>
                                    <h3
                                        class="text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-[#00D4FF] transition-colors duration-300">
                                        Monitoring & Evaluation
                                    </h3>
                                </div>
                                <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                    Results Measurement
                                </p>
                                <p class="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                                    Frameworks and systems that measure progress and demonstrate results.
                                </p>
                                <!-- CTA Arrow -->
                                <div class="mt-4 flex items-center text-[#00D4FF] font-semibold text-sm">
                                    Learn more
                                    <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>

                    <!-- Business Development Card -->
                    <NuxtLink to="#" class="group block lg:col-span-2">
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#00D4FF]/30 dark:hover:border-[#00D4FF]/30 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col lg:flex-row">
                            <!-- Image Container -->
                            <div class="lg:w-1/2 h-48 lg:h-auto overflow-hidden">
                                <img src="/assets/img/development-elevation.png" alt="Business Development"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <!-- Content -->
                            <div class="p-6 flex-1 flex flex-col justify-center">
                                <div class="flex items-center space-x-3 mb-3">
                                    <div class="w-2.5 h-2.5 bg-[#00D4FF] rounded-full flex-shrink-0"></div>
                                    <h3
                                        class="text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-[#00D4FF] transition-colors duration-300">
                                        Business Development
                                    </h3>
                                </div>
                                <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                    Growth & Partnerships
                                </p>
                                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Research, growth facilitation, and trade partnerships that open new opportunities.
                                </p>
                                <!-- CTA Arrow -->
                                <div class="mt-4 flex items-center text-[#00D4FF] font-semibold text-sm">
                                    Explore opportunities
                                    <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>

                <!-- Bottom decorative accent -->
                <div class="flex justify-center mt-12">
                    <div class="flex items-center space-x-3">
                        <div
                            class="w-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent">
                        </div>
                        <div class="w-2 h-2 bg-[#00D4FF] rounded-full"></div>
                        <div
                            class="w-16 h-px bg-gradient-to-r from-gray-300 dark:from-gray-600 via-[#00D4FF]/20 to-gray-300 dark:to-gray-600">
                        </div>
                        <div class="w-2 h-2 bg-[#00D4FF] rounded-full"></div>
                        <div
                            class="w-8 h-px bg-gradient-to-l from-transparent via-gray-300 dark:via-gray-600 to-transparent">
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
const headerRef = ref(null)
const accordionRef = ref(null)
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

    if (headerRef.value) observer.observe(headerRef.value)
    if (accordionRef.value) observer.observe(accordionRef.value)
})
</script>

<style scoped>
/* Import Barlow font */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;300;400;600;700;800;900&display=swap');

/* Apply Barlow font family */
.font-barlow {
    font-family: 'Barlow', sans-serif;
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

/* Staggered animation for grid items */
.grid>* {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
}

.grid>*:nth-child(1) {
    animation-delay: 0.1s;
}

.grid>*:nth-child(2) {
    animation-delay: 0.2s;
}

.grid>*:nth-child(3) {
    animation-delay: 0.3s;
}

.grid>*:nth-child(4) {
    animation-delay: 0.4s;
}

.grid>*:nth-child(5) {
    animation-delay: 0.5s;
}

/* Focus styles for accessibility */
a:focus {
    outline: 2px solid #00D4FF;
    outline-offset: 2px;
    border-radius: 0.75rem;
}

/* Enhance hover states */
.group:hover .w-2\.5 {
    transform: scale(1.1);
    transition: transform 0.2s ease;
}
</style>