<template>
    <section class="py-16 md:py-24 bg-gradient-to-br from-blue-50/30 to-white relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-20 right-10 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>

        <div class="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <!-- Section Header -->
            <div class="text-center max-w-4xl mx-auto mb-16 md:mb-20">
                <div class="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                    <div class="w-2 h-2 bg-[#4D7EFF] rounded-full"></div>
                    <span class="text-[#4D7EFF] font-semibold text-sm uppercase tracking-wide">Success Stories</span>
                </div>
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Real Results. <span class="text-[#4D7EFF]">Real Stories.</span>
                </h2>
                <p class="text-lg text-gray-900 leading-relaxed max-w-3xl mx-auto">
                    We measure success by the lives we've helped shape, the stories we've brought to life, and the
                    businesses we've empowered — with measurable outcomes and lasting impact.
                </p>
            </div>

            <!-- Stats Grid -->
            <div class="mb-20">
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                    By the <span class="text-[#4D7EFF]">Numbers</span>
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    <div
                        class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group">
                        <div
                            class="text-5xl md:text-6xl font-bold text-[#4D7EFF] mb-3 group-hover:scale-110 transition-transform duration-500">
                            80+
                        </div>
                        <div class="text-lg font-semibold text-gray-900">Books Published</div>
                    </div>

                    <div
                        class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group">
                        <div
                            class="text-5xl md:text-6xl font-bold text-[#4D7EFF] mb-3 group-hover:scale-110 transition-transform duration-500">
                            70+
                        </div>
                        <div class="text-lg font-semibold text-gray-900">Ghostwriting Projects</div>
                    </div>

                    <div
                        class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group">
                        <div
                            class="text-5xl md:text-6xl font-bold text-[#4D7EFF] mb-3 group-hover:scale-110 transition-transform duration-500">
                            500+
                        </div>
                        <div class="text-lg font-semibold text-gray-900">Clarity Sessions Facilitated</div>
                    </div>

                    <div
                        class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group">
                        <div
                            class="text-5xl md:text-6xl font-bold text-[#4D7EFF] mb-3 group-hover:scale-110 transition-transform duration-500">
                            25+
                        </div>
                        <div class="text-lg font-semibold text-gray-900">Authors Supported</div>
                    </div>

                    <div
                        class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group">
                        <div
                            class="text-5xl md:text-6xl font-bold text-[#4D7EFF] mb-3 group-hover:scale-110 transition-transform duration-500">
                            50+
                        </div>
                        <div class="text-lg font-semibold text-gray-900">Winning Business Proposals & Profiles</div>
                    </div>

                    <div
                        class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group">
                        <div
                            class="text-5xl md:text-6xl font-bold text-[#4D7EFF] mb-3 group-hover:scale-110 transition-transform duration-500">
                            500+
                        </div>
                        <div class="text-lg font-semibold text-gray-900">Employees Trained Across Industries</div>
                    </div>
                </div>
            </div>

            <!-- Testimonials Section -->
            <div class="max-w-6xl mx-auto">
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                    What Our <span class="text-[#4D7EFF]">Clients Say</span>
                </h3>

                <!-- Testimonial Carousel -->
                <div class="relative">
                    <!-- Navigation Buttons -->
                    <button @click="previousTestimonial"
                        class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4D7EFF] hover:text-white text-gray-700 z-10 border border-blue-100">
                        <ChevronLeft class="w-6 h-6" />
                    </button>

                    <button @click="nextTestimonial"
                        class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4D7EFF] hover:text-white text-gray-700 z-10 border border-blue-100">
                        <ChevronRight class="w-6 h-6" />
                    </button>

                    <!-- Carousel Container -->
                    <div class="overflow-hidden">
                        <div class="transition-transform duration-500 ease-out"
                            :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                            <div class="flex">
                                <div v-for="(testimonial, index) in testimonials" :key="index"
                                    class="w-full flex-shrink-0">
                                    <div
                                        class="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100/50 mx-2">
                                        <!-- Quote Icon -->
                                        <div class="mb-6">
                                            <Quote class="w-12 h-12 text-[#4D7EFF]/20" />
                                        </div>

                                        <!-- Testimonial Text -->
                                        <p class="text-xl md:text-2xl text-gray-900 leading-relaxed mb-8 italic">
                                            "{{ testimonial.text }}"
                                        </p>

                                        <!-- Author Info -->
                                        <div class="flex items-center gap-4">
                                            <img :src="testimonial.image" :alt="testimonial.name"
                                                class="w-16 h-16 rounded-full object-cover border-2 border-[#4D7EFF]/20" />
                                            <div>
                                                <div class="font-bold text-gray-900 text-lg">{{ testimonial.name }}
                                                </div>
                                                <div class="text-gray-600">{{ testimonial.title }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Dots Indicator -->
                    <div class="flex justify-center gap-2 mt-8">
                        <button v-for="(testimonial, index) in testimonials" :key="index"
                            @click="goToTestimonial(index)" :class="[
                                'w-3 h-3 rounded-full transition-all duration-300',
                                currentIndex === index ? 'bg-[#4D7EFF] w-8' : 'bg-gray-300 hover:bg-gray-400'
                            ]">
                        </button>
                    </div>

                    <!-- Mobile Navigation -->
                    <div class="flex md:hidden justify-center gap-4 mt-8">
                        <button @click="previousTestimonial"
                            class="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4D7EFF] hover:text-white text-gray-700 border border-blue-100">
                            <ChevronLeft class="w-6 h-6" />
                        </button>
                        <button @click="nextTestimonial"
                            class="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4D7EFF] hover:text-white text-gray-700 border border-blue-100">
                            <ChevronRight class="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ChevronLeft, ChevronRight, Quote } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';
import pix1 from '~/assets/img/pix1.png';
import pix2 from '~/assets/img/pix2.png';
import pix3 from '~/assets/img/pix3.png';
import pix4 from '~/assets/img/pix4.png';
import pix5 from '~/assets/img/pix5.png';

const currentIndex = ref(0);

const testimonials = [
    {
        text: "Litera-Forge helped me turn my scattered ideas into a published book I'm proud of. Their process was seamless and empowering.",
        name: "Tolu A.",
        title: "Author & Entrepreneur",
        image: pix1
    },
    {
        text: "The clarity session gave me direction I didn't know I needed. I left with a roadmap and renewed confidence.",
        name: "Chinedu O.",
        title: "Startup Founder",
        image: pix2
    },
    {
        text: "Our team productivity jumped after the training. The sessions were practical, engaging, and immediately applicable.",
        name: "Ada Obi",
        title: "HR Manager",
        image: pix3
    },
    {
        text: "I finally got my business proposal right—and it landed us our biggest client yet.",
        name: "Femi K.",
        title: "Consultant",
        image: pix4
    },
    {
        text: "Litera-Forge's ghostwriting service captured my voice perfectly. I now have a book that positions me as an authority in my field without the stress of writing it myself.",
        name: "Sarah K.",
        title: "Thought Leader",
        image: pix5
    }
];

const nextTestimonial = () => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const previousTestimonial = () => {
    currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};

const goToTestimonial = (index) => {
    currentIndex.value = index;
};

// Auto-advance carousel
let intervalId;
onMounted(() => {
    intervalId = setInterval(() => {
        nextTestimonial();
    }, 5000);
});

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});
</script>

<style scoped>
/* Custom smooth transitions */
.transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>