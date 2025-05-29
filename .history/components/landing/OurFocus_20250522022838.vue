<template>
    <section class="bg-gray-900 text-white w-screen">
        <div class="container mx-auto">
            <!-- Section Heading with white styling -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
                    How We Help Our Clients
                </h2>
                <div class="w-24 h-1 bg-white mx-auto"></div>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8">
                <!-- Service Card 1 -->
                <NuxtLink to="/services/web-development" class="group">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col relative overflow-hidden transform hover:-translate-y-2 card-shadow hover:card-shadow-hover">
                        <!-- Subtle glow effect -->
                        <div
                            class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        </div>
                        <div
                            class="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-grow relative z-10 border-2 border-blue-500/30">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300">
                            </div>
                            <Icon name="lucide:code" class="w-10 h-10 text-blue-400" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Custom Web Development</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">High-performance with higher conversion
                        </p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">We build sleek, scalable, and
                            conversion-driven websites tailored to your brand.</p>
                        <div
                            class="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 2 -->
                <NuxtLink to="/services/app-development" class="group">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col relative overflow-hidden transform hover:-translate-y-2 card-shadow hover:card-shadow-hover">
                        <!-- Subtle glow effect -->
                        <div
                            class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        </div>
                        <div
                            class="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-grow relative z-10 border-2 border-blue-500/30">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300">
                            </div>
                            <Icon name="lucide:smartphone" class="w-10 h-10 text-blue-400" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">App Development</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">One codebase, all devices</p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">Launch apps that run smoothly on web, iOS,
                            and Android — all from a single build.</p>
                        <div
                            class="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 3 -->
                <NuxtLink to="/services/seo" class="group">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col relative overflow-hidden transform hover:-translate-y-2 card-shadow hover:card-shadow-hover">
                        <!-- Subtle glow effect -->
                        <div
                            class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        </div>
                        <div
                            class="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-grow relative z-10 border-2 border-blue-500/30">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300">
                            </div>
                            <Icon name="lucide:trending-up" class="w-10 h-10 text-blue-400" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Search Engine Optimization</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">Rank higher, sell more</p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">We combine SEO and content strategy to grow
                            your visibility, traffic, and sales.</p>
                        <div
                            class="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 4 -->
                <NuxtLink to="/services/sem" class="group">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col relative overflow-hidden transform hover:-translate-y-2 card-shadow hover:card-shadow-hover">
                        <!-- Subtle glow effect -->
                        <div
                            class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        </div>
                        <div
                            class="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-grow relative z-10 border-2 border-blue-500/30">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300">
                            </div>
                            <Icon name="lucide:megaphone" class="w-10 h-10 text-blue-400" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Search Engine Marketing</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">Targeted ads, powerful returns</p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">Our data-led campaigns put your offer in
                            front of the right eyes, at the right time.</p>
                        <div
                            class="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 5 -->
                <NuxtLink to="/services/email-marketing" class="group">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col relative overflow-hidden transform hover:-translate-y-2 card-shadow hover:card-shadow-hover">
                        <!-- Subtle glow effect -->
                        <div
                            class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        </div>
                        <div
                            class="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-grow relative z-10 border-2 border-blue-500/30">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300">
                            </div>
                            <Icon name="lucide:mail" class="w-10 h-10 text-blue-400" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Email Marketing</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">Improved customer retention</p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">We set up smart campaigns that keep your
                            audience engaged and ready to buy again.</p>
                        <div
                            class="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 6 -->
                <NuxtLink to="/services/training" class="group">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col relative overflow-hidden transform hover:-translate-y-2 card-shadow hover:card-shadow-hover">
                        <!-- Subtle glow effect -->
                        <div
                            class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        </div>
                        <div
                            class="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-grow relative z-10 border-2 border-blue-500/30">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300">
                            </div>
                            <Icon name="lucide:graduation-cap" class="w-10 h-10 text-blue-400" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Digital Productivity Training</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">Transform your workforce
                            efficiency</p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">Upskill your team with hands-on training
                            that drives performance and output.</p>
                        <div
                            class="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
// Add this to your tailwind.config.js animations
// animations: {
//   'pulse-grow': {
//     '0%, 100%': { transform: 'scale(1)' },
//     '50%': { transform: 'scale(1.1)' },
//   }
// }
</script>

<style>
/* Pulse Grow Animation */
@keyframes pulse-grow {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }
}

.animate-pulse-grow {
    animation: pulse-grow 1.5s ease infinite;
}

/* Enhanced card shadows with blue tint */
.card-shadow {
    box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.2);
}

.hover\:card-shadow-hover:hover {
    box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.4), 0 10px 20px -5px rgba(147, 51, 234, 0.3);
}

/* Gradient background option if you want it */
.bg-gradient-dark {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}
</style>