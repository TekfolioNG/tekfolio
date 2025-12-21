<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Hero Section -->
        <section class="relative bg-gradient-to-r from-[#012430] to-[#0077AA] text-white py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Programs & Events
                    </h1>
                    <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                        Showcasing our commitment to strengthening Nigeria's and Africa's private sector through
                        impactful programs, training sessions, and collaborative events.
                    </p>
                </div>
            </div>
        </section>

        <!-- Gallery Section -->
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Filter/Category Section (Optional) -->
                <div class="mb-12 text-center">
                    <p class="text-gray-600 text-lg">
                        Explore our journey of impact through {{ totalImages }} memorable moments
                    </p>
                </div>

                <!-- Image Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div v-for="(image, index) in images" :key="index"
                        class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                        @click="openLightbox(index)">
                        <div class="aspect-[4/3] overflow-hidden">
                            <img :src="image.src" :alt="image.alt"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                loading="lazy" />
                        </div>
                        <!-- Overlay on Hover -->
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#012430]/90 via-[#012430]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div class="p-4 w-full">
                                <p class="text-white font-semibold text-sm">{{ image.alt }}</p>
                            </div>
                        </div>
                        <!-- Zoom Icon -->
                        <div
                            class="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Icon name="lucide:zoom-in" class="w-5 h-5 text-[#012430]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Lightbox Modal -->
        <Teleport to="body">
            <Transition name="fade">
                <div v-if="lightboxOpen" class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    @click="closeLightbox">
                    <!-- Close Button -->
                    <button class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                        @click="closeLightbox">
                        <Icon name="lucide:x" class="w-8 h-8" />
                    </button>

                    <!-- Navigation Buttons -->
                    <button v-if="currentImageIndex > 0"
                        class="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
                        @click.stop="previousImage">
                        <Icon name="lucide:chevron-left" class="w-12 h-12" />
                    </button>

                    <button v-if="currentImageIndex < images.length - 1"
                        class="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
                        @click.stop="nextImage">
                        <Icon name="lucide:chevron-right" class="w-12 h-12" />
                    </button>

                    <!-- Image Container -->
                    <div class="max-w-6xl max-h-[90vh] w-full flex flex-col items-center" @click.stop>
                        <img :src="images[currentImageIndex].src" :alt="images[currentImageIndex].alt"
                            class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
                        <div class="mt-4 text-center">
                            <p class="text-white text-lg font-semibold">{{ images[currentImageIndex].alt }}</p>
                            <p class="text-gray-400 text-sm mt-2">{{ currentImageIndex + 1 }} / {{ images.length }}</p>
                        </div>
                    </div>

                    <!-- Keyboard Hint -->
                    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
                        Use arrow keys to navigate • ESC to close
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const totalImages = 35;

// Generate image array
const images = computed(() => {
    return Array.from({ length: totalImages }, (_, index) => ({
        src: `/assets/img/elevation-events${index + 1}.png`,
        alt: `Elevation Consulting Event ${index + 1}`
    }));
});

// Lightbox state
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

const openLightbox = (index) => {
    currentImageIndex.value = index;
    lightboxOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    lightboxOpen.value = false;
    document.body.style.overflow = '';
};

const nextImage = () => {
    if (currentImageIndex.value < images.value.length - 1) {
        currentImageIndex.value++;
    }
};

const previousImage = () => {
    if (currentImageIndex.value > 0) {
        currentImageIndex.value--;
    }
};

// Keyboard navigation
const handleKeydown = (e) => {
    if (!lightboxOpen.value) return;

    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    } else if (e.key === 'ArrowLeft') {
        previousImage();
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>