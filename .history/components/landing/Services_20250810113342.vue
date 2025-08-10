<template>
    <section class="py-16 md:py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <p
                    class="text-blue-600 dark:text-blue-400 text-sm md:text-base font-medium uppercase tracking-wider mb-4">
                    Our core expertise
                </p>
                <h2 class="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white barlow-condensed">
                    Our full 'tekfolio' of services
                </h2>
                <div class="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
            </div>

            <!-- Service 1 - Web Development -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                <div class="lg:pr-12 order-1">
                    <div class="flex items-center mb-6">
                        <div
                            class="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mr-6">
                            <Icon name="lucide:code" class="w-7 h-7 text-white" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Enterprise Web Apps</h3>
                    </div>
                    <p class="text-blue-600 dark:text-blue-400 font-medium mb-4">High-performance with higher conversion
                    </p>
                    <p class="text-gray-600 dark:text-gray-300 mb-8">We build sleek, scalable, and conversion-driven
                        websites customized to your brand and goals.</p>
                    <NuxtLink to="/services/web-development"
                        class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium">
                        <span class="mr-2">Here's how</span>
                        <Icon name="lucide:arrow-right"
                            class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </NuxtLink>
                </div>
                <div class="relative order-2">
                    <img src="~/assets/img/coding-tekfolio.jpg" alt="Web development code on screen"
                        class="rounded-xl shadow-xl w-full h-auto border-4 border-white dark:border-gray-800 transform transition-all duration-700 hover:scale-[1.02]" />
                    <div
                        class="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 dark:bg-blue-500 rounded-full opacity-10 dark:opacity-15 blur-xl">
                    </div>
                </div>
            </div>

            <!-- Service 2 - Mobile Apps -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                <div class="lg:pr-12 order-1 lg:order-2">
                    <div class="flex items-center mb-6">
                        <div
                            class="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mr-6">
                            <Icon name="lucide:smartphone" class="w-7 h-7 text-white" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Business Mobile Apps</h3>
                    </div>
                    <p class="text-blue-600 dark:text-blue-400 font-medium mb-4">One codebase, all devices</p>
                    <p class="text-gray-600 dark:text-gray-300 mb-8">Launch apps that run smoothly on web, iOS, and
                        Android — all from a single build.</p>
                    <NuxtLink to="/services/app-development"
                        class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium">
                        <span class="mr-2">Here's how</span>
                        <Icon name="lucide:arrow-right"
                            class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </NuxtLink>
                </div>
                <div class="relative order-2 lg:order-1">
                    <img src="~/assets/img/api-tekfolio.jpg" alt="API and mobile app development"
                        class="rounded-xl shadow-xl w-full h-auto border-4 border-white dark:border-gray-800 transform transition-all duration-700 hover:scale-[1.02]" />
                    <div
                        class="absolute -top-6 -left-6 w-24 h-24 bg-blue-600 dark:bg-blue-500 rounded-full opacity-10 dark:opacity-15 blur-xl">
                    </div>
                </div>
            </div>

            <!-- Service 3 - SEO -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="lg:pr-12 order-1">
                    <div class="flex items-center mb-6">
                        <div
                            class="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mr-6">
                            <Icon name="lucide:trending-up" class="w-7 h-7 text-white" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Search Engine Optimization</h3>
                    </div>
                    <p class="text-blue-600 dark:text-blue-400 font-medium mb-4">Rank higher, sell more</p>
                    <p class="text-gray-600 dark:text-gray-300 mb-8">We combine SEO and content strategy to grow your
                        visibility, engagement, and sales.</p>
                    <NuxtLink to="/services/seo"
                        class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium">
                        <span class="mr-2">Here's how</span>
                        <Icon name="lucide:arrow-right"
                            class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </NuxtLink>
                </div>
                <div class="relative order-2">
                    <div
                        class="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-xl shadow-xl p-8 h-full flex items-center justify-center min-h-[300px]">
                        <div class="text-center">
                            <div
                                class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Icon name="lucide:trending-up" class="w-10 h-10 text-white" />
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-2">SEO</h3>
                            <p class="text-blue-200 font-medium">Rank higher, sell more</p>
                        </div>
                    </div>
                    <div
                        class="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 dark:bg-blue-500 rounded-full opacity-10 dark:opacity-15 blur-xl">
                    </div>
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

/* Smooth image hover effect */
img {
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.7s ease;
}

img:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Subtle glow effect for the gradient card */
.bg-gradient-to-br {
    position: relative;
    overflow: hidden;
}

.bg-gradient-to-br::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    transform: rotate(30deg);
    opacity: 0;
    transition: opacity 0.7s ease;
}

.bg-gradient-to-br:hover::after {
    opacity: 1;
}

/* Link hover effect */
a:hover .group-hover\:translate-x-1 {
    transform: translateX(0.25rem);
}
</style>