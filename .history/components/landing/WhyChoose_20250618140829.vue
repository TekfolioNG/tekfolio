<template>
    <section class="why-choose-section bg-white py-16 md:py-24">
        <div class="container mx-auto px-4 max-w-6xl">
            <div class="flex flex-col md:flex-row gap-12 items-center">
                <!-- Image Column -->
                <div class="md:w-1/2">
                    <img src="~/assets/img/why-choose-tekfolio.png" alt="Tekfolio team collaborating"
                        class="rounded-lg shadow-md w-full h-auto" loading="lazy" />
                </div>

                <!-- Content Column -->
                <div class="md:w-1/2">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why We're the Go-To Tech Partner for Ambitious Brands
                    </h2>

                    <p class="text-lg text-gray-600 mb-8">
                        We work with teams that think ahead, move fast, and build with purpose. Whether it's launching
                        bold new ideas or refining what's already working, we're in it for the long game.
                    </p>

                    <p class="text-lg font-medium text-gray-800 mb-10">
                        It's why forward-thinking founders and teams don't just choose us; they stick with us.
                    </p>

                    <div class="space-y-8">
                        <div v-for="(feature, index) in features" :key="index" class="flex gap-4">
                            <div class="flex-shrink-0 mt-1">
                                <div class="h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center">
                                    <svg class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
                                <p class="text-gray-600">{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const features = [
    {
        title: "We Build Fast — Without Breaking Things",
        description: "Speed matters, but quality lasts. From the first commit to launch day, we move fast and ship clean, scalable code you won't need to rebuild in six months."
    },
    {
        title: "Strategy Comes Before Screens",
        description: "We begin with your business goals, users, and long-term vision, not just wireframes. Every decision maps to what actually moves the needle."
    },
    {
        title: "We're Tech-Led, Human-Centered",
        description: "From Nuxt to Flutter and even Vertex AI, we use next-gen tools to craft user-first experiences. It's not just what we build — it's who we build it for."
    },
    {
        title: "A True Partner, Not Just a Vendor",
        description: "We ask better questions, suggest smarter solutions, and stay engaged long after launch. You get a proactive team that thinks ahead with you."
    },
    {
        title: "We Build for Growth and Change",
        description: "Whether you're launching an MVP or scaling a full product with payments and multi-role access, we design systems that grow with your business."
    },
    {
        title: "Phased, Transparent Development and Communication",
        description: "You'll always know what's happening. We break projects into clear stages with honest updates, so there are no surprises."
    },
    {
        title: "On-Time. On-Budget. No Drama.",
        description: "We respect timelines and deliver when promised, without compromising quality or momentum. We simply deliver when we say we will."
    },
    {
        title: "Future-Ready by Default",
        description: "We don't chase trends. We build with stable, modern tools that adapt as your product and users evolve."
    }
]
</script>

<style scoped>
.why-choose-section {
    background-color: #ffffff;
}

.container {
    max-width: 1200px;
}

.bg-primary-500 {
    background-color: #3b82f6;
    /* Adjust to match your brand color */
}

/* Add smooth hover effects for better interactivity */
.feature-item:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
}
</style>