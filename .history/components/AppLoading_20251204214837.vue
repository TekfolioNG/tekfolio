<template>
    <Transition name="fade">
        <div v-if="isLoading" class="loading-screen">
            <div class="loading-content">
                <img src="/tekfolio.svg" alt="Tekfolio Logo" class="logo-fade-rotate" />
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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

.logo-fade-rotate {
    width: 120px;
    height: 120px;
    animation: fadeInRotate 2s ease-out forwards, holdSteady 1s ease-in-out 2s infinite;
    filter: drop-shadow(0 4px 12px rgba(91, 33, 182, 0.15));
}

/* Initial fade in with rotation */
@keyframes fadeInRotate {
    0% {
        opacity: 0;
        transform: rotate(0deg) scale(0.8);
    }

    100% {
        opacity: 1;
        transform: rotate(360deg) scale(1);
    }
}

/* Subtle pulse after fade in completes */
@keyframes holdSteady {

    0%,
    100% {
        transform: rotate(360deg) scale(1);
    }

    50% {
        transform: rotate(360deg) scale(1.03);
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
    .logo-fade-rotate {
        width: 100px;
        height: 100px;
    }
}

@media (min-width: 641px) and (max-width: 1024px) {
    .logo-fade-rotate {
        width: 110px;
        height: 110px;
    }
}
</style>