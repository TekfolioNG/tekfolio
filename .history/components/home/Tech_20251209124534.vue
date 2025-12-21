<template>
    <section class="relative w-full py-16 md:py-2 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                <!-- Left Side - Text Content -->
                <div class="text-center lg:text-left space-y-6 order-2 lg:order-1">
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
                <div class="relative h-[400px] md:h-[500px] lg:h-[600px] order-1 lg:order-2">
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

                        <!-- Row 2 -->
                        <div class="logo-float logo-4">
                            <img src="/assets/img/ts.png" alt="TypeScript" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-5">
                            <img src="/assets/img/node.png" alt="Node.js" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-6">
                            <img src="/assets/img/python.png" alt="Python" class="tech-logo" />
                        </div>

                        <!-- Row 3 -->
                        <div class="logo-float logo-7">
                            <img src="/assets/img/aws.png" alt="AWS" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-8">
                            <img src="/assets/img/gcp.png" alt="Google Cloud" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-9">
                            <img src="/assets/img/cloudflare.png" alt="Cloudflare" class="tech-logo" />
                        </div>

                        <!-- Row 4 -->
                        <div class="logo-float logo-10">
                            <img src="/assets/img/tailwind.png" alt="Tailwind CSS" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-11">
                            <img src="/assets/img/docker.png" alt="Docker" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-12">
                            <img src="/assets/img/postgress.png" alt="PostgreSQL" class="tech-logo" />
                        </div>
                        <div class="logo-float logo-13">
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

/* Tech logo styling - grayscale with color on hover */
.tech-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: grayscale(100%) opacity(0.7);
    transition: all 0.4s ease;
}

.logo-float:hover .tech-logo {
    filter: grayscale(0%) opacity(1);
    transform: scale(1.1);
}

/* Base floating logo styling */
.logo-float {
    position: absolute;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.4s ease;
}

.logo-float:hover {
    box-shadow: 0 12px 24px rgba(91, 33, 182, 0.15);
    transform: translateY(-4px);
}

/* Individual logo positions and animations */

/* Row 1 - Top */
.logo-1 {
    top: 5%;
    left: 10%;
    animation: floatTiltRight 6s ease-in-out infinite;
}

.logo-2 {
    top: 8%;
    left: 45%;
    animation: floatTiltLeft 7s ease-in-out infinite 0.5s;
}

.logo-3 {
    top: 5%;
    right: 8%;
    animation: floatTiltRight 5.5s ease-in-out infinite 1s;
}

/* Row 2 - Upper Middle */
.logo-4 {
    top: 28%;
    left: 5%;
    animation: floatTiltLeft 6.5s ease-in-out infinite 0.3s;
}

.logo-5 {
    top: 30%;
    left: 38%;
    animation: floatTiltRight 7.5s ease-in-out infinite 0.8s;
}

.logo-6 {
    top: 28%;
    right: 5%;
    animation: floatTiltLeft 6s ease-in-out infinite 1.2s;
}

/* Row 3 - Lower Middle */
.logo-7 {
    top: 52%;
    left: 8%;
    animation: floatTiltRight 7s ease-in-out infinite 0.6s;
}

.logo-8 {
    top: 54%;
    left: 42%;
    animation: floatTiltLeft 6.5s ease-in-out infinite 1.5s;
}

.logo-9 {
    top: 52%;
    right: 8%;
    animation: floatTiltRight 6.8s ease-in-out infinite 0.4s;
}

/* Row 4 - Bottom */
.logo-10 {
    bottom: 8%;
    left: 5%;
    animation: floatTiltLeft 7.2s ease-in-out infinite 1s;
}

.logo-11 {
    bottom: 10%;
    left: 32%;
    animation: floatTiltRight 6.3s ease-in-out infinite 0.7s;
}

.logo-12 {
    bottom: 10%;
    right: 10%;
    animation: floatTiltLeft 6.7s ease-in-out infinite 1.3s;
}

.logo-13 {
    bottom: 5%;
    left: 58%;
    animation: floatTiltRight 7.3s ease-in-out infinite 0.2s;
}

/* Float and tilt animations */
@keyframes floatTiltRight {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    25% {
        transform: translateY(-15px) rotate(3deg);
    }

    50% {
        transform: translateY(-8px) rotate(0deg);
    }

    75% {
        transform: translateY(-18px) rotate(-2deg);
    }
}

@keyframes floatTiltLeft {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    25% {
        transform: translateY(-12px) rotate(-3deg);
    }

    50% {
        transform: translateY(-20px) rotate(0deg);
    }

    75% {
        transform: translateY(-10px) rotate(2deg);
    }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .logo-float {
        width: 60px;
        height: 60px;
        padding: 0.625rem;
    }
}

@media (max-width: 768px) {
    .floating-container {
        height: 400px;
    }

    .logo-float {
        width: 55px;
        height: 55px;
        padding: 0.5rem;
    }

    /* Adjust positions for mobile */
    .logo-1 {
        top: 2%;
        left: 5%;
    }

    .logo-2 {
        top: 2%;
        left: 42%;
    }

    .logo-3 {
        top: 2%;
        right: 5%;
    }

    .logo-4 {
        top: 22%;
        left: 8%;
    }

    .logo-5 {
        top: 24%;
        left: 42%;
    }

    .logo-6 {
        top: 22%;
        right: 8%;
    }

    .logo-7 {
        top: 44%;
        left: 5%;
    }

    .logo-8 {
        top: 46%;
        left: 42%;
    }

    .logo-9 {
        top: 44%;
        right: 5%;
    }

    .logo-10 {
        bottom: 8%;
        left: 8%;
    }

    .logo-11 {
        bottom: 8%;
        left: 42%;
    }

    .logo-12 {
        bottom: 8%;
        right: 8%;
    }

    .logo-13 {
        bottom: 0%;
        left: 25%;
    }
}

@media (max-width: 640px) {
    .logo-float {
        width: 50px;
        height: 50px;
        padding: 0.5rem;
    }
}
</style>