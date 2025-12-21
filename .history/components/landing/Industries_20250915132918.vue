<template>
    <section class="py-16 px-4 bg-gray-50 dark:bg-gray-900">
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
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        :style="{ backgroundImage: `url(${upstreamImage})` }">
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-400">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-400 group-hover:translate-y-0">
                        <h3 class="text-xl font-semibold mb-2 transition-all duration-300 group-hover:mb-4">
                            Upstream
                        </h3>
                        <p
                            class="opacity-0 max-h-0 overflow-hidden leading-relaxed transition-all duration-400 group-hover:opacity-100 group-hover:max-h-32">
                            Exploration and production support with engineering, construction,
                            and maintenance that keep operations safe and productive.
                        </p>
                    </div>
                </div>

                <!-- Midstream Card -->
                <div
                    class="industry-card group relative h-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        :style="{ backgroundImage: `url(${midstreamImage})` }">
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-400">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-400 group-hover:translate-y-0">
                        <h3 class="text-xl font-semibold mb-2 transition-all duration-300 group-hover:mb-4">
                            Midstream
                        </h3>
                        <p
                            class="opacity-0 max-h-0 overflow-hidden leading-relaxed transition-all duration-400 group-hover:opacity-100 group-hover:max-h-32">
                            Pipelines, storage, logistics, and transport systems designed for
                            efficiency, reliability, and long-term performance.
                        </p>
                    </div>
                </div>

                <!-- Downstream Card -->
                <div
                    class="industry-card group relative h-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        :style="{ backgroundImage: `url(${downstreamImage})` }">
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-400">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-400 group-hover:translate-y-0">
                        <h3 class="text-xl font-semibold mb-2 transition-all duration-300 group-hover:mb-4">
                            Downstream
                        </h3>
                        <p
                            class="opacity-0 max-h-0 overflow-hidden leading-relaxed transition-all duration-400 group-hover:opacity-100 group-hover:max-h-32">
                            Refining, processing, and distribution of energy products to ensure
                            availability across markets and industries.
                        </p>
                    </div>
                </div>

                <!-- Petrochemicals Card -->
                <div
                    class="industry-card group relative h-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        :style="{ backgroundImage: `url(${petrochemicalsImage})` }">
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-400">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-400 group-hover:translate-y-0">
                        <h3 class="text-xl font-semibold mb-2 transition-all duration-300 group-hover:mb-4">
                            Petrochemicals
                        </h3>
                        <p
                            class="opacity-0 max-h-0 overflow-hidden leading-relaxed transition-all duration-400 group-hover:opacity-100 group-hover:max-h-32">
                            Specialized chemical products and services that improve efficiency,
                            protect assets, and enhance industrial performance.
                        </p>
                    </div>
                </div>

                <!-- Marine Card -->
                <div
                    class="industry-card group relative h-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        :style="{ backgroundImage: `url(${marineImage})` }">
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-400">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-400 group-hover:translate-y-0">
                        <h3 class="text-xl font-semibold mb-2 transition-all duration-300 group-hover:mb-4">
                            Marine
                        </h3>
                        <p
                            class="opacity-0 max-h-0 overflow-hidden leading-relaxed transition-all duration-400 group-hover:opacity-100 group-hover:max-h-32">
                            Operations for vessels, cargo handling, hose management, and offshore
                            or coastal facility support.
                        </p>
                    </div>
                </div>

                <!-- Industrial Services Card -->
                <div
                    class="industry-card group relative h-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        :style="{ backgroundImage: `url(${industrialServicesImage})` }">
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-400">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-400 group-hover:translate-y-0">
                        <h3 class="text-xl font-semibold mb-2 transition-all duration-300 group-hover:mb-4">
                            Industrial Services
                        </h3>
                        <p
                            class="opacity-0 max-h-0 overflow-hidden leading-relaxed transition-all duration-400 group-hover:opacity-100 group-hover:max-h-32">
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
/* Only keeping complex animations that can't be replicated with Tailwind */
.industry-card:hover .absolute:last-child {
    transform: translateY(-10px);
}

/* Custom transition durations for smooth hover effects */
.duration-400 {
    transition-duration: 400ms;
}
</style>