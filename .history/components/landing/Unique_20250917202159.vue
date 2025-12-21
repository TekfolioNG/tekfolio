<template>
    <section class="py-20 px-6 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header - Centered -->
            <div class="text-center mb-16" ref="headerRef">
                <!-- Small accent line above heading -->
                <div class="w-16 h-0.5 bg-red-500 mx-auto mb-4 transform transition-all duration-700"
                    :class="{ 'w-24': isVisible }"></div>

                <!-- Main heading with Barlow font -->
                <h2
                    class="text-3xl md:text-4xl lg:text-5xl font-barlow font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                    WHAT SETS US APART
                </h2>

                <!-- Subtitle -->
                <p
                    class="text-xl md:text-2xl font-barlow-thin text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                    Our specialization spans the complete lifecycle of oil and gas facilities. This breadth allows us to
                    serve clients at every stage while upholding the highest standards of safety and performance.
                </p>

                <!-- Decorative elements -->
                <div class="flex items-center justify-center">
                    <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></div>
                    <div class="w-3 h-3 bg-red-500 rounded-full mx-4 transform transition-all duration-500"
                        :class="{ 'scale-125': isVisible }"></div>
                    <div class="w-20 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></div>
                </div>
            </div>

            <!-- Accordion Container - Optimized Layout -->
            <div class="max-w-5xl mx-auto" ref="accordionRef">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Safety First Panel -->
                    <div class="group">
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500/30 dark:hover:border-red-500/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                            <button @click="togglePanel(0)"
                                class="w-full px-6 py-5 text-left flex items-start justify-between group focus:outline-none focus:ring-2 focus:ring-red-500/20 rounded-xl"
                                :class="{ 'bg-red-50/50 dark:bg-red-900/5': openPanel === 0 }">
                                <div class="flex-1 pr-4">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <div class="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0"></div>
                                        <h3
                                            class="text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-300">
                                            Safety First
                                        </h3>
                                    </div>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        Core Foundation
                                    </p>
                                </div>
                                <div class="flex-shrink-0 transform transition-transform duration-300 mt-1"
                                    :class="{ 'rotate-180': openPanel === 0 }">
                                    <svg class="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 0 ? '150px' : '0px' }">
                                <div class="px-6 pb-5 pt-1">
                                    <p class="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                        Protecting people, assets, and the environment is at the core of every project.
                                        Our comprehensive safety protocols ensure excellence without compromise.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sustainable Impact Panel -->
                    <div class="group">
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500/30 dark:hover:border-red-500/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                            <button @click="togglePanel(1)"
                                class="w-full px-6 py-5 text-left flex items-start justify-between group focus:outline-none focus:ring-2 focus:ring-red-500/20 rounded-xl"
                                :class="{ 'bg-red-50/50 dark:bg-red-900/5': openPanel === 1 }">
                                <div class="flex-1 pr-4">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <div class="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0"></div>
                                        <h3
                                            class="text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-300">
                                            Sustainable Impact
                                        </h3>
                                    </div>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        Long-term Responsibility
                                    </p>
                                </div>
                                <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-red-100 dark:group-hover:bg-red-900/20 transition-all duration-200 transform"
                                    :class="{ 'rotate-180': openPanel === 0 }">
                                    <svg class="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-red-500 transition-colors duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 1 ? '150px' : '0px' }">
                                <div class="px-6 pb-5 pt-1">
                                    <p class="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                        We deliver solutions that balance operational efficiency with long-term
                                        responsibility, creating lasting positive impact for future generations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Operational Excellence Panel -->
                    <div class="group">
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500/30 dark:hover:border-red-500/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                            <button @click="togglePanel(2)"
                                class="w-full px-6 py-5 text-left flex items-start justify-between group focus:outline-none focus:ring-2 focus:ring-red-500/20 rounded-xl"
                                :class="{ 'bg-red-50/50 dark:bg-red-900/5': openPanel === 2 }">
                                <div class="flex-1 pr-4">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <div class="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0"></div>
                                        <h3
                                            class="text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-300">
                                            Operational Excellence
                                        </h3>
                                    </div>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        Comprehensive Expertise
                                    </p>
                                </div>
                                <div class="flex-shrink-0 transform transition-transform duration-300 mt-1"
                                    :class="{ 'rotate-180': openPanel === 2 }">
                                    <svg class="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 2 ? '150px' : '0px' }">
                                <div class="px-6 pb-5 pt-1">
                                    <p class="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                        Expertise across engineering, construction, and maintenance ensures reliable
                                        outcomes through integrated solutions spanning the entire project lifecycle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Client Partnership Panel -->
                    <div class="group">
                        <div
                            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500/30 dark:hover:border-red-500/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                            <button @click="togglePanel(3)"
                                class="w-full px-6 py-5 text-left flex items-start justify-between group focus:outline-none focus:ring-2 focus:ring-red-500/20 rounded-xl"
                                :class="{ 'bg-red-50/50 dark:bg-red-900/5': openPanel === 3 }">
                                <div class="flex-1 pr-4">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <div class="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0"></div>
                                        <h3
                                            class="text-xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-300">
                                            Client Partnership
                                        </h3>
                                    </div>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        Shared Growth Focus
                                    </p>
                                </div>
                                <div class="flex-shrink-0 transform transition-transform duration-300 mt-1"
                                    :class="{ 'rotate-180': openPanel === 3 }">
                                    <svg class="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 3 ? '150px' : '0px' }">
                                <div class="px-6 pb-5 pt-1">
                                    <p class="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                        We build strong, performance-driven relationships focused on shared growth,
                                        ensuring collaborative partnerships that deliver mutual success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom decorative accent -->
                <div class="flex justify-center mt-12">
                    <div class="flex items-center space-x-3">
                        <div
                            class="w-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent">
                        </div>
                        <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div
                            class="w-16 h-px bg-gradient-to-r from-gray-300 dark:from-gray-600 via-red-500/20 to-gray-300 dark:to-gray-600">
                        </div>
                        <div class="w-2 h-2 bg-red-500 rounded-full"></div>
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

/* Staggered animation for accordion items */
.grid>.group {
    animation: fadeInUp 0.6s ease-out forwards;
}

.grid>.group:nth-child(1) {
    animation-delay: 0.1s;
}

.grid>.group:nth-child(2) {
    animation-delay: 0.2s;
}

.grid>.group:nth-child(3) {
    animation-delay: 0.3s;
}

.grid>.group:nth-child(4) {
    animation-delay: 0.4s;
}

/* Focus styles for accessibility */
button:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

/* Enhance hover states */
.group:hover .w-2\.5 {
    transform: scale(1.1);
    transition: transform 0.2s ease;
}
</style>