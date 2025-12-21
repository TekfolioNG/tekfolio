<template>
    <section class="py-20 px-6 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-barlow font-bold text-gray-900 dark:text-white mb-8">
                A Partner for Growth
            </h2>

            <div class="space-y-6 mb-12">
                <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    At Syntanium, we do more than deliver projects. We enable progress by staying true to our core
                    values of integrity, excellence, safety, innovation, and responsibility.
                </p>

                <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    These principles guide every step we take as we fuel the facilities that keep industries moving,
                    economies growing, and communities thriving.
                </p>

                <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    Each project reflects our focus on precision and lasting value, ensuring energy continues to flow
                    safely and sustainably into the future.
                </p>
            </div>

            <NuxtLink to="/solutions"
                class="inline-flex items-center px-8 py-4 border border-transparent text-base font-barlow font-medium rounded-md text-white bg-[#fe4135] hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-gray-800">
                Explore Our Solutions
            </NuxtLink>
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