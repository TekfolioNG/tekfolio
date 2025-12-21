<template>
    <div v-if="isLoading" class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
        <!-- Logo Animation Container -->
        <div class="relative w-64 h-64 md:w-80 md:h-80">
            <div id="enhanced-loading-lottie" class="w-full h-full"></div>
        </div>

        <!-- Loading Progress -->
        <div class="mt-8 w-64 md:w-80">
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full transition-all duration-300 ease-out"
                    :style="{ width: progress + '%' }"></div>
            </div>
            <p class="text-center text-gray-600 mt-2 font-medium">
                {{ loadingMessage }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isLoading = ref(true);
const progress = ref(0);
const loadingMessage = ref('Initializing...');
const messages = [
    'Loading assets...',
    'Preparing components...',
    'Almost ready...',
    'Welcome!'
];

const simulateProgress = () => {
    const interval = setInterval(() => {
        if (progress.value < 100) {
            progress.value += Math.random() * 10;

            // Update message based on progress
            if (progress.value < 25) {
                loadingMessage.value = messages[0];
            } else if (progress.value < 50) {
                loadingMessage.value = messages[1];
            } else if (progress.value < 75) {
                loadingMessage.value = messages[2];
            } else {
                loadingMessage.value = messages[3];
            }
        } else {
            clearInterval(interval);
            setTimeout(() => {
                isLoading.value = false;
            }, 500);
        }
    }, 200);
};

onMounted(async () => {
    await loadLottieScript();
    initLottieAnimation();
    simulateProgress();

    // Ensure loading doesn't get stuck
    setTimeout(() => {
        if (isLoading.value) {
            progress.value = 100;
            isLoading.value = false;
        }
    }, 5000);
});

const loadLottieScript = async () => {
    if (!document.querySelector('script[src*="dotlottie-player"]')) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
        script.type = 'module';
        document.head.appendChild(script);
        await new Promise((resolve) => { script.onload = resolve; });
    }
};

const initLottieAnimation = () => {
    const container = document.getElementById('enhanced-loading-lottie');
    if (container && !container.querySelector('dotlottie-player')) {
        const player = document.createElement('dotlottie-player');
        player.setAttribute('src', 'https://lottie.host/3b09ea62-c216-47d8-91ae-725380ac72d7/kgNJEhv55Y.lottie');
        player.setAttribute('background', 'transparent');
        player.setAttribute('speed', '1');
        player.setAttribute('loop', '');
        player.setAttribute('autoplay', '');
        player.style.width = '100%';
        player.style.height = '100%';
        container.appendChild(player);
    }
};
</script>

<style scoped>
.fixed {
    transition: opacity 0.5s ease-out;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.7;
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>