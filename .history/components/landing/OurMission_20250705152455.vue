<template>
    <!-- Founder's Message Section -->
    <section class="relative bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 overflow-hidden">
        <!-- Background elements -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <div class="max-w-4xl mx-auto text-center mb-12">
                <!-- Section header -->
                <div class="flex items-center justify-center space-x-3 mb-6">
                    <div class="w-12 h-12 bg-[#406112] rounded-xl flex items-center justify-center">
                        <Icon name="heroicons:light-bulb" class="w-6 h-6 text-white" />
                    </div>
                    <h2
                        class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        A Word from Our Founder
                    </h2>
                </div>

                <!-- Content -->
                <p class="text-lg text-gray-600 leading-relaxed">
                    Vera Verde exists to solve real problems — from environmental degradation to low farm yields. In
                    this short video, our founder and CEO, Vera-Bill Stevens, shares the vision behind our work and the
                    impact we're striving to achieve.
                </p>
            </div>

            <!-- Video Container -->
            <div class="max-w-4xl mx-auto mb-12">
                <div
                    class="relative group rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl">
                    <!-- Video element -->
                    <video ref="founderVideo" class="w-full h-auto rounded-2xl" poster="~/assets/img/founder-poster.png"
                        preload="metadata" controls @ended="onVideoEnd">
                        <source src="~/assets/video/veraverde-video.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>

                    <!-- Play button overlay -->
                    <div v-if="!isPlaying" @click="playVideo"
                        class="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer transition-opacity duration-300">
                        <div
                            class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                            <Icon name="heroicons:play" class="w-8 h-8 text-primary" />
                        </div>
                    </div>

                    <!-- End screen overlay -->
                    <div v-if="showEndScreen"
                        class="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6">
                        <img src="~/assets/img/veraverde-video-end.png" alt="Video End"
                            class="max-w-full max-h-[70%] mb-6">
                        <button @click="closeEndScreen"
                            class="px-6 py-3 bg-[#406112] text-white rounded-lg font-medium hover:bg-[#304a0e] transition-colors duration-300 flex items-center">
                            <Icon name="heroicons:x-mark" class="w-5 h-5 mr-2" />
                            Close
                        </button>
                    </div>
                </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap justify-center gap-4">
                <a href="https://www.tiktok.com/@veraverde.charcoal" target="_blank"
                    class="px-6 py-3 bg-[#406112] text-white rounded-lg font-medium hover:bg-[#304a0e] transition-colors duration-300 flex items-center">
                    <Icon name="ri:tiktok-fill" class="w-5 h-5 mr-2" />
                    Follow us on TikTok
                </a>
                <NuxtLink to="/about"
                    class="px-6 py-3 bg-white text-[#406112] border border-[#406112] rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center">
                    <Icon name="heroicons:information-circle" class="w-5 h-5 mr-2" />
                    Learn More
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const founderVideo = ref(null)
const isPlaying = ref(false)
const showEndScreen = ref(false)

const playVideo = () => {
    if (founderVideo.value) {
        founderVideo.value.play()
        isPlaying.value = true
        showEndScreen.value = false
    }
}

const onVideoEnd = () => {
    showEndScreen.value = true
    isPlaying.value = false
}

const closeEndScreen = () => {
    showEndScreen.value = false
    if (founderVideo.value) {
        founderVideo.value.currentTime = 0
    }
}
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