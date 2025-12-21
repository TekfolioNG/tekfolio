<template>
    <section class="relative w-full min-h-400 md:min-h-500 overflow-hidden bg-gray-900 hero-animate">
        <!-- Content and Lottie Container -->
        <div class="relative z-10 h-full container mx-auto px-6 md:px-12">
            <div class="grid md:grid-cols-2 gap-8 items-center h-full min-h-400 md:min-h-500">
                <!-- Text Content - Left on desktop, top on mobile -->
                <div class="flex flex-col justify-center py-12 md:py-0 order-2 md:order-1" data-aos="fade-right"
                    data-aos-duration="800">
                    <h1
                        class="font-barlow-extrabold text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                        Contact Us
                    </h1>
                    <div class="w-20 h-1 bg-red-500 mb-6" data-aos="fade-right" data-aos-duration="800"
                        data-aos-delay="200"></div>
                    <p class="text-xl text-gray-300 max-w-md leading-relaxed" data-aos="fade-right"
                        data-aos-duration="800" data-aos-delay="400">
                        Get in touch with our team to discuss how we can support your energy projects with our expertise
                        and solutions.
                    </p>
                </div>

                <!-- Lottie Animation - Right on desktop, bottom on mobile -->
                <div class="flex items-center justify-center order-1 md:order-2 py-8 md:py-0" data-aos="fade-left"
                    data-aos-duration="800">
                    <div class="w-full max-w-md md:max-w-lg">
                        <DotLottieVue style="height: 100%; width: 100%" autoplay loop
                            src="https://lottie.host/9570133c-2003-42f9-8837-7df31d26106d/QSdJfTeuzt.lottie" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Subtle background pattern for visual interest -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-64 h-64 bg-red-500 rounded-full -translate-x-32 -translate-y-32"></div>
            <div class="absolute bottom-0 right-0 w-64 h-64 bg-red-500 rounded-full translate-x-32 translate-y-32">
            </div>
        </div>
    </section>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { onMounted } from 'vue';

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
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
}

.min-h-400 {
    min-height: 400px;
}

.min-h-500 {
    min-height: 500px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .min-h-400 {
        min-height: 400px;
    }
}
</style>