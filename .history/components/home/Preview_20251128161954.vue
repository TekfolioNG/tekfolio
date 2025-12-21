<template>
    <section
        class="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
        <!-- Decorative background elements -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <!-- Main Header -->
            <h2
                class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-20 leading-tight max-w-5xl mx-auto">
                Your bold vision deserves tech that's smart, simple, and secure.
            </h2>

            <!-- Animated Feature Lines -->
            <div class="space-y-6 md:space-y-8 max-w-4xl mx-auto mb-16 md:mb-20">
                <div class="feature-line text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
                    :class="{ 'slide-up-visible': isVisible }" style="animation-delay: 0.2s">
                    Custom-built websites that feel effortless.
                </div>

                <div class="feature-line text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
                    :class="{ 'slide-up-visible': isVisible }" style="animation-delay: 0.6s">
                    Modern apps engineered for growth.
                </div>

                <div class="feature-line text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
                    :class="{ 'slide-up-visible': isVisible }" style="animation-delay: 1s">
                    Cloud solutions that scale as you do.
                </div>
            </div>

            <!-- Stats Footer -->
            <div class="text-center">
                <p class="text-purple-200 text-base md:text-lg lg:text-xl font-medium">
                    Over 40+ professional, A-class digital projects built, deployed, and optimized.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
    const section = document.querySelector('section')
    if (section) {
        const rect = section.getBoundingClientRect()
        const windowHeight = window.innerHeight || document.documentElement.clientHeight

        // Trigger animation when section is 70% visible
        if (rect.top <= windowHeight * 0.7 && rect.bottom >= 0) {
            isVisible.value = true
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Check on mount in case section is already visible
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Gradient text effect for feature lines */
.feature-line {
    background: linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* Visible state for slide-up animation */
.slide-up-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Ensure smooth transitions */
section {
    transition: all 0.3s ease;
}

/* Responsive text sizing */
@media (max-width: 640px) {
    .feature-line {
        transform: translateY(20px);
    }
}
</style>