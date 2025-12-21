<template>
    <section class="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <!-- Desktop layout -->
            <div class="hidden md:flex items-stretch bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <!-- Heading section with gray background -->
                <div
                    class="w-1/3 bg-gray-200 dark:bg-gray-700 p-8 flex items-center justify-center transition-all duration-500 group-hover:-mr-4 group">
                    <h2 class="text-4xl font-barlow font-semibold text-gray-800 dark:text-white">
                        OUR COMPANY
                    </h2>
                </div>

                <!-- Content section that reveals on hover -->
                <div class="w-2/3 p-8 flex items-center">
                    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Syntanium is an engineering and energy solutions company serving the oil and gas industry across
                        upstream, midstream, and downstream operations. We focus on safety, quality, and sustainability,
                        delivering practical services that fuel reliable performance and long-term value for our
                        partners.
                    </p>
                </div>
            </div>

            <!-- Mobile layout -->
            <div class="md:hidden bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <!-- Heading section with gray background -->
                <div class="bg-gray-200 dark:bg-gray-700 p-6 text-center">
                    <h2 class="text-3xl font-barlow font-semibold text-gray-800 dark:text-white">
                        OUR COMPANY
                    </h2>
                </div>

                <!-- Content section -->
                <div class="p-6">
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
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

<style>
/* Import Barlow font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Hover effect for desktop */
.hidden.md\:flex.group:hover .bg-gray-200 {
    margin-right: -1rem;
}
</style>