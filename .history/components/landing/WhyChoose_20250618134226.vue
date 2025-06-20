<template>
    <section class="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute inset-0 opacity-5">
            <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div class="grid lg:grid-cols-2 gap-16 items-start">

                <!-- Left Side - Illustration and Title -->
                <div class="order-2 lg:order-1">
                    <!-- Decorative Background -->
                    <div
                        class="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
                        <!-- Title on colored background -->
                        <div class="text-white mb-8">
                            <h2 class="text-3xl lg:text-4xl font-bold leading-tight">
                                Why choose<br>
                                <span class="text-blue-200">TEKFOLIO</span><br>
                                <span class="text-2xl lg:text-3xl font-light">as your</span><br>
                                <span class="text-yellow-300">software dev<br>partner?</span>
                            </h2>
                        </div>

                        <!-- Illustration Area -->
                        <div class="relative">
                            <img src="/assets/img/why-choose-tekfolio.png" alt="Why choose Tekfolio illustration"
                                class="w-full h-auto max-w-md mx-auto" loading="lazy" />

                            <!-- Fallback illustration if image doesn't load -->
                            <div class="absolute inset-0 flex items-center justify-center opacity-20">
                                <div
                                    class="w-64 h-64 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                    <div class="w-32 h-32 bg-blue-300 rounded-full flex items-center justify-center">
                                        <span class="text-4xl text-white">💡</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Side - Content -->
                <div class="order-1 lg:order-2">
                    <!-- Main Heading -->
                    <div class="mb-12">
                        <h1 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Why We're the <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Go-To
                                Tech Partner</span> for Ambitious Brands
                        </h1>
                        <p class="text-xl text-slate-600 leading-relaxed mb-6">
                            We work with teams that think ahead, move fast, and build with purpose. Whether it's
                            launching bold new ideas or refining what's already working, we're in it for the long game.
                        </p>
                        <p
                            class="text-lg text-slate-700 font-medium bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                            It's why forward-thinking founders and teams don't just choose us; <strong>they stick with
                                us.</strong>
                        </p>
                    </div>

                    <!-- Benefits Grid -->
                    <div class="grid gap-6">
                        <!-- Row 1 -->
                        <div class="grid md:grid-cols-2 gap-6">
                            <!-- Fast Building -->
                            <div
                                class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
                                <div class="flex items-start gap-4">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span class="text-2xl">🚀</span>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-slate-900 mb-2">We Build Fast — Without
                                            Breaking Things</h3>
                                        <p class="text-slate-600 text-sm leading-relaxed">
                                            Speed matters, but quality lasts. We move fast and ship clean, scalable code
                                            you won't need to rebuild.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Strategy First -->
                            <div
                                class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
                                <div class="flex items-start gap-4">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span class="text-2xl">🎯</span>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-slate-900 mb-2">Strategy Comes Before Screens
                                        </h3>
                                        <p class="text-slate-600 text-sm leading-relaxed">
                                            We begin with your business goals and long-term vision. Every decision maps
                                            to what moves the needle.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Row 2 -->
                        <div class="grid md:grid-cols-2 gap-6">
                            <!-- Tech-Led Human-Centered -->
                            <div
                                class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
                                <div class="flex items-start gap-4">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span class="text-2xl">🧠</span>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-slate-900 mb-2">Tech-Led, Human-Centered</h3>
                                        <p class="text-slate-600 text-sm leading-relaxed">
                                            From Nuxt to Flutter and Vertex AI, we use next-gen tools to craft
                                            user-first experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- True Partner -->
                            <div
                                class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
                                <div class="flex items-start gap-4">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span class="text-2xl">🤝</span>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-slate-900 mb-2">A True Partner, Not Just a
                                            Vendor</h3>
                                        <p class="text-slate-600 text-sm leading-relaxed">
                                            We ask better questions, suggest smarter solutions, and stay engaged long
                                            after launch.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Row 3 -->
                        <div class="grid md:grid-cols-2 gap-6">
                            <!-- Build for Growth -->
                            <div
                                class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
                                <div class="flex items-start gap-4">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span class="text-2xl">📈</span>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-slate-900 mb-2">We Build for Growth and Change
                                        </h3>
                                        <p class="text-slate-600 text-sm leading-relaxed">
                                            Whether launching an MVP or scaling a full product, we design systems that
                                            grow with your business.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Phased Development -->
                            <div
                                class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
                                <div class="flex items-start gap-4">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span class="text-2xl">🛠️</span>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-slate-900 mb-2">Phased, Transparent
                                            Development</h3>
                                        <p class="text-slate-600 text-sm leading-relaxed">
                                            You'll always know what's happening. Clear stages with honest updates, no
                                            surprises.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Row 4 - Highlighted -->
                        <div class="grid md:grid-cols-2 gap-6 mt-4">
                            <!-- On-Time Delivery -->
                            <div
                                class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 shadow-xl text-white">
                                <div class="flex items-start gap-4">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span class="text-2xl">⏱</span>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold mb-2">On-Time. On-Budget. No Drama.</h3>
                                        <p class="text-slate-300 text-sm leading-relaxed">
                                            We respect timelines and deliver when promised. <strong
                                                class="text-white">We simply deliver when we say we will.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Future-Ready -->
                            <div
                                class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 shadow-xl text-white">
                                <div class="flex items-start gap-4">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span class="text-2xl">🎯</span>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold mb-2">Future-Ready by Default</h3>
                                        <p class="text-blue-100 text-sm leading-relaxed">
                                            We don't chase trends. We build with stable, modern tools that adapt as your
                                            product evolves.
                                        </p>
                                    </div>
                                </div>
                            </div>
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
/* Additional custom styles if needed */
</style>