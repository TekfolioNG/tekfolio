<template>
  <section class="hero-section relative">
    <!-- Background image -->
    <div class="hero-image absolute inset-0 z-0">
      <img src="~/assets/img/tekfolio-hero-image.png" alt="Tekfolio Hero" class="w-full h-full object-cover" />
      <div class="overlay absolute inset-0 bg-black bg-opacity-50"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-24 md:py-32 relative z-10">
      <div class="max-w-3xl text-white">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span ref="wordSwitcher" class="text-blue-400"></span>
          Business Solutions
        </h1>

        <p class="text-lg md:text-xl mb-8 leading-relaxed">
          Achieve more with scalable, next-gen websites and apps. Our versed and innovative team of tech geeks helps
          bring your vision to life and maximise your business's full potential with modern, user-optimized software.
          Faster than you'd imagined.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/about" class="btn-primary">
            How We're Different
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary">
            Request a Demo
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

const wordSwitcher = ref(null);
const words = ['Smart', 'Simple', 'Secure'];

onMounted(() => {
  // Initialize with first word
  if (wordSwitcher.value) {
    wordSwitcher.value.textContent = words[0];

    // Create word switching timeline
    const tl = gsap.timeline({ repeat: -1 });

    words.forEach((word, index) => {
      const nextIndex = (index + 1) % words.length;

      // Add animation for current word
      tl.to(wordSwitcher.value, {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        ease: "power1.out"
      })
        // Hold the word visible for a moment
        .to(wordSwitcher.value, {
          duration: 1.5,
          opacity: 1,
          scale: 1
        })
        // Fade out and prepare for next word
        .to(wordSwitcher.value, {
          duration: 0.5,
          opacity: 0,
          scale: 0.9,
          ease: "power1.in",
          onComplete: () => {
            wordSwitcher.value.textContent = words[nextIndex];
          }
        });
    });
  }
});
</script>

<style scoped>
.hero-section {
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
}

.btn-primary {
  background-color: #2563eb;
  /* bg-blue-600 */
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #1d4ed8;
  /* bg-blue-700 */
}

.btn-secondary {
  background-color: transparent;
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid white;
  transition: background-color 0.3s, color 0.3s;
}

.btn-secondary:hover {
  background-color: white;
  color: #1d4ed8;
  /* text-blue-700 */
}
</style>