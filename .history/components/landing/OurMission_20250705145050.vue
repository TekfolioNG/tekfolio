<template>
    <section class="founder-section">
        <div class="container">
            <div class="content-wrapper">
                <div class="video-container">
                    <video ref="videoRef" class="founder-video" controls preload="metadata" :poster="posterImage">
                        <source src="/assets/video/veraverde-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="text-content">
                    <h2 class="section-title">A Word from Our Founder</h2>
                    <p class="section-description">
                        Vera Verde exists to solve real problems — from environmental degradation to low farm yields.
                        In this short video, our founder and CEO, <strong>Vera-Bill Stevens</strong>, shares the vision
                        behind our work and the impact we're striving to achieve.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Optional: Add poster image
const posterImage = ref('/assets/images/founder-poster.png') // Add if you have a poster image

// Optional: Video interaction tracking
const videoRef = ref(null)

const handleVideoPlay = () => {
    // Add analytics or other tracking here if needed
    console.log('Founder video started playing')
}

onMounted(() => {
    if (videoRef.value) {
        videoRef.value.addEventListener('play', handleVideoPlay)
    }
})

onUnmounted(() => {
    if (videoRef.value) {
        videoRef.value.removeEventListener('play', handleVideoPlay)
    }
})
</script>

<style scoped>
.founder-section {
    padding: 4rem 0;
    background: linear-gradient(135deg, #f8fffe 0%, #e8f5f0 100%);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.video-container {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.founder-video {
    width: 100%;
    height: auto;
    display: block;
}

.text-content {
    padding: 2rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2d5a3d;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.section-description {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #4a5568;
    margin: 0;
}

.section-description strong {
    color: #2d5a3d;
    font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
    .founder-section {
        padding: 3rem 0;
    }

    .container {
        padding: 0 1rem;
    }

    .content-wrapper {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .section-description {
        font-size: 1rem;
    }

    .text-content {
        padding: 1rem;
    }
}

@media (max-width: 480px) {
    .section-title {
        font-size: 1.75rem;
    }

    .founder-section {
        padding: 2rem 0;
    }
}
</style>