<template>
    <section class="py-16 md:py-24 bg-white transition-colors duration-300 mx-4 sm:mx-6 lg:mx-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Page Header -->
            <div class="text-center mb-12 md:mb-16">
                <h1 class="text-3xl lg:text-4xl font-barlow-extrabold text-gray-900 mb-4 md:mb-6 tracking-wide">
                    Programs & Events
                </h1>
                <p class="text-lg md:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed font-normal">
                    A visual journey through our training sessions, advisory programs, and collaborative initiatives
                    that drive business growth and community development across Africa.
                </p>
            </div>

            <!-- Images Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div v-for="(image, index) in allImages" :key="index"
                    class="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="aspect-square overflow-hidden">
                        <img :src="image.src" :alt="image.alt"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// All 35 images in JPG format
const allImages = [
    { src: '/assets/img/elevation-events1.jpg', alt: 'Elevation Consulting Event 1' },
    { src: '/assets/img/elevation-events2.jpg', alt: 'Elevation Consulting Event 2' },
    { src: '/assets/img/elevation-events3.jpg', alt: 'Elevation Consulting Event 3' },
    { src: '/assets/img/elevation-events4.jpg', alt: 'Elevation Consulting Event 4' },
    { src: '/assets/img/elevation-events5.jpg', alt: 'Elevation Consulting Event 5' },
    { src: '/assets/img/elevation-events6.jpg', alt: 'Elevation Consulting Event 6' },
    { src: '/assets/img/elevation-events7.jpg', alt: 'Elevation Consulting Event 7' },
    { src: '/assets/img/elevation-events8.jpg', alt: 'Elevation Consulting Event 8' },
    { src: '/assets/img/elevation-events9.jpg', alt: 'Elevation Consulting Event 9' },
    { src: '/assets/img/elevation-events10.jpg', alt: 'Elevation Consulting Event 10' },
    { src: '/assets/img/elevation-events11.jpg', alt: 'Elevation Consulting Event 11' },
    { src: '/assets/img/elevation-events12.jpg', alt: 'Elevation Consulting Event 12' },
    { src: '/assets/img/elevation-events13.jpg', alt: 'Elevation Consulting Event 13' },
    { src: '/assets/img/elevation-events14.jpg', alt: 'Elevation Consulting Event 14' },
    { src: '/assets/img/elevation-events15.jpg', alt: 'Elevation Consulting Event 15' },
    { src: '/assets/img/elevation-events16.jpg', alt: 'Elevation Consulting Event 16' },
    { src: '/assets/img/elevation-events17.jpg', alt: 'Elevation Consulting Event 17' },
    { src: '/assets/img/elevation-events18.jpg', alt: 'Elevation Consulting Event 18' },
    { src: '/assets/img/elevation-events19.jpg', alt: 'Elevation Consulting Event 19' },
    { src: '/assets/img/elevation-events20.jpg', alt: 'Elevation Consulting Event 20' },
    { src: '/assets/img/elevation-events21.jpg', alt: 'Elevation Consulting Event 21' },
    { src: '/assets/img/elevation-events22.jpg', alt: 'Elevation Consulting Event 22' },
    { src: '/assets/img/elevation-events23.jpg', alt: 'Elevation Consulting Event 23' },
    { src: '/assets/img/elevation-events24.jpg', alt: 'Elevation Consulting Event 24' },
    { src: '/assets/img/elevation-events25.jpg', alt: 'Elevation Consulting Event 25' },
    { src: '/assets/img/elevation-events26.jpg', alt: 'Elevation Consulting Event 26' },
    { src: '/assets/img/elevation-events27.jpg', alt: 'Elevation Consulting Event 27' },
    { src: '/assets/img/elevation-events28.jpg', alt: 'Elevation Consulting Event 28' },
    { src: '/assets/img/elevation-events29.jpg', alt: 'Elevation Consulting Event 29' },
    { src: '/assets/img/elevation-events30.jpg', alt: 'Elevation Consulting Event 30' },
    { src: '/assets/img/elevation-events31.jpg', alt: 'Elevation Consulting Event 31' },
    { src: '/assets/img/elevation-events32.jpg', alt: 'Elevation Consulting Event 32' },
    { src: '/assets/img/elevation-events33.jpg', alt: 'Elevation Consulting Event 33' },
    { src: '/assets/img/elevation-events34.jpg', alt: 'Elevation Consulting Event 34' },
    { src: '/assets/img/elevation-events35.jpg', alt: 'Elevation Consulting Event 35' }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

/* Enhanced responsive grid */
@media (max-width: 480px) {
    .grid-cols-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .gap-3 {
        gap: 0.5rem;
    }
}

@media (min-width: 481px) and (max-width: 640px) {
    .grid-cols-3 {
        grid-template-columns: repeat(3, 1fr);
    }

    .gap-4 {
        gap: 1rem;
    }
}

@media (min-width: 641px) and (max-width: 768px) {
    .grid-cols-4 {
        grid-template-columns: repeat(4, 1fr);
    }

    .gap-4 {
        gap: 1rem;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .grid-cols-4 {
        grid-template-columns: repeat(4, 1fr);
    }

    .gap-5 {
        gap: 1.25rem;
    }
}

@media (min-width: 1025px) {
    .grid-cols-5 {
        grid-template-columns: repeat(5, 1fr);
    }

    .gap-6 {
        gap: 1.5rem;
    }
}

/* Optimized transitions */
.transition-all {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

/* Aspect ratio for consistent square images */
.aspect-square {
    aspect-ratio: 1 / 1;
}

/* Improved image rendering */
img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {

    .transition-all,
    .transition-transform {
        transition: none;
    }

    .group:hover .group-hover\:scale-110 {
        transform: none;
    }
}
</style>