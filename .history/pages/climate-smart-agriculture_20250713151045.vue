<template>
    <div>
        <!-- Hero Section -->
        <section class="relative h-[80vh] overflow-hidden">
            <!-- Background image with overlay -->
            <div class="absolute inset-0 bg-gray-900">
                <img src="~/assets/img/climate-smart-agric3.jpg" alt="Climate Smart Agriculture"
                    class="w-full h-full object-cover opacity-80" />
                <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 container mx-auto h-full flex items-center px-6">
                <div class="w-full flex flex-col lg:flex-row items-center justify-between">
                    <!-- Left side - Simple pipe and section title -->
                    <div class="hidden lg:block w-1/12">
                        <div class="flex items-start h-full pt-2">
                            <div class="w-1 h-24 bg-[#99cc33]"></div>
                            <span
                                class="text-white text-lg font-medium ml-4 -rotate-90 origin-left whitespace-nowrap translate-y-18">
                                Our Work
                            </span>
                        </div>
                    </div>

                    <!-- Right side - Main content -->
                    <div class="w-full lg:w-10/12 flex flex-col items-end translate-y-12">
                        <div class="text-right">
                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Farming That Protects the Future
                            </h1>
                            <div class="w-20 h-0.5 bg-[#99cc33] ml-auto mb-8"></div>
                            <p class="text-lg text-gray-300 max-w-2xl ml-auto">
                                Regenerative practices that boost yields, restore soil health, and build climate
                                resilience for Nigerian farmers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Intro Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 max-w-5xl">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 section-title">
                            Working With Nature
                        </h2>
                        <div class="w-20 h-1 bg-[#99cc33] mb-6"></div>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            At Vera Verde, we help farmers grow more by working with nature, not against it. Our
                            climate-smart agriculture approach combines modern tools with regenerative practices to
                            boost yields, restore soil health, and build resilience to climate shocks like drought and
                            erosion.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            We support rural communities with affordable, low-emission solutions that make farming more
                            productive, more sustainable, and better for the planet.
                        </p>
                    </div>

                    <!-- Video Section -->
                    <div class="relative rounded-2xl overflow-hidden shadow-xl">
                        <video class="w-full h-auto">
                            <source
                                src="https://pub-9c521f4c51b34d61b7ad664a56247288.r2.dev/climate-smart-agric-veraverde.mp4"
                                type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div
                            class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors duration-300">
                            <button
                                class="w-16 h-16 bg-[#99cc33] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What We Do Section -->
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title">Our Climate-Smart
                        Solutions</h2>
                    <div class="w-20 h-1 bg-[#99cc33] mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Practical innovations that make farming more sustainable and productive
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Biochar Application -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-[#2d420c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Biochar Application</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            We apply biochar—produced from organic waste—to enrich depleted soils, improve water
                            retention, and lock carbon deep underground, reducing emissions while boosting fertility.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-700">Increases soil organic matter by up to 40%</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-700">Improves water retention in sandy soils</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-700">Sequesters carbon for centuries</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Mechanized Tools -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-[#2d420c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Mechanized Farm Tools</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            Through cooperative networks, we give farmers access to time-saving equipment like tractors
                            and planters, improving efficiency and reducing manual labor.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-700">Shared equipment reduces costs by 60%</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-700">5x faster planting than manual methods</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-700">Precision planting improves yields</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Agroforestry -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-[#2d420c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Agroforestry & Cover Cropping</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            We encourage tree planting and intercropping techniques that prevent erosion, restore
                            biodiversity, and protect long-term soil productivity.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-700">Reduces soil erosion by up to 80%</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-700">Provides additional income from tree crops</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-700">Creates microclimates that protect crops</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Water Efficiency -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-[#2d420c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Water-Efficient Farming</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            In dry zones, we support techniques like mulching and drip irrigation that help farmers
                            conserve water without reducing output.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-700">Reduces water usage by 30-60%</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-700">Maintains yields during droughts</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-700">Prevents soil salinization</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why It Matters Section -->
        <section class="py-20 bg-gradient-to-br from-[#2d420c] to-[#406112]">
            <div class="container mx-auto px-6 max-w-5xl">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 section-title">Why Climate-Smart
                        Agriculture Matters</h2>
                    <div class="w-20 h-0.5 bg-[#99cc33] mx-auto mb-6"></div>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Transforming Nigerian agriculture for food security and environmental sustainability
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
                        <h3 class="text-2xl font-bold mb-4">The Challenge</h3>
                        <p class="mb-6">
                            In Nigeria, millions of smallholder farmers face degrading soil, irregular rainfall, and low
                            crop yields. Traditional farming methods struggle to adapt to climate change, threatening
                            food security and rural livelihoods.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>Soil degradation affects 60% of farmland</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>Rainfall variability increased by 40% in 20 years</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>Average yields 30% below potential</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
                        <h3 class="text-2xl font-bold mb-4">Our Solution</h3>
                        <p class="mb-6">
                            Climate-smart farming helps change this—boosting harvests, increasing income, and improving
                            food security while reducing environmental harm. Our approach delivers triple benefits:
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>Increased productivity (20-50% yield gains)</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>Enhanced resilience (drought/flood tolerance)</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>Reduced emissions (carbon sequestration)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <LandingCta />
    </div>
</template>

<script setup>
definePageMeta({
    layout: "landing"
});

useHead({
    title: 'Climate-Smart Agriculture - Vera Verde Limited',
    meta: [
        { name: 'description', content: 'Discover Vera Verde\'s climate-smart agriculture solutions that boost yields, restore soil health, and build climate resilience for Nigerian farmers.' }
    ]
});
</script>

<style scoped>
.section-title {
    font-family: 'Barlow Condensed', sans-serif;
}

.card-hover {
    transition: all 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Video play button animation */
video::-webkit-media-controls-play-button {
    display: none !important;
}

video::-webkit-media-controls-start-playback-button {
    display: none !important;
}
</style>