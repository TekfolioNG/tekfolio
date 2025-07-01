<template>
    <section class="py-16 md:py-24 bg-gray-900 text-white w-full">
        <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <!-- Kicker/Preamble -->
                <p class="text-gray-300 text-sm md:text-base font-medium uppercase tracking-wider mb-4">
                    But we can do more for you...
                </p>

                <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white barlow-condensed">
                    Our full 'tekfolio' of services
                </h2>
                <div class="w-24 h-1 bg-white mx-auto"></div>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-0">
                <!-- Service Card 1 -->
                <NuxtLink to="/services/web-development" class="group service-card">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 transition-all duration-300 h-full flex flex-col">
                        <div
                            class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                            <Icon name="lucide:code" class="w-8 h-8 text-white service-icon" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Enterprise Web Apps</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">High-performance with higher conversion
                        </p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">We build sleek, scalable, and
                            conversion-driven websites customized to your brand and goals.</p>
                        <div class="flex items-center justify-center text-blue-400 cta-link">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 2 -->
                <NuxtLink to="/services/app-development" class="group service-card">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 transition-all duration-300 h-full flex flex-col">
                        <div
                            class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                            <Icon name="lucide:smartphone" class="w-8 h-8 text-white service-icon" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Business Mobile Apps</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">One codebase, all devices</p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">Launch apps that run smoothly on web, iOS,
                            and Android — all from a single build.</p>
                        <div class="flex items-center justify-center text-blue-400 cta-link">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 3 -->
                <NuxtLink to="/services/seo" class="group service-card">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 transition-all duration-300 h-full flex flex-col">
                        <div
                            class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                            <Icon name="lucide:trending-up" class="w-8 h-8 text-white service-icon" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Search Engine Optimization</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">Rank higher, sell more</p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">We combine SEO and content strategy to grow
                            your visibility, engagement, and sales.</p>
                        <div class="flex items-center justify-center text-blue-400 cta-link">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 4 -->
                <NuxtLink to="/services/sem" class="group service-card">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 transition-all duration-300 h-full flex flex-col">
                        <div
                            class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                            <Icon name="lucide:megaphone" class="w-8 h-8 text-white service-icon" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Search Engine Marketing</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">Targeted ads, powerful returns</p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">Our data-led campaigns put your offer in
                            front of the right eyes, at the right time.</p>
                        <div class="flex items-center justify-center text-blue-400 cta-link">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 5 -->
                <NuxtLink to="/services/email-marketing" class="group service-card">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 transition-all duration-300 h-full flex flex-col">
                        <div
                            class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                            <Icon name="lucide:mail" class="w-8 h-8 text-white service-icon" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Email Marketing</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">Improved customer retention with automated
                            workflows</p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">We set up smart campaigns that keep your
                            audience engaged and ready to buy again.</p>
                        <div class="flex items-center justify-center text-blue-400 cta-link">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 6 -->
                <NuxtLink to="/services/training" class="group service-card">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 transition-all duration-300 h-full flex flex-col">
                        <div
                            class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                            <Icon name="lucide:graduation-cap" class="w-8 h-8 text-white service-icon" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Workforce e-Productivity Training</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">Transform your workforce with efficiency
                            gains</p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">Upskill your team with hands-on training
                            that drives performance and output.</p>
                        <div class="flex items-center justify-center text-blue-400 cta-link">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
// Clean component - focused on subtle icon animations
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

.barlow-condensed {
    font-family: 'Barlow Condensed', sans-serif;
}

.icon-bg {
    background-color: #01348F;
    transition: all 0.3s ease;
}

/* Service Card Base Styles with Shadow and Transform */
.service-card {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.service-card>div {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Service Card Hover States - Enhanced with Shadow and Movement */
.service-card:hover {
    transform: translateY(-8px);
    box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(59, 130, 246, 0.3),
        0 0 20px rgba(59, 130, 246, 0.1);
}

.service-card:hover>div {
    border-color: #3b82f6 !important;
    background-color: rgba(55, 65, 81, 0.8);
}

.service-card:hover .icon-bg {
    background-color: #1d8ad8;
    box-shadow: 0 8px 25px rgba(29, 138, 216, 0.3);
}

/* Subtle Icon Animation - Twinkle Effect */
.service-icon {
    transition: all 0.3s ease;
    transform-origin: center;
}

.service-card:hover .service-icon {
    animation: twinkle 0.6s ease-in-out;
}

@keyframes twinkle {

    0%,
    100% {
        transform: scale(1) rotate(0deg);
        filter: brightness(1);
    }

    25% {
        transform: scale(1.1) rotate(-5deg);
        filter: brightness(1.3);
    }

    50% {
        transform: scale(1.3) rotate(0deg);
        filter: brightness(1.5);
    }

    75% {
        transform: scale(1.1) rotate(5deg);
        filter: brightness(1.3);
    }
}

/* Subtle CTA Animation */
.cta-link {
    transition: color 0.3s ease;
}

.service-card:hover .cta-link {
    color: #60a5fa;
}

.cta-arrow {
    transition: transform 0.3s ease;
}

.service-card:hover .cta-arrow {
    transform: translateX(4px);
}

/* Focus states for accessibility */
.service-card:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    transform: translateY(-4px);
    box-shadow:
        0 20px 40px -12px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(59, 130, 246, 0.5);
}

.service-card:focus .icon-bg {
    background-color: #1d8ad8;
    box-shadow: 0 8px 25px rgba(29, 138, 216, 0.3);
}

.service-card:focus .service-icon {
    animation: twinkle 0.6s ease-in-out;
}

/* Mobile optimizations */
@media (max-width: 768px) {
    .service-card:hover {
        transform: translateY(-4px);
        box-shadow:
            0 15px 35px -12px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(59, 130, 246, 0.2),
            0 0 15px rgba(59, 130, 246, 0.08);
    }

    .service-card:active {
        transform: translateY(-6px);
        box-shadow:
            0 20px 40px -12px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(59, 130, 246, 0.3),
            0 0 18px rgba(59, 130, 246, 0.1);
    }

    .service-card:active .icon-bg {
        background-color: #1d8ad8;
        box-shadow: 0 6px 20px rgba(29, 138, 216, 0.25);
    }

    .service-card:active .service-icon {
        animation: twinkle 0.4s ease-in-out;
    }

    .service-card:active .cta-arrow {
        transform: translateX(4px);
    }
}

/* Smooth transition when cards return to normal state */
.service-card:not(:hover):not(:focus):not(:active) {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>