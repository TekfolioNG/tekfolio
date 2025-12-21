<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-900 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <!-- Small accent line above heading -->
                <div class="w-16 h-0.5 bg-red-500 mx-auto mb-6" data-aos="fade-right" data-aos-duration="800"></div>

                <!-- Main heading with Barlow font -->
                <h2 class="text-5xl md:text-6xl lg:text-5xl font-barlow font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight"
                    data-aos="fade-up" data-aos-duration="800">
                    WHAT SETS US APART
                </h2>

                <!-- Decorative elements -->
                <div class="flex items-center justify-center mb-12" data-aos="fade-left" data-aos-duration="800">
                    <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></div>
                    <div class="w-3 h-3 bg-red-500 rounded-full mx-4"></div>
                    <div class="w-20 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></div>
                </div>
            </div>

            <!-- Intro Text -->
            <div class="max-w-3xl mx-auto mb-16 text-center" data-aos="fade-up" data-aos-duration="800"
                data-aos-delay="200">
                <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                    Our specialization spans the complete lifecycle of oil and gas facilities. This breadth allows us to
                    serve clients at every stage while upholding the highest standards of safety and performance.
                </p>
            </div>

            <!-- Accordion -->
            <div class="max-w-4xl mx-auto space-y-4">
                <!-- Safety First -->
                <div class="accordion-item bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300"
                    :class="{ 'shadow-lg': activeIndex === 0 }" data-aos="fade-up" data-aos-duration="800"
                    data-aos-delay="300">
                    <button class="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center"
                        @click="toggleAccordion(0)">
                        <span class="text-lg md:text-xl font-barlow font-bold text-gray-900 dark:text-white">
                            <span class="text-red-500 mr-2">●</span> Safety First
                        </span>
                        <svg class="w-5 h-5 transition-transform duration-300 text-red-500"
                            :class="{ 'rotate-180': activeIndex === 0 }" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="accordion-content overflow-hidden transition-all duration-500"
                        :class="{ 'max-h-96': activeIndex === 0, 'max-h-0': activeIndex !== 0 }">
                        <div class="px-6 pb-5 pt-2 text-gray-700 dark:text-gray-300">
                            <p class="text-lg leading-relaxed">Protecting people, assets, and the environment is at the
                                core of every project.</p>
                        </div>
                    </div>
                </div>

                <!-- Sustainable Impact -->
                <div class="accordion-item bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300"
                    :class="{ 'shadow-lg': activeIndex === 1 }" data-aos="fade-up" data-aos-duration="800"
                    data-aos-delay="400">
                    <button class="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center"
                        @click="toggleAccordion(1)">
                        <span class="text-lg md:text-xl font-barlow font-bold text-gray-900 dark:text-white">
                            <span class="text-red-500 mr-2">●</span> Sustainable Impact
                        </span>
                        <svg class="w-5 h-5 transition-transform duration-300 text-red-500"
                            :class="{ 'rotate-180': activeIndex === 1 }" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="accordion-content overflow-hidden transition-all duration-500"
                        :class="{ 'max-h-96': activeIndex === 1, 'max-h-0': activeIndex !== 1 }">
                        <div class="px-6 pb-5 pt-2 text-gray-700 dark:text-gray-300">
                            <p class="text-lg leading-relaxed">We deliver solutions that balance operational efficiency
                                with long-term responsibility.</p>
                        </div>
                    </div>
                </div>

                <!-- Operational Excellence -->
                <div class="accordion-item bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300"
                    :class="{ 'shadow-lg': activeIndex === 2 }" data-aos="fade-up" data-aos-duration="800"
                    data-aos-delay="500">
                    <button class="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center"
                        @click="toggleAccordion(2)">
                        <span class="text-lg md:text-xl font-barlow font-bold text-gray-900 dark:text-white">
                            <span class="text-red-500 mr-2">●</span> Operational Excellence
                        </span>
                        <svg class="w-5 h-5 transition-transform duration-300 text-red-500"
                            :class="{ 'rotate-180': activeIndex === 2 }" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="accordion-content overflow-hidden transition-all duration-500"
                        :class="{ 'max-h-96': activeIndex === 2, 'max-h-0': activeIndex !== 2 }">
                        <div class="px-6 pb-5 pt-2 text-gray-700 dark:text-gray-300">
                            <p class="text-lg leading-relaxed">Expertise across engineering, construction, and
                                maintenance ensures reliable outcomes.</p>
                        </div>
                    </div>
                </div>

                <!-- Client Partnership -->
                <div class="accordion-item bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300"
                    :class="{ 'shadow-lg': activeIndex === 3 }" data-aos="fade-up" data-aos-duration="800"
                    data-aos-delay="600">
                    <button class="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center"
                        @click="toggleAccordion(3)">
                        <span class="text-lg md:text-xl font-barlow font-bold text-gray-900 dark:text-white">
                            <span class="text-red-500 mr-2">●</span> Client Partnership
                        </span>
                        <svg class="w-5 h-5 transition-transform duration-300 text-red-500"
                            :class="{ 'rotate-180': activeIndex === 3 }" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="accordion-content overflow-hidden transition-all duration-500"
                        :class="{ 'max-h-96': activeIndex === 3, 'max-h-0': activeIndex !== 3 }">
                        <div class="px-6 pb-5 pt-2 text-gray-700 dark:text-gray-300">
                            <p class="text-lg leading-relaxed">We build strong, performance-driven relationships focused
                                on shared growth.</p>
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

/* Smooth transition for accordion items */
.accordion-item {
    transition: all 0.3s ease;
}

.accordion-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Custom focus styles for accessibility */
button:focus {
    outline: 2px solid #ef4444;
    outline-offset: 2px;
}

/* Dark mode adjustments */
.dark .accordion-item:hover {
    box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.05);
}
</style>