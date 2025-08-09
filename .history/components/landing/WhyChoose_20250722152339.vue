<template>
    <section
        class="py-16 md:py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full transition-colors duration-300">
        <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Hero Section with Heading and Image -->
            <div class="relative mb-16">
                <div class="text-center mb-12 max-w-3xl mx-auto">
                    <!-- Centralized Heading Content -->
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

            <!-- Service Cards - First Row (2 cards + image) -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12 px-4 sm:px-0">
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:award" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">First-class quality, <br>no
                                        compromises</br></h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Become the
                                        industry standard</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Back Side -->
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


                <!-- Feature Card 2 -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:brain" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Smart software, <br>thoughtfully
                                        built</br></h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">No
                                        buzzwords. Just results.</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Back Side -->
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            Every line of code, every design decision, every recommendation we make has
                                            one goal: solving your real business
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
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:sparkles" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Sophistication is
                                        <br>simple</br>
                                    </h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">True
                                        elegance hides complexity</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Back Side -->
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            We don't overcomplicate things. We create solutions that your
                                            team not only adopts immediately, we ensure the app is interactive and
                                            beautifully simple. Your target users will love it instantly.
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

                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:shield-check" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Security without
                                        <br>the headaches
                                        </br>
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
                            <!-- Back Side -->
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
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

                <!-- Feature Card 5 -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:heart-handshake" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Your vision becomes
                                        <br>our mission</br>
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
                            <!-- Back Side -->
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            When you succeed, we succeed. So, expect us to challenge assumptions,
                                            suggest
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
                <!-- Feature Card 6 -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:rocket" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Tekfolio means digital
                                        <br>transformation</br>
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
                            <!-- Back Side -->
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

                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:trending-up" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">We keep you ahead <br>of your
                                        industry</br>
                                    </h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Lead, don't
                                        follow</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Back Side -->
                            <div class="card-back">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-center">
                                    <div class="flex-grow flex items-center justify-center">
                                        <p
                                            class="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-center">
                                            With every digital asset we develop, configure, or integrate, we add a
                                            competitive edge that makes your brand pop in crowded market. As your tech
                                            partner, we ensure
                                            you're not just keeping pace, but setting the pace.
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

                <!-- Feature Card 7 -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:calendar-check" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Your deadlines <br>are sacred</br>
                                    </h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">When we say
                                        Tuesday, we mean Tuesday</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Back Side -->
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

                <!-- Feature Card 8 -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:handshake" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">We're partners <br>for the long
                                        haul</br></h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Still here
                                        when you need us</p>
                                    <div class="flex-grow"></div>
                                    <div
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link">
                                        <span class="mr-2 font-bold">Here's How</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Back Side -->
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
            </div>
        </div>
    </section>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

.barlow-condensed {
    font-family: 'Barlow Condensed', sans-serif;
}

.icon-bg {
    background-color: #01348F;
    transition: all 0.3s ease;
}

/* Card Flip Container Styles */
.card-container {
    perspective: 1000px;
    height: 100%;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-style: preserve-3d;
    min-height: 320px;
}

.feature-card:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 0.75rem;
}

.card-back {
    transform: rotateY(180deg);
}

/* Base card styles */
.feature-card {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.08);
}

.feature-card>.card-container>.card-inner>div>div {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Enhanced hover effects */
.feature-card:hover {
    transform: translateY(-8px);
    box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(59, 130, 246, 0.3),
        0 0 20px rgba(59, 130, 246, 0.1);
}

.dark .feature-card:hover {
    box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(59, 130, 246, 0.3),
        0 0 20px rgba(59, 130, 246, 0.1);
}

.feature-card:hover .card-front>div,
.feature-card:hover .card-back>div {
    border-color: #3b82f6 !important;
}

.feature-card:hover .icon-bg {
    background-color: #1d8ad8;
    box-shadow: 0 8px 25px rgba(29, 138, 216, 0.3);
}

/* Icon animation */
.feature-icon {
    transition: all 0.3s ease;
    transform-origin: center;
}

.feature-card:hover .feature-icon {
    animation: twinkle 0.6s ease-in-out;
}

@keyframes twinkle {

    0%,
    100% {
        transform: scale(1) rotate(0deg);
        filter: brightness(1);
    }

    25% {
        transform: scale(1.1) rotate(-5deg);
        filter: brightness(1.3);
    }

    50% {
        transform: scale(1.3) rotate(0deg);
        filter: brightness(1.5);
    }

    75% {
        transform: scale(1.1) rotate(5deg);
        filter: brightness(1.3);
    }
}

/* CTA link styles */
.cta-link {
    transition: color 0.3s ease;
}

.cta-arrow {
    transition: transform 0.3s ease;
}

.feature-card:hover .cta-arrow {
    transform: translateX(4px);
}

/* Focus states for accessibility */
.feature-card:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    transform: translateY(-4px);
    box-shadow:
        0 20px 40px -12px rgba(0, 0, 0, 0.2),
        0 0 0 1px rgba(59, 130, 246, 0.5);
}

.dark .feature-card:focus {
    box-shadow:
        0 20px 40px -12px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(59, 130, 246, 0.5);
}

.feature-card:focus .card-inner {
    transform: rotateY(180deg);
}

.feature-card:focus .icon-bg {
    background-color: #1d8ad8;
    box-shadow: 0 8px 25px rgba(29, 138, 216, 0.3);
}

.feature-card:focus .feature-icon {
    animation: twinkle 0.6s ease-in-out;
}

/* Mobile optimizations */
@media (max-width: 1024px) {
    .feature-card:hover {
        transform: translateY(-4px);
        box-shadow:
            0 15px 35px -12px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(59, 130, 246, 0.2),
            0 0 15px rgba(59, 130, 246, 0.08);
    }

    .dark .feature-card:hover {
        box-shadow:
            0 15px 35px -12px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(59, 130, 246, 0.2),
            0 0 15px rgba(59, 130, 246, 0.08);
    }

    .feature-card:active {
        transform: translateY(-6px);
        box-shadow:
            0 20px 40px -12px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(59, 130, 246, 0.3),
            0 0 18px rgba(59, 130, 246, 0.1);
    }

    .dark .feature-card:active {
        box-shadow:
            0 20px 40px -12px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(59, 130, 246, 0.3),
            0 0 18px rgba(59, 130, 246, 0.1);
    }

    .feature-card:active .card-inner {
        transform: rotateY(180deg);
    }

    .feature-card:active .icon-bg {
        background-color: #1d8ad8;
        box-shadow: 0 6px 20px rgba(29, 138, 216, 0.25);
    }

    .feature-card:active .feature-icon {
        animation: twinkle 0.4s ease-in-out;
    }

    .feature-card:active .cta-arrow {
        transform: translateX(4px);
    }
}

/* Smooth transition when cards return to normal state */
.feature-card:not(:hover):not(:focus):not(:active) .card-inner {
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.feature-card:not(:hover):not(:focus):not(:active) {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>