<template>
    <section class="py-16 md:py-24 bg-white transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-2xl lg:text-3xl font-barlow-extrabold text-gray-900 mb-6 tracking-wide">
                    Our Clients and Partners
                </h2>
                <p class="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-normal">
                    Proud to support institutions driving innovation, enterprise, and economic growth across Nigeria and
                    Africa.
                </p>
            </div>

            <!-- Scrolling Logos Container -->
            <div class="relative">
                <!-- Gradient Overlays -->
                <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                <!-- Scrolling Logos -->
                <div class="overflow-hidden">
                    <div class="flex space-x-12 md:space-x-16 lg:space-x-20 animate-scroll">
                        <!-- First Set -->
                        <div class="flex space-x-12 md:space-x-16 lg:space-x-20 flex-shrink-0">
                            <div v-for="client in clients" :key="client.name" class="flex items-center justify-center">
                                <img :src="`/assets/img/${client.image}`" :alt="client.name"
                                    class="h-12 md:h-16 lg:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                            </div>
                        </div>
                        <!-- Duplicate Set for Seamless Loop -->
                        <div class="flex space-x-12 md:space-x-16 lg:space-x-20 flex-shrink-0">
                            <div v-for="client in clients" :key="`${client.name}-duplicate`"
                                class="flex items-center justify-center">
                                <img :src="`/assets/img/${clients.image}`" :alt="client.name"
                                    class="h-12 md:h-16 lg:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Clients data
const clients = [
    { name: 'Tony Elumelu Foundation', image: 'tef.png' },
    { name: 'Lagos State Government CCOP', image: 'lasg-ccop.png' },
    { name: 'RISA', image: 'risa.png' },
    { name: 'Adam Smith International', image: 'adamsmith.png' },
    { name: 'AW Fishnet', image: 'awfishnet.png' },
    { name: 'Bank of Industry', image: 'boi.png' },
    { name: 'IIF', image: 'iif.png' },
    { name: 'ITC ILO', image: 'itc-ilo.png' },
    { name: 'APPEALS', image: 'appeals.png' },
    { name: 'FATE Foundation', image: 'fate.png' },
    { name: 'Algorism', image: 'algorism.png' },
    { name: 'SMEDAN', image: 'smedan.png' }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

/* Scrolling animation */
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-scroll {
    animation: scroll 40s linear infinite;
    display: flex;
    width: max-content;
}

/* Pause animation on hover */
.animate-scroll:hover {
    animation-play-state: paused;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
    .animate-scroll {
        animation: scroll 30s linear infinite;
    }
}

@media (max-width: 640px) {
    .animate-scroll {
        animation: scroll 25s linear infinite;
    }

    .space-x-12 {
        gap: 2rem;
    }
}
</style>