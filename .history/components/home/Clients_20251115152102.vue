<template>
    <section class="py-8 md:py-12 bg-gradient-to-br from-blue-50/30 to-white relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-20 right-10 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>

        <div class="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <!-- Section Header with Image -->
            <div class="mb-12 md:mb-16">
                <!-- Badge and Main Heading - Centered on all screens -->
                <div class="text-center mb-8 md:mb-10">
                    <div class="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                        <div class="w-2 h-2 bg-[#4D7EFF] rounded-full"></div>
                        <span class="text-[#4D7EFF] font-semibold text-xs sm:text-sm uppercase tracking-wide">Success
                            Stories</span>
                    </div>
                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Real Results. <span class="text-[#4D7EFF]">Real Stories.</span>
                    </h2>
                </div>

                <!-- Grid Layout: Description Left, Image Right on Desktop -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                    <!-- Description Text - Left on Desktop, Top on Mobile -->
                    <div class="text-center lg:text-left order-1 lg:order-1">
                        <p class="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed italic">
                            We measure success by the lives we've helped shape, the stories we've brought to life, and
                            the
                            businesses we've empowered — with measurable outcomes and lasting impact.
                        </p>
                    </div>

                    <!-- Image - Right on Desktop, Below Text on Mobile -->
                    <div class="order-2 lg:order-2">
                        <div
                            class="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                            <img src="/assets/img/book-author-LiteraForge.jpg" alt="Book Author Success Story"
                                class="w-full h-auto object-cover" />
                            <!-- Overlay gradient for depth -->
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats Section -->
            <div class="mb-16 md:mb-20">
                <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-10">
                    By the <span class="text-[#4D7EFF]">Numbers</span>
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    <!-- Books Published -->
                    <div
                        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#4D7EFF]/20 group text-center">
                        <div class="flex flex-col items-center gap-4 mb-4">
                            <div class="w-20 h-20 bg-[#4D7EFF]/10 rounded-2xl flex items-center justify-center p-4">
                                <img :src="booksIcon" alt="Books Published"
                                    class="w-12 h-12 object-contain filter-blue" />
                            </div>
                            <div
                                class="text-4xl md:text-5xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                {{ animatedStats.booksPublished }}+
                            </div>
                        </div>
                        <div class="text-lg md:text-xl font-semibold text-gray-900">Books Published</div>
                    </div>

                    <!-- Ghostwriting Projects -->
                    <div
                        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#4D7EFF]/20 group text-center">
                        <div class="flex flex-col items-center gap-4 mb-4">
                            <div class="w-20 h-20 bg-[#4D7EFF]/10 rounded-2xl flex items-center justify-center p-4">
                                <img :src="ghostwritingIcon" alt="Ghostwriting Projects"
                                    class="w-12 h-12 object-contain filter-blue" />
                            </div>
                            <div
                                class="text-4xl md:text-5xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                {{ animatedStats.ghostwriting }}+
                            </div>
                        </div>
                        <div class="text-lg md:text-xl font-semibold text-gray-900">Ghostwriting Projects</div>
                    </div>

                    <!-- Clarity Sessions -->
                    <div
                        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#4D7EFF]/20 group text-center">
                        <div class="flex flex-col items-center gap-4 mb-4">
                            <div class="w-20 h-20 bg-[#4D7EFF]/10 rounded-2xl flex items-center justify-center p-4">
                                <img :src="clarityIcon" alt="Clarity Sessions"
                                    class="w-12 h-12 object-contain filter-blue" />
                            </div>
                            <div
                                class="text-4xl md:text-5xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                {{ animatedStats.claritySessions }}+
                            </div>
                        </div>
                        <div class="text-lg md:text-xl font-semibold text-gray-900">Clarity Sessions Facilitated
                        </div>
                    </div>

                    <!-- Authors Supported -->
                    <div
                        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#4D7EFF]/20 group text-center">
                        <div class="flex flex-col items-center gap-4 mb-4">
                            <div class="w-20 h-20 bg-[#4D7EFF]/10 rounded-2xl flex items-center justify-center p-4">
                                <img :src="authorIcon" alt="Authors Supported"
                                    class="w-12 h-12 object-contain filter-blue" />
                            </div>
                            <div
                                class="text-4xl md:text-5xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                {{ animatedStats.authors }}+
                            </div>
                        </div>
                        <div class="text-lg md:text-xl font-semibold text-gray-900">Authors Supported</div>
                    </div>

                    <!-- Business Proposals -->
                    <div
                        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#4D7EFF]/20 group text-center">
                        <div class="flex flex-col items-center gap-4 mb-4">
                            <div class="w-20 h-20 bg-[#4D7EFF]/10 rounded-2xl flex items-center justify-center p-4">
                                <img :src="proposalIcon" alt="Business Proposals"
                                    class="w-12 h-12 object-contain filter-blue" />
                            </div>
                            <div
                                class="text-4xl md:text-5xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                {{ animatedStats.proposals }}+
                            </div>
                        </div>
                        <div class="text-lg md:text-xl font-semibold text-gray-900">Winning Business Proposals
                        </div>
                    </div>

                    <!-- Employees Trained -->
                    <div
                        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#4D7EFF]/20 group text-center">
                        <div class="flex flex-col items-center gap-4 mb-4">
                            <div class="w-20 h-20 bg-[#4D7EFF]/10 rounded-2xl flex items-center justify-center p-4">
                                <img :src="trainingIcon" alt="Employees Trained"
                                    class="w-12 h-12 object-contain filter-blue" />
                            </div>
                            <div
                                class="text-4xl md:text-5xl font-bold text-[#4D7EFF] group-hover:scale-110 transition-transform duration-500">
                                {{ animatedStats.employeesTrained }}+
                            </div>
                        </div>
                        <div class="text-lg md:text-xl font-semibold text-gray-900">Employees Trained</div>
                    </div>
                </div>
            </div>

            <!-- Testimonials Section -->
            <div>
                <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-10">
                    What Our <span class="text-[#4D7EFF]">Clients Say</span>
                </h3>

                <!-- Testimonial Carousel -->
                <div class="relative max-w-4xl lg:max-w-3xl mx-auto">
                    <!-- Carousel Container -->
                    <div class="overflow-hidden">
                        <div class="transition-transform duration-500 ease-out"
                            :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                            <div class="flex">
                                <div v-for="(testimonial, index) in testimonials" :key="index"
                                    class="w-full flex-shrink-0">
                                    <div
                                        class="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                        <div class="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
                                            <!-- Author Info - Right side on desktop -->
                                            <div
                                                class="lg:order-2 flex flex-col items-center text-center lg:w-40 lg:items-end lg:text-right">
                                                <img :src="testimonial.image" :alt="testimonial.name"
                                                    class="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-[#4D7EFF]/20 shadow-lg mb-3" />
                                                <div>
                                                    <div class="font-bold text-gray-900 text-base md:text-lg">
                                                        {{ testimonial.name }}
                                                    </div>
                                                    <div class="text-gray-600 text-sm md:text-base mb-2">
                                                        {{ testimonial.title }}
                                                    </div>
                                                    <div
                                                        class="text-[#4D7EFF] font-semibold text-xs md:text-sm bg-blue-50 px-2 py-1 rounded-md inline-block">
                                                        {{ testimonial.company }}
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Testimonial Content - Left side on desktop -->
                                            <div class="lg:order-1 flex-1 text-center lg:text-left">
                                                <!-- Quote Icon -->
                                                <div class="mb-4 flex lg:block justify-center">
                                                    <Quote class="w-8 h-8 md:w-10 md:h-10 text-[#4D7EFF]/20" />
                                                </div>

                                                <!-- Testimonial Text -->
                                                <p
                                                    class="text-base md:text-lg text-gray-900 leading-relaxed mb-0 italic">
                                                    "{{ testimonial.text }}"
                                                </p>
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
                            class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4D7EFF] hover:text-white text-gray-700 border border-gray-100">
                            <ChevronLeft class="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                        <button @click="nextTestimonial"
                            class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4D7EFF] hover:text-white text-gray-700 border border-gray-100">
                            <ChevronRight class="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ChevronLeft, ChevronRight, Quote } from 'lucide-vue-next';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import pix1 from '~/assets/img/pix1.png';
import pix2 from '~/assets/img/pix2.png';
import pix3 from '~/assets/img/pix3.png';
import pix4 from '~/assets/img/pix4.png';
import pix5 from '~/assets/img/pix5.png';

// Import Flaticon images
import authorIcon from '~/assets/img/author-literaforge.png';
import booksIcon from '~/assets/img/books-literaforge.png';
import clarityIcon from '~/assets/img/clarity-literaforge.png';
import ghostwritingIcon from '~/assets/img/ghostwriting-literaforge.png';
import proposalIcon from '~/assets/img/proposal-literaforge.png';
import trainingIcon from '~/assets/img/training-literaforge.png';

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
        company: "Innovate Africa",
        image: pix1
    },
    {
        text: "The clarity session gave me direction I didn't know I needed. I left with a roadmap and renewed confidence.",
        name: "Chinedu O.",
        title: "Startup Founder",
        company: "TechVille Solutions",
        image: pix2
    },
    {
        text: "Our team productivity jumped after the training. The sessions were practical, engaging, and immediately applicable.",
        name: "Ada Obi",
        title: "HR Manager",
        company: "Global Enterprises Ltd",
        image: pix3
    },
    {
        text: "I finally got my business proposal right—and it landed us our biggest client yet.",
        name: "Femi K.",
        title: "Consultant",
        company: "Strategic Partners Inc",
        image: pix4
    },
    {
        text: "Litera-Forge's ghostwriting service captured my voice perfectly. I now have a book that positions me as an authority in my field without the stress of writing it myself.",
        name: "Sarah K.",
        title: "Thought Leader",
        company: "Leadership Dynamics",
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

.shadow-3xl {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

/* Apply brand color to images using CSS filter */
.filter-blue {
    filter: brightness(0) saturate(100%) invert(33%) sepia(95%) saturate(7481%) hue-rotate(225deg) brightness(102%) contrast(101%);
}
</style>