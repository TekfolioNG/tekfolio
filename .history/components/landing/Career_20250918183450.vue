<template>
    <div class="career-page">
        <!-- Hero Image Section -->
        <section class="hero-section">
            <img src="~/assets/img/career-syntanium2.png" alt="Syntanium Careers" class="hero-image" />
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
                    </div>

                    <div class="image-column">
                        <img src="~/assets/img/career-syntanium.jpg" alt="Syntanium Workplace" class="content-image" />
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
    color: #374151;
    /* gray-700 */
}

/* Hero Section Styles */
.hero-section {
    width: 100%;
    height: 70vh;
    overflow: hidden;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Content Section Styles */
.content-section {
    padding: 4rem 0;
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
}

.image-column {
    flex: 1 1 45%;
    min-width: 300px;
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
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-weight: 400;
}

.highlight {
    color: #fe4135;
    font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-section {
        height: 40vh;
    }

    .content-section {
        padding: 2rem 0;
    }

    h2 {
        font-size: 2rem;
    }

    .columns {
        flex-direction: column;
    }

    .text-column {
        order: 1;
    }

    .image-column {
        order: 2;
    }
}

@media (max-width: 480px) {
    .hero-section {
        height: 30vh;
    }

    h2 {
        font-size: 1.75rem;
    }

    p {
        font-size: 1rem;
    }
}
</style>