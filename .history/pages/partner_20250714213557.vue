<template>
    <div>
        <!-- Hero Section -->
        <section class="relative h-[70vh] sm:h-[80vh] overflow-hidden">
            <!-- Background image with overlay -->
            <div class="absolute inset-0 bg-gray-900">
                <img src="~/assets/img/climate-smart-agric5.jpg" alt="Partner With Us"
                    class="w-full h-full object-cover opacity-80" />
                <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 container mx-auto h-full flex items-center px-4 sm:px-6">
                <div class="w-full flex flex-col lg:flex-row items-center justify-between">
                    <!-- Left side - Simple pipe and section title (hidden on mobile) -->
                    <div class="hidden lg:block w-1/12">
                        <div class="flex items-start h-full pt-2">
                            <div class="w-1 h-24 bg-[#99cc33]"></div>
                            <span
                                class="text-white text-lg font-medium ml-4 -rotate-90 origin-left whitespace-nowrap translate-y-18">
                                Partnership
                            </span>
                        </div>
                    </div>

                    <!-- Right side - Main content -->
                    <div
                        class="w-full lg:w-10/12 flex flex-col items-center lg:items-end translate-y-8 lg:translate-y-12 text-center lg:text-right">
                        <h1
                            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            Partner With Us
                        </h1>
                        <div class="w-16 sm:w-20 h-0.5 bg-[#99cc33] mx-auto lg:ml-auto mb-4 sm:mb-8"></div>
                        <p class="text-base sm:text-lg text-gray-300 max-w-md sm:max-w-2xl mx-auto">
                            Let's Drive Real Climate Impact—Together
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Content Section -->
        <section class="py-12 sm:py-20 bg-white">
            <div class="container mx-auto px-4 sm:px-6 max-w-5xl">
                <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <!-- Text Content -->
                    <div class="mt-8 lg:mt-0">
                        <h2
                            class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 section-title text-center lg:text-left">
                            Building Climate Solutions That Last
                        </h2>
                        <div class="w-16 sm:w-20 h-1 bg-[#99cc33] mb-4 sm:mb-6 mx-auto lg:mx-0"></div>

                        <p class="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                            We're looking for partners who believe in practical, community-rooted climate action.
                            Whether you're an NGO, investor, researcher, or government agency, you can help us scale
                            sustainable agriculture, clean energy, and carbon removal across Africa.
                        </p>

                        <div class="bg-[#e8f5e9] p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
                            <p class="text-lg sm:text-xl font-semibold text-[#2d420c] mb-1 sm:mb-2">
                                Bring your resources. We'll bring the work.
                            </p>
                            <p class="text-base sm:text-lg text-gray-700">
                                Let's build something that lasts.
                            </p>
                        </div>

                        <!-- Contact Information - Enhanced Green Colors -->
                        <div class="space-y-3 sm:space-y-4">
                            <div class="flex items-start">
                                <Icon name="heroicons:envelope"
                                    class="w-5 h-5 sm:w-6 sm:h-6 text-[#2e7d32] mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                                <div>
                                    <p class="text-sm sm:text-base text-gray-700">
                                        <span class="font-semibold">Email us at:</span>
                                        <a href="mailto:info@veraverde.com"
                                            class="text-[#2e7d32] hover:underline font-medium ml-1 block sm:inline">info@veraverde.com</a>
                                        <span class="hidden sm:inline"> or </span>
                                        <a href="mailto:veraverde.ng@gmail.com"
                                            class="text-[#2e7d32] hover:underline font-medium sm:ml-1 block sm:inline">veraverde.ng@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <Icon name="heroicons:phone"
                                    class="w-5 h-5 sm:w-6 sm:h-6 text-[#2e7d32] mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                                <div>
                                    <p class="text-sm sm:text-base text-gray-700">
                                        <span class="font-semibold">Call or WhatsApp:</span>
                                        <a href="tel:+2348034272579"
                                            class="text-[#2e7d32] hover:underline font-medium ml-1">+234
                                            803 427 2579</a>
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start pt-2 sm:pt-0">
                                <Icon name="heroicons:chat-bubble-left-right"
                                    class="w-5 h-5 sm:w-6 sm:h-6 text-[#2e7d32] mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                                <div>
                                    <p class="text-sm sm:text-base text-gray-700">
                                        <span class="font-semibold">Or</span>
                                        <NuxtLink to="/contact" class="text-[#2e7d32] hover:underline font-medium ml-1">
                                            head to our Contact Page to reach out
                                        </NuxtLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lottie Animation Section - Original Sizes Preserved -->
                    <div class="flex justify-center items-center">
                        <div class="w-full">
                            <ClientOnly>
                                <!-- Mobile: 300px, md: 400px, lg: 500px -->
                                <DotLottieVue class="mx-auto" :style="{
                                    height: '300px',
                                    width: '300px',
                                    '@md': { height: '400px', width: '400px' },
                                    '@lg': { height: '500px', width: '500px' }
                                }" autoplay loop
                                    src="https://lottie.host/1d4424d6-c6ee-4ff6-88c1-e6594cccb771/jxRhKPO3ge.lottie" />
                            </ClientOnly>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partnership Opportunities Section -->
        <section class="py-12 sm:py-20 bg-gray-50">
            <div class="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div class="text-center mb-12 sm:mb-16">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 section-title">
                        Partnership Opportunities</h2>
                    <div class="w-16 sm:w-20 h-1 bg-[#99cc33] mx-auto mb-4 sm:mb-6"></div>
                    <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Multiple ways to collaborate on climate solutions across Africa
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    <!-- NGOs -->
                    <div
                        class="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 card-hover text-center">
                        <div
                            class="w-12 h-12 sm:w-16 sm:h-16 bg-[#e8f5e9] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                            <Icon name="heroicons:user-group" class="w-6 h-6 sm:w-8 sm:h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">NGOs</h3>
                        <p class="text-sm sm:text-base text-gray-700">
                            Community outreach and implementation partnerships
                        </p>
                    </div>

                    <!-- Investors -->
                    <div
                        class="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 card-hover text-center">
                        <div
                            class="w-12 h-12 sm:w-16 sm:h-16 bg-[#e8f5e9] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                            <Icon name="heroicons:currency-dollar" class="w-6 h-6 sm:w-8 sm:h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">Investors</h3>
                        <p class="text-sm sm:text-base text-gray-700">
                            Funding sustainable and scalable climate solutions
                        </p>
                    </div>

                    <!-- Researchers -->
                    <div
                        class="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 card-hover text-center">
                        <div
                            class="w-12 h-12 sm:w-16 sm:h-16 bg-[#e8f5e9] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                            <Icon name="heroicons:beaker" class="w-6 h-6 sm:w-8 sm:h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">Researchers</h3>
                        <p class="text-sm sm:text-base text-gray-700">
                            Innovation and development of climate technologies
                        </p>
                    </div>

                    <!-- Government Agencies -->
                    <div
                        class="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 card-hover text-center">
                        <div
                            class="w-12 h-12 sm:w-16 sm:h-16 bg-[#e8f5e9] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                            <Icon name="heroicons:building-office" class="w-6 h-6 sm:w-8 sm:h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">Government</h3>
                        <p class="text-sm sm:text-base text-gray-700">
                            Policy support and large-scale implementation
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="py-12 sm:py-20 bg-gradient-to-br from-[#2d420c] to-[#406112]">
            <div class="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 section-title">
                    Ready to Make a Difference?
                </h2>
                <p class="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Join us in scaling climate solutions that benefit communities, agriculture, and the planet.
                </p>
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a href="mailto:veraverde.ng@gmail.com"
                        class="bg-[#99cc33] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-[#7aa028] transition-colors text-sm sm:text-base">
                        Email Us Now
                    </a>
                    <NuxtLink to="/contact"
                        class="bg-white/10 backdrop-blur-sm text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 text-sm sm:text-base">
                        Contact Page
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

definePageMeta({
    layout: "landing"
});

useHead({
    title: 'Partner With Us - Drive Real Climate Impact Together | Vera Verde Limited',
    meta: [
        { name: 'description', content: 'Partner with Vera Verde to scale sustainable agriculture, clean energy, and carbon removal across Africa. We welcome NGOs, investors, researchers, and government agencies.' }
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
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 640px) {
    .card-hover:hover {
        transform: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
}

/* Custom breakpoints for Lottie animation */
@media (min-width: 768px) {
    .lottie-container {
        height: 500px;
        width: 500px;
    }
}

@media (min-width: 1024px) {
    .lottie-container {
        height: 500px;
        width: 500px;
    }
}
</style>