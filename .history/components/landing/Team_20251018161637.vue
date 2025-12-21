<template>
    <section class="py-4 md:py-6 bg-gray-50 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-2xl lg:text-3xl font-barlow-extrabold text-gray-900 mb-6 tracking-wide">
                    Our Lead Consultants
                </h2>
                <p class="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-normal">
                    Meet our team of experienced consultants and industry experts dedicated to <br>driving your business
                    success.</br>
                </p>
            </div>

            <!-- Faculty Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Gbolahan Shelika -->
                <div
                    class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                    <div class="relative">
                        <img src="/assets/img/gbolahan-shelika.jpg" alt="Gbolahan Shelika - Lead Consultant"
                            class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-barlow-extrabold text-gray-900 mb-2">Gbolahan Shelika</h3>
                        <p class="text-[#006688] font-semibold mb-4">Lead Consultant</p>
                        <p class="text-gray-900 leading-relaxed text-base">
                            Gbolahan holds a B.Sc. in Economics from the University of Ibadan and a Master's in Risk
                            Management from the University of Lagos. He is a Certified Information Systems Auditor, a
                            National Certified BDSP, and a Strategy Consultant with over 20 years of experience. He has
                            worked across banking, pensions, healthcare, manufacturing, technology, and agriculture —
                            helping organizations design and execute strategies that improve performance and efficiency.
                        </p>
                    </div>
                </div>

                <!-- Oluwafunmilola Shelika -->
                <div
                    class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                    <div class="relative">
                        <img src="/assets/img/funm-shelika.jpg"
                            alt="Oluwafunmilola Shelika - Director, Enterprise Development"
                            class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-barlow-extrabold text-gray-900 mb-2">Oluwafunmilola Shelika</h3>
                        <p class="text-[#006688] font-semibold mb-4">Director, Enterprise Development</p>
                        <p class="text-gray-900 leading-relaxed text-base">
                            Oluwafunmilola is a seasoned entrepreneur and leader in the fisheries and aquaculture
                            industry with over seven years of experience. She holds a B.Sc. in Marketing and an MBA from
                            Valencia University, Italy, and has worked across oil and gas, banking, and advertising
                            sectors. Her entrepreneurial ventures in aquaculture reflect her commitment to building
                            sustainable businesses and empowering others through practical, results-driven leadership.
                        </p>
                    </div>
                </div>

                <!-- James Alpheus -->
                <div
                    class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                    <div class="relative">
                        <img src="/assets/img/james-ladipo.png"
                            alt="James Alpheus - Faculty Advisor, Performance and Strategy"
                            class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-barlow-extrabold text-gray-900 mb-2">James Alpheus</h3>
                        <p class="text-[#006688] font-semibold mb-4">Faculty Advisor, Performance and Strategy</p>
                        <p class="text-gray-900 leading-relaxed text-base">
                            James is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), a Certified
                            SAP FICO Consultant, and a Certified First Class Collaborative Application Administrator.
                            With over 28 years of experience, he has advised both public and private sector
                            organizations on financial management, performance optimization, and human capital
                            development. As a Gallup Certified Strengths Coach, he helps businesses build
                            performance-driven cultures and guides entrepreneurs to develop sustainable, high-impact
                            ventures.
                        </p>
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
    .grid {
        gap: 1.5rem;
    }

    .p-6 {
        padding: 1.25rem;
    }

    .h-80 {
        height: 16rem;
    }
}

@media (max-width: 640px) {
    .grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .text-xl {
        font-size: 1.25rem;
    }

    .h-80 {
        height: 14rem;
    }
}

@media (max-width: 480px) {
    .p-6 {
        padding: 1rem;
    }

    .w-20.h-20 {
        width: 4rem;
        height: 4rem;
    }

    .w-20.h-20 svg {
        width: 1.5rem;
        height: 1.5rem;
    }
}
</style>