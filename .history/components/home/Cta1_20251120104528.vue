<template>
    <!-- CTA Section -->
    <section class="relative bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24 overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
            <div
                class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234D7EFF%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
            </div>
        </div>

        <!-- Floating Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#4D7EFF]/10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <div class="max-w-7xl mx-auto">
                <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <!-- Left Column: Text Content -->
                    <div class="lg:col-span-7 text-center lg:text-left">
                        <div class="max-w-2xl mx-auto lg:mx-0">
                            <!-- Badge -->
                            <div
                                class="inline-flex items-center px-4 py-2 bg-[#4D7EFF]/20 backdrop-blur-sm rounded-full text-[#4D7EFF] text-sm font-semibold mb-6 uppercase tracking-wide border border-[#4D7EFF]/30">
                                Our Writing Approach
                            </div>

                            <!-- Heading -->
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                <span class="text-[#4D7EFF]">Collaborative</span> & Confidential
                            </h2>

                            <!-- Writing Approach Description -->
                            <div class="mb-8">
                                <p class="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed">
                                    Our process is <span class="font-semibold text-[#4D7EFF]">collaborative,
                                        confidential, and deeply personalized</span>.
                                    We take time to understand your thinking, your tone, and the impact you want your
                                    words to make.
                                </p>
                                <p class="text-lg md:text-xl text-gray-800 leading-relaxed">
                                    Through structured conversations, drafts, and refinements, we ensure the finished
                                    work reads like <span class="font-semibold text-[#4D7EFF]">you</span>—clear,
                                    confident, and compelling.
                                </p>
                            </div>

                            <!-- Process Highlights -->
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <div
                                    class="flex flex-col items-center lg:items-start text-center lg:text-left p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                                    <div
                                        class="w-12 h-12 bg-[#4D7EFF]/10 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-6 h-6 text-[#4D7EFF]" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                    </div>
                                    <h3 class="font-semibold text-gray-900 mb-1">Structured Conversations</h3>
                                    <p class="text-sm text-gray-600">Deep dive into your ideas and goals</p>
                                </div>

                                <div
                                    class="flex flex-col items-center lg:items-start text-center lg:text-left p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                                    <div
                                        class="w-12 h-12 bg-[#4D7EFF]/10 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-6 h-6 text-[#4D7EFF]" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </div>
                                    <h3 class="font-semibold text-gray-900 mb-1">Iterative Refinements</h3>
                                    <p class="text-sm text-gray-600">Multiple drafts until it's perfect</p>
                                </div>

                                <div
                                    class="flex flex-col items-center lg:items-start text-center lg:text-left p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                                    <div
                                        class="w-12 h-12 bg-[#4D7EFF]/10 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-6 h-6 text-[#4D7EFF]" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 class="font-semibold text-gray-900 mb-1">100% Confidential</h3>
                                    <p class="text-sm text-gray-600">Your ideas and stories are safe with us</p>
                                </div>
                            </div>

                            <!-- CTA Button -->
                            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <NuxtLink to="/contact"
                                    class="group inline-flex items-center justify-center px-8 py-4 bg-[#4D7EFF] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3D6EEF] transition-all duration-300 hover:scale-105 hover:shadow-xl uppercase tracking-wide">
                                    Start Your Project
                                    <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </NuxtLink>

                                <NuxtLink to="/process"
                                    class="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#4D7EFF] text-[#4D7EFF] font-semibold rounded-lg hover:bg-[#4D7EFF] hover:text-white transition-all duration-300">
                                    Learn Our Process
                                </NuxtLink>
                            </div>

                            <!-- Trust Indicators -->
                            <div class="mt-8 pt-8 border-t border-gray-200/50">
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

                    <!-- Right Column: Image -->
                    <div class="lg:col-span-5 relative flex justify-center">
                        <div class="relative group w-full max-w-md">
                            <!-- Main Image Container -->
                            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
                                <!-- Gradient Overlay -->
                                <div class="absolute inset-0 bg-gradient-to-br from-[#4D7EFF]/10 to-transparent z-10">
                                </div>

                                <!-- Main Image -->
                                <img src="~/assets/img/Cta1-literaforge.png"
                                    alt="LiteraForge - Collaborative Writing Process"
                                    class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy" decoding="async" />

                                <!-- Hover Overlay -->
                                <div
                                    class="absolute inset-0 bg-[#4D7EFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                                </div>
                            </div>

                            <!-- Floating Elements -->
                            <div
                                class="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float z-30">
                                <svg class="w-6 h-6 text-[#4D7EFF]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>

                            <div
                                class="absolute -bottom-4 -left-4 w-16 h-16 bg-[#4D7EFF] rounded-full flex items-center justify-center shadow-lg animate-pulse z-30">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                                    </path>
                                </svg>
                            </div>

                            <!-- Testimonial Card -->
                            <div
                                class="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 max-w-xs z-30 border border-gray-100">
                                <div class="flex items-center mb-2">
                                    <div
                                        class="w-8 h-8 bg-[#4D7EFF]/10 rounded-full flex items-center justify-center mr-3">
                                        <svg class="w-4 h-4 text-[#4D7EFF]" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="text-sm font-semibold text-gray-900">"They captured my voice
                                            perfectly"</p>
                                        <p class="text-xs text-gray-500">— Published Author</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic here if needed
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

/* Smooth transitions for all elements */
* {
    transition: all 0.3s ease-in-out;
}

/* Enhanced focus styles for accessibility */
button:focus,
a:focus {
    outline: 2px solid #4D7EFF;
    outline-offset: 2px;
    border-radius: 8px;
}

/* Improved image rendering */
img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

/* Responsive text sizing */
@media (max-width: 640px) {
    .text-3xl {
        font-size: 1.75rem;
    }

    .text-lg {
        font-size: 1rem;
    }
}
</style>