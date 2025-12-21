<template>
    <section class="py-20 px-6 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header - Centered -->
            <div class="text-center mb-16" ref="headerRef">
                <!-- Small accent line above heading -->
                <div class="w-16 h-0.5 bg-[#0099CC] mx-auto mb-4 transform transition-all duration-700"
                    :class="{ 'w-24': isVisible }"></div>

                <!-- Main heading with Barlow font -->
                <h2
                    class="text-2xl md:text-3xl lg:text-4xl font-barlow font-extrabold text-gray-900 mb-6 tracking-tight">
                    SOLUTIONS WE PROVIDE
                </h2>

                <!-- Subtitle -->
                <p class="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                    We offer tailored solutions that help businesses operate efficiently, scale sustainably, and stay
                    competitive in changing markets.
                </p>

                <!-- Decorative elements -->
                <div class="flex items-center justify-center">
                    <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
                    <div class="w-3 h-3 bg-[#0099CC] rounded-full mx-4 transform transition-all duration-500"
                        :class="{ 'scale-125': isVisible }"></div>
                    <div class="w-20 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
                </div>
            </div>

            <!-- Accordion Container -->
            <div class="max-w-5xl mx-auto" ref="accordionRef">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Consulting Panel -->
                    <div class="group">
                        <div
                            class="bg-gray-50 rounded-xl border border-gray-200 hover:border-[#0099CC]/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                            <button @click="togglePanel(0)"
                                class="w-full px-6 py-5 text-left flex items-start justify-between group focus:outline-none focus:ring-2 focus:ring-[#0099CC]/20 rounded-xl"
                                :class="{ 'bg-[#0099CC]/5': openPanel === 0 }">
                                <div class="flex-1 pr-4">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <div class="w-2.5 h-2.5 bg-[#0099CC] rounded-full flex-shrink-0"></div>
                                        <h3
                                            class="text-xl font-barlow font-bold text-gray-900 group-hover:text-[#0099CC] transition-colors duration-300">
                                            Consulting
                                        </h3>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <!-- Icon -->
                                    <img src="/assets/img/consulting-elevation.png" alt=""
                                        class="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                    <!-- Chevron -->
                                    <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-[#0099CC]/10 transition-all duration-200 transform"
                                        :class="{ 'rotate-180': openPanel === 0 }">
                                        <svg class="w-6 h-6 text-gray-700 group-hover:text-[#0099CC] transition-colors duration-200"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 0 ? '200px' : '0px' }">
                                <div class="px-6 pb-5 pt-1">
                                    <p class="text-base leading-relaxed text-gray-700 mb-4">
                                        Strategy, process optimization, and performance improvement for sustainable
                                        results.
                                    </p>
                                    <NuxtLink to="#"
                                        class="inline-flex items-center text-[#0099CC] font-semibold text-sm hover:gap-2 transition-all duration-300">
                                        <span>Learn More</span>
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Advisory Panel -->
                    <div class="group">
                        <div
                            class="bg-gray-50 rounded-xl border border-gray-200 hover:border-[#0099CC]/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                            <button @click="togglePanel(1)"
                                class="w-full px-6 py-5 text-left flex items-start justify-between group focus:outline-none focus:ring-2 focus:ring-[#0099CC]/20 rounded-xl"
                                :class="{ 'bg-[#0099CC]/5': openPanel === 1 }">
                                <div class="flex-1 pr-4">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <div class="w-2.5 h-2.5 bg-[#0099CC] rounded-full flex-shrink-0"></div>
                                        <h3
                                            class="text-xl font-barlow font-bold text-gray-900 group-hover:text-[#0099CC] transition-colors duration-300">
                                            Advisory
                                        </h3>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <!-- Icon -->
                                    <img src="/assets/img/advisory-elevation.png" alt=""
                                        class="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                    <!-- Chevron -->
                                    <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-[#0099CC]/10 transition-all duration-200 transform"
                                        :class="{ 'rotate-180': openPanel === 1 }">
                                        <svg class="w-6 h-6 text-gray-700 group-hover:text-[#0099CC] transition-colors duration-200"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 1 ? '200px' : '0px' }">
                                <div class="px-6 pb-5 pt-1">
                                    <p class="text-base leading-relaxed text-gray-700 mb-4">
                                        Business continuity, impact assessment, and growth strategy support.
                                    </p>
                                    <NuxtLink to="#"
                                        class="inline-flex items-center text-[#0099CC] font-semibold text-sm hover:gap-2 transition-all duration-300">
                                        <span>Learn More</span>
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Training Panel -->
                    <div class="group">
                        <div
                            class="bg-gray-50 rounded-xl border border-gray-200 hover:border-[#0099CC]/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                            <button @click="togglePanel(2)"
                                class="w-full px-6 py-5 text-left flex items-start justify-between group focus:outline-none focus:ring-2 focus:ring-[#0099CC]/20 rounded-xl"
                                :class="{ 'bg-[#0099CC]/5': openPanel === 2 }">
                                <div class="flex-1 pr-4">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <div class="w-2.5 h-2.5 bg-[#0099CC] rounded-full flex-shrink-0"></div>
                                        <h3
                                            class="text-xl font-barlow font-bold text-gray-900 group-hover:text-[#0099CC] transition-colors duration-300">
                                            Training
                                        </h3>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <!-- Icon -->
                                    <img src="/assets/img/training-elevation.png" alt=""
                                        class="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                    <!-- Chevron -->
                                    <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-[#0099CC]/10 transition-all duration-200 transform"
                                        :class="{ 'rotate-180': openPanel === 2 }">
                                        <svg class="w-6 h-6 text-gray-700 group-hover:text-[#0099CC] transition-colors duration-200"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 2 ? '200px' : '0px' }">
                                <div class="px-6 pb-5 pt-1">
                                    <p class="text-base leading-relaxed text-gray-700 mb-4">
                                        Practical programs designed to build leadership, management, and enterprise
                                        skills.
                                    </p>
                                    <NuxtLink to="#"
                                        class="inline-flex items-center text-[#0099CC] font-semibold text-sm hover:gap-2 transition-all duration-300">
                                        <span>Learn More</span>
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Monitoring & Evaluation Panel -->
                    <div class="group">
                        <div
                            class="bg-gray-50 rounded-xl border border-gray-200 hover:border-[#0099CC]/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                            <button @click="togglePanel(3)"
                                class="w-full px-6 py-5 text-left flex items-start justify-between group focus:outline-none focus:ring-2 focus:ring-[#0099CC]/20 rounded-xl"
                                :class="{ 'bg-[#0099CC]/5': openPanel === 3 }">
                                <div class="flex-1 pr-4">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <div class="w-2.5 h-2.5 bg-[#0099CC] rounded-full flex-shrink-0"></div>
                                        <h3
                                            class="text-xl font-barlow font-bold text-gray-900 group-hover:text-[#0099CC] transition-colors duration-300">
                                            Monitoring & Evaluation
                                        </h3>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <!-- Icon -->
                                    <img src="/assets/img/consulting-elevation.png" alt=""
                                        class="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                    <!-- Chevron -->
                                    <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-[#0099CC]/10 transition-all duration-200 transform"
                                        :class="{ 'rotate-180': openPanel === 3 }">
                                        <svg class="w-6 h-6 text-gray-700 group-hover:text-[#0099CC] transition-colors duration-200"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 3 ? '200px' : '0px' }">
                                <div class="px-6 pb-5 pt-1">
                                    <p class="text-base leading-relaxed text-gray-700 mb-4">
                                        Frameworks and systems that measure progress and demonstrate results.
                                    </p>
                                    <NuxtLink to="#"
                                        class="inline-flex items-center text-[#0099CC] font-semibold text-sm hover:gap-2 transition-all duration-300">
                                        <span>Learn More</span>
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Business Development Panel -->
                    <div class="group md:col-span-2">
                        <div
                            class="bg-gray-50 rounded-xl border border-gray-200 hover:border-[#0099CC]/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                            <button @click="togglePanel(4)"
                                class="w-full px-6 py-5 text-left flex items-start justify-between group focus:outline-none focus:ring-2 focus:ring-[#0099CC]/20 rounded-xl"
                                :class="{ 'bg-[#0099CC]/5': openPanel === 4 }">
                                <div class="flex-1 pr-4">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <div class="w-2.5 h-2.5 bg-[#0099CC] rounded-full flex-shrink-0"></div>
                                        <h3
                                            class="text-xl font-barlow font-bold text-gray-900 group-hover:text-[#0099CC] transition-colors duration-300">
                                            Business Development
                                        </h3>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <!-- Icon -->
                                    <img src="/assets/img/development-elevation.png" alt=""
                                        class="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                    <!-- Chevron -->
                                    <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-[#0099CC]/10 transition-all duration-200 transform"
                                        :class="{ 'rotate-180': openPanel === 4 }">
                                        <svg class="w-6 h-6 text-gray-700 group-hover:text-[#0099CC] transition-colors duration-200"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: openPanel === 4 ? '200px' : '0px' }">
                                <div class="px-6 pb-5 pt-1">
                                    <p class="text-base leading-relaxed text-gray-700 mb-4">
                                        Research, growth facilitation, and trade partnerships that open new
                                        opportunities.
                                    </p>
                                    <NuxtLink to="#"
                                        class="inline-flex items-center text-[#0099CC] font-semibold text-sm hover:gap-2 transition-all duration-300">
                                        <span>Learn More</span>
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom decorative accent -->
                <div class="flex justify-center mt-12">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                        <div class="w-2 h-2 bg-[#0099CC] rounded-full"></div>
                        <div class="w-16 h-px bg-gradient-to-r from-gray-300 via-[#0099CC]/20 to-gray-300"></div>
                        <div class="w-2 h-2 bg-[#0099CC] rounded-full"></div>
                        <div class="w-8 h-px bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
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

.grid>.group:nth-child(5) {
    animation-delay: 0.5s;
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