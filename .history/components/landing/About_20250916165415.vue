<template>
    <section class="py-16 px-6 bg-white dark:bg-gray-900">
        <div class="max-w-6xl mx-auto">
            <!-- Desktop: Single Row Layout -->
            <div class="md:flex md:items-center md:h-32 overflow-hidden">
                <!-- Heading Panel -->
                <div
                    class="bg-gray-100 dark:bg-gray-800 md:flex md:items-center md:justify-center md:px-8 py-8 md:py-0 md:h-full transition-all duration-500 group hover:md:flex-shrink-0 hover:md:mr-4 md:min-w-fit">
                    <h2
                        class="text-3xl md:text-4xl font-barlow font-bold text-gray-900 dark:text-white tracking-tight whitespace-nowrap">
                        OUR COMPANY
                    </h2>
                </div>

                <!-- Text Content -->
                <div
                    class="md:flex-1 md:pl-8 pt-8 md:pt-0 md:opacity-0 md:transform md:translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500">
                    <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        Syntanium is an engineering and energy solutions company serving the oil and gas industry across
                        upstream, midstream, and downstream operations. We focus on safety, quality, and sustainability,
                        delivering practical services that fuel reliable performance and long-term value for our
                        partners.
                    </p>
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

/* Group hover trigger */
.group:hover .hover\:md\:flex-shrink-0 {
    flex-shrink: 0;
}

.group:hover .hover\:md\:mr-4 {
    margin-right: 1rem;
}
</style>