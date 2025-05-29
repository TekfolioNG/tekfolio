<template>
    <section class="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    How We Help Our Clients
                </h2>
                <div class="w-20 h-1 bg-blue-700 mx-auto"></div>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Service Card 1 -->
                <NuxtLink to="/services/web-development" class="group">
                    <div
                        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div
                            class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 group-hover:animate-tada">
                            <Icon name="lucide:code" class="w-7 h-7 text-blue-700 dark:text-blue-500" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Custom Web Development</h3>
                        <p class="text-blue-700 dark:text-blue-400 font-medium mb-4">High-performance websites with 3×
                            higher conversion</p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow">We build sleek, scalable, and
                            conversion-driven websites tailored to your brand and goals.</p>
                    </div>
                </NuxtLink>

                <!-- Service Card 2 -->
                <NuxtLink to="/services/app-development" class="group">
                    <div
                        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div
                            class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 group-hover:animate-tada">
                            <Icon name="lucide:smartphone" class="w-7 h-7 text-blue-700 dark:text-blue-500" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Cross-Platform App Development
                        </h3>
                        <p class="text-blue-700 dark:text-blue-400 font-medium mb-4">One codebase, all devices: 40%
                            savings, 100% reach</p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow">Launch apps that run smoothly on web, iOS,
                            and Android — all from a single build.</p>
                    </div>
                </NuxtLink>

                <!-- Service Card 3 -->
                <NuxtLink to="/services/seo" class="group">
                    <div
                        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div
                            class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 group-hover:animate-tada">
                            <Icon name="lucide:trending-up" class="w-7 h-7 text-blue-700 dark:text-blue-500" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Search Engine Optimization
                            (SEO)</h3>
                        <p class="text-blue-700 dark:text-blue-400 font-medium mb-4">Rank higher, sell more: 50% traffic
                            boost in 90 days</p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow">We combine SEO and content strategy to
                            grow your visibility, engagement, and sales.</p>
                    </div>
                </NuxtLink>

                <!-- Service Card 4 -->
                <NuxtLink to="/services/sem" class="group">
                    <div
                        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div
                            class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 group-hover:animate-tada">
                            <Icon name="lucide:megaphone" class="w-7 h-7 text-blue-700 dark:text-blue-500" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Search Engine Marketing (SEM)
                        </h3>
                        <p class="text-blue-700 dark:text-blue-400 font-medium mb-4">Targeted ads, powerful returns with
                            average 5× ROAS</p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow">Our data-led campaigns put your offer in
                            front of the right eyes, at the right time.</p>
                    </div>
                </NuxtLink>

                <!-- Service Card 5 -->
                <NuxtLink to="/services/email-marketing" class="group">
                    <div
                        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div
                            class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 group-hover:animate-tada">
                            <Icon name="lucide:mail" class="w-7 h-7 text-blue-700 dark:text-blue-500" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Email Marketing</h3>
                        <p class="text-blue-700 dark:text-blue-400 font-medium mb-4">Enjoy 30% customer retention with
                            automated workflows</p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow">We set up smart campaigns that keep your
                            audience engaged and ready to buy again.</p>
                    </div>
                </NuxtLink>

                <!-- Service Card 6 -->
                <NuxtLink to="/services/training" class="group">
                    <div
                        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div
                            class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 group-hover:animate-tada">
                            <Icon name="lucide:graduation-cap" class="w-7 h-7 text-blue-700 dark:text-blue-500" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Digital Productivity Training
                        </h3>
                        <p class="text-blue-700 dark:text-blue-400 font-medium mb-4">Transform your workforce with 30%
                            efficiency gains in just weeks</p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow">Upskill your team with hands-on training
                            that drives performance and output.</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
// Add this to your tailwind.config.js animations if not already present
// animations: {
//   tada: {
//     '0%, 100%': { transform: 'scale(1)' },
//     '10%, 30%': { transform: 'scale(0.9) rotate(-3deg)' },
//     '20%, 40%, 60%, 80%': { transform: 'scale(1.1) rotate(3deg)' },
//     '50%, 70%': { transform: 'scale(1.1) rotate(-3deg)' },
//   }
// }
</script>

<style>
/* Add this to your global CSS if not using Tailwind animations config */
@keyframes tada {

    0%,
    100% {
        transform: scale(1);
    }

    10%,
    30% {
        transform: scale(0.9) rotate(-3deg);
    }

    20%,
    40%,
    60%,
    80% {
        transform: scale(1.1) rotate(3deg);
    }

    50%,
    70% {
        transform: scale(1.1) rotate(-3deg);
    }
}

.animate-tada {
    animation: tada 1s ease;
}
</style>