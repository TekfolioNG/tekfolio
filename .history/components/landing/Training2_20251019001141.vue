<template>
    <section class="py-16 md:py-24 bg-white transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-2xl lg:text-3xl font-barlow-extrabold text-gray-900 mb-6 tracking-wide">
                    Business Training Programs
                </h2>
                <p class="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-normal">
                    Comprehensive training solutions designed to build capabilities across all levels of your
                    organization.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <!-- Left Column: Training Categories -->
                <div class="space-y-8">
                    <!-- Business Management -->
                    <div
                        class="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div class="flex items-start space-x-4 mb-4">
                            <div
                                class="flex-shrink-0 w-12 h-12 bg-[#006688] rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-barlow-extrabold text-gray-900 mb-2">Business Management</h3>
                                <p class="text-gray-700 mb-4">
                                    Focused on strategy, leadership, and operational excellence.
                                </p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Total Quality Management</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Business Strategy and Analysis</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Change Management</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Disaster Recovery</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Marketing Management</span>
                            </div>
                        </div>
                    </div>

                    <!-- Marketing & Sales -->
                    <div
                        class="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div class="flex items-start space-x-4 mb-4">
                            <div
                                class="flex-shrink-0 w-12 h-12 bg-[#006688] rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-barlow-extrabold text-gray-900 mb-2">Marketing & Sales</h3>
                                <p class="text-gray-700 mb-4">
                                    Equipping professionals with the tools to attract, convert, and retain customers in
                                    a competitive marketplace.
                                </p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Sales Funnel and Lead Management</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Mastering the Matrix</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Selling in a Crowded Market</span>
                            </div>
                        </div>
                    </div>

                    <!-- Personal and Social Skills -->
                    <div
                        class="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div class="flex items-start space-x-4 mb-4">
                            <div
                                class="flex-shrink-0 w-12 h-12 bg-[#006688] rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-barlow-extrabold text-gray-900 mb-2">Personal and Social Skills
                                </h3>
                                <p class="text-gray-700 mb-4">
                                    Building interpersonal and leadership skills essential for success in modern
                                    workplaces.
                                </p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Entrepreneurship Masterclass</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Networking and Negotiation</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Conflict Management</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Business Communication</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Emotional Intelligence</span>
                            </div>
                        </div>
                    </div>

                    <!-- Technical and Professional Skills -->
                    <div
                        class="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div class="flex items-start space-x-4 mb-4">
                            <div
                                class="flex-shrink-0 w-12 h-12 bg-[#006688] rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-barlow-extrabold text-gray-900 mb-2">Technical and Professional
                                    Skills</h3>
                                <p class="text-gray-700 mb-4">
                                    Practical learning that strengthens technical competence and business performance.
                                </p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Digital Business</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Accounting and Financial Planning</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Customer Relationship Management (CRM)</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Performance Management</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Risk and Cybersecurity Management</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-[#006688] rounded-full"></div>
                                <span class="text-gray-700 text-sm">Supply Chain Management</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Images and Entrepreneurship Development -->
                <div class="space-y-8">
                    <!-- Images Grid -->
                    <div class="grid grid-cols-2 gap-4">
                        <div class="relative rounded-xl overflow-hidden shadow-lg group">
                            <img src="/assets/img/elevation-training2.jpg" alt="Business Training Session"
                                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60">
                            </div>
                        </div>
                        <div class="relative rounded-xl overflow-hidden shadow-lg group">
                            <img src="/assets/img/elevation-training3.jpg" alt="Professional Skills Development"
                                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60">
                            </div>
                        </div>
                        <div class="relative rounded-xl overflow-hidden shadow-lg group">
                            <img src="/assets/img/elevation-training4.jpg" alt="Team Training Workshop"
                                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60">
                            </div>
                        </div>
                        <div class="relative rounded-xl overflow-hidden shadow-lg group">
                            <img src="/assets/img/elevation-training5.jpg" alt="Entrepreneurship Training"
                                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60">
                            </div>
                        </div>
                    </div>

                    <!-- Entrepreneurship Development -->
                    <div
                        class="bg-gradient-to-br from-[#006688] to-[#004466] rounded-xl p-6 md:p-8 text-white shadow-xl">
                        <div class="flex items-start space-x-4 mb-4">
                            <div
                                class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-barlow-extrabold text-white mb-2">Entrepreneurship Development
                                </h3>
                                <p class="text-white/90 leading-relaxed">
                                    We adopt the Start and Improve Your Business (SIYB) model for our entrepreneurial
                                    training, helping aspiring and established entrepreneurs design, launch, and grow
                                    sustainable ventures.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2 mt-4">
                            <div class="w-3 h-3 bg-white rounded-full"></div>
                            <span class="text-white/90 text-sm font-semibold">Start and Improve Your Business (SIYB)
                                Model</span>
                        </div>
                    </div>

                    <!-- CTA Section -->
                    <div class="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                        <h4 class="font-barlow-extrabold text-gray-900 mb-3 text-lg">Ready to Enhance Your Team's
                            Skills?</h4>
                        <p class="text-gray-700 mb-4 text-sm">
                            Customized training programs tailored to your organization's specific needs.
                        </p>
                        <NuxtLink to="/contact"
                            class="inline-flex items-center justify-center px-6 py-3 bg-[#006688] text-white font-semibold rounded-lg hover:bg-[#004466] transition-all duration-300 hover:scale-105">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                </path>
                            </svg>
                            Request Training Proposal
                        </NuxtLink>
                    </div>
                </div>
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

/* Mobile responsive adjustments */
@media (max-width: 768px) {
    .space-y-8 {
        gap: 2rem;
    }

    .p-6 {
        padding: 1.25rem;
    }

    .h-48 {
        height: 12rem;
    }

    .grid.grid-cols-2 {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
}

@media (max-width: 640px) {
    .grid {
        gap: 2rem;
    }

    .text-xl {
        font-size: 1.25rem;
    }

    .flex.items-start.space-x-4 {
        gap: 1rem;
    }

    .w-12.h-12 {
        width: 3rem;
        height: 3rem;
    }

    .w-12.h-12 svg {
        width: 1.25rem;
        height: 1.25rem;
    }
}

@media (max-width: 480px) {
    .p-6 {
        padding: 1rem;
    }

    .grid.grid-cols-1.sm\\:grid-cols-2 {
        grid-template-columns: 1fr;
    }

    .flex.items-center.space-x-2 {
        gap: 0.5rem;
    }
}
</style>