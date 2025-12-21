<template>
    <section class="py-4 md:py-6 bg-white">
        <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-2xl md:text-3xl font-barlow-extrabold text-gray-900 mb-6">
                    How We Create Value
                </h2>
                <div class="w-20 h-1 bg-[#0077AA] mx-auto"></div>
            </div>

            <!-- Main Content Grid -->
            <div class="grid lg:grid-cols-2 gap-12 mb-12">
                <!-- Left Column: First 3 Value Points -->
                <div class="space-y-6">
                    <!-- Track and Prove Impact -->
                    <div
                        class="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div class="flex items-start">
                            <div
                                class="flex-shrink-0 w-10 h-10 bg-[#0077AA] rounded-lg flex items-center justify-center mr-4 mt-1">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg md:text-xl font-barlow-extrabold text-gray-900 mb-2">
                                    Track and Prove Impact
                                </h3>
                                <p class="text-sm md:text-base text-gray-800 leading-relaxed">
                                    We design data-driven systems that capture, analyze, and communicate results. Our
                                    approach helps organizations demonstrate measurable outcomes and social return on
                                    investment (ROI).
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Improve Decision-Making -->
                    <div
                        class="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div class="flex items-start">
                            <div
                                class="flex-shrink-0 w-10 h-10 bg-[#0077AA] rounded-lg flex items-center justify-center mr-4 mt-1">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg md:text-xl font-barlow-extrabold text-gray-900 mb-2">
                                    Improve Decision-Making and Strategy
                                </h3>
                                <p class="text-sm md:text-base text-gray-800 leading-relaxed">
                                    We turn monitoring data into strategic intelligence — helping leaders refine
                                    programs, reallocate resources efficiently, and focus on what delivers the greatest
                                    impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Ensure Accountability -->
                    <div
                        class="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div class="flex items-start">
                            <div
                                class="flex-shrink-0 w-10 h-10 bg-[#0077AA] rounded-lg flex items-center justify-center mr-4 mt-1">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg md:text-xl font-barlow-extrabold text-gray-900 mb-2">
                                    Ensure Accountability and Transparency
                                </h3>
                                <p class="text-sm md:text-base text-gray-800 leading-relaxed">
                                    Through rigorous reporting and governance oversight, we help organizations maintain
                                    stakeholder confidence and meet compliance standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Image -->
                <div class="flex items-center">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group w-full">
                        <img :src="meImage2" alt="Monitoring and Evaluation Excellence"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#0077AA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>

            </div>

            <!-- Second Row: Image and Last 2 Value Points -->
            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Left Column: Image -->
                <div class="flex items-center">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group w-full">
                        <img :src="meImage1" alt="Impact Measurement and Evaluation"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#0077AA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>

                <div class="flex items-center">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group w-full">
                        <img :src="meImage3" alt="Impact Measurement and Evaluation"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#0077AA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>
                <!-- Right Column: Last 2 Value Points -->
                <div class="space-y-6">
                    <!-- Manage Risks -->
                    <div
                        class="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div class="flex items-start">
                            <div
                                class="flex-shrink-0 w-10 h-10 bg-[#0077AA] rounded-lg flex items-center justify-center mr-4 mt-1">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg md:text-xl font-barlow-extrabold text-gray-900 mb-2">
                                    Manage Risks and Adapt
                                </h3>
                                <p class="text-sm md:text-base text-gray-800 leading-relaxed">
                                    Our evaluations uncover bottlenecks early, enabling teams to respond proactively,
                                    minimize risks, and stay agile in dynamic environments.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Foster Learning -->
                    <div
                        class="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div class="flex items-start">
                            <div
                                class="flex-shrink-0 w-10 h-10 bg-[#0077AA] rounded-lg flex items-center justify-center mr-4 mt-1">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg md:text-xl font-barlow-extrabold text-gray-900 mb-2">
                                    Foster Learning and Continuous Improvement
                                </h3>
                                <p class="text-sm md:text-base text-gray-800 leading-relaxed">
                                    We cultivate a culture of learning, reflection, and adaptation — ensuring lessons
                                    learned translate into stronger systems and more effective programs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images from assets directory
import meImage1 from '~/assets/img/me-elevation.jpg';
import meImage2 from '~/assets/img/me-elevation2.jpg';
import meImage3 from '~/assets/img/me-elevation3.jpg';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}
</style>