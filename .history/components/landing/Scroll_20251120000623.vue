<template>
    <section class="relative w-full py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <!-- Section Header -->
        <div class="container mx-auto px-4 mb-8 md:mb-12 text-center">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                Our Published Works
            </h2>
            <p class="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                A showcase of the stories we've helped bring to life
            </p>
        </div>

        <!-- First Row - Scrolls Right -->
        <div class="book-scroll-container mb-6 md:mb-8">
            <div class="book-scroll-track scroll-right">
                <div class="book-scroll-content">
                    <div v-for="book in firstRowBooks" :key="book" class="book-scroll-item">
                        <img :src="book" alt="Book Cover" class="book-scroll-image" loading="lazy" decoding="async" />
                    </div>
                </div>
                <!-- Duplicate for seamless loop -->
                <div class="book-scroll-content" aria-hidden="true">
                    <div v-for="book in firstRowBooks" :key="`${book}-duplicate`" class="book-scroll-item">
                        <img :src="book" alt="Book Cover" class="book-scroll-image" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Second Row - Scrolls Left -->
        <div class="book-scroll-container">
            <div class="book-scroll-track scroll-left">
                <div class="book-scroll-content">
                    <div v-for="book in secondRowBooks" :key="book" class="book-scroll-item">
                        <img :src="book" alt="Book Cover" class="book-scroll-image" />
                    </div>
                </div>
                <!-- Duplicate for seamless loop -->
                <div class="book-scroll-content" aria-hidden="true">
                    <div v-for="book in secondRowBooks" :key="`${book}-duplicate`" class="book-scroll-item">
                        <img :src="book" alt="Book Cover" class="book-scroll-image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';

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
    book1, book2, book3, book4, book5, book6, book7, book8, book9, book10,
    book11, book12, book13, book14, book15, book16, book17, book18, book19, book20,
    book21, book22, book23, book24, book25, book26, book27, book28
];

// Split books into two rows
const firstRowBooks = computed(() => allBooks.slice(0, 14));
const secondRowBooks = computed(() => allBooks.slice(14));
</script>

<style scoped>
.book-scroll-container {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.book-scroll-track {
    display: flex;
    width: fit-content;
}

.book-scroll-content {
    display: flex;
    gap: 1.5rem;
    padding: 0 0.75rem;
}

.book-scroll-item {
    flex-shrink: 0;
    width: 200px;
    height: 280px;
    position: relative;
}

.book-scroll-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transform: rotate(0deg);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    /* Enhanced sharpness */
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    filter: contrast(1.08) brightness(1.02) saturate(1.05);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
}

.book-scroll-image:hover {
    transform: scale(1.05) rotate(0deg);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
    z-index: 10;
}

/* Scroll animations */
.scroll-right {
    animation: scrollRight 60s linear infinite;
}

.scroll-left {
    animation: scrollLeft 60s linear infinite;
}

@keyframes scrollRight {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

@keyframes scrollLeft {
    0% {
        transform: translateX(-50%);
    }

    100% {
        transform: translateX(0);
    }
}

/* Pause animation on hover */
.book-scroll-container:hover .book-scroll-track {
    animation-play-state: paused;
}

/* Responsive sizing */
@media (max-width: 640px) {
    .book-scroll-item {
        width: 140px;
        height: 200px;
    }

    .book-scroll-content {
        gap: 1rem;
    }
}

@media (min-width: 641px) and (max-width: 1024px) {
    .book-scroll-item {
        width: 170px;
        height: 240px;
    }
}

@media (min-width: 1025px) {
    .book-scroll-item {
        width: 220px;
        height: 300px;
    }

    .book-scroll-content {
        gap: 2rem;
    }
}
</style>