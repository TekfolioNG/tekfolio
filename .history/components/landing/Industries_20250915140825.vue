<template>
    <section class="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-center text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Industries We Serve
            </h2>
            <p
                class="text-center text-xl md:text-2xl font-barlow-thin text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-18 mt-0">
                Syntanium supports vital operations across the oil and gas industry,
                delivering solutions that strengthen infrastructure, safeguard assets,
                and ensure reliable energy supply.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Upstream Card -->
                <div class="industry-card group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-105"
                        :style="{ backgroundImage: `url(${upstreamImage})` }">
                    </div>
                    <div
                        class="industry-panel absolute bottom-0 left-0 right-0 z-10 bg-red-500/80 flex items-start justify-center">
                        <div class="industry-content p-4 text-white w-full">
                            <h3 class="text-xl font-semibold mb-2">
                                Upstream
                            </h3>
                            <p
                                class="opacity-0 leading-relaxed transition-all duration-500 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                                Pipelines, storage, logistics, and transport systems designed for
                                Exploration and production support with engineering, construction,
                                and maintenance that keep operations safe and productive.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Midstream Card -->
                <div class="industry-card group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-105"
                        :style="{ backgroundImage: `url(${midstreamImage})` }">
                    </div>
                    <div
                        class="industry-panel absolute bottom-0 left-0 right-0 z-10 bg-red-500/80 flex items-start justify-center">
                        <div class="industry-content p-4 text-white w-full">
                            <h3 class="text-xl font-semibold mb-2">
                                Midstream
                            </h3>
                            <p
                                class="opacity-0 leading-relaxed transition-all duration-500 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                                Pipelines, storage, logistics, and transport systems designed for
                                Pipelines, storage, logistics, and transport systems designed for
                                efficiency, reliability, and long-term performance.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Downstream Card -->
                <div class="industry-card group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-105"
                        :style="{ backgroundImage: `url(${downstreamImage})` }">
                    </div>
                    <div
                        class="industry-panel absolute bottom-0 left-0 right-0 z-10 bg-red-500/80 flex items-start justify-center">
                        <div class="industry-content p-4 text-white w-full">
                            <h3 class="text-xl font-semibold mb-2">
                                Downstream
                            </h3>
                            <p
                                class="opacity-0 leading-relaxed transition-all duration-500 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                                Pipelines, storage, logistics, and transport systems designed for
                                Refining, processing, and distribution of energy products to ensure
                                availability across markets and industries.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Petrochemicals Card -->
                <div class="industry-card group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-105"
                        :style="{ backgroundImage: `url(${petrochemicalsImage})` }">
                    </div>
                    <div
                        class="industry-panel absolute bottom-0 left-0 right-0 z-10 bg-red-500/80 flex items-start justify-center">
                        <div class="industry-content p-4 text-white w-full">
                            <h3 class="text-xl font-semibold mb-2">
                                Petrochemicals
                            </h3>
                            <p
                                class="opacity-0 leading-relaxed transition-all duration-500 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                                Pipelines, storage, logistics, and transport systems designed for
                                Specialized chemical products and services that improve efficiency,
                                protect assets, and enhance industrial performance.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Marine Card -->
                <div class="industry-card group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-105"
                        :style="{ backgroundImage: `url(${marineImage})` }">
                    </div>
                    <div
                        class="industry-panel absolute bottom-0 left-0 right-0 z-10 bg-red-500/80 flex items-start justify-center">
                        <div class="industry-content p-4 text-white w-full">
                            <h3 class="text-xl font-semibold mb-2">
                                Marine
                            </h3>
                            <p
                                class="opacity-0 leading-relaxed transition-all duration-500 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                                Pipelines, storage, logistics, and transport systems designed for
                                Operations for vessels, cargo handling, hose management, and offshore
                                or coastal facility support.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Industrial Services Card -->
                <div class="industry-card group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-105"
                        :style="{ backgroundImage: `url(${industrialServicesImage})` }">
                    </div>
                    <div
                        class="industry-panel absolute bottom-0 left-0 right-0 z-10 bg-red-500/80 flex items-start justify-center">
                        <div class="industry-content p-4 text-white w-full">
                            <h3 class="text-xl font-semibold mb-2">
                                Industrial Services
                            </h3>
                            <p
                                class="opacity-0 leading-relaxed transition-all duration-500 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                                Pipelines, storage, logistics, and transport systems designed for
                                Turnkey construction, asset integrity, and maintenance solutions
                                supporting large-scale energy and processing facilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images from assets directory
import downstreamImage from '~/assets/img/downstream-syntanium.jpg';
import midstreamImage from '~/assets/img/gas-pipelines-syntanium2.jpg';
import industrialServicesImage from '~/assets/img/industrial-services-syntanium.jpg';
import marineImage from '~/assets/img/marine-syntanium.jpg';
import petrochemicalsImage from '~/assets/img/petrochemicals-syntanium.jpg';
import upstreamImage from '~/assets/img/upstream-syntanium.jpg';
</script>

<style scoped>
.industry-card {
    transition: all 0.4s ease;
}

.industry-panel {
    height: 20%;
    transition: height 0.4s ease;
    background-color: #fe4135;
}

.industry-card:hover .industry-panel {
    height: 60%;
}

.industry-content {
    transform: translateY(0);
    transition: transform 0.4s ease;
}

.industry-card:hover .industry-content {
    transform: translateY(-10px);
}
</style>