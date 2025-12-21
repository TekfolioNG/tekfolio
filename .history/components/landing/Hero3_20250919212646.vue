<template>
    <section class="relative min-h-screen overflow-hidden">
        <!-- Top Navigation Bar -->
        <nav class="relative z-20 bg-transparent">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div class="flex justify-between items-center h-18 lg:h-24">
                    <!-- Logo -->
                    <div class="flex-shrink-0">
                        <NuxtLink to="/" class="inline-block">
                            <img src="/assets/img/syntanium-logo-temp.png" alt="Syntanium Energy Logo"
                                class="h-10 md:h-12 lg:h-14 drop-shadow-lg" />
                        </NuxtLink>
                    </div>

                    <!-- Desktop Navigation -->
                    <div class="hidden lg:flex lg:items-center lg:space-x-6 lg:ml-auto">
                        <NuxtLink to="/who-we-are"
                            class="text-black text-sm font-medium hover:text-black/70 transition-colors duration-200">
                            Who We Are
                        </NuxtLink>
                        <NuxtLink to="/expertise"
                            class="text-black text-sm font-medium hover:text-black/70 transition-colors duration-200">
                            Our Expertise
                        </NuxtLink>
                        <NuxtLink to="/solutions"
                            class="text-black text-sm font-medium hover:text-black/70 transition-colors duration-200">
                            Our Solutions
                        </NuxtLink>
                        <NuxtLink to="/commitment"
                            class="text-black text-sm font-medium hover:text-black/70 transition-colors duration-200">
                            Our Commitment
                        </NuxtLink>
                        <NuxtLink to="/careers" class="text-black text-sm font-bold border-b-2 border-black pb-1">
                            Careers
                        </NuxtLink>

                        <!-- Dark Mode Toggle -->
                        <button @click="toggleDarkMode"
                            class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#fe4135] focus:ring-offset-2 drop-shadow-sm"
                            :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-700'">
                            <span
                                class="inline-flex h-4 w-4 items-center justify-center transform rounded-full bg-white transition duration-300 ease-in-out"
                                :class="isDarkMode ? 'translate-x-6' : 'translate-x-1'">
                                <svg v-if="!isDarkMode" class="w-3 h-3 text-yellow-600" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <svg v-else class="w-3 h-3 text-gray-800" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </span>
                        </button>

                        <button
                            class="bg-black text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-900 hover:scale-105 transition-all duration-200">
                            Apply Now
                        </button>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button @click="toggleMobileMenu" class="lg:hidden p-2 text-black z-30 relative">
                        <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu Overlay -->
            <transition enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 transform -translate-y-4"
                enter-to-class="opacity-100 transform translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 transform translate-y-0"
                leave-to-class="opacity-0 transform -translate-y-4">
                <div v-if="isMobileMenuOpen"
                    class="lg:hidden absolute top-0 right-0 w-2/3 h-screen bg-white/95 backdrop-blur-md shadow-xl border-l border-gray-200 z-10">
                    <div class="px-6 pt-20 pb-6 space-y-4">
                        <NuxtLink @click="closeMobileMenu" to="/who-we-are"
                            class="block text-gray-900 text-lg font-medium hover:text-[#fe4135] transition-colors duration-200 py-2">
                            Who We Are
                        </NuxtLink>
                        <NuxtLink @click="closeMobileMenu" to="/expertise"
                            class="block text-gray-900 text-lg font-medium hover:text-[#fe4135] transition-colors duration-200 py-2">
                            Our Expertise
                        </NuxtLink>
                        <NuxtLink @click="closeMobileMenu" to="/solutions"
                            class="block text-gray-900 text-lg font-medium hover:text-[#fe4135] transition-colors duration-200 py-2">
                            Our Solutions
                        </NuxtLink>
                        <NuxtLink @click="closeMobileMenu" to="/commitment"
                            class="block text-gray-900 text-lg font-medium hover:text-[#fe4135] transition-colors duration-200 py-2">
                            Our Commitment
                        </NuxtLink>
                        <NuxtLink @click="closeMobileMenu" to="/careers"
                            class="block text-[#fe4135] text-lg font-bold border-l-4 border-[#fe4135] pl-4 py-2">
                            Careers
                        </NuxtLink>

                        <!-- Mobile Dark Mode Toggle -->
                        <div class="flex items-center justify-between py-4 border-t border-gray-200 mt-6">
                            <span class="text-gray-900 font-medium"></span>
                            <button @click="toggleDarkMode"
                                class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#fe4135] focus:ring-offset-2"
                                :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-700'">
                                <span
                                    class="inline-flex h-4 w-4 items-center justify-center transform rounded-full bg-white transition duration-300 ease-in-out"
                                    :class="isDarkMode ? 'translate-x-6' : 'translate-x-1'">
                                    <svg v-if="!isDarkMode" class="w-3 h-3 text-yellow-600" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <svg v-else class="w-3 h-3 text-gray-800" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <!-- Mobile Apply Button -->
                        <div class="pt-4">
                            <button @click="closeMobileMenu"
                                class="w-full bg-[#fe4135] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#fe4135]/90 transition-all duration-200">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </transition>
        </nav>

        <!-- Extended Red Background Section -->
        <div class="absolute inset-0 bg-[#fe4135] h-4/5 md:h-[95%]" style="top: 0;">
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
                                    <div class="w-8 h-0.5 bg-[#fe4135] mr-3"></div>
                                    <h3 class="text-sm font-bold text-gray-800 uppercase tracking-widest">
                                        Team Up
                                    </h3>
                                </div>

                                <!-- Main text -->
                                <div class="space-y-2">
                                    <p class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900">
                                        <span class="font-semibold text-[#fe4135]">Join a team</span> where your
                                    </p>
                                    <p class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900">
                                        <span class="font-bold text-gray-900">skills shape the future</span>
                                    </p>
                                    <p class="text-xl md:text-2xl lg:text-3xl leading-tight font-light text-gray-900">
                                        of <span class="text-[#fe4135] font-semibold">energy</span>.
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