<template>
    <Transition name="fade">
        <div v-if="isLoading" class="loading-screen">
            <div class="loading-content">
                <img src="/tekfolio.svg" alt="Tekfolio Logo" class="logo-bounce" />
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isLoading = ref(true);

onMounted(() => {
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

.logo-bounce {
    width: 120px;
    height: 120px;
    animation: subtleBounce 1.5s ease-in-out infinite;
}

@keyframes subtleBounce {

    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }

    25% {
        transform: translateY(-15px) rotate(3deg);
    }

    50% {
        transform: translateY(0) rotate(0deg);
    }

    75% {
        transform: translateY(-8px) rotate(-2deg);
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
    .logo-bounce {
        width: 100px;
        height: 100px;
    }
}

@media (min-width: 641px) and (max-width: 1024px) {
    .logo-bounce {
        width: 110px;
        height: 110px;
    }
}
</style>