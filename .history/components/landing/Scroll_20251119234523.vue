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
                        <img :src="book" alt="Book Cover" class="book-scroll-image" />
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
const importBooks = () => {
    const books = [];

    // PNG books (1-22)
    for (let i = 1; i <= 22; i++) {
        books.push(`/assets/img/book-literaforge${i}.png`);
    }

    // JPG books (23-28)
    for (let i = 23; i <= 28; i++) {
        books.push(`/assets/img/book-literaforge${i}.jpg`);
    }

    return books;
};

const allBooks = importBooks();

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