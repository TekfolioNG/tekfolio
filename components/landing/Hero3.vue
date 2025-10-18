<template>
    <section class="relative min-h-screen overflow-hidden">
        <!-- Extended Red Background Section -->
        <div class="absolute inset-0 bg-[#00D4FF] h-4/5 md:h-[95%]" style="top: 0;">
            <!-- Hero Content -->
            <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-full">
                    <!-- Main Heading -->
                    <div class="lg:w-1/2 lg:pr-8">
                        <h1 class="hero-heading">
                            <span class="block text-black font-bold">Together</span>
                            <span class="block text-white font-bold">we fuel</span>
                            <span class="block text-white font-bold">progress</span>
                        </h1>
                    </div>

                    <!-- Subtext - Right side on desktop, below heading on mobile -->
                    <div class="lg:w-1/2 lg:pl-16 lg:pr-12 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                        <div class="relative max-w-lg">
                            <!-- Background accent shape -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-black/10 to-white/20 rounded-2xl transform transition-all duration-1000 rotate-1 scale-105">
                            </div>

                            <!-- Content container -->
                            <div
                                class="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-1000 hover:rotate-0 hover:shadow-2xl -rotate-1">

                                <!-- Header accent -->
                                <div class="flex items-center mb-4">
                                    <div class="w-8 h-0.5 bg-[#00D4FF] mr-3"></div>
                                    <h3 class="text-sm font-bold text-gray-800 uppercase tracking-widest">
                                        Team Up
                                    </h3>
                                </div>

                                <!-- Main text -->
                                <div class="space-y-2">
                                    <p class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900">
                                        <span class="font-semibold text-[#00D4FF]">Join a team</span> where your
                                    </p>
                                    <p class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900">
                                        <span class="font-bold text-gray-900">skills shape the future</span>
                                    </p>
                                    <p class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900">
                                        of <span class="text-[#00D4FF] font-semibold">energy</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Dark mode toggle functionality
const isDarkMode = ref(false)
// Mobile menu toggle functionality
const isMobileMenuOpen = ref(false)

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value

    if (process.client) {
        if (isDarkMode.value) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
}

// Initialize theme on mount
onMounted(() => {
    if (process.client) {
        const savedTheme = localStorage.getItem('theme')
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        isDarkMode.value = savedTheme ? savedTheme === 'dark' : systemPrefersDark

        if (isDarkMode.value) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
})
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

/* Fade in animation for the card */
.fade-in {
    opacity: 0;
    animation: fadeIn 1.5s ease-in-out 0.8s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
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

/* Prevent body scroll when mobile menu is open */
.menu-open {
    overflow: hidden;
}
</style>