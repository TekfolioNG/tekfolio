<template>
    <div class="min-h-screen bg-white">
        <!-- Hero Section -->
        <section class="relative h-screen flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 z-0">
                <img src="~/assets/img/climate-smart-agric.jpg" alt="Climate-smart agriculture"
                    class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black/50"></div>
            </div>

            <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Farming That Protects the Future
                </h1>
                <p class="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                    Helping farmers grow more by working with nature, not against it
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                        Learn More
                    </button>
                    <button
                        class="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <section class="py-20 px-4">
            <div class="max-w-6xl mx-auto">
                <!-- Introduction -->
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-8">
                        Climate-Smart Agriculture Solutions
                    </h2>
                    <div class="max-w-4xl mx-auto">
                        <p class="text-xl text-gray-700 leading-relaxed mb-8">
                            At Vera Verde, we help farmers grow more by working with nature, not against it. Our
                            climate-smart agriculture approach combines modern tools with regenerative practices to
                            boost yields, restore soil health, and build resilience to climate shocks like drought and
                            erosion.
                        </p>
                        <p class="text-xl text-gray-700 leading-relaxed">
                            We support rural communities with affordable, low-emission solutions that make farming more
                            productive, more sustainable, and better for the planet.
                        </p>
                    </div>
                </div>

                <!-- Video Section -->
                <div class="mb-20">
                    <div class="max-w-4xl mx-auto">
                        <div class="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                            <video controls class="w-full h-full object-cover"
                                poster="~/assets/img/climate-smart-agric.jpg">
                                <source
                                    src="https://pub-9c521f4c51b34d61b7ad664a56247288.r2.dev/climate-smart-agric-veraverde.mp4"
                                    type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

                <!-- What We Do Section -->
                <div class="mb-20">
                    <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">
                        What We Do
                    </h2>

                    <div class="grid md:grid-cols-2 gap-12">
                        <!-- Biochar Application -->
                        <div class="bg-gray-50 p-8 rounded-xl">
                            <div class="flex items-center mb-6">
                                <div class="bg-green-100 p-3 rounded-full mr-4">
                                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900">Biochar Application</h3>
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                                We apply biochar—produced from organic waste—to enrich depleted soils, improve water
                                retention, and lock carbon deep underground, reducing emissions while boosting
                                fertility.
                            </p>
                        </div>

                        <!-- Mechanized Farm Tools -->
                        <div class="bg-gray-50 p-8 rounded-xl">
                            <div class="flex items-center mb-6">
                                <div class="bg-green-100 p-3 rounded-full mr-4">
                                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900">Mechanized Farm Tools</h3>
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                                Through cooperative networks, we give farmers access to time-saving equipment like
                                tractors and planters, improving efficiency and reducing manual labour.
                            </p>
                        </div>

                        <!-- Agroforestry & Cover Cropping -->
                        <div class="bg-gray-50 p-8 rounded-xl">
                            <div class="flex items-center mb-6">
                                <div class="bg-green-100 p-3 rounded-full mr-4">
                                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900">Agroforestry & Cover Cropping</h3>
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                                We encourage tree planting and intercropping techniques that prevent erosion, restore
                                biodiversity, and protect long-term soil productivity.
                            </p>
                        </div>

                        <!-- Water-Efficient Farming -->
                        <div class="bg-gray-50 p-8 rounded-xl">
                            <div class="flex items-center mb-6">
                                <div class="bg-green-100 p-3 rounded-full mr-4">
                                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900">Water-Efficient Farming</h3>
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                                In dry zones, we support techniques like mulching and drip irrigation that help farmers
                                conserve water without reducing output.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Why It Matters Section -->
                <div class="mb-20">
                    <div class="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white">
                        <h2 class="text-4xl font-bold text-center mb-8">
                            Why It Matters
                        </h2>
                        <div class="max-w-4xl mx-auto">
                            <p class="text-xl leading-relaxed text-center">
                                In Nigeria, millions of smallholder farmers face degrading soil, irregular rainfall, and
                                low crop yields. Climate-smart farming helps change that—boosting harvests, increasing
                                income, and improving food security while reducing environmental harm.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Impact Stats -->
                <div class="grid md:grid-cols-3 gap-8 mb-20">
                    <div class="text-center">
                        <div class="text-4xl font-bold text-green-600 mb-2">50%</div>
                        <div class="text-lg text-gray-700">Increase in Crop Yields</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-green-600 mb-2">30%</div>
                        <div class="text-lg text-gray-700">Reduction in Water Usage</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-green-600 mb-2">1000+</div>
                        <div class="text-lg text-gray-700">Farmers Supported</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <LandingCta />
    </div>
</template>

<script setup>
definePageMeta({
    layout: "landing"
});

// SEO Meta
useHead({
    title: 'Climate-Smart Agriculture - Vera Verde',
    meta: [
        {
            name: 'description',
            content: 'Helping farmers grow more by working with nature. Climate-smart agriculture solutions that boost yields, restore soil health, and build resilience to climate shocks.'
        },
        {
            property: 'og:title',
            content: 'Climate-Smart Agriculture - Vera Verde'
        },
        {
            property: 'og:description',
            content: 'Helping farmers grow more by working with nature. Climate-smart agriculture solutions that boost yields, restore soil health, and build resilience to climate shocks.'
        },
        {
            property: 'og:image',
            content: '/assets/img/climate-smart-agric.jpg'
        }
    ]
});
</script>

<style scoped>
/* Custom scrollbar for video */
video::-webkit-media-controls {
    border-radius: 8px;
}

/* Smooth scroll behavior */
html {
    scroll-behavior: smooth;
}

/* Custom gradient overlay */
.bg-gradient-to-r::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.1));
    pointer-events: none;
}
</style>