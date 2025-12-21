<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-900 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-start">
                <!-- Left Column - Heading -->
                <div>
                    <h2 class="text-4xl md:text-5xl font-barlow font-bold text-gray-900 dark:text-white mb-6">
                        What Sets Us Apart
                    </h2>
                    <p class="text-xl md:text-2xl font-barlow-thin text-gray-700 dark:text-gray-300 leading-relaxed">
                        Our specialization spans the complete lifecycle of oil and gas facilities. This breadth allows
                        us to serve clients at every stage while upholding the highest standards of safety and
                        performance.
                    </p>
                </div>

                <!-- Right Column - Accordion -->
                <div class="space-y-4">
                    <!-- Safety First -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300"
                        :class="{ 'shadow-md': activeIndex === 0 }">
                        <button class="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                            @click="toggleAccordion(0)">
                            <span class="text-lg font-barlow font-medium text-gray-900 dark:text-white">
                                Safety First
                            </span>
                            <svg class="w-5 h-5 transition-transform duration-300 text-gray-500 dark:text-gray-400"
                                :class="{ 'rotate-180': activeIndex === 0 }" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="overflow-hidden transition-all duration-500"
                            :class="{ 'max-h-32': activeIndex === 0, 'max-h-0': activeIndex !== 0 }">
                            <div class="px-6 pb-4 text-gray-700 dark:text-gray-300">
                                <p class="leading-relaxed">Protecting people, assets, and the environment is at the core
                                    of every project.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Sustainable Impact -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300"
                        :class="{ 'shadow-md': activeIndex === 1 }">
                        <button class="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                            @click="toggleAccordion(1)">
                            <span class="text-lg font-barlow font-medium text-gray-900 dark:text-white">
                                Sustainable Impact
                            </span>
                            <svg class="w-5 h-5 transition-transform duration-300 text-gray-500 dark:text-gray-400"
                                :class="{ 'rotate-180': activeIndex === 1 }" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="overflow-hidden transition-all duration-500"
                            :class="{ 'max-h-32': activeIndex === 1, 'max-h-0': activeIndex !== 1 }">
                            <div class="px-6 pb-4 text-gray-700 dark:text-gray-300">
                                <p class="leading-relaxed">We deliver solutions that balance operational efficiency with
                                    long-term responsibility.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Operational Excellence -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300"
                        :class="{ 'shadow-md': activeIndex === 2 }">
                        <button class="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                            @click="toggleAccordion(2)">
                            <span class="text-lg font-barlow font-medium text-gray-900 dark:text-white">
                                Operational Excellence
                            </span>
                            <svg class="w-5 h-5 transition-transform duration-300 text-gray-500 dark:text-gray-400"
                                :class="{ 'rotate-180': activeIndex === 2 }" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="overflow-hidden transition-all duration-500"
                            :class="{ 'max-h-32': activeIndex === 2, 'max-h-0': activeIndex !== 2 }">
                            <div class="px-6 pb-4 text-gray-700 dark:text-gray-300">
                                <p class="leading-relaxed">Expertise across engineering, construction, and maintenance
                                    ensures reliable outcomes.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Client Partnership -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300"
                        :class="{ 'shadow-md': activeIndex === 3 }">
                        <button class="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                            @click="toggleAccordion(3)">
                            <span class="text-lg font-barlow font-medium text-gray-900 dark:text-white">
                                Client Partnership
                            </span>
                            <svg class="w-5 h-5 transition-transform duration-300 text-gray-500 dark:text-gray-400"
                                :class="{ 'rotate-180': activeIndex === 3 }" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="overflow-hidden transition-all duration-500"
                            :class="{ 'max-h-32': activeIndex === 3, 'max-h-0': activeIndex !== 3 }">
                            <div class="px-6 pb-4 text-gray-700 dark:text-gray-300">
                                <p class="leading-relaxed">We build strong, performance-driven relationships focused on
                                    shared growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const toggleAccordion = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
/* Import Barlow font with thin variant */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}

.font-barlow-thin {
    font-family: 'Barlow', sans-serif;
    font-weight: 300;
}

/* Custom focus styles for accessibility */
button:focus {
    outline: 2px solid #fe4135;
    outline-offset: 2px;
}

/* Hover effect for accordion items */
button:hover {
    background-color: rgba(254, 65, 53, 0.03);
}

.dark button:hover {
    background-color: rgba(254, 65, 53, 0.05);
}
</style>