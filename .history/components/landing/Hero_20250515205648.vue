<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background image with overlay -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="~/assets/img/tekfolio-hero-image.png" alt="Tekfolio Hero" class="w-full h-full object-cover" />
      <div class="overlay absolute inset-0 bg-black bg-opacity-60"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 h-full flex items-center relative z-10">
      <div class="max-w-3xl text-white">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <div class="flex flex-wrap items-center">
            <span ref="wordSwitcher" class="text-blue-400 mr-2 inline-block"></span>
            <span>Business Solutions that Work</span>
          </div>
        </h1>

        <p class="text-lg md:text-xl mt-6 mb-10 leading-relaxed">
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
  </main>
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
        duration: 0.7,
        opacity: 1,
        y: 0,
        scale: 1.05,
        ease: "power2.out"
      })
        // Hold the word visible for a moment
        .to(wordSwitcher.value, {
          duration: 1.8,
          opacity: 1,
          scale: 1,
          ease: "power1.inOut"
        })
        // Fade out and prepare for next word
        .to(wordSwitcher.value, {
          duration: 0.7,
          opacity: 0,
          y: 30,
          scale: 0.95,
          ease: "power2.in",
          onComplete: () => {
            wordSwitcher.value.textContent = words[nextIndex];
            gsap.set(wordSwitcher.value, { y: -30 }); // Reset position for next word to come from top
          }
        });
    });

    // Initialize first word to come from bottom
    gsap.set(wordSwitcher.value, { opacity: 0, y: 30 });
  }
});
</script>

<style scoped>
.btn-primary {
  background-color: #2563eb;
  /* blue-600 */
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #1d4ed8;
  /* blue-700 */
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