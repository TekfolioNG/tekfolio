<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto">
            <!-- Heading -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-barlow font-bold text-gray-900 dark:text-white mb-6">
                    Get In Touch
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Reach out to our team for inquiries, support, or to discuss how we can collaborate on your next
                    project.
                </p>
            </div>

            <!-- Contact Cards -->
            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <!-- Address Card -->
                <div
                    class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center group hover:shadow-lg transition-all duration-300">
                    <div
                        class="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-barlow font-semibold text-gray-900 dark:text-white mb-4">Our Location</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        11 Oromineke Layout, Off Wogu Street,<br>D-Line, Port Harcourt, Nigeria
                    </p>
                </div>

                <!-- Phone Card -->
                <div
                    class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center group hover:shadow-lg transition-all duration-300">
                    <div
                        class="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-barlow font-semibold text-gray-900 dark:text-white mb-4">Phone Number</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        (+234) 814 857 1524
                    </p>
                </div>

                <!-- Email Card -->
                <div
                    class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center group hover:shadow-lg transition-all duration-300">
                    <div
                        class="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-barlow font-semibold text-gray-900 dark:text-white mb-4">Email Address</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        info@syntaniumenergy.com
                    </p>
                </div>
            </div>

            <!-- Map Section -->
            <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                <div class="grid md:grid-cols-2">
                    <!-- Map Info -->
                    <div class="p-8 md:p-12">
                        <h3 class="text-2xl font-barlow font-bold text-gray-900 dark:text-white mb-6">Our Location</h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-6">
                            Visit our office in Port Harcourt to discuss your energy projects and how we can support
                            your operations with our expertise and solutions.
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <svg class="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <p class="text-gray-600 dark:text-gray-300">
                                    11 Oromineke Layout, Off Wogu Street, D-Line, Port Harcourt, Nigeria
                                </p>
                            </div>
                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p class="text-gray-600 dark:text-gray-300">
                                    Monday - Friday: 8:00 AM - 5:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Map Embed -->
                    <div class="h-80 md:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.952428207506!2d6.998414274756657!3d4.817920341266972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce2517db5a1f%3A0x8e8e2b4e8e2b4e8e!2sPort%20Harcourt%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1634032345678!5m2!1sen!2sng"
                            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                            class="dark:grayscale dark:opacity-90"></iframe>
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
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}
</style>