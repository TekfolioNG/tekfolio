<template>
    <section class="py-16 md:py-24 bg-gradient-to-br from-blue-50/30 to-white relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-20 right-10 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>

        <div class="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <!-- Desktop Layout: Two Columns -->
            <div class="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 items-start">
                <!-- Left Column: Stats -->
                <div class="mb-16 lg:mb-0">
                    <!-- Section Header -->
                    <div class="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 mb-12">
                        <div class="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                            <div class="w-2 h-2 bg-[#4D7EFF] rounded-full"></div>
                            <span class="text-[#4D7EFF] font-semibold text-sm uppercase tracking-wide">Success
                                Stories</span>
                        </div>
                        <h2
                            class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                            Real Results. <span class="text-[#4D7EFF]">Real Stories.</span>
                        </h2>
                        <p class="text-base md:text-lg text-gray-900 leading-relaxed">
                            We measure success by the lives we've helped shape, the stories we've brought to life, and
                            the
                            businesses we've empowered — with measurable outcomes and lasting impact.
                        </p>
                    </div>

                    <!-- Stats Grid -->
                    <div>
                        <h3
                            class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center lg:text-left mb-8 lg:mb-10">
                            By the <span class="text-[#4D7EFF]">Numbers</span>
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto lg:mx-0">
                            <!-- Book Published -->
                            <div
                                class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group text-center lg:text-left">
                                <div class="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                    <BookOpen class="w-6 h-6 text-[#4D7EFF]" />
                                    <div
                                        class="text-2xl md:text-3xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                        {{ animatedStats.books }}+
                                    </div>
                                </div>
                                <div class="text-sm md:text-base font-semibold text-gray-900">Books Published</div>
                            </div>

                            <!-- Ghostwriting Projects -->
                            <div
                                class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group text-center lg:text-left">
                                <div class="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                    <PenTool class="w-6 h-6 text-[#4D7EFF]" />
                                    <div
                                        class="text-2xl md:text-3xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                        {{ animatedStats.ghostwriting }}+
                                    </div>
                                </div>
                                <div class="text-sm md:text-base font-semibold text-gray-900">Ghostwriting Projects
                                </div>
                            </div>

                            <!-- Clarity Sessions -->
                            <div
                                class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group text-center lg:text-left">
                                <div class="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                    <Users class="w-6 h-6 text-[#4D7EFF]" />
                                    <div
                                        class="text-2xl md:text-3xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                        {{ animatedStats.sessions }}+
                                    </div>
                                </div>
                                <div class="text-sm md:text-base font-semibold text-gray-900">Clarity Sessions
                                    Facilitated</div>
                            </div>

                            <!-- Authors Supported -->
                            <div
                                class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group text-center lg:text-left">
                                <div class="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                    <UserCheck class="w-6 h-6 text-[#4D7EFF]" />
                                    <div
                                        class="text-2xl md:text-3xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                        {{ animatedStats.authors }}+
                                    </div>
                                </div>
                                <div class="text-sm md:text-base font-semibold text-gray-900">Authors Supported</div>
                            </div>

                            <!-- Business Proposals -->
                            <div
                                class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group text-center lg:text-left">
                                <div class="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                    <TrendingUp class="w-6 h-6 text-[#4D7EFF]" />
                                    <div
                                        class="text-2xl md:text-3xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                        {{ animatedStats.proposals }}+
                                    </div>
                                </div>
                                <div class="text-sm md:text-base font-semibold text-gray-900">Winning Business Proposals
                                </div>
                            </div>

                            <!-- Employees Trained -->
                            <div
                                class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 hover:border-[#4D7EFF]/20 group text-center lg:text-left">
                                <div class="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                    <GraduationCap class="w-6 h-6 text-[#4D7EFF]" />
                                    <div
                                        class="text-2xl md:text-3xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                        {{ animatedStats.employees }}+
                                    </div>
                                </div>
                                <div class="text-sm md:text-base font-semibold text-gray-900">Employees Trained</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Testimonials -->
                <div>
                    <h3
                        class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center lg:text-left mb-8 lg:mb-10">
                        What Our <span class="text-[#4D7EFF]">Clients Say</span>
                    </h3>

                    <!-- Testimonial Carousel -->
                    <div class="relative">
                        <!-- Navigation Buttons -->
                        <button @click="previousTestimonial"
                            class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4D7EFF] hover:text-white text-gray-700 z-10 border border-blue-100">
                            <ChevronLeft class="w-5 h-5" />
                        </button>

                        <button @click="nextTestimonial"
                            class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4D7EFF] hover:text-white text-gray-700 z-10 border border-blue-100">
                            <ChevronRight class="w-5 h-5" />
                        </button>

                        <!-- Carousel Container -->
                        <div class="overflow-hidden">
                            <div class="transition-transform duration-500 ease-out"
                                :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                                <div class="flex">
                                    <div v-for="(testimonial, index) in testimonials" :key="index"
                                        class="w-full flex-shrink-0">
                                        <div
                                            class="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-blue-100/50 mx-2">
                                            <!-- Quote Icon -->
                                            <div class="mb-4">
                                                <Quote class="w-8 h-8 text-[#4D7EFF]/20" />
                                            </div>

                                            <!-- Testimonial Text -->
                                            <p class="text-base md:text-lg text-gray-900 leading-relaxed mb-6 italic">
                                                "{{ testimonial.text }}"
                                            </p>

                                            <!-- Author Info -->
                                            <div class="flex items-center gap-4">
                                                <img :src="testimonial.image" :alt="testimonial.name"
                                                    class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#4D7EFF]/20" />
                                                <div>
                                                    <div class="font-bold text-gray-900 text-base md:text-lg">{{
                                                        testimonial.name }}
                                                    </div>
                                                    <div class="text-gray-600 text-sm md:text-base">{{ testimonial.title
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
                                    'w-2 h-2 rounded-full transition-all duration-300',
                                    currentIndex === index ? 'bg-[#4D7EFF] w-6' : 'bg-gray-300 hover:bg-gray-400'
                                ]">
                            </button>
                        </div>

                        <!-- Mobile Navigation -->
                        <div class="flex md:hidden justify-center gap-4 mt-6">
                            <button @click="previousTestimonial"
                                class="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4D7EFF] hover:text-white text-gray-700 border border-blue-100">
                                <ChevronLeft class="w-5 h-5" />
                            </button>
                            <button @click="nextTestimonial"
                                class="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4D7EFF] hover:text-white text-gray-700 border border-blue-100">
                                <ChevronRight class="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { BookOpen, ChevronLeft, ChevronRight, GraduationCap, PenTool, Quote, TrendingUp, UserCheck, Users } from 'lucide-vue-next';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import pix1 from '~/assets/img/pix1.png';
import pix2 from '~/assets/img/pix2.png';
import pix3 from '~/assets/img/pix3.png';
import pix4 from '~/assets/img/pix4.png';
import pix5 from '~/assets/img/pix5.png';

const currentIndex = ref(0);

// Animated stats
const animatedStats = reactive({
    books: 0,
    ghostwriting: 0,
    sessions: 0,
    authors: 0,
    proposals: 0,
    employees: 0
});

const finalStats = {
    books: 80,
    ghostwriting: 70,
    sessions: 500,
    authors: 25,
    proposals: 50,
    employees: 500
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

// Animate stats counting
const animateStats = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(finalStats).forEach(stat => {
        let currentStep = 0;
        const targetValue = finalStats[stat];
        const increment = targetValue / steps;

        const timer = setInterval(() => {
            currentStep++;
            animatedStats[stat] = Math.min(
                Math.floor(increment * currentStep),
                targetValue
            );

            if (currentStep >= steps) {
                clearInterval(timer);
            }
        }, stepDuration);
    });
};

// Auto-advance carousel
let intervalId;
onMounted(() => {
    animateStats();
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