<template>
    <section class="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute inset-0 opacity-5">
            <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <!-- Header Section -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                    Why We're the <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Go-To Tech
                        Partner</span> for Ambitious Brands
                </h2>
                <p class="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                    We work with teams that think ahead, move fast, and build with purpose. Whether it's launching bold
                    new ideas or refining what's already working, we're in it for the long game.
                </p>
                <div class="mt-8 flex justify-center">
                    <div
                        class="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 border border-blue-200">
                        <p class="text-slate-700 font-medium">
                            It's why forward-thinking founders and teams don't just choose us; <strong>they stick with
                                us.</strong>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Benefits Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <!-- Fast Building -->
                <div
                    class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-3xl">🚀</span>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">We Build Fast — Without Breaking Things</h3>
                    <p class="text-slate-600 leading-relaxed">
                        Speed matters, but quality lasts. From the first commit to launch day, we move fast and ship
                        clean, scalable code you won't need to rebuild in six months.
                    </p>
                </div>

                <!-- Strategy First -->
                <div
                    class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-3xl">🎯</span>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">Strategy Comes Before Screens</h3>
                    <p class="text-slate-600 leading-relaxed">
                        We begin with your business goals, users, and long-term vision, not just wireframes. Every
                        decision maps to what actually moves the needle.
                    </p>
                </div>

                <!-- Tech-Led Human-Centered -->
                <div
                    class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-3xl">🧠</span>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">We're Tech-Led, Human-Centered</h3>
                    <p class="text-slate-600 leading-relaxed">
                        From Nuxt to Flutter and even Vertex AI, we use next-gen tools to craft user-first experiences.
                        It's not just what we build — it's who we build it for.
                    </p>
                </div>

                <!-- True Partner -->
                <div
                    class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-3xl">🤝</span>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">A True Partner, Not Just a Vendor</h3>
                    <p class="text-slate-600 leading-relaxed">
                        We ask better questions, suggest smarter solutions, and stay engaged long after launch. You get
                        a proactive team that thinks ahead with you. Your goals become our shared mission.
                    </p>
                </div>

                <!-- Build for Growth -->
                <div
                    class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-3xl">📈</span>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">We Build for Growth and Change</h3>
                    <p class="text-slate-600 leading-relaxed">
                        Whether you're launching an MVP or scaling a full product with payments and multi-role access,
                        we design systems that grow with your business.
                    </p>
                </div>

                <!-- Phased Development -->
                <div
                    class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-3xl">🛠️</span>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">Phased, Transparent Development</h3>
                    <p class="text-slate-600 leading-relaxed">
                        You'll always know what's happening. We break projects into clear stages with honest updates, so
                        there are no surprises.
                    </p>
                </div>
            </div>

            <!-- Bottom Row - Highlighted Features -->
            <div class="grid md:grid-cols-2 gap-8">
                <!-- On-Time Delivery -->
                <div
                    class="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 text-white hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-3xl">⏱</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">On-Time. On-Budget. No Drama.</h3>
                    <p class="text-slate-300 leading-relaxed mb-4">
                        We respect timelines and deliver when promised, without compromising quality or momentum.
                    </p>
                    <p class="text-white font-semibold">
                        We simply deliver when we say we will.
                    </p>
                </div>

                <!-- Future-Ready -->
                <div
                    class="group bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 text-white hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-3xl">🎯</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Future-Ready by Default</h3>
                    <p class="text-blue-100 leading-relaxed">
                        We don't chase trends. We build with stable, modern tools that adapt as your product and users
                        evolve.
                    </p>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="text-center mt-16">
                <div class="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 max-w-2xl mx-auto">
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">
                        Ready to work with a team that gets it?
                    </h3>
                    <p class="text-slate-600 mb-6">
                        Let's discuss how we can help accelerate your next big idea.
                    </p>
                    <button
                        class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Start Your Project
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Additional custom styles if needed */
.shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
</style>