<template>
    <section class="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-center text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Industries We Serve
            </h2>
            <p
                class="text-center text-lg md:text-xl font-light text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Syntanium supports vital operations across the oil and gas industry,
                delivering solutions that strengthen infrastructure, safeguard assets,
                and ensure reliable energy supply.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Upstream Card -->
                <div
                    class="industry-card group relative h-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center"
                        :style="{ backgroundImage: `url(${upstreamImage})` }">
                    </div>
                    <!-- Bottom panel - initially 20% height -->
                    <div
                        class="absolute bottom-0 left-0 right-0 h-1/5 bg-red-500/80 backdrop-blur-sm transition-all duration-500 group-hover:h-3/5">
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-xl font-semibold mb-2">
                            Upstream
                        </h3>
                        <p class="opacity-0 leading-relaxed transition-all duration-500 group-hover:opacity-100">
                            Exploration and production support with engineering, construction,
                            and maintenance that keep operations safe and productive.
                        </p>
                    </div>
                </div>

                <!-- Midstream Card -->
                <div
                    class="industry-card group relative h-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center"
                        :style="{ backgroundImage: `url(${midstreamImage})` }">
                    </div>
                    <!-- Bottom panel - initially 20% height -->
                    <div
                        class="absolute bottom-0 left-0 right-0 h-1/5 bg-red-500/80 backdrop-blur-sm transition-all duration-500 group-hover:h-3/5">
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-xl font-semibold mb-2">
                            Midstream
                        </h3>
                        <p class="opacity-0 leading-relaxed transition-all duration-500 group-hover:opacity-100">
                            Pipelines, storage, logistics, and transport systems designed for
                            efficiency, reliability, and long-term performance.
                        </p>
                    </div>
                </div>

                <!-- Downstream Card -->
                <div
                    class="industry-card group relative h-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center"
                        :style="{ backgroundImage: `url(${downstreamImage})` }">
                    </div>
                    <!-- Bottom panel - initially 20% height -->
                    <div
                        class="absolute bottom-0 left-0 right-0 h-1/5 bg-red-500/80 backdrop-blur-sm transition-all duration-500 group-hover:h-3/5">
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-xl font-semibold mb-2">
                            Downstream
                        </h3>
                        <p class="opacity-0 leading-relaxed transition-all duration-500 group-hover:opacity-100">
                            Refining, processing, and distribution of energy products to ensure
                            availability across markets and industries.
                        </p>
                    </div>
                </div>

                <!-- Petrochemicals Card -->
                <div
                    class="industry-card group relative h-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center"
                        :style="{ backgroundImage: `url(${petrochemicalsImage})` }">
                    </div>
                    <!-- Bottom panel - initially 20% height -->
                    <div
                        class="absolute bottom-0 left-0 right-0 h-1/5 bg-red-500/80 backdrop-blur-sm transition-all duration-500 group-hover:h-3/5">
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-xl font-semibold mb-2">
                            Petrochemicals
                        </h3>
                        <p class="opacity-0 leading-relaxed transition-all duration-500 group-hover:opacity-100">
                            Specialized chemical products and services that improve efficiency,
                            protect assets, and enhance industrial performance.
                        </p>
                    </div>
                </div>

                <!-- Marine Card -->
                <div
                    class="industry-card group relative h-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center"
                        :style="{ backgroundImage: `url(${marineImage})` }">
                    </div>
                    <!-- Bottom panel - initially 20% height -->
                    <div
                        class="absolute bottom-0 left-0 right-0 h-1/5 bg-red-500/80 backdrop-blur-sm transition-all duration-500 group-hover:h-3/5">
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-xl font-semibold mb-2">
                            Marine
                        </h3>
                        <p class="opacity-0 leading-relaxed transition-all duration-500 group-hover:opacity-100">
                            Operations for vessels, cargo handling, hose management, and offshore
                            or coastal facility support.
                        </p>
                    </div>
                </div>

                <!-- Industrial Services Card -->
                <div
                    class="industry-card group relative h-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center"
                        :style="{ backgroundImage: `url(${industrialServicesImage})` }">
                    </div>
                    <!-- Bottom panel - initially 20% height -->
                    <div
                        class="absolute bottom-0 left-0 right-0 h-1/5 bg-red-500/80 backdrop-blur-sm transition-all duration-500 group-hover:h-3/5">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end h-full transition-all duration-500">
                        <h3
                            class="text-xl font-semibold mb-2 transform transition-all duration-500 group-hover:-translate-y-4">
                            Industrial Services
                        </h3>
                        <p
                            class="opacity-0 leading-relaxed transition-all duration-500 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                            Turnkey construction, asset integrity, and maintenance solutions
                            supporting large-scale energy and processing facilities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images from assets directory (same as your hero slider)
import downstreamImage from '~/assets/img/downstream-syntanium.jpg';
import midstreamImage from '~/assets/img/gas-pipelines-syntanium2.jpg';
import industrialServicesImage from '~/assets/img/industrial-services-syntanium.jpg';
import marineImage from '~/assets/img/marine-syntanium.jpg';
import petrochemicalsImage from '~/assets/img/petrochemicals-syntanium.jpg';
import upstreamImage from '~/assets/img/upstream-syntanium.jpg';
</script>

<style scoped>
/* Custom transition duration for smooth hover effects */
.duration-500 {
    transition-duration: 500ms;
}
</style>