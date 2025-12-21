<template>
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div class="relative w-48 h-48 md:w-64 md:h-64">
            <!-- Inline SVG with bounce -->
            <div class="bounce-animation">
                <svg class="w-32 h-32 md:w-40 md:h-40" viewBox="0 0 100 100" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <!-- Your SVG content here -->
                    <!-- If you don't have the SVG code, keep using img tag -->
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isLoading = ref(true);

onMounted(() => {
    // Simulate loading
    const timer = setTimeout(() => {
        isLoading.value = false;
    }, 1800);

    // Also check if page is ready
    if (process.client) {
        if (document.readyState === 'complete') {
            clearTimeout(timer);
            setTimeout(() => {
                isLoading.value = false;
            }, 1000);
        }
    }

    return () => clearTimeout(timer);
});
</script>

<style scoped>
/* More sophisticated bounce with scale */
@keyframes sophisticatedBounce {
    0% {
        transform: translateY(0) scale(1);
        opacity: 0.8;
    }

    25% {
        transform: translateY(-12px) scale(1.03);
        opacity: 1;
    }

    50% {
        transform: translateY(0) scale(1);
        opacity: 0.9;
    }

    75% {
        transform: translateY(-6px) scale(1.015);
        opacity: 1;
    }

    100% {
        transform: translateY(0) scale(1);
        opacity: 0.8;
    }
}

.bounce-animation {
    animation: sophisticatedBounce 2.5s ease-in-out infinite;
}

/* Smooth fade out */
.fixed {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Optional: Add a background blur effect when fading out */
.fixed {
    backdrop-filter: blur(0px);
    transition: backdrop-filter 0.5s ease;
}

.fixed:not([style*="display: none"]) {
    backdrop-filter: blur(0px);
}
</style>