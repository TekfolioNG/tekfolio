<template>
    <section class="relative min-h-screen overflow-hidden">
        <!-- Top Navigation Bar -->
        <nav class="relative z-20 bg-transparent">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-18 lg:h-24">
                    <!-- Logo -->
                    <div class="flex-shrink-0">
                        <NuxtLink to="/" class="inline-block">
                            <img src="/assets/img/syntanium-logo-temp.png" alt="Syntanium Energy Logo"
                                class="h-10 md:h-12 lg:h-14 drop-shadow-lg" />
                        </NuxtLink>
                    </div>

                    <!-- Desktop Navigation -->
                    <div class="hidden lg:flex lg:items-center lg:space-x-8">
                        <NuxtLink to="/who-we-are"
                            class="text-white/90 hover:text-white font-semibold transition-colors duration-200">
                            WHO WE ARE
                        </NuxtLink>
                        <NuxtLink to="/expertise"
                            class="text-white/90 hover:text-white font-semibold transition-colors duration-200">
                            OUR EXPERTISE
                        </NuxtLink>
                        <NuxtLink to="/solutions"
                            class="text-white/90 hover:text-white font-semibold transition-colors duration-200">
                            OUR SOLUTIONS
                        </NuxtLink>
                        <NuxtLink to="/commitment"
                            class="text-white/90 hover:text-white font-semibold transition-colors duration-200">
                            OUR COMMITMENT
                        </NuxtLink>
                        <NuxtLink to="/careers" class="text-white font-bold border-b-2 border-white pb-1">
                            CAREERS
                        </NuxtLink>
                    </div>

                    <!-- Apply Now Button and Light/Dark Toggle -->
                    <div class="flex items-center space-x-4">
                        <!-- Light/Dark Toggle -->
                        <button @click="toggleTheme"
                            class="p-2 text-white hover:text-white/80 transition-colors duration-200">
                            <svg v-if="isDarkMode" class="w-5 h-5" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </button>

                        <button
                            class="bg-black text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-900 hover:scale-105 transition-all duration-200">
                            Apply Now
                        </button>

                        <!-- Mobile Menu Button -->
                        <button class="lg:hidden p-2 text-white">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Extended Red Background Section -->
        <div class="absolute inset-0 bg-[#fe4135]" style="height: 100%; top: 0;">
            <!-- Hero Content -->
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40">
                <div class="max-w-4xl">
                    <!-- Main Heading -->
                    <h1 class="hero-heading">
                        <span class="block text-black font-bold">Together</span>
                        <span class="block text-white font-bold">we fuel</span>
                        <span class="block text-white font-bold">progress</span>
                    </h1>

                    <!-- Subtext -->
                    <p class="hero-subtext">
                        Join a team where your skills shape the future of energy.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

// Theme toggle functionality
const isDarkMode = ref(false)

const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    // Add your theme switching logic here
    // For example, toggle a CSS class on the document or emit an event
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&display=swap');

.hero-heading {
    font-family: 'Barlow', sans-serif;
    font-size: clamp(3.5rem, 8vw, 8rem);
    line-height: 0.8;
    letter-spacing: -0.02em;
    margin-bottom: 2rem;
}

.hero-subtext {
    font-family: 'Barlow', sans-serif;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    line-height: 1.4;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .hero-heading {
        font-size: clamp(2.5rem, 12vw, 4rem);
        margin-bottom: 1.5rem;
    }

    .hero-subtext {
        font-size: clamp(1rem, 4vw, 1.2rem);
    }
}

/* Ensure proper stacking */
.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

/* Custom responsive utilities */
@media (min-width: 1024px) {
    .lg\:pt-40 {
        padding-top: 10rem;
    }
}
</style>