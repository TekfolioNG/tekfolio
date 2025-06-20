<template>
    <section
        class="py-16 md:py-24 bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-white w-full transition-colors duration-300">
        <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Hero Section with Heading and Image -->
            <div class="relative mb-16">
                <div class="text-center mb-12">
                    <!-- Centralized Heading Content -->
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">
                        Why We're the Go-To Tech Partner <br>for Ambitious Brands</br>
                    </h2>
                    <div class="w-24 h-1 bg-[#01348F] mb-6 mx-auto"></div>
                    <p class="text-lg text-gray-800 dark:text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto">
                        We work with teams that think ahead, move fast, and build with purpose. Whether it's
                        launching <br>bold new ideas or refining what's already working, we're in it for the long game.
                        </br></p>
                    <p class="text-lg text-[#01348F] dark:text-blue-400 font-bold">
                        It's why forward-thinking founders and teams don't just choose us; <br>they stick with us.
                        </br> </p>
                </div>
            </div>

            <!-- Service Cards - First Row (2 cards + image) -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12 px-4 sm:px-0">
                <!-- Feature Card 1 -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <div
                                    class="bg-white p-4 rounded-xl border border-gray-200 h-full flex items-center justify-center">
                                    <img src="~/assets/img/why-tekfolio.png" alt="Tekfolio value proposition"
                                        class="rounded-lg shadow-lg w-full h-auto object-cover transition-all duration-300"
                                        loading="lazy" />
                                </div>
                            </div>
                            <!-- Back Side -->
                            <div class="card-back">
                                <div
                                    class="bg-gray-800 p-4 rounded-xl border border-gray-600 h-full flex items-center justify-center">
                                    <img src="~/assets/img/tek-logo.png" alt="Tekfolio Logo"
                                        class="rounded-lg shadow-lg w-full h-auto object-cover transition-all duration-300"
                                        loading="lazy" />
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
                                        <Icon name="lucide:zap" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">We Build Fast, <br>Without Breaking
                                        Things</br></h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Speed meets
                                        quality</p>
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
                                            From the first commit to launch day, we move fast and ship clean, scalable
                                            code
                                            you won't
                                            need to rebuild in six months.
                                        </p>
                                    </div>
                                    <NuxtLink to="/services"
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
                                        <Icon name="lucide:target" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Strategy First <br>Before
                                        Screens</br></h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Business
                                        goals first</p>
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
                                            We begin with your business goals, users, and long-term vision, not just
                                            wireframes. Every
                                            decision maps to what actually moves the needle.
                                        </p>
                                    </div>
                                    <NuxtLink to="/strategy"
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
                <!-- Feature Card 3 -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:heart" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">We're Tech-Led,
                                        <br>Human-Centered</br>
                                    </h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Next-gen
                                        tools, user-first experiences</p>
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
                                            From Nuxt to Flutter and even Vertex AI, we use cutting-edge tools to craft
                                            experiences that
                                            put users first.
                                        </p>
                                    </div>
                                    <NuxtLink to="/technology"
                                        class="flex items-center justify-center text-[#01348F] dark:text-blue-400 cta-link hover:text-blue-600 dark:hover:text-blue-300 mt-auto">
                                        <span class="mr-2 font-bold">Learn More</span>
                                        <Icon name="lucide:arrow-right" class="w-5 h-5 cta-arrow" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feature Card 4 -->
                <div class="group feature-card">
                    <div class="card-container">
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                                    <div
                                        class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto icon-container">
                                        <Icon name="lucide:users" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">A True Partner, <br>Not Just a Vendor
                                        </br></h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Your goals
                                        become our mission</p>
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
                                            We ask better questions, suggest smarter solutions, and stay engaged long
                                            after
                                            launch. You
                                            get a proactive team that thinks ahead with you.
                                        </p>
                                    </div>
                                    <NuxtLink to="/partnership"
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
                                        <Icon name="lucide:trending-up" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">We Build for Growth <br>and
                                        Change</br></h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Systems that
                                        scale with you</p>
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
                                            Whether you're launching an MVP or scaling a full product with payments and
                                            multi-role
                                            access, we design systems that grow with your business.
                                        </p>
                                    </div>
                                    <NuxtLink to="/scalability"
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
                                        <Icon name="lucide:message-circle" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Phased, Transparent Development</h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">No
                                        surprises, clear communication</p>
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
                                            You'll always know what's happening. We break projects into clear stages
                                            with
                                            honest
                                            updates, so there are no surprises.
                                        </p>
                                    </div>
                                    <NuxtLink to="/process"
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
                                        <Icon name="lucide:clock" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">On-Time. On-Budget. <br>No
                                        Drama.</br></h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">We deliver
                                        when we say we will</p>
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
                                            We respect timelines and deliver when promised, without compromising quality
                                            or
                                            momentum.
                                            Simply reliable delivery.
                                        </p>
                                    </div>
                                    <NuxtLink to="/reliability"
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
                                        <Icon name="lucide:shield-check" class="w-8 h-8 text-white feature-icon" />
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-center">Future-Ready <br>by Default</br></h3>
                                    <p class="text-[#01348F] dark:text-blue-400 font-bold mb-4 text-center">Built to
                                        last and adapt</p>
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
                                            We don't chase trends. We build with stable, modern tools that adapt as your
                                            product and
                                            users evolve.
                                        </p>
                                    </div>
                                    <NuxtLink to="/future-ready"
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
// Enhanced component with card flip functionality
</script>

<style scoped>
/* Icon background - consistent blue for all screen sizes */
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
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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