<template>
    <!-- Services Section -->
    <section class="py-20 bg-gradient-to-br from-[#2d420c] to-[#406112] py-8 md:py-12 overflow-hidden">
        <div class="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16">

            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                    What We Do
                </h2>
                <div class="w-24 h-1 bg-white rounded-full mx-auto mb-6"></div>
                <p class="text-lg text-gray-200 max-w-2xl mx-auto">
                    Transforming agriculture through innovative, sustainable solutions
                </p>
            </div>

            <!-- Services Grid -->
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center lg:justify-items-start">

                <!-- Service 1 - Climate-Smart Agriculture -->
                <div
                    class="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#406112]/20 relative overflow-hidden w-full max-w-sm lg:max-w-none">
                    <!-- Background Pattern -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Icon -->
                    <div class="relative mb-6">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[#406112]/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Icon name="heroicons:beaker"
                                class="w-8 h-8 text-[#406112] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <!-- Pulse Effect -->
                        <div
                            class="absolute inset-0 w-16 h-16 bg-[#406112]/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="relative">
                        <h3
                            class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#406112] transition-colors duration-300">
                            Climate-Smart Agriculture
                        </h3>
                        <h4 class="text-base font-semibold text-[#a86414] mb-4 italic">
                            Farming That Protects the Future
                        </h4>
                        <p class="text-gray-600 leading-relaxed mb-6">
                            We support smallholder farmers with sustainable practices that increase yields, restore soil
                            health, and reduce environmental impact.
                        </p>

                        <!-- Learn More Button -->
                        <div
                            class="flex items-center text-[#406112] font-semibold group-hover:text-[#2d420c] transition-colors duration-300">
                            <span class="group-hover:translate-x-2 transition-transform duration-300">Learn More</span>
                            <Icon name="heroicons:arrow-right"
                                class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                    </div>
                </div>

                <!-- Service 2 - Carbon Sequestration -->
                <div
                    class="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#406112]/20 relative overflow-hidden w-full max-w-sm lg:max-w-none">
                    <!-- Background Pattern -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Icon -->
                    <div class="relative mb-6">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[#406112]/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <div
                                class="w-8 h-8 bg-[#406112] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div class="w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <!-- Pulse Effect -->
                        <div
                            class="absolute inset-0 w-16 h-16 bg-[#406112]/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="relative">
                        <h3
                            class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#406112] transition-colors duration-300">
                            Carbon Sequestration
                        </h3>
                        <h4 class="text-base font-semibold text-[#406112] mb-4 italic">
                            Putting Carbon Back Where It Belongs
                        </h4>
                        <p class="text-gray-600 leading-relaxed mb-6">
                            Our biochar process locks carbon into the soil—reducing emissions while improving farmland
                            productivity and resilience.
                        </p>

                        <!-- Learn More Button -->
                        <div
                            class="flex items-center text-[#406112] font-semibold group-hover:text-[#2d420c] transition-colors duration-300">
                            <span class="group-hover:translate-x-2 transition-transform duration-300">Learn More</span>
                            <Icon name="heroicons:arrow-right"
                                class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                    </div>
                </div>

                <!-- Service 3 - Ecofuel Briquettes -->
                <div
                    class="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#406112]/20 relative overflow-hidden w-full max-w-sm lg:max-w-none">
                    <!-- Background Pattern -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Icon -->
                    <div class="relative mb-6">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[#406112]/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Icon name="heroicons:fire"
                                class="w-8 h-8 text-[#406112] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <!-- Pulse Effect -->
                        <div
                            class="absolute inset-0 w-16 h-16 bg-[#406112]/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="relative">
                        <h3
                            class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#406112] transition-colors duration-300">
                            Ecofuel Briquettes
                        </h3>
                        <h4 class="text-base font-semibold text-[#406112] mb-4 italic">
                            Clean Energy from Farm Waste
                        </h4>
                        <p class="text-gray-600 leading-relaxed mb-6">
                            We turn sawdust and rice husk into briquettes that burn cleaner and longer—offering a safe,
                            affordable alternative to firewood and charcoal.
                        </p>

                        <!-- Learn More Button -->
                        <div
                            class="flex items-center text-[#406112] font-semibold group-hover:text-[#2d420c] transition-colors duration-300">
                            <span class="group-hover:translate-x-2 transition-transform duration-300">Learn More</span>
                            <Icon name="heroicons:arrow-right"
                                class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>