<template>
    <section class="py-12 md:py-20 bg-white transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Page Header -->
            <div class="text-center mb-12 md:mb-16">
                <h1
                    class="text-3xl md:text-4xl lg:text-5xl font-barlow-extrabold text-gray-900 mb-4 md:mb-6 tracking-wide">
                    Programs & Events
                </h1>
                <p class="text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    A visual journey through our training sessions, advisory programs, and collaborative initiatives
                    that drive business growth and community development across Africa.
                </p>
            </div>

            <!-- Images Grid -->
            <div
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                <div v-for="(image, index) in allImages" :key="index"
                    class="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div class="aspect-square overflow-hidden">
                        <img :src="image" alt=""
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 sharp-image"
                            loading="lazy" />
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-[#012430]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import all 35 images as JPG
import event1 from '~/assets/img/elevation-events1.jpg';
import event10 from '~/assets/img/elevation-events10.jpg';
import event11 from '~/assets/img/elevation-events11.jpg';
import event12 from '~/assets/img/elevation-events12.jpg';
import event13 from '~/assets/img/elevation-events13.jpg';
import event14 from '~/assets/img/elevation-events14.jpg';
import event15 from '~/assets/img/elevation-events15.jpg';
import event16 from '~/assets/img/elevation-events16.jpg';
import event17 from '~/assets/img/elevation-events17.jpg';
import event18 from '~/assets/img/elevation-events18.jpg';
import event19 from '~/assets/img/elevation-events19.jpg';
import event2 from '~/assets/img/elevation-events2.jpg';
import event20 from '~/assets/img/elevation-events20.jpg';
import event21 from '~/assets/img/elevation-events21.jpg';
import event22 from '~/assets/img/elevation-events22.jpg';
import event23 from '~/assets/img/elevation-events23.jpg';
import event24 from '~/assets/img/elevation-events24.jpg';
import event25 from '~/assets/img/elevation-events25.jpg';
import event26 from '~/assets/img/elevation-events26.jpg';
import event27 from '~/assets/img/elevation-events27.jpg';
import event28 from '~/assets/img/elevation-events28.jpg';
import event29 from '~/assets/img/elevation-events29.jpg';
import event3 from '~/assets/img/elevation-events3.jpg';
import event30 from '~/assets/img/elevation-events30.jpg';
import event31 from '~/assets/img/elevation-events31.jpg';
import event32 from '~/assets/img/elevation-events32.jpg';
import event33 from '~/assets/img/elevation-events33.jpg';
import event34 from '~/assets/img/elevation-events34.jpg';
import event35 from '~/assets/img/elevation-events35.jpg';
import event4 from '~/assets/img/elevation-events4.jpg';
import event5 from '~/assets/img/elevation-events5.jpg';
import event6 from '~/assets/img/elevation-events6.jpg';
import event7 from '~/assets/img/elevation-events7.jpg';
import event8 from '~/assets/img/elevation-events8.jpg';
import event9 from '~/assets/img/elevation-events9.jpg';

const allImages = [
    event1, event2, event3, event4, event5, event6, event7, event8, event9, event10,
    event11, event12, event13, event14, event15, event16, event17, event18, event19, event20,
    event21, event22, event23, event24, event25, event26, event27, event28, event29, event30,
    event31, event32, event33, event34, event35
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

/* Ensure aspect ratio is maintained */
.aspect-square {
    aspect-ratio: 1 / 1;
}

/* Sharp image rendering */
.sharp-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
}

/* Smooth transitions */
.transition-all {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Optimize hover effects */
@media (hover: hover) {
    .group:hover {
        z-index: 10;
    }
}

/* Prevent layout shift on mobile */
@media (max-width: 640px) {
    .gap-3 {
        gap: 0.5rem;
    }
}
</style>