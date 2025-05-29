// CheckGSAP.vue - Add this file temporarily to your components folder
<template>
    <div class="gsap-test">
        <h2>GSAP Installation Test</h2>
        <div v-show="gsapStatus === 'loading'">Checking GSAP installation...</div>
        <div v-show="gsapStatus === 'success'" class="success">
            ✅ GSAP is installed correctly!
            <div>Version: {{ gsapVersion }}</div>
            <div>Plugins: {{ plugins.join(', ') }}</div>
        </div>
        <div v-show="gsapStatus === 'error'" class="error">
            ❌ GSAP installation issue detected.
            <div>{{ errorMessage }}</div>
        </div>

        <!-- Test SVG for DrawSVG -->
        <div v-if="gsapStatus === 'success'">
            <h3>DrawSVG Test</h3>
            <svg ref="testSvg" width="200" height="100" viewBox="0 0 200 100">
                <path ref="testPath" d="M10,50 Q100,10 190,50" stroke="blue" stroke-width="5" fill="none" />
            </svg>
            <button @click="testDrawSVG">Test DrawSVG Animation</button>
            <div v-if="drawSvgStatus === 'success'" class="success">
                ✅ DrawSVG is working correctly!
            </div>
            <div v-if="drawSvgStatus === 'error'" class="error">
                ❌ DrawSVG not working: {{ drawSvgError }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gsapStatus: 'loading',
            gsapVersion: '',
            plugins: [],
            errorMessage: '',
            drawSvgStatus: 'pending',
            drawSvgError: ''
        }
    },
    mounted() {
        if (process.client) {
            this.checkGSAP();
        }
    },
    methods: {
        checkGSAP() {
            try {
                // Import GSAP
                import('gsap').then(module => {
                    const gsap = module.gsap || module.default;

                    // Check if GSAP is available
                    if (gsap) {
                        this.gsapVersion = gsap.version;
                        this.plugins = Object.keys(gsap.plugins || {});
                        this.gsapStatus = 'success';

                        // Check if DrawSVG is available or can be imported
                        import('gsap/DrawSVGPlugin').then(() => {
                            if (!this.plugins.includes('DrawSVGPlugin')) {
                                this.plugins.push('DrawSVGPlugin (importable)');
                            }
                        }).catch(err => {
                            console.warn('DrawSVG import error:', err);
                            if (!this.plugins.includes('DrawSVGPlugin')) {
                                this.plugins.push('DrawSVGPlugin (not available)');
                            }
                        });
                    } else {
                        this.gsapStatus = 'error';
                        this.errorMessage = 'GSAP object not found';
                    }
                }).catch(err => {
                    this.gsapStatus = 'error';
                    this.errorMessage = `Error importing GSAP: ${err.message}`;
                    console.error(err);
                });
            } catch (err) {
                this.gsapStatus = 'error';
                this.errorMessage = `Unexpected error: ${err.message}`;
                console.error(err);
            }
        },
        testDrawSVG() {
            try {
                // Try to perform a DrawSVG animation
                import('gsap').then(module => {
                    const gsap = module.gsap || module.default;

                    // Try to import DrawSVGPlugin
                    import('gsap/DrawSVGPlugin').then(module => {
                        const DrawSVGPlugin = module.DrawSVGPlugin || module.default;

                        // Register the plugin
                        gsap.registerPlugin(DrawSVGPlugin);

                        // Test animation
                        gsap.set(this.$refs.testPath, { drawSVG: "0%" });
                        gsap.to(this.$refs.testPath, {
                            duration: 2,
                            drawSVG: "0% 100%",
                            ease: "power1.inOut",
                            onComplete: () => {
                                this.drawSvgStatus = 'success';
                            }
                        });
                    }).catch(err => {
                        this.drawSvgStatus = 'error';
                        this.drawSvgError = `Failed to import DrawSVGPlugin: ${err.message}`;
                        console.error(err);
                    });
                });
            } catch (err) {
                this.drawSvgStatus = 'error';
                this.drawSvgError = `Test failed: ${err.message}`;
                console.error(err);
            }
        }
    }
}
</script>

<style scoped>
.gsap-test {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 20px 0;
    max-width: 500px;
}

.success {
    color: green;
    margin: 10px 0;
}

.error {
    color: red;
    margin: 10px 0;
}

button {
    background-color: #1D4ED8    ;
    border: none;
    color: white;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 0;
    cursor: pointer;
    border-radius: 4px;
}
</style>