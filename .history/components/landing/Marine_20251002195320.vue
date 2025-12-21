<template>
    <div class="bg-white dark:bg-gray-950">
        <!-- Why Marine Vessel Operations Matter Section -->
        <section class="relative w-full py-12 lg:py-16">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="text-center mb-12">
                    <h2
                        class="font-barlow text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Why Marine Vessel Operations Matter
                    </h2>
                    <div class="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
                    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                        Offshore projects demand uninterrupted supply chains and dependable logistics. Any delay in
                        vessel movement can lead to costly downtime. With our marine services, operators get:
                    </p>
                </div>

                <!-- Benefits Grid -->
                <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                            </div>
                            <div>
                                <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span class="font-semibold text-gray-900 dark:text-white">Safe crew transfer</span>
                                    across offshore platforms and vessels.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                            </div>
                            <div>
                                <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span class="font-semibold text-gray-900 dark:text-white">Timely material and cargo
                                        delivery</span> to keep projects running smoothly.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                            </div>
                            <div>
                                <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span class="font-semibold text-gray-900 dark:text-white">Specialized vessel
                                        support</span> for drilling, construction, and production activities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Marine Vessel Services Header -->
        <section
            class="relative w-full py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="text-center">
                    <h2
                        class="font-barlow text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Our Marine Vessel Services
                    </h2>
                    <div class="w-16 h-1 bg-red-500 mx-auto"></div>
                </div>
            </div>
        </section>

        <!-- Offshore Crew Transfer Section -->
        <section class="relative w-full py-8 lg:py-12 bg-white dark:bg-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Image Column -->
                    <div class="order-1">
                        <div class="relative rounded-lg overflow-hidden shadow-2xl">
                            <img :src="crewTransferImage" alt="Offshore Crew Transfer - Syntanium Energy"
                                class="w-full h-full object-cover sharp-image" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    <!-- Content Column -->
                    <div class="order-2">
                        <h3
                            class="font-barlow text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-center">
                            Offshore Crew Transfer
                        </h3>
                        <div class="w-16 h-1 bg-red-500 mb-8 mx-auto lg:mx-auto"></div>
                        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Reliable transportation of offshore personnel between onshore bases, drilling rigs, FPSOs,
                            and production platforms. Our vessels are equipped with safety systems and manned by
                            experienced crews to ensure secure transfer, even in challenging sea conditions.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cargo and Equipment Transport Section -->
        <section
            class="relative w-full py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Content Column -->
                    <div class="order-2 lg:order-1">
                        <h3
                            class="font-barlow text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-center">
                            Cargo and Equipment Transport
                        </h3>
                        <div class="w-16 h-1 bg-red-500 mb-8 mx-auto lg:mx-auto"></div>
                        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Efficient movement of bulk materials, heavy equipment, and essential supplies to offshore
                            installations. From containers and drilling tools to fuel and spare parts, we manage
                            end-to-end delivery without disruption.
                        </p>
                    </div>

                    <!-- Image Column -->
                    <div class="order-1 lg:order-2">
                        <div class="relative rounded-lg overflow-hidden shadow-2xl">
                            <img :src="cargoTransportImage" alt="Cargo and Equipment Transport - Syntanium Energy"
                                class="w-full h-full object-cover sharp-image" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Specialized Vessel Support Section -->
        <section class="relative w-full py-8 lg:py-12 bg-white dark:bg-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Image Column -->
                    <div class="order-1">
                        <div class="relative rounded-lg overflow-hidden shadow-2xl">
                            <img :src="vesselSupportImage" alt="Specialized Vessel Support - Syntanium Energy"
                                class="w-full h-full object-cover sharp-image" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    <!-- Content Column -->
                    <div class="order-2">
                        <h3
                            class="font-barlow text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-center">
                            Specialized Vessel Support
                        </h3>
                        <div class="w-16 h-1 bg-red-500 mb-8 mx-auto lg:mx-auto"></div>
                        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            We deploy vessels for anchor handling, towing, standby duties, and emergency response. Each
                            operation is backed by skilled marine teams and robust logistics planning to reduce risks
                            and downtime.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Offshore Logistics Coordination Section -->
        <section
            class="relative w-full py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Content Column -->
                    <div class="order-2 lg:order-1">
                        <h3
                            class="font-barlow text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-center">
                            Offshore Logistics Coordination
                        </h3>
                        <div class="w-16 h-1 bg-red-500 mb-8 mx-auto lg:mx-auto"></div>
                        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Our marine logistics services extend beyond vessels. We coordinate port operations,
                            loading/unloading, scheduling, and supply chain management to ensure offshore activities are
                            fully supported at every stage.
                        </p>
                    </div>

                    <!-- Image Column -->
                    <div class="order-1 lg:order-2">
                        <div class="relative rounded-lg overflow-hidden shadow-2xl">
                            <img :src="logisticsImage" alt="Offshore Logistics Coordination - Syntanium Energy"
                                class="w-full h-full object-cover sharp-image" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Safety & Compliance Section -->
        <section class="relative w-full py-12 lg:py-16 bg-white dark:bg-gray-950">
            <div class="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="text-center">
                    <h2
                        class="font-barlow text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Safety & Compliance
                    </h2>
                    <div class="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
                    <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        Every operation is guided by international marine regulations (ISM Code, SOLAS, and MARPOL). We
                        invest in vessel maintenance, crew training, and real-time monitoring systems to guarantee safe,
                        compliant, and environmentally responsible operations.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import images from assets directory - Replace these with your actual image paths
import { default as cargoTransportImage, default as logisticsImage } from '~/assets/img/pigging-syntanium4.jpg';
import { default as crewTransferImage, default as vesselSupportImage } from '~/assets/img/pigging-syntanium5.jpg';
</script>

<style scoped>
/* Import Barlow font if not already imported globally */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Sharp image rendering */
.sharp-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
}

/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}
</style>