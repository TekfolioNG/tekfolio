<template>
    <div class="min-h-screen bg-white dark:bg-gray-900">

        <!-- Hero Banner Section -->
        <section class="relative h-80 lg:h-96 w-full overflow-hidden">
            <!-- Background Image with Overlay -->
            <div class="absolute inset-0">
                <img src="/assets/img/engineering-syntanium.png" alt="Engineering at Syntanium Energy"
                    class="w-full h-full object-cover object-center" />
                <!-- Dark Overlay (increased opacity for better contrast) -->
                <div class="absolute inset-0 bg-black/90"></div>
            </div>

            <!-- Hero Content -->
            <div class="relative z-10 flex items-center justify-center h-full pt-12 sm:pt-24">
                <div class="text-center px-4 sm:px-6 lg:px-8">
                    <h1
                        class="text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wide font-barlow-extrabold font-bold px-6 py-3 bg-black/30 rounded-lg backdrop-blur-sm">
                        Engineering
                    </h1>
                </div>
            </div>
        </section>

        <!-- Description Section -->
        <section class="w-full bg-gray-700 py-16 lg:py-20">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <p class="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed lg:leading-loose font-light">
                        Syntanium's engineering capability spans the full project cycle, from early design to detailed
                        studies and execution support. We combine technical expertise with deep industry knowledge to
                        deliver safe, efficient, and cost-effective solutions that strengthen assets and support
                        long-term growth.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>


<style scoped>
/* Import Barlow font if not already imported globally */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Ensure smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Custom responsive adjustments if needed */
@media (max-width: 640px) {
    .font-barlow {
        letter-spacing: 0.025em;
    }
}
</style>