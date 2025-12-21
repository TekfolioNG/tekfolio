<template>
    <section class="py-12 md:py-16 bg-gradient-to-br from-blue-50/30 to-white relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-20 right-10 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>

        <div class="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <!-- Section Header -->
            <div class="text-center max-w-4xl mx-auto mb-12 md:mb-16">
                <div class="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4 md:mb-6">
                    <div class="w-2 h-2 bg-[#4D7EFF] rounded-full"></div>
                    <span class="text-[#4D7EFF] font-semibold text-xs sm:text-sm uppercase tracking-wide">Success
                        Stories</span>
                </div>
                <h2
                    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                    Real Results. <span class="text-[#4D7EFF]">Real Stories.</span>
                </h2>
                <p class="text-base md:text-lg text-gray-900 leading-relaxed max-w-3xl mx-auto">
                    We measure success by the lives we've helped shape, the stories we've brought to life, and the
                    businesses we've empowered — with measurable outcomes and lasting impact.
                </p>
            </div>

            <!-- Desktop Two-Column Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20">
                <!-- Stats Section -->
                <div class="order-2 lg:order-1">
                    <h3
                        class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left mb-8 md:mb-10">
                        By the <span class="text-[#4D7EFF]">Numbers</span>
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div
                            class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group text-center lg:text-left">
                            <div class="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                <div class="w-10 h-10 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center">
                                    <BookOpen class="w-5 h-5 text-[#4D7EFF]" />
                                </div>
                                <div
                                    class="text-3xl md:text-4xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                    {{ animatedStats.booksPublished }}+
                                </div>
                            </div>
                            <div class="text-sm md:text-base font-semibold text-gray-900">Books Published</div>
                        </div>

                        <div
                            class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group text-center lg:text-left">
                            <div class="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                <div class="w-10 h-10 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center">
                                    <PenTool class="w-5 h-5 text-[#4D7EFF]" />
                                </div>
                                <div
                                    class="text-3xl md:text-4xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                    {{ animatedStats.ghostwriting }}+
                                </div>
                            </div>
                            <div class="text-sm md:text-base font-semibold text-gray-900">Ghostwriting Projects</div>
                        </div>

                        <div
                            class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group text-center lg:text-left">
                            <div class="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                <div class="w-10 h-10 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center">
                                    <Lightbulb class="w-5 h-5 text-[#4D7EFF]" />
                                </div>
                                <div
                                    class="text-3xl md:text-4xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                    {{ animatedStats.claritySessions }}+
                                </div>
                            </div>
                            <div class="text-sm md:text-base font-semibold text-gray-900">Clarity Sessions Facilitated
                            </div>
                        </div>

                        <div
                            class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group text-center lg:text-left">
                            <div class="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                <div class="w-10 h-10 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center">
                                    <Users class="w-5 h-5 text-[#4D7EFF]" />
                                </div>
                                <div
                                    class="text-3xl md:text-4xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                    {{ animatedStats.authors }}+
                                </div>
                            </div>
                            <div class="text-sm md:text-base font-semibold text-gray-900">Authors Supported</div>
                        </div>

                        <div
                            class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group text-center lg:text-left">
                            <div class="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                <div class="w-10 h-10 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center">
                                    <FileText class="w-5 h-5 text-[#4D7EFF]" />
                                </div>
                                <div
                                    class="text-3xl md:text-4xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                    {{ animatedStats.proposals }}+
                                </div>
                            </div>
                            <div class="text-sm md:text-base font-semibold text-gray-900">Winning Business Proposals
                            </div>
                        </div>

                        <div
                            class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group text-center lg:text-left">
                            <div class="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                <div class="w-10 h-10 bg-[#4D7EFF]/10 rounded-lg flex items-center justify-center">
                                    <GraduationCap class="w-5 h-5 text-[#4D7EFF]" />
                                </div>
                                <div
                                    class="text-3xl md:text-4xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                    {{ animatedStats.employeesTrained }}+
                                </div>
                            </div>
                            <div class="text-sm md:text-base font-semibold text-gray-900">Employees Trained</div>
                        </div>
                    </div>
                </div>

                <!-- Testimonials Section -->
                <div class="order-1 lg:order-2">
                    <h3
                        class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left mb-8 md:mb-10">
                        What Our <span class="text-[#4D7EFF]">Clients Say</span>
                    </h3>

                    <!-- Testimonial Carousel -->
                    <div class="relative">
                        <!-- Carousel Container -->
                        <div class="overflow-hidden">
                            <div class="transition-transform duration-500 ease-out"
                                :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                                <div class="flex">
                                    <div v-for="(testimonial, index) in testimonials" :key="index"
                                        class="w-full flex-shrink-0">
                                        <div
                                            class="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100/50">
                                            <!-- Quote Icon -->
                                            <div class="mb-4">
                                                <Quote class="w-8 h-8 md:w-10 md:h-10 text-[#4D7EFF]/20" />
                                            </div>

                                            <!-- Testimonial Text -->
                                            <p class="text-base md:text-lg text-gray-900 leading-relaxed mb-6 italic">
                                                "{{ testimonial.text }}"
                                            </p>

                                            <!-- Author Info -->
                                            <div class="flex items-center gap-3 md:gap-4">
                                                <img :src="testimonial.image" :alt="testimonial.name"
                                                    class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#4D7EFF]/20" />
                                                <div>
                                                    <div class="font-bold text-gray-900 text-sm md:text-base">{{
                                                        testimonial.name }}
                                                    </div>
                                                    <div class="text-gray-600 text-xs md:text-sm">{{ testimonial.title
                                                        }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Dots Indicator -->
                        <div class="flex justify-center gap-2 mt-6">
                            <button v-for="(testimonial, index) in testimonials" :key="index"
                                @click="goToTestimonial(index)" :class="[
                                    'w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300',
                                    currentIndex === index ? 'bg-[#4D7EFF] w-6 md:w-8' : 'bg-gray-300 hover:bg-gray-400'
                                ]">
                            </button>
                        </div>

                        <!-- Navigation Buttons -->
                        <div class="flex justify-center gap-3 mt-6">
                            <button @click="previousTestimonial"
                                class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4D7EFF] hover:text-white text-gray-700 border border-blue-100">
                                <ChevronLeft class="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                            <button @click="nextTestimonial"
                                class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4D7EFF] hover:text-white text-gray-700 border border-blue-100">
                                <ChevronRight class="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import { ChevronLeft, ChevronRight, Quote, BookOpen, PenTool, Lightbulb, Users, FileText, GraduationCap } from 'lucide-vue-next';
import pix1 from '~/assets/img/pix1.png';
import pix2 from '~/assets/img/pix2.png';
import pix3 from '~/assets/img/pix3.png';
import pix4 from '~/assets/img/pix4.png';
import pix5 from '~/assets/img/pix5.png';

const currentIndex = ref(0);

// Stats animation
const animatedStats = reactive({
    booksPublished: 0,
    ghostwriting: 0,
    claritySessions: 0,
    authors: 0,
    proposals: 0,
    employeesTrained: 0
});

const targetStats = {
    booksPublished: 80,
    ghostwriting: 70,
    claritySessions: 500,
    authors: 25,
    proposals: 50,
    employeesTrained: 500
};

const animateValue = (key, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            animatedStats[key] = target;
            clearInterval(timer);
        } else {
            animatedStats[key] = Math.floor(current);
        }
    }, 16);
};

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
    // Animate stats on mount
    Object.keys(targetStats).forEach(key => {
        animateValue(key, targetStats[key]);
    });

    // Start carousel auto-advance
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