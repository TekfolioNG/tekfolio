<template>
    <section class="py-20 px-6 bg-white">
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
                        120 Lewis Street, Lagos Island, Lagos, Nigeria
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
                    <div class="space-y-1">
                        <a href="tel:+2348033377366" class="contact-link block">
                            (+234) 803 337 7366
                        </a>
                        <a href="tel:+2348038786056" class="contact-link block">
                            (+234) 803 878 6056
                        </a>
                        <a href="tel:+2349026944592" class="contact-link block">
                            (+234) 902 694 4592
                        </a>
                    </div>
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
                    <div class="space-y-1">
                        <a href="mailto:info@elevationconsulting.com.ng" class="contact-link block text-sm">
                            info@elevationconsulting.com.ng
                        </a>
                        <a href="mailto:elevationconsultingsg@gmail.com" class="contact-link block text-sm">
                            elevationconsultingsg@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <!-- Map Section -->
            <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                <div class="grid md:grid-cols-2">
                    <!-- Map Info -->
                    <div class="p-8 md:p-12">
                        <h3 class="text-2xl font-barlow-extrabold text-gray-900 mb-6">
                            Visit Our Office
                        </h3>
                        <p class="text-gray-800 mb-6">
                            Come discuss your business goals and discover how we can help you achieve sustainable
                            growth.
                        </p>

                        <div class="space-y-4">
                            <div class="flex items-start">
                                <svg class="w-5 h-5 text-[#0077AA] mt-1 mr-3 flex-shrink-0" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p class="text-gray-800">
                                    120 Lewis Street, Lagos Island, Lagos, Nigeria
                                </p>
                            </div>

                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-[#0077AA] mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="text-gray-800">
                                    Monday - Friday: 8:00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Map Embed -->
                    <div class="h-80 md:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6401088831966!2d3.3927767!3d6.4387811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2s120%20Lewis%20St%2C%20Lagos%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1634032345678!5m2!1sen!2sng"
                            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" />
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
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

/* Contact card base styles */
.contact-card {
    background-color: rgb(249 250 251);
    border-radius: 0.75rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.contact-card:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05);
    transform: translateY(-0.5rem);
}

/* Contact icon styles */
.contact-icon {
    width: 4rem;
    height: 4rem;
    background-color: #0077AA;
    border-radius: 0.75rem;
    margin: 0 auto 1.5rem auto;
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
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    color: rgb(17 24 39);
    margin-bottom: 1rem;
}

/* Contact text styles */
.contact-text {
    color: rgb(31 41 55);
    line-height: 1.625;
}

/* Contact link styles */
.contact-link {
    color: rgb(31 41 55);
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
}

.contact-link:hover {
    color: #0077AA;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .contact-card {
        padding: 1.5rem;
    }

    .contact-icon {
        width: 3.5rem;
        height: 3.5rem;
    }
}
</style>