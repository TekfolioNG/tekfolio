<template>
    <div class="industries-section py-16 px-4 bg-gray-50">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
                <p class="text-lg text-gray-600 max-w-4xl mx-auto">
                    Syntanium supports vital operations across the oil and gas industry, delivering solutions that
                    strengthen infrastructure, safeguard assets, and ensure reliable energy supply.
                </p>
            </div>

            <!-- Industries Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="industry in industries" :key="industry.id"
                    class="industry-card group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
                    <!-- Background Image -->
                    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                        :style="`background-image: url('/${industry.image}')`"></div>

                    <!-- Gradient Overlay -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/85 group-hover:via-black/70 group-hover:to-black/30 transition-all duration-500">
                    </div>

                    <!-- Content Container -->
                    <div class="absolute inset-0 flex flex-col justify-end p-6">
                        <!-- Title -->
                        <h3
                            class="text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                            {{ industry.title }}
                        </h3>

                        <!-- Description (Hidden by default, shown on hover) -->
                        <p
                            class="text-white/90 text-sm leading-relaxed opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                            {{ industry.description }}
                        </p>
                    </div>

                    <!-- Subtle border on hover -->
                    <div
                        class="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-all duration-300">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const industries = [
    {
        id: 1,
        title: 'Upstream',
        description: 'Exploration and production support with engineering, construction, and maintenance that keep operations safe and productive.',
        image: 'assets/img/upstream-syntanium.jpg'
    },
    {
        id: 2,
        title: 'Midstream',
        description: 'Pipelines, storage, logistics, and transport systems designed for efficiency, reliability, and long-term performance.',
        image: 'assets/img/gas-pipelines-syntanium2.jpg'
    },
    {
        id: 3,
        title: 'Downstream',
        description: 'Refining, processing, and distribution of energy products to ensure availability across markets and industries.',
        image: 'assets/img/downstream-syntanium.jpg'
    },
    {
        id: 4,
        title: 'Petrochemicals',
        description: 'Specialized chemical products and services that improve efficiency, protect assets, and enhance industrial performance.',
        image: 'assets/img/petrochemicals-syntanium.jpg'
    },
    {
        id: 5,
        title: 'Marine',
        description: 'Operations for vessels, cargo handling, hose management, and offshore or coastal facility support.',
        image: 'assets/img/marine-syntanium.jpg'
    },
    {
        id: 6,
        title: 'Industrial Services',
        description: 'Turnkey construction, asset integrity, and maintenance solutions supporting large-scale energy and processing facilities.',
        image: 'assets/img/industrial-services-syntanium.jpg'
    }
]
</script>

<style scoped>
.industry-card {
    /* Ensure consistent aspect ratio */
    aspect-ratio: 4/3;
}

.industry-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.4) 60%,
            transparent 100%);
    transition: all 0.5s ease;
    z-index: 1;
}

.industry-card:hover::before {
    background: linear-gradient(to top,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.7) 70%,
            rgba(0, 0, 0, 0.3) 100%);
}

.industry-card>div:last-child {
    z-index: 2;
}

/* Additional responsive adjustments */
@media (max-width: 768px) {
    .industry-card {
        height: 300px;
    }
}

@media (max-width: 640px) {
    .industry-card {
        height: 250px;
    }

    .industry-card h3 {
        font-size: 1.5rem;
    }

    .industry-card p {
        font-size: 0.875rem;
    }
}
</style>