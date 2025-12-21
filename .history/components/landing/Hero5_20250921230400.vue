<template>
    <div class="min-h-screen bg-white dark:bg-gray-900">

        <!-- Hero Banner Section -->
        <section class="relative h-80 lg:h-96 w-full overflow-hidden">
            <!-- Background Image with Overlay -->
            <div class="absolute inset-0">
                <img src="/assets/img/engineering-syntanium.png" alt="Engineering at Syntanium Energy"
                    class="w-full h-full object-cover object-center" />
                <!-- Enhanced gradient overlay for better text contrast -->
                <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>
            </div>

            <!-- Hero Content - Centered -->
            <div class="relative z-10 flex items-center justify-center h-full">
                <div class="text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl">
                    <!-- White, centered, uppercase, bold heading with text shadow for contrast -->
                    <h1
                        class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-bold uppercase tracking-wide drop-shadow-lg">
                        ENGINEERING THAT POWERS PERFORMANCE
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

/* Enhanced text styling for better contrast */
h1 {
    font-family: 'Barlow', sans-serif;
    font-weight: 900;
    /* Extra bold for maximum impact */
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    /* Stronger text shadow for readability */
    letter-spacing: 0.05em;
    /* Slightly increased letter spacing for all caps */
}

/* Custom responsive adjustments */
@media (max-width: 640px) {
    h1 {
        font-size: 2rem;
        /* Ensure good sizing on mobile */
        letter-spacing: 0.03em;
    }
}
</style>