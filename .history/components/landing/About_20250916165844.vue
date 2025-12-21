<template>
    <section class="relative py-16 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto">
            <!-- Diagonal Split Layout -->
            <div class="relative flex items-center min-h-[300px]">
                <!-- Left Panel - Heading (Dark/Colored Background) -->
                <div
                    class="relative bg-gray-700 dark:bg-gray-900 text-white flex items-center justify-center px-12 py-16 w-full md:w-2/5 lg:w-1/3">
                    <!-- Diagonal cut -->
                    <div
                        class="absolute top-0 right-0 w-0 h-0 border-l-[100px] md:border-l-[150px] border-l-gray-700 dark:border-l-gray-900 border-t-[300px] border-t-transparent border-b-[300px] border-b-transparent transform translate-x-full">
                    </div>

                    <h2 class="text-3xl md:text-4xl font-barlow font-bold tracking-tight text-center">
                        OUR COMPANY
                    </h2>
                </div>

                <!-- Right Panel - Content (Light Background) -->
                <div
                    class="absolute right-0 top-0 h-full w-full md:w-4/5 lg:w-3/4 bg-gray-50 dark:bg-gray-700 flex items-center">
                    <div class="pl-8 md:pl-32 lg:pl-40 pr-8 py-16">
                        <p class="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl">
                            Syntanium is an engineering and energy solutions company serving the oil and gas industry
                            across upstream, midstream, and downstream operations. We focus on safety, quality, and
                            sustainability, delivering practical services that fuel reliable performance and long-term
                            value for our partners.
                        </p>
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
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&display=swap');

/* Apply Barlow font family */
.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Responsive adjustments */
@media (max-width: 768px) {

    /* Stack vertically on mobile */
    .relative.flex {
        flex-direction: column;
    }

    /* Hide diagonal cut on mobile */
    .absolute.top-0.right-0 {
        display: none;
    }

    /* Full width panels on mobile */
    .w-full.md\:w-2\/5 {
        width: 100% !important;
    }

    .absolute.right-0 {
        position: relative !important;
        width: 100% !important;
    }

    .pl-8.md\:pl-32 {
        padding-left: 2rem !important;
    }
}
</style>