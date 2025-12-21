<template>
    <!-- CTA Section -->
    <section
        class="relative bg-gradient-to-br from-amber-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24 overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5 dark:opacity-10">
            <div
                class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23006688%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
            </div>
        </div>

        <!-- Floating Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div
                class="absolute -top-24 -right-24 w-96 h-96 bg-[#006688]/10 dark:bg-[#006688]/20 rounded-full blur-3xl">
            </div>
            <div
                class="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-200/10 dark:bg-amber-400/20 rounded-full blur-3xl">
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
                <!-- Left Column: Text Content (3/5 space) -->
                <div class="col-span-5 lg:col-span-3 text-center lg:text-left order-2 lg:order-1">
                    <div class="max-w-2xl mx-auto lg:mx-0">
                        <!-- Badge -->
                        <div
                            class="inline-flex items-center px-4 py-2 bg-[#006688]/20 backdrop-blur-sm rounded-full text-[#006688] text-sm font-medium mb-6">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            Elevate Your Business
                        </div>

                        <!-- Heading -->
                        <h2
                            class="text-3xl md:text-4xl lg:text-5xl font-barlow-extrabold text-gray-900 mb-6 leading-tight">
                            Build Stronger,
                            <span class="text-[#006688]">Impact-Driven</span>
                            Enterprises
                        </h2>

                        <!-- Description -->
                        <p class="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                            We help build stronger, impact-driven enterprises across Africa's private sector. Let's
                            design the next chapter of your business success — together.
                        </p>

                        <!-- CTA Button -->
                        <div class="flex justify-center lg:justify-start">
                            <NuxtLink to="/contact"
                                class="group inline-flex items-center justify-center px-8 py-4 bg-[#006688] text-white font-semibold rounded-lg shadow-lg hover:bg-[#004466] transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                    </path>
                                </svg>
                                Let's Talk
                                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </NuxtLink>
                        </div>

                        <!-- Trust Indicators -->
                        <div class="mt-12 pt-8 border-t border-gray-200">
                            <div
                                class="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-700">
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-[#006688] mr-2" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                        </path>
                                    </svg>
                                    <span class="text-sm font-medium">Proven Results</span>
                                </div>
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-[#006688] mr-2" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                    <span class="text-sm font-medium">Strategic Growth</span>
                                </div>
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-[#006688] mr-2" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                        </path>
                                    </svg>
                                    <span class="text-sm font-medium">African Expertise</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Image (2/5 space) -->
                <div class="col-span-5 lg:col-span-2 relative flex justify-center lg:justify-end order-1 lg:order-2">
                    <div class="relative group w-full max-w-md lg:max-w-full">
                        <!-- Main Image -->
                        <img src="/assets/img/cta-elevation.png"
                            alt="Elevation Consulting - Business Growth Partnership"
                            class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 rounded-2xl shadow-2xl" />

                        <!-- Floating Elements -->
                        <div
                            class="absolute -top-4 -right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <svg class="w-6 h-6 text-[#006688]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>

                        <div
                            class="absolute -bottom-4 -left-4 w-16 h-16 bg-[#006688]/90 rounded-full flex items-center justify-center shadow-lg animate-pulse">
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

/* Mobile responsive adjustments */
@media (max-width: 768px) {
    .py-16 {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    .text-3xl {
        font-size: 2rem;
    }

    .text-4xl {
        font-size: 2.25rem;
    }
}

@media (max-width: 640px) {
    .py-16 {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
    }

    .gap-8 {
        gap: 2rem;
    }

    .px-8 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .py-4 {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
}
</style>