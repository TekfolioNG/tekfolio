<template>
    <!-- CTA Section -->
    <section class="relative bg-gradient-to-br from-gray-50 to-blue-50 py-12 md:py-16 overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
            <div
                class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230077AA%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
            </div>
        </div>

        <!-- Floating Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#0077AA]/10 rounded-full blur-3xl">
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
                                class="inline-flex items-center px-4 py-2 bg-[#0077AA]/20 backdrop-blur-sm rounded-full text-[#0077AA] text-sm font-barlow-extrabold mb-6 uppercase">
                                Partner With Us
                            </div>

                            <!-- Heading -->
                            <h2
                                class="text-3xl md:text-4xl lg:text-5xl font-barlow-extrabold text-gray-900 mb-6 leading-tight">
                                Partnering for Growth
                                <span class="text-[#0077AA]">That Lasts</span>
                            </h2>

                            <!-- Description -->
                            <p class="text-lg md:text-xl text-gray-900 mb-8 leading-relaxed">
                                We collaborate with entrepreneurs and institutions to design and deliver practical
                                solutions that build resilience, unlock capital, and create measurable results. Let's
                                design the next chapter of your business success — together.
                            </p>

                            <div class="flex justify-center lg:justify-start">
                                <NuxtLink to="/contact"
                                    class="group inline-flex items-center justify-center px-8 py-4 bg-[#0077AA] text-white font-barlow-extrabold rounded-lg shadow-lg hover:bg-[#005580] transition-all duration-300 hover:scale-105 hover:shadow-xl uppercase">
                                    Let's Talk
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
                                        <svg class="w-5 h-5 text-[#0077AA] mr-2" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span class="text-sm font-medium">Proven Results</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg class="w-5 h-5 text-[#0077AA] mr-2" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                        <span class="text-sm font-medium">Impact Driven</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg class="w-5 h-5 text-[#0077AA] mr-2" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                        <span class="text-sm font-medium">Africa Focused</span>
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
                                <img src="/assets/img/cta-literaforge.png" alt="Elevation Consulting - Business Success"
                                    class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-[#0077AA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                </div>
                            </div>

                            <!-- Floating Elements -->
                            <div
                                class="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                <svg class="w-6 h-6 text-[#0077AA]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>

                            <div
                                class="absolute -bottom-4 -left-4 w-16 h-16 bg-[#0077AA] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
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
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

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