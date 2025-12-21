<template>
    <!-- Services Section -->
    <section class="py-20 bg-[#1a3a0a] w-full">
        <div class="container mx-auto px-4 sm:px-6">

            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our Services
                </h2>
                <div class="w-24 h-1 bg-gradient-to-r from-[#6a9f3b] to-[#a0d468] rounded-full mx-auto mb-6"></div>
                <p class="text-lg text-gray-300 max-w-2xl mx-auto">
                    Transforming agriculture through innovative, sustainable solutions
                </p>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <!-- Service 1 - Climate-Smart Agriculture -->
                <div
                    class="group bg-[#2a4a1a] rounded-3xl p-8 shadow-lg border border-[#3a5a2a]/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#6a9f3b]/50 relative overflow-hidden">
                    <!-- Background Pattern -->
                    <div
                        class="absolute inset-0 bg-[#3a5a2a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Icon -->
                    <div class="relative mb-6">
                        <div
                            class="w-16 h-16 bg-[#3a5a2a] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Icon name="heroicons:beaker"
                                class="w-8 h-8 text-[#a0d468] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <!-- Pulse Effect -->
                        <div
                            class="absolute inset-0 w-16 h-16 bg-[#6a9f3b]/30 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="relative">
                        <h3
                            class="text-xl font-bold text-white mb-3 group-hover:text-[#a0d468] transition-colors duration-300">
                            Climate-Smart Agriculture
                        </h3>
                        <h4 class="text-base font-semibold text-[#a0d468] mb-4 italic">
                            Farming That Protects the Future
                        </h4>
                        <p class="text-gray-300 leading-relaxed mb-6">
                            We support smallholder farmers with sustainable practices that increase yields, restore soil
                            health, and reduce environmental impact.
                        </p>

                        <!-- Learn More Button -->
                        <div
                            class="flex items-center text-[#a0d468] font-semibold group-hover:text-white transition-colors duration-300">
                            <span class="group-hover:translate-x-2 transition-transform duration-300">Learn More</span>
                            <Icon name="heroicons:arrow-right"
                                class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                    </div>
                </div>

                <!-- Service 2 - Carbon Sequestration -->
                <div
                    class="group bg-[#2a4a1a] rounded-3xl p-8 shadow-lg border border-[#3a5a2a]/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#6a9f3b]/50 relative overflow-hidden">
                    <!-- Background Pattern -->
                    <div
                        class="absolute inset-0 bg-[#3a5a2a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Icon -->
                    <div class="relative mb-6">
                        <div
                            class="w-16 h-16 bg-[#3a5a2a] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Icon name="heroicons:arrow-down-circle"
                                class="w-8 h-8 text-[#a0d468] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <!-- Pulse Effect -->
                        <div
                            class="absolute inset-0 w-16 h-16 bg-[#6a9f3b]/30 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="relative">
                        <h3
                            class="text-xl font-bold text-white mb-3 group-hover:text-[#a0d468] transition-colors duration-300">
                            Carbon Sequestration
                        </h3>
                        <h4 class="text-base font-semibold text-[#a0d468] mb-4 italic">
                            Putting Carbon Back Where It Belongs
                        </h4>
                        <p class="text-gray-300 leading-relaxed mb-6">
                            Our biochar process locks carbon into the soil—reducing emissions while improving farmland
                            productivity and resilience.
                        </p>

                        <!-- Learn More Button -->
                        <div
                            class="flex items-center text-[#a0d468] font-semibold group-hover:text-white transition-colors duration-300">
                            <span class="group-hover:translate-x-2 transition-transform duration-300">Learn More</span>
                            <Icon name="heroicons:arrow-right"
                                class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                    </div>
                </div>

                <!-- Service 3 - Ecofuel Briquettes -->
                <div
                    class="group bg-[#2a4a1a] rounded-3xl p-8 shadow-lg border border-[#3a5a2a]/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#6a9f3b]/50 relative overflow-hidden">
                    <!-- Background Pattern -->
                    <div
                        class="absolute inset-0 bg-[#3a5a2a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Icon -->
                    <div class="relative mb-6">
                        <div
                            class="w-16 h-16 bg-[#3a5a2a] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Icon name="heroicons:fire"
                                class="w-8 h-8 text-[#a0d468] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <!-- Pulse Effect -->
                        <div
                            class="absolute inset-0 w-16 h-16 bg-[#6a9f3b]/30 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="relative">
                        <h3
                            class="text-xl font-bold text-white mb-3 group-hover:text-[#a0d468] transition-colors duration-300">
                            Ecofuel Briquettes
                        </h3>
                        <h4 class="text-base font-semibold text-[#a0d468] mb-4 italic">
                            Clean Energy from Farm Waste
                        </h4>
                        <p class="text-gray-300 leading-relaxed mb-6">
                            We turn sawdust and rice husk into briquettes that burn cleaner and longer—offering a safe,
                            affordable alternative to firewood and charcoal.
                        </p>

                        <!-- Learn More Button -->
                        <div
                            class="flex items-center text-[#a0d468] font-semibold group-hover:text-white transition-colors duration-300">
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