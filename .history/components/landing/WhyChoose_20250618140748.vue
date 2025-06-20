<template>
    <section class="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Why We're the Go-To Tech Partner for Ambitious Brands
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We work with teams that think ahead, move fast, and build with purpose. Whether it's launching bold
                    new ideas or refining what's already working, we're in it for the long game.
                </p>
                <p class="text-lg text-blue-600 font-medium mt-4">
                    It's why forward-thinking founders and teams don't just choose us; they stick with us.
                </p>
            </div>

            <!-- Main Content Grid -->
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                <!-- Image Side -->
                <div class="order-2 lg:order-1">
                    <div class="relative">
                        <img src="~/assets/img/why-choose-tekfolio.png" alt="Why Choose Tekfolio"
                            class="w-full h-auto rounded-2xl shadow-2xl" />
                        <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"></div>
                        <div class="absolute -top-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-10"></div>
                    </div>
                </div>

                <!-- Features Grid -->
                <div class="order-1 lg:order-2 space-y-8">
                    <div v-for="(feature, index) in features" :key="index"
                        class="group hover:transform hover:scale-105 transition-all duration-300">
                        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <component :is="feature.icon" class="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3
                                        class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {{ feature.title }}
                                    </h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        {{ feature.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Features Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(bottomFeature, index) in bottomFeatures" :key="index" class="text-center group">
                    <div
                        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100 h-full">
                        <div
                            class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <component :is="bottomFeature.icon" class="w-8 h-8 text-white" />
                        </div>
                        <h4
                            class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {{ bottomFeature.title }}
                        </h4>
                        <p class="text-gray-600 leading-relaxed">
                            {{ bottomFeature.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import icons - you can replace these with your preferred icon library
const RocketIcon = () => h('svg', {
    fill: 'currentColor',
    viewBox: '0 0 24 24'
}, h('path', {
    d: 'M12 2L13.09 8.26L22 12L13.09 15.74L12 22L10.91 15.74L2 12L10.91 8.26L12 2Z'
}))

const TargetIcon = () => h('svg', {
    fill: 'currentColor',
    viewBox: '0 0 24 24'
}, h('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
}))

const HeartIcon = () => h('svg', {
    fill: 'currentColor',
    viewBox: '0 0 24 24'
}, h('path', {
    d: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
}))

const UsersIcon = () => h('svg', {
    fill: 'currentColor',
    viewBox: '0 0 24 24'
}, h('path', {
    d: 'M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.997 2.997 0 0 0 17.06 6H16c-.8 0-1.54.37-2.03.97L12 9l-1.97-2.03A2.498 2.498 0 0 0 8 6H6.94c-1.24 0-2.31.75-2.78 1.91L1.5 16H4v6h2v-6h.5L8 14l1.5 2H10v6h2v-6h2v6h2v-6h.5L18 14l1.5 2H20v6h2z'
}))

const TrendingIcon = () => h('svg', {
    fill: 'currentColor',
    viewBox: '0 0 24 24'
}, h('path', {
    d: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z'
}))

const ChatIcon = () => h('svg', {
    fill: 'currentColor',
    viewBox: '0 0 24 24'
}, h('path', {
    d: 'M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z'
}))

const ClockIcon = () => h('svg', {
    fill: 'currentColor',
    viewBox: '0 0 24 24'
}, h('path', {
    d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z'
}))

const ShieldIcon = () => h('svg', {
    fill: 'currentColor',
    viewBox: '0 0 24 24'
}, h('path', {
    d: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'
}))

const features = [
    {
        icon: RocketIcon,
        title: "We Build Fast — Without Breaking Things",
        description: "Speed matters, but quality lasts. From the first commit to launch day, we move fast and ship clean, scalable code you won't need to rebuild in six months."
    },
    {
        icon: TargetIcon,
        title: "Strategy Comes Before Screens",
        description: "We begin with your business goals, users, and long-term vision, not just wireframes. Every decision maps to what actually moves the needle."
    },
    {
        icon: HeartIcon,
        title: "We're Tech-Led, Human-Centered",
        description: "From Nuxt to Flutter and even Vertex AI, we use next-gen tools to craft user-first experiences. It's not just what we build — it's who we build it for."
    },
    {
        icon: UsersIcon,
        title: "A True Partner, Not Just a Vendor",
        description: "We ask better questions, suggest smarter solutions, and stay engaged long after launch. You get a proactive team that thinks ahead with you. Your goals become our shared mission."
    }
]

const bottomFeatures = [
    {
        icon: TrendingIcon,
        title: "We Build for Growth and Change",
        description: "Whether you're launching an MVP or scaling a full product with payments and multi-role access, we design systems that grow with your business."
    },
    {
        icon: ChatIcon,
        title: "Phased, Transparent Development",
        description: "You'll always know what's happening. We break projects into clear stages with honest updates, so there are no surprises."
    },
    {
        icon: ClockIcon,
        title: "On-Time. On-Budget. No Drama.",
        description: "We respect timelines and deliver when promised, without compromising quality or momentum. We simply deliver when we say we will."
    },
    {
        icon: ShieldIcon,
        title: "Future-Ready by Default",
        description: "We don't chase trends. We build with stable, modern tools that adapt as your product and users evolve."
    }
]
</script>

<style scoped>
/* Additional custom styles if needed */
.group:hover .group-hover\\:text-blue-600 {
    transition: color 0.3s ease;
}
</style>