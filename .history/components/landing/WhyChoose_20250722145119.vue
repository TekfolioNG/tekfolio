<template>
    <section
        class="py-16 md:py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full transition-colors duration-300">
        <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Hero Section with Heading and Image -->
            <div class="relative mb-16">
                <div class="text-center mb-12 max-w-3xl mx-auto">
                    <h2 class="text-3xl md:text-5xl font-bold mb-6 barlow-condensed">
                        Here's why ambitious brands prefer us as their go-to tech partner
                    </h2>
                    <div class="w-24 h-1 bg-[#01348F] mb-6 mx-auto"></div>
                    <p class="text-lg text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
                        We work with teams that think ahead, move fast, and build with purpose. Whether it's
                        launching bold new ideas or refining what's already working, we're in it for the long game.
                    </p>
                    <p class="text-lg text-[#01348F] dark:text-blue-400 font-bold">
                        It's why forward-thinking founders and teams don't just choose us; they stick with us.
                    </p>
                </div>
            </div>

            <!-- Service Cards - First Row (3 cards) -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12 px-4 sm:px-0">
                <!-- Feature Card 1 (Formerly Card 2) -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:award" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">First-class quality, <br>no
                                        compromises</h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Become the
                                        industry standard</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            We don't cut corners. Every project gets the same attention to detail, the
                                            same rigorous testing, the same commitment to excellence. Because your
                                            reputation is on the line, and so is ours.
                                        </p>
                                    </div>
                                    <NuxtLink to="/case-studies"
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link hover:text-blue-600 dark:hover:text-blue-300 mt-auto">
                                        <span class="mr-2 font-bold">Learn More</span>
                                        <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feature Card 2 (Formerly Card 3) -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:brain" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Smart software, <br>thoughtfully
                                        built</h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">No
                                        buzzwords. Just results.</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            We don't overcomplicate things. Every line of code, every design decision,
                                            every recommendation we make has one goal: solving your real business
                                            problems.
                                        </p>
                                    </div>
                                    <NuxtLink to="/case-studies"
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link hover:text-blue-600 dark:hover:text-blue-300 mt-auto">
                                        <span class="mr-2 font-bold">Learn More</span>
                                        <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feature Card 3 (Formerly Card 4) -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:sparkles" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Sophistication is <br>simple</h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">True
                                        elegance hides complexity</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            We create solutions that your team adopts immediately and your users love
                                            instantly.
                                            Behind the scenes might be sophisticated, but what you interact with is
                                            beautifully simple.
                                        </p>
                                    </div>
                                    <NuxtLink to="/case-studies"
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link hover:text-blue-600 dark:hover:text-blue-300 mt-auto">
                                        <span class="mr-2 font-bold">Learn More</span>
                                        <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Service Cards - Second Row (3 cards) -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12 px-4 sm:px-0">
                <!-- Feature Card 4 (Formerly Card 5) -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:shield-check" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Security without <br>the headaches
                                    </h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Protected by
                                        default, not by afterthought</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            Your data, your users, your reputation - we protect them all from day one.
                                            Security isn't a checkbox we tick at the end; it's built into every decision
                                            we make. You sleep well, your users trust you, and compliance just works.
                                        </p>
                                    </div>
                                    <NuxtLink to="/case-studies"
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link hover:text-blue-600 dark:hover:text-blue-300 mt-auto">
                                        <span class="mr-2 font-bold">Learn More</span>
                                        <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feature Card 5 (Formerly Card 6) -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:heart-handshake" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Your vision becomes <br>our mission
                                    </h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">We're
                                        invested, not just hired</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            When you succeed, we succeed. We don't just deliver what you asked for - we
                                            deliver what you actually need. Expect us to challenge assumptions, suggest
                                            better approaches, and think three steps ahead of your competition.
                                        </p>
                                    </div>
                                    <NuxtLink to="/case-studies"
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link hover:text-blue-600 dark:hover:text-blue-300 mt-auto">
                                        <span class="mr-2 font-bold">Learn More</span>
                                        <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feature Card 6 (Formerly Card 7) -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:rocket" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Tekfolio means digital
                                        <br>transformation
                                    </h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Not just
                                        another website or app</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            You're not looking for a digital business card. You're ready to use
                                            technology as a competitive advantage. We help businesses like yours turn
                                            digital transformation from a buzzword into a bottom-line impact.
                                        </p>
                                    </div>
                                    <NuxtLink to="/case-studies"
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link hover:text-blue-600 dark:hover:text-blue-300 mt-auto">
                                        <span class="mr-2 font-bold">Learn More</span>
                                        <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Service Cards - Third Row (3 cards) -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-0">
                <!-- Feature Card 7 (Formerly Card 8) -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:calendar-check" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Your deadlines <br>are sacred</h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">When we say
                                        Tuesday, we mean Tuesday</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            We respect your timeline because we respect your business. No last-minute
                                            surprises, no missed deadlines, no excuses. We plan properly, communicate
                                            clearly, and deliver exactly when promised.
                                        </p>
                                    </div>
                                    <NuxtLink to="/case-studies"
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link hover:text-blue-600 dark:hover:text-blue-300 mt-auto">
                                        <span class="mr-2 font-bold">Learn More</span>
                                        <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feature Card 8 (Formerly Card 9) -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:handshake" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">We're partners <br>for the long haul
                                    </h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Still here
                                        when you need us</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            The relationship doesn't end at launch. Need a quick fix? Want to add a
                                            feature? Scaling up? We're here. Not because we want to upsell you, but
                                            because great partnerships create great results.
                                        </p>
                                    </div>
                                    <NuxtLink to="/case-studies"
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link hover:text-blue-600 dark:hover:text-blue-300 mt-auto">
                                        <span class="mr-2 font-bold">Learn More</span>
                                        <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- New Feature Card 9 -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:trending-up" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">We keep you ahead <br>of your
                                        industry</h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Lead, don't
                                        follow</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            With every digital asset we build, we add a competitive edge that amplifies
                                            your brand.
                                            Our solutions don't just meet industry standards—they redefine them.
                                            With us, you don't just compete—you lead with distinction.
                                        </p>
                                    </div>
                                    <NuxtLink to="/case-studies"
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link hover:text-blue-600 dark:hover:text-blue-300 mt-auto">
                                        <span class="mr-2 font-bold">Learn More</span>
                                        <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Your existing script setup remains the same
</script>

<style scoped>
/* Your existing styles remain unchanged */
</style>