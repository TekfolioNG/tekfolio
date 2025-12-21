<template>
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
        <div class="relative w-48 h-48 md:w-64 md:h-64">
            <div id="loading-lottie" class="w-full h-full"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isLoading = ref(true);

onMounted(() => {
    // Use the same pattern as your working component
    const loadLottieScript = async () => {
        if (!document.querySelector('script[src*="dotlottie-player"]')) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
            script.type = 'module';
            document.head.appendChild(script);

            await new Promise((resolve) => {
                script.onload = resolve;
            });
        }
    };

    const initLottieAnimation = async () => {
        await loadLottieScript();

        const container = document.getElementById('loading-lottie');
        if (container && !container.querySelector('dotlottie-player')) {
            const player = document.createElement('dotlottie-player');
            player.setAttribute('src', 'https://lottie.host/3b09ea62-c216-47d8-91ae-725380ac72d7/kgNJEhv55Y.lottie');
            player.setAttribute('background', 'transparent');
            player.setAttribute('speed', '1');
            player.setAttribute('loop', 'false');
            player.setAttribute('autoplay', '');
            player.style.width = '100%';
            player.style.height = '100%';
            container.appendChild(player);

            // Hide after animation completes
            player.addEventListener('complete', () => {
                setTimeout(() => {
                    isLoading.value = false;
                }, 300);
            });
        }
    };

    initLottieAnimation();

    // Fallback timeout in case animation doesn't trigger complete event
    setTimeout(() => {
        isLoading.value = false;
    }, 3000);
});
</script>

<style scoped>
.fixed {
    transition: opacity 0.5s ease-out;
    background: transparent !important;
}

.fixed:not([style*="display: none"]) {
    animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>