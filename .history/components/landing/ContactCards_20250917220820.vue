<template>
    <section class="py-16 px-6 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto">
            <!-- Contact Cards -->
            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <!-- Address Card -->
                <div
                    class="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-red-500 rounded-xl mx-auto mb-6 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-barlow font-bold text-gray-900 dark:text-white mb-4">
                        Our Location
                    </h3>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                        11 Oromineke Layout, Off Wogu Street, D-Line, Port Harcourt, Nigeria
                    </p>
                </div>

                <!-- Phone Card -->
                <div
                    class="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-red-500 rounded-xl mx-auto mb-6 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-barlow font-bold text-gray-900 dark:text-white mb-4">
                        Call Us
                    </h3>
                    <a href="tel:+2348148571524"
                        class="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300">
                        (+234) 814 857 1524
                    </a>
                </div>

                <!-- Email Card -->
                <div
                    class="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-red-500 rounded-xl mx-auto mb-6 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-barlow font-bold text-gray-900 dark:text-white mb-4">
                        Email Us
                    </h3>
                    <a href="mailto:info@syntaniumenergy.com"
                        class="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 break-all">
                        info@syntaniumenergy.com
                    </a>
                </div>
            </div>

            <!-- Location Map Section -->
            <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
                <div class="text-center mb-8">
                    <h2 class="text-3xl md:text-4xl font-barlow font-bold text-gray-900 dark:text-white mb-4">
                        Find Us Here
                    </h2>
                    <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        Located in the heart of Port Harcourt, we're easily accessible and ready to serve your energy
                        solutions needs.
                    </p>
                </div>

                <!-- Map Container -->
                <div class="relative rounded-xl overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700"
                    style="height: 400px;">
                    <!-- Placeholder for Google Maps or Map Service -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center">
                            <div
                                class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7">
                                </svg>
                            </div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm">
                                Interactive map will be integrated here
                            </p>
                            <p class="text-gray-500 dark:text-gray-500 text-xs mt-2">
                                11 Oromineke Layout, Off Wogu Street, D-Line, Port Harcourt
                            </p>
                        </div>
                    </div>

                    <!-- Actual Google Maps Embed (uncomment and replace with your API key/embed URL) -->
                    <!-- 
<iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.1234567890!2d7.0123456!3d4.8123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDgnNDQuNCJOIDfCsDAzJzQ0LjQiRQ!5e0!3m2!1sen!2sng!4v1234567890!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
</iframe>-->
                </div>

                <!-- Map Footer with Directions Link -->
                <div class="mt-6 text-center">
                    <a href="https://maps.google.com/?q=11+Oromineke+Layout,+Off+Wogu+Street,+D-Line,+Port+Harcourt,+Nigeria"
                        target="_blank"
                        class="inline-flex items-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-300">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7">
                            </path>
                        </svg>
                        Get Directions
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No additional script logic needed for basic contact info
// You can add Google Maps API integration here if needed
</script>

<style scoped>
/* Import Barlow font */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&display=swap');

/* Apply Barlow font family */
.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Ensure proper link styling */
a {
    text-decoration: none;
}

/* Hover effects for cards */
.group:hover .transform {
    transform: scale(1.1);
}

/* Custom breakpoint adjustments */
@media (max-width: 768px) {
    .break-all {
        word-break: break-word;
    }
}
</style>