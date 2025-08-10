<template>
    <section class="py-16 md:py-24 bg-gray-900 text-white w-full dark:bg-gray-950">
        <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <!-- Kicker/Preamble -->
                <p class="text-blue-400 text-sm md:text-base font-medium uppercase tracking-wider mb-4">
                    Our core expertise
                </p>

                <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white barlow-condensed">
                    Specialized Services
                </h2>
                <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>

            <!-- Services Grid - Now only 3 highlighted services -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 px-4 sm:px-0">
                <!-- Service Card 1 - Web Development -->
                <NuxtLink to="/services/web-development" class="group service-card">
                    <div
                        class="relative overflow-hidden bg-gray-800 rounded-xl border border-gray-700 transition-all duration-300 h-full flex flex-col dark:bg-gray-800 dark:border-gray-600">
                        <div class="h-48 overflow-hidden">
                            <img src="~/assets/img/coding-tekfolio.jpg" alt="Web development code on screen"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div class="p-8 flex flex-col flex-grow">
                            <div class="flex items-center mb-4">
                                <div
                                    class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-blue-400">
                                    <Icon name="lucide:code" class="w-6 h-6 text-white" />
                                </div>
                                <h3 class="text-xl font-bold text-white">Enterprise Web Apps</h3>
                            </div>
                            <p class="text-blue-400 font-medium mb-4">High-performance with higher conversion</p>
                            <p class="text-gray-300 flex-grow mb-6 dark:text-gray-300">We build sleek, scalable, and
                                conversion-driven websites customized to your brand and goals.</p>
                            <div class="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                                <span class="mr-2 font-medium">Explore our approach</span>
                                <Icon name="lucide:arrow-right"
                                    class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 2 - App Development -->
                <NuxtLink to="/services/app-development" class="group service-card">
                    <div
                        class="relative overflow-hidden bg-gray-800 rounded-xl border border-gray-700 transition-all duration-300 h-full flex flex-col dark:bg-gray-800 dark:border-gray-600">
                        <div class="h-48 overflow-hidden">
                            <img src="~/assets/img/api-tekfolio.jpg" alt="API and mobile app development"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div class="p-8 flex flex-col flex-grow">
                            <div class="flex items-center mb-4">
                                <div
                                    class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-blue-400">
                                    <Icon name="lucide:smartphone" class="w-6 h-6 text-white" />
                                </div>
                                <h3 class="text-xl font-bold text-white">Business Mobile Apps</h3>
                            </div>
                            <p class="text-blue-400 font-medium mb-4">One codebase, all devices</p>
                            <p class="text-gray-300 flex-grow mb-6 dark:text-gray-300">Launch apps that run smoothly on
                                web, iOS, and Android — all from a single build.</p>
                            <div class="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                                <span class="mr-2 font-medium">Explore our approach</span>
                                <Icon name="lucide:arrow-right"
                                    class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 3 - SEO -->
                <NuxtLink to="/services/seo" class="group service-card">
                    <div
                        class="relative overflow-hidden bg-gray-800 rounded-xl border border-gray-700 transition-all duration-300 h-full flex flex-col dark:bg-gray-800 dark:border-gray-600">
                        <div class="h-48 bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center">
                            <div class="text-center p-6">
                                <div
                                    class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon name="lucide:trending-up" class="w-8 h-8 text-white" />
                                </div>
                                <h3 class="text-2xl font-bold text-white mb-2">SEO</h3>
                                <p class="text-blue-200 font-medium">Rank higher, sell more</p>
                            </div>
                        </div>
                        <div class="p-8 flex flex-col flex-grow">
                            <p class="text-gray-300 flex-grow mb-6 dark:text-gray-300">We combine SEO and content
                                strategy to grow your visibility, engagement, and sales.</p>
                            <div class="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                                <span class="mr-2 font-medium">Explore our approach</span>
                                <Icon name="lucide:arrow-right"
                                    class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>

            <!-- Optional: Link to full services -->
            <div class="text-center mt-12">
                <NuxtLink to="/services"
                    class="inline-flex items-center text-gray-300 hover:text-white transition-colors">
                    <span class="mr-2">View all our services</span>
                    <Icon name="lucide:arrow-right" class="w-4 h-4" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic remains clean and focused
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

.barlow-condensed {
    font-family: 'Barlow Condensed', sans-serif;
}

/* Service Card Base Styles */
.service-card {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Hover Effects */
.service-card:hover {
    transform: translateY(-8px);
}

.service-card:hover>div {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-color: rgba(59, 130, 246, 0.5);
}

/* Dark Mode Adjustments */
.dark .service-card>div {
    background-color: rgba(31, 41, 55, 0.8);
    border-color: rgba(55, 65, 81, 0.5);
}

.dark .service-card:hover>div {
    background-color: rgba(31, 41, 55, 1);
}

/* Focus states for accessibility */
.service-card:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    transform: translateY(-4px);
}

/* Mobile optimizations */
@media (max-width: 768px) {
    .service-card:hover {
        transform: translateY(-4px);
    }

    .service-card:active {
        transform: translateY(-6px);
    }
}
</style>