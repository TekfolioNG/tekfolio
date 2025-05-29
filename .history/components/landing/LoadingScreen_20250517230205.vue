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
            pathElements: [],
            debug: {
                status: 'initializing',
                svgLoaded: false,
                pluginLoaded: false,
                error: null
            }
        };
    },
    mounted() {
        // Import DrawSVG plugin dynamically (client-side only)
        if (process.client) {
            // Try different import approaches for better compatibility
            Promise.all([
                this.loadSvg(),
                this.loadDrawSvgPlugin()
            ]).then(([svgLoaded, pluginLoaded]) => {
                this.debug.svgLoaded = svgLoaded;
                this.debug.pluginLoaded = pluginLoaded;

                if (svgLoaded && pluginLoaded) {
                    this.debug.status = 'ready';
                    this.animateLogo();
                } else {
                    this.debug.status = 'failed';
                    console.warn('Failed to initialize loading animation:', this.debug);
                    // Fallback: finish loading if something failed
                    setTimeout(() => this.completeLoading(), 1500);
                }
            }).catch(err => {
                this.debug.status = 'error';
                this.debug.error = err.message;
                console.error('Error in loading screen initialization:', err);
                // Fallback: finish loading on error
                setTimeout(() => this.completeLoading(), 1500);
            });
        }
    },
    methods: {
        // Load the DrawSVG plugin
        async loadDrawSvgPlugin() {
            try {
                // Try importing with ES modules syntax
                const module = await import('gsap/DrawSVGPlugin');
                const DrawSVGPlugin = module.DrawSVGPlugin || module.default;

                if (DrawSVGPlugin) {
                    gsap.registerPlugin(DrawSVGPlugin);
                    return true;
                } else {
                    console.warn('DrawSVGPlugin not found in module');
                    return false;
                }
            } catch (err) {
                console.error('Error loading DrawSVGPlugin:', err);
                return false;
            }
        },

        // Load and process the SVG
        async loadSvg() {
            try {
                const img = this.$refs.logoSvg;

                // Handle relative path for Windows compatibility
                let svgUrl = img.src;
                if (svgUrl.startsWith('/')) {
                    // Convert to relative URL for better compatibility
                    svgUrl = svgUrl.substring(1);
                }

                // Fetch the SVG content
                const response = await fetch(svgUrl);

                if (!response.ok) {
                    console.error(`Failed to load SVG: ${response.status} ${response.statusText}`);
                    return false;
                }

                const svgText = await response.text();

                // Replace the img with the actual SVG
                const logoWrapper = this.$refs.logoSvg.parentNode;
                logoWrapper.innerHTML = svgText;

                // Now find all paths in the SVG
                this.logoSvgElement = logoWrapper.querySelector('svg');

                if (!this.logoSvgElement) {
                    console.error('No SVG element found in the loaded content');
                    return false;
                }

                // Get all animatable elements
                this.pathElements = logoWrapper.querySelectorAll('path, line, polyline, rect, circle, ellipse');

                if (this.pathElements.length === 0) {
                    console.warn('No animatable elements found in SVG');
                }

                return true;
            } catch (err) {
                console.error('Error loading SVG:', err);
                return false;
            }
        },

        animateLogo() {
            if (!this.pathElements.length) {
                console.warn('No SVG paths to animate');
                this.completeLoading();
                return;
            }

            // Make sure the SVG is visible
            if (this.logoSvgElement) {
                gsap.set(this.logoSvgElement, { opacity: 1 });
            }

            // Ensure all paths have the right properties for DrawSVG
            Array.from(this.pathElements).forEach(path => {
                // Add stroke if not present (required for DrawSVG)
                if (!path.hasAttribute('stroke')) {
                    path.setAttribute('stroke', '#ffffff');
                }

                // Set stroke-width if not present
                if (!path.hasAttribute('stroke-width')) {
                    path.setAttribute('stroke-width', '2');
                }
            });

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
                stroke: "#1D4ED8", // Change to your brand color
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