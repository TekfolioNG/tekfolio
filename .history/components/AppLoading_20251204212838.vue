<template>
    <Transition name="fade">
        <div v-if="isLoading" class="loading-screen">
            <div class="loading-content">
                <div id="lottie-loading" class="lottie-container"></div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isLoading = ref(true);

onMounted(() => {
    // Load Lottie player script
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

    // Initialize Lottie animation
    const initLottieAnimation = async () => {
        await loadLottieScript();

        const container = document.getElementById('lottie-loading');
        if (container && !container.querySelector('dotlottie-player')) {
            const player = document.createElement('dotlottie-player');
            player.setAttribute('src', 'https://lottie.host/3b09ea62-c216-47d8-91ae-725380ac72d7/kgNJEhv55Y.lottie');
            player.setAttribute('background', 'transparent');
            player.setAttribute('speed', '1');
            player.setAttribute('loop', '');
            player.setAttribute('autoplay', '');
            player.style.width = '200px';
            player.style.height = '200px';
            container.appendChild(player);
        }
    };

    initLottieAnimation();

    // Hide loading screen after content is loaded
    const hideLoading = () => {
        setTimeout(() => {
            isLoading.value = false;
        }, 1000);
    };

    if (document.readyState === 'complete') {
        hideLoading();
    } else {
        window.addEventListener('load', hideLoading);
    }
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
    background: white;
}

.loading-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.lottie-container {
    width: 200px;
    height: 200px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>