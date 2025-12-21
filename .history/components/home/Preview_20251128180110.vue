<template>
    <main class="relative w-full overflow-hidden bg-white">
        <!-- New Section - Vision Statement -->
        <section class="bg-white py-32 md:py-20">
            <div class="container mx-auto px-4 md:px-8 lg:px-12">
                <div class="max-w-4xl mx-auto text-center">
                    <!-- Header -->
                    <h2 class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2">
                        Our e-solutions are smart, simple and secure
                    </h2>

                    <!-- Rotating Text with Slide Animation -->
                    <div class="relative h-12 md:h-14 lg:h-16 overflow-hidden mb-3">
                        <div class="rotating-text-container">
                            <p
                                class="rotating-text text-gradient-animated text-2xl md:text-3xl lg:text-4xl font-bold absolute w-full">
                                Custom-built websites that feel effortless
                            </p>
                            <p
                                class="rotating-text text-gradient-animated text-2xl md:text-3xl lg:text-4xl font-bold absolute w-full">
                                Modern apps engineered for growth
                            </p>
                            <p
                                class="rotating-text text-gradient-animated text-2xl md:text-3xl lg:text-4xl font-bold absolute w-full">
                                Cloud solutions that scale as you do
                            </p>
                        </div>
                    </div>

                    <!-- Stats Text -->
                    <p class="text-gray-900 text-sm md:text-base font-medium">
                        Over 40+ professional, A-class digital projects built, deployed, and fully optimized for the
                        cloud
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>


<style scoped>
/* Gradient for animated text */
.text-gradient-animated {
    background: linear-gradient(135deg, #5B21B6 0%, #3B82F6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Rotating Text Animation */
.rotating-text-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.rotating-text {
    left: 0;
    top: 0;
    opacity: 0;
    transform: translateY(100%);
    animation: slideRotate 9s infinite;
}

.rotating-text:nth-child(1) {
    animation-delay: 0s;
}

.rotating-text:nth-child(2) {
    animation-delay: 3s;
}

.rotating-text:nth-child(3) {
    animation-delay: 6s;
}

@keyframes slideRotate {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }

    5% {
        opacity: 1;
        transform: translateY(0);
    }

    27.77% {
        opacity: 1;
        transform: translateY(0);
    }

    33.33% {
        opacity: 0;
        transform: translateY(-100%);
    }

    100% {
        opacity: 0;
        transform: translateY(-100%);
    }
}
</style>