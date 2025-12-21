<template>
    <section class="relative py-20 md:py-28 bg-gray-700 overflow-hidden">
        <!-- Pattern Background Overlay -->
        <div class="absolute inset-0 opacity-10">
            <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="diagonal-stripes" patternUnits="userSpaceOnUse" width="60" height="60"
                        patternTransform="rotate(45)">
                        <rect width="30" height="60" fill="none" />
                        <rect width="30" height="60" fill="white" opacity="0.8" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
            </svg>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <!-- Left Column - Heading -->
                <div class="text-left lg:pr-8">
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-barlow-extrabold text-white leading-tight mb-6">
                        <span class="text-[#fe4135]">Syntanium Energy:</span>
                        <br>
                        <span class="text-white">built on trust, focused on results</span>
                    </h2>
                </div>

                <!-- Right Column - Body Text -->
                <div class="text-left lg:pl-8">
                    <p class="text-lg md:text-xl lg:text-2xl font-barlow-thin text-white leading-relaxed">
                        Syntanium provides engineering, construction, and maintenance solutions that fuel reliable
                        operations across the oil and gas sector. We help operators protect assets, improve performance,
                        and execute major industry projects with confidence.
                    </p>
                </div>
            </div>
        </div>

        <!-- Additional subtle pattern overlay for depth -->
        <div class="absolute inset-0 opacity-5">
            <div class="w-full h-full"
                style="background-image: radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px); background-size: 100px 100px; background-position: 0 0, 50px 50px;">
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

.font-barlow-thin {
    font-family: 'Barlow', sans-serif;
    font-weight: 100;
    font-style: normal;
}

/* Responsive typography adjustments */
@media (max-width: 768px) {
    h2 {
        font-size: 2rem;
        line-height: 1.2;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.6;
    }
}

@media (max-width: 640px) {
    h2 {
        font-size: 1.75rem;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
    }

    .grid {
        gap: 2rem;
    }
}
</style>