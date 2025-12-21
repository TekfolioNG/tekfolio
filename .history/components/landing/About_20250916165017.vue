<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <!-- Small accent line above heading -->
                <div class="w-16 h-0.5 bg-red-500 mx-auto mb-6"></div>

                <!-- Main heading with Barlow font -->
                <h2
                    class="text-2xl md:text-6xl lg:text-3xl font-barlow font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
                    OUR COMPANY
                </h2>

                <!-- Decorative elements -->
                <div class="flex items-center justify-center mb-12">
                    <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></div>
                    <div class="w-3 h-3 bg-red-500 rounded-full mx-4"></div>
                    <div class="w-20 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></div>
                </div>
            </div>

            <!-- Content Container -->
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <!-- Left Column - Content -->
                <div class="space-y-8">
                    <!-- Main content card -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-10 relative overflow-hidden">
                        <!-- Subtle background pattern -->
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -translate-y-8 translate-x-8">
                        </div>
                        <div
                            class="absolute bottom-0 left-0 w-24 h-24 bg-gray-900/5 dark:bg-white/5 rounded-full translate-y-4 -translate-x-4">
                        </div>

                        <!-- Content -->
                        <div class="relative z-10">
                            <p class="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                                Syntanium is an engineering and energy solutions company serving the oil and gas
                                industry across
                                <span class="text-red-500 font-medium">upstream, midstream, and downstream</span>
                                operations.
                            </p>

                            <p
                                class="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-light mt-6">
                                We focus on <span class="text-gray-900 dark:text-white font-semibold">safety, quality,
                                    and sustainability</span>,
                                delivering practical services that fuel reliable performance and long-term value for our
                                partners.
                            </p>
                        </div>
                    </div>

                    <!-- Key highlights -->
                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="text-center group">
                            <div
                                class="w-16 h-16 bg-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                    </path>
                                </svg>
                            </div>
                            <h3
                                class="text-sm font-barlow font-bold text-gray-900 dark:text-white tracking-wider uppercase">
                                Safety First</h3>
                        </div>

                        <div class="text-center group">
                            <div
                                class="w-16 h-16 bg-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                                    </path>
                                </svg>
                            </div>
                            <h3
                                class="text-sm font-barlow font-bold text-gray-900 dark:text-white tracking-wider uppercase">
                                Quality Focus</h3>
                        </div>

                        <div class="text-center group">
                            <div
                                class="w-16 h-16 bg-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                                </svg>
                            </div>
                            <h3
                                class="text-sm font-barlow font-bold text-gray-900 dark:text-white tracking-wider uppercase">
                                Sustainability</h3>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Visual Element -->
                <div class="relative">
                    <!-- Large accent shape -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-red-500/10 to-gray-900/10 dark:from-red-500/20 dark:to-white/10 rounded-3xl transform rotate-3">
                    </div>
                    <div
                        class="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                        <!-- Stats/Numbers -->
                        <div class="space-y-8">
                            <div class="text-center border-b border-gray-200 dark:border-gray-700 pb-6">
                                <div class="text-4xl md:text-5xl font-barlow font-black text-red-500 mb-2">360°</div>
                                <div
                                    class="text-sm font-barlow font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                                    Comprehensive Solutions</div>
                            </div>

                            <div class="text-center border-b border-gray-200 dark:border-gray-700 pb-6">
                                <div class="text-4xl md:text-5xl font-barlow font-black text-red-500 mb-2">24/7</div>
                                <div
                                    class="text-sm font-barlow font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                                    Reliable Support</div>
                            </div>

                            <div class="text-center">
                                <div class="text-4xl md:text-5xl font-barlow font-black text-red-500 mb-2">100%</div>
                                <div
                                    class="text-sm font-barlow font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                                    Quality Commitment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No additional script logic needed
</script>

<style scoped>
/* Import Barlow font */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600;700;800;900&display=swap');

/* Apply Barlow font family */
.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Custom letter spacing for large headings */
.tracking-tight {
    letter-spacing: -0.02em;
}

.tracking-widest {
    letter-spacing: 0.1em;
}

/* Subtle hover effects */
.group:hover .transform {
    transform: scale(1.1);
}
</style>