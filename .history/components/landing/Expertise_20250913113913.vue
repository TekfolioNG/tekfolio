<template>
    <section class="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-2xl lg:text-3xl font-barlow-extrabold text-[#fe4135] mb-6 tracking-wide">
                    OUR EXPERTISE
                </h2>
                <p
                    class="text-xl md:text-2xl font-barlow-thin text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Syntanium's specialized capabilities span the entire lifecycle of industrial projects, delivering
                    integrated solutions that drive operational excellence and sustainable growth across multiple
                    sectors.
                </p>
            </div>

            <!-- Expertise Grid with Vertical Separators -->
            <div class="grid grid-cols-1 md:grid-cols-3">
                <!-- Engineering -->
                <div class="flex flex-col items-center text-center p-8 md:p-10 relative">
                    <div class="mb-8">
                        <div
                            class="w-16 h-24 md:w-20 md:h-28 bg-red-100 dark:bg-red-900/30 skew-x-[-15deg] flex items-center justify-center mx-auto mb-6">
                            <div class="skew-x-[15deg]">
                                <Icon name="lucide:hard-hat"
                                    class="w-10 h-10 md:w-12 md:h-12 text-[#fe4135] dark:text-red-400" />
                            </div>
                        </div>
                        <h3 class="text-xl md:text-xl font-barlow-extrabold text-[#fe4135] dark:text-white mb-4">
                            ENGINEERING
                        </h3>
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed font-barlow-thin">
                            From initial concept through detailed design, Syntanium provides comprehensive engineering
                            services that transform industrial visions into viable, efficient realities for our clients.
                        </p>
                    </div>
                    <div class="mt-auto pt-6">
                        <NuxtLink to="/engineering"
                            class="inline-flex items-center text-[#fe4135] dark:text-red-400 font-medium group">
                            Find out more
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                    <!-- Vertical separator -->
                    <div
                        class="hidden md:block absolute top-1/2 right-0 w-px h-1/2 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2">
                    </div>
                </div>

                <!-- Construction -->
                <div class="flex flex-col items-center text-center p-8 md:p-10 relative">
                    <div class="mb-8">
                        <div
                            class="w-16 h-24 md:w-20 md:h-28 bg-red-100 dark:bg-red-900/30 skew-x-[-15deg] flex items-center justify-center mx-auto mb-6">
                            <div class="skew-x-[15deg]">
                                <Icon name="lucide:building"
                                    class="w-10 h-10 md:w-12 md:h-12 text-[#fe4135] dark:text-red-400" />
                            </div>
                        </div>
                        <h3 class="text-xl md:text-xl font-barlow-extrabold text-[#fe4135] dark:text-white mb-4">
                            CONSTRUCTION
                        </h3>
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed font-barlow-thin">
                            Our team handles industrial installations and turnkey projects, including pipelines,
                            processing plants, and supporting critical infrastructure for energy and petrochemical
                            facilities.
                        </p>
                    </div>
                    <div class="mt-auto pt-2">
                        <NuxtLink to="/construction"
                            class="inline-flex items-center text-[#fe4135] dark:text-red-400 font-medium group">
                            Find out more
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                    <!-- Vertical separator -->
                    <div
                        class="hidden md:block absolute top-1/2 right-0 w-px h-1/2 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2">
                    </div>
                </div>

                <!-- Maintenance -->
                <div class="flex flex-col items-center text-center p-8 md:p-10">
                    <div class="mb-8">
                        <div
                            class="w-16 h-24 md:w-20 md:h-28 bg-red-100 dark:bg-red-900/30 skew-x-[-15deg] flex items-center justify-center mx-auto mb-6">
                            <div class="skew-x-[15deg]">
                                <Icon name="lucide:settings"
                                    class="w-10 h-10 md:w-12 md:h-12 text-[#fe4135] dark:text-red-400" />
                            </div>
                        </div>
                        <h3 class="text-xl md:text-xl font-barlow-extrabold text-[#fe4135] dark:text-white mb-4">
                            MAINTENANCE
                        </h3>
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed font-barlow-thin">
                            Syntanium's maintenance expertise ensures continuous facility performance through proactive
                            upkeep, strategic modernization, and regulatory compliance programs that maximize asset
                            value and operational efficiency.
                        </p>
                    </div>
                    <div class="mt-auto pt-6">
                        <NuxtLink to="/maintenance"
                            class="inline-flex items-center text-[#fe4135] dark:text-red-400 font-medium group">
                            Find out more
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

.font-barlow-thin {
    font-family: 'Barlow', sans-serif;
    font-weight: 100;
    font-style: normal;
}

/* Horizontal separators for mobile */
@media (max-width: 767px) {
    .grid>div:not(:last-child) {
        border-bottom: 1px solid #e5e7eb;
    }

    .dark .grid>div:not(:last-child) {
        border-bottom: 1px solid #374151;
    }
}
</style>