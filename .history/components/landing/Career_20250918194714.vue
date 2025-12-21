<template>
    <div class="career-page">
        <!-- Hero Image Section -->
        <section class="hero-section">
            <div class="hero-image-container">
                <img src="/career-syntanium2.png" alt="Syntanium Careers" class="hero-image" />
            </div>
        </section>

        <!-- Two Column Content Section -->
        <section class="content-section">
            <div class="container">
                <div class="columns">
                    <div class="text-column">
                        <h2>Why Work With Us</h2>
                        <p>At Syntanium, a career is more than a job. It's an opportunity to grow, innovate, and make a
                            lasting impact. We value people who bring expertise, curiosity, and a commitment to safety
                            and excellence.</p>
                        <p>Our culture fosters <span class="highlight">collaboration</span> and <span
                                class="highlight">innovation</span>, providing our team with the tools and environment
                            they need to succeed. We believe in investing in our employees' growth through continuous
                            learning opportunities and challenging projects.</p>
                        <p>Join us and be part of a team that's shaping the future of technology while maintaining the
                            highest standards of integrity and quality.</p>

                        <div class="benefits">
                            <div class="benefit-item">
                                <div class="benefit-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p>Competitive compensation and benefits</p>
                            </div>
                            <div class="benefit-item">
                                <div class="benefit-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p>Flexible work arrangements</p>
                            </div>
                            <div class="benefit-item">
                                <div class="benefit-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p>Professional development opportunities</p>
                            </div>
                        </div>
                    </div>

                    <div class="image-column">
                        <img src="/career-syntanium.jpg" alt="Syntanium Workplace" class="content-image" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// This is a Nuxt 3 component using <script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');

.career-page {
    font-family: 'Barlow', sans-serif;
    color: #1f2937;
    /* gray-800 */
}

/* Hero Section Styles */
.hero-section {
    width: 100%;
}

.hero-image-container {
    width: 100%;
    height: 85vh;
    /* Increased height as requested */
    overflow: hidden;
    position: relative;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Content Section Styles */
.content-section {
    padding: 5rem 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.columns {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
}

.text-column {
    flex: 1 1 45%;
    min-width: 300px;
    padding: 0 2rem;
    /* Added padding left and right */
}

.image-column {
    flex: 1 1 45%;
    min-width: 300px;
    padding: 0 1rem;
}

.content-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Typography */
h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111827;
    /* gray-900 */
    margin-bottom: 1.5rem;
}

h2 span {
    color: #fe4135;
}

p {
    font-size: 1.25rem;
    /* Increased body text size */
    color: #1f2937;
    /* gray-800 as requested */
    margin-bottom: 1.5rem;
    font-weight: 400;
    line-height: 1.7;
}

.highlight {
    color: #fe4135;
    font-weight: 600;
}

.benefits {
    margin-top: 2rem;
}

.benefit-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.benefit-icon {
    width: 28px;
    height: 28px;
    background-color: #fe4135;
    border-radius: 50%;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.benefit-icon svg {
    color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-image-container {
        height: 60vh;
    }

    .content-section {
        padding: 3rem 0;
    }

    .columns {
        flex-direction: column;
    }

    .text-column {
        order: 1;
        padding: 0 1.5rem;
    }

    .image-column {
        order: 2;
        padding: 0 1rem;
    }

    h2 {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .hero-image-container {
        height: 50vh;
    }

    h2 {
        font-size: 1.75rem;
    }

    p {
        font-size: 1.1rem;
    }

    .text-column {
        padding: 0 1rem;
    }
}
</style>