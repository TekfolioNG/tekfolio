<template>
    <section class="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    How We Help Our Clients
                </h2>
                <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Service Card 1 -->
                <NuxtLink to="/services/web-development" class="group">
                    <div
                        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900/50 transform hover:-translate-y-1">
                        <div
                            class="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-grow">
                            <Icon name="lucide:code" class="w-10 h-10 text-blue-700 dark:text-blue-400" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Custom Web
                            Development</h3>
                        <p class="text-blue-600 dark:text-blue-400 font-medium mb-4 text-center">High-performance
                            with higher conversion</p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow mb-6 text-center">We build sleek, scalable,
                            and conversion-driven websites tailored to your brand and goals.</p>
                        <div
                            class="flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 2 -->
                <NuxtLink to="/services/app-development" class="group">
                    <div
                        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900/50 transform hover:-translate-y-1">
                        <div
                            class="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-grow">
                            <Icon name="lucide:smartphone" class="w-10 h-10 text-blue-700 dark:text-blue-400" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">App
                            Development</h3>
                        <p class="text-blue-600 dark:text-blue-400 font-medium mb-4 text-center">One codebase, all
                            devices</p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow mb-6 text-center">Launch apps that run
                            smoothly on web, iOS, and Android — all from a single build.</p>
                        <div
                            class="flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 3 -->
                <NuxtLink to="/services/seo" class="group">
                    <div
                        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900/50 transform hover:-translate-y-1">
                        <div
                            class="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-grow">
                            <Icon name="lucide:trending-up" class="w-10 h-10 text-blue-700 dark:text-blue-400" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">SEO
                        </h3>
                        <p class="text-blue-600 dark:text-blue-400 font-medium mb-4 text-center">Rank higher, sell more
                        </p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow mb-6 text-center">We combine SEO and
                            content strategy to grow your visibility, engagement, and sales.</p>
                        <div
                            class="flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 4 -->
                <NuxtLink to="/services/sem" class="group">
                    <div
                        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900/50 transform hover:-translate-y-1">
                        <div
                            class="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-grow">
                            <Icon name="lucide:megaphone" class="w-10 h-10 text-blue-700 dark:text-blue-400" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">SEM</h3>
                        <p class="text-blue-600 dark:text-blue-400 font-medium mb-4 text-center">Targeted ads, powerful
                            returns</p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow mb-6 text-center">Our data-led campaigns
                            put your offer in front of the right eyes, at the right time.</p>
                        <div
                            class="flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 5 -->
                <NuxtLink to="/services/email-marketing" class="group">
                    <div
                        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900/50 transform hover:-translate-y-1">
                        <div
                            class="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-grow">
                            <Icon name="lucide:mail" class="w-10 h-10 text-blue-700 dark:text-blue-400" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Email Marketing
                        </h3>
                        <p class="text-blue-600 dark:text-blue-400 font-medium mb-4 text-center">Enjoy improved customer
                            retention with automated workflows</p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow mb-6 text-center">We set up smart campaigns
                            that keep your audience engaged and ready to buy again.</p>
                        <div
                            class="flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 6 -->
                <NuxtLink to="/services/training" class="group">
                    <div
                        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900/50 transform hover:-translate-y-1">
                        <div
                            class="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-grow">
                            <Icon name="lucide:graduation-cap" class="w-10 h-10 text-blue-700 dark:text-blue-400" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Digital
                            Productivity Training</h3>
                        <p class="text-blue-600 dark:text-blue-400 font-medium mb-4 text-center">Transform your
                            workforce with 30% efficiency gains in just weeks</p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow mb-6 text-center">Upskill your team with
                            hands-on training that drives performance and output.</p>
                        <div
                            class="flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
    animation: pulse-grow 1s ease infinite;
}

/* Enhanced card shadows */
.shadow-xl {
    box-shadow: 0 15px 30px -5px rgba(29, 78, 216, 0.15), 0 10px 10px -5px rgba(29, 78, 216, 0.08);
}

.hover\:shadow-2xl:hover {
    box-shadow: 0 25px 50px -12px rgba(29, 78, 216, 0.25);
}

/* Smooth transitions */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>