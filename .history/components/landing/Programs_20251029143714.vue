<template>
    <section class="py-16 md:py-24 bg-white transition-colors duration-300 mx-4 sm:mx-6 lg:mx-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Page Header -->
            <div class="text-center mb-16">
                <h1 class="text-3xl lg:text-4xl font-barlow-extrabold text-gray-900 mb-6 tracking-wide">
                    Programs & Events
                </h1>
                <p class="text-lg md:text-xl text-gray-900 max-w-4xl mx-auto leading-relaxed font-normal">
                    Explore our journey of impact through training sessions, advisory programs, and collaborative
                    initiatives
                    that strengthen businesses and communities across Nigeria and Africa.
                </p>
            </div>

            <!-- Filter Section -->
            <div class="flex flex-wrap justify-center gap-4 mb-12">
                <button v-for="filter in filters" :key="filter.id" @click="activeFilter = filter.id" :class="[
                    'px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2',
                    activeFilter === filter.id
                        ? 'bg-[#006688] text-white border-[#006688]'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-[#006688] hover:text-[#006688]'
                ]">
                    {{ filter.label }}
                </button>
            </div>

            <!-- Gallery Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                <div v-for="(image, index) in filteredImages" :key="index"
                    class="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    @click="openLightbox(index)">
                    <div class="aspect-square overflow-hidden">
                        <img :src="image.src" :alt="image.alt"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-4 left-4 right-4">
                            <span
                                class="inline-block px-3 py-1 bg-[#006688] text-white text-sm font-semibold rounded-full mb-2">
                                {{ image.category }}
                            </span>
                            <p class="text-white font-semibold text-lg leading-tight">
                                {{ image.title }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Load More Button -->
            <div v-if="visibleImages < allImages.length" class="text-center">
                <button @click="loadMore"
                    class="inline-flex items-center justify-center px-8 py-3 bg-[#006688] text-white font-semibold rounded-lg shadow-lg hover:bg-[#004466] transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15">
                        </path>
                    </svg>
                    Load More Events
                </button>
            </div>

            <!-- Statistics Section -->
            <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mt-16">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div class="text-3xl md:text-4xl font-barlow-extrabold text-[#006688] mb-2">35+</div>
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
                    Interested in collaborating on programs or events?
                </p>
                <NuxtLink to="/contact"
                    class="inline-flex items-center justify-center px-8 py-3 bg-[#006688] text-white font-semibold rounded-lg shadow-lg hover:bg-[#004466] transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1"></path>
                    </svg>
                    Partner With Us
                </NuxtLink>
            </div>
        </div>

        <!-- Lightbox Modal -->
        <div v-if="lightboxOpen" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div class="relative max-w-4xl max-h-full w-full">
                <!-- Close Button -->
                <button @click="closeLightbox"
                    class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>

                <!-- Navigation Buttons -->
                <button v-if="currentImageIndex > 0" @click="previousImage"
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                        </path>
                    </svg>
                </button>

                <button v-if="currentImageIndex < filteredImages.length - 1" @click="nextImage"
                    class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

                <!-- Image -->
                <div class="bg-white rounded-lg overflow-hidden">
                    <img :src="filteredImages[currentImageIndex].src" :alt="filteredImages[currentImageIndex].alt"
                        class="w-full h-auto max-h-[70vh] object-contain" />
                    <div class="p-4 bg-white">
                        <h3 class="text-xl font-barlow-extrabold text-gray-900 mb-2">
                            {{ filteredImages[currentImageIndex].title }}
                        </h3>
                        <p class="text-gray-700">
                            {{ filteredImages[currentImageIndex].description }}
                        </p>
                    </div>
                </div>

                <!-- Image Counter -->
                <div class="text-white text-center mt-4">
                    {{ currentImageIndex + 1 }} / {{ filteredImages.length }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue'

// Filters
const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'training', label: 'Training Programs' },
    { id: 'advisory', label: 'Advisory Sessions' },
    { id: 'partnership', label: 'Partnership Events' },
    { id: 'workshop', label: 'Workshops' }
]

const activeFilter = ref('all')
const visibleImages = ref(12)
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

// Generate image data for all 35 images
const allImages = Array.from({ length: 35 }, (_, index) => {
    const imageNumber = index + 1
    const categories = ['training', 'advisory', 'partnership', 'workshop']
    const category = categories[Math.floor(Math.random() * categories.length)]

    const titles = {
        training: [
            'Business Management Training',
            'Entrepreneurship Masterclass',
            'Digital Skills Workshop',
            'Leadership Development Program',
            'Financial Literacy Session'
        ],
        advisory: [
            'Strategic Advisory Session',
            'Business Consultation',
            'Growth Strategy Meeting',
            'Performance Review',
            'Investment Readiness Advisory'
        ],
        partnership: [
            'Collaborative Partnership Launch',
            'Stakeholder Engagement',
            'Industry Partnership Forum',
            'Development Partner Meeting',
            'Strategic Alliance Event'
        ],
        workshop: [
            'Hands-on Business Workshop',
            'Interactive Skills Session',
            'Practical Training Workshop',
            'Team Building Exercise',
            'Innovation Workshop'
        ]
    }

    const descriptions = {
        training: 'Comprehensive training program designed to build capacity and enhance skills for sustainable business growth.',
        advisory: 'Strategic advisory session focused on providing expert guidance for business optimization and growth.',
        partnership: 'Collaborative event bringing together partners to drive innovation and create lasting impact.',
        workshop: 'Interactive workshop session promoting practical learning and skill development.'
    }

    return {
        src: `/assets/img/elevation-events${imageNumber}.png`,
        alt: `Elevation Consulting Event ${imageNumber}`,
        category: category,
        title: titles[category][Math.floor(Math.random() * titles[category].length)],
        description: descriptions[category]
    }
})

// Computed properties
const filteredImages = computed(() => {
    const filtered = activeFilter.value === 'all'
        ? allImages
        : allImages.filter(image => image.category === activeFilter.value)
    return filtered.slice(0, visibleImages.value)
})

// Methods
const loadMore = () => {
    visibleImages.value += 12
}

const openLightbox = (index) => {
    currentImageIndex.value = index
    lightboxOpen.value = true
}

const closeLightbox = () => {
    lightboxOpen.value = false
}

const nextImage = () => {
    if (currentImageIndex.value < filteredImages.value.length - 1) {
        currentImageIndex.value++
    }
}

const previousImage = () => {
    if (currentImageIndex.value > 0) {
        currentImageIndex.value--
    }
}

// Keyboard navigation for lightbox
if (process.client) {
    document.addEventListener('keydown', (e) => {
        if (!lightboxOpen.value) return

        if (e.key === 'Escape') closeLightbox()
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') previousImage()
    })
}
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
    .grid-cols-4 {
        grid-template-columns: repeat(2, 1fr);
    }

    .p-8 {
        padding: 1.5rem;
    }
}

@media (max-width: 640px) {
    .grid-cols-2 {
        grid-template-columns: 1fr;
    }

    .text-3xl {
        font-size: 2rem;
    }

    .gap-6 {
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .p-4 {
        padding: 1rem;
    }

    .text-lg {
        font-size: 1rem;
    }
}

/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}
</style>