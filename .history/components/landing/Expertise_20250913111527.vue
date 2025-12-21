<template>
    <section class="py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-xl lg:text-5xl font-bold text-[#fe4135] mb-6 tracking-wide">
                    OUR EXPERTISE
                </h2>
                <p class="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Syntanium's specialized capabilities span the entire lifecycle of industrial projects,
                    delivering integrated solutions that drive operational excellence and sustainable growth
                    across multiple sectors.
                </p>
            </div>

            <!-- Expertise Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                <!-- Engineering Card -->
                <div
                    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <!-- Red angled header with icon -->
                    <div
                        class="relative h-32 bg-gradient-to-br from-[#fe4135] to-[#e73c30] flex items-center justify-center">
                        <div class="absolute inset-0 bg-[#fe4135] transform skew-y-2 origin-bottom-left"></div>
                        <div class="relative z-10">
                            <Icon name="lucide:compass" class="w-12 h-12 text-white" />
                        </div>
                    </div>

                    <!-- Card Content -->
                    <div class="p-8">
                        <h3 class="text-xl font-bold text-[#fe4135] mb-4 tracking-wide">
                            ENGINEERING
                        </h3>
                        <p class="text-gray-600 mb-6 leading-relaxed">
                            From initial concept through detailed design, Syntanium provides comprehensive
                            engineering services that transform industrial visions into viable, efficient
                            realities for our clients.
                        </p>
                        <NuxtLink to="/engineering"
                            class="inline-flex items-center text-[#fe4135] hover:text-[#e73c30] font-semibold transition-colors duration-200 group">
                            Find out more
                            <Icon name="lucide:arrow-right"
                                class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Construction Card -->
                <div
                    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <!-- Red angled header with icon -->
                    <div
                        class="relative h-32 bg-gradient-to-br from-[#fe4135] to-[#e73c30] flex items-center justify-center">
                        <div class="absolute inset-0 bg-[#fe4135] transform skew-y-2 origin-bottom-left"></div>
                        <div class="relative z-10">
                            <Icon name="lucide:hard-hat" class="w-12 h-12 text-white" />
                        </div>
                    </div>

                    <!-- Card Content -->
                    <div class="p-8">
                        <h3 class="text-xl font-bold text-[#fe4135] mb-4 tracking-wide">
                            CONSTRUCTION
                        </h3>
                        <p class="text-gray-600 mb-6 leading-relaxed">
                            Our team handles industrial installations and turnkey projects, including
                            pipelines, processing plants, and supporting critical infrastructure for
                            energy and petrochemical facilities.
                        </p>
                        <NuxtLink to="/construction"
                            class="inline-flex items-center text-[#fe4135] hover:text-[#e73c30] font-semibold transition-colors duration-200 group">
                            Find out more
                            <Icon name="lucide:arrow-right"
                                class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Maintenance Card -->
                <div
                    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <!-- Red angled header with icon -->
                    <div
                        class="relative h-32 bg-gradient-to-br from-[#fe4135] to-[#e73c30] flex items-center justify-center">
                        <div class="absolute inset-0 bg-[#fe4135] transform skew-y-2 origin-bottom-left"></div>
                        <div class="relative z-10">
                            <Icon name="lucide:wrench" class="w-12 h-12 text-white" />
                        </div>
                    </div>

                    <!-- Card Content -->
                    <div class="p-8">
                        <h3 class="text-xl font-bold text-[#fe4135] mb-4 tracking-wide">
                            MAINTENANCE
                        </h3>
                        <p class="text-gray-600 mb-6 leading-relaxed">
                            Syntanium's maintenance expertise ensures continuous facility performance through
                            proactive upkeep, strategic modernization, and regulatory compliance programs
                            that maximize asset value and operational efficiency.
                        </p>
                        <NuxtLink to="/maintenance"
                            class="inline-flex items-center text-[#fe4135] hover:text-[#e73c30] font-semibold transition-colors duration-200 group">
                            Find out more
                            <Icon name="lucide:arrow-right"
                                class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </NuxtLink>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// No additional script needed for this component
</script>

<style scoped>
/* Additional custom styles if needed */
.container {
    max-width: 1200px;
}

/* Ensure proper card height consistency */
.grid>div {
    height: auto;
}

/* Hover effects */
.group:hover .lucide-arrow-right {
    transform: translateX(4px);
}
</style>