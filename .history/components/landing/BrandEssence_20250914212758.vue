<template>
    <section
        class="relative py-16 md:py-20 lg:py-24 bg-gray-700 dark:bg-gray-800 overflow-hidden transition-colors duration-300">
        <!-- Geometric Floral Pattern Background Overlay -->
        <div class="absolute inset-0 opacity-8">
            <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="geometric-floral" patternUnits="userSpaceOnUse" width="120" height="120">
                        <!-- Central flower motif -->
                        <circle cx="60" cy="60" r="3" fill="white" opacity="0.4" />
                        <circle cx="60" cy="45" r="2" fill="white" opacity="0.3" />
                        <circle cx="60" cy="75" r="2" fill="white" opacity="0.3" />
                        <circle cx="45" cy="60" r="2" fill="white" opacity="0.3" />
                        <circle cx="75" cy="60" r="2" fill="white" opacity="0.3" />
                        <circle cx="52" cy="52" r="1.5" fill="white" opacity="0.25" />
                        <circle cx="68" cy="52" r="1.5" fill="white" opacity="0.25" />
                        <circle cx="52" cy="68" r="1.5" fill="white" opacity="0.25" />
                        <circle cx="68" cy="68" r="1.5" fill="white" opacity="0.25" />

                        <!-- Corner accent elements -->
                        <circle cx="20" cy="20" r="1" fill="white" opacity="0.2" />
                        <circle cx="100" cy="20" r="1" fill="white" opacity="0.2" />
                        <circle cx="20" cy="100" r="1" fill="white" opacity="0.2" />
                        <circle cx="100" cy="100" r="1" fill="white" opacity="0.2" />

                        <!-- Connecting lines for geometric feel -->
                        <line x1="45" y1="60" x2="75" y2="60" stroke="white" stroke-width="0.5" opacity="0.15" />
                        <line x1="60" y1="45" x2="60" y2="75" stroke="white" stroke-width="0.5" opacity="0.15" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#geometric-floral)" />
            </svg>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <!-- Left Column - Heading -->
                <div class="text-left lg:pr-6">
                    <h2
                        class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-barlow-extrabold text-white dark:text-gray-100 leading-tight mb-6">
                        <span class="text-[#fe4135]">Syntanium Energy:</span>
                        <br>
                        <span class="font-barlow-thin">built on trust, focused on results</span>
                    </h2>
                </div>

                <!-- Right Column - Body Text -->
                <div class="text-left lg:pl-6">
                    <p
                        class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-barlow-thin text-white dark:text-gray-100 leading-relaxed">
                        Syntanium provides engineering, construction, and maintenance solutions that fuel reliable
                        operations across the oil and gas sector. We help operators protect assets, improve performance,
                        and execute major industry projects with confidence.
                    </p>
                </div>
            </div>
        </div>

        <!-- Subtle wooly texture overlay -->
        <div class="absolute inset-0 opacity-4">
            <div class="w-full h-full" style="background-image: 
                radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 1px, transparent 1px),
                radial-gradient(circle at 70% 60%, rgba(255,255,255,0.08) 1px, transparent 1px),
                radial-gradient(circle at 20% 80%, rgba(255,255,255,0.06) 1px, transparent 1px),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 1px, transparent 1px);
                background-size: 40px 40px, 60px 60px, 35px 35px, 45px 45px;
                background-position: 0 0, 20px 20px, 10px 30px, 30px 10px;">
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

/* Enhanced mobile responsive adjustments */
@media (max-width: 1024px) {
    .grid {
        gap: 1.5rem;
    }
}

@media (max-width: 768px) {
    h2 {
        font-size: 1.875rem;
        line-height: 1.3;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
    }

    .lg\:pr-6,
    .lg\:pl-6 {
        padding-left: 0;
        padding-right: 0;
    }
}

@media (max-width: 640px) {
    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    p {
        font-size: 0.95rem;
        line-height: 1.6;
        text-align: center;
    }

    .grid {
        gap: 1.5rem;
        text-align: center;
    }

    .text-left {
        text-align: center;
    }
}
</style>