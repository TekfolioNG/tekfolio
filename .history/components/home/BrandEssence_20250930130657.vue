<template>
    <section
        class="relative py-16 md:py-24 bg-gray-700 dark:bg-gray-800 overflow-hidden transition-colors duration-300">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <img src="~/assets/img/oil-rig.jpg" alt="Oil Rig Background" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70 opacity-85">
            </div>
            <div class="absolute inset-0 bg-[#fe4135] opacity-15 mix-blend-overlay"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <!-- Left Column - Heading -->
                <div class="text-left lg:pr-8">
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-barlow-extrabold text-white leading-tight mb-6">
                        <span class="text-[#fe4135]">Syntanium Energy:</span>
                        <br>
                        <span class="font-barlow-thin text-2xl md:text-3xl lg:text-4xl">Built on trust, focused on
                            results</span>
                    </h2>
                </div>

                <!-- Right Column - Body Text -->
                <div class="text-left lg:pl-8">
                    <p class="text-lg md:text-xl lg:text-2xl font-barlow-thin text-white leading-relaxed mb-6">
                        Syntanium Energy’s specialization spans engineering, construction, and maintenance solutions
                        that fuel
                        reliable operations across the oil and gas sector.
                    </p>
                    <p class="text-lg md:text-xl lg:text-2xl font-barlow-thin text-white leading-relaxed">
                        We help operators protect assets, improve performance, and execute major industry projects with
                        confidence.
                    </p>
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

/* Enhanced mobile responsive adjustments */
@media (max-width: 1024px) {
    .grid {
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    section {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    h2 {
        font-size: 2rem;
        line-height: 1.3;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.6;
    }

    .lg\:pr-8,
    .lg\:pl-8 {
        padding-left: 0;
        padding-right: 0;
    }
}

@media (max-width: 640px) {
    h2 {
        font-size: 1.75rem;
        margin-bottom: 1.25rem;
        text-align: center;
    }

    h2 span:first-child {
        font-size: 1.75rem;
    }

    h2 span.font-barlow-thin {
        font-size: 1.5rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        text-align: center;
    }

    .grid {
        gap: 1.75rem;
        text-align: center;
    }

    .text-left {
        text-align: center;
    }
}
</style>