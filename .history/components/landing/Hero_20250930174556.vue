<template>
    <section class="relative w-full h-96 md:h-[500px] overflow-hidden">
        <!-- Background Image - Flushed Right -->
        <div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent">
            <img :src="whoWeAreImage" alt="Who We Are - Syntanium Energy"
                class="absolute top-0 right-0 h-full w-full md:w-3/4 object-cover object-right sharp-image" />
        </div>
        <!-- Content Overlay - Left Side -->
        <div class="relative z-10 h-full flex items-center">
            <div class="container mx-auto px-6 md:px-12">
                <div class="max-w-2xl">
                    <h1
                        class="font-barlow-extrabold text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Who We Are
                    </h1>
                    <div class="mt-4 w-20 h-1 bg-red-500"></div>
                </div>
            </div>
        </div>

        <!-- Dark overlay for better text readability on mobile -->
        <div class="absolute inset-0 bg-black/40 md:bg-transparent"></div>
    </section>
</template>

<script setup>
// Import image from assets directory
import whoWeAreImage from '~/assets/img/about-syntanium-hero.jpg';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

.sharp-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    filter: contrast(1.05) brightness(1.02) saturate(1.05);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

section {
    margin-left: calc(-50vw + 50%);
    width: 100vw;
}

/* Custom responsive adjustments */
@media (max-width: 768px) {

    /* On mobile, show full image with stronger overlay */
    .object-right {
        object-position: center;
    }
}

@media (min-width: 769px) {

    /* On desktop, image takes right 75% of banner */
    .w-3\/4 {
        width: 75%;
    }
}
</style>