<template>
    <section class="industries-section">
        <div class="container">
            <h2 class="section-title">Industries We Serve</h2>
            <p class="section-description">
                Syntanium supports vital operations across the oil and gas industry,
                delivering solutions that strengthen infrastructure, safeguard assets,
                and ensure reliable energy supply.
            </p>

            <div class="industries-grid">
                <!-- Upstream Card -->
                <div class="industry-card">
                    <div class="card-image" :style="{ backgroundImage: 'url(/assets/img/upstream-syntanium.jpg)' }">
                    </div>
                    <div class="card-overlay">
                        <h3 class="industry-title">Upstream</h3>
                        <p class="industry-description">
                            Exploration and production support with engineering, construction,
                            and maintenance that keep operations safe and productive.
                        </p>
                    </div>
                </div>

                <!-- Midstream Card -->
                <div class="industry-card">
                    <div class="card-image"
                        :style="{ backgroundImage: 'url(/assets/img/gas-pipelines-syntanium2.jpg)' }"></div>
                    <div class="card-overlay">
                        <h3 class="industry-title">Midstream</h3>
                        <p class="industry-description">
                            Pipelines, storage, logistics, and transport systems designed for
                            efficiency, reliability, and long-term performance.
                        </p>
                    </div>
                </div>

                <!-- Downstream Card -->
                <div class="industry-card">
                    <div class="card-image" :style="{ backgroundImage: 'url(/assets/img/downstream-syntanium.jpg)' }">
                    </div>
                    <div class="card-overlay">
                        <h3 class="industry-title">Downstream</h3>
                        <p class="industry-description">
                            Refining, processing, and distribution of energy products to ensure
                            availability across markets and industries.
                        </p>
                    </div>
                </div>

                <!-- Petrochemicals Card -->
                <div class="industry-card">
                    <div class="card-image"
                        :style="{ backgroundImage: 'url(/assets/img/petrochemicals-syntanium.jpg)' }"></div>
                    <div class="card-overlay">
                        <h3 class="industry-title">Petrochemicals</h3>
                        <p class="industry-description">
                            Specialized chemical products and services that improve efficiency,
                            protect assets, and enhance industrial performance.
                        </p>
                    </div>
                </div>

                <!-- Marine Card -->
                <div class="industry-card">
                    <div class="card-image" :style="{ backgroundImage: 'url(/assets/img/marine-syntanium.jpg)' }"></div>
                    <div class="card-overlay">
                        <h3 class="industry-title">Marine</h3>
                        <p class="industry-description">
                            Operations for vessels, cargo handling, hose management, and offshore
                            or coastal facility support.
                        </p>
                    </div>
                </div>

                <!-- Industrial Services Card -->
                <div class="industry-card">
                    <div class="card-image"
                        :style="{ backgroundImage: 'url(/assets/img/industrial-services-syntanium.jpg)' }"></div>
                    <div class="card-overlay">
                        <h3 class="industry-title">Industrial Services</h3>
                        <p class="industry-description">
                            Turnkey construction, asset integrity, and maintenance solutions
                            supporting large-scale energy and processing facilities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No script logic needed for this component
</script>

<style scoped>
.industries-section {
    padding: 4rem 1rem;
    background-color: #f8f9fa;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
}

.section-description {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
}

.industries-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.industry-card {
    position: relative;
    height: 350px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.industry-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease;
}

.industry-card:hover .card-image {
    transform: scale(1.05);
}

.card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), transparent);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 0.4s ease;
    color: white;
}

.industry-card:hover .card-overlay {
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));
    justify-content: center;
}

.industry-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    transition: margin-bottom 0.3s ease;
}

.industry-card:hover .industry-title {
    margin-bottom: 1rem;
}

.industry-description {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    line-height: 1.5;
    transition: opacity 0.4s ease, max-height 0.4s ease;
}

.industry-card:hover .industry-description {
    opacity: 1;
    max-height: 200px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .industries-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .industry-card {
        height: 300px;
    }

    .section-title {
        font-size: 2rem;
    }
}

@media (max-width: 576px) {
    .industries-grid {
        grid-template-columns: 1fr;
    }

    .industry-card {
        height: 280px;
    }

    .section-title {
        font-size: 1.75rem;
    }

    .section-description {
        font-size: 1rem;
    }
}
</style>