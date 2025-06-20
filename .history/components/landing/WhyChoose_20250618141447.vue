<template>
    <section class="py-16 md:py-24 bg-white dark:bg-gray-900 w-full">
        <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    Why We're the Go-To Tech Partner for Ambitious Brands
                </h2>
                <div class="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
            </div>

            <!-- Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <!-- Image Column -->
                <div class="flex items-center">
                    <img src="~/assets/img/why-choose-tekfolio.png" alt="Tekfolio team collaborating"
                        class="rounded-xl shadow-lg w-full h-auto object-cover transition-all duration-300 hover:shadow-xl dark:shadow-gray-800/50"
                        loading="lazy" />
                </div>

                <!-- Features Column -->
                <div class="space-y-8">
                    <div
                        class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">We Build Fast — Without
                            Breaking Things</h3>
                        <p class="text-gray-600 dark:text-gray-300">Speed matters, but quality lasts. From the first
                            commit to launch day, we move fast and ship clean, scalable code you won't need to rebuild
                            in six months.</p>
                    </div>

                    <div
                        class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Strategy Comes Before Screens
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">We begin with your business goals, users, and
                            long-term vision, not just wireframes. Every decision maps to what actually moves the
                            needle.</p>
                    </div>

                    <div
                        class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">We're Tech-Led, Human-Centered
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">From Nuxt to Flutter and even Vertex AI, we use
                            next-gen tools to craft user-first experiences. It's not just what we build — it's who we
                            build it for.</p>
                    </div>

                    <div
                        class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">A True Partner, Not Just a
                            Vendor</h3>
                        <p class="text-gray-600 dark:text-gray-300">We ask better questions, suggest smarter solutions,
                            and stay engaged long after launch. You get a proactive team that thinks ahead with you.</p>
                    </div>
                </div>
            </div>

            <!-- Additional Features Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <div v-for="(feature, index) in additionalFeatures" :key="index"
                    class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-800/50">
                    <div
                        class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                        <Icon :name="feature.icon" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ feature.title }}</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const additionalFeatures = [
    {
        title: "Future-Ready by Default",
        description: "We build with stable, modern tools that adapt as your product evolves.",
        icon: "lucide:rocket"
    },
    {
        title: "On-Time. On-Budget.",
        description: "We respect timelines and deliver when promised, without compromising quality.",
        icon: "lucide:clock"
    },
    {
        title: "Transparent Process",
        description: "Clear stages with honest updates, so there are no surprises.",
        icon: "lucide:shield-check"
    },
    {
        title: "Built for Growth",
        description: "Systems designed to scale with your business needs.",
        icon: "lucide:trending-up"
    }
]
</script>

<style scoped>
/* Smooth transitions for all interactive elements */
.bg-gray-50,
.bg-gray-800 {
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

/* Hover effects for feature cards */
.bg-gray-50:hover,
.bg-gray-800:hover {
    transform: translateY(-2px);
}

/* Dark mode transitions */
.dark .bg-gray-50 {
    background-color: #1f2937;
}
</style>