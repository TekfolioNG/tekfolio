<template>
    <section class="values-component py-16 md:py-24 bg-gray-50">
        <!-- Container with wide margins -->
        <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <!-- Grid with 8 rows -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <!-- Row 1: Content then Image -->
                <div class="flex flex-col justify-center p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h3 class="text-2xl md:text-3xl font-bold text-red-500 mb-4">Safety</h3>
                    <p class="text-gray-700 text-base md:text-lg">
                        Safety is central to every project we take on. We protect people, safeguard assets, and create
                        environments where work is carried out without compromise.
                    </p>
                </div>
                <div class="flex items-center justify-center p-4">
                    <img src="~/assets/img/who-we-are-syntanium4.png" alt="Safety at Syntanium"
                        class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg">
                </div>

                <!-- Row 2: Image then Content (swapped) -->
                <div class="flex items-center justify-center p-4 order-2 lg:order-1">
                    <img src="~/assets/img/who-we-are-syntanium4.png" alt="Quality at Syntanium"
                        class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg">
                </div>
                <div class="flex flex-col justify-center p-6 md:p-8 bg-white rounded-xl shadow-lg order-1 lg:order-2">
                    <h3 class="text-2xl md:text-3xl font-bold text-red-500 mb-4">Quality</h3>
                    <p class="text-gray-700 text-base md:text-lg">
                        Quality drives trust in every solution we deliver. Our standards ensure efficiency, reliability,
                        and lasting value for the companies we serve.
                    </p>
                </div>

                <!-- Row 3: Content then Image -->
                <div class="flex flex-col justify-center p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h3 class="text-2xl md:text-3xl font-bold text-red-500 mb-4">Sustainability</h3>
                    <p class="text-gray-700 text-base md:text-lg">
                        We pursue progress with responsibility. By managing resources wisely and reducing environmental
                        impact, we help shape an energy future that lasts.
                    </p>
                </div>
                <div class="flex items-center justify-center p-4">
                    <img src="~/assets/img/who-we-are-syntanium4.png" alt="Sustainability at Syntanium"
                        class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg">
                </div>

                <!-- Row 4: Image then Content (swapped) -->
                <div class="flex items-center justify-center p-4 order-2 lg:order-1">
                    <img src="~/assets/img/who-we-are-syntanium4.png" alt="Community Responsibility at Syntanium"
                        class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg">
                </div>
                <div class="flex flex-col justify-center p-6 md:p-8 bg-white rounded-xl shadow-lg order-1 lg:order-2">
                    <h3 class="text-2xl md:text-3xl font-bold text-red-500 mb-4">Community Responsibility</h3>
                    <p class="text-gray-700 text-base md:text-lg">
                        Our Oaktree Initiative partnership reflects our belief in shared growth. We support education,
                        local development, and opportunities that strengthen the communities around us.
                    </p>
                </div>

                <!-- Row 5: Content then Image -->
                <div class="flex flex-col justify-center p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h3 class="text-2xl md:text-3xl font-bold text-red-500 mb-4">Ethical Governance</h3>
                    <p class="text-gray-700 text-base md:text-lg">
                        We operate with clarity and accountability. Transparent processes and strict compliance with
                        global standards define the way we do business.
                    </p>
                </div>
                <div class="flex items-center justify-center p-4">
                    <img src="~/assets/img/who-we-are-syntanium4.png" alt="Ethical Governance at Syntanium"
                        class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg">
                </div>

                <!-- Row 6: Image then Content (swapped) -->
                <div class="flex items-center justify-center p-4 order-2 lg:order-1">
                    <img src="~/assets/img/who-we-are-syntanium4.png" alt="Innovation at Syntanium"
                        class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg">
                </div>
                <div class="flex flex-col justify-center p-6 md:p-8 bg-white rounded-xl shadow-lg order-1 lg:order-2">
                    <h3 class="text-2xl md:text-3xl font-bold text-red-500 mb-4">Innovation</h3>
                    <p class="text-gray-700 text-base md:text-lg">
                        We explore new ways to meet today's challenges. By embracing technology and smarter methods, we
                        help build stronger, more resilient operations.
                    </p>
                </div>

                <!-- Row 7: Content then Image -->
                <div class="flex flex-col justify-center p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h3 class="text-2xl md:text-3xl font-bold text-red-500 mb-4">Collaboration</h3>
                    <p class="text-gray-700 text-base md:text-lg">
                        We achieve more together. Partnerships with clients, stakeholders, and communities create shared
                        success and meaningful outcomes across the energy chain.
                    </p>
                </div>
                <div class="flex items-center justify-center p-4">
                    <img src="~/assets/img/who-we-are-syntanium4.png" alt="Collaboration at Syntanium"
                        class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg">
                </div>

                <!-- Row 8: Image then Content (swapped) -->
                <div class="flex items-center justify-center p-4 order-2 lg:order-1">
                    <img src="~/assets/img/who-we-are-syntanium4.png" alt="Excellence in Delivery at Syntanium"
                        class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg">
                </div>
                <div class="flex flex-col justify-center p-6 md:p-8 bg-white rounded-xl shadow-lg order-1 lg:order-2">
                    <h3 class="text-2xl md:text-3xl font-bold text-red-500 mb-4">Excellence in Delivery</h3>
                    <p class="text-gray-700 text-base md:text-lg">
                        We commit to outcomes that stand the test of time. Every project reflects dedication, expertise,
                        and a drive to exceed expectations.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No script needed for static content, but can add if required
</script>

<style scoped>
.values-component {
    background-color: #fef2f2;
    /* Very light red tint */
}

/* Smooth transitions for hover effects */
.values-component .bg-white {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.values-component .bg-white:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Responsive adjustments */
@media (max-width: 1023px) {
    .values-component .order-1 {
        order: 1;
    }

    .values-component .order-2 {
        order: 2;
    }
}
</style>