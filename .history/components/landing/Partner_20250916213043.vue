<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-900 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Left Column - Image -->
                <div class="relative">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-red-500/5 to-gray-900/5 dark:from-red-500/10 dark:to-white/10 rounded-2xl transform rotate-3">
                    </div>
                    <img src="~/assets/img/who-we-are-syntanium.jpg" alt="Syntanium Team"
                        class="relative rounded-2xl shadow-md w-full h-auto" />
                </div>

                <!-- Right Column - Content -->
                <div class="space-y-8">
                    <div>
                        <h2 class="text-4xl md:text-5xl font-barlow font-bold text-gray-900 dark:text-white mb-6">
                            Core Values
                        </h2>
                        <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            At Syntanium, our work is guided by principles that shape how we operate, collaborate, and
                            deliver value across the energy industry.
                        </p>
                    </div>

                    <div class="space-y-6">
                        <!-- Integrity -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 mt-1 w-2 h-2 bg-[#fe4135] rounded-full"></div>
                            <div>
                                <h3 class="font-barlow font-medium text-gray-900 dark:text-white">Integrity</h3>
                                <p class="text-gray-600 dark:text-gray-400 mt-1">We act with transparency and honesty,
                                    building trust with every client, partner, and community.</p>
                            </div>
                        </div>

                        <!-- Excellence -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 mt-1 w-2 h-2 bg-[#fe4135] rounded-full"></div>
                            <div>
                                <h3 class="font-barlow font-medium text-gray-900 dark:text-white">Excellence</h3>
                                <p class="text-gray-600 dark:text-gray-400 mt-1">We hold ourselves to the highest
                                    standards, ensuring reliable outcomes and continuous improvement.</p>
                            </div>
                        </div>

                        <!-- Safety First -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 mt-1 w-2 h-2 bg-[#fe4135] rounded-full"></div>
                            <div>
                                <h3 class="font-barlow font-medium text-gray-900 dark:text-white">Safety First</h3>
                                <p class="text-gray-600 dark:text-gray-400 mt-1">Protecting people, the environment, and
                                    assets is a responsibility we uphold in every project.</p>
                            </div>
                        </div>

                        <!-- Innovation -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 mt-1 w-2 h-2 bg-[#fe4135] rounded-full"></div>
                            <div>
                                <h3 class="font-barlow font-medium text-gray-900 dark:text-white">Innovation</h3>
                                <p class="text-gray-600 dark:text-gray-400 mt-1">We embrace new ideas and smarter
                                    approaches that fuel performance and support industry progress.</p>
                            </div>
                        </div>

                        <!-- Responsibility -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 mt-1 w-2 h-2 bg-[#fe4135] rounded-full"></div>
                            <div>
                                <h3 class="font-barlow font-medium text-gray-900 dark:text-white">Responsibility</h3>
                                <p class="text-gray-600 dark:text-gray-400 mt-1">We are committed to practices that
                                    strengthen both industry and society.</p>
                            </div>
                        </div>
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
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}
</style>