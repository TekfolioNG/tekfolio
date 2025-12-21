<template>
    <section class="relative w-full bg-gradient-to-b from-white to-gray-200 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

            <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

                <!-- Left Side - Text Content -->
                <div class="text-center lg:text-left space-y-6 order-1 lg:col-span-2 lg:pl-8">
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        The Technology Behind Our Work
                    </h2>
                    <p
                        class="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                        We work with the tools trusted by the world's best engineering teams.
                    </p>

                    <!-- Optional: Add a subtle decorative element -->
                    <div class="hidden lg:block pt-8">
                        <div class="w-20 h-1 bg-gradient-to-r from-purple-700 to-blue-600 rounded-full"></div>
                    </div>
                </div>

                <!-- Right Side - Floating Tech Logos -->
                <div class="relative h-[400px] md:h-[350px] lg:h-[400px] order-2 lg:col-span-3 -mt-8 md:mt-0 lg:mt-0 ">
                    <div class="floating-container">

                        <!-- Row 1 -->
                        <div class="logo-float logo-1">
                            <img src="/assets/img/react.png" alt="React" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-2">
                            <img src="/assets/img/nuxt.png" alt="Nuxt.js" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-3">
                            <img src="/assets/img/flutter.png" alt="Flutter" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-4">
                            <img src="/assets/img/ts.png" alt="TypeScript" class="tech-logo" />
                        </div>

                        <!-- Row 2 -->
                        <div class="logo-float logo-5">
                            <img src="/assets/img/node.png" alt="Node.js" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-6">
                            <img src="/assets/img/python.png" alt="Python" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-7">
                            <img src="/assets/img/aws.png" alt="AWS" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-8">
                            <img src="/assets/img/gcp.png" alt="Google Cloud" class="tech-logo" />
                        </div>

                        <!-- Row 3 -->
                        <div class="logo-float logo-9">
                            <img src="/assets/img/tailwind.png" alt="Tailwind CSS" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-10">
                            <img src="/assets/img/docker.png" alt="Docker" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-11">
                            <img src="/assets/img/postgress.png" alt="PostgreSQL" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-12">
                            <img src="/assets/img/js.png" alt="JavaScript" class="tech-logo" />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
// No JavaScript needed - pure CSS animations
</script>

<style scoped>
/* Floating container */
.floating-container {
    position: relative;
    width: 100%;
    height: 100%;
}

/* Tech logo styling - full color always */
.tech-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.4s ease;
}

.logo-float:hover .tech-logo {
    transform: scale(1.1);
}

/* Base floating logo styling */
.logo-float {
    position: absolute;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.4s ease;
}

.logo-float:hover {
    box-shadow: 0 12px 24px rgba(91, 33, 182, 0.15);
    transform: translateY(-4px);
}

/* Individual logo positions and animations - 4 per row layout, much closer spacing */

/* Row 1 */
.logo-1 {
    top: 20%;
    left: 16%;
    animation: floatTiltRight 8s ease-in-out infinite;
}

.logo-2 {
    top: 20%;
    left: 32%;
    animation: floatTiltLeft 9s ease-in-out infinite 0.5s;
}

.logo-3 {
    top: 20%;
    left: 48%;
    animation: floatTiltRight 8.5s ease-in-out infinite 1s;
}

.logo-4 {
    top: 20%;
    right: 23%;
    animation: floatTiltLeft 9.5s ease-in-out infinite 1.5s;
}

/* Row 2 */
.logo-5 {
    top: 48%;
    left: 16%;
    animation: floatTiltRight 9s ease-in-out infinite 0.3s;
}

.logo-6 {
    top: 48%;
    left: 32%;
    animation: floatTiltLeft 8.5s ease-in-out infinite 0.8s;
}

.logo-7 {
    top: 48%;
    left: 48%;
    animation: floatTiltRight 9.2s ease-in-out infinite 1.2s;
}

.logo-8 {
    top: 48%;
    right: 23%;
    animation: floatTiltLeft 8.8s ease-in-out infinite 1.7s;
}

/* Row 3 */
.logo-9 {
    top: 70%;
    left: 16%;
    animation: floatTiltLeft 8.7s ease-in-out infinite 0.6s;
}

.logo-10 {
    top: 70%;
    left: 32%;
    animation: floatTiltRight 9.3s ease-in-out infinite 1.1s;
}

.logo-11 {
    top: 70%;
    left: 48%;
    animation: floatTiltLeft 8.9s ease-in-out infinite 1.6s;
}

.logo-12 {
    top: 70%;
    right: 23%;
    animation: floatTiltRight 9.1s ease-in-out infinite 2s;
}

/* More subtle float and tilt animations */
@keyframes floatTiltRight {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    25% {
        transform: translateY(-8px) rotate(1deg);
    }

    50% {
        transform: translateY(-5px) rotate(0deg);
    }

    75% {
        transform: translateY(-10px) rotate(-0.8deg);
    }
}

@keyframes floatTiltLeft {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    25% {
        transform: translateY(-7px) rotate(-1deg);
    }

    50% {
        transform: translateY(-12px) rotate(0deg);
    }

    75% {
        transform: translateY(-6px) rotate(0.8deg);
    }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .logo-float {
        width: 75px;
        height: 75px;
        padding: 0.875rem;
    }
}

@media (max-width: 768px) {
    .floating-container {
        height: 400px;
    }

    .logo-float {
        width: 70px;
        height: 70px;
        padding: 0.75rem;
    }

    /* Mobile - 4 per row, tighter spacing */
    .logo-1 {
        top: 8%;
        left: 6%;
    }

    .logo-2 {
        top: 8%;
        left: 30%;
    }

    .logo-3 {
        top: 8%;
        left: 54%;
    }

    .logo-4 {
        top: 8%;
        right: 6%;
    }

    .logo-5 {
        top: 30%;
        left: 6%;
    }

    .logo-6 {
        top: 30%;
        left: 30%;
    }

    .logo-7 {
        top: 30%;
        left: 54%;
    }

    .logo-8 {
        top: 30%;
        right: 6%;
    }

    .logo-9 {
        top: 50%;
        left: 6%;
    }

    .logo-10 {
        top: 50%;
        left: 30%;
    }

    .logo-11 {
        top: 50%;
        left: 54%;
    }

    .logo-12 {
        top: 50%;
        right: 6%;
    }
}

@media (max-width: 640px) {
    .logo-float {
        width: 65px;
        height: 65px;
        padding: 0.625rem;
    }
}
</style>