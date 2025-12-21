<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Hero Section -->
        <section class="relative bg-gradient-to-r from-[#012430] to-[#0077AA] text-white py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">
                        Programs & Events
                    </h1>
                    <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                        A glimpse into our impactful programs, training sessions, and collaborative events strengthening
                        Nigeria's and Africa's private sector.
                    </p>
                </div>
            </div>
        </section>

        <!-- Images Section -->
        <section class="py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="(image, index) in images" :key="index"
                        class="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img :src="image" :alt="`Elevation Consulting Event ${index + 1}`"
                            class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Import all 35 images
const images = ref([
    '/assets/img/elevation-events1.png',
    '/assets/img/elevation-events2.png',
    '/assets/img/elevation-events3.png',
    '/assets/img/elevation-events4.png',
    '/assets/img/elevation-events5.png',
    '/assets/img/elevation-events6.png',
    '/assets/img/elevation-events7.png',
    '/assets/img/elevation-events8.png',
    '/assets/img/elevation-events9.png',
    '/assets/img/elevation-events10.png',
    '/assets/img/elevation-events11.png',
    '/assets/img/elevation-events12.png',
    '/assets/img/elevation-events13.png',
    '/assets/img/elevation-events14.png',
    '/assets/img/elevation-events15.png',
    '/assets/img/elevation-events16.png',
    '/assets/img/elevation-events17.png',
    '/assets/img/elevation-events18.png',
    '/assets/img/elevation-events19.png',
    '/assets/img/elevation-events20.png',
    '/assets/img/elevation-events21.png',
    '/assets/img/elevation-events22.png',
    '/assets/img/elevation-events23.png',
    '/assets/img/elevation-events24.png',
    '/assets/img/elevation-events25.png',
    '/assets/img/elevation-events26.png',
    '/assets/img/elevation-events27.png',
    '/assets/img/elevation-events28.png',
    '/assets/img/elevation-events29.png',
    '/assets/img/elevation-events30.png',
    '/assets/img/elevation-events31.png',
    '/assets/img/elevation-events32.png',
    '/assets/img/elevation-events33.png',
    '/assets/img/elevation-events34.png',
    '/assets/img/elevation-events35.png',
]);
</script>