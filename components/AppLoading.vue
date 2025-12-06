<template>
    <Transition name="fade">
        <div v-if="isLoading" class="loading-screen">
            <div class="loading-content">
                <img src="/tekfolio.svg" alt="Tekfolio Logo" class="logo-pulse" />
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isLoading = ref(true);

onMounted(() => {
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

.logo-pulse {
    width: 120px;
    height: 120px;
    animation: scalePulse 1.8s ease-in-out infinite;
    filter: drop-shadow(0 4px 12px rgba(91, 33, 182, 0.2));
}

@keyframes scalePulse {

    0%,
    100% {
        transform: scale(0.95);
        filter: drop-shadow(0 4px 12px rgba(91, 33, 182, 0.2));
    }

    50% {
        transform: scale(1.08);
        filter: drop-shadow(0 8px 20px rgba(59, 130, 246, 0.4));
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Responsive sizing */
@media (max-width: 640px) {
    .logo-pulse {
        width: 100px;
        height: 100px;
    }
}

@media (min-width: 641px) and (max-width: 1024px) {
    .logo-pulse {
        width: 110px;
        height: 110px;
    }
}
</style>