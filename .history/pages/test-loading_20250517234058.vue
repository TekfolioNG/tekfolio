<!-- pages/test-loading.vue -->
<template>
    <div class="test-loading-page">
        <h1>Loading Animation Test Page</h1>

        <!-- Controls Section -->
        <div class="test-section">
            <h2>Test Loading Animation</h2>
            <button @click="showLoading" class="primary-btn">Show Loading Animation</button>

            <div class="options">
                <div class="option-group">
                    <label>
                        <input type="checkbox" v-model="showText">
                        Show Loading Text
                    </label>
                </div>

                <div class="option-group">
                    <label>Loading Message:</label>
                    <input type="text" v-model="loadingMessage" class="text-input" />
                </div>

                <div class="option-group">
                    <label>Duration (ms):</label>
                    <input type="number" v-model.number="duration" min="1000" step="500" class="number-input" />
                </div>
            </div>
        </div>

        <!-- Debug Info -->
        <div class="debug-section">
            <h2>SVG Logo Debug</h2>
            <button @click="checkSvgFile" class="secondary-btn">Check Logo SVG File</button>

            <div v-if="svgCheckResult" class="result-box">
                <pre>{{ svgCheckResult }}</pre>
            </div>
        </div>

        <!-- Loading component will appear when triggered -->
        <AppLoading v-if="isLoading" :show-text="showText" :loading-message="loadingMessage" :duration="duration"
            @loading-complete="isLoading = false" />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import AppLoading from '../components/landing/AppLoading.vue';

// Define page meta
definePageMeta({
    layout: "default"
});

export default defineComponent({
    name: 'TestLoadingPage',
    components: {
        AppLoading
    },
    setup() {
        // Loading control state
        const isLoading = ref(false);
        const showText = ref(true);
        const loadingMessage = ref("Loading...");
        const duration = ref(3000);

        // SVG debug state
        const svgCheckResult = ref('');

        // Function to show loading animation
        const showLoading = () => {
            isLoading.value = true;

            // Auto-hide after specified duration (fallback)
            setTimeout(() => {
                isLoading.value = false;
            }, duration.value + 1000); // Add 1 second buffer
        };

        // Function to check SVG file
        const checkSvgFile = async () => {
            if (process.client) {
                try {
                    const response = await fetch('/assets/img/tekfolio-logo-final6.svg');

                    if (!response.ok) {
                        svgCheckResult.value = `Error: Logo SVG file not found (${response.status})`;
                        return;
                    }

                    const svgText = await response.text();
                    const svgSize = new Blob([svgText]).size;
                    const parser = new DOMParser();
                    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');

                    // Check for errors in SVG parsing
                    const parserError = svgDoc.querySelector('parsererror');
                    if (parserError) {
                        svgCheckResult.value = `SVG Parse Error: ${parserError.textContent}`;
                        return;
                    }

                    // Count SVG elements
                    const paths = svgDoc.querySelectorAll('path').length;
                    const lines = svgDoc.querySelectorAll('line').length;
                    const polylines = svgDoc.querySelectorAll('polyline').length;
                    const rects = svgDoc.querySelectorAll('rect').length;
                    const circles = svgDoc.querySelectorAll('circle').length;
                    const ellipses = svgDoc.querySelectorAll('ellipse').length;
                    const groups = svgDoc.querySelectorAll('g').length;

                    // Get SVG dimensions
                    const svgElement = svgDoc.querySelector('svg');
                    const width = svgElement ? svgElement.getAttribute('width') : 'Not specified';
                    const height = svgElement ? svgElement.getAttribute('height') : 'Not specified';
                    const viewBox = svgElement ? svgElement.getAttribute('viewBox') : 'Not specified';

                    svgCheckResult.value = `SVG Logo Analysis:
    - File found and loaded successfully
    - Size: ${svgSize} bytes
    - Dimensions:
      - Width: ${width}
      - Height: ${height}
      - ViewBox: ${viewBox}
    - Elements:
      - Groups: ${groups}
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
            svgCheckResult,
            showText,
            loadingMessage,
            duration
        };
    }
});
</script>

<style scoped>
.test-loading-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    margin-bottom: 30px;
    color: #333;
}

.test-section,
.debug-section {
    margin: 25px 0;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.options {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.option-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

.option-group label {
    min-width: 120px;
    font-weight: 500;
}

.text-input,
.number-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.text-input {
    width: 250px;
}

.number-input {
    width: 120px;
}

.primary-btn {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 12px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 0;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.primary-btn:hover {
    background-color: #45a049;
}

.secondary-btn {
    background-color: #2196F3;
    border: none;
    color: white;
    padding: 12px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 0;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.secondary-btn:hover {
    background-color: #0b7dda;
}

.result-box {
    margin-top: 15px;
}

pre {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 4px;
    overflow: auto;
    max-height: 300px;
    font-family: monospace;
    font-size: 14px;
    line-height: 1.4;
    border: 1px solid #ddd;
}
</style>