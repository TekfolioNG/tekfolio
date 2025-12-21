<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-900 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <!-- Small accent line above heading -->
                <div class="w-16 h-0.5 bg-red-500 mx-auto mb-6" data-aos="fade-right" data-aos-duration="800"></div>

                <!-- Main heading with Barlow font -->
                <h2 class="text-5xl md:text-6xl lg:text-4xl font-barlow font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight"
                    data-aos="fade-up" data-aos-duration="800">
                    OUR COMPANY
                </h2>

                <!-- Decorative elements -->
                <div class="flex items-center justify-center mb-12" data-aos="fade-left" data-aos-duration="800">
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
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-10 relative overflow-hidden"
                        data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
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

                    <!-- Key highlights (removed as requested) -->
                </div>

                <!-- Right Column - Text "Our company is too large" -->
                <div class="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                    <!-- Large accent shape -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-red-500/10 to-gray-900/10 dark:from-red-500/20 dark:to-white/10 rounded-3xl transform rotate-3">
                    </div>
                    <div
                        class="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 transform -rotate-2 transition-all duration-700 hover:rotate-0 hover:shadow-xl">
                        <!-- "Our company is too large" text -->
                        <div class="text-center">
                            <div class="text-4xl md:text-5xl font-barlow font-black text-red-500 mb-6 leading-tight">
                                Our company is too large
                            </div>
                            <p class="text-lg text-gray-600 dark:text-gray-400 font-light">
                                With extensive resources and capabilities, we deliver comprehensive solutions across the
                                energy sector.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // Only initialize AOS if running on client side
    if (typeof window !== 'undefined') {
        import('aos/dist/aos.css').then(() => {
            import('aos').then((AOS) => {
                AOS.init({
                    duration: 800,
                    once: true,
                    easing: 'ease-out-cubic'
                })
            })
        })
    }
})
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

/* Custom animation for the content card */
.bg-gray-50 {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bg-gray-50:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Fade-in animation for elements */
.fade-in {
    opacity: 0;
    animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

/* Staggered animation delays */
.delay-100 {
    animation-delay: 0.1s;
}

.delay-200 {
    animation-delay: 0.2s;
}

.delay-300 {
    animation-delay: 0.3s;
}
</style>