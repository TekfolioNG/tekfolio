<template>
    <section class="py-16 md:py-24 bg-gray-900 text-white w-full">
        <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
                    How We Help Our Clients
                </h2>
                <div class="w-24 h-1 bg-white mx-auto"></div>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-0">
                <!-- Service Card 1 -->
                <NuxtLink to="/services/web-development" class="group">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-[#01348F] transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                        <div
                            class="w-16 h-16 bg-[#1D4ED8] rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-500 transition-colors duration-300">
                            <Icon name="lucide:code" class="w-8 h-8 text-white" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Enterprise Web App Development</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">High-performance with higher conversion
                        </p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">We build sleek, scalable, and
                            conversion-driven websites customized to your brand and goals.</p>
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
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                        <div
                            class="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-500 transition-colors duration-300">
                            <Icon name="lucide:smartphone" class="w-8 h-8 text-white" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Cross-Platform App Development</h3>
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
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                        <div
                            class="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-500 transition-colors duration-300">
                            <Icon name="lucide:trending-up" class="w-8 h-8 text-white" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Search Engine Optimization</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">Rank higher, sell more</p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">We combine SEO and content strategy to grow
                            your visibility, engagement, and sales.</p>
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
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                        <div
                            class="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-500 transition-colors duration-300">
                            <Icon name="lucide:megaphone" class="w-8 h-8 text-white" />
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
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                        <div
                            class="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-500 transition-colors duration-300">
                            <Icon name="lucide:mail" class="w-8 h-8 text-white" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Email Marketing</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">Improved customer retention with automated
                            workflows</p>
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
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                        <div
                            class="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-500 transition-colors duration-300">
                            <Icon name="lucide:graduation-cap" class="w-8 h-8 text-white" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">Digital Productivity Training</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">Transform your workforce
                            with efficiency gains</p>
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
// Clean component - no special animations or complex effects needed
</script>