<template>
    <section class="py-16 bg-white dark:bg-gray-900">
        <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-12">
                <p
                    class="text-blue-600 dark:text-blue-400 text-sm md:text-base font-medium uppercase tracking-wider mb-3">
                    Our core expertise
                </p>
                <h2 class="text-3xl md:text-4xl font-bold mb-5 text-gray-900 dark:text-white barlow-condensed">
                    Specialized Services
                </h2>
                <div class="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
            </div>

            <!-- Combined Services Card -->
            <div
                class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <!-- Text Content -->
                    <div class="p-8 md:p-10">
                        <!-- Service 1 -->
                        <div class="mb-8">
                            <div class="flex items-center mb-4">
                                <div
                                    class="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                                    <Icon name="lucide:code" class="w-6 h-6 text-white" />
                                </div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white">Enterprise Web Apps</h3>
                            </div>
                            <p class="text-blue-600 dark:text-blue-400 font-medium mb-2">High-performance with higher
                                conversion</p>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">We build sleek, scalable, and
                                conversion-driven websites customized to your brand and goals.</p>
                        </div>

                        <!-- Service 2 -->
                        <div class="mb-8">
                            <div class="flex items-center mb-4">
                                <div
                                    class="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                                    <Icon name="lucide:smartphone" class="w-6 h-6 text-white" />
                                </div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white">Business Mobile Apps</h3>
                            </div>
                            <p class="text-blue-600 dark:text-blue-400 font-medium mb-2">One codebase, all devices</p>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">Launch apps that run smoothly on web, iOS,
                                and Android — all from a single build.</p>
                        </div>

                        <!-- Service 3 -->
                        <div>
                            <div class="flex items-center mb-4">
                                <div
                                    class="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                                    <Icon name="lucide:trending-up" class="w-6 h-6 text-white" />
                                </div>
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white">Search Engine Optimization
                                </h3>
                            </div>
                            <p class="text-blue-600 dark:text-blue-400 font-medium mb-2">Rank higher, sell more</p>
                            <p class="text-gray-600 dark:text-gray-300">We combine SEO and content strategy to grow your
                                visibility, engagement, and sales.</p>
                        </div>
                    </div>

                    <!-- Visual Content -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 overflow-hidden">
                            <!-- Main Image -->
                            <img src="~/assets/img/coding-tekfolio.jpg" alt="Web development"
                                class="w-full h-full object-cover absolute inset-0 transform transition-all duration-700 hover:scale-105" />

                            <!-- Overlay Image with Tilt Effect -->
                            <div
                                class="absolute bottom-8 right-8 w-2/3 h-auto shadow-2xl rounded-lg overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500">
                                <img src="~/assets/img/api-tekfolio.jpg" alt="Mobile development"
                                    class="w-full h-full object-cover" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>

                            <!-- Decorative Elements -->
                            <div
                                class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-white/5 dark:from-black/10 dark:to-black/5">
                            </div>
                            <div
                                class="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600 rounded-full opacity-10 dark:opacity-15 blur-xl">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- View All Link -->
                <div class="px-8 pb-6 pt-4 border-t border-gray-100 dark:border-gray-700 text-center">
                    <NuxtLink to="/services"
                        class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                        <span class="mr-2">View all our services</span>
                        <Icon name="lucide:arrow-right"
                            class="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic remains clean
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

.barlow-condensed {
    font-family: 'Barlow Condensed', sans-serif;
}

/* Hover effect for the overlay image */
.hidden img:hover {
    transform: scale(1.05) rotate(-1deg);
}

/* Smooth transitions */
img,
.transform {
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Link hover effect */
a:hover .group-hover\:translate-x-1 {
    transform: translateX(0.25rem);
}
</style>