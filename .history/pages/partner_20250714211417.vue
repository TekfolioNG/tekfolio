<template>
    <div>
        <!-- Hero Section -->
        <section class="relative h-[80vh] overflow-hidden">
            <!-- Background image with overlay -->
            <div class="absolute inset-0 bg-gray-900">
                <img src="~/assets/img/climate-smart-agric5.jpg" alt="Partner With Us"
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
                                Partnership
                            </span>
                        </div>
                    </div>

                    <!-- Right side - Main content -->
                    <div class="w-full lg:w-10/12 flex flex-col items-center lg:items-end translate-y-12">
                        <div class="text-center lg:text-right">
                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Partner With Us
                            </h1>
                            <div class="w-20 h-0.5 bg-[#99cc33] mx-auto lg:ml-auto mb-8"></div>
                            <p class="text-lg text-gray-300 max-w-2xl mx-auto lg:ml-auto">
                                Let's Drive Real Climate Impact—Together
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Content Section -->
        <section class="py-12 md:py-20 bg-white">
            <div class="container mx-auto px-6 max-w-5xl">
                <div class="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div class="order-2 lg:order-1">
                        <h2
                            class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 section-title text-center lg:text-left">
                            Building Climate Solutions That Last
                        </h2>
                        <div class="w-20 h-1 bg-[#99cc33] mb-4 md:mb-6 mx-auto lg:mx-0"></div>

                        <p class="text-base md:text-lg text-gray-700 mb-6 leading-relaxed text-center lg:text-left">
                            We're looking for partners who believe in practical, community-rooted climate action.
                            Whether you're an NGO, investor, researcher, or government agency, you can help us scale
                            sustainable agriculture, clean energy, and carbon removal across Africa.
                        </p>

                        <div class="bg-[#e8f5e9] p-4 md:p-6 rounded-2xl mb-6 md:mb-8">
                            <p class="text-lg md:text-xl font-semibold text-[#2d420c] mb-2 text-center lg:text-left">
                                Bring your resources. We'll bring the work.
                            </p>
                            <p class="text-base md:text-lg text-gray-700 text-center lg:text-left">
                                Let's build something that lasts.
                            </p>
                        </div>

                        <!-- Contact Information -->
                        <div class="space-y-4">
                            <div class="flex items-start flex-col sm:flex-row sm:items-center text-center sm:text-left">
                                <Icon name="heroicons:envelope"
                                    class="w-6 h-6 text-[#2d420c] mt-0.5 mr-0 sm:mr-3 flex-shrink-0 mx-auto sm:mx-0 mb-2 sm:mb-0" />
                                <div>
                                    <p class="text-sm md:text-base text-gray-700">
                                        <span class="font-semibold">Email us at:</span>
                                        <br class="sm:hidden">
                                        <a href="mailto:info@veraverde.com"
                                            class="text-[#2d420c] hover:underline ml-0 sm:ml-1 break-all">info@veraverde.com</a>
                                        or
                                        <a href="mailto:veraverde.ng@gmail.com"
                                            class="text-[#2d420c] hover:underline ml-0 sm:ml-1 break-all">veraverde.ng@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start flex-col sm:flex-row sm:items-center text-center sm:text-left">
                                <Icon name="heroicons:phone"
                                    class="w-6 h-6 text-[#2d420c] mt-0.5 mr-0 sm:mr-3 flex-shrink-0 mx-auto sm:mx-0 mb-2 sm:mb-0" />
                                <div>
                                    <p class="text-sm md:text-base text-gray-700">
                                        <span class="font-semibold">Call or WhatsApp:</span>
                                        <br class="sm:hidden">
                                        <a href="tel:+2348034272579"
                                            class="text-[#2d420c] hover:underline ml-0 sm:ml-1">+234
                                            803 427 2579</a>
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start flex-col sm:flex-row sm:items-center text-center sm:text-left">
                                <Icon name="heroicons:chat-bubble-left-right"
                                    class="w-6 h-6 text-[#2d420c] mt-0.5 mr-0 sm:mr-3 flex-shrink-0 mx-auto sm:mx-0 mb-2 sm:mb-0" />
                                <div>
                                    <p class="text-sm md:text-base text-gray-700">
                                        <span class="font-semibold">Or</span>
                                        <NuxtLink to="/contact"
                                            class="text-[#2d420c] hover:underline ml-0 sm:ml-1 font-medium">
                                            head to our Contact Page to reach out
                                        </NuxtLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lottie Animation Section -->
                    <div class="flex justify-center items-center order-1 lg:order-2">
                        <div class="w-full max-w-xs sm:max-w-sm md:max-w-md">
                            <DotLottieVue :style="{
                                height: '280px',
                                width: '280px',
                                maxWidth: '100%',
                                maxHeight: '100%'
                            }" class="w-full h-auto mx-auto sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
                                autoplay loop
                                src="https://lottie.host/1d4424d6-c6ee-4ff6-88c1-e6594cccb771/jxRhKPO3ge.lottie" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partnership Opportunities Section -->
        <section class="py-12 md:py-20 bg-gray-50">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="text-center mb-12 md:mb-16">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 section-title">Partnership
                        Opportunities</h2>
                    <div class="w-20 h-1 bg-[#99cc33] mx-auto mb-6"></div>
                    <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Multiple ways to collaborate on climate solutions across Africa
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <!-- NGOs -->
                    <div
                        class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 card-hover text-center">
                        <div class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <Icon name="heroicons:user-group" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-4">NGOs</h3>
                        <p class="text-sm md:text-base text-gray-700">
                            Community outreach and implementation partnerships
                        </p>
                    </div>

                    <!-- Investors -->
                    <div
                        class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 card-hover text-center">
                        <div class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <Icon name="heroicons:currency-dollar" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-4">Investors</h3>
                        <p class="text-sm md:text-base text-gray-700">
                            Funding sustainable and scalable climate solutions
                        </p>
                    </div>

                    <!-- Researchers -->
                    <div
                        class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 card-hover text-center">
                        <div class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <Icon name="heroicons:beaker" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-4">Researchers</h3>
                        <p class="text-sm md:text-base text-gray-700">
                            Innovation and development of climate technologies
                        </p>
                    </div>

                    <!-- Government Agencies -->
                    <div
                        class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 card-hover text-center">
                        <div class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <Icon name="heroicons:building-office" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-4">Government</h3>
                        <p class="text-sm md:text-base text-gray-700">
                            Policy support and large-scale implementation
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="py-12 md:py-20 bg-gradient-to-br from-[#2d420c] to-[#406112]">
            <div class="container mx-auto px-6 max-w-4xl text-center">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 section-title">
                    Ready to Make a Difference?
                </h2>
                <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join us in scaling climate solutions that benefit communities, agriculture, and the planet.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="mailto:veraverde.ng@gmail.com"
                        class="bg-[#99cc33] text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-[#7aa028] transition-colors">
                        Email Us Now
                    </a>
                    <NuxtLink to="/contact"
                        class="bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
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
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
</style>