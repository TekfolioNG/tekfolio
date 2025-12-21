<template>
    <section class="relative w-full py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <!-- Section Header -->
        <div class="container mx-auto px-4 mb-8 md:mb-12 text-center">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                Some of Our Published Works
            </h2>
            <p class="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                A showcase of the stories we've helped bring to life
            </p>
        </div>

        <!-- Stacked Book Display -->
        <div class="container mx-auto px-4 mb-16 md:mb-20">
            <div class="book-stack-grid">
                <div v-for="(book, index) in displayedBooks" :key="index" class="book-stack-item"
                    :class="`book-${(index % 6) + 1}`">
                    <img :src="book" :alt="`Book Cover ${index + 1}`" class="book-stack-image" loading="lazy"
                        decoding="async" />
                </div>
            </div>

        </div>

        <!-- Services Section -->
        <div class="container mx-auto px-12">
            <div class="services-grid">
                <div class="services-content text-center md:text-left">
                    <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">
                        What We Help You Create
                    </h2>

                    <div class="space-y-8">
                        <div class="service-item">
                            <h3 class="text-xl md:text-2xl font-semibold text-blue-300 mb-1">
                                Books & Long-Form Projects
                            </h3>
                            <p class="text-gray-300">
                                We transform your knowledge, experience, and stories into compelling books that inform,
                                inspire, or lead. From concept development to final manuscript, we guide you through the
                                entire journey.
                            </p>
                        </div>

                        <div class="service-item">
                            <h3 class="text-xl md:text-2xl font-semibold text-blue-300 mb-2">
                                Business & Professional Documents
                            </h3>
                            <p class="text-gray-300">
                                Clear, polished writing for proposals, corporate profiles, personal profiles, and other
                                business assets—crafted to communicate value with precision and confidence.
                            </p>
                        </div>

                        <div class="service-item">
                            <h3 class="text-xl md:text-2xl font-semibold text-blue-300 mb-3">
                                Consultative Clarity Sessions
                            </h3>
                            <p class="text-gray-300">
                                Before the writing begins, we help you organize ideas, define your direction, and
                                sharpen the message so the final work is structured, meaningful, and aligned with your
                                goals.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="services-image">
                    <img src="~/assets/img/ghostwritingsection-literaforge.jpg" alt="Ghostwriting Services"
                        class="w-full h-full object-cover rounded-lg shadow-xl" loading="lazy" decoding="async" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue';

// Import all book covers
import book1 from '~/assets/img/book-literaforge1.png';
import book10 from '~/assets/img/book-literaforge10.png';
import book11 from '~/assets/img/book-literaforge11.png';
import book12 from '~/assets/img/book-literaforge12.png';
import book13 from '~/assets/img/book-literaforge13.png';
import book14 from '~/assets/img/book-literaforge14.png';
import book15 from '~/assets/img/book-literaforge15.png';
import book16 from '~/assets/img/book-literaforge16.png';
import book17 from '~/assets/img/book-literaforge17.png';
import book18 from '~/assets/img/book-literaforge18.png';
import book19 from '~/assets/img/book-literaforge19.png';
import book2 from '~/assets/img/book-literaforge2.png';
import book20 from '~/assets/img/book-literaforge20.png';
import book21 from '~/assets/img/book-literaforge21.png';
import book22 from '~/assets/img/book-literaforge22.png';
import book23 from '~/assets/img/book-literaforge23.jpg';
import book24 from '~/assets/img/book-literaforge24.jpg';
import book25 from '~/assets/img/book-literaforge25.jpg';
import book26 from '~/assets/img/book-literaforge26.jpg';
import book27 from '~/assets/img/book-literaforge27.jpg';
import book28 from '~/assets/img/book-literaforge28.jpg';
import book4 from '~/assets/img/book-literaforge4.png';
import book5 from '~/assets/img/book-literaforge5.png';
import book6 from '~/assets/img/book-literaforge6.png';
import book7 from '~/assets/img/book-literaforge7.png';
import book8 from '~/assets/img/book-literaforge8.png';
import book9 from '~/assets/img/book-literaforge9.png';

const allBooks = [
    book1, book2, book4, book5, book6, book7, book8, book9, book10,
    book11, book12, book13, book14, book15, book16, book17, book18, book19, book20,
    book21, book22, book23, book24, book25, book26, book27, book28
];

// Initially display only 12 books
const booksToShow = ref(12);

// Computed property for displayed books
const displayedBooks = computed(() => allBooks.slice(0, booksToShow.value));

// Function to load more books
const loadMoreBooks = () => {
    booksToShow.value = Math.min(booksToShow.value + 12, allBooks.length);
};
</script>

<style scoped>
.book-stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1.5rem;
    justify-items: center;
}

.book-stack-item {
    width: 100%;
    max-width: 220px;
    height: 300px;
    position: relative;
    transition: transform 0.3s ease, z-index 0.3s ease;
    z-index: 1;
}

.book-stack-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    /* Enhanced sharpness */
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    filter: contrast(1.08) brightness(1.02) saturate(1.05);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
}

.book-stack-item:hover {
    transform: translateY(-10px);
    z-index: 10;
}

.book-stack-item:hover .book-stack-image {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
}

/* Different rotation angles for visual interest */
.book-1 {
    transform: rotate(-2deg);
}

.book-2 {
    transform: rotate(1deg);
}

.book-3 {
    transform: rotate(-1deg);
}

.book-4 {
    transform: rotate(2deg);
}

.book-5 {
    transform: rotate(-3deg);
}

.book-6 {
    transform: rotate(0deg);
}

.book-stack-item:hover {
    transform: translateY(-10px) rotate(0deg) !important;
}

/* Services Section */
.services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
}

.services-content {
    order: 2;
}

.services-image {
    order: 1;
}

.service-item {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.service-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

/* Responsive adjustments */
@media (min-width: 768px) {
    .book-stack-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 2rem;
    }

    .book-stack-item {
        height: 320px;
    }
}

@media (min-width: 1024px) {
    .services-grid {
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }

    .services-content {
        order: 1;
    }

    .services-image {
        order: 2;
    }

    .book-stack-grid {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }

    .book-stack-item {
        height: 340px;
    }
}

@media (min-width: 1280px) {
    .book-stack-grid {
        grid-template-columns: repeat(6, 1fr);
    }
}

/* Mobile adjustments */
@media (max-width: 640px) {
    .book-stack-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    .book-stack-item {
        height: 240px;
        max-width: none;
    }

    .book-stack-image {
        border-radius: 6px;
    }
}
</style>