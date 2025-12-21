<template>
    <div class="life-at-syntanium">
        <!-- Hero Section with Image and Overlay -->
        <section class="hero-section">
            <div class="image-container">
                <img src="~/assets/img/gas-pipelines3.jpg" alt="Syntanium Gas Pipelines" class="hero-image" />
                <div class="image-overlay"></div>
                <div class="hero-content">
                    <h1>Life at Syntanium</h1>
                    <p>Syntanium is a workplace where safety comes first, learning never stops, and every contribution
                        drives collective success. We invest in training, mentorship, and growth opportunities that
                        empower our people to achieve their best.</p>
                </div>
            </div>
        </section>

        <!-- Opportunities Section -->
        <section class="opportunities-section">
            <div class="opportunities-container">
                <h2>Opportunities</h2>
                <p>We offer diverse roles across the energy value chain, including:</p>

                <div class="opportunities-grid">
                    <div class="opportunity-column">
                        <ul>
                            <li>Engineering & Technical</li>
                            <li>Field Operations</li>
                            <li>Corporate & Support</li>
                            <li>Project Management</li>
                        </ul>
                    </div>
                    <div class="opportunity-column">
                        <ul>
                            <li>Supply Chain & Logistics</li>
                            <li>Health, Safety & Environment (HSE)</li>
                            <li>Research & Innovation</li>
                            <li>Business Development</li>
                        </ul>
                    </div>
                </div>

                <div class="opportunities-footer">
                    <p class="interested-text">Interested? Submit your application below and take the next step toward
                        building your future with Syntanium.</p>

                    <div class="spontaneous-app">
                        <h3>Spontaneous Applications</h3>
                        <p>Don't see a role that matches your profile? You can still send us a spontaneous application.
                            We're always open to new talent.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'LifeAtSyntanium'
}
</script>

<style scoped>
.life-at-syntanium {
    font-family: 'Arial', sans-serif;
}

/* Hero Section Styles */
.hero-section {
    position: relative;
    width: 100%;
    height: 300px;
}

.image-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%);
}

.hero-content {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    color: white;
    text-align: right;
    max-width: 500px;
}

.hero-content h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: 1rem;
    line-height: 1.6;
}

/* Opportunities Section Styles */
.opportunities-section {
    background-color: #1a202c;
    /* gray-900 */
    color: white;
    padding: 3rem 1rem;
}

.opportunities-container {
    max-width: 1200px;
    margin: 0 auto;
}

.opportunities-container h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.opportunities-container>p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 800px;
}

.opportunities-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2.5rem;
}

.opportunity-column ul {
    list-style: none;
    padding: 0;
}

.opportunity-column li {
    font-size: 1.1rem;
    padding: 0.5rem 0;
    position: relative;
    padding-left: 1.5rem;
}

.opportunity-column li:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #fbbf24;
    /* amber-400 */
}

.opportunities-footer {
    border-top: 1px solid #4a5568;
    padding-top: 2rem;
}

.interested-text {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-align: center;
}

.spontaneous-app {
    background-color: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 8px;
}

.spontaneous-app h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #fbbf24;
    /* amber-400 */
}

/* Medium screens (tablets) */
@media (min-width: 768px) {
    .hero-section {
        height: 450px;
    }

    .hero-content {
        right: 10%;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-content p {
        font-size: 1.1rem;
    }

    .opportunities-grid {
        grid-template-columns: 1fr 1fr;
    }
}

/* Large screens (desktops) */
@media (min-width: 1024px) {
    .hero-section {
        height: 600px;
    }

    .hero-content {
        right: 15%;
    }

    .hero-content h1 {
        font-size: 3rem;
    }

    .hero-content p {
        font-size: 1.2rem;
    }

    .opportunities-container {
        text-align: left;
    }
}
</style>