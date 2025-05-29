<!-- components/LoadingScreen.vue -->
<template>
    <div class="loading-screen">
        <div class="loading-content">
            <!-- SVG Logo Container -->
            <div class="logo-container" ref="logoContainer">
                <svg class="logo" viewBox="0 0 200 200" ref="logo">
                    <!-- Simplified logo for demo purposes -->
                    <g ref="logoElements">
                        <rect x="60" y="60" width="80" height="80" rx="5" fill="none" stroke="#333" stroke-width="4"
                            ref="rect" />
                        <circle cx="100" cy="100" r="35" fill="none" stroke="#333" stroke-width="4" ref="circle" />
                        <path d="M70,100 L130,100" stroke="#333" stroke-width="4" stroke-linecap="round" ref="path1" />
                        <path d="M100,70 L100,130" stroke="#333" stroke-width="4" stroke-linecap="round" ref="path2" />
                    </g>
                </svg>
            </div>

            <!-- Loading Text -->
            <div class="loading-text" ref="loadingText">Loading...</div>

            <!-- Progress Bar -->
            <div class="progress-container">
                <div class="progress-bar" ref="progressBar"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['loading-complete'],

    data() {
        return {
            timeline: null,
            progress: 0
        }
    },

    mounted() {
        if (process.client) {
            // Import GSAP dynamically
            Promise.all([
                import('gsap'),
                import('gsap/DrawSVGPlugin')
            ]).then(([gsapModule, DrawSVGModule]) => {
                const gsap = gsapModule.default;
                const DrawSVGPlugin = DrawSVGModule.DrawSVGPlugin;

                // Register plugin
                gsap.registerPlugin(DrawSVGPlugin);

                // Create animation timeline
                this.timeline = gsap.timeline({
                    onComplete: () => this.onLoadingComplete()
                });

                // Logo animation
                this.animateLogo(gsap);

                // Progress bar animation
                this.animateProgress(gsap);

                // Text animation
                this.animateText(gsap);

            }).catch(err => {
                console.error('Error loading GSAP:', err);

                // Fallback to emit completion even if animation fails
                setTimeout(() => {
                    this.onLoadingComplete();
                }, 2000);
            });
        }
    },

    methods: {
        animateLogo(gsap) {
            // Check if references exist
            if (!this.$refs.logo || !this.$refs.logoElements) return;

            // Get all SVG elements
            const elements = this.$refs.logoElements.children;

            // Initial state
            gsap.set(Array.from(elements), {
                drawSVG: "0%",
                opacity: 0
            });

            // Add to timeline
            this.timeline.to(Array.from(elements), {
                duration: 1.2,
                drawSVG: "100%",
                opacity: 1,
                stagger: 0.2,
                ease: "power2.inOut"
            });
        },

        animateProgress(gsap) {
            // Check if reference exists
            if (!this.$refs.progressBar) return;

            // Initial state
            gsap.set(this.$refs.progressBar, { width: "0%" });

            // Add to timeline
            this.timeline.to(this.$refs.progressBar, {
                duration: 2.5,
                width: "100%",
                ease: "power1.inOut"
            }, 0);
        },

        animateText(gsap) {
            // Check if reference exists
            if (!this.$refs.loadingText) return;

            // Initial state
            gsap.set(this.$refs.loadingText, { opacity: 0, y: 20 });

            // Add to timeline
            this.timeline.to(this.$refs.loadingText, {
                duration: 0.8,
                opacity: 1,
                y: 0,
                ease: "back.out(1.7)"
            }, 0.3);
        },

        onLoadingComplete() {
            // Add a slight delay before emitting completion
            setTimeout(() => {
                this.$emit('loading-complete');
            }, 500);
        }
    }
}
</script>

<style scoped>
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo-container {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
}

.logo {
    width: 100%;
    height: 100%;
}

.loading-text {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #333;
    font-weight: 500;
}

.progress-container {
    width: 200px;
    height: 6px;
    background-color: #eee;
    border-radius: 3px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background-color: #1D4ED8;
    width: 0;
}
</style>