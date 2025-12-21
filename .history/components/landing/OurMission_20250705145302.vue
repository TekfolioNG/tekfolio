<template>
    <!-- Founder's Message Section -->
    <section class="relative bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 overflow-hidden">
        <!-- Background elements -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Video Column -->
                <div class="order-2 lg:order-1">
                    <div
                        class="relative group rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl">
                        <!-- Video element -->
                        <video class="w-full h-auto rounded-2xl" controls poster="~/assets/img/founder-poster.png"
                            autoplay muted loop>
                            <source src="~/assets/video/veraverde-video.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>

                        <!-- Play button overlay (hidden when controls are visible) -->
                        <div
                            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                <Icon name="heroicons:play" class="w-8 h-8 text-primary" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Content Column -->
                <div class="order-1 lg:order-2">
                    <div class="max-w-lg mx-auto lg:mx-0">
                        <!-- Section header -->
                        <div class="flex items-center space-x-3 mb-6">
                            <div class="w-12 h-12 bg-[#406112] rounded-xl flex items-center justify-center">
                                <Icon name="heroicons:light-bulb" class="w-6 h-6 text-white" />
                            </div>
                            <h2
                                class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                A Word from Our Founder
                            </h2>
                        </div>

                        <!-- Content -->
                        <p class="text-lg text-gray-600 leading-relaxed mb-6">
                            Vera Verde exists to solve real problems — from environmental degradation to low farm
                            yields. In this short video, our founder and CEO, Vera-Bill Stevens, shares the vision
                            behind our work and the impact we're striving to achieve.
                        </p>

                        <!-- Optional CTA button -->
                        <div class="flex flex-wrap gap-4 mt-8">
                            <button
                                class="px-6 py-3 bg-[#406112] text-white rounded-lg font-medium hover:bg-[#304a0e] transition-colors duration-300 flex items-center">
                                <Icon name="heroicons:arrow-right" class="w-5 h-5 mr-2" />
                                Watch Full Story
                            </button>
                            <button
                                class="px-6 py-3 bg-white text-[#406112] border border-[#406112] rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center">
                                <Icon name="heroicons:user-group" class="w-5 h-5 mr-2" />
                                Meet Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No JavaScript needed for basic functionality
// If you want to implement custom video controls, you would add that here
</script>

<style scoped>
/* Custom styles specific to this component */
.video-container {
    aspect-ratio: 16/9;
}

/* Smooth transitions for hover effects */
.transition-all {
    transition: all 0.3s ease-in-out;
}

/* Custom shadow for depth */
.shadow-3xl {
    box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.2);
}
</style>