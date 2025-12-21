<template>
    <div class="bg-white dark:bg-gray-950">
        <!-- Hero Section -->
        <section class="relative w-full py-12 lg:py-16">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="text-center mb-12">
                    <h1
                        class="font-barlow text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Applications Engineered for Endurance
                    </h1>
                    <div class="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
                    <p class="text-lg text-gray-800 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                        Industrial operations face relentless exposure to heat, moisture, and reactive compounds that
                        can weaken infrastructure and slow performance. Syntanium's specialty chemicals and coatings
                        deliver solid protection, engineered to meet global standards for reliability, efficiency, and
                        lasting operational excellence.
                    </p>
                </div>
            </div>
        </section>

        <!-- Core Product Categories Header -->
        <section
            class="relative w-full py-8 lg:py-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="text-center">
                    <h2
                        class="font-barlow text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Core Product Categories
                    </h2>
                    <div class="w-16 h-1 bg-red-500 mx-auto"></div>
                </div>
            </div>
        </section>

        <!-- Corrosion and Scale Control Section -->
        <section class="relative w-full py-10 lg:py-12 bg-white dark:bg-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <h3
                    class="font-barlow text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Corrosion and Scale Control
                </h3>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Antiscalants -->
                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="antiscalantsIcon" alt="Antiscalants"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Antiscalants (Scale Inhibitors)
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Prevent mineral deposits in pipelines, pumps, and heat exchangers, keeping flow
                                consistent and equipment efficient.
                            </p>
                        </div>
                    </div>

                    <!-- Corrosion Inhibitors -->
                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="corrosionInhibitorsIcon" alt="Corrosion Inhibitors"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Corrosion Inhibitors
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Create a protective barrier that reduces metal deterioration caused by moisture, oxygen,
                                and contaminants.
                            </p>
                        </div>
                    </div>

                    <!-- Descalers -->
                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="descalersIcon" alt="Descalers"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Descalers
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Remove hardened scale and restore system integrity and flow performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Optimization and Flow Assurance Section -->
        <section
            class="relative w-full py-10 lg:py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <h3
                    class="font-barlow text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Process Optimization and Flow Assurance
                </h3>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Defoamers -->
                    <div
                        class="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="defoamersIcon" alt="Defoamers"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Defoamers
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Eliminate foam in production and separation systems to improve throughput and product
                                quality.
                            </p>
                        </div>
                    </div>

                    <!-- Dewatering Agents -->
                    <div
                        class="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="dewateringAgentsIcon" alt="Dewatering Agents"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Dewatering Agents
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Remove excess water from oil emulsions, ensuring smoother treatment and recovery.
                            </p>
                        </div>
                    </div>

                    <!-- Friction Reducers -->
                    <div
                        class="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="frictionReducersIcon" alt="Friction Reducers"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Friction Reducers
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Enhance flow efficiency in pipelines, lowering pressure losses and energy costs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Purification and System Cleaning Section -->
        <section class="relative w-full py-10 lg:py-12 bg-white dark:bg-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <h3
                    class="font-barlow text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Purification and System Cleaning
                </h3>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Cleaners -->
                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="cleanersIcon" alt="Cleaners" class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Cleaners
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Remove sludge, deposits, and grease from industrial equipment to maintain optimal
                                performance.
                            </p>
                        </div>
                    </div>

                    <!-- Coagulants -->
                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="coagulantsIcon" alt="Coagulants"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Coagulants and Flocculants
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Bind fine particles for improved water clarity and processing efficiency.
                            </p>
                        </div>
                    </div>

                    <!-- Filter Aids -->
                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="filterAidsIcon" alt="Filter Aids"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Filter Aids
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Support effective solid-liquid separation for cleaner outputs and longer equipment life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contaminant and Reaction Control Section -->
        <section
            class="relative w-full py-10 lg:py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <h3
                    class="font-barlow text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Contaminant and Reaction Control
                </h3>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Biocides -->
                    <div
                        class="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="biocidesIcon" alt="Biocides" class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Biocides
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Inhibit microbial activity that causes biofouling and corrosion.
                            </p>
                        </div>
                    </div>

                    <!-- Hydrogen Sulfide Scavengers -->
                    <div
                        class="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="h2sScavengersIcon" alt="Hydrogen Sulfide Scavengers"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Hydrogen Sulfide Scavengers
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Neutralize toxic gases to improve safety and protect process equipment.
                            </p>
                        </div>
                    </div>

                    <!-- Iron Control Agents -->
                    <div
                        class="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="ironControlIcon" alt="Iron Control Agents"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Iron Control Agents
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Prevent iron buildup that leads to scaling and reduced system capacity.
                            </p>
                        </div>
                    </div>

                    <!-- Gel Breakers -->
                    <div
                        class="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="gelBreakersIcon" alt="Gel Breakers"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Gel Breakers
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Improve separation processes for faster, cleaner production.
                            </p>
                        </div>
                    </div>

                    <!-- Emulsion Breakers -->
                    <div
                        class="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="emulsionBreakersIcon" alt="Emulsion Breakers"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Emulsion Breakers
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Improve separation processes for faster, cleaner production.
                            </p>
                        </div>
                    </div>

                    <!-- Desalters -->
                    <div
                        class="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="desaltersIcon" alt="Desalters"
                                    class="w-full h-full object-contain icon-red" />
                            </div>
                            <h4 class="font-barlow text-lg font-bold text-gray-900 dark:text-white">
                                Desalters
                            </h4>
                            <p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                Remove salts and impurities from crude oil to protect refining units and maintain
                                product quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Commitment Section -->
        <section class="relative w-full py-12 lg:py-16 bg-white dark:bg-gray-950">
            <div class="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="text-center">
                    <h2
                        class="font-barlow text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Commitment to Performance and Safety
                    </h2>
                    <div class="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
                    <p class="text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
                        Every product we deliver is tested for compatibility, environmental responsibility, and lasting
                        performance. Together, these solutions form a comprehensive chemical management program that
                        protects infrastructure, enhances efficiency, and supports sustainable energy operations.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import product icons
import antiscalantsIcon from '~/assets/img/antiscalants-syntanium.png';
import biocidesIcon from '~/assets/img/biocides-syntanium.png';
import cleanersIcon from '~/assets/img/cleaners-syntanium.png';
import coagulantsIcon from '~/assets/img/coagulants-syntanium.png';
import corrosionInhibitorsIcon from '~/assets/img/corrosion-inhibitors-syntanium.png';
import defoamersIcon from '~/assets/img/defoamers-syntanium.png';
import desaltersIcon from '~/assets/img/desalters-syntanium.png';
import descalersIcon from '~/assets/img/descalers-syntanium.png';
import dewateringAgentsIcon from '~/assets/img/dewatering-agents-syntanium.png';
import emulsionBreakersIcon from '~/assets/img/emulsion-breakers-syntanium.png';
import filterAidsIcon from '~/assets/img/filter-aids-syntanium.png';
import frictionReducersIcon from '~/assets/img/friction-reducers-syntanium.png';
import gelBreakersIcon from '~/assets/img/gel-breakers-syntanium.png';
import h2sScavengersIcon from '~/assets/img/hydrogen-sulfide-scavengers-syntanium.png';
import ironControlIcon from '~/assets/img/iron-control-agents-syntanium.png';
</script>

<style scoped>
/* Import Barlow font if not already imported globally */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Icon color filter for red brand color */
.icon-red {
    filter: brightness(0) saturate(100%) invert(27%) sepia(94%) saturate(4487%) hue-rotate(353deg) brightness(94%) contrast(96%);
}

/* Dark mode: adjust icon for better visibility */
.dark .icon-red {
    filter: brightness(0) saturate(100%) invert(38%) sepia(93%) saturate(5358%) hue-rotate(353deg) brightness(100%) contrast(91%);
}

/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}
</style>