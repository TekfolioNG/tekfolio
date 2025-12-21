<!-- pages/work/climate-smart-agriculture.vue -->
<template>
    <div>
        <!-- Hero Section -->
        <section class="relative h-[85vh] overflow-hidden">
            <!-- Background image with overlay -->
            <div class="absolute inset-0 bg-gray-900">
                <img src="~/assets/img/climate-smart-agric.jpg" alt="Climate-smart agriculture at Vera Verde"
                    class="w-full h-full object-cover opacity-75" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 container mx-auto h-full flex items-center px-6">
                <div class="max-w-4xl">
                    <div class="mb-6">
                        <span
                            class="inline-block bg-gradient-to-r from-[#99cc33] to-[#c8e6a0] text-black px-4 py-2 rounded-full text-sm font-medium">
                            Climate-Smart Agriculture
                        </span>
                    </div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Farming That Protects <br><span class="text-[#99cc33]">the Future</span>
                    </h1>
                    <div class="w-24 h-1 bg-[#99cc33] mb-8"></div>
                    <p class="text-xl text-gray-200 max-w-3xl leading-relaxed">
                        At Vera Verde, we help farmers grow more by working with nature, not against it. Our
                        climate-smart agriculture approach combines modern tools with regenerative practices to boost
                        yields, restore soil health, and build resilience to climate shocks.
                    </p>
                    <div class="mt-10 flex flex-col sm:flex-row gap-4">
                        <button
                            class="bg-[#99cc33] text-black px-8 py-4 rounded-lg font-medium hover:bg-[#88bb22] transition-colors">
                            Learn More
                        </button>
                        <button
                            class="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-black transition-colors">
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Introduction Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 section-title">
                            Supporting Rural Communities with Sustainable Solutions
                        </h2>
                        <div class="w-20 h-1 bg-[#99cc33] mb-8"></div>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            We support rural communities with affordable, low-emission solutions that make farming more
                            productive, more sustainable, and better for the planet. Our approach helps farmers adapt to
                            changing weather patterns while improving their livelihoods.
                        </p>
                        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                            Through cooperative networks and community partnerships, we're transforming how agriculture
                            works in Nigeria—creating resilient farming systems that can thrive in the face of climate
                            change.
                        </p>
                        <div class="flex items-center space-x-4">
                            <div class="flex items-center space-x-2">
                                <div class="w-3 h-3 bg-[#99cc33] rounded-full"></div>
                                <span class="text-gray-600">Soil Health Restoration</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-3 h-3 bg-[#99cc33] rounded-full"></div>
                                <span class="text-gray-600">Climate Resilience</span>
                            </div>
                        </div>
                    </div>

                    <!-- Video Section -->
                    <div class="relative">
                        <div class="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                            <video controls class="w-full h-auto" poster="~/assets/img/climate-smart-agric.jpg">
                                <source
                                    src="https://pub-9c521f4c51b34d61b7ad664a56247288.r2.dev/climate-smart-agric-veraverde.mp4"
                                    type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div
                            class="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-[#99cc33]/20 to-[#c8e6a0]/20 rounded-2xl -z-10">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What We Do Section -->
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title">What We Do</h2>
                    <div class="w-20 h-1 bg-[#99cc33] mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive climate-smart solutions designed to transform farming practices across Nigeria.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-12">
                    <!-- Biochar Application -->
                    <div
                        class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div class="flex items-start space-x-4">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-[#99cc33] to-[#c8e6a0] rounded-2xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-4">Biochar Application</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    We apply biochar—produced from organic waste—to enrich depleted soils, improve water
                                    retention, and lock carbon deep underground, reducing emissions while boosting
                                    fertility.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Mechanized Farm Tools -->
                    <div
                        class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div class="flex items-start space-x-4">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-4">Mechanized Farm Tools</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Through cooperative networks, we give farmers access to time-saving equipment like
                                    tractors and planters, improving efficiency and reducing manual labour.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Agroforestry & Cover Cropping -->
                    <div
                        class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div class="flex items-start space-x-4">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-4">Agroforestry & Cover Cropping</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    We encourage tree planting and intercropping techniques that prevent erosion,
                                    restore biodiversity, and protect long-term soil productivity.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Water-Efficient Farming -->
                    <div
                        class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div class="flex items-start space-x-4">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-6-2">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-4">Water-Efficient Farming</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    In dry zones, we support techniques like mulching and drip irrigation that help
                                    farmers conserve water without reducing output.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why It Matters Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div class="order-2 lg:order-1">
                        <div class="bg-gradient-to-br from-[#99cc33]/10 to-[#c8e6a0]/10 p-8 rounded-2xl">
                            <div class="grid grid-cols-2 gap-6">
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-[#99cc33] mb-2">850+</div>
                                    <div class="text-gray-600 text-sm">Farmers Empowered</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-blue-600 mb-2">25+</div>
                                    <div class="text-gray-600 text-sm">Communities Served</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-green-600 mb-2">40%</div>
                                    <div class="text-gray-600 text-sm">Yield Increase</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-amber-600 mb-2">5,000+</div>
                                    <div class="text-gray-600 text-sm">Tons CO₂ Sequestered</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="order-1 lg:order-2">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 section-title">
                            Why It Matters
                        </h2>
                        <div class="w-20 h-1 bg-[#99cc33] mb-8"></div>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            In Nigeria, millions of smallholder farmers face degrading soil, irregular rainfall, and low
                            crop yields. Climate-smart farming helps change that—boosting harvests, increasing income,
                            and improving food security while reducing environmental harm.
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-3">
                                <div class="w-2 h-2 bg-[#99cc33] rounded-full mt-2 flex-shrink-0"></div>
                                <p class="text-gray-700">Improved soil health and fertility through biochar application
                                </p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <div class="w-2 h-2 bg-[#99cc33] rounded-full mt-2 flex-shrink-0"></div>
                                <p class="text-gray-700">Enhanced water retention and drought resistance</p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <div class="w-2 h-2 bg-[#99cc33] rounded-full mt-2 flex-shrink-0"></div>
                                <p class="text-gray-700">Reduced dependency on chemical fertilizers</p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <div class="w-2 h-2 bg-[#99cc33] rounded-full mt-2 flex-shrink-0"></div>
                                <p class="text-gray-700">Increased biodiversity and ecosystem restoration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-gradient-to-br from-gray-50 to-green-50">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title">Our Approach</h2>
                    <div class="w-20 h-1 bg-[#99cc33] mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        A systematic approach to implementing climate-smart agriculture in rural communities.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[#99cc33] to-[#c8e6a0] rounded-full flex items-center justify-center mx-auto mb-6">
                            <span class="text-white font-bold text-xl">1</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Community Assessment</h3>
                        <p class="text-gray-700 leading-relaxed">
                            We work with local cooperatives to understand soil conditions, farming practices, and
                            climate challenges specific to each community.
                        </p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span class="text-white font-bold text-xl">2</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
                        <p class="text-gray-700 leading-relaxed">
                            We deploy tailored solutions including biochar application, mechanized tools, and
                            sustainable farming techniques.
                        </p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span class="text-white font-bold text-xl">3</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Monitoring & Support</h3>
                        <p class="text-gray-700 leading-relaxed">
                            We provide ongoing training, monitor progress, and ensure sustainable adoption of
                            climate-smart practices.
                        </p>
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
        { name: 'description', content: 'Discover how Vera Verde is transforming Nigerian agriculture through climate-smart farming practices, biochar application, and sustainable solutions that boost yields while protecting the environment.' }
    ]
})
</script>

<style scoped>
.section-title {
    font-family: inherit;
}

.card-hover {
    transition: all 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.stats-counter {
    font-family: inherit;
}
</style>