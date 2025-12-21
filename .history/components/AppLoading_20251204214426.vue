<template>
    <Transition name="fade">
        <div v-if="isLoading" class="loading-screen">
            <div class="loading-content">
                <img src="/tekfolio.svg" alt="Tekfolio Logo" class="logo-node-connect" />
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
    position: relative;
}

.logo-node-connect {
    width: 120px;
    height: 120px;
    animation: nodeConnect 2s ease-in-out infinite;
    filter: drop-shadow(0 0 0px rgba(91, 33, 182, 0));
}

@keyframes nodeConnect {
    0% {
        opacity: 0.6;
        filter: drop-shadow(0 0 5px rgba(91, 33, 182, 0.3));
    }

    25% {
        opacity: 0.8;
        filter: drop-shadow(0 0 15px rgba(91, 33, 182, 0.6));
    }

    50% {
        opacity: 1;
        filter: drop-shadow(0 0 25px rgba(59, 130, 246, 0.8));
    }

    75% {
        opacity: 0.8;
        filter: drop-shadow(0 0 15px rgba(91, 33, 182, 0.6));
    }

    100% {
        opacity: 0.6;
        filter: drop-shadow(0 0 5px rgba(91, 33, 182, 0.3));
    }
}

/* Pulsing gradient circle behind logo */
.loading-content::before {
    content: '';
    position: absolute;
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, rgba(91, 33, 182, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    animation: circlePulse 2s ease-in-out infinite;
    z-index: -1;
}

@keyframes circlePulse {

    0%,
    100% {
        transform: scale(0.8);
        opacity: 0.3;
    }

    50% {
        transform: scale(1.2);
        opacity: 0.6;
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
    .logo-node-connect {
        width: 100px;
        height: 100px;
    }

    .loading-content::before {
        width: 150px;
        height: 150px;
    }
}
</style>