<template>
    <section class="py-16 md:py-24 bg-white transition-colors duration-300 mx-4 sm:mx-6 lg:mx-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Page Header -->
            <div class="text-center mb-12">
                <h1 class="text-3xl lg:text-4xl font-barlow-extrabold text-gray-900 mb-6 tracking-wide">
                    Programs & Events
                </h1>
                <p class="text-lg md:text-xl text-gray-900 max-w-4xl mx-auto leading-relaxed font-normal">
                    A visual journey through our training sessions, advisory programs, and collaborative initiatives
                    that drive business growth and community development across Africa.
                </p>
            </div>

            <!-- Images Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                <div v-for="(image, index) in allImages" :key="index"
                    class="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div class="aspect-square overflow-hidden">
                        <img :src="image.src" :alt="image.alt"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div
                        class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                        <div
                            class="p-3 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <span class="inline-block px-2 py-1 bg-[#006688] text-white text-xs font-semibold rounded">
                                {{ image.category }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Statistics Section -->
            <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mt-16">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div class="text-3xl md:text-4xl font-barlow-extrabold text-[#006688] mb-2">35</div>
                        <div class="text-gray-700 font-semibold">Programs & Events</div>
                    </div>
                    <div>
                        <div class="text-3xl md:text-4xl font-barlow-extrabold text-[#006688] mb-2">5000+</div>
                        <div class="text-gray-700 font-semibold">Participants Trained</div>
                    </div>
                    <div>
                        <div class="text-3xl md:text-4xl font-barlow-extrabold text-[#006688] mb-2">15+</div>
                        <div class="text-gray-700 font-semibold">Partner Organizations</div>
                    </div>
                    <div>
                        <div class="text-3xl md:text-4xl font-barlow-extrabold text-[#006688] mb-2">5</div>
                        <div class="text-gray-700 font-semibold">Years of Impact</div>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="text-center mt-16 pt-8 border-t border-gray-200">
                <p class="text-lg text-gray-900 mb-6">
                    Want to be part of our next program or event?
                </p>
                <NuxtLink to="/contact"
                    class="inline-flex items-center justify-center px-8 py-3 bg-[#006688] text-white font-semibold rounded-lg shadow-lg hover:bg-[#004466] transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                        </path>
                    </svg>
                    Get Involved
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import all 35 images
const allImages = [
    { src: '/assets/img/elevation-events1.png', alt: 'Elevation Consulting Event 1', category: 'Training' },
    { src: '/assets/img/elevation-events2.png', alt: 'Elevation Consulting Event 2', category: 'Workshop' },
    { src: '/assets/img/elevation-events3.png', alt: 'Elevation Consulting Event 3', category: 'Advisory' },
    { src: '/assets/img/elevation-events4.png', alt: 'Elevation Consulting Event 4', category: 'Partnership' },
    { src: '/assets/img/elevation-events5.png', alt: 'Elevation Consulting Event 5', category: 'Training' },
    { src: '/assets/img/elevation-events6.png', alt: 'Elevation Consulting Event 6', category: 'Workshop' },
    { src: '/assets/img/elevation-events7.png', alt: 'Elevation Consulting Event 7', category: 'Advisory' },
    { src: '/assets/img/elevation-events8.png', alt: 'Elevation Consulting Event 8', category: 'Partnership' },
    { src: '/assets/img/elevation-events9.png', alt: 'Elevation Consulting Event 9', category: 'Training' },
    { src: '/assets/img/elevation-events10.png', alt: 'Elevation Consulting Event 10', category: 'Workshop' },
    { src: '/assets/img/elevation-events11.png', alt: 'Elevation Consulting Event 11', category: 'Advisory' },
    { src: '/assets/img/elevation-events12.png', alt: 'Elevation Consulting Event 12', category: 'Partnership' },
    { src: '/assets/img/elevation-events13.png', alt: 'Elevation Consulting Event 13', category: 'Training' },
    { src: '/assets/img/elevation-events14.png', alt: 'Elevation Consulting Event 14', category: 'Workshop' },
    { src: '/assets/img/elevation-events15.png', alt: 'Elevation Consulting Event 15', category: 'Advisory' },
    { src: '/assets/img/elevation-events16.png', alt: 'Elevation Consulting Event 16', category: 'Partnership' },
    { src: '/assets/img/elevation-events17.png', alt: 'Elevation Consulting Event 17', category: 'Training' },
    { src: '/assets/img/elevation-events18.png', alt: 'Elevation Consulting Event 18', category: 'Workshop' },
    { src: '/assets/img/elevation-events19.png', alt: 'Elevation Consulting Event 19', category: 'Advisory' },
    { src: '/assets/img/elevation-events20.png', alt: 'Elevation Consulting Event 20', category: 'Partnership' },
    { src: '/assets/img/elevation-events21.png', alt: 'Elevation Consulting Event 21', category: 'Training' },
    { src: '/assets/img/elevation-events22.png', alt: 'Elevation Consulting Event 22', category: 'Workshop' },
    { src: '/assets/img/elevation-events23.png', alt: 'Elevation Consulting Event 23', category: 'Advisory' },
    { src: '/assets/img/elevation-events24.png', alt: 'Elevation Consulting Event 24', category: 'Partnership' },
    { src: '/assets/img/elevation-events25.png', alt: 'Elevation Consulting Event 25', category: 'Training' },
    { src: '/assets/img/elevation-events26.png', alt: 'Elevation Consulting Event 26', category: 'Workshop' },
    { src: '/assets/img/elevation-events27.png', alt: 'Elevation Consulting Event 27', category: 'Advisory' },
    { src: '/assets/img/elevation-events28.png', alt: 'Elevation Consulting Event 28', category: 'Partnership' },
    { src: '/assets/img/elevation-events29.png', alt: 'Elevation Consulting Event 29', category: 'Training' },
    { src: '/assets/img/elevation-events30.png', alt: 'Elevation Consulting Event 30', category: 'Workshop' },
    { src: '/assets/img/elevation-events31.png', alt: 'Elevation Consulting Event 31', category: 'Advisory' },
    { src: '/assets/img/elevation-events32.png', alt: 'Elevation Consulting Event 32', category: 'Partnership' },
    { src: '/assets/img/elevation-events33.png', alt: 'Elevation Consulting Event 33', category: 'Training' },
    { src: '/assets/img/elevation-events34.png', alt: 'Elevation Consulting Event 34', category: 'Workshop' },
    { src: '/assets/img/elevation-events35.png', alt: 'Elevation Consulting Event 35', category: 'Advisory' }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
    .grid-cols-5 {
        grid-template-columns: repeat(3, 1fr);
    }

    .p-8 {
        padding: 1.5rem;
    }

    .gap-6 {
        gap: 0.5rem;
    }
}

@media (max-width: 640px) {
    .grid-cols-3 {
        grid-template-columns: repeat(2, 1fr);
    }

    .text-3xl {
        font-size: 2rem;
    }

    .p-3 {
        padding: 0.5rem;
    }
}

@media (max-width: 480px) {
    .grid-cols-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .text-lg {
        font-size: 1rem;
    }

    .p-2 {
        padding: 0.25rem;
    }
}

/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}

/* Aspect ratio for square images */
.aspect-square {
    aspect-ratio: 1 / 1;
}
</style>