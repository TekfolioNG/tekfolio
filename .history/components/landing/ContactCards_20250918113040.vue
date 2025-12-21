<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto">
            <!-- Contact Cards -->
            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <!-- Address Card -->
                <div class="contact-card group">
                    <div class="contact-icon">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <h3 class="contact-title">Our Location</h3>
                    <p class="contact-text">
                        11 Oromineke Layout, Off Wogu Street, D-Line, Port Harcourt, Nigeria
                    </p>
                </div>

                <!-- Phone Card -->
                <div class="contact-card group">
                    <div class="contact-icon">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <h3 class="contact-title">Call Us</h3>
                    <a href="tel:+2348148571524" class="contact-link">
                        (+234) 814 857 1524
                    </a>
                </div>

                <!-- Email Card -->
                <div class="contact-card group">
                    <div class="contact-icon">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 class="contact-title">Email Us</h3>
                    <a href="mailto:info@syntaniumenergy.com" class="contact-link break-all">
                        info@syntaniumenergy.com
                    </a>
                </div>
            </div>

            <!-- Map Section -->
            <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                <div class="grid md:grid-cols-2">
                    <!-- Map Info -->
                    <div class="p-8 md:p-12">
                        <h3 class="text-2xl font-barlow font-bold text-gray-900 dark:text-white mb-6">
                            Visit Our Office
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-6">
                            Come discuss your energy projects and discover how we can support your operations.
                        </p>

                        <div class="space-y-4">
                            <div class="flex items-start">
                                <svg class="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p class="text-gray-600 dark:text-gray-300">
                                    11 Oromineke Layout, Off Wogu Street, D-Line, Port Harcourt, Nigeria
                                </p>
                            </div>

                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="text-gray-600 dark:text-gray-300">
                                    Monday - Friday: 8:00 AM - 5:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Map Embed -->
                    <div class="h-80 md:h-auto">
                        <iframe src="https://maps.app.goo.gl/SuyaxQ4Gbv5zZePn9" width="100%" height="100%"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            class="dark:grayscale dark:opacity-90" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component is purely presentational - no additional logic needed
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Contact card base styles */
.contact-card {
    background-color: rgb(249 250 251);
    /* gray-50 */
    border-radius: 0.75rem;
    /* rounded-xl */
    padding: 2rem;
    /* p-8 */
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 0 0 transparent;
}

.contact-card:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05);
    transform: translateY(-0.5rem);
}

/* Dark mode for contact cards */
html.dark .contact-card,
.dark .contact-card,
[data-theme="dark"] .contact-card {
    background-color: rgb(31 41 55);
    /* dark:bg-gray-800 */
}

/* Contact icon styles */
.contact-icon {
    width: 4rem;
    /* w-16 */
    height: 4rem;
    /* h-16 */
    background-color: rgb(239 68 68);
    /* bg-red-500 */
    border-radius: 0.75rem;
    /* rounded-xl */
    margin: 0 auto 1.5rem auto;
    /* mx-auto mb-6 */
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .contact-icon {
    transform: scale(1.1);
}

/* Contact title styles */
.contact-title {
    font-size: 1.25rem;
    /* text-xl */
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
    /* font-bold */
    color: rgb(17 24 39);
    /* text-gray-900 */
    margin-bottom: 1rem;
    /* mb-4 */
}

/* Dark mode for contact title */
html.dark .contact-title,
.dark .contact-title,
[data-theme="dark"] .contact-title {
    color: rgb(255 255 255);
    /* dark:text-white */
}

/* Contact text styles */
.contact-text {
    color: rgb(55 65 81);
    /* text-gray-700 */
    line-height: 1.625;
    /* leading-relaxed */
}

/* Dark mode for contact text */
html.dark .contact-text,
.dark .contact-text,
[data-theme="dark"] .contact-text {
    color: rgb(209 213 219);
    /* dark:text-gray-300 */
}

/* Contact link styles */
.contact-link {
    color: rgb(55 65 81);
    /* text-gray-700 */
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
}

.contact-link:hover {
    color: rgb(239 68 68);
    /* hover:text-red-500 */
}

/* Dark mode for contact links */
html.dark .contact-link,
.dark .contact-link,
[data-theme="dark"] .contact-link {
    color: rgb(209 213 219);
    /* dark:text-gray-300 */
}

html.dark .contact-link:hover,
.dark .contact-link:hover,
[data-theme="dark"] .contact-link:hover {
    color: rgb(248 113 113);
    /* dark:hover:text-red-400 */
}
</style>