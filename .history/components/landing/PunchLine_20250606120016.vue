<template>
    <section
        class="harmony-section py-24 px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <!-- Content Column -->
                <div class="space-y-8 lg:pr-8">
                    <div class="space-y-6">
                        <h2 class="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            Apps that fit as
                            <span
                                class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                notes in a harmony
                            </span>
                        </h2>

                        <div class="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                Our team collaborates closely with you to build digital tools that drive your business
                                goals and vision and instantly connect with your target customers, whether that be
                                customers or internal teams. The results are constant: Happier users, deeper
                                satisfaction, and stronger loyalty.
                            </p>

                            <p>
                                That's because we're more than just your dev team. We're your growth partners, building
                                e-smart solutions that are technically sound, easy to use, and well-secure to power your
                                success.
                            </p>

                            <p class="text-xl font-medium text-slate-800 italic">
                                Because good software should feel natural to you.
                            </p>
                        </div>
                    </div>

                    <!-- CTA Button -->
                    <div class="pt-6">
                        <button
                            class="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105">
                            <span class="relative z-10">Start Your Journey</span>
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Images Column -->
                <div class="relative">
                    <!-- Background decorative elements -->
                    <div
                        class="absolute -top-12 -right-12 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse">
                    </div>
                    <div class="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-2xl animate-pulse"
                        style="animation-delay: 1s;"></div>

                    <!-- Image Container -->
                    <div class="relative z-10 space-y-8">
                        <!-- First Image -->
                        <div class="image-morph-container group">
                            <div
                                class="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:scale-105">
                                <img src="/assets/img/tekfolio-harmony.jpg" alt="Tekfolio Harmony App Interface"
                                    class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy" />
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                </div>

                                <!-- Floating elements -->
                                <div class="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping">
                                </div>
                                <div class="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                                    style="animation-delay: 0.5s;"></div>
                            </div>
                        </div>

                        <!-- Second Image -->
                        <div class="image-morph-container group ml-12">
                            <div
                                class="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:scale-105">
                                <img src="/assets/img/tekfolio-harmony (2).jpg" alt="Tekfolio Harmony App Features"
                                    class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy" />
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                </div>

                                <!-- Floating elements -->
                                <div class="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse">
                                </div>
                                <div class="absolute bottom-4 right-4 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"
                                    style="animation-delay: 1s;"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Connecting line animation -->
                    <div class="connection-line"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.harmony-section {
    position: relative;
}

.image-morph-container {
    position: relative;
    transform: perspective(1000px);
}

.image-morph-container:hover {
    transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
}

.image-morph-container:nth-child(2):hover {
    transform: perspective(1000px) rotateY(5deg) rotateX(-2deg);
}

.connection-line {
    position: absolute;
    top: 50%;
    left: 20%;
    right: 20%;
    height: 2px;
    background: linear-gradient(90deg,
            transparent,
            rgba(59, 130, 246, 0.3) 25%,
            rgba(147, 51, 234, 0.3) 75%,
            transparent);
    animation: pulse-line 3s ease-in-out infinite;
    z-index: 1;
}

@keyframes pulse-line {

    0%,
    100% {
        opacity: 0.3;
        transform: scaleX(0.8);
    }

    50% {
        opacity: 0.8;
        transform: scaleX(1.2);
    }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .image-morph-container:nth-child(2) {
        margin-left: 2rem;
    }

    .connection-line {
        display: none;
    }
}

@media (max-width: 768px) {
    .image-morph-container:nth-child(2) {
        margin-left: 0;
    }

    .image-morph-container:hover,
    .image-morph-container:nth-child(2):hover {
        transform: perspective(1000px) scale(1.02);
    }
}

/* Enhanced animations */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.image-morph-container:first-child {
    animation: float 6s ease-in-out infinite;
}

.image-morph-container:nth-child(2) {
    animation: float 6s ease-in-out infinite;
    animation-delay: -3s;
}
</style>