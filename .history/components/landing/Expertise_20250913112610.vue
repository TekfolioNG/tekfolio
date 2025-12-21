<template>
    <section class="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto px-6">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-2xl lg:text-3xl font-bold text-[#fe4135] mb-6 tracking-wide">
                    OUR EXPERTISE
                </h2>
                <p
                    class="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                    Syntanium's specialized capabilities span the entire lifecycle of industrial projects,
                    delivering integrated solutions that drive operational excellence and sustainable growth
                    across multiple sectors.
                </p>
            </div>

            <!-- Expertise Areas -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

                <!-- Engineering -->
                <div class="text-center relative">
                    <!-- Vertical divider (hidden on mobile, first item) -->
                    <div class="hidden md:block absolute -right-6 lg:-right-8 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600"
                        v-if="false"></div>

                    <!-- Parallelogram icon container -->
                    <div class="flex justify-center mb-8">
                        <div class="relative">
                            <!-- Parallelogram background -->
                            <div
                                class="w-20 h-32 bg-gradient-to-b from-[#fe4135] to-[#e73c30] transform -skew-x-12 rounded-md">
                            </div>
                            <!-- Icon centered in parallelogram -->
                            <div class="absolute inset-0 flex items-center justify-center transform skew-x-12">
                                <Icon name="lucide:compass" class="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </div>

                    <!-- Content -->
                    <h3 class="text-lg font-bold text-[#fe4135] mb-4 tracking-wide">
                        ENGINEERING
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                        From initial concept through detailed design, Syntanium provides comprehensive
                        engineering services that transform industrial visions into viable, efficient
                        realities for our clients.
                    </p>
                    <NuxtLink to="/engineering"
                        class="inline-flex items-center text-[#fe4135] hover:text-[#e73c30] dark:hover:text-[#ff5145] font-semibold transition-colors duration-200 group text-sm lg:text-base">
                        Find out more
                        <Icon name="lucide:arrow-right"
                            class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </NuxtLink>
                </div>

                <!-- Construction -->
                <div class="text-center relative">
                    <!-- Vertical dividers -->
                    <div
                        class="hidden md:block absolute -left-6 lg:-left-8 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600">
                    </div>
                    <div
                        class="hidden md:block absolute -right-6 lg:-right-8 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600">
                    </div>

                    <!-- Parallelogram icon container -->
                    <div class="flex justify-center mb-8">
                        <div class="relative">
                            <!-- Parallelogram background -->
                            <div
                                class="w-20 h-32 bg-gradient-to-b from-[#fe4135] to-[#e73c30] transform -skew-x-12 rounded-md">
                            </div>
                            <!-- Icon centered in parallelogram -->
                            <div class="absolute inset-0 flex items-center justify-center transform skew-x-12">
                                <Icon name="lucide:hard-hat" class="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </div>

                    <!-- Content -->
                    <h3 class="text-lg font-bold text-[#fe4135] mb-4 tracking-wide">
                        CONSTRUCTION
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                        Our team handles industrial installations and turnkey projects, including
                        pipelines, processing plants, and supporting critical infrastructure for
                        energy and petrochemical facilities.
                    </p>
                    <NuxtLink to="/construction"
                        class="inline-flex items-center text-[#fe4135] hover:text-[#e73c30] dark:hover:text-[#ff5145] font-semibold transition-colors duration-200 group text-sm lg:text-base">
                        Find out more
                        <Icon name="lucide:arrow-right"
                            class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </NuxtLink>
                </div>

                <!-- Maintenance -->
                <div class="text-center relative">
                    <!-- Vertical divider (hidden on mobile, last item) -->
                    <div
                        class="hidden md:block absolute -left-6 lg:-left-8 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600">
                    </div>

                    <!-- Parallelogram icon container -->
                    <div class="flex justify-center mb-8">
                        <div class="relative">
                            <!-- Parallelogram background -->
                            <div
                                class="w-20 h-32 bg-gradient-to-b from-[#fe4135] to-[#e73c30] transform -skew-x-12 rounded-md">
                            </div>
                            <!-- Icon centered in parallelogram -->
                            <div class="absolute inset-0 flex items-center justify-center transform skew-x-12">
                                <Icon name="lucide:wrench" class="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </div>

                    <!-- Content -->
                    <h3 class="text-lg font-bold text-[#fe4135] mb-4 tracking-wide">
                        MAINTENANCE
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                        Syntanium's maintenance expertise ensures continuous facility performance through
                        proactive upkeep, strategic modernization, and regulatory compliance programs
                        that maximize asset value and operational efficiency.
                    </p>
                    <NuxtLink to="/maintenance"
                        class="inline-flex items-center text-[#fe4135] hover:text-[#e73c30] dark:hover:text-[#ff5145] font-semibold transition-colors duration-200 group text-sm lg:text-base">
                        Find out more
                        <Icon name="lucide:arrow-right"
                            class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </NuxtLink>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// No additional script needed for this component
</script>

<style scoped>
.container {
    max-width: 1200px;
}

/* Mobile spacing adjustments */
@media (max-width: 767px) {
    .grid>div:not(:last-child) {
        border-bottom: 1px solid theme('colors.gray.300');
        padding-bottom: 3rem;
        margin-bottom: 3rem;
    }

    .dark .grid>div:not(:last-child) {
        border-bottom-color: theme('colors.gray.600');
    }
}

/* Hover effects */
.group:hover .lucide-arrow-right {
    transform: translateX(4px);
}
</style>