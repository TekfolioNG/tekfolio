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
                <div class="flex flex-col lg:flex-row gap-8 items-center">
                    <!-- Left Column: Image (1/3) -->
                    <div class="lg:w-1/3 relative flex justify-center lg:justify-start">
                        <div class="relative group max-w-xs">
                            <!-- Main Image -->
                            <div class="relative">
                                <img src="/assets/img/engineer2.png" alt="Syntanium Energy Solutions"
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
                    <div class="lg:w-2/3 text-center lg:text-left">
                        <!-- Heading -->
                        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            Power Tomorrow with Us
                        </h2>

                        <!-- Description -->
                        <p class="text-gray-700 mb-6 leading-relaxed">
                            At Syntanium, we provide solutions that keep industries moving with safety, quality, and
                            sustainability at the core. From engineering and construction to long-term maintenance, our
                            expertise helps partners achieve lasting results.
                        </p>

                        <!-- CTA Button -->
                        <div class="flex justify-center lg:justify-start">
                            <NuxtLink to="/contact"
                                class="group inline-flex items-center justify-center px-8 py-3 bg-[#fe4135] text-white font-semibold rounded-lg shadow-md hover:bg-[#dc2626] transition-all duration-300 hover:scale-105">
                                <span>Let's start building together.</span>
                                <Icon name="lucide:arrow-right"
                                    class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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