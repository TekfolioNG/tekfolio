<template>
    <!-- CTA Section -->
    <section
        class="relative bg-gradient-to-br from-amber-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-12 md:py-16 overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5 dark:opacity-10">
            <div
                class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fe4135%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
            </div>
        </div>

        <!-- Floating Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#fe4135]/10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <div class="max-w-6xl mx-auto">
                <div class="flex flex-col lg:flex-row items-center">
                    <!-- Left Column: Text Content -->
                    <div class="w-full lg:w-3/5 order-2 lg:order-1">
                        <div class="max-w-2xl mx-auto lg:mx-0 lg:pr-8">
                            <!-- Badge -->
                            <div
                                class="inline-flex items-center px-4 py-2 bg-[#fe4135]/20 dark:bg-[#fe4135]/30 backdrop-blur-sm rounded-full text-[#fe4135] dark:text-red-400 text-sm font-medium mb-6">
                                <Icon name="lucide:zap" class="w-4 h-4 mr-2" />
                                Build Tomorrow Today
                            </div>

                            <!-- Heading -->
                            <h2
                                class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
                                Power Tomorrow
                                <span class="text-[#fe4135] dark:text-red-500">with Us</span>
                            </h2>

                            <!-- Description -->
                            <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                At Syntanium, we provide solutions that keep industries moving with safety, quality, and
                                sustainability at the core. From engineering and construction to long-term maintenance,
                                our expertise helps partners achieve lasting results.
                            </p>

                            <!-- CTA Text & Button -->
                            <p class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
                                Let's start building together.
                            </p>

                            <div class="flex justify-center lg:justify-start">
                                <NuxtLink to="/contact"
                                    class="group inline-flex items-center justify-center px-8 py-4 bg-[#fe4135] dark:bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-[#dc2626] dark:hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                    <Icon name="lucide:phone-call"
                                        class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                    Contact Us
                                    <Icon name="lucide:arrow-right"
                                        class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </NuxtLink>
                            </div>

                            <!-- Trust Indicators -->
                            <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <div
                                    class="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-700 dark:text-gray-300">
                                    <div class="flex items-center">
                                        <Icon name="lucide:shield-check"
                                            class="w-5 h-5 text-[#fe4135] dark:text-red-500 mr-2" />
                                        <span class="text-sm">Safety First</span>
                                    </div>
                                    <div class="flex items-center">
                                        <Icon name="lucide:award"
                                            class="w-5 h-5 text-[#fe4135] dark:text-red-500 mr-2" />
                                        <span class="text-sm">Quality Assured</span>
                                    </div>
                                    <div class="flex items-center">
                                        <Icon name="lucide:leaf"
                                            class="w-5 h-5 text-[#fe4135] dark:text-red-500 mr-2" />
                                        <span class="text-sm">Sustainable Solutions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Image -->
                    <div
                        class="w-full lg:w-2/5 relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
                        <div class="relative group max-w-xs lg:max-w-none">
                            <!-- Main Image -->
                            <div class="relative">
                                <img :src="imageSrc" alt="Syntanium Energy - Engineering Solutions"
                                    class="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-700" />
                            </div>

                            <!-- Floating Elements -->
                            <div
                                class="absolute -top-4 -right-4 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                <Icon name="lucide:zap" class="w-6 h-6 text-[#fe4135] dark:text-red-500" />
                            </div>

                            <div
                                class="absolute -bottom-4 -left-4 w-16 h-16 bg-[#fe4135]/90 dark:bg-red-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                <Icon name="lucide:hard-hat" class="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component props for customization
defineProps({
    title: {
        type: String,
        default: 'Power Tomorrow with Us'
    },
    description: {
        type: String,
        default: 'At Syntanium, we provide solutions that keep industries moving with safety, quality, and sustainability at the core. From engineering and construction to long-term maintenance, our expertise helps partners achieve lasting results.'
    },
    imageSrc: {
        type: String,
        default: '/assets/img/engineer2.png'
    },
    primaryButtonText: {
        type: String,
        default: 'Contact Us'
    },
    primaryButtonLink: {
        type: String,
        default: '/contact'
    }
})
</script>

<style scoped>
/* Custom animations */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease-in-out;
}
</style>