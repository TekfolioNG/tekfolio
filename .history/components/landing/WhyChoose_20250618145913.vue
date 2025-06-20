<template>
    <section
        class="py-16 md:py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full transition-colors duration-300">
        <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Why We're the Go-To Tech Partner for Ambitious Brands
                </h2>
                <div class="w-24 h-1 bg-[#01348F] mx-auto mb-6"></div>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                    We work with teams that think ahead, move fast, and build with purpose. Whether it's launching bold
                    new ideas or refining what's already working, we're in it for the long game.
                </p>
                <p class="text-lg text-[#01348F] dark:text-blue-400 font-bold">
                    It's why forward-thinking founders and teams don't just choose us; they stick with us.
                </p>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-0">
                <!-- Feature Card 1 -->
                <div class="group feature-card h-full">
                    <div class="flip-card-inner">
                        <div
                            class="flip-card-front bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <div class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Icon name="lucide:zap" class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-center">We Build Fast — Without Breaking Things</h3>
                            <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Speed meets quality
                            </p>
                            <div class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Here's how</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </div>
                        </div>
                        <div
                            class="flip-card-back bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center">
                                From the first commit to launch day, we move fast and ship clean, scalable code you
                                won't
                                need to rebuild in six months.
                            </p>
                            <NuxtLink to="#"
                                class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Learn more</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Feature Card 2 -->
                <div class="group feature-card h-full">
                    <div class="flip-card-inner">
                        <div
                            class="flip-card-front bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <div class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Icon name="lucide:target" class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-center">Strategy Comes Before Screens</h3>
                            <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Business goals first
                            </p>
                            <div class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Here's how</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </div>
                        </div>
                        <div
                            class="flip-card-back bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center">
                                We begin with your business goals, users, and long-term vision, not just wireframes.
                                Every
                                decision maps to what actually moves the needle.
                            </p>
                            <NuxtLink to="#"
                                class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Learn more</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Image Card -->
                <div class="hidden lg:block feature-card h-full">
                    <div
                        class="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 h-full overflow-hidden">
                        <img src="~/assets/img/why-tekfolio.png" alt="Tekfolio value proposition"
                            class="w-full h-full object-cover dark:hidden" loading="lazy" />
                        <img src="~/assets/img/why-tekfolio.png" alt="Tekfolio value proposition"
                            class="w-full h-full object-cover hidden dark:block" loading="lazy" />
                    </div>
                </div>

                <!-- Feature Card 3 -->
                <div class="group feature-card h-full">
                    <div class="flip-card-inner">
                        <div
                            class="flip-card-front bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <div class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Icon name="lucide:heart" class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-center">We're Tech-Led, Human-Centered</h3>
                            <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Next-gen tools,
                                user-first experiences</p>
                            <div class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Here's how</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </div>
                        </div>
                        <div
                            class="flip-card-back bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center">
                                From Nuxt to Flutter and even Vertex AI, we use cutting-edge tools to craft experiences
                                that
                                put users first.
                            </p>
                            <NuxtLink to="#"
                                class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Learn more</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Feature Card 4 -->
                <div class="group feature-card h-full">
                    <div class="flip-card-inner">
                        <div
                            class="flip-card-front bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <div class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Icon name="lucide:users" class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-center">A True Partner, Not Just a Vendor</h3>
                            <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Your goals become
                                our mission</p>
                            <div class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Here's how</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </div>
                        </div>
                        <div
                            class="flip-card-back bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center">
                                We ask better questions, suggest smarter solutions, and stay engaged long after launch.
                                You
                                get a proactive team that thinks ahead with you.
                            </p>
                            <NuxtLink to="#"
                                class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Learn more</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Feature Card 5 -->
                <div class="group feature-card h-full">
                    <div class="flip-card-inner">
                        <div
                            class="flip-card-front bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <div class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Icon name="lucide:trending-up" class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-center">We Build for Growth and Change</h3>
                            <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Systems that scale
                                with you</p>
                            <div class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Here's how</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </div>
                        </div>
                        <div
                            class="flip-card-back bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center">
                                Whether you're launching an MVP or scaling a full product with payments and multi-role
                                access, we design systems that grow with your business.
                            </p>
                            <NuxtLink to="#"
                                class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Learn more</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Feature Card 6 -->
                <div class="group feature-card h-full">
                    <div class="flip-card-inner">
                        <div
                            class="flip-card-front bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <div class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Icon name="lucide:message-circle" class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-center">Phased, Transparent Development</h3>
                            <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">No surprises, clear
                                communication</p>
                            <div class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Here's how</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </div>
                        </div>
                        <div
                            class="flip-card-back bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center">
                                You'll always know what's happening. We break projects into clear stages with honest
                                updates, so there are no surprises.
                            </p>
                            <NuxtLink to="#"
                                class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Learn more</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Feature Card 7 -->
                <div class="group feature-card h-full">
                    <div class="flip-card-inner">
                        <div
                            class="flip-card-front bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <div class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Icon name="lucide:clock" class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-center">On-Time. On-Budget. No Drama.</h3>
                            <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">We deliver when we
                                say we will</p>
                            <div class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Here's how</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </div>
                        </div>
                        <div
                            class="flip-card-back bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center">
                                We respect timelines and deliver when promised, without compromising quality or
                                momentum.
                                Simply reliable delivery.
                            </p>
                            <NuxtLink to="#"
                                class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Learn more</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Feature Card 8 -->
                <div class="group feature-card h-full">
                    <div class="flip-card-inner">
                        <div
                            class="flip-card-front bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <div class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Icon name="lucide:shield-check" class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-center">Future-Ready by Default</h3>
                            <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Built to last and
                                adapt</p>
                            <div class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Here's how</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </div>
                        </div>
                        <div
                            class="flip-card-back bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center">
                            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center">
                                We don't chase trends. We build with stable, modern tools that adapt as your product and
                                users evolve.
                            </p>
                            <NuxtLink to="#"
                                class="flex items-center justify-center text-[#01348F] dark:text-blue-400 font-bold">
                                <span class="mr-2">Learn more</span>
                                <Icon name="lucide:arrow-right" class="w-5 h-5" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile Image -->
            <div class="lg:hidden mt-12">
                <img src="~/assets/img/why-tekfolio.png" alt="Tekfolio value proposition"
                    class="rounded-xl shadow-lg w-full h-auto dark:hidden" loading="lazy" />
                <img src="~/assets/img/why-tekfolio-dark.png" alt="Tekfolio value proposition"
                    class="rounded-xl shadow-lg w-full h-auto hidden dark:block" loading="lazy" />
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic
</script>

<style scoped>
/* Icon background */
.icon-bg {
    background-color: #01348F;
    transition: all 0.3s ease;
}

/* Flip card container */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
}

/* Flip effect on hover */
.feature-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Flip card sides */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

/* Flip card back side */
.flip-card-back {
    transform: rotateY(180deg);
}

/* Feature Card Base Styles */
.feature-card {
    perspective: 1000px;
    transition: all 0.3s ease;
}

/* Hover states */
.feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.dark .feature-card:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

/* Mobile optimizations */
@media (max-width: 1024px) {
    .feature-card:hover .flip-card-inner {
        transform: none;
    }

    .feature-card:active .flip-card-inner {
        transform: rotateY(180deg);
    }
}
</style>