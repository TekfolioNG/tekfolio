<!-- pages/test-loading.vue -->
<template>
    <div>
        <h1>Loading Test Page</h1>

        <!-- Check GSAP Installation -->
        <CheckGSAP />

        <!-- Test Loading Screen -->
        <div class="test-section">
            <h2>Test Loading Animation</h2>
            <button @click="showLoading">Show Loading Animation</button>

            <!-- Loading screen will appear here when triggered -->
            <LoadingScreen v-if="isLoading" @loading-complete="isLoading = false" />
        </div>

        <!-- Debug Info -->
        <div class="debug-section">
            <h2>SVG Debug Info</h2>
            <div>
                <button @click="checkSvgFile">Check SVG File</button>
                <div v-if="svgCheckResult">
                    <pre>{{ svgCheckResult }}</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
definePageMeta({
    layout: "landing"
});
import { ref } from 'vue';
import CheckGSAP from '.../components/CheckGSAP.vue';
import LoadingScreen from '.../components/LoadingScreen.vue';

export default {
    components: {
        CheckGSAP,
        LoadingScreen
    },
    setup() {
        const isLoading = ref(false);
        const svgCheckResult = ref('');

        // Function to show loading animation
        const showLoading = () => {
            isLoading.value = true;

            // Auto-hide after 5 seconds (fallback)
            setTimeout(() => {
                isLoading.value = false;
            }, 5000);
        };

        // Function to check SVG file
        const checkSvgFile = async () => {
            if (process.client) {
                try {
                    const response = await fetch('/assets/img/tekfolio-logo-final6.svg');

                    if (!response.ok) {
                        svgCheckResult.value = `Error: SVG file not found (${response.status})`;
                        return;
                    }

                    const svgText = await response.text();
                    const parser = new DOMParser();
                    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');

                    // Count SVG elements
                    const paths = svgDoc.querySelectorAll('path').length;
                    const lines = svgDoc.querySelectorAll('line').length;
                    const polylines = svgDoc.querySelectorAll('polyline').length;
                    const rects = svgDoc.querySelectorAll('rect').length;
                    const circles = svgDoc.querySelectorAll('circle').length;
                    const ellipses = svgDoc.querySelectorAll('ellipse').length;

                    svgCheckResult.value = `SVG Analysis:
  - File found and loaded successfully
  - Size: ${svgText.length} bytes
  - Elements:
    - Paths: ${paths}
    - Lines: ${lines}
    - Polylines: ${polylines}
    - Rectangles: ${rects}
    - Circles: ${circles}
    - Ellipses: ${ellipses}
  - Has Stroke: ${svgText.includes('stroke="') || svgText.includes('stroke:') ? 'Yes' : 'No'}
  - Has Fill: ${svgText.includes('fill="') || svgText.includes('fill:') ? 'Yes' : 'No'}`;
                } catch (err) {
                    svgCheckResult.value = `Error checking SVG file: ${err.message}`;
                    console.error(err);
                }
            }
        };

        return {
            isLoading,
            showLoading,
            checkSvgFile,
            svgCheckResult
        };
    }
};
</script>

<style>
.test-section,
.debug-section {
    margin: 20px 0;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    background-color: #4CAF50;
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

pre {
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    overflow: auto;
    max-height: 300px;
}
</style>