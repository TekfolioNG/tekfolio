<template>
    <div class="career-page">
        <!-- Hero Section with Full Width Image -->
        <section class="hero-section">
            <div class="hero-image-container">
                <img src="/assets/img/career-syntanium2.png" alt="Syntanium Career Opportunities" class="hero-image">
                <div class="hero-overlay"></div>
            </div>
        </section>

        <!-- Why Work With Us Section -->
        <section class="why-work-section">
            <div class="container">
                <div class="content-grid">
                    <!-- Left Column - Text Content -->
                    <div class="text-content">
                        <h2 class="section-title">Why Work With Us</h2>
                        <p class="section-description">
                            At Syntanium, a career is more than a job. It's an opportunity to grow,
                            innovate, and make a lasting impact. We value people who bring expertise,
                            curiosity, and a commitment to safety and excellence.
                        </p>
                    </div>

                    <!-- Right Column - Image -->
                    <div class="image-content">
                        <img src="/assets/img/career-syntanium.jpg" alt="Syntanium Team" class="content-image">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import Google Fonts
useHead({
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: ''
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap'
        }
    ]
})
</script>

<style scoped>
/* Base font family */
* {
    font-family: 'Barlow', sans-serif;
}

.career-page {
    min-height: 100vh;
    background-color: #ffffff;
}

/* Hero Section Styles */
.hero-section {
    position: relative;
    width: 100%;
    height: 60vh;
    min-height: 400px;
    overflow: hidden;
}

.hero-image-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,
            rgba(254, 65, 53, 0.1) 0%,
            rgba(17, 24, 39, 0.3) 100%);
}

/* Why Work With Us Section */
.why-work-section {
    padding: 80px 0;
    background-color: #ffffff;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    min-height: 400px;
}

.text-content {
    padding-right: 20px;
}

.section-title {
    font-size: 3rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 24px;
    line-height: 1.2;
    letter-spacing: -0.02em;
}

.section-description {
    font-size: 1.125rem;
    font-weight: 400;
    color: #374151;
    line-height: 1.75;
    margin: 0;
    text-align: justify;
}

.image-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-image {
    width: 100%;
    height: auto;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.content-image:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 35px -5px rgba(0, 0, 0, 0.15),
        0 15px 15px -5px rgba(0, 0, 0, 0.06);
}

/* Tablet Styles */
@media (max-width: 1024px) {
    .hero-section {
        height: 50vh;
        min-height: 350px;
    }

    .why-work-section {
        padding: 60px 0;
    }

    .content-grid {
        gap: 40px;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .section-description {
        font-size: 1rem;
    }
}

/* Mobile Styles */
@media (max-width: 768px) {
    .hero-section {
        height: 40vh;
        min-height: 280px;
    }

    .why-work-section {
        padding: 40px 0;
    }

    .container {
        padding: 0 16px;
    }

    .content-grid {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }

    .text-content {
        padding-right: 0;
        order: 1;
    }

    .image-content {
        order: 2;
    }

    .section-title {
        font-size: 2.25rem;
        margin-bottom: 20px;
    }

    .section-description {
        font-size: 1rem;
        text-align: left;
    }

    .content-image {
        max-width: 100%;
        width: 90%;
    }
}

/* Small Mobile Styles */
@media (max-width: 480px) {
    .hero-section {
        height: 35vh;
        min-height: 250px;
    }

    .why-work-section {
        padding: 32px 0;
    }

    .container {
        padding: 0 12px;
    }

    .content-grid {
        gap: 32px;
    }

    .section-title {
        font-size: 1.875rem;
        margin-bottom: 16px;
    }

    .section-description {
        font-size: 0.9rem;
        line-height: 1.6;
    }

    .content-image {
        width: 100%;
    }
}

/* High-DPI Display Optimization */
@media (-webkit-min-device-pixel-ratio: 2),
(min-resolution: 192dpi) {

    .hero-image,
    .content-image {
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
    }
}

/* Focus states for accessibility */
.content-image:focus {
    outline: 2px solid #fe4135;
    outline-offset: 4px;
}

/* Print styles */
@media print {
    .hero-section {
        height: 300px;
    }

    .why-work-section {
        padding: 40px 0;
    }

    .content-grid {
        gap: 30px;
    }
}
</style>