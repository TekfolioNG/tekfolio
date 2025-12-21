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
                                class="h-10 md:h-12 lg:h-14 drop-shadow-lg brightness-0 invert" />
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
                            :class="$colorMode?.value === 'dark' ? 'bg-gray-700' : 'bg-gray-700'">
                            <!-- Toggle Circle with Icon -->
                            <span
                                class="inline-flex h-4 w-4 items-center justify-center transform rounded-full bg-white transition duration-300 ease-in-out"
                                :class="$colorMode?.value === 'dark' ? 'translate-x-6' : 'translate-x-1'">
                                <!-- Sun Icon (visible in light mode) -->
                                <Icon v-if="$colorMode?.value === 'light'" name="lucide:sun"
                                    class="w-3 h-3 text-yellow-600" />
                                <!-- Moon Icon (visible in dark mode) -->
                                <Icon v-else name="lucide:moon" class="w-2 h-2 text-gray-800" />
                            </span>
                        </button>

                        <button
                            class="bg-black text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-900 hover:scale-105 transition-all duration-200">
                            Apply Now
                        </button>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button class="lg:hidden p-2 text-black">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Extended Red Background Section -->
        <div class="absolute inset-0 bg-[#fe4135]" style="height: 100%; top: 0;">
            <!-- Hero Content -->
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-full">
                    <!-- Main Heading -->
                    <div class="lg:w-1/2">
                        <h1 class="hero-heading">
                            <span class="block text-black font-bold">Together</span>
                            <span class="block text-white font-bold">we fuel</span>
                            <span class="block text-white font-bold">progress</span>
                        </h1>
                    </div>

                    <!-- Subtext - Right side on desktop, below heading on mobile -->
                    <div class="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
                        <p class="hero-subtext fade-in">
                            Join a team where your skills shape the future of energy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Dark mode toggle functionality
const toggleDarkMode = () => {
    // Nuxt Color Mode integration
    if (process.client && $colorMode) {
        $colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'
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
    color: black;
    max-width: 600px;
    line-height: 1.4;
}

/* Fade in animation */
.fade-in {
    opacity: 0;
    animation: fadeIn 1.5s ease-in-out 0.5s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
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
</style>