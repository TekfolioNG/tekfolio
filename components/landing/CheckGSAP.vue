<!-- components/CheckGSAP.vue -->
<template>
    <div class="gsap-check">
        <h3>GSAP Status: {{ status }}</h3>
        <div class="gsap-test-box" ref="testBox"></div>
        <div v-if="gsapLoaded" class="success-message">
            ✓ GSAP is properly installed and working
        </div>
        <div v-else-if="status === 'Error'" class="error-message">
            ✗ GSAP could not be loaded: {{ errorMessage }}
        </div>
        <div v-else class="loading-message">
            Checking GSAP installation...
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status: 'Checking...',
            gsapLoaded: false,
            errorMessage: '',
            gsapVersion: null
        }
    },
    mounted() {
        this.checkGSAP();
    },
    methods: {
        checkGSAP() {
            // Make sure we're on client-side
            if (process.client) {
                try {
                    // Dynamically import GSAP
                    import('gsap').then(gsapModule => {
                        const gsap = gsapModule.default;

                        // Store the version
                        this.gsapVersion = gsap.version;

                        // Test basic animation
                        gsap.to(this.$refs.testBox, {
                            duration: 1,
                            x: 100,
                            rotation: 360,
                            backgroundColor: '#1D4ED8',
                            yoyo: true,
                            repeat: 1,
                            onComplete: () => {
                                this.status = `GSAP v${this.gsapVersion} Loaded`;
                                this.gsapLoaded = true;
                            }
                        });
                    }).catch(err => {
                        this.status = 'Error';
                        this.errorMessage = err.message;
                        console.error('GSAP loading error:', err);
                    });
                } catch (err) {
                    this.status = 'Error';
                    this.errorMessage = err.message;
                    console.error('GSAP check error:', err);
                }
            }
        }
    }
}
</script>

<style scoped>
.gsap-check {
    margin: 20px 0;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    position: relative;
}

.gsap-test-box {
    width: 50px;
    height: 50px;
    background-color: #3498db;
    margin: 20px 0;
}

.success-message {
    color: #4CAF50;
    font-weight: bold;
    margin-top: 10px;
}

.error-message {
    color: #f44336;
    font-weight: bold;
    margin-top: 10px;
}

.loading-message {
    color: #ff9800;
    font-weight: bold;
    margin-top: 10px;
}
</style>