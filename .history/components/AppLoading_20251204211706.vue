<template>
    <div v-if="isLoading" class="loading-screen">
        <div class="loading-content">
            <dotlottie-player src="https://lottie.host/3b09ea62-c216-47d8-91ae-725380ac72d7/kgNJEhv55Y.lottie"
                background="transparent" speed="1" style="width: 200px; height: 200px;" loop
                autoplay></dotlottie-player>
            <p class="loading-text">Loading...</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isLoading = ref(true);

onMounted(() => {
    // Load Lottie player script
    if (!document.querySelector('script[src*="dotlottie-player"]')) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
        script.type = 'module';
        document.head.appendChild(script);
    }

    // Hide loading screen after page is ready
    window.addEventListener('load', () => {
        setTimeout(() => {
            isLoading.value = false;
        }, 500); // Small delay for smooth transition
    });
});
</script>

<style scoped>
.loading-screen {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #5B21B6 0%, #3730A3 100%);
    animation: fadeIn 0.3s ease-out;
}

.loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.loading-text {
    color: white;
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

/* Fade out animation when loading completes */
.loading-screen {
    transition: opacity 0.5s ease-out;
}

.loading-screen[style*="display: none"] {
    opacity: 0;
}
</style>