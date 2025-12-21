<template>
    <div class="bg-white dark:bg-gray-950">
        <!-- Pigging Operations Section -->
        <section class="relative w-full py-12 lg:py-16 overflow-hidden">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Content Column -->
                    <div class="order-2 lg:order-1">
                        <h2
                            class="font-barlow text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Why Conduct Pigging Operations?
                        </h2>
                        <div class="w-16 h-1 bg-red-500 mb-8"></div>

                        <div class="space-y-6 text-gray-700 dark:text-gray-300">
                            <p class="text-lg leading-relaxed">
                                Over time, <span class="font-semibold text-gray-900 dark:text-white">deposits, scale,
                                    and sludge</span> build up inside pipelines. This narrows the flow, increases
                                operating pressure, and strains equipment. In severe cases, blockages force shutdowns.
                            </p>

                            <p class="text-lg leading-relaxed font-semibold text-gray-900 dark:text-white">
                                Pigging removes buildup, restores smooth flow, and prevents unnecessary downtime.
                            </p>

                            <p class="text-lg leading-relaxed">
                                Obstructions or early-stage corrosion can also go unnoticed. <span
                                    class="font-semibold text-gray-900 dark:text-white">Inspection pigs</span> detect
                                wall thinning, cracks, or defects before they escalate. Smart pigs equipped with sensors
                                provide detailed data, helping operators plan maintenance rather than react to
                                emergencies.
                            </p>

                            <p class="text-lg leading-relaxed">
                                Pigging also plays a role in <span
                                    class="font-semibold text-gray-900 dark:text-white">hydrostatic testing</span>,
                                ensuring pipelines are free from leaks and structurally sound before commissioning.
                                Whether foam, brush, or intelligent pigs, each tool is matched to the job for reliable
                                performance.
                            </p>
                        </div>
                    </div>

                    <!-- Image Column -->
                    <div class="order-1 lg:order-2">
                        <div class="relative rounded-lg overflow-hidden shadow-2xl">
                            <img :src="piggingImage" alt="Pigging Operations - Syntanium Energy"
                                class="w-full h-full object-cover sharp-image" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Corrosion Issues Section -->
        <section
            class="relative w-full py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="text-center mb-12">
                    <h2
                        class="font-barlow text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Corrosion Issues We Fix
                    </h2>
                    <div class="w-16 h-1 bg-red-500 mx-auto mb-6"></div>
                    <p class="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        Corrosion takes many forms, each with unique risks
                    </p>
                </div>

                <!-- Corrosion Types Grid -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    <!-- Stress Corrosion Cracking -->
                    <div
                        class="group bg-white dark:bg-gray-900 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Stress Corrosion Cracking
                                </h3>
                                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Hidden cracks that compromise structural strength under pressure.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Pitting Corrosion -->
                    <div
                        class="group bg-white dark:bg-gray-900 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Pitting Corrosion
                                </h3>
                                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Localized holes that eat into metal, often leading to sudden leaks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Microbial Corrosion -->
                    <div
                        class="group bg-white dark:bg-gray-900 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Microbial Corrosion
                                </h3>
                                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Caused by bacteria, especially in water-heavy systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Galvanic and Crevice Corrosion -->
                    <div
                        class="group bg-white dark:bg-gray-900 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Galvanic & Crevice Corrosion
                                </h3>
                                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Electrochemical reactions where metals meet or where fluids stagnate.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- High-Temperature Corrosion -->
                    <div
                        class="group bg-white dark:bg-gray-900 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-xl md:col-span-2 lg:col-span-1">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    High-Temperature Corrosion
                                </h3>
                                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Degradation accelerated by heat in refineries and processing plants.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Protection Approach -->
                <div class="mt-8 max-w-4xl mx-auto text-center">
                    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Our approach combines <span class="font-semibold text-gray-900 dark:text-white">cathodic
                            protection, coatings, and targeted repair programs</span> to prevent these issues from
                        spreading and extend asset life.
                    </p>
                </div>
            </div>
        </section>

        <!-- Inspection & Monitoring Section -->
        <section class="relative w-full py-12 lg:py-16 bg-white dark:bg-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="mb-12">
                    <h2
                        class="font-barlow text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Inspection & Monitoring
                    </h2>
                    <div class="w-16 h-1 bg-red-500 mb-6"></div>
                    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
                        Reliable asset integrity begins with <span
                            class="font-semibold text-gray-900 dark:text-white">early detection</span>. We apply a suite
                        of proven methods:
                    </p>
                </div>

                <!-- Inspection Methods Grid -->
                <div class="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                    <!-- Visual and Radiographic Testing -->
                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Visual and Radiographic Testing
                                </h3>
                                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Detect visible damage and hidden wall loss.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Ultrasonic and Eddy Current Testing -->
                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Ultrasonic and Eddy Current Testing
                                </h3>
                                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Measure thickness and reveal sub-surface flaws.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Long-Range Ultrasonic Testing -->
                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Long-Range Ultrasonic Testing (LRUT)
                                </h3>
                                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Scan long pipe sections without excavation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Specialized Radiography -->
                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Specialized Radiography
                                </h3>
                                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Tangential methods for thickness assessment and double-wall techniques for pitting
                                    detection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Fabric Renewal Note -->
                <div class="max-w-4xl mx-auto">
                    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        These inspections feed into <span class="font-semibold text-gray-900 dark:text-white">fabric
                            renewal and maintenance strategies</span>, ensuring assets meet compliance standards and
                        remain fit for service.
                    </p>
                </div>
            </div>
        </section>

        <!-- Why It Matters Section -->
        <section
            class="relative w-full py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="max-w-4xl mx-auto text-center">
                    <h2
                        class="font-barlow text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Why It Matters
                    </h2>
                    <div class="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
                    <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        Every pipeline, vessel, and facility is a long-term investment. Corrosion and buildup quietly
                        erode that investment, reducing safety and profitability. Syntanium's corrosion and integrity
                        solutions safeguard assets, protect people, and keep operations running at full capacity.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import image from assets directory
import piggingImage from '~/assets/img/pigging-syntanium5.jpg';
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