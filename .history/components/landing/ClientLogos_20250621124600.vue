<template>
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 w-full transition-colors duration-300">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Trusted by Organizations You Trust
                </h2>
                <p class="text-lg text-gray-800 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    From startups to large corporations, we simplify business processes with smart, purposeful tech;
                    so clients can focus on what they do best.
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Click a logo to explore the digital solutions we built for them.
                </p>
            </div>

            <!-- Logo Carousel -->
            <div class="relative">
                <!-- Carousel Container -->
                <div class="carousel-container overflow-hidden">
                    <div class="carousel-track flex" ref="track">
                        <!-- Client Logos -->
                        <div v-for="(logo, index) in logos" :key="index"
                            class="carousel-slide flex-shrink-0 px-4 flex items-center justify-center">
                            <NuxtLink to="#" class="block transition-opacity duration-300 hover:opacity-80">
                                <img :src="`/assets/img/client-logo${index + 1}.png`" :alt="`Client Logo ${index + 1}`"
                                    class="max-h-12 max-w-[180px] object-contain dark:hidden" loading="lazy" />
                                <img :src="`/assets/img/client-logo${index + 1}-dark.png`"
                                    :alt="`Client Logo ${index + 1}`"
                                    class="max-h-12 max-w-[180px] object-contain hidden dark:block" loading="lazy" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Navigation Arrows -->
                <button @click="prev" class="carousel-nav left-0" aria-label="Previous">
                    <Icon name="lucide:chevron-left" class="w-6 h-6" />
                </button>
                <button @click="next" class="carousel-nav right-0" aria-label="Next">
                    <Icon name="lucide:chevron-right" class="w-6 h-6" />
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const logos = Array(12).fill(null); // 12 logos
const track = ref(null);
const currentIndex = ref(0);
const slideWidth = ref(0);
const visibleSlides = ref(4);

const updateSlideWidth = () => {
    if (track.value && track.value.firstChild) {
        slideWidth.value = track.value.firstChild.offsetWidth;
    }
};

const updateVisibleSlides = () => {
    const width = window.innerWidth;
    if (width < 640) {
        visibleSlides.value = 2;
    } else if (width < 1024) {
        visibleSlides.value = 3;
    } else {
        visibleSlides.value = 4;
    }
};

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % (logos.length - visibleSlides.value + 1);
    updateCarousel();
};

const prev = () => {
    currentIndex.value = Math.max(0, currentIndex.value - 1);
    updateCarousel();
};

const updateCarousel = () => {
    if (track.value) {
        track.value.style.transform = `translateX(-${currentIndex.value * slideWidth.value}px)`;
    }
};

onMounted(() => {
    updateVisibleSlides();
    updateSlideWidth();
    window.addEventListener('resize', () => {
        updateVisibleSlides();
        updateSlideWidth();
        updateCarousel();
    });
});
</script>

<style scoped>
/* Carousel Styles */
.carousel-container {
    margin: 0 auto;
    max-width: 1200px;
}

.carousel-track {
    transition: transform 0.5s ease;
}

.carousel-slide {
    width: calc(100% / 4);
    /* Default for desktop */
}

@media (max-width: 1023px) {
    .carousel-slide {
        width: calc(100% / 3);
        /* Tablet */
    }
}

@media (max-width: 639px) {
    .carousel-slide {
        width: calc(100% / 2);
        /* Mobile */
    }
}

/* Navigation Arrows */
.carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    transition: all 0.3s ease;
    color: #01348F;
}

.carousel-nav:hover {
    background: #f3f4f6;
    transform: translateY(-50%) scale(1.05);
}

.dark .carousel-nav {
    background: #374151;
    border-color: #4b5563;
    color: #60a5fa;
}

.dark .carousel-nav:hover {
    background: #4b5563;
}

/* Logo Hover Effects */
.carousel-slide img {
    transition: transform 0.3s ease, filter 0.3s ease;
    filter: grayscale(100%) opacity(70%);
}

.carousel-slide:hover img {
    filter: grayscale(0%) opacity(100%);
    transform: scale(1.05);
}

.dark .carousel-slide img {
    filter: grayscale(100%) opacity(50%);
}

.dark .carousel-slide:hover img {
    filter: grayscale(0%) opacity(100%);
}
</style>