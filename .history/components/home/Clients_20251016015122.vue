<template>
    <section class="py-16 md:py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <!-- Section Header -->
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-2xl lg:text-3xl font-barlow-extrabold text-gray-900 mb-4 tracking-wide uppercase">
                    Our Clients and Partners
                </h2>
                <p class="text-base md:text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
                    Proud to support institutions driving innovation, enterprise, and economic growth across Nigeria and
                    Africa.
                </p>
            </div>

            <!-- Scrolling Logo Container -->
            <div class="relative">
                <!-- Gradient Overlays -->
                <div
                    class="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none">
                </div>
                <div
                    class="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none">
                </div>

                <!-- Scrolling Track -->
                <div class="logo-scroll-container">
                    <div class="logo-scroll-track">
                        <!-- First Set of Logos -->
                        <div v-for="(logo, index) in [...clientLogos, ...clientLogos]" :key="`logo-${index}`"
                            class="logo-item">
                            <img :src="logo.src" :alt="logo.alt" class="logo-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Client logos data
const clientLogos = [
    { src: '/assets/img/tef.png', alt: 'TEF' },
    { src: '/assets/img/lasg-ccop.png', alt: 'LASG CCOP' },
    { src: '/assets/img/risa.png', alt: 'RISA' },
    { src: '/assets/img/adamsmith.png', alt: 'Adam Smith International' },
    { src: '/assets/img/awfishnet.png', alt: 'AW Fishnet' },
    { src: '/assets/img/boi.png', alt: 'BOI' },
    { src: '/assets/img/iif.png', alt: 'IIF' },
    { src: '/assets/img/itc-ilo.png', alt: 'ITC ILO' },
    { src: '/assets/img/appeals.png', alt: 'Appeals' },
    { src: '/assets/img/fate.png', alt: 'FATE' },
    { src: '/assets/img/algorism.png', alt: 'Algorism' },
    { src: '/assets/img/smedan.png', alt: 'SMEDAN' }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

.logo-scroll-container {
    overflow: hidden;
    padding: 2rem 0;
}

.logo-scroll-track {
    display: flex;
    gap: 4rem;
    animation: scroll 40s linear infinite;
    width: fit-content;
}

.logo-scroll-track:hover {
    animation-play-state: paused;
}

.logo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    background: white;
    border-radius: 0.75rem;
    transition: all 0.3s ease;
}

.logo-item:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.logo-img {
    height: 60px;
    width: auto;
    max-width: 150px;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.logo-item:hover .logo-img {
    transform: scale(1.05);
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .logo-scroll-track {
        gap: 2rem;
        animation: scroll 30s linear infinite;
    }

    .logo-item {
        padding: 0.75rem 1.5rem;
    }

    .logo-img {
        height: 45px;
        max-width: 120px;
    }
}

@media (max-width: 480px) {
    .logo-scroll-track {
        gap: 1.5rem;
        animation: scroll 25s linear infinite;
    }

    .logo-item {
        padding: 0.5rem 1rem;
    }

    .logo-img {
        height: 35px;
        max-width: 100px;
    }
}
</style>