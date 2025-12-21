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

                        <!-- Light/Dark Toggle Switch -->
                        <button class="text-white/90 hover:text-white transition-colors duration-200">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </button>
                    </div>

                    <!-- Apply Now Button -->
                    <div class="flex items-center space-x-4">
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

        <!-- Red Background Section - Extended height -->
        <div class="absolute inset-0 bg-[#fe4135]" style="height: 120%;">
            <!-- Hero Content - Shifted down -->
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

        <!-- Bottom Image Section - Increased size -->
        <div class="absolute bottom-0 left-0 right-0" style="height: 60%;">
            <img src="/assets/img/careers-syntanium.png" alt="Syntanium Careers"
                class="w-full h-full object-cover object-center"
                style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
            <!-- Gradient Overlay for better text contrast if needed -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
    </section>
</template>

<script setup>
// Component logic can be added here if needed
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
    .lg\:pt-24 {
        padding-top: 6rem;
    }
}
</style>