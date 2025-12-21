<template>
    <div>
        <!-- Hero Section -->
        <section class="relative h-[60vh] bg-[#0d2a0a]">
            <div class="absolute inset-0 bg-black/40 flex items-center">
                <div class="container mx-auto px-6 text-center">
                    <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
                        <span class="text-[#c8a86d]">Igniting</span> Africa's Sustainable Future
                    </h1>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Pioneering climate-smart solutions that restore land, reduce emissions, and empower communities
                    </p>
                </div>
            </div>
        </section>

        <!-- Our Purpose Section -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Our <span class="text-[#0d2a0a]">Purpose</span>
                        </h2>
                        <div class="w-20 h-1 bg-[#c8a86d] mb-8"></div>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            Vera Verde exists at the intersection of environmental stewardship and agricultural
                            innovation. We're not just addressing climate change - we're creating tangible solutions
                            that benefit both the planet and the people who depend on it.
                        </p>
                        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                            From the rice fields of Niger State to the urban centers adopting our clean energy
                            solutions, we're building a network of sustainable practices that deliver measurable impact.
                        </p>
                    </div>
                    <div class="bg-[#f8f5f0] p-8 rounded-xl">
                        <img src="~/assets/img/veraverde-gardener.png" alt="Climate-Smart Agriculture"
                            class="rounded-lg w-full h-auto">
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission & Vision Section -->
        <section class="py-16 bg-[#f8f5f0]">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Mission -->
                    <div class="bg-white p-8 rounded-xl shadow-sm">
                        <div class="w-12 h-12 bg-[#0d2a0a]/10 rounded-lg flex items-center justify-center mb-6">
                            <Icon name="heroicons:flag" class="w-6 h-6 text-[#0d2a0a]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p class="text-gray-700 leading-relaxed">
                            To lead Nigeria's transition to a low-carbon economy by enabling regenerative agriculture,
                            promoting clean energy from biomass, and creating inclusive green jobs through innovation
                            and partnership.
                        </p>
                    </div>

                    <!-- Vision -->
                    <div class="bg-white p-8 rounded-xl shadow-sm">
                        <div class="w-12 h-12 bg-[#c8a86d]/20 rounded-lg flex items-center justify-center mb-6">
                            <Icon name="heroicons:eye" class="w-6 h-6 text-[#c8a86d]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p class="text-gray-700 leading-relaxed">
                            To become Africa's foremost green enterprise empowering communities with sustainable
                            technologies that restore land, reduce emissions, and build resilience against climate
                            change.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Impact Areas Section -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our <span class="text-[#0d2a0a]">Impact Areas</span>
                    </h2>
                    <div class="w-20 h-1 bg-[#c8a86d] mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Transforming agriculture and energy systems through innovative, scalable solutions
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Climate Smart Agriculture -->
                    <div class="bg-[#f8f5f0] p-6 rounded-xl group hover:bg-[#0d2a0a] transition-colors duration-300">
                        <div
                            class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#c8a86d]">
                            <Icon name="heroicons:leaf" class="w-8 h-8 text-[#0d2a0a] group-hover:text-white" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-white">
                            Climate-Smart Agriculture</h3>
                        <p class="text-gray-600 leading-relaxed text-center group-hover:text-gray-200">
                            Supporting farmers with mechanized tools and regenerative practices including biochar
                            application, agroforestry, and water-efficient systems.
                        </p>
                    </div>

                    <!-- Carbon Credits -->
                    <div class="bg-[#f8f5f0] p-6 rounded-xl group hover:bg-[#0d2a0a] transition-colors duration-300">
                        <div
                            class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#c8a86d]">
                            <Icon name="heroicons:arrow-trending-up"
                                class="w-8 h-8 text-[#0d2a0a] group-hover:text-white" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-white">Carbon
                            Credit Projects</h3>
                        <p class="text-gray-600 leading-relaxed text-center group-hover:text-gray-200">
                            Developing measurable carbon reduction projects under global standards like Verra and Gold
                            Standard, enabling Nigeria to earn and trade carbon credits.
                        </p>
                    </div>

                    <!-- Ecofuel Briquettes -->
                    <div class="bg-[#f8f5f0] p-6 rounded-xl group hover:bg-[#0d2a0a] transition-colors duration-300">
                        <div
                            class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#c8a86d]">
                            <Icon name="heroicons:fire" class="w-8 h-8 text-[#0d2a0a] group-hover:text-white" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-white">Ecofuel
                            Briquettes</h3>
                        <p class="text-gray-600 leading-relaxed text-center group-hover:text-gray-200">
                            Manufacturing clean-burning briquettes from rice husk, sawdust, and groundnut husk—providing
                            affordable, deforestation-free alternatives to charcoal.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Approach Section -->
        <section class="py-16 bg-[#0d2a0a] text-white">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold mb-6">
                            Our <span class="text-[#c8a86d]">Approach</span>
                        </h2>
                        <div class="w-20 h-1 bg-[#c8a86d] mb-8"></div>
                        <p class="text-lg text-gray-300 mb-6 leading-relaxed">
                            We believe sustainability must be economically viable to be truly sustainable. Our solutions
                            are designed to create value at every level of the ecosystem.
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-3">
                                <div class="w-2 h-2 bg-[#c8a86d] rounded-full mt-2 flex-shrink-0"></div>
                                <p class="text-gray-300">Collaborating with farmers, cooperatives, and institutions</p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <div class="w-2 h-2 bg-[#c8a86d] rounded-full mt-2 flex-shrink-0"></div>
                                <p class="text-gray-300">Leveraging agricultural residues for clean energy</p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <div class="w-2 h-2 bg-[#c8a86d] rounded-full mt-2 flex-shrink-0"></div>
                                <p class="text-gray-300">Partnering with NGOs and government for scale</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <img src="~/assets/img/about-farmer.jpg" alt="Farmer Partnership"
                            class="rounded-lg h-48 w-full object-cover">
                        <img src="~/assets/img/about-briquettes.jpg" alt="Ecofuel Briquettes"
                            class="rounded-lg h-48 w-full object-cover">
                        <img src="~/assets/img/about-biochar.jpg" alt="Biochar Application"
                            class="rounded-lg h-48 w-full object-cover">
                        <img src="~/assets/img/about-team.jpg" alt="Vera Verde Team"
                            class="rounded-lg h-48 w-full object-cover">
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-16 bg-[#c8a86d]">
            <div class="container mx-auto px-6 text-center max-w-4xl">
                <h2 class="text-3xl md:text-4xl font-bold text-[#0d2a0a] mb-6">
                    Ready to Join the Green Revolution?
                </h2>
                <p class="text-xl text-[#0d2a0a] mb-8 leading-relaxed">
                    Whether you're a farmer, partner, donor, or advocate, we invite you to collaborate with us in
                    creating lasting environmental and economic impact.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink to="/partnerships"
                        class="px-8 py-3 bg-[#0d2a0a] text-white font-semibold rounded-lg hover:bg-[#1a3a0a] transition-colors">
                        Partner With Us
                    </NuxtLink>
                    <NuxtLink to="/contact"
                        class="px-8 py-3 bg-white text-[#0d2a0a] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                        Contact Our Team
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useHead({
    title: 'About Vera Verde | Sustainable Agriculture & Clean Energy Solutions',
    meta: [
        { name: 'description', content: 'Learn about Vera Verde Limited - pioneering climate-smart agriculture, carbon sequestration, and ecofuel briquettes in Nigeria to combat climate change and empower farming communities.' },
        { property: 'og:title', content: 'About Vera Verde | Sustainable Agriculture & Clean Energy Solutions' },
        { property: 'og:description', content: 'Vera Verde is transforming African agriculture through sustainable solutions that reduce emissions, restore soil health, and create economic opportunities.' },
        { property: 'og:image', content: 'https://veraverde.com/social-about.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' }
    ]
})
</script>

<style scoped>
/* Smooth transitions for hover effects */
* {
    transition: all 0.3s ease;
}
</style>