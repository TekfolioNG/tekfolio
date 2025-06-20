<template>
    <section class="py-12 lg:py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

                <!-- Left Side - 1/4 width on desktop -->
                <div class="lg:col-span-1 order-2 lg:order-1">
                    <!-- Heading Section with dark background -->
                    <div class="bg-gray-900 rounded-t-2xl p-6 text-white">
                        <h2 class="text-2xl xl:text-3xl font-bold leading-tight">
                            Why choose<br>
                            <span class="text-blue-400">TEKFOLIO</span><br>
                            <span class="text-lg xl:text-xl font-light">as your</span><br>
                            <span class="text-yellow-400">software dev<br>partner?</span>
                        </h2>
                    </div>

                    <!-- Image Section -->
                    <div class="bg-gray-800 rounded-b-2xl p-6 flex justify-center">
                        <img src="/assets/img/why-choose-tekfolio.png" alt="Why choose Tekfolio illustration"
                            class="w-full h-auto max-w-xs" loading="lazy" />
                        <!-- Fallback if image doesn't load -->
                        <div class="w-full h-48 bg-gray-700 rounded-xl flex items-center justify-center text-gray-400">
                            <span class="text-4xl">💡</span>
                        </div>
                    </div>
                </div>

                <!-- Right Side - 4/5 width on desktop -->
                <div class="lg:col-span-4 order-1 lg:order-2">
                    <!-- Main Heading -->
                    <div class="mb-8">
                        <h1
                            class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                            Why We're the <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Go-To
                                Tech Partner</span> for Ambitious Brands
                        </h1>
                        <p class="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            We work with teams that think ahead, move fast, and build with purpose. Whether it's
                            launching bold new ideas or refining what's already working, we're in it for the long game.
                        </p>
                        <div
                            class="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                            <p class="text-gray-700 dark:text-gray-300 font-medium">
                                It's why forward-thinking founders and teams don't just choose us; <strong
                                    class="text-gray-900 dark:text-white">they stick with us.</strong>
                            </p>
                        </div>
                    </div>

                    <!-- Benefits Grid - Condensed -->
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <!-- Fast Building -->
                        <div
                            class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2">🚀 We Build Fast —
                                Without Breaking Things</h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Speed matters, but quality lasts. We ship clean, scalable code you won't need to
                                rebuild.
                            </p>
                        </div>

                        <!-- Strategy First -->
                        <div
                            class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2">🎯 Strategy Comes Before
                                Screens</h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                We begin with your business goals and vision. Every decision maps to what moves the
                                needle.
                            </p>
                        </div>

                        <!-- Tech-Led Human-Centered -->
                        <div
                            class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2">🧠 Tech-Led,
                                Human-Centered</h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                From Nuxt to Flutter and Vertex AI, we craft user-first experiences with next-gen tools.
                            </p>
                        </div>

                        <!-- True Partner -->
                        <div
                            class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2">🤝 A True Partner, Not
                                Just a Vendor</h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                We ask better questions, suggest smarter solutions, and stay engaged long after launch.
                            </p>
                        </div>

                        <!-- Build for Growth -->
                        <div
                            class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2">📈 We Build for Growth
                                and Change</h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                We design systems that scale with your business, from MVP to full product.
                            </p>
                        </div>

                        <!-- Phased Development -->
                        <div
                            class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2">🛠️ Phased, Transparent
                                Development</h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Clear stages with honest updates. You'll always know what's happening.
                            </p>
                        </div>
                    </div>

                    <!-- Bottom Highlighted Features -->
                    <div class="grid sm:grid-cols-2 gap-4 mt-6">
                        <!-- On-Time Delivery -->
                        <div
                            class="bg-gray-900 dark:bg-gray-800 rounded-xl p-5 shadow-lg text-white border border-gray-700">
                            <h3 class="text-base font-bold mb-2">⏱ On-Time. On-Budget. No Drama.</h3>
                            <p class="text-gray-300 text-sm leading-relaxed">
                                We respect timelines and deliver when promised. <strong class="text-white">We simply
                                    deliver when we say we will.</strong>
                            </p>
                        </div>

                        <!-- Future-Ready -->
                        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-5 shadow-lg text-white">
                            <h3 class="text-base font-bold mb-2">🎯 Future-Ready by Default</h3>
                            <p class="text-blue-100 text-sm leading-relaxed">
                                We build with stable, modern tools that adapt as your product evolves.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Ensure proper grid behavior on mobile */
@media (max-width: 1023px) {

    .lg\:col-span-1,
    .lg\:col-span-4 {
        grid-column: span 1;
    }
}
</style>