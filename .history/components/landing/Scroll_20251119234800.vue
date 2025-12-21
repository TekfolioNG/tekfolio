<template>
    <section class="relative w-full bg-white py-12 md:py-16 overflow-hidden">
        <div class="container mx-auto px-4">
            <!-- Section Header -->
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Our Published Works
                </h2>
                <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Discover the diverse range of books we've helped bring to life through our publishing and
                    ghostwriting services.
                </p>
            </div>

            <!-- First Row - Scroll Right to Left -->
            <div class="relative mb-8 md:mb-12">
                <div class="scrolling-books-row scroll-left" ref="row1">
                    <div class="scrolling-books-inner">
                        <!-- First set of books -->
                        <div v-for="(book, index) in firstRowBooks" :key="`row1-${index}`" class="book-cover-item">
                            <img :src="book" :alt="`Book Cover ${index + 1}`" class="book-cover-image" />
                        </div>
                        <!-- Duplicate for seamless loop -->
                        <div v-for="(book, index) in firstRowBooks" :key="`row1-dup-${index}`" class="book-cover-item">
                            <img :src="book" :alt="`Book Cover ${index + 1}`" class="book-cover-image" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second Row - Scroll Left to Right -->
            <div class="relative">
                <div class="scrolling-books-row scroll-right" ref="row2">
                    <div class="scrolling-books-inner">
                        <!-- Second set of books -->
                        <div v-for="(book, index) in secondRowBooks" :key="`row2-${index}`" class="book-cover-item">
                            <img :src="book" :alt="`Book Cover ${index + 1}`" class="book-cover-image" />
                        </div>
                        <!-- Duplicate for seamless loop -->
                        <div v-for="(book, index) in secondRowBooks" :key="`row2-dup-${index}`" class="book-cover-item">
                            <img :src="book" :alt="`Book Cover ${index + 1}`" class="book-cover-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Import all book images (PNG files 1-22)
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
import book4 from '~/assets/img/book-literaforge4.png';
import book5 from '~/assets/img/book-literaforge5.png';
import book6 from '~/assets/img/book-literaforge6.png';
import book7 from '~/assets/img/book-literaforge7.png';
import book8 from '~/assets/img/book-literaforge8.png';
import book9 from '~/assets/img/book-literaforge9.png';

// Import JPG files (23-28)
import book23 from '~/assets/img/book-literaforge23.jpg';
import book24 from '~/assets/img/book-literaforge24.jpg';
import book25 from '~/assets/img/book-literaforge25.jpg';
import book26 from '~/assets/img/book-literaforge26.jpg';
import book27 from '~/assets/img/book-literaforge27.jpg';
import book28 from '~/assets/img/book-literaforge28.jpg';

// Combine all books
const allBooks = [
    book1, book2, book3, book4, book5, book6, book7, book8, book9, book10,
    book11, book12, book13, book14, book15, book16, book17, book18, book19, book20,
    book21, book22, book23, book24, book25, book26, book27, book28
];

// Split into two rows
const firstRowBooks = allBooks.slice(0, Math.ceil(allBooks.length / 2));
const secondRowBooks = allBooks.slice(Math.ceil(allBooks.length / 2));

const row1 = ref(null);
const row2 = ref(null);

onMounted(() => {
    // The scrolling is handled entirely by CSS animations
    // This ensures smooth performance
});
</script>

<style scoped>
/* Scrolling Books Row Container */
.scrolling-books-row {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 20px 0;
}

.scrolling-books-inner {
    display: flex;
    gap: 2rem;
    width: max-content;
    animation-duration: 40s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

/* First Row - Scroll Right to Left */
.scroll-left .scrolling-books-inner {
    animation-name: scrollLeft;
}

/* Second Row - Scroll Left to Right */
.scroll-right .scrolling-books-inner {
    animation-name: scrollRight;
}

/* Book Cover Item */
.book-cover-item {
    flex-shrink: 0;
    width: 200px;
    /* Fixed width for consistent sizing */
    height: 280px;
    /* Fixed height for consistent sizing */
    perspective: 1000px;
}

/* Book Cover Image - Horizontal layout and sharp */
.book-cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

    /* Sharp image rendering */
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
    filter: contrast(1.05) brightness(1.02);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0) rotate(0deg);
    /* Horizontal layout */

    /* Smooth transitions for any hover effects */
    transition: all 0.3s ease;
}

/* Optional hover effect */
.book-cover-item:hover .book-cover-image {
    transform: translateZ(0) scale(1.05);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

/* Scroll Animations */
@keyframes scrollLeft {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-50% - 1rem));
        /* Account for gap */
    }
}

@keyframes scrollRight {
    0% {
        transform: translateX(calc(-50% - 1rem));
        /* Start from duplicated position */
    }

    100% {
        transform: translateX(0);
    }
}

/* Pause animation on hover for better UX */
.scrolling-books-row:hover .scrolling-books-inner {
    animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .book-cover-item {
        width: 150px;
        height: 210px;
    }

    .scrolling-books-inner {
        gap: 1.5rem;
    }
}

@media (max-width: 640px) {
    .book-cover-item {
        width: 120px;
        height: 168px;
    }

    .scrolling-books-inner {
        gap: 1rem;
    }

    .scrolling-books-inner {
        animation-duration: 30s;
        /* Faster on mobile */
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    .scrolling-books-inner {
        animation: none;
    }

    .scrolling-books-row {
        overflow-x: auto;
    }
}
</style>