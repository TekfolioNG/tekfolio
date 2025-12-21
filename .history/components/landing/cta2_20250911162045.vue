<template>
    <!-- CTA Section -->
    <section class="relative bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16 overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
            <div
                class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fe4135%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
            </div>
        </div>

        <!-- Floating Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-16 -right-16 w-72 h-72 bg-[#fe4135]/10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-16 -left-16 w-72 h-72 bg-gray-300/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <div class="max-w-6xl mx-auto">
                <div class="grid lg:grid-cols-3 gap-8 items-center">
                    <!-- Left Column: Image (1/3) -->
                    <div class="lg:col-span-1 relative flex justify-center">
                        <div class="relative group max-w-xs">
                            <!-- Main Image -->
                            <div class="relative">
                                <img src="/assets/img/cta.png" alt="Syntanium Energy Solutions"
                                    class="w-full h-auto rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300" />
                            </div>

                            <!-- Floating Elements -->
                            <div
                                class="absolute -top-4 -right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                <Icon name="lucide:settings" class="w-5 h-5 text-[#fe4135]" />
                            </div>

                            <div
                                class="absolute -bottom-4 -left-4 w-12 h-12 bg-[#fe4135]/90 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                <Icon name="lucide:shield-check" class="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Content (2/3) -->
                    <div class="lg:col-span-2 text-center lg:text-left">
                        <!-- Badge -->
                        <div
                            class="inline-flex items-center px-4 py-2 bg-[#fe4135]/20 backdrop-blur-sm rounded-full text-[#fe4135] text-sm font-medium mb-4">
                            <Icon name="lucide:sparkles" class="w-4 h-4 mr-2" />
                            Industry Expertise
                        </div>

                        <!-- Heading -->
                        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            Innovative Engineering Solutions for the
                            <span class="text-[#fe4135]">Energy Sector</span>
                        </h2>

                        <!-- Description -->
                        <p class="text-gray-700 mb-6 leading-relaxed">
                            Syntanium Energy delivers cutting-edge engineering, construction, and maintenance solutions
                            with uncompromising commitment to safety, quality, and environmental responsibility.
                        </p>

                        <!-- Feature List -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            <div class="flex items-center">
                                <div class="bg-[#fe4135] rounded-full p-1 mr-2">
                                    <Icon name="lucide:check-circle" class="w-4 h-4 text-white" />
                                </div>
                                <span class="text-gray-800 text-sm">Expert Engineering</span>
                            </div>
                            <div class="flex items-center">
                                <div class="bg-[#fe4135] rounded-full p-1 mr-2">
                                    <Icon name="lucide:check-circle" class="w-4 h-4 text-white" />
                                </div>
                                <span class="text-gray-800 text-sm">Quality Construction</span>
                            </div>
                            <div class="flex items-center">
                                <div class="bg-[#fe4135] rounded-full p-1 mr-2">
                                    <Icon name="lucide:check-circle" class="w-4 h-4 text-white" />
                                </div>
                                <span class="text-gray-800 text-sm">Preventive Maintenance</span>
                            </div>
                            <div class="flex items-center">
                                <div class="bg-[#fe4135] rounded-full p-1 mr-2">
                                    <Icon name="lucide:check-circle" class="w-4 h-4 text-white" />
                                </div>
                                <span class="text-gray-800 text-sm">24/7 Support</span>
                            </div>
                        </div>

                        <!-- CTA Buttons -->
                        <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <NuxtLink to="/contact"
                                class="group inline-flex items-center justify-center px-6 py-3 bg-[#fe4135] text-white font-semibold rounded-lg shadow-md hover:bg-[#dc2626] transition-all duration-300 hover:scale-105">
                                <Icon name="lucide:phone"
                                    class="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                Contact Us Today
                                <Icon name="lucide:arrow-right"
                                    class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </NuxtLink>

                            <NuxtLink to="/solutions"
                                class="group inline-flex items-center justify-center px-6 py-3 bg-transparent border border-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                                <Icon name="lucide:settings"
                                    class="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                                Explore Solutions
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
/* Custom animations */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-8px);
    }
}

.animate-bounce {
    animation: float 3s ease-in-out infinite;
}

/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease-in-out;
}
</style>