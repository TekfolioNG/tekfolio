<template>
    <section class="py-20 px-6 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16" ref="headerRef">
                <!-- Small accent line above heading -->
                <div class="w-16 h-0.5 bg-red-500 mx-auto mb-4 transform transition-all duration-700"
                    :class="{ 'w-24': isVisible }"></div>

                <!-- Main heading with Barlow font -->
                <h2
                    class="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-barlow font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                    WHAT SETS US APART
                </h2>

                <!-- Subtitle -->
                <p
                    class="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-light max-w-4xl mx-auto mb-8">
                    Our specialization spans the complete lifecycle of oil and gas facilities. This breadth allows us to
                    serve clients at every stage while upholding the highest standards of safety and performance.
                </p>

                <!-- Decorative elements -->
                <div class="flex items-center justify-center mb-8">
                    <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-500"></div>
                    <div class="w-3 h-3 bg-red-500 rounded-full mx-4 transform transition-all duration-500"
                        :class="{ 'scale-125': isVisible }"></div>
                    <div class="w-20 h-px bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-500"></div>
                </div>
            </div>

            <!-- Accordion Container -->
            <div class="max-w-5xl mx-auto" ref="accordionRef">
                <div class="space-y-4">
                    <!-- Safety First Panel -->
                    <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        :class="{ 'ring-2 ring-red-500/20': openPanel === 0 }">
                        <button @click="togglePanel(0)"
                            class="w-full px-8 py-6 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-inset"
                            :class="{ 'bg-red-50 dark:bg-red-900/10': openPanel === 0 }">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center transform transition-transform duration-300"
                                    :class="{ 'rotate-6': openPanel === 0 }">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        class="text-xl md:text-2xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-200">
                                        Safety First
                                    </h3>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Core Foundation</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 transform transition-transform duration-300"
                                :class="{ 'rotate-180': openPanel === 0 }">
                                <svg class="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </button>
                        <div class="overflow-hidden transition-all duration-500 ease-in-out"
                            :style="{ maxHeight: openPanel === 0 ? '200px' : '0px' }">
                            <div class="px-8 pb-6 pt-2">
                                <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                                    Protecting people, assets, and the environment is at the core of every project. Our
                                    comprehensive safety protocols and rigorous standards ensure that excellence never
                                    comes at the cost of well-being.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Sustainable Impact Panel -->
                    <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        :class="{ 'ring-2 ring-red-500/20': openPanel === 1 }">
                        <button @click="togglePanel(1)"
                            class="w-full px-8 py-6 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-inset"
                            :class="{ 'bg-red-50 dark:bg-red-900/10': openPanel === 1 }">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center transform transition-transform duration-300"
                                    :class="{ 'rotate-6': openPanel === 1 }">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        class="text-xl md:text-2xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-200">
                                        Sustainable Impact
                                    </h3>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Long-term Responsibility
                                    </p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 transform transition-transform duration-300"
                                :class="{ 'rotate-180': openPanel === 1 }">
                                <svg class="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </button>
                        <div class="overflow-hidden transition-all duration-500 ease-in-out"
                            :style="{ maxHeight: openPanel === 1 ? '200px' : '0px' }">
                            <div class="px-8 pb-6 pt-2">
                                <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                                    We deliver solutions that balance operational efficiency with long-term
                                    responsibility. Our commitment extends beyond immediate results to create lasting
                                    positive impact for future generations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Operational Excellence Panel -->
                    <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        :class="{ 'ring-2 ring-red-500/20': openPanel === 2 }">
                        <button @click="togglePanel(2)"
                            class="w-full px-8 py-6 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-inset"
                            :class="{ 'bg-red-50 dark:bg-red-900/10': openPanel === 2 }">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center transform transition-transform duration-300"
                                    :class="{ 'rotate-6': openPanel === 2 }">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        class="text-xl md:text-2xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-200">
                                        Operational Excellence
                                    </h3>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Comprehensive Expertise</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 transform transition-transform duration-300"
                                :class="{ 'rotate-180': openPanel === 2 }">
                                <svg class="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </button>
                        <div class="overflow-hidden transition-all duration-500 ease-in-out"
                            :style="{ maxHeight: openPanel === 2 ? '200px' : '0px' }">
                            <div class="px-8 pb-6 pt-2">
                                <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                                    Expertise across engineering, construction, and maintenance ensures reliable
                                    outcomes. Our integrated approach delivers seamless solutions throughout the entire
                                    project lifecycle.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Client Partnership Panel -->
                    <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        :class="{ 'ring-2 ring-red-500/20': openPanel === 3 }">
                        <button @click="togglePanel(3)"
                            class="w-full px-8 py-6 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-inset"
                            :class="{ 'bg-red-50 dark:bg-red-900/10': openPanel === 3 }">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center transform transition-transform duration-300"
                                    :class="{ 'rotate-6': openPanel === 3 }">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        class="text-xl md:text-2xl font-barlow font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-200">
                                        Client Partnership
                                    </h3>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Shared Growth</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 transform transition-transform duration-300"
                                :class="{ 'rotate-180': openPanel === 3 }">
                                <svg class="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </button>
                        <div class="overflow-hidden transition-all duration-500 ease-in-out"
                            :style="{ maxHeight: openPanel === 3 ? '200px' : '0px' }">
                            <div class="px-8 pb-6 pt-2">
                                <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                                    We build strong, performance-driven relationships focused on shared growth. Our
                                    collaborative approach ensures that your success becomes our success, creating
                                    partnerships that endure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom accent -->
                <div class="flex justify-center mt-12">
                    <div class="flex items-center space-x-2">
                        <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <div class="w-8 h-px bg-gradient-to-r from-red-500 to-transparent"></div>
                        <div class="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"
                            style="animation-delay: 0.5s;"></div>
                        <div class="w-8 h-px bg-gradient-to-l from-red-500 to-transparent"></div>
                        <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
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