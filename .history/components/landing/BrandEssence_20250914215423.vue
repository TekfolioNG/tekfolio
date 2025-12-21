<template>
    <section
        class="relative py-16 md:py-20 bg-gray-700 dark:bg-gray-800 overflow-hidden transition-colors duration-300">
        <!-- Geometric Diagonal Fabric Pattern Background -->
        <div class="absolute inset-0 opacity-15">
            <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="diagonal-fabric" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse"
                        patternTransform="rotate(45)">
                        <!-- Diagonal lines -->
                        <line x1="0" y1="0" x2="0" y2="80" stroke="white" stroke-width="2" opacity="0.15" />
                        <line x1="20" y1="0" x2="20" y2="80" stroke="white" stroke-width="2" opacity="0.15" />
                        <line x1="40" y1="0" x2="40" y2="80" stroke="white" stroke-width="2" opacity="0.15" />
                        <line x1="60" y1="0" x2="60" y2="80" stroke="white" stroke-width="2" opacity="0.15" />

                        <!-- Cross pattern elements -->
                        <rect x="10" y="10" width="4" height="4" fill="white" opacity="0.2" />
                        <rect x="30" y="10" width="4" height="4" fill="white" opacity="0.2" />
                        <rect x="50" y="10" width="4" height="4" fill="white" opacity="0.2" />
                        <rect x="70" y="10" width="4" height="4" fill="white" opacity="0.2" />

                        <rect x="10" y="30" width="4" height="4" fill="white" opacity="0.2" />
                        <rect x="30" y="30" width="4" height="4" fill="white" opacity="0.2" />
                        <rect x="50" y="30" width="4" height="4" fill="white" opacity="0.2" />
                        <rect x="70" y="30" width="4" height="4" fill="white" opacity="0.2" />

                        <rect x="10" y="50" width="4" height="4" fill="white" opacity="0.2" />
                        <rect x="30" y="50" width="4" height="4" fill="white" opacity="0.2" />
                        <rect x="50" y="50" width="4" height="4" fill="white" opacity="0.2" />
                        <rect x="70" y="50" width="4" height="4" fill="white" opacity="0.2" />

                        <rect x="10" y="70" width="4" height="4" fill="white" opacity="0.2" />
                        <rect x="30" y="70" width="4" height="4" fill="white" opacity="0.2" />
                        <rect x="50" y="70" width="4" height="4" fill="white" opacity="0.2" />
                        <rect x="70" y="70" width="4" height="4" fill="white" opacity="0.2" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonal-fabric)" />
            </svg>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <!-- Left Column - Heading -->
                <div class="text-left lg:pr-8">
                    <h2
                        class="text-3xl md:text-4xl lg:text-5xl font-barlow-extrabold text-white dark:text-gray-100 leading-tight mb-6">
                        <span class="text-[#fe4135]">Syntanium Energy:</span>
                        <br>
                        <span class="font-barlow-thin text-2xl md:text-3xl lg:text-4xl">built on trust, focused on
                            results</span>
                    </h2>
                </div>

                <!-- Right Column - Body Text -->
                <div class="text-left lg:pl-8">
                    <p
                        class="text-lg md:text-xl lg:text-2xl font-barlow-thin text-white dark:text-gray-100 leading-relaxed mb-6">
                        Syntanium provides engineering, construction, and maintenance solutions that fuel reliable
                        operations across the oil and gas sector.
                    </p>
                    <p
                        class="text-lg md:text-xl lg:text-2xl font-barlow-thin text-white dark:text-gray-100 leading-relaxed">
                        We help operators protect assets, improve performance, and execute major industry projects with
                        confidence.
                    </p>
                </div>
            </div>
        </div>

        <!-- Subtle diagonal texture overlay -->
        <div class="absolute inset-0 opacity-10">
            <div class="w-full h-full" style="
                background: 
                    repeating-linear-gradient(
                        45deg,
                        rgba(255, 255, 255, 0.03) 0px,
                        rgba(255, 255, 255, 0.03) 2px,
                        transparent 2px,
                        transparent 4px
                    ),
                    repeating-linear-gradient(
                        -45deg,
                        rgba(255, 255, 255, 0.02) 0px,
                        rgba(255, 255, 255, 0.02) 2px,
                        transparent 2px,
                        transparent 4px
                    );
            "></div>
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