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
                                Collaborate
                            </span>
                        </div>
                    </div>

                    <!-- Right side - Main content -->
                    <div class="w-full lg:w-10/12 flex flex-col items-end translate-y-12">
                        <div class="text-right">
                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Let's Drive Real Climate Impact—Together
                            </h1>
                            <div class="w-20 h-0.5 bg-[#99cc33] ml-auto mb-8"></div>
                            <p class="text-lg text-gray-300 max-w-2xl ml-auto">
                                Partner with us to scale sustainable agriculture, clean energy, and carbon removal
                                across Africa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partner Content Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 max-w-4xl">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title">Partner With Us</h2>
                    <div class="w-20 h-1 bg-[#99cc33] mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        We're looking for partners who believe in practical, community-rooted climate action
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <!-- Lottie Animation -->
                    <div class="flex justify-center">
                        <ClientOnly>
                            <Vue3Lottie :animationData="partnerAnimation" :height="400" :width="400"
                                class="max-w-full" />
                        </ClientOnly>
                    </div>

                    <!-- Partner Text -->
                    <div>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            Whether you're an NGO, investor, researcher, or government agency, you can help us scale
                            sustainable solutions that benefit both people and the planet.
                        </p>
                        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                            Bring your resources. We'll bring the work. Let's build something that lasts.
                        </p>

                        <div class="space-y-4">
                            <div class="flex items-start">
                                <Icon name="heroicons:envelope"
                                    class="w-6 h-6 text-[#99cc33] mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 class="font-medium text-gray-900">Email us at:</h3>
                                    <p class="text-gray-600">info@veraverde.com</p>
                                    <p class="text-gray-600">veraverde.ng@gmail.com</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <Icon name="heroicons:phone" class="w-6 h-6 text-[#99cc33] mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 class="font-medium text-gray-900">Call or WhatsApp:</h3>
                                    <p class="text-gray-600">+234 803 427 2579</p>
                                </div>
                            </div>

                            <div class="flex items-start pt-4">
                                <Icon name="heroicons:arrow-right-circle"
                                    class="w-6 h-6 text-[#99cc33] mt-1 mr-3 flex-shrink-0" />
                                <NuxtLink to="/contact" class="group">
                                    <h3 class="font-medium text-gray-900 group-hover:text-[#99cc33] transition-colors">
                                        Or head to our <span class="underline">Contact Page</span> to reach out</h3>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Lottie animation
const partnerAnimation = ref({
    url: "https://lottie.host/cb0540f2-2ecb-4580-b9ca-3fd7dc244509/ZMmxInfHhI.lottie"
});

definePageMeta({
    layout: "landing"
});

useHead({
    title: 'Partner With Us - Vera Verde Limited',
    meta: [
        { name: 'description', content: 'Partner with Vera Verde to scale sustainable agriculture, clean energy, and carbon removal solutions across Africa.' }
    ]
});
</script>

<style scoped>
.section-title {
    font-family: 'Barlow Condensed', sans-serif;
}
</style>