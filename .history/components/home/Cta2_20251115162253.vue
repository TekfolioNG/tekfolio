<template>
    <!-- CTA Section -->
    <section class="relative bg-gradient-to-br from-gray-50 to-blue-50 py-12 md:py-16 overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
            <div
                class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234D7EFF%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
            </div>
        </div>

        <!-- Floating Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#4D7EFF]/10 rounded-full blur-3xl">
            </div>
            <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl">
            </div>
        </div>

        <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <div class="max-w-6xl mx-auto">
                <div class="grid lg:grid-cols-5 gap-8 items-center">
                    <!-- Left Column: Text Content (3/5 space) -->
                    <div class="col-span-5 lg:col-span-3 text-center lg:text-left order-2 lg:order-1">
                        <div class="max-w-2xl mx-auto lg:mx-0">
                            <!-- Badge -->
                            <div
                                class="inline-flex items-center px-4 py-2 bg-[#4D7EFF]/20 backdrop-blur-sm rounded-full text-[#4D7EFF] text-sm font-semibold mb-6 uppercase tracking-wide">
                                Take Action Today
                            </div>

                            <!-- Heading -->
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Ready to <span class="text-[#4D7EFF]">Move Forward?</span>
                            </h2>

                            <!-- Description -->
                            <p class="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
                                A clarity session is your starting point for transformation. Whether you're refining a
                                business idea, preparing to publish, or seeking strategic direction, we'll help you gain
                                insight, define next steps, and move forward with confidence.
                            </p>

                            <div class="flex justify-center lg:justify-start">
                                <NuxtLink to="/contact"
                                    class="group inline-flex items-center justify-center px-8 py-4 bg-[#4D7EFF] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3D6EEF] transition-all duration-300 hover:scale-105 hover:shadow-xl uppercase tracking-wide">
                                    Book a Clarity Session
                                    <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </NuxtLink>
                            </div>

                            <!-- Trust Indicators -->
                            <div class="mt-8 pt-6 border-t border-gray-200">
                                <div
                                    class="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-700">
                                    <div class="flex items-center">
                                        <svg class="w-5 h-5 text-[#4D7EFF] mr-2" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span class="text-sm font-medium">Proven Results</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg class="w-5 h-5 text-[#4D7EFF] mr-2" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                        <span class="text-sm font-medium">Transformative Impact</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg class="w-5 h-5 text-[#4D7EFF] mr-2" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                            </path>
                                        </svg>
                                        <span class="text-sm font-medium">Personalized Approach</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Image (2/5 space) -->
                    <div
                        class="col-span-5 lg:col-span-2 relative flex justify-center lg:justify-end order-1 lg:order-2">
                        <div class="relative group w-full max-w-md lg:max-w-full">
                            <!-- Main Image -->
                            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
                                <img src="~/assets/img/CTA-literaforge.avif" alt="LiteraForge - Clarity Session"
                                    class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-[#4D7EFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                </div>
                            </div>

                            <!-- Floating Elements -->
                            <div
                                class="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                <svg class="w-6 h-6 text-[#4D7EFF]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>

                            <div
                                class="absolute -bottom-4 -left-4 w-16 h-16 bg-[#4D7EFF] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic here
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