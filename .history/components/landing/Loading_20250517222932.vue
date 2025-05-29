<template>
    <div v-if="loading" class="loading-overlay">
        <div class="loading-container">
            <!-- Dynamically load your SVG -->
            <svg ref="logo" class="logo-svg" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
                <g class="draw-me" fill="none" stroke="#1D4ED8
" stroke-width="2">
                    <!-- Use Nuxt img to load your SVG -->
                    <image href="~/assets/img/tekfolio-logo-final6.svg" width="400" height="100" />
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

export default {
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        gsap.registerPlugin(DrawSVGPlugin)

        // Animation timeline
        const tl = gsap.timeline({
            onComplete: () => {
                this.loading = false
                document.body.style.overflow = 'auto' // Re-enable scrolling
            }
        })

        // Initial setup - hide the SVG stroke
        gsap.set(".draw-me", { drawSVG: "0%" })

        // Animate drawing the SVG
        tl.to(".draw-me", {
            duration: 2,
            drawSVG: "100%",
            ease: "power2.inOut"
        })
            .to(".loading-overlay", {
                duration: 0.5,
                opacity: 0,
                ease: "power2.out",
                onComplete: () => {
                    this.loading = false
                }
            }, "+=0.3")
    },
    created() {
        document.body.style.overflow = 'hidden' // Prevent scrolling during loading
    }
}
</script>

<style scoped>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    /* Change to your preferred background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    pointer-events: none;
    /* Allows clicks to pass through when fading out */
}

.loading-container {
    width: 60%;
    max-width: 400px;
}

.logo-svg {
    width: 100%;
    height: auto;
}

/* Ensure SVG paths are visible */
.draw-me {
    visibility: visible;
}
</style>