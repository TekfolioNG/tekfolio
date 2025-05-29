<!-- components/LoadingScreen.vue -->
<template>
    <div v-if="isLoading" class="loading-container">
        <div class="logo-wrapper">
            <img ref="logoSvg" src="@/assets/img/tekfolio-logo-final6.svg" alt="Tekfolio Logo" class="logo-svg" />
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: 'LoadingScreen',
    data() {
        return {
            isLoading: true,
            logoSvgElement: null,
            pathElements: []
        };
    },
    mounted() {
        // Import DrawSVG plugin dynamically (client-side only)
        if (process.client) {
            import('gsap/DrawSVGPlugin').then(module => {
                const DrawSVGPlugin = module.default;
                gsap.registerPlugin(DrawSVGPlugin);

                // Wait for the SVG to load
                this.$nextTick(() => {
                    // Once the image is loaded, we need to get SVG elements
                    this.setupSvgAnimation();
                });
            }).catch(err => {
                console.error('Failed to load DrawSVGPlugin:', err);
                // Fallback: finish loading even if plugin fails
                setTimeout(() => this.completeLoading(), 1500);
            });
        }
    },
    methods: {
        setupSvgAnimation() {
            const img = this.$refs.logoSvg;

            // Create a fetch request to get the actual SVG content
            fetch(img.src)
                .then(response => response.text())
                .then(svgText => {
                    // Replace the img with the actual SVG
                    const logoWrapper = this.$refs.logoSvg.parentNode;
                    logoWrapper.innerHTML = svgText;

                    // Now find all paths in the SVG
                    this.logoSvgElement = logoWrapper.querySelector('svg');
                    this.pathElements = logoWrapper.querySelectorAll('path, line, polyline, rect, circle, ellipse');

                    // Now animate the SVG
                    this.animateLogo();
                })
                .catch(error => {
                    console.error('Error loading SVG:', error);
                    // Fallback if SVG loading fails
                    this.completeLoading();
                });
        },
        animateLogo() {
            if (!this.pathElements.length) {
                this.completeLoading();
                return;
            }

            // Make sure the SVG is visible
            if (this.logoSvgElement) {
                gsap.set(this.logoSvgElement, { opacity: 1 });
            }

            // Initial state - all paths are invisible
            gsap.set(this.pathElements, { drawSVG: "0%" });

            // Create animation timeline
            const tl = gsap.timeline({
                onComplete: () => {
                    // Complete loading after animation
                    setTimeout(() => {
                        this.completeLoading();
                    }, 500); // Give a small delay before hiding
                }
            });

            // Draw each path with a stagger effect
            tl.to(this.pathElements, {
                duration: 1.5,
                drawSVG: "0% 100%",
                ease: "power1.inOut",
                stagger: 0.1 // Stagger the animation of multiple paths
            });

            // Optional: Add a flash or highlight effect at the end
            tl.to(this.pathElements, {
                duration: 0.5,
                stroke: "#1D4ED8", 
                ease: "power2.in"
            }, "-=0.3"); // Overlap with previous animation
        },
        completeLoading() {
            this.isLoading = false;
            this.$emit('loading-complete');
        }
    }
}
</script>

<style scoped>
.loading-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1b1b1d;
    /* Match your site's background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.logo-wrapper {
    width: 200px;
    /* Adjust based on your logo size */
    height: 200px;
    /* Adjust based on your logo size */
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-svg {
    max-width: 100%;
    max-height: 100%;
}

/* These styles will be applied to the SVG once it's loaded */
:deep(svg) {
    opacity: 0;
    /* Start hidden, will be shown by GSAP */
}

:deep(path),
:deep(line),
:deep(polyline),
:deep(rect),
:deep(circle),
:deep(ellipse) {
    fill: none;
    /* Ensure no fill to see the drawing effect */
    stroke: #ffffff;
    /* Initial stroke color */
    stroke-width: 2px;
    /* Adjust as needed */
}
</style>