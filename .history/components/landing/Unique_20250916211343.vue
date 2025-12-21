<template>
    <section class="py-20 px-6 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                <!-- Left Column - Accordion -->
                <div class="" ref="accordionRef">
                    <div class="space-y-3">
                        <!-- Safety First Panel -->
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden">
                            <button @click="togglePanel(0)"
                                class="w-full px-6 py-4 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-red-500/20"
                                :class="{ 'bg-gray-50 dark:bg-gray-800': openPanel === 0 }">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                                    <h3
                                        class="text-lg md:text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-200">
                                        Safety First
                                    </h3>
                                </div>
                                <div class="flex-shrink-0 transform transition-transform duration-300"
                                    :class="{ 'rotate-180': openPanel === 0 }">
                                    <svg class="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 0 ? '120px' : '0px' }">
                                <div class="px-6 pb-4 pt-2">
                                    <p class="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                        Protecting people, assets, and the environment is at the core of every project.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Sustainable Impact Panel -->
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden">
                            <button @click="togglePanel(1)"
                                class="w-full px-6 py-4 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-red-500/20"
                                :class="{ 'bg-gray-50 dark:bg-gray-800': openPanel === 1 }">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                                    <h3
                                        class="text-lg md:text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-200">
                                        Sustainable Impact
                                    </h3>
                                </div>
                                <div class="flex-shrink-0 transform transition-transform duration-300"
                                    :class="{ 'rotate-180': openPanel === 1 }">
                                    <svg class="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 1 ? '120px' : '0px' }">
                                <div class="px-6 pb-4 pt-2">
                                    <p class="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                        We deliver solutions that balance operational efficiency with long-term
                                        responsibility.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Operational Excellence Panel -->
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden">
                            <button @click="togglePanel(2)"
                                class="w-full px-6 py-4 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-red-500/20"
                                :class="{ 'bg-gray-50 dark:bg-gray-800': openPanel === 2 }">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                                    <h3
                                        class="text-lg md:text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-200">
                                        Operational Excellence
                                    </h3>
                                </div>
                                <div class="flex-shrink-0 transform transition-transform duration-300"
                                    :class="{ 'rotate-180': openPanel === 2 }">
                                    <svg class="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 2 ? '120px' : '0px' }">
                                <div class="px-6 pb-4 pt-2">
                                    <p class="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                        Expertise across engineering, construction, and maintenance ensures reliable
                                        outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Client Partnership Panel -->
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden">
                            <button @click="togglePanel(3)"
                                class="w-full px-6 py-4 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-red-500/20"
                                :class="{ 'bg-gray-50 dark:bg-gray-800': openPanel === 3 }">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                                    <h3
                                        class="text-lg md:text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-200">
                                        Client Partnership
                                    </h3>
                                </div>
                                <div class="flex-shrink-0 transform transition-transform duration-300"
                                    :class="{ 'rotate-180': openPanel === 3 }">
                                    <svg class="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 3 ? '120px' : '0px' }">
                                <div class="px-6 pb-4 pt-2">
                                    <p class="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                        We build strong, performance-driven relationships focused on shared growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Header and Subtitle -->
                <div class="" ref="headerRef">
                    <!-- Section Header -->
                    <div class="lg:text-left text-center">
                        <!-- Small accent line above heading -->
                        <div class="w-16 h-0.5 bg-red-500 lg:mx-0 mx-auto mb-4 transform transition-all duration-700"
                            :class="{ 'w-24': isVisible }"></div>

                        <!-- Main heading with Barlow font -->
                        <h2
                            class="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-barlow font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                            WHAT SETS US APART
                        </h2>

                        <!-- Subtitle -->
                        <p
                            class="text-xl md:text-2xl font-barlow-thin text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Our specialization spans the complete lifecycle of oil and gas facilities. This breadth
                            allows us to serve clients at every stage while upholding the highest standards of safety
                            and performance.
                        </p>

                        <!-- Decorative elements -->
                        <div class="flex items-center lg:justify-start justify-center mt-8">
                            <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></div>
                            <div class="w-3 h-3 bg-red-500 rounded-full mx-4 transform transition-all duration-500"
                                :class="{ 'scale-125': isVisible }"></div>
                            <div class="w-20 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Reactive references for animations and state
const headerRef = ref(null)
const accordionRef = ref(null)
const isVisible = ref(false)
const openPanel = ref(null)

// Toggle panel function
const togglePanel = (panelIndex) => {
    openPanel.value = openPanel.value === panelIndex ? null : panelIndex
}

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
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600;700;800;900&display=swap');

/* Apply Barlow font family */
.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Custom letter spacing for large headings */
.tracking-tight {
    letter-spacing: -0.02em;
}

/* Enhanced shadow for more depth */
.shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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

/* Staggered animation for accordion items */
.space-y-4>* {
    animation: fadeInUp 0.6s ease-out forwards;
}

.space-y-4>*:nth-child(1) {
    animation-delay: 0.1s;
}

.space-y-4>*:nth-child(2) {
    animation-delay: 0.2s;
}

.space-y-4>*:nth-child(3) {
    animation-delay: 0.3s;
}

.space-y-4>*:nth-child(4) {
    animation-delay: 0.4s;
}

/* Custom pulse animation */
@keyframes customPulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.5;
        transform: scale(0.8);
    }
}

.animate-pulse {
    animation: customPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Focus styles for accessibility */
button:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}
</style>