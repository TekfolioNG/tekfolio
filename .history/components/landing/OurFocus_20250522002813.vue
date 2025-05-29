<template>
    <section class="py-10 md:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-12">
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
                        class="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div
                                class="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                                <Icon name="lucide:code"
                                    class="w-8 h-8 text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Custom Web
                            Development</h3>
                        <p class="text-blue-800 dark:text-blue-400 font-bold mb-4 text-center">High-performance websites
                            with 3× higher conversion</p>
                        <p class="text-gray-700 dark:text-gray-300 flex-grow text-center">We build sleek, scalable, and
                            conversion-driven websites tailored to your brand and goals.</p>
                        <div class="mt-6 flex justify-center">
                            <div
                                class="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                                <span>Here's how</span>
                                <Icon name="lucide:arrow-right"
                                    class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 2 -->
                <NuxtLink to="/services/app-development" class="group">
                    <div
                        class="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div
                                class="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                                <Icon name="lucide:smartphone"
                                    class="w-8 h-8 text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Cross-Platform App
                            Development</h3>
                        <p class="text-blue-800 dark:text-blue-400 font-bold mb-4 text-center">One codebase, all
                            devices: 40% savings, 100% reach</p>
                        <p class="text-gray-700 dark:text-gray-300 flex-grow text-center">Launch apps that run smoothly
                            on web, iOS, and Android — all from a single build.</p>
                        <div class="mt-6 flex justify-center">
                            <div
                                class="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                                <span>Here's how</span>
                                <Icon name="lucide:arrow-right"
                                    class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 3 -->
                <NuxtLink to="/services/seo" class="group">
                    <div
                        class="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div
                                class="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                                <Icon name="lucide:trending-up"
                                    class="w-8 h-8 text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Search Engine
                            Optimization (SEO)</h3>
                        <p class="text-blue-800 dark:text-blue-400 font-bold mb-4 text-center">Rank higher, sell more:
                            50% traffic boost in 90 days</p>
                        <p class="text-gray-700 dark:text-gray-300 flex-grow text-center">We combine SEO and content
                            strategy to grow your visibility, engagement, and sales.</p>
                        <div class="mt-6 flex justify-center">
                            <div
                                class="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                                <span>Here's how</span>
                                <Icon name="lucide:arrow-right"
                                    class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 4 -->
                <NuxtLink to="/services/sem" class="group">
                    <div
                        class="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div
                                class="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                                <Icon name="lucide:megaphone"
                                    class="w-8 h-8 text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Search Engine
                            Marketing (SEM)</h3>
                        <p class="text-blue-800 dark:text-blue-400 font-bold mb-4 text-center">Targeted ads, powerful
                            returns with average 5× ROAS</p>
                        <p class="text-gray-700 dark:text-gray-300 flex-grow text-center">Our data-led campaigns put
                            your offer in front of the right eyes, at the right time.</p>
                        <div class="mt-6 flex justify-center">
                            <div
                                class="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                                <span>Here's how</span>
                                <Icon name="lucide:arrow-right"
                                    class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 5 -->
                <NuxtLink to="/services/email-marketing" class="group">
                    <div
                        class="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div
                                class="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                                <Icon name="lucide:mail"
                                    class="w-8 h-8 text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Email Marketing
                        </h3>
                        <p class="text-blue-800 dark:text-blue-400 font-bold mb-4 text-center">Enjoy 30% customer
                            retention with automated workflows</p>
                        <p class="text-gray-700 dark:text-gray-300 flex-grow text-center">We set up smart campaigns that
                            keep your audience engaged and ready to buy again.</p>
                        <div class="mt-6 flex justify-center">
                            <div
                                class="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                                <span>Here's how</span>
                                <Icon name="lucide:arrow-right"
                                    class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <!-- Service Card 6 -->
                <NuxtLink to="/services/training" class="group">
                    <div
                        class="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div
                                class="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                                <Icon name="lucide:graduation-cap"
                                    class="w-8 h-8 text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Digital
                            Productivity Training</h3>
                        <p class="text-blue-800 dark:text-blue-400 font-bold mb-4 text-center">Transform your workforce
                            with 30% efficiency gains in just weeks</p>
                        <p class="text-gray-700 dark:text-gray-300 flex-grow text-center">Upskill your team with
                            hands-on training that drives performance and output.</p>
                        <div class="mt-6 flex justify-center">
                            <div
                                class="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                                <span>Here's how</span>
                                <Icon name="lucide:arrow-right"
                                    class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic goes here
</script>

<style>
/* Custom shadow for cards */
.shadow-lg {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.hover\:shadow-xl:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>