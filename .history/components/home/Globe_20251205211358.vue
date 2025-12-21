<template>
    <!-- Keep your template as is -->
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    // Load Lottie player script
    const loadLottieScript = () => {
        return new Promise((resolve) => {
            if (document.querySelector('script[src*="dotlottie-player"]')) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
            script.type = 'module';
            script.onload = resolve;
            script.onerror = resolve; // Even if fails, try to create element
            document.head.appendChild(script);
        });
    };

    // Initialize Globe Lottie animation
    const initGlobeAnimation = async () => {
        try {
            await loadLottieScript();

            // Wait a bit more for custom elements to be defined
            await new Promise(resolve => setTimeout(resolve, 100));

            const container = document.getElementById('lottie-globe');
            if (container && !container.querySelector('dotlottie-player')) {
                // Try to use custom elements if available
                if (customElements.get('dotlottie-player')) {
                    const player = document.createElement('dotlottie-player');
                    player.setAttribute('src', 'https://lottie.host/0c4a99a5-c9bb-4411-a39b-af2b4dac83a8/FzFihrN1zJ.lottie');
                    player.setAttribute('background', 'transparent');
                    player.setAttribute('speed', '0.6');
                    player.setAttribute('loop', '');
                    player.setAttribute('autoplay', '');
                    player.style.width = '100%';
                    player.style.height = '100%';
                    container.appendChild(player);
                } else {
                    // Fallback: Use a regular div with background or alternative content
                    console.warn('Lottie player not available, using fallback');
                    container.innerHTML = `
                        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                            <p style="color: #666;">Globe animation loading...</p>
                        </div>
                    `;
                }
            }
        } catch (error) {
            console.error('Failed to load Lottie animation:', error);
        }
    };

    initGlobeAnimation();
});
</script>